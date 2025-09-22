import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, FlaskConical, Gauge } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MilkTestingEquipmentPage() {
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
              Dairy Equipment
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Milk Testing Equipment</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Comprehensive milk testing equipment and accessories for complete dairy quality analysis including pH
            meters, lactometers, thermometers, and testing chemicals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/milk-testing-equipment.webp"
                    alt="Milk Testing Equipment"
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
                  <FlaskConical className="h-6 w-6 mr-2 text-red-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Complete milk quality testing solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our comprehensive milk testing equipment includes all necessary instruments and accessories for
                  complete dairy quality analysis, from basic field tests to advanced laboratory procedures.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Gauge className="h-5 w-5 mr-2 text-red-600" />
                      Testing Instruments
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Digital pH meters for acidity testing</li>
                      <li>• Lactometers for density measurement</li>
                      <li>• Thermometers for temperature control</li>
                      <li>• Alcohol test equipment</li>
                      <li>• Methylene blue reduction test kits</li>
                      <li>• Resazurin test equipment</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Testing Parameters</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Acidity and pH levels</li>
                      <li>• Specific gravity and density</li>
                      <li>• Bacterial contamination</li>
                      <li>• Alcohol stability</li>
                      <li>• Temperature monitoring</li>
                      <li>• Adulteration detection</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Included Accessories</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Calibration solutions</li>
                      <li>• Testing chemicals and reagents</li>
                      <li>• Sample collection containers</li>
                      <li>• Measurement cylinders</li>
                      <li>• Instruction manuals</li>
                      <li>• Carrying case for portability</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Farm-level milk quality testing</li>
                      <li>• Milk collection center analysis</li>
                      <li>• Dairy processing quality control</li>
                      <li>• Veterinary field testing</li>
                      <li>• Educational training programs</li>
                      <li>• Research and development</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-red-100 mb-6">
                  Contact us for pricing on complete milk testing kits, individual instruments, and replacement
                  chemicals. We offer competitive packages for farms and laboratories.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Milk Testing Equipment. Please provide pricing for complete testing kits."
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

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded mb-3">
                  <Image
                    src="/images/milk-analyzer.jpg"
                    alt="Milk Analyzers"
                    width={200}
                    height={200}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Milk Analyzers</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Advanced milk composition analysis</p>
                <Link
                  href="/products/agricultural/milk-analyzers"
                  className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium"
                >
                  View Details →
                </Link>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded mb-3">
                  <Image
                    src="/images/milk-testing-centrifuges.jpeg"
                    alt="Milk Testing Centrifuges"
                    width={200}
                    height={200}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Milk Testing Centrifuges</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Precision fat testing equipment</p>
                <Link
                  href="/products/agricultural/milk-testing-centrifuges"
                  className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium"
                >
                  View Details →
                </Link>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded mb-3">
                  <Image
                    src="/images/milking-machine.png"
                    alt="Milking Machines"
                    width={200}
                    height={200}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Milking Machines</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Professional milking systems</p>
                <Link
                  href="/products/agricultural/milking-machines"
                  className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium"
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
