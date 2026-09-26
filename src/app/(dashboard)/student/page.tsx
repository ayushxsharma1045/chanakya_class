"use client";

import { BookOpen, Calendar, FileText, PlayCircle, Download } from "lucide-react";
import Link from "next/link";
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

export default function StudentDashboardPage() {
  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
          <p className="text-gray-600 text-sm">Welcome back to your learning portal.</p>
        </div>
      </motion.div>

      {/* Progress Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-gradient-to-br from-primary-950 via-primary-800 to-primary-600 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <p className="text-white/80 font-medium text-sm mb-1">Current Course</p>
              <h3 className="text-2xl font-bold">JEE Main Target</h3>
            </div>
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="space-y-2 relative z-10">
            <div className="flex justify-between text-sm">
              <span>Syllabus Completed</span>
              <span className="font-bold">65%</span>
            </div>
            <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="h-full bg-accent rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]"
              ></motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-500 font-medium text-sm">Next Class</p>
              <h3 className="text-xl font-bold text-gray-900">Physics (Optics)</h3>
            </div>
          </div>
          <p className="text-sm text-gray-600">Today, 02:00 PM - 03:30 PM | Room 105</p>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-500 font-medium text-sm">Upcoming Test</p>
              <h3 className="text-xl font-bold text-gray-900">Mock Test 4</h3>
            </div>
          </div>
          <p className="text-sm text-gray-600">Sunday, Oct 28 | Online</p>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Recent Study Material */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Recent Study Material</h3>
            <Link href="/student/notes" className="text-primary text-sm font-semibold hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {[
              { title: "Ray Optics Chapter Notes", subject: "Physics", date: "Oct 24", type: "PDF" },
              { title: "Integration Formulas Sheet", subject: "Mathematics", date: "Oct 22", type: "PDF" },
              { title: "Organic Chemistry Revision", subject: "Chemistry", date: "Oct 20", type: "PDF" },
            ].map((note, i) => (
              <motion.div key={i} whileHover={{ x: 5 }} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors">{note.title}</h4>
                    <p className="text-xs text-gray-500">{note.subject} • {note.date}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-primary transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Video Lectures */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Recent Video Lectures</h3>
            <Link href="/student/videos" className="text-primary text-sm font-semibold hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {[
              { title: "Electromagnetic Induction Part 2", subject: "Physics", duration: "1h 15m" },
              { title: "Definite Integrals Properties", subject: "Mathematics", duration: "55m" },
              { title: "Chemical Kinetics Revision", subject: "Chemistry", duration: "1h 30m" },
            ].map((video, i) => (
              <motion.div key={i} whileHover={{ x: 5 }} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer">
                <div className="w-24 h-16 bg-gray-200 rounded-lg relative overflow-hidden shrink-0 flex items-center justify-center">
                   <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/20 transition-colors"></div>
                   <PlayCircle className="w-8 h-8 text-white z-10 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors line-clamp-1">{video.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{video.subject} • {video.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
