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
          <p className="text-gray-600 text-sm mt-1">Welcome back to your learning portal.</p>
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

      {/* Quick Links */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <Link href="/student/course">
          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 hover:border-primary transition-colors cursor-pointer">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><BookOpen className="w-5 h-5"/></div>
            <span className="font-semibold text-gray-800">My Courses</span>
          </motion.div>
        </Link>
        <Link href="/student/timetable">
          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 hover:border-primary transition-colors cursor-pointer">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg"><Calendar className="w-5 h-5"/></div>
            <span className="font-semibold text-gray-800">Timetable</span>
          </motion.div>
        </Link>
        <Link href="/student/notes">
          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 hover:border-primary transition-colors cursor-pointer">
            <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg"><FileText className="w-5 h-5"/></div>
            <span className="font-semibold text-gray-800">Study Materials</span>
          </motion.div>
        </Link>
        <Link href="/student/videos">
          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 hover:border-primary transition-colors cursor-pointer">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><PlayCircle className="w-5 h-5"/></div>
            <span className="font-semibold text-gray-800">Video Lectures</span>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
