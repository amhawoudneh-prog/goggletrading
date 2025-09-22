import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, Atom, Microscope } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Carbon60AtomicModelsPage() {
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
              Chemistry Laboratory
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Carbon 60 Atomic Models</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Three-dimensional fullerene molecular models showcasing the unique soccer ball structure of C60, perfect for
            teaching advanced chemistry concepts and molecular geometry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/carbon-60-atomic-models.webp"
                    alt="Carbon 60 Atomic Models"
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
                  <Atom className="h-6 w-6 mr-2 text-purple-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Advanced molecular modeling for chemistry education
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our Carbon 60 atomic models provide students with a tangible representation of the revolutionary
                  fullerene structure, helping them understand advanced concepts in molecular chemistry, nanotechnology,
                  and materials science through hands-on exploration.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Microscope className="h-5 w-5 mr-2 text-purple-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Color-coded atomic structure</li>
                      <li>• Durable plastic construction</li>
                      <li>• Accurate bond angles and lengths</li>
                      <li>• Easy assembly and disassembly</li>
                      <li>• Soccer ball geometry visualization</li>
                      <li>• Educational instruction guide</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Molecular Properties</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 60 carbon atoms in cage structure</li>
                      <li>• 12 pentagonal faces</li>
                      <li>• 20 hexagonal faces</li>
                      <li>• Unique fullerene symmetry</li>
                      <li>• Hollow spherical shape</li>
                      <li>• Revolutionary discovery structure</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Educational Benefits</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Visualizes advanced molecular concepts</li>
                      <li>• Demonstrates symmetry principles</li>
                      <li>• Introduces nanotechnology concepts</li>
                      <li>• Shows carbon allotrope diversity</li>
                      <li>• Enhances spatial understanding</li>
                      <li>• Connects to Nobel Prize chemistry</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Advanced chemistry courses</li>
                      <li>• Materials science education</li>
                      <li>• University organic chemistry</li>
                      <li>• Research presentations</li>
                      <li>• Science fair demonstrations</li>
                      <li>• Graduate student training</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-800 to-purple-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-purple-100 mb-6">
                  Contact us for detailed pricing on Carbon 60 models, bulk educational discounts, and complete
                  molecular modeling kits. We offer competitive rates for universities and research institutions.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Carbon 60 Atomic Models. Please provide pricing and educational materials."
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
