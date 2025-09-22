import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, BarChart3, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CustomerReviews } from "@/components/customer-reviews"

export default function MilkAnalyzersPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Milk Analyzers</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Advanced milk testing equipment for rapid analysis of milk composition, quality parameters, and safety
            indicators to ensure optimal dairy product standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/milk-analyzer.jpg"
                    alt="Milk Analyzers"
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
                  <BarChart3 className="h-6 w-6 mr-2 text-red-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Precision milk composition and quality analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our milk analyzers provide rapid, accurate testing of milk composition and quality parameters using
                  advanced infrared spectroscopy and ultrasonic technology for comprehensive dairy analysis.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-red-600" />
                      Testing Parameters
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Fat content percentage</li>
                      <li>• Protein content analysis</li>
                      <li>• Lactose level measurement</li>
                      <li>• Total solids determination</li>
                      <li>• Density and specific gravity</li>
                      <li>• Temperature monitoring</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Key Features</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Rapid 60-second analysis</li>
                      <li>• Digital display with data storage</li>
                      <li>• Automatic calibration system</li>
                      <li>• Easy sample loading</li>
                      <li>• Printable test results</li>
                      <li>• User-friendly interface</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Dairy farm quality control</li>
                      <li>• Milk collection centers</li>
                      <li>• Dairy processing plants</li>
                      <li>• Laboratory testing facilities</li>
                      <li>• Veterinary clinics</li>
                      <li>• Research institutions</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Benefits</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Ensures milk quality standards</li>
                      <li>• Rapid testing saves time</li>
                      <li>• Accurate composition analysis</li>
                      <li>• Improves dairy profitability</li>
                      <li>• Meets regulatory requirements</li>
                      <li>• Reduces testing costs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-red-100 mb-6">
                  Contact us for detailed pricing on milk analyzers, training programs, and maintenance packages. We
                  offer competitive rates for dairy farms and processing facilities.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251911304297?text=I'm interested in Milk Analyzers. Please provide pricing and technical specifications."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp for Quote
                  </a>
                  <a
                    href="tel:+251911304297"
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

        {/* Customer Reviews for this specific product */}
        <div className="mt-16">
          <CustomerReviews productName="Milk Analyzers" maxReviews={2} />
        </div>
      </div>
    </div>
  )
}
