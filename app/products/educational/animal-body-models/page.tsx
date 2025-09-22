import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, Heart, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AnimalBodyModelsPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Animal Body Models</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Detailed anatomical models of various animal species for comparative anatomy studies, veterinary education,
            and biological research applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/animal-body-models.webp"
                    alt="Animal Body Models - Dog anatomy cross-section showing organs and systems"
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
                  <Heart className="h-6 w-6 mr-2 text-purple-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Comparative anatomy models for biological education
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our animal body models provide detailed anatomical representations of various species, enabling
                  students to study comparative anatomy, organ systems, and evolutionary adaptations across different
                  animal groups.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Eye className="h-5 w-5 mr-2 text-purple-600" />
                      Available Models
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Dog anatomy models (dissection alternative)</li>
                      <li>• Cat anatomy models (complete systems)</li>
                      <li>• Fish anatomy models (aquatic adaptations)</li>
                      <li>• Bird anatomy models (flight adaptations)</li>
                      <li>• Mammalian organ systems</li>
                      <li>• Comparative anatomy sets</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Key Features</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Anatomically accurate details</li>
                      <li>• Removable organ components</li>
                      <li>• Color-coded organ systems</li>
                      <li>• Durable plastic construction</li>
                      <li>• Educational guide included</li>
                      <li>• Multiple viewing angles</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Educational Benefits</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Comparative anatomy studies</li>
                      <li>• Evolutionary biology concepts</li>
                      <li>• Organ system understanding</li>
                      <li>• Species adaptation analysis</li>
                      <li>• Ethical dissection alternative</li>
                      <li>• Interactive learning experience</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Perfect For</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Biology and zoology classes</li>
                      <li>• Veterinary training programs</li>
                      <li>• Comparative anatomy courses</li>
                      <li>• Natural history museums</li>
                      <li>• Research institutions</li>
                      <li>• Wildlife education centers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-800 to-purple-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-purple-100 mb-6">
                  Contact us for pricing on animal body models, complete comparative anatomy sets, and educational
                  packages. We offer special rates for schools and research institutions.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Animal Body Models for educational purposes. Please provide pricing and model options."
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
                    src="/images/dna-structure-models.webp"
                    alt="DNA Structure Models"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">DNA Structure Models</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Molecular biology models</p>
                <Link
                  href="/products/educational/dna-structure-models"
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
