import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, Droplets, Ruler } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PipettesPage() {
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
              Plasticware
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Pipettes</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Precision liquid measurement and transfer instruments essential for accurate volumetric work in analytical
            chemistry, biology, and research applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/pipettes.jpeg"
                    alt="Pipettes"
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
                  <Droplets className="h-6 w-6 mr-2 text-blue-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Precision liquid measurement and transfer tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our pipettes provide accurate and precise liquid measurement and transfer capabilities for laboratory
                  applications, available in various types and volumes to meet different analytical requirements.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Ruler className="h-5 w-5 mr-2 text-blue-600" />
                      Types Available
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Volumetric pipettes (Class A accuracy)</li>
                      <li>• Graduated (serological) pipettes</li>
                      <li>• Micropipettes (adjustable volume)</li>
                      <li>• Pasteur pipettes (disposable)</li>
                      <li>• Automatic pipettes (electronic)</li>
                      <li>• Multi-channel pipettes</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Volume Ranges</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Micropipettes: 0.1-1000 μL</li>
                      <li>• Graduated pipettes: 1-25 mL</li>
                      <li>• Volumetric pipettes: 1-100 mL</li>
                      <li>• Pasteur pipettes: 1-3 mL</li>
                      <li>• Automatic pipettes: Variable</li>
                      <li>• Custom volumes available</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Key Features</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• High accuracy and precision</li>
                      <li>• Easy-to-read graduations</li>
                      <li>• Ergonomic design for comfort</li>
                      <li>• Chemical-resistant materials</li>
                      <li>• Autoclavable construction</li>
                      <li>• Calibration certificates available</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Analytical chemistry procedures</li>
                      <li>• Biological sample preparation</li>
                      <li>• Pharmaceutical testing</li>
                      <li>• Quality control analysis</li>
                      <li>• Research and development</li>
                      <li>• Educational laboratories</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-800 to-blue-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-blue-100 mb-6">
                  Contact us for pricing on pipettes, tips, and complete liquid handling systems. We offer competitive
                  rates for laboratories and educational institutions with bulk discounts available.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Pipettes. Please provide pricing for different types and volumes."
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
