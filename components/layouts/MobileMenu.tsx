"use client";
import { Menu, X, Search, Flame } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { headerData } from "../constants/data";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg hoverEffect lg:hidden"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <X className="size-6 text-shop_dark_green" />
                ) : (
                    <Menu className="size-6 text-shop_dark_green" />
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 top-[73px] bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
            )}

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-[73px] right-0 w-full max-w-sm h-[calc(100vh-73px)] bg-white shadow-lg z-50 transform hoverEffect lg:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full p-6 space-y-6 overflow-y-auto">
                    {/* Mobile Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products…"
                            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-shop_light_green/20 focus:border-shop_light_green"
                        />
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex flex-col space-y-4">
                        {headerData.map((item) => {
                            const isHotDeal = item.name === "Hot Deal";
                            const isActive = pathname === item?.path;
                            
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-base font-medium py-2 hover:text-shop_light_green hoverEffect ${
                                        isActive ? "text-shop_light_green" : "text-lightColor"
                                    } ${isHotDeal ? "flex items-center gap-2" : ""}`}
                                >
                                    {isHotDeal && (
                                        <Flame className="size-5 text-shop_orange animate-pulse" />
                                    )}
                                    <span className={isHotDeal ? "font-semibold" : ""}>
                                        {item.name}
                                    </span>
                                    {isHotDeal && (
                                        <Flame className="size-5 text-shop_orange animate-pulse" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Auth Buttons */}
                    <div className="flex flex-col gap-3 pt-6 border-t">
                        <Button variant="outline" className="w-full" asChild>
                            <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                                Sign In
                            </Link>
                        </Button>
                        <Button className="w-full bg-shop_dark_green hover:bg-shop_dark_green/90" asChild>
                            <Link href="/sign-up" onClick={() => setIsOpen(false)}>
                                Sign Up
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}