import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, RotateCcw, Droplets } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CreamSeparatorsPage() {
  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
              Agricultural Equipment
            </Badge>
            <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
              Dairy Equipment
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Cream Separators</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Efficient centrifugal cream separation equipment that separates cream from milk using centrifugal force,
            enabling dairy farms to produce high-quality cream and skim milk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/cream-separator.jpeg"
                    alt="Cream Separators"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-6">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                  <RotateCcw className="h-6 w-6 mr-2 text-red-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Centrifugal cream separation technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our cream separators use centrifugal force to efficiently separate cream from milk, producing
                  high-quality cream and skim milk for various dairy applications and value-added products.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Droplets className="h-5 w-5 mr-2 text-red-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• High-speed centrifugal separation</li>
                      <li>• Adjustable cream fat content</li>
                      <li>• Stainless steel construction</li>
                      <li>• Easy disassembly for cleaning</li>
                      <li>• Continuous operation capability</li>
                      <li>• Food-grade materials throughout</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Available Models</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Manual hand-crank separators (50-100 L/hr)</li>
                      <li>• Electric motor separators (100-300 L/hr)</li>
                      <li>• Commercial separators (500-1000 L/hr)</li>
                      <li>• Industrial separators (1000+ L/hr)</li>
                      <li>• Portable farm separators</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Dairy farm cream production</li>
                      <li>• Artisanal butter making</li>
                      <li>• Skim milk production</li>
                      <li>• Dairy processing facilities</li>
                      <li>• Small-scale creameries</li>
                      <li>• Educational dairy programs</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Benefits</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Increases dairy product value</li>
                      <li>• Efficient cream extraction</li>
                      <li>• Produces multiple products</li>
                      <li>• Reduces processing time</li>
                      <li>• Improves product quality</li>
                      <li>• Enhances farm profitability</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-red-100 mb-6">
                  Contact us for pricing on cream separators, installation services, and training programs. We offer
                  competitive rates for both small farms and commercial operations.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Cream Separators. Please provide pricing for different capacities and models."
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
