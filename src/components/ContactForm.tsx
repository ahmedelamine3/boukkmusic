"use client";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function ContactForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${email}!`);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 mt-4">
      <input
        type="email"
        placeholder="Your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 rounded-md text-black w-full"
        required
      />
      <button
        type="submit"
        className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-400 flex items-center gap-2"
      >
        <Mail size={16} /> Contact
      </button>
    </form>
  );
}
