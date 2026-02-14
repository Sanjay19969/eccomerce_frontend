import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import { products } from '../data/products';
import { Trash2, ArrowRight } from 'lucide-react';

const Cart = () => {
    // Mock cart items based on products data
    const cartItems = [
        { ...products[0], quantity: 1, selectedSize: 'M' },
        { ...products[2], quantity: 2, selectedSize: 'S' }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 15;
    const total = subtotal + shipping;

    return (
        <Layout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-dark-accent mb-8">Shopping Bag</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-6 p-4 border rounded-lg border-secondary-bg bg-white">
                                <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-md border border-secondary-bg">
                                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                </div>

                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-base font-medium text-dark-accent"><Link to={`/product/${item.id}`}>{item.name}</Link></h3>
                                            <p className="mt-1 text-sm text-dark-accent/60">Size: {item.selectedSize} | Color: Default</p>
                                        </div>
                                        <p className="text-base font-medium text-dark-accent">${item.price.toFixed(2)}</p>
                                    </div>

                                    <div className="flex justify-between items-end">
                                        <div className="flex items-center border border-secondary-bg rounded-md w-max h-8">
                                            <button className="px-2 hover:bg-secondary-bg/20 transition-colors">-</button>
                                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                                            <button className="px-2 hover:bg-secondary-bg/20 transition-colors">+</button>
                                        </div>
                                        <button className="text-sm font-medium text-red-500 hover:text-red-600 flex items-center">
                                            <Trash2 className="h-4 w-4 mr-1" /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-secondary-bg/10 rounded-lg p-6 border border-secondary-bg">
                            <h2 className="text-lg font-medium text-dark-accent mb-4">Order Summary</h2>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-dark-accent/70">Subtotal</span>
                                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-dark-accent/70">Shipping estimate</span>
                                    <span className="font-medium">${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-dark-accent/70">Tax estimate</span>
                                    <span className="font-medium">$0.00</span>
                                </div>
                                <div className="border-t border-secondary-bg pt-4 flex justify-between text-base font-bold text-dark-accent">
                                    <span>Order Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <Button className="w-full mt-6" disabled>
                                Checkout Disabled
                            </Button>
                            <p className="text-xs text-center mt-4 text-dark-accent/60">
                                Secure Checkout - SSL Encrypted
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
