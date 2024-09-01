import { RefObject } from "react";

type RefMap = {
    [key: string]: RefObject<HTMLElement>;
};

export const SectionMap: RefMap = {}

export const scrollToSection = (refName: string) => {
    const refToScroll = SectionMap[refName]
    if (refToScroll && refToScroll.current) {
        refToScroll.current.scrollIntoView({ behavior: 'smooth' });
    }
};
