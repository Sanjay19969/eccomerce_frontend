import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X, LogOut } from 'lucide-react';
import Button from './ui/Button';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'New Arrivals', path: '/new-arrivals' },
        { name: 'Collections', path: '/collections' },
        { name: 'Journal', path: '/journal' },
    ];

    return (
        <>
            {/* Top Announcement Bar */}
            <div className="bg-dark-accent text-primary-bg py-2 text-center text-xs tracking-wider uppercase font-medium">
                Free Shipping to Muzaffarnagar on orders over ₹1500 | Shop Now
            </div>

            <header
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-secondary-bg/20'
                        : 'bg-primary-bg/50 backdrop-blur-sm'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">

                        {/* Mobile Menu & Search (Left) */}
                        <div className="flex items-center gap-4 flex-1">
                            <div className="md:hidden">
                                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </Button>
                            </div>
                            <div className="hidden md:flex items-center gap-2">
                                <Button variant="ghost" size="icon" aria-label="Search" className="hover:bg-secondary-bg/20">
                                    <Search className="h-5 w-5 text-dark-accent" />
                                </Button>
                                <span className="hidden lg:inline text-sm text-dark-accent/60 cursor-pointer hover:text-dark-accent transition-colors">Search</span>
                            </div>
                        </div>

                        {/* Logo (Center) */}
                        <div className="flex-shrink-0 flex justify-center">
                            <Link to="/" className="text-3xl font-bold text-dark-accent tracking-tighter font-serif">
                                STYLENEST
                            </Link>
                        </div>

                        {/* User Actions (Right) */}
                        <div className="flex items-center justify-end gap-2 flex-1">
                            <div className="hidden md:flex items-center gap-2">
                                {user ? (
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-medium uppercase tracking-wide text-dark-accent hidden lg:block">Hi, {user.name.split(' ')[0]}</span>
                                        <Button variant="ghost" size="icon" onClick={handleLogout} aria-label="Logout" className="hover:bg-secondary-bg/20">
                                            <LogOut className="h-5 w-5 text-dark-accent" />
                                        </Button>
                                    </div>
                                ) : (
                                    <Link to="/login">
                                        <Button variant="ghost" size="icon" aria-label="Login" className="hover:bg-secondary-bg/20">
                                            <User className="h-5 w-5 text-dark-accent" />
                                        </Button>
                                    </Link>
                                )}
                                <Link to="/wishlist">
                                    <Button variant="ghost" size="icon" aria-label="Wishlist" className="hover:bg-secondary-bg/20">
                                        <Heart className="h-5 w-5 text-dark-accent" />
                                    </Button>
                                </Link>
                            </div>

                            <Link to="/cart">
                                <Button variant="ghost" size="icon" aria-label="Cart" className="relative hover:bg-secondary-bg/20">
                                    <ShoppingBag className="h-5 w-5 text-dark-accent" />
                                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary-accent ring-2 ring-white"></span>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Nav - Centered below logo or separate line if needed. For this design, let's keep it clean or try split. 
              Actually, commonly "best" UI has logo center, nav left/right OR logo left, nav center.
              Let's do Logo Center, Nav Center (Bottom) for a double-decker premium look OR just split.
              Let's try a clean Navigation Bar BELOW the logo row for desktop, standard for luxury.
          */}
                    <div className="hidden md:flex justify-center pb-4">
                        <nav className="flex gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-sm font-medium uppercase tracking-widest text-dark-accent/70 hover:text-primary-accent transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-accent transition-all group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="md:hidden fixed inset-0 top-[116px] bg-primary-bg z-40 animate-in slide-in-from-left-5">
                        <div className="container px-4 py-8 space-y-6 h-full overflow-y-auto">
                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-2xl font-serif text-dark-accent hover:text-primary-accent"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                            <div className="border-t border-secondary-bg pt-8 space-y-4">
                                <Link to="/login" className="flex items-center gap-3 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                                    <User className="h-5 w-5" />
                                    {user ? 'My Account' : 'Login / Register'}
                                </Link>
                                <Link to="/wishlist" className="flex items-center gap-3 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                                    <Heart className="h-5 w-5" />
                                    Wishlist
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
