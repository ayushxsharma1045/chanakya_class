import Link from "next/link";
import { BookOpen, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";

export default function CoursesPage() {
  const categories = [
    {
      title: "School Education",
      description: "Foundation courses for bright young minds.",
      courses: [
        { name: "Class V to VIII Foundation", duration: "10 Months", mode: "Offline/Online" },
        { name: "Class IX & X Target", duration: "10 Months", mode: "Offline/Online" },
      ]
    },
    {
      title: "Senior Secondary",
      description: "Specialized coaching for board exams.",
      courses: [
        { name: "Class XI (Science/Commerce)", duration: "12 Months", mode: "Offline/Online" },
        { name: "Class XII (Science/Commerce)", duration: "12 Months", mode: "Offline/Online" },
      ]
    },
    {
      title: "Engineering Preparation",
      description: "Rigorous training for top engineering entrance exams.",
      courses: [
        { name: "JEE Main Target Batch", duration: "12 Months", mode: "Offline" },
        { name: "JEE Advanced Focus", duration: "6 Months", mode: "Offline" },
      ]
    },
    {
      title: "Competitive Exams (SSC)",
      description: "Dedicated batches for government job aspirants.",
      courses: [
        { name: "SSC CGL Complete Batch", duration: "8 Months", mode: "Offline/Online" },
        { name: "SSC CHSL / MTS", duration: "6 Months", mode: "Offline/Online" },
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Comprehensive programs designed to help you excel in your academic journey and competitive exams.
          </p>
        </div>
      </div>

      {/* Courses List */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary">
                  {idx === 0 && <BookOpen className="w-6 h-6" />}
                  {idx === 1 && <Users className="w-6 h-6" />}
                  {idx === 2 && <Award className="w-6 h-6" />}
                  {idx === 3 && <CheckCircle2 className="w-6 h-6" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.courses.map((course, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-5 hover:border-primary/50 transition-colors group">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">{course.name}</h3>
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                      <span><strong className="text-gray-900">Duration:</strong> {course.duration}</span>
                      <span><strong className="text-gray-900">Mode:</strong> {course.mode}</span>
                    </div>
                    <Link href={`/courses`} className="text-primary font-medium text-sm flex items-center gap-1 group-hover:underline">
                      View Course Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
