"use client";

import { Users, BookOpen, Calendar, ClipboardCheck } from "lucide-react";
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

export default function TeacherDashboardPage() {
  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-600 text-sm">Manage your classes, students, and materials.</p>
        </div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-sm hover:bg-primary-light transition-colors">
          Upload Material
        </motion.button>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          { label: "Assigned Classes", value: "4", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100" },
          { label: "Total Students", value: "120", icon: Users, color: "text-green-600", bg: "bg-green-100" },
          { label: "Classes Today", value: "3", icon: Calendar, color: "text-purple-600", bg: "bg-purple-100" },
          { label: "Pending Assignments", value: "15", icon: ClipboardCheck, color: "text-orange-600", bg: "bg-orange-100" },
        ].map((stat, i) => (
          <motion.div key={i} variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} mb-4`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Today&apos;s Schedule</h3>
          <div className="space-y-4">
            {[
              { time: "09:00 AM - 10:30 AM", class: "Class XII Science", subject: "Physics", room: "Room 101" },
              { time: "11:00 AM - 12:30 PM", class: "JEE Main Target", subject: "Physics", room: "Room 105" },
              { time: "02:00 PM - 03:30 PM", class: "Class XI Science", subject: "Physics", room: "Room 102" },
            ].map((schedule, i) => (
              <motion.div key={i} whileHover={{ x: 5 }} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-all cursor-pointer bg-white hover:border-primary/20">
                <div className="w-16 text-center shrink-0 border-r border-gray-200 pr-4">
                  <span className="text-xs font-bold text-primary block">{schedule.time.split('-')[0]}</span>
                  <span className="text-xs text-gray-500 block">to</span>
                  <span className="text-xs font-bold text-primary block">{schedule.time.split('-')[1]}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{schedule.class}</h4>
                  <p className="text-sm text-gray-600">{schedule.subject} | {schedule.room}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Announcements</h3>
          <div className="space-y-4">
             <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-blue-50 border border-blue-100 rounded-xl cursor-pointer">
               <h4 className="font-bold text-blue-900 mb-1">Staff Meeting Today</h4>
               <p className="text-sm text-blue-800">There will be a brief staff meeting at 4:00 PM in the staff room to discuss the upcoming mock tests.</p>
             </motion.div>
             <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-orange-50 border border-orange-100 rounded-xl cursor-pointer">
               <h4 className="font-bold text-orange-900 mb-1">Upload Revision Notes</h4>
               <p className="text-sm text-orange-800">All teachers are requested to upload the revision notes for Class XII before Friday.</p>
             </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
