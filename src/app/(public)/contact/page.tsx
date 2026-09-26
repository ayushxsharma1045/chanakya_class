"use client";

import { useActionState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm, ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = {
  success: undefined,
  message: "",
};

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Have questions? We are here to help you. Reach out to our admission cell.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Whether you want to inquire about a course, know the fee structure, or arrange a counseling session, our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Our Address</h4>
                  <p className="text-gray-600">123 Knowledge Avenue, Education Hub,<br/>New Delhi, India 110001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Phone Number</h4>
                  <p className="text-gray-600">+91 98765 43210 <br/>+91 11 2345 6789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Email Address</h4>
                  <p className="text-gray-600">info@chanakyaclasses.com<br/>admissions@chanakyaclasses.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Office Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM<br/>Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            {/* Status Messages */}
            {state.success === true && (
              <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-green-800 text-sm">{state.message}</p>
              </div>
            )}
            
            {state.success === false && !state.errors && (
              <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-red-800 text-sm">{state.message}</p>
              </div>
            )}

            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    id="name"
                    className={`w-full px-4 py-3 rounded-md border ${state.errors?.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'} focus:outline-none focus:ring-2 focus:border-transparent`} 
                    placeholder="John Doe" 
                  />
                  {state.errors?.name && <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    id="phone"
                    className={`w-full px-4 py-3 rounded-md border ${state.errors?.phone ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'} focus:outline-none focus:ring-2 focus:border-transparent`} 
                    placeholder="+91 98765 43210" 
                  />
                  {state.errors?.phone && <p className="mt-1 text-sm text-red-600">{state.errors.phone[0]}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-md border ${state.errors?.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'} focus:outline-none focus:ring-2 focus:border-transparent`} 
                  placeholder="john@example.com" 
                />
                {state.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>}
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">Course of Interest</label>
                <select 
                  name="course"
                  id="course"
                  className={`w-full px-4 py-3 rounded-md border ${state.errors?.course ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'} focus:outline-none focus:ring-2 focus:border-transparent bg-white`}
                >
                  <option value="">Select a Course</option>
                  <option value="Class X Foundation">Class X Foundation</option>
                  <option value="Class XII Science">Class XII Science</option>
                  <option value="JEE Main Preparation">JEE Main Preparation</option>
                  <option value="SSC CGL Target">SSC CGL Target</option>
                  <option value="Other">Other</option>
                </select>
                {state.errors?.course && <p className="mt-1 text-sm text-red-600">{state.errors.course[0]}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea 
                  name="message"
                  id="message"
                  rows={4} 
                  className={`w-full px-4 py-3 rounded-md border ${state.errors?.message ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'} focus:outline-none focus:ring-2 focus:border-transparent`} 
                  placeholder="How can we help you?"
                ></textarea>
                {state.errors?.message && <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isPending}
                className="w-full py-4 rounded-md bg-primary text-white font-bold text-lg hover:bg-primary-light transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
