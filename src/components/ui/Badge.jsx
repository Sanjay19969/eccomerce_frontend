import React from 'react';

const Badge = ({ children, variant = 'default', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

    const variants = {
        default: "border-transparent bg-primary-accent text-white hover:bg-opacity-80",
        secondary: "border-transparent bg-secondary-bg text-dark-accent hover:bg-opacity-80",
        outline: "text-dark-accent border-dark-accent",
    };

    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Badge;
