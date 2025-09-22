"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Mail, Settings, Wrench, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RelatedAccessoriesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const productImages = [
    "/placeholder.svg?height=400&width=400&text=Microscope+Accessories",
    "/placeholder.svg?height=400&width=400&text=Objective+Lenses",
    "/placeholder.svg?height=400&width=400&text=Eyepieces+Collection",
    "/placeholder.svg?height=400&width=400&text=Microscope+Parts",
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  const relatedProducts = [
    { name: "Laser Scanning", href: "/products/laboratory/laser-scanning", category: "Microscopy" },
    { name: "Inverted Microscopes", href: "/products/laboratory/inverted", category: "Microscopy" },
    { name: "Upright Microscopes", href: "/products/laboratory/upright", category: "Microscopy" },
    { name: "Stereo Microscopes", href: "/products/laboratory/stereo", category: "Microscopy" },
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
          <span className="text-blue-600 dark:text-blue-400 font-medium">Related Accessories</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={productImages[currentImageIndex] || "/placeholder.svg"}
                alt="Microscope Accessories"
                width={500}
                height={400}
                className="w-full h-96 object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    index === currentImageIndex ? "border-blue-500" : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Microscope Accessories view ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  <Settings className="w-3 h-3 mr-1" />
                  Microscope Accessories
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-200 text-purple-800 dark:border-purple-800 dark:text-purple-400"
                >
                  <Package className="w-3 h-3 mr-1" />
                  Complete Range
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Related Accessories</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Comprehensive collection of microscope accessories, components, and replacement parts for all microscopy
                applications.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Wrench className="w-5 h-5 mr-2 text-blue-600" />
                Key Categories
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Objective lenses and eyepieces
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Illumination systems and filters
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Digital cameras and imaging systems
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Stages, condensers, and mechanical parts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Maintenance tools and cleaning supplies
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Get Quote & Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://wa.me/251949764843?text=I'm interested in Microscope Accessories"
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
                  href="mailto:amhawoudneh@gmail.com?subject=Microscope Accessories Inquiry"
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
            <CardTitle>Product Categories</CardTitle>
            <CardDescription>Complete range of microscope accessories and components</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="optics" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="optics">Optics</TabsTrigger>
                <TabsTrigger value="imaging">Imaging</TabsTrigger>
                <TabsTrigger value="mechanical">Mechanical</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              </TabsList>

              <TabsContent value="optics" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Objective Lenses</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Achromat objectives (4x, 10x, 40x, 100x)</li>
                      <li>• Plan achromat objectives</li>
                      <li>• Fluorite objectives</li>
                      <li>• Oil immersion objectives</li>
                      <li>• Phase contrast objectives</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Eyepieces & Filters</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Wide field eyepieces (10x, 15x, 20x)</li>
                      <li>• Measurement eyepieces with reticles</li>
                      <li>• Polarizing filters</li>
                      <li>• Neutral density filters</li>
                      <li>• Color filters for contrast enhancement</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="imaging" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Digital Cameras</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• USB digital cameras (1MP - 20MP)</li>
                      <li>• CMOS and CCD sensors</li>
                      <li>• Color and monochrome options</li>
                      <li>• High-speed imaging cameras</li>
                      <li>• Fluorescence imaging cameras</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Imaging Software</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Image capture and analysis software</li>
                      <li>• Measurement and annotation tools</li>
                      <li>• Time-lapse imaging capabilities</li>
                      <li>• Multi-image stitching</li>
                      <li>• Database management systems</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mechanical" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Stages & Condensers</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Mechanical stages with vernier scales</li>
                      <li>• Rotating stages for polarization</li>
                      <li>• Heated stages for live specimens</li>
                      <li>• Abbe condensers</li>
                      <li>• Phase contrast condensers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Illumination Systems</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• LED illumination systems</li>
                      <li>• Halogen lamp assemblies</li>
                      <li>• Fluorescence light sources</li>
                      <li>• Ring lights for stereo microscopes</li>
                      <li>• Fiber optic illuminators</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="maintenance" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Cleaning Supplies</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Lens cleaning papers and tissues</li>
                      <li>• Optical cleaning solutions</li>
                      <li>• Lens cleaning cloths</li>
                      <li>• Cotton swabs and brushes</li>
                      <li>• Compressed air canisters</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Tools & Parts</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Adjustment tools and wrenches</li>
                      <li>• Replacement bulbs and fuses</li>
                      <li>• Dust covers and storage cases</li>
                      <li>• Calibration slides and standards</li>
                      <li>• Spare mechanical components</li>
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
            <CardDescription>Microscopy equipment that work with these accessories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((product, index) => (
                <Link key={index} href={product.href}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-4">
                      <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg mb-3 flex items-center justify-center">
                        <Image
                          src={`/placeholder.svg?height=120&width=120&text=${product.name.replace(" ", "+")}`}
                          alt={product.name}
                          width={120}
                          height={120}
                          className="rounded-lg"
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
