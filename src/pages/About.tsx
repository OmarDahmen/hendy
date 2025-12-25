import { Card, CardContent } from '@/components/ui/card'
import { Users, Target, Heart, Award } from 'lucide-react'

export function About() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About TechStore</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Your trusted partner in technology and innovation
        </p>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-6">
            Founded in 2024, TechStore has been at the forefront of bringing the
            latest technology to enthusiasts and professionals alike. We believe
            that everyone deserves access to quality tech products that enhance
            their daily lives.
          </p>
          <p className="text-muted-foreground mb-6">
            Our mission is to provide a curated selection of the best tech gadgets
            and accessories, backed by exceptional customer service and competitive
            pricing. We carefully test and vet each product to ensure it meets our
            high standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <Users className="h-10 w-10 mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Customer First</h3>
              <p className="text-muted-foreground">
                We prioritize our customers' needs and satisfaction above all
                else. Your happiness is our success.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Target className="h-10 w-10 mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Quality Focus</h3>
              <p className="text-muted-foreground">
                Every product is carefully selected and tested to ensure it meets
                our rigorous quality standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Heart className="h-10 w-10 mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Passion for Tech</h3>
              <p className="text-muted-foreground">
                We're tech enthusiasts ourselves, and we're excited to share our
                passion with you through our products.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Award className="h-10 w-10 mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from product
                selection to customer service.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-2">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <p className="text-muted-foreground">
              Email us at{' '}
              <a
                href="mailto:info@techstore.com"
                className="text-primary hover:underline font-medium"
              >
                info@techstore.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
