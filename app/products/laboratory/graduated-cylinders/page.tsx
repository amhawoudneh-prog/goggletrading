import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function GraduatedCylindersPage() {
  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/images/beakers-new.jpeg"
                alt="Graduated Cylinders"
                width={600}
                height={600}
                className="w-full h-full object-contain p-8"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Laboratory Equipment
                </Badge>
                <Badge
                  variant="outline"
                  className="border-green-200 text-green-800 dark:border-green-800 dark:text-green-200"
                >
                  In Stock
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Graduated Cylinders</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Precision graduated cylinders for accurate volume measurements in laboratory applications. Available in
                multiple sizes.
              </p>
            </div>

            {/* Key Features */}
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    High-quality borosilicate glass construction
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Clear graduation markings for precise measurements
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Pour spout for easy liquid transfer
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Multiple volume capacities available
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Chemical resistant and autoclavable
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Material:</span>
                    <p className="text-gray-600 dark:text-gray-400">Borosilicate Glass</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Capacities:</span>
                    <p className="text-gray-600 dark:text-gray-400">50ml, 100ml, 250ml, 500ml</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Accuracy:</span>
                    <p className="text-gray-600 dark:text-gray-400">±1% at 20°C</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Temperature Range:</span>
                    <p className="text-gray-600 dark:text-gray-400">-20°C to +500°C</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2 text-gray-700 dark:text-gray-300">
                  <p>• Precise volume measurements</p>
                  <p>• Solution preparation</p>
                  <p>• Analytical chemistry</p>
                  <p>• Quality control testing</p>
                  <p>• Educational laboratories</p>
                  <p>• Research applications</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                  Get Quote & More Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-blue-800 dark:text-blue-200">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>+251 94 976 4843</span>
                  </div>
                  <div className="flex items-center text-blue-800 dark:text-blue-200">
                    <Mail className="w-4 h-4 mr-3" />
                    <span>info@goggletrading.com</span>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 bg-transparent"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12 dark:bg-gray-700" />

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Laboratory Equipment</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-50 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/beakers.jpeg"
                    alt="Beakers"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Beakers</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Glass beakers for general laboratory use
                </p>
                <Link href="/products/laboratory/beakers">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-50 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/pipettes.jpeg"
                    alt="Pipettes"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pipettes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Graduated glass pipettes for precise measurements
                </p>
                <Link href="/products/laboratory/pipettes">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-50 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/erlenmeyer-flasks.png"
                    alt="Erlenmeyer Flasks"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Erlenmeyer Flasks</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Conical flasks for mixing and heating solutions
                </p>
                <Link href="/products/laboratory/erlenmeyer-flasks">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
