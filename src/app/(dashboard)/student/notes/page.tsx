"use client";

import { FileText, Download } from "lucide-react";
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

export default function NotesPage() {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Study Materials</h1>
        <p className="text-gray-600 text-sm mt-1">Access your class notes, PDFs, and extra materials.</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[
          { title: "Ray Optics Chapter Notes", subject: "Physics", date: "Oct 24", type: "PDF" },
          { title: "Integration Formulas Sheet", subject: "Mathematics", date: "Oct 22", type: "PDF" },
          { title: "Organic Chemistry Revision", subject: "Chemistry", date: "Oct 20", type: "PDF" },
          { title: "Thermodynamics Summary", subject: "Physics", date: "Oct 15", type: "PDF" },
          { title: "Calculus Past Papers", subject: "Mathematics", date: "Oct 10", type: "ZIP" },
        ].map((note, i) => (
          <motion.div key={i} variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all flex flex-col justify-between group">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">{note.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{note.subject}</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-xs font-medium text-gray-400">{note.date} • {note.type}</span>
              <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors">
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
