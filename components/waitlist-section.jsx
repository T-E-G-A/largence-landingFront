"use client";

import { useState } from "react";
import { TermsDialog } from "@/components/ui/terms-dialog";
import { toast } from "sonner"; 

export function WaitlistSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
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
      // Submit to waitlist API
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to join waitlist');

      // Send auto-reply email
      await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          type: 'waitlist'
        }),
      });

      toast.success('Successfully joined the waitlist!');
      setFormData({
        email: '',
        acceptTerms: false
      });
    } catch (error) {
      toast.error('Failed to join waitlist. Please try again.');
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
      <section id="waitlist" className="container relative z-10 mx-auto px-4 py-16 md:py-24 scroll-mt-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Join Our Waitlist</h2>
          <p className="mb-8 text-gray-700">Be the first to know when we launch and get early access to our platform.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="waitlist-email"
                required
                placeholder="Enter your email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 px-4 py-3"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="flex items-start justify-center">
              <input
                type="checkbox"
                id="waitlist-terms"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                checked={formData.acceptTerms}
                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              />
              <label htmlFor="waitlist-terms" className="ml-2 block text-sm text-gray-700 text-left">
                I agree to receive emails about Largence and accept the{" "}
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
              disabled={isSubmitting}
              className="w-full rounded-md bg-red-600 px-6 py-3 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        </div>
      </section>

      <TermsDialog open={isTermsModalOpen} onOpenChange={setIsTermsModalOpen}>
        <h3 className="text-lg font-semibold mb-2">Our Terms of Service</h3>
        <p className="mb-2">Welcome to Largence! By signing up for our waitlist, you agree to these terms.</p>
        <h4 className="text-md font-semibold mt-4 mb-1">Data Collection and Use:</h4>
        <p className="mb-2">We collect your name and email address to notify you about Largence's launch, updates, and related news. We aim to hold your data only for as long as necessary for these purposes, generally until the product launch phase is complete or you request removal.</p>
        <h4 className="text-md font-semibold mt-4 mb-1">Data Protection:</h4>
        <p className="mb-2">We are committed to protecting your data in accordance with general GDPR and DPA principles. We will not share your personal information with third parties without your consent, except as required by law.</p>
        <h4 className="text-md font-semibold mt-4 mb-1">Your Rights:</h4>
        <p className="mb-2">You have the right to access, correct, or delete your personal information. You can unsubscribe from our communications at any time.</p>
        <p className="mt-4">These terms are a brief overview. A more detailed policy will be available at launch.</p>
      </TermsDialog>
    </>
  );
} 