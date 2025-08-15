"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button.tsx"
import { Input } from "./ui/input.tsx"
import { Textarea } from "./ui/textarea.tsx"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
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
            placeholder="Tell us about your project requirements..."
            rows={5}
            required
            className="bg-white/80 border-blue-200 text-gray-800 placeholder:text-gray-500 focus-visible:ring-blue-400 resize-none"
          />
        </div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  )
}