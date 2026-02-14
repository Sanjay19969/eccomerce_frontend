import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        primary: "bg-primary-accent text-white hover:bg-opacity-90 shadow-sm",
        secondary: "bg-secondary-bg text-dark-accent hover:bg-opacity-80 shadow-sm",
        outline: "border border-dark-accent bg-transparent hover:bg-secondary-bg hover:text-dark-accent",
        ghost: "hover:bg-secondary-bg hover:text-dark-accent",
        link: "text-primary-accent underline-offset-4 hover:underline",
    };

    const sizes = {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8 text-lg",
        icon: "h-10 w-10",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
