"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, MessageCircle, Mail, Microscope, Search, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function StereoPage() {
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
          <span className="text-blue-600 dark:text-blue-400 font-medium">Stereo Microscopes</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/stereo-microscope-new.jpeg"
                alt="Professional Stereo Microscope"
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
                  className="border-blue-200 text-blue-800 dark:border-blue-800 dark:text-blue-400"
                >
                  <Search className="w-3 h-3 mr-1" />
                  Stereo Vision
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Stereo Microscopes</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Professional stereo microscopes for three-dimensional observation, dissection work, and quality control
                applications with superior depth perception and working distance.
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
                  Dual optical path for stereoscopic vision
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Large working distance for manipulation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Variable magnification zoom system
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  LED illumination with intensity control
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ergonomic binocular head design
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Get Quote & Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://wa.me/251949764843?text=I'm interested in Stereo Microscopes"
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
                  href="mailto:amhawoudneh@gmail.com?subject=Stereo Microscope Inquiry"
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
            <CardDescription>Comprehensive information about our stereo microscopes</CardDescription>
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
                          Stereo, Parallel Optical Path
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Magnification Range</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7x - 45x</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Zoom Ratio</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1:6.5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Working Distance</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">100mm</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Field of View</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">32mm - 5mm</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Illumination</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          LED Incident & Transmitted
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="applications" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Laboratory Applications</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Biological specimen dissection</li>
                      <li>• Botanical sample examination</li>
                      <li>• Entomology studies</li>
                      <li>• Geological sample analysis</li>
                      <li>• Educational demonstrations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Industrial Applications</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Quality control inspection</li>
                      <li>• Electronic component assembly</li>
                      <li>• Precision manufacturing</li>
                      <li>• Material surface analysis</li>
                      <li>• Forensic investigations</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Optical Features</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• High-resolution optics</li>
                      <li>• Excellent depth of field</li>
                      <li>• True stereoscopic vision</li>
                      <li>• Wide field of view</li>
                      <li>• Sharp image quality</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Mechanical Features</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Smooth zoom operation</li>
                      <li>• Precise focus mechanism</li>
                      <li>• Stable base design</li>
                      <li>• Adjustable interpupillary distance</li>
                      <li>• Diopter adjustment</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="accessories" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Standard Accessories</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• 10x wide field eyepieces</li>
                      <li>• Dust cover</li>
                      <li>• LED illumination system</li>
                      <li>• Glass stage plate</li>
                      <li>• User manual</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Optional Accessories</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Digital camera adapters</li>
                      <li>• Additional eyepieces</li>
                      <li>• Polarizing filters</li>
                      <li>• Mechanical stage</li>
                      <li>• Ring light illumination</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
