"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "./ui/button.tsx"
import { Input } from "./ui/input.tsx"
import { Textarea } from "./ui/textarea.tsx"
import { CheckCircle2, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // EmailJS configuration
      const result = await emailjs.sendForm(
        'service_4enqy7p', // Your EmailJS service ID
        'template_g4oeksr', // Your EmailJS template ID
        formRef.current!,
        'GuI7hlpdZ9Ll2T0oz' // Your EmailJS public key
      )

      console.log('Email sent successfully:', result.text)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Failed to send email:', error)
      setError('Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="backdrop-blur-lg bg-white/60 border border-blue-200/50 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center shadow-xl">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you as soon as possible.</p>
        <Button
          variant="outline"
          className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="backdrop-blur-lg bg-white/60 border border-blue-200/50 rounded-2xl p-8 shadow-xl"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              id="name"
              name="from_name"
              placeholder="Your name"
              required
              className="bg-white/80 border-blue-200 text-gray-800 placeholder:text-gray-500 focus-visible:ring-blue-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              name="from_email"
              type="email"
              placeholder="Your email"
              required
              className="bg-white/80 border-blue-200 text-gray-800 placeholder:text-gray-500 focus-visible:ring-blue-400"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-gray-700">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="Project inquiry, quote request, etc."
            required
            className="bg-white/80 border-blue-200 text-gray-800 placeholder:text-gray-500 focus-visible:ring-blue-400"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your project requirements..."
            rows={5}
            required
            className="bg-white/80 border-blue-200 text-gray-800 placeholder:text-gray-500 focus-visible:ring-blue-400 resize-none"
          />
        </div>
        {error && (
          <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  )
}