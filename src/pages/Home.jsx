import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    const bestSellers = products.filter(p => p.bestSeller).slice(0, 4);
    const newArrivals = products.filter(p => p.newArrival).slice(0, 4);

    return (
        <Layout>
            {/* Editorial Hero Section */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-fashion-photoshoot-5343/1080p.mp4" type="video/mp4" />
                    {/* Fallback Image if video fails or on low data */}
                    <img
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop"
                        alt="Hero Fashion"
                        className="h-full w-full object-cover"
                    />
                </video>

                <div className="absolute inset-0 bg-black/20" />

                <div className="relative container mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
                    <span className="text-white/90 uppercase tracking-[0.3em] text-sm mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">Spring Summer 2026</span>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        ELEGANCE<br />REDEFINED
                    </h1>
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                        <Link to="/shop">
                            <Button size="lg" className="bg-white text-dark-accent hover:bg-white/90 rounded-none px-12 py-6 text-lg tracking-widest uppercase">
                                Discover Collection
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Categories - Mosaic Layout */}
            <section className="py-24 bg-primary-bg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-3xl font-serif text-dark-accent">Curated Categories</h2>
                        <Link to="/categories" className="flex items-center text-sm font-medium uppercase tracking-wider hover:text-primary-accent group">
                            View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 h-auto lg:h-[600px]">
                        {/* Main Feature - Takes 6 cols */}
                        <Link to="/shop?category=Dresses" className="lg:col-span-6 relative overflow-hidden group h-[400px] lg:h-full">
                            <img
                                src={categories[0].image}
                                alt={categories[0].name}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-3xl font-serif text-white">{categories[0].name}</h3>
                                <span className="text-white/80 text-sm uppercase tracking-wider mt-2 block opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Shop Now</span>
                            </div>
                        </Link>

                        <div className="lg:col-span-6 grid grid-cols-2 gap-4 h-full">
                            {categories.slice(1, 5).map((cat) => (
                                <Link key={cat.id} to={`/shop?category=${cat.name}`} className="relative overflow-hidden group h-[200px] lg:h-[292px]">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-xl font-serif text-white">{cat.name}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Hand Picked Collection */}
            <section className="py-24 bg-primary-bg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-2xl overflow-hidden h-[500px] flex items-center">
                        <img
                            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop"
                            alt="Hand Picked Collection"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="relative z-10 max-w-2xl mx-auto text-center text-white px-4">
                            <span className="uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Save More, Shop More</span>
                            <h2 className="text-4xl md:text-6xl font-serif mb-6">Hand-Picked<br /><span className="italic font-light">Collection</span></h2>
                            <p className="text-lg text-white/90 mb-8 font-light">
                                Discover the ultimate destination for online clothing shopping at StyleNest!
                                Our Hand-Pick Collection brings you the best in fashion, carefully selected to ensure
                                you always stay ahead of the trends.
                            </p>
                            <Link to="/shop">
                                <Button size="lg" className="bg-white text-dark-accent hover:bg-white/90 px-8 py-3 uppercase tracking-widest">
                                    Shop Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Essentials / Best Sellers */}
            <section className="py-24 bg-secondary-bg/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="text-primary-accent uppercase tracking-widest text-xs font-bold mb-3 block">Weekly Favorites</span>
                        <h2 className="text-4xl font-serif text-dark-accent mb-4">The Essentials</h2>
                        <p className="text-dark-accent/70 font-light">Timeless pieces that define the modern wardrobe. Crafted with care, designed for life.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {bestSellers.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/shop">
                            <Button variant="outline" className="px-8 border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-white transition-all">Shop Best Sellers</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Minimal Newsletter */}
            <section className="py-24 bg-dark-accent text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2671&auto=format&fit=crop" className="object-cover w-full h-full grayscale" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">Join the Inner Circle</h2>
                    <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg font-light">
                        Be the first to know about new collections, exclusive events, and style inspiration.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-0 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 backdrop-blur-sm transition-all"
                        />
                        <Button className="bg-white text-dark-accent hover:bg-white/90 px-8 py-4 rounded-none font-medium uppercase tracking-wider">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
