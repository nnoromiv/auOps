import { EmblaOptionsType } from "embla-carousel-react"
import { MouseEventHandler } from "react";

export interface NavbarProps {
    toBeActive: string,
    startIndex?: number | 0,
}
export interface CustomButtonProps {
    linkURL?: any,
    customButtonStyles?: string,
    isDisabled?: boolean,
    btnType?: "button" | "submit",
    title?: string,
    icon?: any,
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

interface textSlidesProps {
    quote: string;
    company: string;
    image: string;
    nextSlide: number;
}

interface imageSlideProps {
    image: string;
}

export type CarouselComponentProps = {
    textSlides?: textSlidesProps[],
    imageSlides?: imageSlideProps[],
    options?: EmblaOptionsType
}