"use client";

import { Users, BookOpen, GraduationCap, DollarSign, TrendingUp } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { motion, Variants } from "framer-motion";

const feeData = [
  { name: "Apr", collected: 400000, pending: 240000 },
  { name: "May", collected: 300000, pending: 139800 },
  { name: "Jun", collected: 200000, pending: 98000 },
  { name: "Jul", collected: 278000, pending: 390800 },
  { name: "Aug", collected: 189000, pending: 480000 },
  { name: "Sep", collected: 239000, pending: 380000 },
  { name: "Oct", collected: 349000, pending: 430000 },
];

const studentData = [
  { name: "Class V-VIII", value: 400 },
  { name: "Class IX-X", value: 600 },
  { name: "Class XI-XII", value: 800 },
  { name: "JEE/NEET", value: 500 },
  { name: "SSC/Govt", value: 700 },
];

const COLORS = ["#1e3a8a", "#3b82f6", "#eab308", "#f97316", "#10b981"];

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

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 text-sm">Welcome back, here is what&apos;s happening today.</p>
        </div>
        <div className="flex gap-2">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors">
            Download Report
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-sm hover:bg-primary-light transition-colors">
            New Admission
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          { label: "Total Students", value: "3,250", icon: Users, color: "text-blue-600", bg: "bg-blue-100", trend: "+12%" },
          { label: "Active Teachers", value: "54", icon: GraduationCap, color: "text-green-600", bg: "bg-green-100", trend: "+2" },
          { label: "Active Batches", value: "128", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-100", trend: "0" },
          { label: "Fees Collected", value: "₹24.5L", icon: DollarSign, color: "text-orange-600", bg: "bg-orange-100", trend: "+18%" },
        ].map((stat, i) => (
          <motion.div key={i} variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" /> {stat.trend}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Fee Collection Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={feeData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} tickFormatter={(value) => `₹${value/1000}k`} />
                <RechartsTooltip cursor={{fill: '#f3f4f6'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="collected" name="Collected" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pending" name="Pending" fill="#93c5fd" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Students by Course</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={studentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {studentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {studentData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm hover:bg-gray-50 p-1 rounded transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-semibold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Recent Admissions Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Recent Admissions</h3>
          <button className="text-primary text-sm font-semibold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 font-semibold text-gray-500 text-sm">Student Name</th>
                <th className="py-3 px-4 font-semibold text-gray-500 text-sm">Course</th>
                <th className="py-3 px-4 font-semibold text-gray-500 text-sm">Date</th>
                <th className="py-3 px-4 font-semibold text-gray-500 text-sm">Fee Status</th>
                <th className="py-3 px-4 font-semibold text-gray-500 text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Rahul Sharma", course: "JEE Main Target", date: "Oct 24, 2026", status: "Paid", color: "bg-green-100 text-green-700" },
                { name: "Priya Singh", course: "Class XII Science", date: "Oct 23, 2026", status: "Partial", color: "bg-yellow-100 text-yellow-700" },
                { name: "Amit Kumar", course: "SSC CGL", date: "Oct 23, 2026", status: "Due", color: "bg-red-100 text-red-700" },
                { name: "Sneha Verma", course: "Class X Foundation", date: "Oct 22, 2026", status: "Paid", color: "bg-green-100 text-green-700" },
              ].map((student, idx) => (
                <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer group">
                  <td className="py-3 px-4">
                    <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{student.name}</div>
                    <div className="text-xs text-gray-500">ID: STU-{2026000 + idx}</div>
                  </td>
                  <td className="py-3 px-4 text-gray-600 text-sm">{student.course}</td>
                  <td className="py-3 px-4 text-gray-600 text-sm">{student.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${student.color}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-primary hover:text-primary-light text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
