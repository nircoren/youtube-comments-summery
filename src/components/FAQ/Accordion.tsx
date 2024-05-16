"use client";
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isLast: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isLast ? "" : `border-b border-gray-200`}>
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">{question}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="pb-4 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How to setup Shade Pro?",
      answer:
        "With lots of unique blocks, you can easily build a page with coding. Build your next landing page. Integer ut obe ryn. Sed feugiat vitae turpis a porta.",
    },
    {
      question: "Can I use Shade Pro for my clients?",
      answer: "Yes, you can use Shade Pro for your clients.",
    },
    {
      question: "How often do you release updates?",
      answer:
        "We release updates regularly to improve the product and add new features.",
    },
    {
      question: "How can I access to old version?",
      answer: "You can access the old version by contacting our support team.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isLast={index >= faqs.length - 1}
        />
      ))}
    </div>
  );
};

export default FAQ;
