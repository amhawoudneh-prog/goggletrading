import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AmmoniumHydroxidePage() {
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
                src="/images/ammonium-hydroxide.jpeg"
                alt="Ammonium Hydroxide Solution"
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
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  Laboratory Chemical
                </Badge>
                <Badge
                  variant="outline"
                  className="border-yellow-200 text-yellow-800 dark:border-yellow-800 dark:text-yellow-200"
                >
                  Caution Required
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ammonium Hydroxide</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Laboratory grade ammonium hydroxide solution (NH₄OH) in glass reagent bottle for analytical chemistry
                and pH adjustment.
              </p>
            </div>

            {/* Safety Alert */}
            <Alert className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20">
              <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                Handle with care. Use in well-ventilated areas with appropriate safety equipment. Avoid contact with
                skin and eyes.
              </AlertDescription>
            </Alert>

            {/* Key Features */}
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Laboratory grade purity
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Clear aqueous solution
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Glass reagent bottle packaging
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Suitable for analytical procedures
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Stable under proper storage conditions
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
                    <span className="font-semibold text-gray-900 dark:text-white">Chemical Formula:</span>
                    <p className="text-gray-600 dark:text-gray-400">NH₄OH</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Concentration:</span>
                    <p className="text-gray-600 dark:text-gray-400">25-28% NH₃</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Grade:</span>
                    <p className="text-gray-600 dark:text-gray-400">Laboratory Grade</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">pH:</span>
                    <p className="text-gray-600 dark:text-gray-400">11-12 (alkaline)</p>
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
                  <p>• pH adjustment in analytical procedures</p>
                  <p>• Precipitation reactions</p>
                  <p>• Qualitative analysis</p>
                  <p>• Buffer solution preparation</p>
                  <p>• Educational laboratory experiments</p>
                  <p>• Research applications</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  Get Quote & More Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-green-800 dark:text-green-200">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>+251 94 976 4843</span>
                  </div>
                  <div className="flex items-center text-green-800 dark:text-green-200">
                    <Mail className="w-4 h-4 mr-3" />
                    <span>info@goggletrading.com</span>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 bg-transparent"
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
