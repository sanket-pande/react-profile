import { forwardRef } from 'react';

import styles from './Header.module.scss';
import navStyles from '../../common/Navigation.module.scss';

import { SectionProps } from '../../interfaces/SectionProps';
import Button from '../../components/button/Button';

const Header = forwardRef<HTMLElement, SectionProps>(({ scrollToRef }, ref) => {
    return (
        <header className={`${navStyles.navigation} ${styles.header}`} ref={ref}>
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
        </header>
    );
});

export default Header;
