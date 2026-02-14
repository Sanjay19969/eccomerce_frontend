import React from 'react';
import Layout from '../components/Layout';

const About = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-dark-accent mb-6">About StyleNest</h1>
                    <div className="w-24 h-1 bg-primary-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1 space-y-6 text-dark-accent/80 leading-relaxed text-lg">
                        <p>
                            Welcome to <strong>StyleNest</strong> (formerly Pretty Little Shop), your go-to destination for stylish and affordable fashion!
                            Located in the heart of Muzaffarnagar, Uttar Pradesh, our online store is dedicated to bringing you the latest trends in clothing,
                            ensuring you always look and feel your best without breaking the bank.
                        </p>
                        <p>
                            At StyleNest, we believe that everyone deserves to enjoy beautiful, high-quality clothing. That's why we curate a stunning
                            collection of apparel that combines elegance with affordability, making fashion accessible to everyone. Whether you're looking
                            for a chic outfit for a special occasion or trendy everyday wear, we have something for every taste and style.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="aspect-[4/5] rounded-lg overflow-hidden relative shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
                                alt="Our Story"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary-accent/10"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-secondary-bg/20 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-serif text-dark-accent mb-6">Our Commitment</h2>
                    <p className="text-dark-accent/80 leading-relaxed mb-6">
                        Our commitment to quality and customer satisfaction drives everything we do. We take pride in offering exceptional service,
                        ensuring your shopping experience is seamless and enjoyable from start to finish. With fast and reliable delivery,
                        you can enjoy the convenience of shopping from the comfort of your home.
                    </p>
                    <p className="font-medium text-dark-accent italic">
                        Thank you for choosing StyleNest, where fashion meets affordability. We can't wait to help you discover your next wardrobe essential!
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;
