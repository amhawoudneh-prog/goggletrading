import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, Zap, Activity } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TransformersPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Educational Transformers</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Professional educational transformer kits designed for hands-on learning of electromagnetic principles,
            voltage transformation, and electrical circuit analysis in physics education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/transformers.jpeg"
                    alt="Educational Transformers"
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
                  <Zap className="h-6 w-6 mr-2 text-purple-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Comprehensive transformer education kits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our educational transformer kits provide students with hands-on experience in understanding
                  electromagnetic induction, voltage transformation, and AC circuit principles through practical
                  experiments and demonstrations.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-purple-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Step-up and step-down configurations</li>
                      <li>• Safe low-voltage operation</li>
                      <li>• Clear winding identification</li>
                      <li>• Removable iron core</li>
                      <li>• Multiple tap connections</li>
                      <li>• Built-in safety features</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Educational Benefits</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Demonstrates Faraday's law of induction</li>
                      <li>• Shows voltage transformation principles</li>
                      <li>• Illustrates core material effects</li>
                      <li>• Teaches power conservation concepts</li>
                      <li>• Explains efficiency calculations</li>
                      <li>• Practical circuit analysis skills</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Included Components</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Primary and secondary coils</li>
                      <li>• Laminated iron core</li>
                      <li>• Connection terminals</li>
                      <li>• AC/DC power supply</li>
                      <li>• Digital multimeter</li>
                      <li>• Experiment manual</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• High school physics courses</li>
                      <li>• University electrical engineering</li>
                      <li>• Technical training programs</li>
                      <li>• Science fair demonstrations</li>
                      <li>• Laboratory experiments</li>
                      <li>• Teacher training workshops</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-800 to-purple-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-purple-100 mb-6">
                  Contact us for detailed pricing on transformer kits, bulk educational discounts, and complete physics
                  laboratory packages. We offer competitive rates for schools and universities.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Educational Transformers. Please provide pricing and kit details."
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
