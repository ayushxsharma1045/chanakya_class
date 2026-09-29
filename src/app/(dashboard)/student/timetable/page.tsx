"use client";

import { Calendar, Clock } from "lucide-react";
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

export default function TimetablePage() {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Timetable</h1>
        <p className="text-gray-600 text-sm mt-1">View your weekly class schedule.</p>
      </motion.div>

      {/* Weekly Time Table */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-green-600" />
          <h2 className="text-xl font-bold text-gray-900">Weekly Class Timetable</h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-sm">
                  <th className="py-3 px-4 font-semibold text-gray-600">Day</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">Time</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">Subject</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">Teacher</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">Room / Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { day: "Monday", time: "02:00 PM - 03:30 PM", subject: "Physics (Optics)", teacher: "Dr. Ramesh", room: "Room 105" },
                  { day: "Tuesday", time: "04:00 PM - 05:30 PM", subject: "Maths (Calculus)", teacher: "Mr. Sharma", room: "Room 102" },
                  { day: "Wednesday", time: "02:00 PM - 03:30 PM", subject: "Chemistry", teacher: "Mrs. Gupta", room: "Room 101" },
                  { day: "Thursday", time: "04:00 PM - 05:30 PM", subject: "Physics (Thermodynamics)", teacher: "Dr. Ramesh", room: "Room 105" },
                  { day: "Friday", time: "05:00 PM - 06:30 PM", subject: "Maths (Algebra)", teacher: "Mr. Sharma", room: "Online Zoom" },
                ].map((schedule, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors text-sm group">
                    <td className="py-3 px-4 font-medium text-gray-900">{schedule.day}</td>
                    <td className="py-3 px-4 text-gray-600 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-400" /> {schedule.time}
                    </td>
                    <td className="py-3 px-4 font-semibold text-primary">{schedule.subject}</td>
                    <td className="py-3 px-4 text-gray-600">{schedule.teacher}</td>
                    <td className="py-3 px-4 text-gray-600">
                      <span className="px-2.5 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700">
                        {schedule.room}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
