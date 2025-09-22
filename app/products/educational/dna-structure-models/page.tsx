import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, Dna, Atom } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DNAStructureModelsPage() {
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
              Biology Laboratory
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">DNA Structure Models</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Three-dimensional DNA double helix models designed to demonstrate molecular structure, base pairing, and
            genetic principles for biology and biochemistry education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/dna-structure-models.webp"
                    alt="DNA Structure Models - 3D double helix with color-coded atoms"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-6">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                  <Dna className="h-6 w-6 mr-2 text-purple-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Interactive molecular biology teaching models
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our DNA structure models provide hands-on learning experiences for understanding the fundamental
                  principles of molecular biology, genetics, and biochemistry through accurate three-dimensional
                  representations.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Atom className="h-5 w-5 mr-2 text-purple-600" />
                      Available Models
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Double helix structure model</li>
                      <li>• DNA replication demonstration model</li>
                      <li>• Base pairing interactive model</li>
                      <li>• DNA transcription model</li>
                      <li>• Chromosome structure model</li>
                      <li>• Gene expression model</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Key Features</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Color-coded base pairs (A-T, G-C)</li>
                      <li>• Detachable components for interaction</li>
                      <li>• Accurate molecular proportions</li>
                      <li>• Durable plastic construction</li>
                      <li>• Educational instruction guide</li>
                      <li>• Demonstration stand included</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Educational Benefits</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Visual understanding of DNA structure</li>
                      <li>• Hands-on molecular interaction</li>
                      <li>• Base pairing rule demonstration</li>
                      <li>• Genetic code comprehension</li>
                      <li>• Enhanced student engagement</li>
                      <li>• Complex concept simplification</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Perfect For</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• High school biology classes</li>
                      <li>• University biochemistry courses</li>
                      <li>• Medical school programs</li>
                      <li>• Research institution training</li>
                      <li>• Science museums and centers</li>
                      <li>• Genetics counseling education</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-800 to-purple-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-purple-100 mb-6">
                  Contact us for pricing on DNA models, complete molecular biology teaching sets, and educational
                  packages. We offer special rates for schools and universities.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in DNA Structure Models for educational purposes. Please provide pricing and model options."
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

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Related Educational Models</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded mb-3 overflow-hidden">
                  <Image
                    src="/images/human-body-models.jpeg"
                    alt="Human Body Models"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Human Body Models</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Complete anatomical body models</p>
                <Link
                  href="/products/educational/human-body-models"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm font-medium"
                >
                  View Details →
                </Link>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded mb-3 overflow-hidden">
                  <Image
                    src="/images/plant-models.jpeg"
                    alt="Plant Models"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Plant Models</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Botanical education models</p>
                <Link
                  href="/products/educational/plant-models"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm font-medium"
                >
                  View Details →
                </Link>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded mb-3 overflow-hidden">
                  <Image
                    src="/images/tissue-samples.jpeg"
                    alt="Tissue Samples"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tissue Samples</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Microscopy specimens</p>
                <Link
                  href="/products/educational/tissue-samples"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm font-medium"
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
