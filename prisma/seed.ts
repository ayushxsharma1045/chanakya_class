import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import "dotenv/config";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("password123", 10);

  // Clean up
  await prisma.feePayment.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.batch.deleteMany();
  await prisma.course.deleteMany();
  await prisma.teacher.deleteMany();
  await prisma.student.deleteMany();
  await prisma.user.deleteMany();

  // Create Admin
  await prisma.user.create({
    data: { name: "Admin Setup", email: "admin@chanakyaclasses.com", password, role: "ADMIN" },
  });

  // Create Courses
  const jee = await prisma.course.create({
    data: { name: "JEE Main Target", category: "Engineering", durationMonths: 12, totalFee: 82000, admissionFee: 10000, monthlyFee: 6000 },
  });
  const ssc = await prisma.course.create({
    data: { name: "SSC CGL Target Batch", category: "Competitive Exams", durationMonths: 12, totalFee: 41000, admissionFee: 5000, monthlyFee: 3000 },
  });
  const class12 = await prisma.course.create({
    data: { name: "Class XII Science", category: "Senior Secondary", durationMonths: 12, totalFee: 53000, admissionFee: 5000, monthlyFee: 4000 },
  });

  // Create Teacher
  const tUser = await prisma.user.create({
    data: { name: "Dr. Ramesh Kumar", email: "teacher@chanakyaclasses.com", password, role: "TEACHER" },
  });
  const teacher = await prisma.teacher.create({
    data: { userId: tUser.id, qualification: "Ph.D. in Physics", experience: "15+ Years" },
  });

  // Create Student
  const sUser = await prisma.user.create({
    data: { name: "Rahul Sharma", email: "student@chanakyaclasses.com", password, role: "STUDENT" },
  });
  const student = await prisma.student.create({
    data: { userId: sUser.id, city: "New Delhi" },
  });

  // Enroll Student
  await prisma.enrollment.create({
    data: { studentId: student.id, courseId: jee.id, totalCourseFee: jee.totalFee, admissionFee: jee.admissionFee },
  });

  // Fee Payment
  await prisma.feePayment.create({
    data: { studentId: student.id, amount: 10000, paymentMethod: "UPI", status: "Paid" },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
