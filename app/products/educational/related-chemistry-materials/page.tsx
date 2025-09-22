"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  Phone,
  MessageCircle,
  Mail,
  Star,
  Shield,
  Award,
  Truck,
  CheckCircle,
  FlaskConical,
  BookOpen,
  Users,
  Target,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RelatedChemistryMaterialsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <Link
                  href="/products"
                  className="ml-1 text-sm font-medium text-muted-foreground hover:text-primary md:ml-2"
                >
                  Products
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="ml-1 text-sm font-medium text-purple-600 md:ml-2">Related Chemistry Materials</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted">
              <Image
                src="/images/periodic-table-displays.jpeg"
                alt="Related Chemistry Materials"
                width={600}
                height={450}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge
                variant="secondary"
                className="mb-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
              >
                Educational Equipment
              </Badge>
              <h1 className="text-3xl font-bold text-foreground mb-2">Related Chemistry Materials</h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive collection of chemistry materials and supplies for educational institutions
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">(4.9/5 - 127 reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm">Safety Certified Materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Educational Grade Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-purple-600" />
                <span className="text-sm">Fast & Secure Delivery</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Contact for Quote & Orders</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={() =>
                    window.open(
                      "https://wa.me/251949764843?text=Hello, I am interested in Related Chemistry Materials. Please provide more information.",
                      "_blank",
                    )
                  }
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => window.open("tel:+251949764843", "_blank")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() =>
                    window.open(
                      "mailto:amhawoudneh@gmail.com?subject=Inquiry about Related Chemistry Materials",
                      "_blank",
                    )
                  }
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FlaskConical className="w-5 h-5 mr-2 text-purple-600" />
                  Product Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our Related Chemistry Materials collection provides educational institutions with a comprehensive
                  range of chemical supplies, reagents, and materials essential for chemistry education and laboratory
                  work.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Features:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Educational grade chemicals
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Safety data sheets included
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Proper labeling and storage
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Curriculum aligned
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Benefits:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Hands-on learning experience
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Safe for educational use
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Complete material sets
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Expert support included
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Chemical Categories:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Acids and Bases</li>
                      <li>• Salts and Compounds</li>
                      <li>• Organic Chemicals</li>
                      <li>• Indicators and Reagents</li>
                      <li>• Buffer Solutions</li>
                      <li>• Standard Solutions</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Package Information:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Various container sizes</li>
                      <li>• Proper chemical storage</li>
                      <li>• Safety labels included</li>
                      <li>• MSDS documentation</li>
                      <li>• Expiration date tracking</li>
                      <li>• Educational quantities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                  Educational Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Learning Objectives:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Chemical reaction understanding</li>
                      <li>• Laboratory technique development</li>
                      <li>• Safety protocol learning</li>
                      <li>• Analytical chemistry skills</li>
                      <li>• Quantitative analysis</li>
                      <li>• Chemical property exploration</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Suitable For:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• High school chemistry labs</li>
                      <li>• University chemistry courses</li>
                      <li>• Research institutions</li>
                      <li>• Technical colleges</li>
                      <li>• Science demonstrations</li>
                      <li>• Teacher training programs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-red-600" />
                  Safety Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Important Safety Notice</h4>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      All chemistry materials must be handled by qualified personnel only. Proper safety equipment and
                      protocols are mandatory when using these materials.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Safety Requirements:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Safety goggles mandatory</li>
                        <li>• Lab coats required</li>
                        <li>• Proper ventilation needed</li>
                        <li>• Emergency shower access</li>
                        <li>• First aid kit available</li>
                        <li>• Trained supervision required</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Storage Guidelines:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Temperature controlled storage</li>
                        <li>• Separate incompatible chemicals</li>
                        <li>• Secure storage cabinets</li>
                        <li>• Regular inventory checks</li>
                        <li>• Proper waste disposal</li>
                        <li>• Emergency contact information</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-800">
          <CardContent className="p-8 text-center">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h2 className="text-2xl font-bold mb-4">Need Custom Chemistry Material Sets?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We can customize chemistry material packages based on your specific curriculum requirements and
              educational objectives. Contact us for personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() =>
                  window.open(
                    "https://wa.me/251949764843?text=Hello, I need custom chemistry materials for my institution. Please provide more information.",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open("tel:+251949764843", "_blank")}>
                <Phone className="w-5 h-5 mr-2" />
                Call for Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
