import { EmblaOptionsType } from "embla-carousel-react"
import { MouseEventHandler, RefAttributes } from "react";

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

export interface benefitListProps {
    item: string
}

export interface benefitInformationProps {
    text: number,
    title: string
}

export interface useCasesProps {
    icon: any,
    text: string
}
export interface DynamicCaseProp {
    pageLink: string,
    caseStudyText: string,
    caseImage: string,
    notableQuoteName: string,
    quote: string,
    benefit: string,
    benefitList: benefitListProps[]
    benefitInformation: benefitInformationProps[],
    nutShell: string,
    nutShellP: string,
    serviceTitle: string,
    serviceText: string,
    useCases: useCasesProps[]
}

export interface FormSchemaProps {
    name: string,
    email: string,
    message: string
}