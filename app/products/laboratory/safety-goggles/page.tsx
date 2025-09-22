import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, Shield, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SafetyGogglesPage() {
  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        {/* Product Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
              Laboratory Equipment
            </Badge>
            <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
              Safety Equipment
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Laboratory Safety Goggles</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Professional-grade eye protection equipment designed to safeguard laboratory personnel from chemical
            splashes, particles, and other hazardous materials.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/safety-goggles.webp"
                    alt="Laboratory Safety Goggles"
                    width={400}
                    height={400}
                    className="rounded-lg object-contain w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Details */}
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-6">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-blue-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Essential eye protection for laboratory safety
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our laboratory safety goggles provide comprehensive eye protection against chemical splashes, flying
                  particles, and other laboratory hazards. Designed to meet international safety standards while
                  ensuring comfort during extended use.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Eye className="h-5 w-5 mr-2 text-blue-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Impact-resistant polycarbonate lenses</li>
                      <li>• Chemical splash protection</li>
                      <li>• Anti-fog coating technology</li>
                      <li>• Adjustable elastic headband</li>
                      <li>• Comfortable foam padding</li>
                      <li>• Scratch-resistant surface</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Safety Standards</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• ANSI Z87.1+ certified</li>
                      <li>• CE marked for European compliance</li>
                      <li>• ISO 12312 standard compliant</li>
                      <li>• Chemical resistance tested</li>
                      <li>• Impact resistance verified</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Chemical laboratories</li>
                      <li>• Biology and microbiology labs</li>
                      <li>• Research facilities</li>
                      <li>• Educational institutions</li>
                      <li>• Industrial quality control</li>
                      <li>• Medical laboratories</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing and Contact */}
            <Card className="bg-gradient-to-r from-blue-800 to-blue-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-blue-100 mb-6">
                  Contact us for detailed pricing, bulk discounts, and specifications. We offer competitive prices for
                  educational institutions and research facilities.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Laboratory Safety Goggles. Please provide pricing and details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp for Quote
                  </a>
                  <a
                    href="tel:+251949764843"
                    className="flex items-center justify-center border border-white text-white px-4 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center justify-center bg-white text-blue-800 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Send Inquiry
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
