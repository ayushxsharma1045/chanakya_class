"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";

// Define the validation schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  phone: z.string().regex(/^[+0-9\s-]{10,15}$/, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  course: z.string().min(1, { message: "Please select a course of interest." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export type ContactFormState = {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    phone?: string[];
    email?: string[];
    course?: string[];
    message?: string[];
  };
};

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Validate the form data
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    course: formData.get("course"),
    message: formData.get("message"),
  });

  // If validation fails, return early with errors
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors in the form.",
    };
  }

  // If validation succeeds, attempt to save to the database securely
  try {
    const data = validatedFields.data;

    await prisma.contactMessage.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        course: data.course,
        message: data.message,
        status: "Unread", // Default status
      },
    });

    // Return success state
    return {
      success: true,
      message: "Thank you for reaching out! Your message has been sent successfully. Our team will contact you shortly.",
    };
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
