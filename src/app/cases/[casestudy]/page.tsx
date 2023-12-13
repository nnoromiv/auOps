import { Footer, Navbar } from "@/components"
import { DynamicCase } from "@/components/cases"
import { dynamic_page } from "@/components/export"
import { case_studies_links } from "@/constants"
import NotFound from "../../not-found"

interface PageParams {
    params : {
        casestudy: string,
    }
}

export default function Page({ params }: PageParams) {
    return (
        <>
        {
            case_studies_links.includes(params.casestudy) ?
            <>
                <Navbar toBeActive="/cases" startIndex={2} />
                {
                    dynamic_page?.map((page, index) => {
                        if (page.pageLink === params.casestudy) {
                        return (
                            <DynamicCase 
                                key={index}
                                pageLink={page.pageLink} 
                                caseStudyText={page.caseStudyText}
                                caseImage={page.caseImage}
                                notableQuoteName={page.notableQuoteName}
                                quote={page.quote}
                                benefit={page.benefit}
                                benefitList={page.benefitList}
                                benefitInformation={page.benefitInformation}
                                nutShell={page.nutShell}
                                nutShellP={page.nutShellP}
                                serviceTitle={page.serviceTitle}
                                serviceText={page.serviceText}
                                useCases={page.useCases}
                            />
                        )
                    }
                    return null
                    })
                }
                <Footer contactButton={true} />
            </>
            :
                <NotFound />
        }
        </>
    )
}