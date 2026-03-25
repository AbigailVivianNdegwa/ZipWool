"use client";

import { motion, useInView } from "motion/react"
import { useRef, useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    
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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                message: ""
            })
        }, 3000)
    }

    const contactInfo = [
        {
            icon: "📍",
            title: "Visit Us",
            details: ["123 Textile Avenue", "Industrial District", "Nairobi, Kenya"]
        },
        {
            icon: "📞",
            title: "Call Us",
            details: ["+254 700 123 456", "+254 733 987 654", "Mon-Fri: 8AM-6PM"]
        },
        {
            icon: "✉️",
            title: "Email Us",
            details: ["info@zipwool.com", "sales@zipwool.com", "support@zipwool.com"]
        }
    ]

    return (
        <section 
            ref={ref}
            className="relative w-full py-20 bg-gradient-to-br from-custom-cream to-white"
            id="contact"
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-brown mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Ready to start your next textile project? Contact us today and let's 
                        discuss how we can bring your vision to life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-custom-cherry mb-6">
                                Send Us a Message
                            </h3>
                            
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center"
                                >
                                    <p className="font-bold">Thank you for your message!</p>
                                    <p>We'll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-cherry focus:border-transparent transition-all"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-cherry focus:border-transparent transition-all"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-cherry focus:border-transparent transition-all"
                                                placeholder="+254 XXX XXX XXX"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-cherry focus:border-transparent transition-all"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-cherry focus:border-transparent transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full bg-custom-cherry text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors"
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl">{info.icon}</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-custom-cherry mb-3">
                                            {info.title}
                                        </h4>
                                        {info.details.map((detail, idx) => (
                                            <p key={idx} className="text-gray-600 mb-1">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Map Placeholder */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white p-6 rounded-2xl shadow-lg"
                        >
                            <h4 className="text-xl font-bold text-custom-cherry mb-4">
                                Find Us
                            </h4>
                            <div className="bg-gradient-to-br from-custom-cherry to-custom-peach h-64 rounded-lg flex items-center justify-center">
                                <p className="text-white font-semibold">Interactive Map</p>
                            </div>
                        </motion.div>

                        {/* Social Media */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white p-6 rounded-2xl shadow-lg text-center"
                        >
                            <h4 className="text-xl font-bold text-custom-cherry mb-4">
                                Follow Us
                            </h4>
                            <div className="flex justify-center space-x-4">
                                {["Facebook", "Instagram", "LinkedIn", "Twitter"].map((social) => (
                                    <motion.button
                                        key={social}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-custom-cherry text-white w-12 h-12 rounded-full flex items-center justify-center font-bold hover:bg-opacity-90 transition-colors"
                                    >
                                        {social[0]}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
