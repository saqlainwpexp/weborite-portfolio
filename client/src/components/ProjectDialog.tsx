
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
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.overview}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-[#00ff4c]">
                  <span className="font-semibold mr-2">{project.stats.raised}</span>
                  <span className="text-sm">Raised in seed funding</span>
                </div>
                <div className="flex items-center text-[#00ff4c]">
                  <span className="font-semibold mr-2">{project.stats.growth}</span>
                  <span className="text-sm">growth in brand leads</span>
                </div>
              </div>
              
              <motion.a
                href={project.websiteUrl}
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
