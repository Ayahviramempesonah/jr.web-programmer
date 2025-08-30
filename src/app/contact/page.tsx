"use client";
import { useState } from "react";
import type react from "react";

import * as z from "zod";
import { CreateContacts } from "../lib/actions";

import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-500 text-white 
      py-2 px-4 rounded hover:bg-blue-600 
      disabled:bg-gray-400 
      disabled:cursor-not-allowed interactive-button"
    >
      {pending ? "Mengirim..." : "kirim"}
    </button>
  );
}

export default function Contact() {
  const [pending, setPending] = useState(false);
  return (
    <section className="max-w-md  mx-auto p-6">
      <div className="flex items-center">
        <form action={CreateContacts} className="rounded-lg shadow-md">
          <h2>Formulir Kontak Online</h2>
          <div className="mb-4 ">
            <label className="block   text-sm font-medium mb-1">
              nama lengkap
            </label>
            <input
              // onChange={handleInputChange}
              name="name"
              type="text"
              placeholder="your name"
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4 ">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="your@gmail.com"
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Pesan</label>
            <input
              name="message"
              type="text"
              placeholder="your message..."
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
