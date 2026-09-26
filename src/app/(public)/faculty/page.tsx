import Image from "next/image";
import { Mail, Globe } from "lucide-react";

export default function FacultyPage() {
  const faculty = [
    {
      name: "Dr. Ramesh Kumar",
      subject: "Physics",
      experience: "15+ Years",
      qualification: "Ph.D. in Physics, IIT Delhi",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Prof. Sunita Sharma",
      subject: "Mathematics",
      experience: "12+ Years",
      qualification: "M.Sc. Mathematics, Delhi University",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Mr. Anil Verma",
      subject: "Chemistry",
      experience: "10+ Years",
      qualification: "M.Tech, NIT Kurukshetra",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Mrs. Kavita Singh",
      subject: "Biology",
      experience: "8+ Years",
      qualification: "M.Sc. Zoology, BHU",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Mr. Vikram Aditya",
      subject: "English & Reasoning",
      experience: "11+ Years",
      qualification: "MA English, SSC Expert",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Ms. Neha Gupta",
      subject: "Commerce & Economics",
      experience: "7+ Years",
      qualification: "CA, M.Com",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary-950 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Faculty</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Learn from the best educators who are dedicated to your success.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="h-64 relative overflow-hidden bg-gray-200">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.subject}</p>
                
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <p><span className="font-semibold text-gray-900">Experience:</span> {member.experience}</p>
                  <p><span className="font-semibold text-gray-900">Qualification:</span> {member.qualification}</p>
                </div>

                <div className="flex justify-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <Globe className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
