"use client";
import { Container } from "./layouts/Container";
import { Zap, Star, CheckCircle, Truck, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F7EFEA] via-[#FFF6F2] to-[#FFF8F5] py-12 md:py-20">
            {/* Floating Background Shapes */}
            <div className="absolute top-10 right-20 w-32 h-32 bg-shop_light_green/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-shop_orange/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <Container>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 animate-fade-up">
                        {/* Limited Time Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md animate-fade-up">
                            <Zap className="w-4 h-4 text-shop_orange" fill="#F4A259" />
                            <span className="text-sm font-medium text-gray-700">Limited Time Offer</span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-2 animate-fade-up animation-delay-200">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-shop_dark_green leading-tight">
                                Grab Up to
                            </h1>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black animate-color-change">
                                50% Off
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 font-medium">
                                on Selected Headphones
                            </p>
                        </div>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap gap-3 animate-fade-up animation-delay-400">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:-translate-y-1 hoverEffect cursor-default">
                                <Star className="w-4 h-4 text-yellow-500" fill="#EAB308" />
                                <span className="text-sm font-medium text-gray-700">Premium Quality</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:-translate-y-1 hoverEffect cursor-default">
                                <CheckCircle className="w-4 h-4 text-shop_light_green" />
                                <span className="text-sm font-medium text-gray-700">Best Deals</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:-translate-y-1 hoverEffect cursor-default">
                                <Truck className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium text-gray-700">Free Shipping</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-600">
                            <Button 
                                size="lg" 
                                className="bg-gradient-to-r from-[#063F23] to-[#0C6A34] hover:scale-105 hoverEffect shadow-lg text-base px-6"
                            >
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                Shop Now
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="bg-white border-[#D8DFD6] hover:shadow-lg hover:-translate-y-1 hoverEffect text-base px-6"
                            >
                                <Zap className="w-5 h-5 mr-2 text-shop_orange" />
                                View Deals
                            </Button>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                            <div className="text-center animate-fade-up animation-delay-800">
                                <div className="text-2xl md:text-3xl font-bold text-shop_dark_green">50K+</div>
                                <div className="text-xs md:text-sm text-gray-600 mt-1">Happy Customers</div>
                            </div>
                            <div className="text-center animate-fade-up animation-delay-1000">
                                <div className="text-2xl md:text-3xl font-bold text-shop_dark_green flex items-center justify-center gap-1">
                                    4.9<Star className="w-5 h-5 text-yellow-500 mb-1" fill="#EAB308" />
                                </div>
                                <div className="text-xs md:text-sm text-gray-600 mt-1">Customer Rating</div>
                            </div>
                            <div className="text-center animate-fade-up animation-delay-1200">
                                <div className="text-2xl md:text-3xl font-bold text-shop_dark_green">24/7</div>
                                <div className="text-xs md:text-sm text-gray-600 mt-1">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Hero Image */}
                    <div className="relative flex items-center justify-center animate-fade-up animation-delay-400">
                        {/* Floating 50% Badge */}
                        <div className="absolute top-1/2 left-10 md:left-20 z-10 w-20 h-20 bg-shop_light_green rounded-full flex items-center justify-center shadow-2xl animate-pulse-scale">
                            <span className="text-white font-bold text-lg">50%</span>
                        </div>

                        {/* Floating Star Badge */}
                        <div className="absolute top-10 right-10 md:right-20 z-10 w-16 h-16 bg-shop_orange rounded-full flex items-center justify-center shadow-xl animate-float-rotate">
                            <Star className="w-8 h-8 text-white" fill="white" />
                        </div>

                        {/* Hero Image */}
                        <div className="relative w-full max-w-md lg:max-w-lg animate-float">
                            <div className="relative aspect-square">
                                <Image
                                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&q=80"
                                    alt="Premium headphones product showcase"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <style jsx>{`
                @keyframes color-change {
                    0%, 100% {
                        color: #0A5C2F;
                    }
                    33% {
                        color: #0F8C3A;
                    }
                    66% {
                        color: #1BAA4D;
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes pulse-scale {
                    0%, 100% {
                        transform: scale(1);
                        box-shadow: 0 0 0 0 rgba(59, 156, 60, 0.7);
                    }
                    50% {
                        transform: scale(1.08);
                        box-shadow: 0 0 20px 10px rgba(59, 156, 60, 0);
                    }
                }

                @keyframes float-rotate {
                    0% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-15px) rotate(180deg);
                    }
                    100% {
                        transform: translateY(0px) rotate(360deg);
                    }
                }

                @keyframes fade-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-color-change {
                    animation: color-change 1s ease-in-out infinite;
                }

                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }

                .animate-pulse-scale {
                    animation: pulse-scale 2s ease-in-out infinite;
                }

                .animate-float-rotate {
                    animation: float-rotate 3s ease-in-out infinite;
                }

                .animate-fade-up {
                    animation: fade-up 0.6s ease-out forwards;
                    opacity: 0;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                }

                .animation-delay-400 {
                    animation-delay: 0.4s;
                }

                .animation-delay-600 {
                    animation-delay: 0.6s;
                }

                .animation-delay-800 {
                    animation-delay: 0.8s;
                }

                .animation-delay-1000 {
                    animation-delay: 1s;
                }

                .animation-delay-1200 {
                    animation-delay: 1.2s;
                }

                .delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </section>
    );
}
