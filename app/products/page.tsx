import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AgricultureIcon, LaboratoryIcon, ChemicalIcon, EducationalIcon } from "@/components/product-icons"

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Products</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            As a leading supplier of various high-quality products, we offer comprehensive solutions for agricultural,
            laboratory, and educational needs across Ethiopia.
          </p>
        </div>

        {/* Agricultural Equipment */}
        <section id="agricultural" className="mb-16">
          <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl shadow-sm">
                  <AgricultureIcon className="w-16 h-16 text-red-800 dark:text-red-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Agricultural Equipment</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Complete solutions for modern farming and agricultural operations
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Poultry Materials</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/feeders"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Feeders
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/incubators"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Incubators
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/egg-trays"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Egg trays
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Beekeeping Materials</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/smokers"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Smokers
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/honey-extractors"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Honey extractors
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/bee-hives"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Bee hives
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/casting-modules"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Casting modules
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Dairy Equipment</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/milking-machines"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Milking machines
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/milk-analyzers"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Milk analyzers
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/cream-separators"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Cream separators
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/milk-testing-centrifuges"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Milk testing centrifuges
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/milk-testing-equipment"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Milk testing equipment
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/agricultural/butter-churners"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Butter churners
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Separator className="my-6 dark:bg-gray-700" />
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Additional Services:</strong> We provide spare parts and comprehensive assistance for
                  organizations in the agricultural industry to ensure continuous operation of your equipment.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Laboratory Equipment */}
        <section id="laboratory" className="mb-16">
          <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl shadow-sm">
                  <LaboratoryIcon className="w-16 h-16 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    Laboratory Equipment and Chemicals
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Professional-grade laboratory supplies for research and analysis
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Glassware</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/safety-goggles"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Safety goggles
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/beakers"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Beakers
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/erlenmeyer-flasks"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Erlenmeyer flasks
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/boiling-flasks"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Boiling flasks
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/florence-flasks"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Florence flasks
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/test-tubes"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Test tubes
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/watch-glasses"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Watch glasses
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/funnels"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Funnels
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Plasticware</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/burettes"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Burettes
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/pipettes"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Pipettes
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/droppers"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Droppers
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/graduated-cylinders"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Graduated cylinders
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    Laboratory Chemicals
                    <div className="p-1 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                      <ChemicalIcon className="w-6 h-6 text-green-700 dark:text-green-400" />
                    </div>
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/ammonium-alum"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Ammonium alum
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/potassium-aluminum-sulphate"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Potassium aluminum sulphate
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/flocculating-powder"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Flocculating powder
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/ammonia"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Ammonia
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/ammonium-hydroxide"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Ammonium hydroxide
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Microscopes</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/laser-scanning"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Laser scanning
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/inverted"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Inverted
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/upright"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Upright
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/laboratory/stereo"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Stereo
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <Separator className="my-6 dark:bg-gray-700" />
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>Professional Services:</strong> We provide supply and installation services based on customer
                  requirements, ensuring proper setup and optimal performance.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Educational Equipment */}
        <section id="educational" className="mb-16">
          <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl shadow-sm">
                  <EducationalIcon className="w-16 h-16 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    Educational / Teaching Aid Equipment
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Enhancing the learning process through high-quality educational aids
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
                    Biology Laboratory
                    <Badge variant="secondary" className="ml-2 dark:bg-gray-700 dark:text-gray-300">
                      Popular
                    </Badge>
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/human-body-models"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Human body models
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/human-skeleton-models"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Human skeleton models
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/animal-body-models"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Animal body models
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/plant-models"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Plant models
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/tissue-samples"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Tissue samples
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/dna-structure-models"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        DNA structure models
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Chemistry Laboratory</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/carbon-60-atomic-models"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Carbon 60 atomic models
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/measurement-instruments"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Measurement instruments
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/periodic-table-displays"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Periodic table displays
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/related-chemistry-materials"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Related chemistry materials
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Physics Laboratory</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/transformers"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Transformers
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/collision-ball-apparatus"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Collision ball apparatus
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/products/educational/related-physics-instruments"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Related physics instruments
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Separator className="my-6 dark:bg-gray-700" />
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  <strong>Educational Impact:</strong> Our teaching aids play a crucial role in enhancing the learning
                  process by providing hands-on, visual learning experiences for students across biology, chemistry, and
                  physics disciplines.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0">
            <CardContent className="py-12">
              <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                Can't find exactly what you're looking for? Contact us to discuss your specific requirements. We work
                closely with our international partners to source specialized equipment and materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request Information
                </a>
                <a
                  href="tel:+251115509748"
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
