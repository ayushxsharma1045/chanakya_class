"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  GraduationCap, 
  CreditCard, 
  Calendar, 
  FileText, 
  Video, 
  Settings, 
  LogOut,
  Bell,
  PieChart
} from "lucide-react";
import { signOut } from "next-auth/react";

interface SidebarProps {
  role: "ADMIN" | "TEACHER" | "STUDENT";
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const getLinks = () => {
    switch (role) {
      case "ADMIN":
        return [
          { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
          { name: "Students", href: "/admin/students", icon: Users },
          { name: "Teachers", href: "/admin/teachers", icon: GraduationCap },
          { name: "Courses", href: "/admin/courses", icon: BookOpen },
          { name: "Fees & Payments", href: "/admin/fees", icon: CreditCard },
          { name: "Fee Analytics", href: "/admin/analytics", icon: PieChart },
          { name: "Attendance", href: "/admin/attendance", icon: Calendar },
          { name: "Announcements", href: "/admin/announcements", icon: Bell },
          { name: "Settings", href: "/admin/settings", icon: Settings },
        ];
      case "TEACHER":
        return [
          { name: "Dashboard", href: "/teacher", icon: LayoutDashboard },
          { name: "My Classes", href: "/teacher/classes", icon: BookOpen },
          { name: "My Students", href: "/teacher/students", icon: Users },
          { name: "Attendance", href: "/teacher/attendance", icon: Calendar },
          { name: "Notes", href: "/teacher/notes", icon: FileText },
          { name: "Videos", href: "/teacher/videos", icon: Video },
        ];
      case "STUDENT":
        return [
          { name: "Dashboard", href: "/student", icon: LayoutDashboard },
          { name: "My Course", href: "/student/course", icon: BookOpen },
          { name: "Timetable", href: "/student/timetable", icon: Calendar },
          { name: "Study Material", href: "/student/notes", icon: FileText },
          { name: "Video Lectures", href: "/student/videos", icon: Video },
          { name: "Fees", href: "/student/fees", icon: CreditCard },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  return (
    <aside className="w-64 bg-primary-950 text-white min-h-screen flex flex-col shadow-2xl hidden md:flex fixed h-full z-40">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-xl font-bold tracking-tight text-white">CHANAKYA</h1>
        <p className="text-xs text-accent-400 font-semibold tracking-wider">CLASSES PORTAL</p>
      </div>

      <div className="flex-1 overflow-y-auto py-6">
        <nav className="space-y-1 px-3">
          {links.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== `/${role.toLowerCase()}`);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-primary text-white" 
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <link.icon className={`w-5 h-5 ${isActive ? "text-accent-400" : ""}`} />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex w-full items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-white/70 hover:bg-red-500/20 hover:text-red-400 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
