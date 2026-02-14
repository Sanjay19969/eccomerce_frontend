import React from 'react';

const Card = ({ children, className = '', ...props }) => {
    return (
        <div className={`rounded-lg border border-secondary-bg bg-white text-dark-accent shadow-sm ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;
