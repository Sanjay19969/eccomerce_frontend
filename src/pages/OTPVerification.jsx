import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Label from '../components/ui/Label';
import Card from '../components/ui/Card';

const OTPVerification = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const email = location.state?.email || 'your email';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate Verification
        setTimeout(() => {
            setLoading(false);
            alert('OTP Verified! (Demo)');
        }, 1000);
    };

    return (
        <Layout>
            <div className="flex min-h-[70vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary-bg/10">
                <Card className="w-full max-w-md p-8 shadow-lg bg-white">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold tracking-tight text-dark-accent">Verify OTP</h2>
                        <p className="mt-2 text-sm text-dark-accent/60">
                            We've sent a verification code to <span className="font-medium text-dark-accent">{email}</span>
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <Label htmlFor="otp">Enter OTP</Label>
                            <Input
                                id="otp"
                                type="text"
                                required
                                placeholder="Enter 6-digit OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="text-center tracking-widest text-lg"
                                maxLength={6}
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Verifying...' : 'Verify'}
                        </Button>

                        <div className="text-center text-sm">
                            <button type="button" className="font-medium text-primary-accent hover:underline">
                                Resend OTP
                            </button>
                        </div>
                    </form>
                </Card>
            </div>
        </Layout>
    );
};

export default OTPVerification;
