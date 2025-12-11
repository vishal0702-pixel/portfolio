import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  // IntersectionObserver for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_jvyvu7u",      // your service ID
        "template_hw8348f",     // your template ID
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message
        },
        "zhwGN85GwEc3_kpRj"     // your public key
      );

      alert("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div
      id="contact"
      className="w-full py-20 flex flex-col items-center bg-black bg-opacity-50 backdrop-blur-xl"
    >
      <h2 className="goldman-bold text-5xl text-white text-center mb-4">
        CONTACT-ME
      </h2>

      <p className="text-gray-400 text-lg text-center mb-12 max-w-xl">
        Want to collaborate, hire me, or just say hello?  
        Feel free to send me a message — I’ll get back to you soon!
      </p>

      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`w-full max-w-xl p-8 rounded-2xl bg-white bg-opacity-10 backdrop-blur-2xl text-black
                    shadow-2xl flex flex-col gap-6 transition-all duration-700 
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-4 bg-transparent border border-gray-500 rounded-xl placeholder-gray-400 focus:border-blue-400 outline-none transition-all"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="p-4 bg-transparent border border-gray-500 rounded-xl placeholder-gray-400 focus:border-blue-400 outline-none transition-all"
        />

        <input
          type="text"
          placeholder="Subject"
          value={form.subject}
          required
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="p-4 bg-transparent border border-gray-500 rounded-xl placeholder-gray-400 focus:border-blue-400 outline-none transition-all"
        />

        <textarea
          rows="5"
          placeholder="Your Message..."
          value={form.message}
          required
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="p-4 bg-transparent border border-gray-500 rounded-xl placeholder-gray-400 focus:border-blue-400 outline-none transition-all resize-none"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full p-4 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 
                     hover:opacity-90 font-bold text-lg transition-all shadow-lg hover:shadow-xl"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Social Links */}
      <div className="flex gap-4 mt-10 justify-center bg-gray-500">
        <a href="https://www.linkedin.com/in/vishal-kumar-dhaneliya-076614392" target="_blank" rel="noreferrer">
          <img src="/linkedin1.svg" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform"/>
        </a>
        <a href="https://github.com/vishal0702-pixel" target="_blank" rel="noreferrer">
          <img src="/Github.svg" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform"/>
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
          <img src="/Twitter.svg" alt="Twitter" className="w-8 h-8 hover:scale-110 transition-transform"/>
        </a>
        <a href="mailto:vishalcodex072@gmail.com">
          <img src="/Gmail.svg" alt="Email" className="w-8 h-8 hover:scale-110 transition-transform"/>
        </a>
      </div>
    </div>
  );
}
