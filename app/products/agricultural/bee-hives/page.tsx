import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, Home, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BeeHivesPage() {
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
              Beekeeping Materials
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Bee Hives</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Complete beehive systems designed to provide optimal living conditions for bee colonies while facilitating
            easy management and honey harvesting for beekeepers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/bee-hive.png"
                    alt="Bee Hives"
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
                  <Home className="h-6 w-6 mr-2 text-red-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Complete hive systems for successful beekeeping
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our bee hives are constructed from high-quality materials to provide durable, weather-resistant homes
                  for bee colonies. Designed for easy inspection, maintenance, and honey harvesting.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Layers className="h-5 w-5 mr-2 text-red-600" />
                      Hive Components
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Bottom board (screened or solid)</li>
                      <li>• Deep hive bodies (brood chambers)</li>
                      <li>• Medium supers (honey storage)</li>
                      <li>• Frames with foundation</li>
                      <li>• Inner cover and telescoping lid</li>
                      <li>• Queen excluder (optional)</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Hive Types</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Langstroth hives (standard commercial)</li>
                      <li>• Top bar hives (natural beekeeping)</li>
                      <li>• Warre hives (vertical top bar)</li>
                      <li>• Flow hives (modern extraction)</li>
                      <li>• Nucleus hives (starter colonies)</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Materials</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Cedar wood (naturally rot-resistant)</li>
                      <li>• Pine wood (treated for durability)</li>
                      <li>• Plastic hives (low maintenance)</li>
                      <li>• Polystyrene hives (insulated)</li>
                      <li>• Composite materials (weather-resistant)</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Benefits</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Optimal bee colony development</li>
                      <li>• Easy hive inspection and management</li>
                      <li>• Efficient honey harvesting</li>
                      <li>• Weather protection for bees</li>
                      <li>• Expandable modular design</li>
                      <li>• Long-lasting construction</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-red-100 mb-6">
                  Contact us for complete hive pricing, starter packages, and bulk orders. We offer competitive prices
                  for both beginner and commercial beekeepers.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Bee Hives. Please provide pricing for complete hive systems and starter packages."
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
