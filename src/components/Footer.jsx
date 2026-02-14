import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary-bg/20 border-t border-secondary-bg text-dark-accent pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <Link to="/" className="text-3xl font-bold tracking-tighter block font-serif">StyleNest</Link>
                        <p className="text-sm opacity-80 leading-relaxed">
                            Curated fashion for the modern woman. Discover elegance in every detail.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-primary-accent transition-colors p-2 bg-white rounded-full"><Facebook className="h-4 w-4" /></a>
                            <a href="#" className="hover:text-primary-accent transition-colors p-2 bg-white rounded-full"><Instagram className="h-4 w-4" /></a>
                            <a href="#" className="hover:text-primary-accent transition-colors p-2 bg-white rounded-full"><Twitter className="h-4 w-4" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-dark-accent/70">Shop</h4>
                        <ul className="space-y-3 text-sm opacity-80">
                            <li><Link to="/new-arrivals" className="hover:text-primary-accent transition-colors">New Arrivals</Link></li>
                            <li><Link to="/shop" className="hover:text-primary-accent transition-colors">All Products</Link></li>
                            <li><Link to="/accessories" className="hover:text-primary-accent transition-colors">Accessories</Link></li>
                            <li><Link to="/sale" className="hover:text-primary-accent transition-colors">Sale</Link></li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-dark-accent/70">Support</h4>
                        <ul className="space-y-3 text-sm opacity-80">
                            <li><Link to="/contact" className="hover:text-primary-accent transition-colors">Contact Us</Link></li>
                            <li><Link to="/shipping" className="hover:text-primary-accent transition-colors">Shipping & Returns</Link></li>
                            <li><Link to="/faq" className="hover:text-primary-accent transition-colors">FAQ</Link></li>
                            <li><Link to="/size-guide" className="hover:text-primary-accent transition-colors">Size Guide</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-dark-accent/70">Contact Us</h4>
                        <ul className="space-y-4 text-sm opacity-80">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary-accent shrink-0" />
                                <span>Muzaffarnagar, Uttar Pradesh,<br />India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary-accent shrink-0" />
                                <a href="mailto:shop@stylenest.com" className="hover:text-primary-accent">shop@stylenest.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary-accent shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-secondary-bg pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 gap-4">
                    <p>&copy; {new Date().getFullYear()} StyleNest. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-dark-accent">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-dark-accent">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
