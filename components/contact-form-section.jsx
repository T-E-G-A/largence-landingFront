"use client";

import { useState } from "react";
import { TermsDialog } from "@/components/ui/terms-dialog";
import { toast } from "sonner";

export function ContactFormSection() {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const openTermsModal = (e) => {
    e.preventDefault();
    setIsTermsModalOpen(true);
  };

  const handleEmailClick = (e) => {
    if (!acceptTerms) {
      e.preventDefault();
      toast.error('Please accept the terms and conditions');
    }
  };

  return (
    <>
      <div className="mx-auto max-w-[450px] rounded-lg bg-white p-8 shadow-lg text-center">
        <h3 className="mb-6 text-xl font-bold">Contact Us</h3>
        
        <div className="mb-6 flex items-center space-x-2 justify-center">
          <input
            id="terms-checkbox-contact"
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
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

        <a
          href="mailto:hello@largence.com"
          onClick={handleEmailClick}
          className="inline-block w-full rounded-md bg-black py-3 font-medium text-white transition-colors hover:bg-opacity-80"
        >
          Send us an email
        </a>
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
