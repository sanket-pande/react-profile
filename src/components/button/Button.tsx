import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

// Define the prop types for the Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary' | 'danger';
    size: 'small' | 'medium' | 'large';
    icon?: ReactNode;
    className?: string;
}

// Button Component with TypeScript
const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'medium',
    disabled = false,
    icon,
    className,
    ...rest
}) => {
    return (
        <button
            type={type}
            className={`${styles.btn} ${styles[`btn--${variant}`]} ${styles[`btn--${size}`]} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
