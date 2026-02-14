import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { products } from '../data/products';
import { Star, Truck, ShieldCheck, ArrowLeft, Minus, Plus, Heart } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('M');

    if (!product) {
        return (
            <Layout>
                <div className="container mx-auto px-4 py-20 text-center">
                    <h2 className="text-2xl font-bold mb-4">Product not found</h2>
                    <Link to="/shop"><Button>Return to Shop</Button></Link>
                </div>
            </Layout>
        );
    }

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    return (
        <Layout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link to="/shop" className="inline-flex items-center text-sm text-dark-accent/60 hover:text-primary-accent mb-8">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Shop
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-primary-bg">
                            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {/* Mock thumbnails - using same image for now */}
                            {[1, 2, 3, 4].map((i) => (
                                <button key={i} className="aspect-square rounded-md overflow-hidden border-2 border-transparent hover:border-primary-accent focus:border-primary-accent transition-all">
                                    <img src={product.image} alt={`View ${i}`} className="h-full w-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <div className="mb-6">
                            {product.newArrival && <Badge className="mb-4">New Arrival</Badge>}
                            <h1 className="text-3xl md:text-4xl font-bold text-dark-accent mb-2">{product.name}</h1>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-2xl font-medium text-dark-accent">${product.price.toFixed(2)}</span>
                                <div className="flex items-center text-yellow-500 text-sm">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="ml-1 text-dark-accent/60">{product.rating} ({product.reviews} reviews)</span>
                                </div>
                            </div>
                            <p className="text-dark-accent/70 leading-relaxed">{product.description}</p>
                        </div>

                        {/* Size Selector */}
                        <div className="mb-8">
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-dark-accent">Size</span>
                                <button className="text-xs text-dark-accent/60 underline hover:text-primary-accent">Size Guide</button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-12 rounded-md border flex items-center justify-center transition-all
                                            ${selectedSize === size
                                                ? 'border-primary-accent bg-primary-accent text-white'
                                                : 'border-secondary-bg text-dark-accent hover:border-primary-accent'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity & Add to Cart */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 border-b border-secondary-bg pb-8">
                            <div className="flex items-center border border-secondary-bg rounded-md w-max">
                                <button
                                    className="px-3 py-2 hover:bg-secondary-bg/20 transition-colors"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-12 text-center font-medium">{quantity}</span>
                                <button
                                    className="px-3 py-2 hover:bg-secondary-bg/20 transition-colors"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                            <Button size="lg" className="flex-1">Add to Cart - ${(product.price * quantity).toFixed(2)}</Button>
                            <Button variant="outline" size="lg" className="px-4">
                                <Heart className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Guaranteed Safe Checkout */}
                        <div className="space-y-3 text-sm text-dark-accent/70">
                            <div className="flex items-center gap-3">
                                <Truck className="h-5 w-5 text-primary-accent" />
                                <span>Free shipping on orders over $150</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="h-5 w-5 text-primary-accent" />
                                <span>100% Secure Payment & 30-Day Returns</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold mb-8">You May Also Like</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4).map(related => (
                            <div key={related.id} className="group">
                                <Link to={`/product/${related.id}`}>
                                    <div className="aspect-[3/4] rounded-lg overflow-hidden bg-primary-bg mb-4">
                                        <img src={related.image} alt={related.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                                    </div>
                                    <h4 className="font-medium text-dark-accent">{related.name}</h4>
                                    <p className="text-sm text-dark-accent/70">${related.price.toFixed(2)}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetail;
