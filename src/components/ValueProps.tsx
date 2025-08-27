import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Zap, BarChart3, Workflow, Globe, Shield } from 'lucide-react'
import { valueProps } from '../content/site-config'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const iconMap = {
  Brain,
  Zap,
  BarChart3,
  Workflow,
  Globe,
  Shield,
}

export const ValueProps: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose 10xMA?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your marketing with intelligent automation that delivers results at scale
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => {
            const IconComponent = iconMap[prop.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{prop.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {prop.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Active Users", value: "50K+" },
            { label: "Campaigns Created", value: "1M+" },
            { label: "Revenue Generated", value: "$500M+" },
            { label: "Customer Satisfaction", value: "99%" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

