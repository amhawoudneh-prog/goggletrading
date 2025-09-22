"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star, MessageCircle, User, Calendar, ThumbsUp, Quote } from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface Review {
  id: number
  name: string
  company?: string
  rating: number
  date: string
  title: string
  content: string
  product?: string
  verified: boolean
  helpful: number
}

const sampleReviews: Review[] = [
  {
    id: 1,
    name: "Dr. Alemayehu Tafesse",
    company: "Addis Ababa University",
    rating: 5,
    date: "2024-01-15",
    title: "Excellent Laboratory Equipment Quality",
    content:
      "We purchased microscopes and laboratory glassware from Goggle Trading PLC for our biology department. The quality is outstanding and the technical support provided was exceptional. Our students are now able to conduct experiments with professional-grade equipment.",
    product: "Laboratory Equipment",
    verified: true,
    helpful: 12,
  },
  {
    id: 2,
    name: "Ato Bekele Mekuria",
    company: "Green Valley Farm",
    rating: 5,
    date: "2024-01-08",
    title: "Reliable Agricultural Solutions",
    content:
      "The milking machines and dairy equipment we bought have significantly improved our farm's productivity. The installation service was professional and the after-sales support is remarkable. Highly recommend for any agricultural business.",
    product: "Agricultural Equipment",
    verified: true,
    helpful: 8,
  },
  {
    id: 3,
    name: "W/ro Hanan Mohammad",
    company: "St. Mary's Secondary School",
    rating: 4,
    date: "2023-12-20",
    title: "Great Educational Materials",
    content:
      "The human body models and chemistry apparatus have made our science classes much more engaging. Students can now visualize complex concepts easily. The delivery was prompt and packaging was secure.",
    product: "Educational Equipment",
    verified: true,
    helpful: 6,
  },
  {
    id: 4,
    name: "Ato Girma Teshome",
    company: "Honey Bee Cooperative",
    rating: 5,
    date: "2023-12-10",
    title: "Professional Beekeeping Equipment",
    content:
      "Purchased bee hives, smokers, and honey extractors. The quality exceeded our expectations and the prices were very competitive. The technical guidance provided helped us set up our operation successfully.",
    product: "Beekeeping Materials",
    verified: true,
    helpful: 9,
  },
  {
    id: 5,
    name: "Dr. Sara Negash",
    company: "Ethiopian Health Research Institute",
    rating: 5,
    date: "2023-11-25",
    title: "Precision Laboratory Chemicals",
    content:
      "The laboratory chemicals and reagents are of pharmaceutical grade quality. Consistent results in our research work. The technical specifications provided were accurate and delivery was on schedule.",
    product: "Laboratory Chemicals",
    verified: true,
    helpful: 7,
  },
]

interface CustomerReviewsProps {
  showSubmissionForm?: boolean
  productName?: string
  maxReviews?: number
}

export function CustomerReviews({ showSubmissionForm = true, productName, maxReviews }: CustomerReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    title: "",
    content: "",
  })

  const displayReviews = maxReviews ? sampleReviews.slice(0, maxReviews) : sampleReviews
  const averageRating = sampleReviews.reduce((acc, review) => acc + review.rating, 0) / sampleReviews.length
  const totalReviews = sampleReviews.length

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the review to your backend
    const whatsappMessage = `New Review Submission:
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Rating: ${rating} stars
Title: ${formData.title}
Review: ${formData.content}
${productName ? `Product: ${productName}` : ""}`

    const whatsappUrl = `https://wa.me/251911304297?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({ name: "", company: "", email: "", title: "", content: "" })
    setRating(0)
    setShowReviewForm(false)
  }

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= (interactive ? hoveredRating || rating : rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""}`}
            onClick={interactive && onRate ? () => onRate(star) : undefined}
            onMouseEnter={interactive ? () => setHoveredRating(star) : undefined}
            onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
            <MessageCircle className="h-8 w-8 text-red-800 dark:text-red-400" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Customer Reviews</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            See what our valued customers say about our products and services
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-800 dark:text-red-400 mb-1">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-1">{renderStars(Math.round(averageRating))}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Based on {totalReviews} reviews</div>
            </div>
            <Separator orientation="vertical" className="h-16 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Customer Satisfaction</div>
            </div>
            <Separator orientation="vertical" className="h-16 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayReviews.map((review) => (
            <Card
              key={review.id}
              className="dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-red-800 dark:text-red-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{review.name}</div>
                      {review.company && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">{review.company}</div>
                      )}
                    </div>
                  </div>
                  {review.verified && (
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    >
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  {renderStars(review.rating)}
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                </div>

                <CardTitle className="text-lg text-gray-900 dark:text-white">{review.title}</CardTitle>
                {review.product && (
                  <Badge variant="outline" className="w-fit dark:border-gray-600 dark:text-gray-300">
                    {review.product}
                  </Badge>
                )}
              </CardHeader>

              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-red-200 dark:text-red-800" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-4">{review.content}</p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{review.helpful} found this helpful</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Submit Review Section */}
        {showSubmissionForm && (
          <div className="max-w-2xl mx-auto">
            {!showReviewForm ? (
              <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center">
                <CardContent className="py-8">
                  <MessageCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Share Your Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Help other customers by sharing your experience with our products and services
                  </p>
                  <Button
                    onClick={() => setShowReviewForm(true)}
                    className="bg-red-800 hover:bg-red-900 dark:bg-red-700 dark:hover:bg-red-800 text-white px-8 py-3"
                  >
                    Write a Review
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Write Your Review</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    {productName
                      ? `Share your experience with ${productName}`
                      : "Tell us about your experience with our products or services"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitReview} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-900 dark:text-white">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-gray-900 dark:text-white">
                          Company/Organization
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-900 dark:text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>

                    <div>
                      <Label className="text-gray-900 dark:text-white">Rating *</Label>
                      <div className="flex items-center space-x-2 mt-2">
                        {renderStars(rating, true, setRating)}
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                          {rating > 0 ? `${rating} star${rating > 1 ? "s" : ""}` : "Select a rating"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="title" className="text-gray-900 dark:text-white">
                        Review Title *
                      </Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Summarize your experience"
                        required
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="content" className="text-gray-900 dark:text-white">
                        Your Review *
                      </Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        placeholder="Share your detailed experience with our products or services..."
                        rows={5}
                        required
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        type="submit"
                        disabled={rating === 0}
                        className="bg-red-800 hover:bg-red-900 dark:bg-red-700 dark:hover:bg-red-800 text-white flex-1"
                      >
                        Submit Review
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowReviewForm(false)}
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white border-0 max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4">Experience Quality Service</h3>
              <p className="text-red-100 mb-6">
                Join hundreds of satisfied customers who trust Goggle Trading PLC for their equipment needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-red-800 hover:bg-gray-100">
                  <a href="/products">Browse Products</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-800 bg-transparent"
                >
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
