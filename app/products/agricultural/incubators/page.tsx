import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, Thermometer, Timer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IncubatorsPage() {
  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        {/* Product Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
              Agricultural Equipment
            </Badge>
            <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
              Poultry Materials
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Poultry Incubators</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Professional egg incubation systems designed for optimal hatching success with precise temperature and
            humidity control for various poultry species.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/incubator.png"
                    alt="Poultry Incubators"
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
                  <Thermometer className="h-6 w-6 mr-2 text-red-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Advanced incubation technology for successful hatching
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our poultry incubators feature state-of-the-art technology for precise temperature and humidity
                  control, ensuring optimal conditions for successful egg hatching across various poultry species.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Timer className="h-5 w-5 mr-2 text-red-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Digital temperature and humidity control</li>
                      <li>• Automatic egg turning system</li>
                      <li>• LED candling light for egg inspection</li>
                      <li>• Alarm system for temperature deviations</li>
                      <li>• Transparent viewing window</li>
                      <li>• Energy-efficient heating system</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Available Capacities</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 48-egg capacity (small scale)</li>
                      <li>• 96-egg capacity (medium scale)</li>
                      <li>• 192-egg capacity (commercial)</li>
                      <li>• 384-egg capacity (large commercial)</li>
                      <li>• Custom sizes available</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Suitable For</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Chicken eggs (21-day incubation)</li>
                      <li>• Duck eggs (28-day incubation)</li>
                      <li>• Goose eggs (30-day incubation)</li>
                      <li>• Turkey eggs (28-day incubation)</li>
                      <li>• Quail eggs (17-day incubation)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing and Contact */}
            <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-red-100 mb-6">
                  Contact us for detailed pricing, capacity options, and technical specifications. We offer competitive
                  prices and bulk discounts for commercial operations.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Poultry Incubators. Please provide pricing and capacity options."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp for Quote
                  </a>
                  <a
                    href="tel:+251949764843"
                    className="flex items-center justify-center border border-white text-white px-4 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center justify-center bg-white text-red-800 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
