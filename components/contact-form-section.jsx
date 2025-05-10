"use client";

import { useState } from "react";
import { TermsDialog } from "@/components/ui/terms-dialog";
import { toast } from "sonner";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false
  });
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    setIsSubmitting(true);
    try {
      // Submit form data to your backend/API
      const response = await fetch('${API_BASE_URL}/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      // Send auto-reply email
      await fetch('${API_BASE_URL}/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          type: 'contact'
        }),
      });

      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
        acceptTerms: false
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openTermsModal = (e) => {
    e.preventDefault();
    setIsTermsModalOpen(true);
  };

  return (
    <>
      <div className="mx-auto max-w-[450px] rounded-lg bg-white p-8 shadow-lg">
        <h3 className="mb-6 text-center text-xl font-bold">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact-email" className="mb-2 block font-medium">
              Your email
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-md border border-gray-300 p-3"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact-message" className="mb-2 block font-medium">
              Message
            </label>
            <textarea
              id="contact-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="h-32 w-full rounded-md border border-gray-300 p-3"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          <div className="mb-6 flex items-center space-x-2">
            <input
              id="terms-checkbox-contact"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
              disabled={isSubmitting}
            />
            <label htmlFor="terms-checkbox-contact" className="text-sm text-gray-700">
              I agree to the{" "}
              <span
                onClick={openTermsModal}
                className="text-red-600 underline cursor-pointer hover:text-red-700"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openTermsModal(e);}}
              >
                terms and conditions
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-black py-3 font-medium text-white transition-colors hover:bg-opacity-80 disabled:opacity-50"
            disabled={isSubmitting || !formData.name || !formData.email || !formData.message || !formData.acceptTerms}
          >
            {isSubmitting ? "Sending..." : "Contact"}
          </button>
        </form>
      </div>

      <TermsDialog open={isTermsModalOpen} onOpenChange={setIsTermsModalOpen}>
        <h3 className="text-lg font-semibold mb-2">Our Terms of Service</h3>
        <p className="mb-2">Welcome to Largence! By contacting us, you acknowledge our data practices.</p>
        <h4 className="text-md font-semibold mt-4 mb-1">Data Collection and Use:</h4>
        <p className="mb-2">We collect your name, email address, and message content to respond to your inquiry. We aim to hold your data only for as long as necessary to address your communication.</p>
        <h4 className="text-md font-semibold mt-4 mb-1">Data Protection:</h4>
        <p className="mb-2">We are committed to protecting your data in accordance with general GDPR and DPA principles. We will not share your personal information with third parties without your consent, except as required by law or to fulfill your request.</p>
        <h4 className="text-md font-semibold mt-4 mb-1">Your Rights:</h4>
        <p className="mb-2">You have the right to access, correct, or delete your personal information related to this interaction. Please indicate in your message if you have specific requests regarding your data.</p>
        <p className="mt-4">These terms are a brief overview. A more detailed privacy policy will be available at launch.</p>
      </TermsDialog>
    </>
  );
} 
