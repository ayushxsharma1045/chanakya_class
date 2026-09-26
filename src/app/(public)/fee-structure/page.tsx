import Link from "next/link";
import { Info } from "lucide-react";

export default function FeeStructurePage() {
  const fees = [
    { course: "Class V", admission: "₹2,000", monthly: "₹1,500", total: "₹17,000", duration: "10 Months" },
    { course: "Class VI", admission: "₹2,000", monthly: "₹1,500", total: "₹17,000", duration: "10 Months" },
    { course: "Class VII", admission: "₹2,500", monthly: "₹1,800", total: "₹20,500", duration: "10 Months" },
    { course: "Class VIII", admission: "₹2,500", monthly: "₹1,800", total: "₹20,500", duration: "10 Months" },
    { course: "Class IX", admission: "₹3,000", monthly: "₹2,000", total: "₹23,000", duration: "10 Months" },
    { course: "Class X", admission: "₹3,000", monthly: "₹2,500", total: "₹28,000", duration: "10 Months" },
    { course: "Class XI", admission: "₹5,000", monthly: "₹3,500", total: "₹47,000", duration: "12 Months" },
    { course: "Class XII", admission: "₹5,000", monthly: "₹4,000", total: "₹53,000", duration: "12 Months" },
    { course: "JEE Main", admission: "₹10,000", monthly: "₹6,000", total: "₹82,000", duration: "12 Months" },
    { course: "SSC Target", admission: "₹5,000", monthly: "₹3,000", total: "₹41,000", duration: "12 Months" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fee Structure</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Transparent and affordable fee structure for all our courses.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100">
          
          <div className="mb-6 p-4 bg-blue-50 text-blue-800 rounded-lg flex items-start gap-3 border border-blue-100">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold mb-1">Important Information regarding fees:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The admission fee is a one-time non-refundable payment.</li>
                <li>Monthly fees must be paid before the 10th of every month to avoid late fines.</li>
                <li>Special discounts are available for one-time full payments (Contact office).</li>
                <li>The fees shown below are sample data. Please verify with the administration.</li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-900 border-b-2 border-gray-200">
                  <th className="p-4 font-bold rounded-tl-lg">Course / Class</th>
                  <th className="p-4 font-bold">Duration</th>
                  <th className="p-4 font-bold">Admission Fee</th>
                  <th className="p-4 font-bold">Monthly Fee</th>
                  <th className="p-4 font-bold text-primary text-right rounded-tr-lg">Total Fee (Approx)</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">{fee.course}</td>
                    <td className="p-4 text-gray-600">{fee.duration}</td>
                    <td className="p-4 text-gray-600">{fee.admission}</td>
                    <td className="p-4 text-gray-600">{fee.monthly}</td>
                    <td className="p-4 text-right font-bold text-primary">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Have questions about our fee structure?</h3>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-primary-light transition-colors">
              Contact Administration
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
