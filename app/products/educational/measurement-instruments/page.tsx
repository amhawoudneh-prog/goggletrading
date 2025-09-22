import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, Scale, Ruler } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MeasurementInstrumentsPage() {
  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
              Educational Equipment
            </Badge>
            <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
              Physics Laboratory
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Measurement Instruments</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Comprehensive collection of precision measurement tools including digital scales, balance beams, and force
            gauges for accurate physics measurements and scientific experiments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/measurement-instruments.jpeg"
                    alt="Measurement Instruments"
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
                  <Scale className="h-6 w-6 mr-2 text-purple-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Precision measurement tools for scientific education
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our comprehensive measurement instrument collection provides students with hands-on experience using
                  professional-grade tools for accurate mass, force, and dimensional measurements in physics and
                  chemistry experiments.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Ruler className="h-5 w-5 mr-2 text-purple-600" />
                      Included Instruments
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Digital precision scale (0.01g accuracy)</li>
                      <li>• Triple beam balance</li>
                      <li>• Spring force gauges (various ranges)</li>
                      <li>• Digital calipers</li>
                      <li>• Measuring cylinders</li>
                      <li>• Micrometer screws</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Key Features</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• High precision measurements</li>
                      <li>• Digital and analog displays</li>
                      <li>• Durable construction</li>
                      <li>• Easy calibration systems</li>
                      <li>• Multiple measurement units</li>
                      <li>• Professional laboratory quality</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Educational Benefits</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Develops measurement accuracy skills</li>
                      <li>• Introduces uncertainty analysis</li>
                      <li>• Teaches proper instrument handling</li>
                      <li>• Supports quantitative experiments</li>
                      <li>• Reinforces scientific methodology</li>
                      <li>• Prepares for advanced studies</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Physics laboratory experiments</li>
                      <li>• Chemistry quantitative analysis</li>
                      <li>• Engineering measurements</li>
                      <li>• Materials testing</li>
                      <li>• Quality control procedures</li>
                      <li>• Research and development</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-800 to-purple-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-purple-100 mb-6">
                  Contact us for detailed pricing on measurement instrument sets, individual tools, and complete
                  laboratory packages. We offer competitive rates and bulk discounts for educational institutions.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Measurement Instruments. Please provide pricing for complete sets and individual tools."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp for Quote
                  </a>
                  <a
                    href="tel:+251949764843"
                    className="flex items-center justify-center border border-white text-white px-4 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-800 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center justify-center bg-white text-purple-800 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
