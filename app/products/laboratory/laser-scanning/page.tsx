"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, MessageCircle, Mail, Microscope, Zap, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LaserScanningPage() {
  const relatedProducts = [
    {
      name: "Inverted Microscopes",
      href: "/products/laboratory/inverted",
      category: "Microscopy",
      image: "/images/inverted-microscope.jpeg",
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
          <span className="text-blue-600 dark:text-blue-400 font-medium">Laser Scanning Microscopes</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/laser-scanning-microscope.jpeg"
                alt="Leica Laser Scanning Microscope"
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
                  Advanced Microscopy
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-200 text-purple-800 dark:border-purple-800 dark:text-purple-400"
                >
                  <Zap className="w-3 h-3 mr-1" />
                  Laser Technology
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Laser Scanning Microscopes</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Advanced confocal laser scanning microscopes for high-resolution imaging, 3D reconstruction, and
                fluorescence analysis with cutting-edge Leica technology.
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
                  Confocal laser scanning technology
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Multiple laser wavelengths (405, 488, 561, 633 nm)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  High-resolution imaging up to 4096×4096 pixels
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  3D reconstruction and Z-stack capabilities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Advanced image analysis software
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Get Quote & Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://wa.me/251949764843?text=I'm interested in Laser Scanning Microscopes"
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
                  href="mailto:amhawoudneh@gmail.com?subject=Laser Scanning Microscope Inquiry"
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
            <CardDescription>Comprehensive information about our laser scanning microscopes</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
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
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Laser Wavelengths</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">405, 488, 561, 633 nm</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Resolution (XY)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">120 nm (488 nm laser)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Resolution (Z)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">350 nm (488 nm laser)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Image Size</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          Up to 4096×4096 pixels
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Scan Speed</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          Up to 420 fps (512×512)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Objectives</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          10x, 20x, 40x, 63x, 100x
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="applications" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Research Applications</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Cell biology and live cell imaging</li>
                      <li>• Fluorescence microscopy</li>
                      <li>• Protein localization studies</li>
                      <li>• Developmental biology research</li>
                      <li>• Neuroscience applications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Clinical Applications</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Pathology and histology</li>
                      <li>• Cancer research</li>
                      <li>• Immunofluorescence studies</li>
                      <li>• Tissue analysis</li>
                      <li>• Diagnostic applications</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Imaging Features</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Multi-channel fluorescence imaging</li>
                      <li>• Time-lapse microscopy</li>
                      <li>• Z-stack and 3D reconstruction</li>
                      <li>• FRAP and FLIP experiments</li>
                      <li>• Spectral imaging capabilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Software Features</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Advanced image analysis tools</li>
                      <li>• Automated acquisition protocols</li>
                      <li>• 3D visualization and rendering</li>
                      <li>• Quantitative analysis modules</li>
                      <li>• Data export and sharing options</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="maintenance" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Regular Maintenance</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Daily: Clean objectives and stage</li>
                      <li>• Weekly: Check laser alignment</li>
                      <li>• Monthly: Calibrate system performance</li>
                      <li>• Quarterly: Professional service check</li>
                      <li>• Annually: Complete system overhaul</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Environmental Requirements</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Temperature: 20-25°C (±2°C)</li>
                      <li>• Humidity: 45-65% RH</li>
                      <li>• Vibration isolation required</li>
                      <li>• Dust-free environment</li>
                      <li>• Stable power supply (UPS recommended)</li>
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
