import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, RotateCcw, Droplets } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HoneyExtractorsPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Honey Extractors</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Professional honey extraction equipment that uses centrifugal force to efficiently extract honey from
            honeycomb frames without damaging the comb structure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/honey-extractor.png"
                    alt="Honey Extractors"
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
                  Efficient honey extraction through centrifugal force
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our honey extractors use centrifugal force to spin honey frames, extracting honey while preserving the
                  honeycomb for reuse by bees. Available in manual and electric models for different operation scales.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Droplets className="h-5 w-5 mr-2 text-red-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Stainless steel construction</li>
                      <li>• Food-grade materials throughout</li>
                      <li>• Smooth spinning mechanism</li>
                      <li>• Honey gate for easy collection</li>
                      <li>• Removable basket for cleaning</li>
                      <li>• Stable base design</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Available Types</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 2-frame manual extractor (small scale)</li>
                      <li>• 4-frame manual extractor (medium scale)</li>
                      <li>• 6-frame electric extractor (commercial)</li>
                      <li>• 9-frame electric extractor (large commercial)</li>
                      <li>• Radial extractors (high capacity)</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Benefits</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Preserves honeycomb for reuse</li>
                      <li>• Efficient honey extraction</li>
                      <li>• Reduces labor and time</li>
                      <li>• Maintains honey quality</li>
                      <li>• Easy to clean and maintain</li>
                      <li>• Increases productivity</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Hobbyist beekeeping operations</li>
                      <li>• Commercial honey production</li>
                      <li>• Beekeeping cooperatives</li>
                      <li>• Honey processing facilities</li>
                      <li>• Educational beekeeping programs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-red-100 mb-6">
                  Contact us for pricing on manual and electric honey extractors. We offer complete beekeeping equipment
                  packages and competitive pricing for commercial operations.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Honey Extractors. Please provide pricing for manual and electric models."
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
