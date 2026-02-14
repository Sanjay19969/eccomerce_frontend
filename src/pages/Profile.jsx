import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, MapPin, Package, LogOut } from 'lucide-react';

const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-serif text-dark-accent mb-8">My Profile</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <Card className="p-6 text-center space-y-4">
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-secondary-bg">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-dark-accent">{user.name}</h2>
                                <p className="text-sm text-dark-accent/60">Member since 2026</p>
                            </div>

                            <div className="pt-4 border-t border-secondary-bg/50 w-full">
                                <Button variant="outline" className="w-full flex items-center justify-center gap-2" onClick={handleLogout}>
                                    <LogOut className="h-4 w-4" /> Sign Out
                                </Button>
                            </div>
                        </Card>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <User className="h-5 w-5 text-primary-accent" /> Personal Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-secondary-bg/10 rounded-md">
                                    <Mail className="h-5 w-5 text-dark-accent/60" />
                                    <div>
                                        <p className="text-xs text-dark-accent/60 uppercase">Email</p>
                                        <p className="font-medium text-dark-accent">{user.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-secondary-bg/10 rounded-md">
                                    <Phone className="h-5 w-5 text-dark-accent/60" />
                                    <div>
                                        <p className="text-xs text-dark-accent/60 uppercase">Phone</p>
                                        <p className="font-medium text-dark-accent">+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-secondary-bg/10 rounded-md">
                                    <MapPin className="h-5 w-5 text-dark-accent/60" />
                                    <div>
                                        <p className="text-xs text-dark-accent/60 uppercase">Address</p>
                                        <p className="font-medium text-dark-accent">Muzaffarnagar, Uttar Pradesh, India</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-right">
                                <Button variant="outline" size="sm">Edit Profile</Button>
                            </div>
                        </Card>

                        <Card className="p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary-accent/10 p-3 rounded-full">
                                    <Package className="h-6 w-6 text-primary-accent" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">My Orders</h3>
                                    <p className="text-sm text-dark-accent/60">Track and manage your recent purchases</p>
                                </div>
                            </div>
                            <Button onClick={() => navigate('/orders')}>View Orders</Button>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;
