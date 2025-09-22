"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, MessageCircle, Mail, Microscope, FlaskConical, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function InvertedPage() {
  const relatedProducts = [
    {
      name: "Laser Scanning",
      href: "/products/laboratory/laser-scanning",
      category: "Microscopy",
      image: "/images/laser-scanning-microscope.jpeg",
    },
    {
      name: "Upright Microscopes",
      href: "/products/laboratory/upright",
      category: "Microscopy",
      image: "/images/upright-microscope.webp",
    },
    {
      name: "Stereo Microscopes",
      href: "/products/laboratory/stereo",
      category: "Microscopy",
      image: "/images/stereo-microscope.jpeg",
    },
    {
      name: "Related Accessories",
      href: "/products/laboratory/related-accessories",
      category: "Accessories",
      image: "/placeholder.svg?height=120&width=120&text=Accessories",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600 dark:hover:text-blue-400">
            Products
          </Link>
          <span>/</span>
          <Link href="/products#laboratory" className="hover:text-blue-600 dark:hover:text-blue-400">
            Laboratory Equipment
          </Link>
          <span>/</span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">Inverted Microscopes</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/inverted-microscope.jpeg"
                alt="Professional Inverted Microscope"
                width={600}
                height={500}
                className="w-full h-96 object-contain p-4"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  <Microscope className="w-3 h-3 mr-1" />
                  Laboratory Microscopy
                </Badge>
                <Badge
                  variant="outline"
                  className="border-green-200 text-green-800 dark:border-green-800 dark:text-green-400"
                >
                  <FlaskConical className="w-3 h-3 mr-1" />
                  Cell Culture
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Inverted Microscopes</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Professional inverted microscopes designed for cell culture observation, live cell imaging, and tissue
                culture applications with superior optical performance.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2 text-blue-600" />
                Key Features
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Inverted optical design for cell culture work
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Large working distance objectives
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Phase contrast and DIC capabilities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fluorescence imaging options
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Heated stage and CO₂ incubation compatibility
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Get Quote & Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://wa.me/251949764843?text=I'm interested in Inverted Microscopes"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-lg px-4 py-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
                <a
                  href="tel:+251949764843"
                  className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                <a
                  href="mailto:amhawoudneh@gmail.com?subject=Inverted Microscope Inquiry"
                  className="flex items-center justify-center bg-gray-500 hover:bg-gray-600 rounded-lg px-4 py-2 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>Comprehensive information about our inverted microscopes</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="accessories">Accessories</TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                          Specification
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Optical System</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          Inverted, Infinity Corrected
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Magnification Range</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">40x - 1000x</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Objectives</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          4x, 10x, 20x, 40x, 100x (Oil)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Working Distance</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          Up to 7.5mm (10x objective)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Stage Size</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">230mm × 200mm</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Illumination</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          LED, Halogen, Fluorescence
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="applications" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Cell Biology Applications</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Live cell imaging and monitoring</li>
                      <li>• Cell culture observation</li>
                      <li>• Cell division studies</li>
                      <li>• Transfection experiments</li>
                      <li>• Cell viability assays</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Research Applications</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Tissue culture analysis</li>
                      <li>• Developmental biology</li>
                      <li>• Cancer research</li>
                      <li>• Drug screening</li>
                      <li>• Stem cell research</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Optical Features</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Phase contrast optics</li>
                      <li>• Differential interference contrast (DIC)</li>
                      <li>• Fluorescence capabilities</li>
                      <li>• Brightfield illumination</li>
                      <li>• Polarization options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Mechanical Features</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Motorized focus drive</li>
                      <li>• XY mechanical stage</li>
                      <li>• Objective turret (5-position)</li>
                      <li>• Ergonomic design</li>
                      <li>• Vibration isolation</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="accessories" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Essential Accessories</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Heated stage inserts</li>
                      <li>• CO₂ incubation chambers</li>
                      <li>• Digital cameras</li>
                      <li>• Micromanipulators</li>
                      <li>• Perfusion systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Optional Accessories</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Time-lapse imaging systems</li>
                      <li>• Multi-point visiting</li>
                      <li>• Environmental control</li>
                      <li>• Image analysis software</li>
                      <li>• Motorized components</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        <Card>
          <CardHeader>
            <CardTitle>Related Products</CardTitle>
            <CardDescription>Other microscopy equipment and accessories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((product, index) => (
                <Link key={index} href={product.href}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-4">
                      <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={120}
                          height={120}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <h4 className="font-medium text-sm mb-1">{product.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
