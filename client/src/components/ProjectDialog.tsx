
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    overview: string;
    stats: {
      raised: string;
      growth: string;
    };
    image: string;
    websiteUrl: string;
  };
}

const ProjectDialog = ({ isOpen, onClose, project }: ProjectDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-[#0c0e0c] border-[#2c2e2c] p-0 overflow-hidden">
        <div className="relative">
          <h2 className="text-3xl font-bold text-center py-8">
            OUR RECENT STORY WITH {project.title.toUpperCase()}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400">Digital ID Verification Platform</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xl font-semibold text-[#00ff4c]">{project.stats.raised}</div>
                  <div className="text-sm text-gray-400">Raised in seed funding</div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-[#00ff4c]">{project.stats.growth}</div>
                  <div className="text-sm text-gray-400">growth in brand leads</div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-2">Overview</h4>
                <p className="text-gray-400 text-sm">{project.overview}</p>
              </div>

              <motion.a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-black rounded-full text-white hover:bg-[#00ff4c]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse the website
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </div>
            
            <div className="relative aspect-[4/3]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
