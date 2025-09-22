import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, FlaskConical, Thermometer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ErlenmeyerFlasksPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Erlenmeyer Flasks</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Conical laboratory flasks with narrow necks, ideal for mixing, heating, and storing solutions with minimal
            risk of spillage during swirling and agitation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/erlenmeyer-flasks.png"
                    alt="Erlenmeyer Flasks"
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
                  <FlaskConical className="h-6 w-6 mr-2 text-blue-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Conical flasks for mixing and heating applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our Erlenmeyer flasks feature the classic conical shape with narrow neck design, manufactured from
                  high-quality borosilicate glass for superior thermal and chemical resistance in laboratory
                  applications.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Thermometer className="h-5 w-5 mr-2 text-blue-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Borosilicate glass construction</li>
                      <li>• Conical shape prevents spillage</li>
                      <li>• Narrow neck for easy handling</li>
                      <li>• Excellent thermal shock resistance</li>
                      <li>• Chemical-resistant surface</li>
                      <li>• Easy-to-clean smooth finish</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Available Sizes</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 50ml - Small volume experiments</li>
                      <li>• 125ml - Standard laboratory use</li>
                      <li>• 250ml - Medium volume applications</li>
                      <li>• 500ml - Large volume work</li>
                      <li>• 1000ml - Industrial applications</li>
                      <li>• 2000ml - Bulk preparations</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Types Available</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Narrow neck Erlenmeyer flasks</li>
                      <li>• Wide neck Erlenmeyer flasks</li>
                      <li>• Graduated Erlenmeyer flasks</li>
                      <li>• Heavy duty thick wall flasks</li>
                      <li>• Plastic Erlenmeyer flasks</li>
                      <li>• Vacuum flasks with side arms</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Solution mixing and preparation</li>
                      <li>• Heating and boiling liquids</li>
                      <li>• Crystallization processes</li>
                      <li>• Microbiology culture work</li>
                      <li>• Titration procedures</li>
                      <li>• Storage of reagents</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-800 to-blue-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-blue-100 mb-6">
                  Contact us for bulk pricing on Erlenmeyer flasks, complete glassware sets, and laboratory packages. We
                  offer competitive rates for educational institutions and research facilities.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Erlenmeyer Flasks. Please provide pricing for different sizes and quantities."
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
