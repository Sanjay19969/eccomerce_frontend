import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import Button from '../components/ui/Button';
import { products, categories } from '../data/products';
import { ChevronDown, Filter } from 'lucide-react';

const Shop = () => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <Layout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-dark-accent">Shop All</h1>
                        <p className="text-dark-accent/60 mt-1">Showing {products.length} products</p>
                    </div>

                    <div className="flex gap-4">
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-sm font-medium hover:text-primary-accent">
                                Sort by: Featured <ChevronDown className="h-4 w-4" />
                            </button>
                            {/* Mock Dropdown */}
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-secondary-bg rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                                <div className="py-1">
                                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-secondary-bg/20">Featured</button>
                                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-secondary-bg/20">Price: Low to High</button>
                                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-secondary-bg/20">Price: High to Low</button>
                                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-secondary-bg/20">Newest</button>
                                </div>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            className="md:hidden"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <Filter className="h-4 w-4 mr-2" /> Filters
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className={`w-full md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
                        <div className="space-y-8 sticky top-24">
                            {/* Category Filter */}
                            <div>
                                <h3 className="font-semibold mb-4 text-dark-accent">Category</h3>
                                <div className="space-y-2">
                                    {categories.map((cat) => (
                                        <div key={cat.id} className="flex items-center">
                                            <input type="checkbox" id={`cat-${cat.id}`} className="rounded border-gray-300 text-primary-accent focus:ring-primary-accent" />
                                            <label htmlFor={`cat-${cat.id}`} className="ml-2 text-sm text-dark-accent/80 hover:text-dark-accent cursor-pointer">
                                                {cat.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div>
                                <h3 className="font-semibold mb-4 text-dark-accent">Price Range</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span>$0</span>
                                        <span>$500+</span>
                                    </div>
                                    <input type="range" className="w-full accent-primary-accent" />
                                </div>
                            </div>

                            {/* Size Filter */}
                            <div>
                                <h3 className="font-semibold mb-4 text-dark-accent">Size</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                        <button key={size} className="w-10 h-10 border border-secondary-bg rounded-md text-sm hover:border-primary-accent hover:text-primary-accent transition-colors">
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Filter */}
                            <div>
                                <h3 className="font-semibold mb-4 text-dark-accent">Color</h3>
                                <div className="flex flex-wrap gap-3">
                                    {['bg-black', 'bg-white border text-black', 'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'].map((color, idx) => (
                                        <button key={idx} className={`w-6 h-6 rounded-full border border-secondary-bg ${color} hover:ring-2 ring-primary-accent ring-offset-2 transition-all`} />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center gap-2">
                            <Button variant="outline" disabled>Previous</Button>
                            <Button variant="primary">1</Button>
                            <Button variant="outline">2</Button>
                            <Button variant="outline">3</Button>
                            <Button variant="outline">Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Shop;
