import Image from "next/image";
import { CheckCircle2, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Chanakya Classes</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            A legacy of excellence, shaping the minds of tomorrow through quality education and discipline.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-primary-950 mb-6">Our Journey</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Established with the vision to provide high-quality education to students, Chanakya Classes has grown to become a premier coaching institute. We believe that every student has the potential to excel given the right guidance and environment.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Over the past decade, we have nurtured thousands of students, helping them achieve top ranks in competitive exams and board examinations. Our highly qualified faculty, modern teaching methodologies, and focus on individual student growth set us apart.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-800 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-accent" /> 10+ Years Experience
              </div>
              <div className="flex items-center gap-2 text-gray-800 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-accent" /> Expert Faculty
              </div>
              <div className="flex items-center gap-2 text-gray-800 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-accent" /> Proven Results
              </div>
              <div className="flex items-center gap-2 text-gray-800 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-accent" /> Modern Infrastructure
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="Students learning" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 flex gap-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide an environment of academic excellence, equipping students with the knowledge, skills, and values required to succeed in their careers and contribute positively to society.
              </p>
            </div>
          </div>
          <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 flex gap-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
              <Eye className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred educational institution in India, known for producing top academic results and nurturing future leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
