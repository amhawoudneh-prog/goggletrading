import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Globe, Shield, Truck, Users, Award, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CustomerReviews } from "@/components/customer-reviews"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-800 via-red-900 to-red-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl mb-6 group hover:bg-white/15 transition-all duration-500">
                <Image
                  src="/goggle-logo-transparent.png"
                  alt="Goggle Trading PLC Logo"
                  width={120}
                  height={65}
                  className="transition-all duration-500 group-hover:scale-110"
                  style={{
                    filter: "brightness(0) invert(1) drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                  }}
                />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Your Partner in Quality Import, Export, and Distribution in Ethiopia
            </h1>
            <p className="text-xl mb-10 text-red-100 max-w-3xl mx-auto leading-relaxed">
              Since 2003, Goggle Trading PLC has been providing efficient material supply services through superior
              technological products and unwavering commitment to customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-red-800 hover:bg-gray-100 text-lg px-8 py-4">
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-red-800 bg-transparent text-lg px-8 py-4"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-red-800 dark:text-red-400 mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Years of Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-800 dark:text-red-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Satisfied Clients</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-800 dark:text-red-400 mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Products Delivered</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-800 dark:text-red-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
              <Award className="h-8 w-8 text-red-800 dark:text-red-400" />
            </div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Goggle Trading PLC</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Established in June 2003 with modest resources, Goggle Trading PLC has grown to become a trusted general
              importer, exporter, and distributor. We have successfully widened our business scope and established
              strong market outlets with overseas manufacturers, positioning ourselves as a reliable partner in
              Ethiopia's trading landscape.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-red-800 dark:border-red-400 text-red-800 dark:text-red-400 hover:bg-red-800 dark:hover:bg-red-700 hover:text-white bg-transparent"
            >
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose Goggle Trading PLC</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We combine decades of experience with cutting-edge solutions to deliver exceptional value to our clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg dark:bg-gray-800">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mx-auto mb-4">
                  <Shield className="h-8 w-8 text-red-800 dark:text-red-400" />
                </div>
                <CardTitle className="text-xl dark:text-white">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Committed to providing only the highest quality products through strong partnerships with
                  international manufacturers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg dark:bg-gray-800">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mx-auto mb-4">
                  <Truck className="h-8 w-8 text-red-800 dark:text-red-400" />
                </div>
                <CardTitle className="text-xl dark:text-white">Efficient Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  High-quality delivery service ensuring products reach your desired location efficiently and safely.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg dark:bg-gray-800">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mx-auto mb-4">
                  <Users className="h-8 w-8 text-red-800 dark:text-red-400" />
                </div>
                <CardTitle className="text-xl dark:text-white">Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Highly educated technical personnel providing maintenance and installation services for optimal
                  product usage.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg dark:bg-gray-800">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mx-auto mb-4">
                  <Globe className="h-8 w-8 text-red-800 dark:text-red-400" />
                </div>
                <CardTitle className="text-xl dark:text-white">Global Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Authorized agents for various international companies, ensuring access to cutting-edge products and
                  technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Product Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions across multiple industries with quality guaranteed
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden dark:bg-gray-800 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/agricultural-equipment.webp"
                    alt="Agricultural Equipment - Modern farming with tractor spraying crops in vast green fields"
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <CardTitle className="text-2xl mb-2 drop-shadow-lg">Agricultural Equipment</CardTitle>
                    <CardDescription className="text-gray-200 drop-shadow-md">
                      Comprehensive range of poultry materials, beekeeping equipment, and dairy machinery
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-800 dark:text-red-400 mr-3 flex-shrink-0" />
                    Poultry feeders & incubators
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-800 dark:text-red-400 mr-3 flex-shrink-0" />
                    Beekeeping supplies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-800 dark:text-red-400 mr-3 flex-shrink-0" />
                    Dairy equipment & machinery
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-red-800 hover:bg-red-900 dark:bg-red-700 dark:hover:bg-red-800 text-white transition-colors duration-300"
                >
                  <Link href="/products#agricultural">Explore Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden dark:bg-gray-800 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/laboratory-equipment.jpg"
                    alt="Laboratory Equipment - Professional lab setting with test tubes, samples, and scientific equipment"
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <CardTitle className="text-2xl mb-2 drop-shadow-lg">Laboratory Equipment</CardTitle>
                    <CardDescription className="text-gray-200 drop-shadow-md">
                      Professional laboratory glassware, chemicals, and advanced microscopy equipment
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-800 dark:text-red-400 mr-3 flex-shrink-0" />
                    Laboratory glassware & tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-800 dark:text-red-400 mr-3 flex-shrink-0" />
                    Chemical supplies & reagents
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-800 dark:text-red-400 mr-3 flex-shrink-0" />
                    Advanced microscopes
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-red-800 hover:bg-red-900 dark:bg-red-700 dark:hover:bg-red-800 text-white transition-colors duration-300"
                >
                  <Link href="/products#laboratory">Explore Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden dark:bg-gray-800 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/educational-equipment.webp"
                    alt="Educational Equipment - Student studying with books, calculator, and learning materials"
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <CardTitle className="text-2xl mb-2 drop-shadow-lg">Educational Equipment</CardTitle>
                    <CardDescription className="text-gray-200 drop-shadow-md">
                      Teaching aids for biology, chemistry, and physics laboratories
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-800 dark:text-red-400 mr-3 flex-shrink-0" />
                    Biology & anatomy models
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-800 dark:text-red-400 mr-3 flex-shrink-0" />
                    Chemistry apparatus & tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-800 dark:text-red-400 mr-3 flex-shrink-0" />
                    Physics instruments & aids
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-red-800 hover:bg-red-900 dark:bg-red-700 dark:hover:bg-red-800 text-white transition-colors duration-300"
                >
                  <Link href="/products#educational">Explore Products</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <CustomerReviews maxReviews={3} />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Target className="h-16 w-16 mx-auto mb-6 text-red-200" />
            <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl mb-10 text-red-100 leading-relaxed">
              Contact us today to discuss your requirements and discover how we can serve your business needs with our
              comprehensive solutions and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-red-800 hover:bg-gray-100 text-lg px-8 py-4">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-red-800 bg-transparent text-lg px-8 py-4"
              >
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
