"use client";

import { neon } from "@neondatabase/serverless";
import { z } from "zod";
import { useState } from "react";

// Schema validasi Zod
const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

export default function Contactx() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setMessage(null);
    setErrors({});

    try {
      // Validasi input dengan Zod
      const validatedData = contactSchema.parse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      });

      // Connect to the Neon database
      const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL!);

      await sql`
        INSERT INTO contacts (name, email, message)
        VALUES (${validatedData.name}, ${validatedData.email}, ${validatedData.message})
      `;

      setMessage({ type: "success", text: "Pesan berhasil dikirim!" });

      // Reset form (optional)
      const form = document.querySelector("form") as HTMLFormElement;
      if (form) form.reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        // error.errors.forEach((err) => {
        //   if (err.path[0]) {
        //     newErrors[err.path[0] as string] = err.message;
        //   }
        // });
        setErrors(newErrors);
        setMessage({ type: "error", text: "Validasi form gagal" });
      } else {
        console.error("Database error:", error);
        setMessage({ type: "error", text: "Terjadi kesalahan server" });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Halo ini page contact</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <form action={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">Formulir Kontak Online</h2>

          {/* Status Message */}
          {message && (
            <div
              className={`p-3 mb-4 rounded ${
                message.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Nama Lengkap
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              disabled={isLoading}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="your@gmail.com"
              className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Pesan</label>
            <textarea
              name="message"
              placeholder="Your message..."
              rows={4}
              className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              disabled={isLoading}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Mengirim...
              </span>
            ) : (
              "Kirim"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
