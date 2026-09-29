import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardRedirect() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  const role = session.user.role;

  if (role === "ADMIN") {
    redirect("/admin");
  } else if (role === "TEACHER") {
    redirect("/teacher");
  } else {
    redirect("/student");
  }
}
