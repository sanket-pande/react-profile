import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

// Define the prop types for the Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    icon?: ReactNode;
    size: 'sm' | 'md' | 'lg' | 'xl';
    variant: 'primary' | 'secondary' | 'danger' | 'link' | 'none';
}

// Button Component with TypeScript
const Button: React.FC<ButtonProps> = ({
    children,
    className,
    disabled = false,
    icon,
    onClick,
    size = 'md',
    type = 'button',
    variant = 'primary',
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
