"use client";

import { motion } from "motion/react"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        company: [
            { name: "About Us", href: "#about" },
            { name: "Our Story", href: "#about" },
            { name: "Mission", href: "#about" },
            { name: "Team", href: "#about" }
        ],
        services: [
            { name: "Custom Design", href: "#services" },
            { name: "Manufacturing", href: "#services" },
            { name: "Consulting", href: "#services" },
            { name: "Quality Assurance", href: "#services" }
        ],
        portfolio: [
            { name: "Fashion", href: "#portfolio" },
            { name: "Home Textiles", href: "#portfolio" },
            { name: "Industrial", href: "#portfolio" },
            { name: "Custom Projects", href: "#portfolio" }
        ],
        support: [
            { name: "Contact", href: "#contact" },
            { name: "FAQ", href: "#contact" },
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" }
        ]
    }

    return (
        <footer className="bg-custom-brown text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold mb-4">Zip Wool</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Premier textile solutions blending tradition with innovation. 
                                Crafting exceptional fabrics that inspire creativity and 
                                deliver unmatched quality since 1985.
                            </p>
                        </div>
                        
                        {/* Newsletter */}
                        <div className="bg-custom-cherry p-4 rounded-lg">
                            <h4 className="font-bold mb-3">Subscribe to Our Newsletter</h4>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 rounded-lg text-custom-brown focus:outline-none focus:ring-2 focus:ring-custom-cream"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-custom-cream text-custom-brown px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([category, links], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h4 className="text-xl font-bold mb-4 capitalize">
                                {category === 'company' ? 'Company' : 
                                 category === 'services' ? 'Services' :
                                 category === 'portfolio' ? 'Portfolio' : 'Support'}
                            </h4>
                            <ul className="space-y-2">
                                {links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <motion.a
                                            href={link.href}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-300 hover:text-custom-cream transition-colors duration-200 inline-block"
                                        >
                                            {link.name}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gray-400 text-sm mb-4 md:mb-0"
                        >
                            © {currentYear} Zip Wool. All rights reserved.
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex items-center space-x-6"
                        >
                            <div className="flex space-x-4">
                                {[
                                    { name: "Facebook", icon: "f" },
                                    { name: "Instagram", icon: "i" },
                                    { name: "LinkedIn", icon: "l" },
                                    { name: "Twitter", icon: "t" }
                                ].map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href="#"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 bg-custom-cherry rounded-full flex items-center justify-center hover:bg-custom-cream hover:text-custom-brown transition-colors duration-200"
                                    >
                                        <span className="font-bold">{social.icon}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 bg-custom-cherry text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-custom-cream hover:text-custom-brown transition-colors duration-200 z-50"
            >
                ↑
            </motion.button>
        </footer>
    )
}
