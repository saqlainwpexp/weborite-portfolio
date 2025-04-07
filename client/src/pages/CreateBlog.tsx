import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/SimpleFooter";
import { useToast } from "@/hooks/use-toast";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  featuredImage: z.string().optional(),
  metaTitle: z.string().min(1, "Meta title is required"),
  metaDescription: z.string().min(1, "Meta description is required"),
  keywords: z.string().min(1, "Keywords are required"),
  categoryId: z.number().min(1, "Category is required"),
  published: z.boolean().default(false)
});

type BlogFormValues = z.infer<typeof blogSchema>;

const CreateBlog = () => {
  const { toast } = useToast();
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema)
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load categories",
          variant: "destructive"
        });
      }
    };

    fetchCategories();
  }, [toast]);

  const onSubmit = async (data: BlogFormValues) => {
    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error("Failed to create blog post");

      toast({
        title: "Success",
        description: "Blog post created successfully"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create blog post",
        variant: "destructive"
      });
    }
  };

  const createCategory = async () => {
    if (!newCategory) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newCategory }),
      });
      
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create category');
      }

      setCategories([...categories, data]);
      setNewCategory('');
      setValue('categoryId', data.id);
      
      toast({
        title: "Success",
        description: "Category created successfully"
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create category",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0c0e0c] text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Create Blog Post</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-2">Title</label>
            <input
              {...register("title")}
              className="w-full p-2 bg-[#1a1a1a] rounded"
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block mb-2">Featured Image</label>
            <input
              type="file"
              accept="image/*,.webp"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const formData = new FormData();
                  formData.append('image', file);
                  try {
                    const response = await fetch('/api/upload', {
                      method: 'POST',
                      body: formData
                    });
                    const { url } = await response.json();
                    setValue('featuredImage', url);
                  } catch (error) {
                    toast({
                      title: "Error",
                      description: "Failed to upload image",
                      variant: "destructive"
                    });
                  }
                }
              }}
              className="w-full p-2 bg-[#1a1a1a] rounded"
            />
          </div>

          <div>
            <label className="block mb-2">Content</label>
            <textarea
              {...register("content")}
              className="w-full p-2 bg-[#1a1a1a] rounded h-48"
            />
            {errors.content && <p className="text-red-500">{errors.content.message}</p>}
          </div>

          <div>
            <label className="block mb-2">Excerpt</label>
            <textarea
              {...register("excerpt")}
              className="w-full p-2 bg-[#1a1a1a] rounded"
            />
            {errors.excerpt && <p className="text-red-500">{errors.excerpt.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Meta Title</label>
              <input
                {...register("metaTitle")}
                className="w-full p-2 bg-[#1a1a1a] rounded"
              />
              {errors.metaTitle && <p className="text-red-500">{errors.metaTitle.message}</p>}
            </div>

            <div>
              <label className="block mb-2">Meta Description</label>
              <input
                {...register("metaDescription")}
                className="w-full p-2 bg-[#1a1a1a] rounded"
              />
              {errors.metaDescription && <p className="text-red-500">{errors.metaDescription.message}</p>}
            </div>
          </div>

          <div>
            <label className="block mb-2">Keywords (comma-separated)</label>
            <input
              {...register("keywords")}
              className="w-full p-2 bg-[#1a1a1a] rounded"
            />
            {errors.keywords && <p className="text-red-500">{errors.keywords.message}</p>}
          </div>

          <div>
            <label className="block mb-2">Category</label>
            <div className="flex gap-4">
              <select
                {...register("categoryId", { 
                  required: "Please select a category",
                  valueAsNumber: true,
                  validate: value => !isNaN(value) || "Please select a valid category"
                })}
                className="w-full p-2 bg-[#1a1a1a] rounded"
              >
                <option value="">Select category</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="New category"
                  className="p-2 bg-[#1a1a1a] rounded"
                />
                <button
                  type="button"
                  onClick={createCategory}
                  disabled={isLoading || !newCategory.trim()}
                  className={`px-4 py-2 ${isLoading || !newCategory.trim() ? 'bg-gray-600' : 'bg-[#00ff4c]'} text-black rounded`}
                >
                  {isLoading ? 'Adding...' : 'Add'}
                </button>
              </div>
            </div>
            {errors.categoryId && <p className="text-red-500">{errors.categoryId.message}</p>}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="px-6 py-2 bg-[#00ff4c] text-black rounded"
            >
              Publish
            </button>
            <button
              type="submit"
              onClick={() => setValue("published", false)}
              className="px-6 py-2 bg-[#1a1a1a] rounded"
            >
              Save Draft
            </button>
          </div>
        </form>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default CreateBlog;