import { EmblaOptionsType } from "embla-carousel-react"

export interface CustomButtonProps {
    linkURL?: any,
    customButtonStyles?: string,
    isDisabled?: boolean,
    btnType?: "button" | "submit",
    title?: string,
    icon?: any
}

interface slidesProps {
    quote: string;
    company: string;
    image: string;
    nextSlide: number;
}

export type CarouselComponentProps = {
    slides: slidesProps[],
    options?: EmblaOptionsType
}