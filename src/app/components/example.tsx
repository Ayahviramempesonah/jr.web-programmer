
"use client"
import { useState } from "react"
import type React from "react"
import { CreateContacts } from "../lib/actions"

import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

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
  )
}

export default function Contact() {
  const [pending, setPending] = useState(false)
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const validateName = (name: string) => {
    if (!name.trim()) return "Nama lengkap wajib diisi"
    if (name.trim().length < 2) return "Nama minimal 2 karakter"
    return ""
  }

  const validateEmail = (email: string) => {
    if (!email.trim()) return "Email wajib diisi"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return "Format email tidak valid"
    return ""
  }

  const validateMessage = (message: string) => {
    if (!message.trim()) return "Pesan wajib diisi"
    if (message.trim().length < 10) return "Pesan minimal 10 karakter"
    return ""
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Real-time validation
    let error = ""
    switch (name) {
      case "name":
        error = validateName(value)
        break
      case "email":
        error = validateEmail(value)
        break
      case "message":
        error = validateMessage(value)
        break
    }
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const messageError = validateMessage(formData.message)

    const newErrors = {
      name: nameError,
      email: emailError,
      message: messageError,
    }

    setErrors(newErrors)

    // Prevent submission if there are errors
    if (nameError || emailError || messageError) {
      e.preventDefault()
      return
    }
  }

  return (
    <section className="max-w-md  mx-auto p-6">
      <div className="flex items-center">
        <form action={CreateContacts} onSubmit={handleSubmit} className="rounded-lg shadow-md">
          <h2>Formulir Kontak Online</h2>
          <div className="mb-4 ">
            <label className="block   text-sm font-medium mb-1">nama lengkap</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="your name"
              className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4 ">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@gmail.com"
              className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Pesan</label>
            <input
              name="message"
              type="text"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="your message..."
              className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <SubmitButton />
        </form>
      </div>
    </section>
  )
}
