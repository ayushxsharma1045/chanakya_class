"use client";

import { CreditCard, Download, Receipt, AlertCircle } from "lucide-react";
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

export default function FeesPage() {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Fee Details</h1>
        <p className="text-gray-600 text-sm mt-1">Manage your course fees and view payment history.</p>
      </motion.div>

      {/* Fee Summary Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
          <p className="text-gray-500 font-medium text-sm mb-1">Total Fee Amount</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">₹82,000</h3>
          <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
          </div>
          <p className="text-xs text-gray-500 text-right">40% Paid</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-1">
            <p className="text-green-700 font-medium text-sm">Total Paid</p>
            <Receipt className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-green-800">₹32,800</h3>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-red-50 p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col justify-center relative overflow-hidden">
          <div className="flex items-center justify-between mb-1 relative z-10">
            <p className="text-red-700 font-medium text-sm">Pending Dues</p>
            <AlertCircle className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-red-800 relative z-10">₹49,200</h3>
          <button className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors relative z-10 shadow-sm w-max">
            Pay Now
          </button>
        </motion.div>
      </motion.div>

      {/* Payment History Table */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-gray-900">Payment History</h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-sm">
                  <th className="py-3 px-4 font-semibold text-gray-600">Transaction ID</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">Date</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">Amount</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">Method</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">Status</th>
                  <th className="py-3 px-4 font-semibold text-gray-600 text-center">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { id: "TXN-20261024", date: "Oct 24, 2026", amount: "₹10,000", method: "UPI", status: "Success" },
                  { id: "TXN-20260920", date: "Sep 20, 2026", amount: "₹12,800", method: "Credit Card", status: "Success" },
                  { id: "TXN-20260815", date: "Aug 15, 2026", amount: "₹10,000", method: "Net Banking", status: "Success" },
                ].map((payment, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors text-sm">
                    <td className="py-3 px-4 font-medium text-gray-900">{payment.id}</td>
                    <td className="py-3 px-4 text-gray-600">{payment.date}</td>
                    <td className="py-3 px-4 font-semibold text-gray-900">{payment.amount}</td>
                    <td className="py-3 px-4 text-gray-600">{payment.method}</td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-md text-xs font-semibold">
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-400 hover:text-primary transition-colors inline-flex p-1.5 rounded-md hover:bg-gray-100">
                        <Download className="w-4 h-4" />
                      </button>
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
