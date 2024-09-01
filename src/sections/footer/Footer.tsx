import { forwardRef } from 'react';

import styles from './Footer.module.scss';
import navStyles from '../../common/Navigation.module.scss';

import { SectionProps } from '../../interfaces/SectionProps';
import Button from '../../components/button/Button';

const Footer = forwardRef<HTMLElement, SectionProps>(({ scrollToRef }, ref) => {
    return (
        <footer className={`${navStyles.navigation} ${styles.footer}`} ref={ref}>
            <nav>
                <ul>
                    <Button size={'lg'} variant={'none'} onClick={() => scrollToRef?.('header')}>
                        Sanket Pande
                    </Button>
                </ul>
                <ul>
                    <li>
                        <Button size={'lg'} variant={'none'} onClick={() => scrollToRef?.('about')}>
                            About
                        </Button>
                    </li>
                    <li>
                        <Button size={'lg'} variant={'none'} onClick={() => scrollToRef?.('contact')}>
                            Contact
                        </Button>
                    </li>
                </ul>
            </nav>
        </footer>
    );
});

export default Footer;
