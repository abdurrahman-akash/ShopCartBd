import { Container } from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HeaderIcons from "./HeaderIcons";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 py-4 bg-white border-b border-gray-200 shadow-sm">
            <Container className="flex items-center justify-between gap-4">
                {/* Left: Logo */}
                <div className="flex items-center gap-2 shrink-0">
                    <Logo />
                </div>

                {/* Center: Navigation Menu (Hidden on mobile) */}
                <div className="hidden lg:flex items-center justify-center flex-1">
                    <HeaderMenu />
                </div>

                {/* Right: Search, Icons, Auth Buttons */}
                <div className="flex items-center gap-3 lg:gap-4">
                    {/* Search Bar (Hidden on mobile) */}
                    <div className="hidden md:block">
                        <SearchBar />
                    </div>

                    {/* Icons */}
                    <HeaderIcons />

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </Container>
        </header>
    );
}