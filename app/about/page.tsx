import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Goggle Trading PLC</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Established in 2003, we are Ethiopia's trusted partner for quality import, export, and distribution
            services. Our commitment to excellence has made us a leading supplier in the agricultural, laboratory, and
            educational sectors.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">20+</h3>
              <p className="text-gray-600 dark:text-gray-400">Years of Experience</p>
            </CardContent>
          </Card>
          <Card className="text-center dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">500+</h3>
              <p className="text-gray-600 dark:text-gray-400">Satisfied Clients</p>
            </CardContent>
          </Card>
          <Card className="text-center dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">15+</h3>
              <p className="text-gray-600 dark:text-gray-400">Countries Served</p>
            </CardContent>
          </Card>
          <Card className="text-center dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="pt-6">
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">100%</h3>
              <p className="text-gray-600 dark:text-gray-400">Quality Guarantee</p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">Our Story</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Two decades of growth, innovation, and service excellence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none text-gray-700 dark:text-gray-300">
                <p className="mb-4">
                  Founded in 2003, Goggle Trading PLC began as a small import-export business with a vision to bridge
                  the gap between international suppliers and Ethiopian businesses. Over the years, we have grown into
                  one of Ethiopia's most trusted trading companies, specializing in agricultural equipment, laboratory
                  supplies, and educational materials.
                </p>
                <p className="mb-4">
                  Our journey has been marked by continuous growth and expansion. We have built strong relationships
                  with manufacturers and suppliers worldwide, enabling us to offer our clients access to the latest
                  technologies and highest quality products at competitive prices.
                </p>
                <p>
                  Today, we serve hundreds of clients across Ethiopia, from small farms to large institutions, providing
                  not just products but comprehensive solutions that drive success and innovation in their respective
                  fields.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                  Our Mission
                  <Badge variant="secondary" className="ml-3 dark:bg-gray-700 dark:text-gray-300">
                    Purpose
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  To provide Ethiopian businesses and institutions with access to world-class agricultural, laboratory,
                  and educational equipment through reliable import, export, and distribution services. We are committed
                  to supporting Ethiopia's development by delivering quality products, expert guidance, and exceptional
                  customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                  Our Vision
                  <Badge variant="secondary" className="ml-3 dark:bg-gray-700 dark:text-gray-300">
                    Future
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  To be Ethiopia's leading trading company, recognized for our integrity, innovation, and impact on the
                  agricultural, scientific, and educational sectors. We envision a future where our services contribute
                  significantly to Ethiopia's economic growth and technological advancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">Our Core Values</CardTitle>
              <CardDescription className="dark:text-gray-400">
                The principles that guide everything we do
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Quality Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We never compromise on quality, ensuring every product meets the highest international standards.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Customer Focus</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Our customers' success is our success. We provide personalized service and ongoing support.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Global Reach</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We leverage our international network to bring the best products and solutions to Ethiopia.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0">
            <CardContent className="py-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust Goggle Trading PLC for their import, export, and
                distribution needs. Let's discuss how we can support your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="/products"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition-colors"
                >
                  View Our Products
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
