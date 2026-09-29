const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const email = 'rahul26@gmail.com';
  const plainPassword = 'password123';
  
  // Check if user already exists
  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (existingUser) {
    console.log(`User ${email} already exists!`);
    return;
  }

  // Hash password
  const password = await bcrypt.hash(plainPassword, 10);

  // Create User
  const user = await prisma.user.create({
    data: {
      name: 'Rahul',
      email: email,
      password: password,
      role: 'STUDENT',
    },
  });

  // Create Student profile
  await prisma.student.create({
    data: {
      userId: user.id,
      city: 'Unknown',
    },
  });

  console.log(`Successfully created account for ${email} with password: ${plainPassword}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
