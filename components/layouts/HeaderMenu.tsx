"use client";
import Link from "next/link";
import { headerData } from "../constants/data";
import { usePathname } from "next/navigation";
import { Flame } from "lucide-react";

export default function HeaderMenu() {
    const pathname = usePathname();
    const isHotDeal = true;
    
    return (
        <nav className="flex items-center gap-8">
            {headerData.map((item) => {
                const isHotDeal = item.name === "Hot Deal";
                const isActive = pathname === item?.path;
                
                return (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`text-sm font-medium hover:text-shop_light_green hoverEffect relative group ${
                            isActive ? "text-shop_light_green" : "text-lightColor"
                        } ${isHotDeal ? "flex items-center gap-1.5" : ""}`}
                    >
                        {isHotDeal && (
                            <Flame className="size-4 text-shop_orange animate-pulse" />
                        )}
                        <span className={isHotDeal ? "font-semibold" : ""}>
                            {item.name}
                        </span>
                        {isHotDeal && (
                            <Flame className="size-4 text-shop_orange animate-pulse" />
                        )}
                        <span
                            className={`absolute -bottom-1 left-0 h-0.5 bg-shop_light_green hoverEffect ${
                                isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                        />
                    </Link>
                );
            })}
        </nav>
    );
}