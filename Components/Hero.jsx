"use client";

import { motion } from "motion/react"
import { useEffect, useState } from "react"

export default function Hero() {
    const [imageOrder, setImageOrder] = useState([
        "/Images/Textile1.jfif",
        "/Images/Textile2.jfif", 
        "/Images/Textile3.jfif",
        "/Images/Textile4.jfif"
    ])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setImageOrder(prev => [...prev].sort(() => Math.random() - 0.5))
        }, 2000)
        return () => clearTimeout(timeout)
    }, [imageOrder])

    return (
        <section 
         className="relative w-full mt-16 md:mt-20 overflow-hidden"
         style={{ height: '550px' }}
         id="hero"
        >
            <div>
                <img
                    src="/Images/Hero.jpg"
                    alt="Hero Image"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to right, var(--color-custom-cherry), var(--color-custom-peach))',
                        opacity: 0.5
                    }}
                >
                </div>
            </div>
            
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-cherry mb-4">
                            Welcome to Zip Wool
                        </h1>
                        <p className="text-lg md:text-xl text-custom-cherry mb-6">
                            Premium textile solutions for your business needs
                        </p>
                        <button className="bg-custom-cream text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Explore More
                        </button>
                    </div>
                    
                    <div className="hidden md:flex pr-8" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '16px', width: '300px', justifyContent: 'center', alignItems: 'center' }}>
                        {imageOrder.map((imageSrc, index) => (
                            <motion.img
                                key={`${imageSrc}-${index}`}
                                layout
                                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                                src={imageSrc}
                                alt={`Textile ${index + 1}`}
                                style={{ 
                                    width: '140px', 
                                    height: '140px', 
                                    borderRadius: '10px',
                                    objectFit: 'cover'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}