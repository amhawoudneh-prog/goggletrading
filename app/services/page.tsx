import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Import, ImportIcon as Export, Truck, Wrench, Users } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive import, export, and distribution solutions tailored to meet your business needs. From sourcing
            to delivery, we handle every aspect of your supply chain.
          </p>
        </div>

        {/* Import Services */}
        <section className="mb-16">
          <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl shadow-sm">
                  <Import className="w-16 h-16 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Import Services</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Bringing the world's best products to Ethiopia
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">What We Import</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Agricultural equipment and machinery</li>
                    <li>• Laboratory instruments and chemicals</li>
                    <li>• Educational and teaching materials</li>
                    <li>• Industrial tools and equipment</li>
                    <li>• Specialized technical products</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Our Process</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Product sourcing and supplier verification</li>
                    <li>• Quality assurance and compliance checks</li>
                    <li>• Customs clearance and documentation</li>
                    <li>• Logistics coordination and tracking</li>
                    <li>• Final delivery and installation support</li>
                  </ul>
                </div>
              </div>
              <Separator className="my-6 dark:bg-gray-700" />
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Global Network:</strong> We work with trusted suppliers from over 15 countries to ensure you
                  get the best products at competitive prices.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Export Services */}
        <section className="mb-16">
          <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl shadow-sm">
                  <Export className="w-16 h-16 text-green-700 dark:text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Export Services</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Connecting Ethiopian products to global markets
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Export Specialties</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Agricultural products and commodities</li>
                    <li>• Processed food items</li>
                    <li>• Traditional crafts and textiles</li>
                    <li>• Raw materials and minerals</li>
                    <li>• Manufactured goods</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Market Reach</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Middle East and Gulf countries</li>
                    <li>• European Union markets</li>
                    <li>• North American destinations</li>
                    <li>• African regional markets</li>
                    <li>• Asian trading partners</li>
                  </ul>
                </div>
              </div>
              <Separator className="my-6 dark:bg-gray-700" />
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>Export Excellence:</strong> We ensure all exports meet international quality standards and
                  regulatory requirements for smooth market entry.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Distribution Services */}
        <section className="mb-16">
          <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl shadow-sm">
                  <Truck className="w-16 h-16 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Distribution Services</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Efficient nationwide distribution network
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Warehousing</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Climate-controlled storage</li>
                    <li>• Inventory management</li>
                    <li>• Quality preservation</li>
                    <li>• Security systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Transportation</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Nationwide delivery network</li>
                    <li>• Specialized transport vehicles</li>
                    <li>• Real-time tracking</li>
                    <li>• Timely delivery guarantee</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Last Mile</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Door-to-door delivery</li>
                    <li>• Installation services</li>
                    <li>• Training and support</li>
                    <li>• After-sales service</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-red-600 dark:text-red-400" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Technical Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Equipment installation and setup</li>
                  <li>• Training and user education</li>
                  <li>• Maintenance and repair services</li>
                  <li>• Spare parts supply</li>
                  <li>• Technical consultation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-red-600 dark:text-red-400" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Consulting Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Market analysis and research</li>
                  <li>• Product selection guidance</li>
                  <li>• Regulatory compliance support</li>
                  <li>• Business development advice</li>
                  <li>• Custom solution design</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white text-center">
                Why Choose Our Services?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Badge variant="secondary" className="mb-3 dark:bg-gray-700 dark:text-gray-300">
                    Experience
                  </Badge>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">20+ Years</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Two decades of experience in international trade and distribution
                  </p>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="mb-3 dark:bg-gray-700 dark:text-gray-300">
                    Network
                  </Badge>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Wide Reach</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Extensive network of suppliers and partners worldwide
                  </p>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="mb-3 dark:bg-gray-700 dark:text-gray-300">
                    Quality
                  </Badge>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">100% Guarantee</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Quality assurance and customer satisfaction guarantee
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0">
            <CardContent className="py-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                Let us handle your import, export, and distribution needs. Contact us today to discuss your requirements
                and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request Quote
                </a>
                <a
                  href="tel:+251911304297"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
