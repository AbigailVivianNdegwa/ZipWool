"use client";

import { motion, useInView } from "motion/react"
import { useRef } from "react"

export default function Services() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    }

    const services = [
        {
            title: "Custom Fabric Design",
            description: "Bespoke textile designs tailored to your specific needs and brand identity",
            icon: "🎨",
            features: ["Unique Patterns", "Brand Integration", "Color Matching"]
        },
        {
            title: "Textile Manufacturing",
            description: "High-quality fabric production using state-of-the-art technology",
            icon: "🏭",
            features: ["Bulk Production", "Quality Control", "Fast Delivery"]
        },
        {
            title: "Fabric Consulting",
            description: "Expert guidance on textile selection and application for your projects",
            icon: "👔",
            features: ["Material Selection", "Technical Support", "Industry Insights"]
        },
        {
            title: "Sustainable Solutions",
            description: "Eco-friendly textile options that don't compromise on quality",
            icon: "🌿",
            features: ["Organic Materials", "Recycled Fabrics", "Green Production"]
        },
        {
            title: "Pattern Development",
            description: "Innovative pattern creation for fashion and interior design",
            icon: "✂️",
            features: ["Digital Printing", "Traditional Weaving", "Modern Techniques"]
        },
        {
            title: "Quality Assurance",
            description: "Comprehensive testing and certification for all textile products",
            icon: "✅",
            features: ["Lab Testing", "Certification", "Compliance"]
        }
    ]

    return (
        <section 
            ref={ref}
            className="relative w-full py-20 bg-white"
            id="services"
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.h2 
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-brown mb-6"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                    >
                        From concept to creation, we offer comprehensive textile solutions 
                        that bring your vision to life with unparalleled quality and expertise.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -10,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                            }}
                            className="bg-gradient-to-br from-custom-cream to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="text-5xl mb-6">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-custom-cherry mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-700">
                                        <span className="w-2 h-2 bg-custom-orange rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-6 bg-custom-cherry text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors w-full"
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 bg-gradient-to-r from-custom-cherry to-custom-peach p-12 rounded-3xl text-center text-white"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Start Your Project?
                    </h3>
                    <p className="text-xl mb-8 opacity-90">
                        Let's create something extraordinary together
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-custom-cherry px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
