"use client";
import { ShoppingCart, Heart, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeaderIcons() {
    return (
        <div className="flex items-center gap-2">
            {/* Cart Icon */}
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full hoverEffect">
                <ShoppingCart className="size-5 text-shop_dark_green" />
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center size-4 text-[10px] font-bold text-white bg-shop_light_green rounded-full">
                    1
                </span>
            </Link>

            {/* Wishlist Icon */}
            <Link href="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-full hoverEffect">
                <Heart className="size-5 text-shop_dark_green" />
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center size-4 text-[10px] font-bold text-white bg-shop_light_green rounded-full">
                    0
                </span>
            </Link>

            {/* Auth Buttons (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-2 ml-2">
                <Button variant="outline" size="sm" asChild>
                    <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button size="sm" className="bg-shop_dark_green hover:bg-shop_dark_green/90" asChild>
                    <Link href="/sign-up">Sign Up</Link>
                </Button>
            </div>
        </div>
    );
}