import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, MessageCircle, Mail, Zap, Gauge } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MilkingMachinesPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Milking Machines</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Professional milking equipment designed to improve efficiency, maintain milk quality, and reduce labor in
            dairy operations from small farms to large commercial facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/milking-machine.png"
                    alt="Milking Machines"
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
                  <Zap className="h-6 w-6 mr-2 text-red-600" />
                  Product Overview
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Efficient and hygienic milking solutions for dairy operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our milking machines combine advanced technology with reliable performance to ensure efficient milk
                  extraction while maintaining the highest standards of hygiene and animal welfare.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                      <Gauge className="h-5 w-5 mr-2 text-red-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Consistent vacuum pressure control</li>
                      <li>• Stainless steel construction</li>
                      <li>• Automatic pulsation system</li>
                      <li>• Easy-to-clean components</li>
                      <li>• Low noise operation</li>
                      <li>• Energy-efficient motors</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">System Types</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Portable milking units (1-4 cows)</li>
                      <li>• Pipeline milking systems (5-50 cows)</li>
                      <li>• Milking parlor systems (50+ cows)</li>
                      <li>• Robotic milking systems (automated)</li>
                      <li>• Mobile milking units</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Components</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Vacuum pump and tank</li>
                      <li>• Pulsator and regulators</li>
                      <li>• Milking clusters and liners</li>
                      <li>• Milk collection system</li>
                      <li>• Cleaning and sanitizing equipment</li>
                      <li>• Control panels and monitoring</li>
                    </ul>
                  </div>

                  <Separator className="dark:bg-gray-700" />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Benefits</h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Increased milking efficiency</li>
                      <li>• Improved milk quality and hygiene</li>
                      <li>• Reduced labor requirements</li>
                      <li>• Better animal comfort and health</li>
                      <li>• Consistent milking routine</li>
                      <li>• Higher milk yields</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Pricing Information</h3>
                <p className="text-red-100 mb-6">
                  Contact us for detailed pricing on milking systems, installation services, and maintenance packages.
                  We offer solutions for farms of all sizes with competitive financing options.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/251949764843?text=I'm interested in Milking Machines. Please provide pricing for different system types and herd sizes."
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
      </div>
    </div>
  )
}
