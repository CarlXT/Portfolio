import React, { useState } from 'react';
import { MessageFormCard } from "../cards/static/MessageFormCard";
import PillButton from "../button/PillButton";

export default function MessageSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submission logic to your backend/service goes here
    console.log('Form data submitted:', formData);
  };

  return (
    /* 1. Added mx-auto to the main section wrapper 
      2. Verified flex-col items-center is active to snap children down the centerline
    */
    <section className="text-white min-h-screen flex flex-col justify-center items-center px-4 py-12 w-full mx-auto"
             id="message-section">           
      {/* Section Header */}
      <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-center mb-8">
        Send me a message here
      </h2>

      {/* 3. Ensured mx-auto centers the form container asset globally 
        4. Kept items-center to secure the button container position
      */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-2 w-full max-w-3xl mx-auto relative"
      >
        {/* Pass state handlers down to card input components */}
        <MessageFormCard formData={formData} handleChange={handleChange} />
        
        {/* Container wrapper for your custom PillButton */}
        <div className="mt-8 flex items-center justify-center w-full relative z-10">
          <PillButton type="submit">
            Send Message
          </PillButton>
        </div>
      </form>
    </section>
  );
}