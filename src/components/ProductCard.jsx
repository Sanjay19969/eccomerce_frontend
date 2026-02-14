import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import Badge from './ui/Badge';

const ProductCard = ({ product }) => {
    return (
        <Card className="group overflow-hidden border-none shadow-none hover:shadow-md transition-shadow">
            <div className="relative aspect-[3/4] overflow-hidden bg-primary-bg">
                {product.newArrival && (
                    <Badge className="absolute top-2 left-2 z-10">New</Badge>
                )}
                {product.bestSeller && !product.newArrival && (
                    <Badge variant="secondary" className="absolute top-2 left-2 z-10">Best Seller</Badge>
                )}

                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay Actions */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white rounded-full">
                        <Heart className="h-4 w-4 text-dark-accent" />
                    </Button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm">
                    <Button className="w-full text-xs" size="sm">
                        <ShoppingBag className="mr-2 h-3 w-3" /> Add to Cart
                    </Button>
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-sm font-medium text-dark-accent truncate">
                    <Link to={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </h3>
                <p className="text-sm text-dark-accent/70 mt-1">${product.price.toFixed(2)}</p>
            </div>
        </Card>
    );
};

export default ProductCard;
