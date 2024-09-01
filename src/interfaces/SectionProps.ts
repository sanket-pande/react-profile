import { RefObject } from 'react';

export interface SectionProps {
    scrollToRef?: (refName: string) => void;
    ref: RefObject<HTMLElement>;
}
