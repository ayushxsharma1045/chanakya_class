"use client";

import { BookOpen, ShoppingBag, Clock, CheckCircle } from "lucide-react";
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

export default function CoursePage() {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
        <p className="text-gray-600 text-sm mt-1">Manage your enrolled courses and explore new ones.</p>
      </motion.div>

      {/* 1. My Purchased Courses */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-gray-900">Purchased Courses</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-gradient-to-br from-primary-950 via-primary-800 to-primary-600 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <p className="text-white/80 font-medium text-xs mb-1 uppercase tracking-wider">Active</p>
                <h3 className="text-xl font-bold">JEE Main Target Batch</h3>
              </div>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
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
              <p className="text-xs text-white/70 mt-3 pt-2 border-t border-white/20">Next class: Physics (Optics) at 2:00 PM</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-primary font-bold text-xs mb-1 uppercase tracking-wider">Active</p>
                <h3 className="text-xl font-bold text-gray-900">Class XII Mathematics</h3>
              </div>
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Progress</span>
                <span className="font-bold text-gray-900">30%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "30%" }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-primary rounded-full"
                ></motion.div>
              </div>
              <p className="text-xs text-gray-500 mt-3 pt-2 border-t border-gray-100">Next class: Calculus tomorrow at 4:00 PM</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 2. Explore / Purchase Courses */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-bold text-gray-900">Explore New Courses</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "SSC CGL Target Batch", category: "Competitive Exams", price: "₹41,000", duration: "12 Months", color: "border-orange-100 bg-orange-50/30" },
            { title: "Class XI Science Foundation", category: "Senior Secondary", price: "₹45,000", duration: "12 Months", color: "border-blue-100 bg-blue-50/30" },
            { title: "Crash Course: NEET 2027", category: "Medical", price: "₹15,000", duration: "3 Months", color: "border-green-100 bg-green-50/30" },
          ].map((course, i) => (
            <motion.div key={i} variants={itemVariants} whileHover={{ y: -5 }} className={`bg-white p-5 rounded-2xl shadow-sm border ${course.color} flex flex-col justify-between hover:shadow-md transition-all`}>
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-white rounded-full border border-gray-200 text-gray-600 mb-3 inline-block">{course.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-4"><Clock className="w-4 h-4 inline mr-1 -mt-0.5" /> {course.duration}</p>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-lg font-black text-gray-900">{course.price}</span>
                <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors shadow-sm">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
