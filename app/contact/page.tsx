"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  Building2,
  Users,
  Headphones,
  AlertCircle,
  CheckCircle2,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create WhatsApp message
      const whatsappMessage = `New Contact Form Submission:
      
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}`

      const whatsappUrl = `https://wa.me/251911304297?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappUrl, "_blank")

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, support, or partnership opportunities. We're here to help you find
            the right solutions for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center">
                    <Clock className="h-6 w-6 mr-2 text-red-600" />
                    Office Hours
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">Our business operating hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">Monday - Saturday</span>
                      <span className="font-semibold text-gray-900 dark:text-white">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">Sunday</span>
                      <span className="font-semibold text-red-600 dark:text-red-400">Closed</span>
                    </div>
                    <Separator className="dark:bg-gray-700" />
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                        <p className="text-sm text-red-800 dark:text-red-200">
                          <strong>Holiday Notice:</strong> We are closed on all public holidays. For urgent matters,
                          contact us via WhatsApp.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Numbers */}
              <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center">
                    <Phone className="h-6 w-6 mr-2 text-red-600" />
                    Phone Numbers
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Direct lines for immediate assistance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Office Line</span>
                        <Building2 className="h-4 w-4 text-gray-500" />
                      </div>
                      <a
                        href="tel:+251115509748"
                        className="text-lg font-semibold text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                      >
                        +251 11 550 9748
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Business inquiries & partnerships</p>
                    </div>

                    <Separator className="dark:bg-gray-700" />

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mobile Line</span>
                        <MessageCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <a
                        href="tel:+251911304297"
                        className="text-lg font-semibold text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                      >
                        +251 911 304 297
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Sales, support & WhatsApp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp & Email */}
              <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center">
                    <MessageCircle className="h-6 w-6 mr-2 text-green-600" />
                    Quick Contact
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">Instant messaging and email support</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <MessageCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">WhatsApp</span>
                      </div>
                      <a
                        href="https://wa.me/251911304297"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat on WhatsApp
                      </a>
                    </div>

                    <Separator className="dark:bg-gray-700" />

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Mail className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
                      </div>
                      <a
                        href="mailto:tradinggoggle@google.com"
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors break-all"
                      >
                        tradinggoggle@google.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-red-600" />
                    Our Location
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">Visit us at our office</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">
                      Belay Zeleke Street
                      <br />
                      Addis Ababa, Ethiopia
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Easily accessible by public transport and private vehicle
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Send us a Message</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <p className="text-green-800 dark:text-green-200 font-medium">
                        Message sent successfully! We'll contact you soon.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <p className="text-red-800 dark:text-red-200 font-medium">
                        There was an error sending your message. Please try again or contact us directly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-900 dark:text-white">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-900 dark:text-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-gray-900 dark:text-white">
                        Company/Organization
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-900 dark:text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="+251 xxx xxx xxx"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-900 dark:text-white">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-900 dark:text-white">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Please provide details about your inquiry, including specific products or services you're interested in..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-800 hover:bg-red-900 dark:bg-red-700 dark:hover:bg-red-800 text-white py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Contact Options */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sales Inquiries</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Product information and pricing</p>
                  <a
                    href="tel:+251911304297"
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium"
                  >
                    +251 911 304 297
                  </a>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center">
                <CardContent className="p-6">
                  <Headphones className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Support</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Installation and maintenance help</p>
                  <a
                    href="https://wa.me/251911304297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm font-medium"
                  >
                    WhatsApp Support
                  </a>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center">
                <CardContent className="p-6">
                  <Building2 className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Business Partnerships</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Collaboration opportunities</p>
                  <a
                    href="tel:+251115509748"
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium"
                  >
                    +251 11 550 9748
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
