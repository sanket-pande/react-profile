import { motion } from 'framer-motion';

interface FloatingBubbleProps {
    size: number;
    x: string;
    y: number | string;
    color: string;
    label: string;
    Icon: any;
    delay?: number;
}

function FloatingBubble({ size, x, y, color, label, Icon, delay = 0 }: FloatingBubbleProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 12, delay }}
            style={{ position: 'absolute', left: x, top: y, width: size, height: size, transform: 'translate(-0%, -0%)' }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: color,
                    color: '#fff',
                    fontWeight: 600,
                    boxShadow: '0 12px 30px rgba(0,0,0,0.25)'
                }}
            >
                {Icon ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Icon style={{ fontSize: 32, opacity: 0.95 }} />
                        <span style={{ marginTop: 6, fontSize: 14, fontWeight: 600, opacity: 0.95 }}>{label}</span>
                    </div>
                ) : (
                    <span className="sr-only">decorative bubble</span>
                )}
            </div>
        </motion.div>
    );
}

export default FloatingBubble;