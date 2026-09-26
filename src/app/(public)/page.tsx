"use client";

import Link from "next/link";
import { ArrowRight, Users, BookOpen, Award, GraduationCap, PlayCircle, FileText, Calendar } from "lucide-react";
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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-950 text-white min-h-[90vh] flex items-center pt-20">
        {/* Background elements */}
        <div className="absolute top-0 right-0 -mr-48 -mt-48 w-[800px] h-[800px] rounded-full bg-primary-900/50 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-4 py-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <span className="text-accent-400 font-semibold text-sm tracking-wider uppercase">Welcome to Chanakya Classes</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Shape Your Future With <span className="text-accent">Chanakya Classes</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Quality Education, Expert Guidance and Smart Learning for Every Student. Join the legacy of excellence and achieve your academic dreams.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/courses" className="px-8 py-4 rounded-md bg-accent text-primary-950 font-bold hover:bg-accent-light transition-colors flex items-center gap-2 shadow-lg hover:shadow-accent/50">
                  Explore Courses <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/login" className="px-8 py-4 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm font-semibold transition-colors flex items-center gap-2 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                  Student Login
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="px-8 py-4 rounded-md border-2 border-accent text-accent hover:bg-accent hover:text-primary-950 font-semibold transition-colors flex items-center gap-2">
                  Admission Enquiry
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative h-[500px] hidden lg:block"
          >
             <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-900 to-primary-800 border-4 border-white/10 overflow-hidden shadow-2xl flex items-center justify-center relative group">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80')] bg-cover bg-center mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
                <div className="z-10 text-center p-8 bg-black/40 backdrop-blur-sm rounded-xl border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-2">Knowledge • Discipline • Success</h3>
                  <p className="text-white/80">Empowering the leaders of tomorrow.</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, count: "5000+", label: "Students" },
              { icon: BookOpen, count: "50+", label: "Expert Teachers" },
              { icon: Award, count: "10+", label: "Years of Excellence" },
              { icon: GraduationCap, count: "1000+", label: "Successful Students" },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-primary-100 shadow-inner">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.count}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary-950 mb-4">Why Choose Chanakya Classes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">We provide a comprehensive learning ecosystem designed to bring out the best in every student through structured pedagogy and modern technology.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Expert Faculty", icon: Users, desc: "Learn from highly experienced teachers with a proven track record of producing top rankers." },
              { title: "Smart Study Material", icon: FileText, desc: "Comprehensive, updated, and well-researched study materials designed for conceptual clarity." },
              { title: "Digital Learning", icon: PlayCircle, desc: "Access high-quality video lectures, online tests, and interactive doubt-solving sessions anytime." },
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all border border-gray-100 text-left group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 text-accent-600 group-hover:bg-accent group-hover:text-primary-950 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-primary-950 mb-4">Popular Courses</h2>
              <p className="text-gray-600 max-w-2xl">Structured programs tailored for academic excellence and competitive success.</p>
            </div>
            <Link href="/courses" className="text-primary font-semibold hover:text-primary-light flex items-center gap-2 mt-4 md:mt-0 group">
              View All Courses <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Class XI & XII (Science)", tag: "Senior Secondary", icon: BookOpen, color: "bg-blue-50 text-blue-600" },
              { title: "JEE Main Preparation", tag: "Engineering", icon: Award, color: "bg-orange-50 text-orange-600" },
              { title: "SSC CGL Target Batch", tag: "Competitive Exams", icon: Users, color: "bg-green-50 text-green-600" },
            ].map((course, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all bg-white flex flex-col"
              >
                <div className="h-48 bg-gray-50 flex items-center justify-center p-6 relative group">
                  <div className="absolute top-4 left-4">
                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.color}`}>{course.tag}</span>
                  </div>
                  <course.icon className="w-20 h-20 text-gray-300 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-primary/60" /> 1 Year</span>
                    <span className="flex items-center gap-1"><PlayCircle className="w-4 h-4 text-primary/60" /> Online/Offline</span>
                  </div>
                  <div className="mt-auto">
                    <Link href="/courses" className="block w-full py-3 text-center rounded-md border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-900 relative overflow-hidden text-center">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="container mx-auto px-4 relative z-10"
         >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">Join thousands of successful students who have achieved their dreams with Chanakya Classes.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link href="/register" className="px-8 py-4 rounded-md bg-accent text-primary-950 font-bold hover:bg-accent-light transition-colors shadow-lg hover:shadow-accent/50 text-lg block">
                Enroll Now
              </Link>
            </motion.div>
         </motion.div>
      </section>
    </>
  );
}
