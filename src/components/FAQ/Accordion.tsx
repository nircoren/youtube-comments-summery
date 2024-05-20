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
      question: "How to set up summarize YouTube comments?",
      answer:
        "Simply install the extension, register on website using your google account, pick your plan, make payment and start using.",
    },
    {
      question: "Where will the summery be displayed?",
      answer: "The summery is directly under the video discription. Stevie Wonder didn't miss it so you will probably be fine.",
    },
    {
      question: "What technology is used to make the summary?",
      answer:
        "We use gpt4-o ai engine.",
    },
    {
      question: "Can i see the summery in mobile?",
      answer: "Nope. There aren't chrome extensions for mobile yet.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Nope. No refunds.",
    },
    {
      question: "How do i cancel my subscription?",
      answer: "Just send us an email and we will cancel your subscription.",
    },
  ];

  return (
    <div className="lg:max-w-2xl lg:mx-auto p-6 bg-white shadow-md rounded-lg">
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
