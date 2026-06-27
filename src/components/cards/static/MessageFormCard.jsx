import { useId, useState } from "react";

// Standardized structure to remove absolute positioning rows
const formFields = [
  {
    id: "name",
    label: "Name *",
    placeholder: "John Doe Smith",
    type: "text",
    autocomplete: "name",
  },
  {
    id: "email",
    label: "Email *",
    placeholder: "your.email@example.com",
    type: "email",
    autocomplete: "email",
  }
];

export const MessageFormCard = () => {
  const formId = useId();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <section aria-label="Contact-Form" className="w-full max-w-5xl mx-auto p-10 rounded-[34px] bg-[#1e1e1e] text-white shadow-xl">
      <form onSubmit={(event) => event.preventDefault()} className="flex flex-col gap-8">
        
        {/* Top Row: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formFields.map((field) => {
            const inputId = `${formId}-${field.id}`;
            return (
              <div key={field.id} className="flex flex-col gap-3">
                <label htmlFor={inputId} className="font-sans font-normal text-2xl tracking-normal">
                  {field.label}
                </label>
                <div className="h-16 relative rounded-2xl overflow-hidden bg-[#212121]">
                  <input
                    id={inputId}
                    name={field.id}
                    type={field.type}
                    autoComplete={field.autocomplete}
                    value={formData[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    aria-label={field.label}
                    className={`w-full h-full px-5 bg-transparent border-none outline-none font-sans font-normal text-white text-xl placeholder:text-white/40 ${
                      field.id === "name" ? "text-left" : "text-left"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Subject Row */}
        <div className="flex flex-col gap-3">
          <label htmlFor={`${formId}-subject`} className="font-sans font-normal text-2xl tracking-normal">
            Subject *
          </label>
          <div className="h-16 relative rounded-2xl overflow-hidden bg-[#212121]">
            <input
              id={`${formId}-subject`}
              name="subject"
              type="text"
              autoComplete="off"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              aria-label="Subject"
              className="w-full h-full px-5 bg-transparent border-none outline-none font-Family:SF_Pro font-normal text-white text-xl placeholder:text-white/40"
            />
          </div>
        </div>

        {/* Message Row */}
        <div className="flex flex-col gap-3">
          <label htmlFor={`${formId}-message`} className="font-sans font-normal text-2xl tracking-normal">
            Message *
          </label>
          <div className="rounded-2xl overflow-hidden bg-[#212121]">
            <textarea
              id={`${formId}-message`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about it or just say hi!"
              aria-label="Message"
              rows={6}
              className="w-full p-5 bg-transparent border-none outline-none resize-none font-sans font-normal text-white text-xl placeholder:text-white/40 min-h-50"
            />
          </div>
        </div>

      </form>
    </section>
  );
};

export default MessageFormCard;