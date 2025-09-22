import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, RotateCcw, ChefHat } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ButterChurnersPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Butter Churners</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Traditional and modern butter churning equipment for converting cream into high-quality butter, perfect for
            artisanal dairy operations and small-scale butter production.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/butter-churners.jpeg"
                    alt="Butter Churners"
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
                  Traditional and modern butter making equipment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our butter churners combine traditional butter-making methods with modern efficiency, allowing dairy
                  operations to produce high-quality artisanal butter from fresh cream with consistent results.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <ChefHat className="h-5 w-5 mr-2 text-red-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Stainless steel construction</li>
                      <li>• Variable speed control</li>
                      <li>• Easy-to-clean design</li>
                      <li>• Efficient cream agitation</li>
                      <li>• Buttermilk drainage system</li>
                      <li>• Food-grade materials throughout</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Available Types</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Manual hand-crank churners (1-5 liters)</li>
                      <li>• Electric table-top churners (5-20 liters)</li>
                      <li>• Commercial floor churners (20-100 liters)</li>
                      <li>• Continuous butter making machines</li>
                      <li>• Traditional wooden churners</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Process Features</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Optimal churning temperature control</li>
                      <li>• Adjustable agitation speed</li>
                      <li>• Butter washing capability</li>
                      <li>• Salt incorporation system</li>
                      <li>• Buttermilk separation</li>
                      <li>• Consistent butter texture</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Applications</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Artisanal butter production</li>
                      <li>• Small dairy operations</li>
                      <li>• Farm-to-table restaurants</li>
                      <li>• Specialty food production</li>
                      <li>• Educational demonstrations</li>
                      <li>• Home butter making</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-red-100 mb-6">
                  Contact us for pricing on butter churners, complete butter-making setups, and training programs. We
                  offer competitive rates for both artisanal and commercial operations.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Butter Churners. Please provide pricing for different capacities and types."
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
                    src="/images/cream-separator.jpeg"
                    alt="Cream Separators"
                    width={200}
                    height={200}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cream Separators</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Centrifugal cream separation</p>
                <Link
                  href="/products/agricultural/cream-separators"
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
          </div>
        </section>
      </div>
    </div>
  )
}
