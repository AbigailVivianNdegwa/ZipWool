"use client";

import { motion, useInView } from "motion/react"
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const statsVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 8,
                stiffness: 120,
            },
        },
    };

    return (
        <section
            ref={ref}
            className="relative w-full min-h-screen py-20 bg-gradient-to-br from-custom-cream to-white"
            id="about"
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
                        About Zip Wool
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                    >
                        We are a premier textile company dedicated to crafting exceptional fabric solutions
                        that blend tradition with innovation. With decades of expertise, we transform raw materials
                        into textile masterpieces.
                    </motion.p>
                </motion.div>

                {/* Main Content Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-12 mb-16"
                >
                    {/* Our Story */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl md:text-3xl font-bold text-custom-cherry mb-4">
                                Our Story
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Founded in 1985, Zip Wool began as a small family workshop with a big dream:
                                to revolutionize the textile industry. Today, we stand as a testament to quality,
                                innovation, and sustainable practices.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-custom-cherry text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Our Mission */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl md:text-3xl font-bold text-custom-cherry mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                To create sustainable, high-quality textiles that inspire creativity while
                                preserving our planet's resources. We believe in ethical production, innovative
                                design, and customer satisfaction above all else.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-custom-cherry text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                            >
                                Our Values
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {[
                        { number: "38+", label: "Years Experience" },
                        { number: "500+", label: "Happy Clients" },
                        { number: "1000+", label: "Products" },
                        { number: "50+", label: "Awards" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={statsVariants}
                            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="text-3xl md:text-4xl font-bold text-custom-orange mb-2"
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-sm md:text-base text-gray-600">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {[
                        {
                            icon: "",
                            title: "Sustainable",
                            description: "Eco-friendly production methods and materials",
                        },
                        {
                            icon: "",
                            title: "Innovative Design",
                            description: "Cutting-edge patterns and textile technology",
                        },
                        {
                            icon: "",
                            title: "Premium Quality",
                            description: "Uncompromising standards in every thread",
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h4 className="text-xl font-bold text-custom-brown mb-3">
                                {feature.title}
                            </h4>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}