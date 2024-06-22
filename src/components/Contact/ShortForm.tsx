import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { email };
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setIsError(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className=" w-2/3 bg-secondaryBg p-8 rounded-lg shadow-lg">
      <h5 className="text-center">{t('hero:email_to_early_access')}.</h5>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-4 lg:flex-1">
          <label className="block text-gray-300 mb-2" htmlFor="email">
          </label>
          <input
            id="email"
            type="email"
            placeholder={`${t('enter_email')}`}
            className="w-full p-2 border border-gray-700 rounded bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="py-1 bg-white w-full bg-btnBg rounded font-semibold "
        >
          {t('send')}
        </button>
      </form>
      {isSubmitted && !isError && (
        <p className="mt-4 text-green-500">{t('message_success')}</p>
      )}
      {isError && (
        <p className="mt-4 text-red-500">{t('message_error')}</p>
      )}
    </div>
  );
};

export default ContactForm;
