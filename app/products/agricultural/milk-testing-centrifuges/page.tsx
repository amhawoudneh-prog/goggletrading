import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, RotateCw, TestTube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MilkTestingCentrifugesPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Milk Testing Centrifuges</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Specialized centrifuge equipment for accurate milk fat testing using the Babcock method and other standard
            dairy testing procedures for quality control and analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/milk-testing-centrifuges.jpeg"
                    alt="Milk Testing Centrifuges"
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
                  <RotateCw className="h-6 w-6 mr-2 text-red-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Precision centrifugal milk fat testing equipment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our milk testing centrifuges are designed specifically for dairy laboratories to perform accurate fat
                  content analysis using standard Babcock and Gerber testing methods with precise speed control.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <TestTube className="h-5 w-5 mr-2 text-red-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Variable speed control (800-1200 RPM)</li>
                      <li>• Digital timer with auto-stop</li>
                      <li>• Balanced rotor design</li>
                      <li>• Safety lid lock mechanism</li>
                      <li>• Vibration-free operation</li>
                      <li>• Easy-to-read speed display</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Testing Methods</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Babcock fat test method</li>
                      <li>• Gerber fat test method</li>
                      <li>• Sediment testing</li>
                      <li>• Protein precipitation tests</li>
                      <li>• Quality control analysis</li>
                      <li>• Research applications</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Specifications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Capacity: 6-24 test bottles</li>
                      <li>• Speed range: 800-1200 RPM</li>
                      <li>• Timer: 0-99 minutes</li>
                      <li>• Motor: 1/4 HP electric</li>
                      <li>• Safety features: Lid lock, brake</li>
                      <li>• Dimensions: Compact benchtop design</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Dairy laboratory testing</li>
                      <li>• Milk collection centers</li>
                      <li>• Quality control departments</li>
                      <li>• Research institutions</li>
                      <li>• Educational laboratories</li>
                      <li>• Veterinary clinics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-red-100 mb-6">
                  Contact us for detailed pricing on milk testing centrifuges, Babcock bottles, and complete testing
                  kits. We offer competitive rates for laboratories and educational institutions.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Milk Testing Centrifuges. Please provide pricing and specifications."
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

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded mb-3">
                  <Image
                    src="/images/milk-analyzer.jpg"
                    alt="Milk Analyzers"
                    width={200}
                    height={200}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Milk Analyzers</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Advanced milk composition analysis</p>
                <Link
                  href="/products/agricultural/milk-analyzers"
                  className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium"
                >
                  View Details →
                </Link>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded mb-3">
                  <Image
                    src="/images/milk-testing-equipment.webp"
                    alt="Milk Testing Equipment"
                    width={200}
                    height={200}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Milk Testing Equipment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Complete testing solutions</p>
                <Link
                  href="/products/agricultural/milk-testing-equipment"
                  className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium"
                >
                  View Details →
                </Link>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded mb-3">
                  <Image
                    src="/images/cream-separator.jpeg"
                    alt="Cream Separators"
                    width={200}
                    height={200}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cream Separators</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Centrifugal cream separation</p>
                <Link
                  href="/products/agricultural/cream-separators"
                  className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium"
                >
                  View Details →
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
