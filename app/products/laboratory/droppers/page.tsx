import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DroppersPage() {
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
                src="/images/droppers.webp"
                alt="Laboratory Droppers"
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
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Laboratory Droppers</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Precision glass droppers with rubber bulbs for accurate liquid dispensing and measurement in laboratory
                applications.
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
                    High-quality borosilicate glass construction for chemical resistance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Natural rubber bulb for precise liquid control
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Graduated markings for accurate measurements
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Suitable for acids, bases, and organic solvents
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Easy to clean and sterilize
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
                    <span className="font-semibold text-gray-900 dark:text-white">Capacity:</span>
                    <p className="text-gray-600 dark:text-gray-400">1ml - 10ml</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Bulb Material:</span>
                    <p className="text-gray-600 dark:text-gray-400">Natural Rubber</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Temperature Range:</span>
                    <p className="text-gray-600 dark:text-gray-400">-20°C to +150°C</p>
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
                  <p>• Analytical chemistry procedures</p>
                  <p>• Titration experiments</p>
                  <p>• Sample preparation</p>
                  <p>• Quality control testing</p>
                  <p>• Educational laboratory work</p>
                  <p>• Research and development</p>
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
                    <span>amhawoudneh@gmail.com</span>
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
      </div>
    </div>
  )
}
