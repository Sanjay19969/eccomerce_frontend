import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import { orders } from '../data/orders';
import { Package, Truck, XCircle, CheckCircle } from 'lucide-react';

const Orders = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-serif text-dark-accent">Order History</h1>
                    <Link to="/shop"><Button variant="outline">Continue Shopping</Button></Link>
                </div>

                <div className="space-y-8">
                    {orders.map((order) => (
                        <div key={order.id} className="border border-secondary-bg rounded-lg overflow-hidden bg-white shadow-sm">
                            {/* Order Header */}
                            <div className="bg-secondary-bg/10 p-4 border-b border-secondary-bg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
                                    <div>
                                        <p className="text-xs text-dark-accent/60 uppercase font-medium">Order Placed</p>
                                        <p className="text-sm font-medium text-dark-accent">{new Date(order.date).toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-dark-accent/60 uppercase font-medium">Total Amount</p>
                                        <p className="text-sm font-medium text-dark-accent">${order.total.toFixed(2)}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-dark-accent/60 uppercase font-medium">Order #</p>
                                        <p className="text-sm font-medium text-dark-accent">{order.id}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <Button size="sm" variant="outline">View Invoice</Button>
                                </div>
                            </div>

                            {/* Order Body - Items Table-like structure */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className={`text-lg font-bold flex items-center gap-2 ${order.status === 'Delivered' ? 'text-green-600' : 'text-primary-accent'}`}>
                                        {order.status === 'Delivered' ? <CheckCircle className="h-5 w-5" /> : <Truck className="h-5 w-5" />}
                                        {order.status}
                                    </h3>
                                    <p className="text-sm text-dark-accent/60">{order.deliveryEstimation}</p>
                                </div>

                                <div className="divide-y divide-secondary-bg/50">
                                    {order.items.map((item, idx) => (
                                        <div key={idx} className="py-4 flex flex-col sm:flex-row gap-6 items-center">
                                            <div className="w-24 h-28 flex-shrink-0 bg-secondary-bg/20 rounded-md overflow-hidden">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 text-center sm:text-left">
                                                <h4 className="font-medium text-dark-accent text-lg"><Link to="/product/1" className="hover:text-primary-accent">{item.name}</Link></h4>
                                                <p className="text-sm text-dark-accent/60 mt-1">Quantity: {item.quantity}</p>
                                                <p className="text-sm text-dark-accent/60">Price: ${item.price.toFixed(2)}</p>
                                            </div>
                                            <div className="text-right">
                                                {order.status !== 'Delivered' && (
                                                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                                                        <XCircle className="h-4 w-4 mr-1" /> Cancel Item
                                                    </Button>
                                                )}
                                                {order.status === 'Delivered' && (
                                                    <Button size="sm">Buy Again</Button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State (Hidden if orders exist) */}
                {orders.length === 0 && (
                    <div className="text-center py-20">
                        <div className="bg-secondary-bg/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <Package className="h-10 w-10 text-dark-accent/40" />
                        </div>
                        <h2 className="text-2xl font-bold text-dark-accent">No orders yet</h2>
                        <p className="text-dark-accent/60 mb-8 max-w-md mx-auto">Looks like you haven't placed any orders yet. Start exploring our collection to find something you love.</p>
                        <Link to="/shop"><Button size="lg">Start Shopping</Button></Link>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Orders;
