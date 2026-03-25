"use client";

import { motion, useInView } from "motion/react"
import { useState, useRef } from "react"

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("all")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
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

    const categories = ["all", "fashion", "home", "industrial", "custom"]
    
    const projects = [
        {
            id: 1,
            title: "Luxury Fashion Collection",
            category: "fashion",
            image: "/Images/portfolio1.jpg",
            description: "High-end textile designs for premium fashion brands"
        },
        {
            id: 2,
            title: "Modern Home Textiles",
            category: "home",
            image: "/Images/portfolio2.jpg",
            description: "Contemporary fabrics for interior design projects"
        },
        {
            id: 3,
            title: "Industrial Fabrics",
            category: "industrial",
            image: "/Images/portfolio3.jpg",
            description: "Durable textiles for commercial applications"
        },
        {
            id: 4,
            title: "Custom Wedding Collection",
            category: "custom",
            image: "/Images/portfolio4.jpg",
            description: "Bespoke fabrics for special occasions"
        },
        {
            id: 5,
            title: "Sustainable Fashion Line",
            category: "fashion",
            image: "/Images/portfolio5.jpg",
            description: "Eco-friendly textile innovations"
        },
        {
            id: 6,
            title: "Hotel Interior Textiles",
            category: "home",
            image: "/Images/portfolio6.jpg",
            description: "Premium fabrics for hospitality industry"
        }
    ]

    const filteredProjects = activeCategory === "all" 
        ? projects 
        : projects.filter(project => project.category === activeCategory)

    return (
        <section 
            ref={ref}
            className="relative w-full py-20 bg-gradient-to-br from-gray-50 to-white"
            id="portfolio"
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-brown mb-6">
                        Our Portfolio
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Explore our diverse range of textile projects that showcase our expertise 
                        and commitment to excellence across various industries.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 20 } : { opacity: 0, y: 20 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeCategory === category
                                    ? "bg-custom-cherry text-white"
                                    : "bg-white text-custom-brown border-2 border-custom-cherry hover:bg-custom-cherry hover:text-white"
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -10,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                            }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-64 bg-gradient-to-br from-custom-cherry to-custom-peach">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-custom-cherry">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-custom-brown mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-custom-cherry text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors w-full"
                                >
                                    View Project
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Load More */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-custom-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors"
                    >
                        Load More Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
