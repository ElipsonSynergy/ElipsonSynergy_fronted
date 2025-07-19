"use client"

import { Montserrat, Numans } from 'next/font/google'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

/**
 * Font configuration using Next.js font optimization
 * - Montserrat for headings
 * - Numans for body text
 */
const monserrat = Montserrat({ subsets: ["latin"] });
const numans = Numans({ subsets: ["latin"], weight: ["400"] });

/**
 * Modal Component
 * 
 * Displays notification modal for contact form submissions.
 * Corresponds to HU04 - Contact Form.
 * 
 * @param {Object} props - Component properties
 * @param {boolean} props.modalOpen - Controls modal visibility
 * @param {Object} props.data - Response data to display
 * @param {Function} props.close - Function to close modal
 * 
 * KPI Related:
 * - User feedback mechanism (RF-04.3)
 * - Part of contact form functionality (HU04)
 */
export default function Modal({ modalOpen, data, close }) {
  /**
   * Auto-close modal after 5 seconds on successful submission
   * KPI: Improves user experience (RNF-04.1)
   */
  useEffect(() => {
    if (modalOpen && data.response === 'Message sent successfully') {
      const timer = setTimeout(() => {
        close();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [modalOpen, data, close]);

  if (!modalOpen) return null;

  // Determine styling based on response status
  const isSuccess = data.response === 'Message sent successfully';
  const bgColor = isSuccess ? "bg-green-100" : "bg-red-100";
  const textColor = isSuccess ? "text-green-800" : "text-red-800";
  const borderColor = isSuccess ? "border-green-500" : "border-red-500";
  
  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className={`relative ${bgColor} ${textColor} rounded-lg border ${borderColor} shadow-xl max-w-md w-full`}
          >
            {/* Modal content section */}
            <section>
              <div
                className={`fixed z-50 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${modalOpen ? 'show' : 'hidden'}`}
              >
                <div className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]">
                  {/* Modal heading */}
                  <h3
                    className={`${monserrat.className} pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl`}  
                  >
                    {data.response}
                  </h3>
                  
                  {/* Decorative separator */}
                  <span
                    className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary"
                  ></span>
                  
                  {/* Response message */}
                  <p
                    className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6"
                  >
                    {data.message}
                  </p>
                  
                  {/* Action buttons */}
                  <div className="-mx-3 flex flex-wrap justify-center">
                    <div className="w-1/2 px-3">
                      <button
                        className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
                        onClick={close}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}