import Link from "next/link";
import Image from "next/image";
import { Globe, MessageCircle, Share2, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-accent bg-white">
                <Image
                  src="/logo.jpg"
                  alt="Chanakya Classes Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-bold text-xl tracking-tight text-white">CHANAKYA CLASSES</h2>
              </div>
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Premium Coaching Institute dedicated to shaping the future of students with quality education, expert guidance, and smart learning.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-950 transition-colors">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-950 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-950 transition-colors">
                <Share2 className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Courses", href: "/courses" },
                { name: "Faculty", href: "/faculty" },
                { name: "Fee Structure", href: "/fee-structure" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Our Portals
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/login" className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                  Student Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                  Student Registration
                </Link>
              </li>
              <li>
                <Link href="/login?role=teacher" className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                  Teacher Login
                </Link>
              </li>
              <li>
                <Link href="/login?role=admin" className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>123 Knowledge Avenue, Education Hub, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@chanakyaclasses.com</span>
              </li>
            </ul>
            <h3 className="font-bold text-md mb-4 text-white/90">Campus Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square relative rounded-md overflow-hidden bg-white/10 group">
                 <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Campus" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="aspect-square relative rounded-md overflow-hidden bg-white/10 group">
                 <Image src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Classroom" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="aspect-square relative rounded-md overflow-hidden bg-white/10 group">
                 <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Students" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm">
          <p>© 2026 Chanakya Classes. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
