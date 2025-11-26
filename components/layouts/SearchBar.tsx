"use client";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="relative w-full max-w-md">
            <div className="relative flex items-center">
                <Search className="absolute left-3 size-4 text-gray-400" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products…"
                    className="w-full pl-10 pr-20 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-shop_light_green/20 focus:border-shop_light_green"
                />
                <kbd className="absolute right-3 px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 border border-gray-200 rounded">
                    Ctrl K
                </kbd>
            </div>
        </div>
    );
}