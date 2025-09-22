import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, TestTube, Thermometer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TestTubesPage() {
  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
              Laboratory Equipment
            </Badge>
            <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
              Glassware
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Test Tubes</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            High-quality borosilicate glass test tubes designed for chemical reactions, sample storage, and laboratory
            testing with excellent thermal shock resistance and chemical durability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/test-tubes.jpeg"
                    alt="Test Tubes"
                    width={400}
                    height={400}
                    className="rounded-lg object-contain w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-6">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                  <TestTube className="h-6 w-6 mr-2 text-blue-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Essential laboratory glassware for experiments and testing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our test tubes are manufactured from premium borosilicate glass, offering superior resistance to
                  thermal shock and chemical corrosion. Perfect for a wide range of laboratory applications from basic
                  experiments to advanced research.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Thermometer className="h-5 w-5 mr-2 text-blue-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Borosilicate glass construction</li>
                      <li>• Excellent thermal shock resistance</li>
                      <li>• Chemical-resistant surface</li>
                      <li>• Clear, distortion-free viewing</li>
                      <li>• Uniform wall thickness</li>
                      <li>• Easy-to-clean smooth finish</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Available Sizes</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 10ml x 75mm - Small volume tests</li>
                      <li>• 13ml x 100mm - Standard laboratory use</li>
                      <li>• 16ml x 125mm - Medium volume applications</li>
                      <li>• 20ml x 150mm - Large volume work</li>
                      <li>• 25ml x 200mm - Extended length tests</li>
                      <li>• Custom sizes available</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Types Available</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Round bottom test tubes</li>
                      <li>• Flat bottom test tubes</li>
                      <li>• Test tubes with rim</li>
                      <li>• Screw cap test tubes</li>
                      <li>• Culture tubes with caps</li>
                      <li>• Disposable plastic tubes</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Chemical reactions and synthesis</li>
                      <li>• Sample collection and storage</li>
                      <li>• Qualitative and quantitative analysis</li>
                      <li>• Microbiological cultures</li>
                      <li>• Educational demonstrations</li>
                      <li>• Research and development</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-800 to-blue-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-blue-100 mb-6">
                  Contact us for bulk pricing on test tubes, complete glassware sets, and laboratory starter packages.
                  We offer competitive rates for educational institutions and research facilities.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Test Tubes. Please provide pricing for different sizes and quantities."
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
