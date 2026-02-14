import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Label from '../components/ui/Label';
import Card from '../components/ui/Card';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            // Navigate to OTP page
            navigate('/otp-verification', { state: { email } });
        }, 1000);
    };

    return (
        <Layout>
            <div className="flex min-h-[70vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary-bg/10">
                <Card className="w-full max-w-md p-8 shadow-lg bg-white">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold tracking-tight text-dark-accent">Forgot Password?</h2>
                        <p className="mt-2 text-sm text-dark-accent/60">
                            Enter your email address to reset your password.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Sending OTP...' : 'Send OTP'}
                        </Button>

                        <div className="text-center text-sm">
                            <Link to="/login" className="font-medium text-primary-accent hover:underline">
                                Back to Login
                            </Link>
                        </div>
                    </form>
                </Card>
            </div>
        </Layout>
    );
};

export default ForgotPassword;
