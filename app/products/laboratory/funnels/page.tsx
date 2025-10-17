"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Mail, MessageCircle, Star, Shield, Truck, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FunnelsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const specifications = [
    { label: "Material", value: "Borosilicate Glass 3.3" },
    { label: "Sizes Available", value: "25mm - 150mm diameter" },
    { label: "Types", value: "Analytical, Powder, Separatory" },
    { label: "Stem Length", value: "Short, Long, Extra Long" },
    { label: "Standard", value: "ISO 4800" },
    { label: "Angle", value: "60° standard angle" },
  ]

  const features = [
    "Smooth interior surface",
    "Fire-polished rim and stem",
    "Chemical resistant glass",
    "Multiple sizes and types",
    "Precision manufactured",
    "Easy to clean and sterilize",
    "Excellent flow characteristics",
    "Durable construction",
  ]

  const applications = [
    "Liquid transfer operations",
    "Filtration processes",
    "Separation techniques",
    "Solution preparation",
    "Analytical procedures",
    "Quality control testing",
    "Educational experiments",
    "Research applications",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleWhatsAppContact = () => {
    const message = `Hi, I'm interested in Laboratory Funnels. ${formData.message ? `Message: ${formData.message}` : ""}`
    const whatsappUrl = `https://wa.me/251949764843?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <span>/</span>
          <Link href="/products#laboratory" className="hover:text-primary">
            Laboratory Equipment
          </Link>
          <span>/</span>
          <span className="text-primary">Funnels</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Main Product Image */}
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/funnels.png"
                    alt="Laboratory Funnels"
                    width={400}
                    height={400}
                    className="rounded-lg object-contain w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Laboratory Equipment
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Laboratory Funnels</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                High-quality glass funnels for liquid transfer, filtration, and separation processes
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-2">(4.8/5 - 203 reviews)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-blue-600" />
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                <span className="text-sm">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-orange-600" />
                <span className="text-sm">Premium Quality</span>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleWhatsAppContact}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact via WhatsApp
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+251911304297">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:amhawoudneh@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Laboratory funnels are essential tools for transferring liquids and powders safely and efficiently.
                  Made from high-quality borosilicate glass, our funnels offer excellent chemical resistance and
                  durability. Available in various sizes and types including analytical, powder, and separatory funnels
                  to meet all laboratory requirements.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700"
                    >
                      <span className="font-medium">{spec.label}:</span>
                      <span className="text-gray-600 dark:text-gray-300">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Applications & Uses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <span>{application}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Get a Quote</CardTitle>
                <CardDescription>Contact us for pricing and availability information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                  />
                </div>
                <Button onClick={handleWhatsAppContact} className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send via WhatsApp
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
