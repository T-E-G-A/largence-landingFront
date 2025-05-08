"use client"; // Dialogs are interactive

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function TermsDialog({ open, onOpenChange, title, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-2xl max-h-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg focus:outline-none">
          <Dialog.Title className="mb-4 text-xl font-semibold text-gray-900">
            {title || "Terms and Conditions"}
          </Dialog.Title>
          <div className="overflow-y-auto pr-4 text-sm text-gray-700 max-h-[calc(85vh-120px)]"> {/* Scrollable content area */}
            {children}
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 rounded-sm p-1 opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 