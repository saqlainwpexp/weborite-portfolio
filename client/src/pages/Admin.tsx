import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface TeamMember {
  id?: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface PortfolioProject {
  id?: number;
  title: string;
  category: string;
  image: string;
  stats: string;
}

interface Testimonial {
  id?: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

interface Service {
  id?: number;
  title: string;
  description: string;
  icon: string;
}

const Admin = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Active tab state
  const [activeTab, setActiveTab] = useState('team');

  // Data states - Initialize as empty arrays
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [portfolioProjects, setPortfolioProjects] = useState<PortfolioProject[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  // Form states
  const [teamForm, setTeamForm] = useState<TeamMember>({
    name: '',
    role: '',
    image: '',
    bio: ''
  });

  const [portfolioForm, setPortfolioForm] = useState<PortfolioProject>({
    title: '',
    category: '',
    image: '',
    stats: ''
  });

  const [testimonialForm, setTestimonialForm] = useState<Testimonial>({
    name: '',
    role: '',
    company: '',
    image: '',
    quote: '',
    rating: 5
  });

  const [serviceForm, setServiceForm] = useState<Service>({
    title: '',
    description: '',
    icon: ''
  });

  // Editing states
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Token management
  const getToken = () => localStorage.getItem('adminToken');
  const setToken = (token: string) => localStorage.setItem('adminToken', token);
  const removeToken = () => localStorage.removeItem('adminToken');

  // Authentication
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      setToken(response.data.token);
      setIsAuthenticated(true);
      toast.success('Logged in successfully');
      fetchData();
    } catch (error) {
      toast.error('Invalid credentials');
    }
  };

  const handleLogout = () => {
    removeToken();
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
  };

  // Data fetching
  const fetchData = async () => {
    try {
      const token = getToken();
      const headers = { Authorization: `Bearer ${token}` };

      const [teamRes, portfolioRes, testimonialsRes, servicesRes] = await Promise.all([
        axios.get('/api/team', { headers }),
        axios.get('/api/portfolio', { headers }),
        axios.get('/api/testimonials', { headers }),
        axios.get('/api/services', { headers })
      ]);

      // Ensure we're setting arrays, even if the response is null/undefined
      setTeamMembers(Array.isArray(teamRes.data) ? teamRes.data : []);
      setPortfolioProjects(Array.isArray(portfolioRes.data) ? portfolioRes.data : []);
      setTestimonials(Array.isArray(testimonialsRes.data) ? testimonialsRes.data : []);
      setServices(Array.isArray(servicesRes.data) ? servicesRes.data : []);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Set empty arrays on error
      setTeamMembers([]);
      setPortfolioProjects([]);
      setTestimonials([]);
      setServices([]);
      toast.error('Failed to fetch data');
    }
  };

  // Check authentication on mount
  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  // Generic CRUD operations
  const handleCreate = async (type: string, data: any) => {
    try {
      const token = getToken();
      const headers = { Authorization: `Bearer ${token}` };
      await axios.post(`/api/${type}`, data, { headers });
      toast.success('Item created successfully');
      fetchData();
      resetForm(type);
    } catch (error) {
      toast.error('Failed to create item');
    }
  };

  const handleUpdate = async (type: string, id: number, data: any) => {
    try {
      const token = getToken();
      const headers = { Authorization: `Bearer ${token}` };
      await axios.put(`/api/${type}/${id}`, data, { headers });
      toast.success('Item updated successfully');
      fetchData();
      resetForm(type);
      setIsEditing(false);
      setEditingId(null);
    } catch (error) {
      toast.error('Failed to update item');
    }
  };

  const handleDelete = async (type: string, id: number) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const token = getToken();
        const headers = { Authorization: `Bearer ${token}` };
        await axios.delete(`/api/${type}/${id}`, { headers });
        toast.success('Item deleted successfully');
        fetchData();
      } catch (error) {
        toast.error('Failed to delete item');
      }
    }
  };

  const handleEdit = (type: string, item: any) => {
    setIsEditing(true);
    setEditingId(item.id);
    switch (type) {
      case 'team':
        setTeamForm(item);
        break;
      case 'portfolio':
        setPortfolioForm(item);
        break;
      case 'testimonials':
        setTestimonialForm(item);
        break;
      case 'services':
        setServiceForm(item);
        break;
    }
    setActiveTab(type);
  };

  const resetForm = (type: string) => {
    switch (type) {
      case 'team':
        setTeamForm({
          name: '',
          role: '',
          image: '',
          bio: ''
        });
        break;
      case 'portfolio':
        setPortfolioForm({
          title: '',
          category: '',
          image: '',
          stats: ''
        });
        break;
      case 'testimonials':
        setTestimonialForm({
          name: '',
          role: '',
          company: '',
          image: '',
          quote: '',
          rating: 5
        });
        break;
      case 'services':
        setServiceForm({
          title: '',
          description: '',
          icon: ''
        });
        break;
    }
    setIsEditing(false);
    setEditingId(null);
  };

  // Form submission handlers
  const handleTeamSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && editingId) {
      handleUpdate('team', editingId, teamForm);
    } else {
      handleCreate('team', teamForm);
    }
  };

  const handlePortfolioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && editingId) {
      handleUpdate('portfolio', editingId, portfolioForm);
    } else {
      handleCreate('portfolio', portfolioForm);
    }
  };

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && editingId) {
      handleUpdate('testimonials', editingId, testimonialForm);
    } else {
      handleCreate('testimonials', testimonialForm);
    }
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && editingId) {
      handleUpdate('services', editingId, serviceForm);
    } else {
      handleCreate('services', serviceForm);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0c0e0c] flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-[#1a1c1a] p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6">Admin Login</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white focus:outline-none focus:border-[#00ff4c]"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white focus:outline-none focus:border-[#00ff4c]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0e0c] p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          {['team', 'portfolio', 'testimonials', 'services'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                resetForm(tab);
              }}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#1a1c1a] text-gray-300 hover:bg-[#2a2c2a]'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-[#1a1c1a] p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-6">
              {isEditing ? 'Edit' : 'Add'} {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>

            {/* Team Form */}
            {activeTab === 'team' && (
              <form onSubmit={handleTeamSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={teamForm.name}
                    onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Role</label>
                  <input
                    type="text"
                    value={teamForm.role}
                    onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Image URL</label>
                  <input
                    type="text"
                    value={teamForm.image}
                    onChange={(e) => setTeamForm({ ...teamForm, image: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Bio</label>
                  <textarea
                    value={teamForm.bio}
                    onChange={(e) => setTeamForm({ ...teamForm, bio: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    rows={3}
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  >
                    {isEditing ? 'Update' : 'Add'} Member
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => resetForm('team')}
                      className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            )}

            {/* Portfolio Form */}
            {activeTab === 'portfolio' && (
              <form onSubmit={handlePortfolioSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={portfolioForm.title}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, title: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Category</label>
                  <input
                    type="text"
                    value={portfolioForm.category}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, category: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Image URL</label>
                  <input
                    type="text"
                    value={portfolioForm.image}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, image: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Stats</label>
                  <input
                    type="text"
                    value={portfolioForm.stats}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, stats: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  >
                    {isEditing ? 'Update' : 'Add'} Project
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => resetForm('portfolio')}
                      className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            )}

            {/* Testimonials Form */}
            {activeTab === 'testimonials' && (
              <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={testimonialForm.name}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Role</label>
                  <input
                    type="text"
                    value={testimonialForm.role}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    value={testimonialForm.company}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Image URL</label>
                  <input
                    type="text"
                    value={testimonialForm.image}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, image: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Quote</label>
                  <textarea
                    value={testimonialForm.quote}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, quote: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Rating (1-5)</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={testimonialForm.rating}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, rating: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  >
                    {isEditing ? 'Update' : 'Add'} Testimonial
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => resetForm('testimonials')}
                      className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            )}

            {/* Services Form */}
            {activeTab === 'services' && (
              <form onSubmit={handleServiceSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={serviceForm.title}
                    onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Description</label>
                  <textarea
                    value={serviceForm.description}
                    onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Icon</label>
                  <input
                    type="text"
                    value={serviceForm.icon}
                    onChange={(e) => setServiceForm({ ...serviceForm, icon: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#0c0e0c] border border-gray-700 text-white"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  >
                    {isEditing ? 'Update' : 'Add'} Service
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => resetForm('services')}
                      className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* List Section */}
          <div className="bg-[#1a1c1a] p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-6">
              Existing {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>

            <div className="space-y-4">
              {/* Team List */}
              {activeTab === 'team' &&
                teamMembers.map((member) => (
                  <div key={member.id} className="bg-[#0c0e0c] p-4 rounded flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-semibold">{member.name}</h3>
                      <p className="text-gray-400">{member.role}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit('team', member)}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete('team', member.id!)}
                        className="text-red-400 hover:text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

              {/* Portfolio List */}
              {activeTab === 'portfolio' &&
                portfolioProjects.map((project) => (
                  <div key={project.id} className="bg-[#0c0e0c] p-4 rounded flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-semibold">{project.title}</h3>
                      <p className="text-gray-400">{project.category}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit('portfolio', project)}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete('portfolio', project.id!)}
                        className="text-red-400 hover:text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

              {/* Testimonials List */}
              {activeTab === 'testimonials' &&
                testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-[#0c0e0c] p-4 rounded flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.company}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit('testimonials', testimonial)}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete('testimonials', testimonial.id!)}
                        className="text-red-400 hover:text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

              {/* Services List */}
              {activeTab === 'services' &&
                services.map((service) => (
                  <div key={service.id} className="bg-[#0c0e0c] p-4 rounded flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-semibold">{service.title}</h3>
                      <p className="text-gray-400">{service.description.substring(0, 100)}...</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit('services', service)}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete('services', service.id!)}
                        className="text-red-400 hover:text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin; 