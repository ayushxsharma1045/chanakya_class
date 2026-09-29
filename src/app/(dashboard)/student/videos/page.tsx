"use client";

import { PlayCircle, Clock } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function VideosPage() {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Video Lectures</h1>
        <p className="text-gray-600 text-sm mt-1">Watch recorded classes and revision videos.</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[
          { title: "Electromagnetic Induction Part 2", subject: "Physics", duration: "1h 15m" },
          { title: "Definite Integrals Properties", subject: "Mathematics", duration: "55m" },
          { title: "Chemical Kinetics Revision", subject: "Chemistry", duration: "1h 30m" },
          { title: "Optics Problem Solving", subject: "Physics", duration: "2h 00m" },
          { title: "Algebra Basics", subject: "Mathematics", duration: "45m" },
        ].map((video, i) => (
          <motion.div key={i} variants={itemVariants} whileHover={{ y: -5 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-md transition-all">
            <div className="h-40 bg-gray-900 relative flex items-center justify-center">
              <img src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&q=80`} alt="thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
              <PlayCircle className="w-12 h-12 text-white z-10 shadow-sm opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all" />
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1 z-10">
                <Clock className="w-3 h-3" /> {video.duration}
              </div>
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-md mb-2 inline-block">{video.subject}</span>
              <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mt-1">{video.title}</h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
