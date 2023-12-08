import { team_images } from "@/constants"
import Image from "next/image"
import { CustomButton } from "."

const Team = () => {
  return (
    <div className="text-center mt-20">
        <h1 className='text-5xl font-extrabold text-gray-700 mb-10'>Our team</h1>
        <div className="divider divider-primary w-[70px] m-auto"></div>
        <p className="mt-10 w-[50vw] md:w-[90vw] max-sm:w-[80vw] m-auto text-gray-100 text-lg">
            We have a team of in-cloud DevOps experts who have a deep understanding of the AWS platform and other tools – such as Jenkins/Docker – that automate systems with thorough security and utter efficiency.
        </p>

        <div className="drawer drawer-end w-[80vw] md:w-[90vw] grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-5 mt-10 m-auto">
            {
                team_images?.map((team, index) => (
                    <div key={index}  className="overflow-hidden">
                        <input id={`drawer-id-${index}`} type="checkbox" className="relative drawer-toggle" />
                        <div  className="drawer-content relative group">
                            <div className="bg-black opacity-0 group-hover:opacity-30 w-full h-full absolute cursor-pointer ease-in duration-100 delay-200">
                                <label htmlFor={`drawer-id-${index}`} >
                                    <div className=""  ></div>
                                    <div className="flex justify-between -mt-20 items-center group-hover:mt-20 group-hover:max-sm:mt-0 px-10 max-sm:px-5">
                                        <div className="text-left tooltip tooltip-open tooltip-top cursor-pointer group-hover:ease-in-out group-hover:duration-300 group-hover:delay-300 group-hover:translate-y-40" data-tip="Click my name">
                                            <h1  className="group-hover:text-white opacity-1 font-extrabold text-lg">{team.name}</h1>
                                            <p>{team.position}</p>
                                        </div>
                                        <span  className="cursor-pointer drawer-button group-hover:ease-in-out group-hover:duration-300 group-hover:delay-300 group-hover:translate-y-40">&rarr;</span>
                                    </div>
                                </label>
                            </div>                            
                            <Image src={team.image} width={500} height={500} alt="team_picture" className="object-contain w-full h-full" />
                        </div>
            
                        <div className="drawer-side z-10">
                            <label htmlFor={`drawer-id-${index}`} aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="menu p-4 w-[90vw] overflow-hidden min-h-full glass opacity-98 rounded-l-lg bg-primary-color-default flex flex-row justify-around items-center text-black">
                                <div>
                                    <h1 className="font-bold text-5xl">{team.name}</h1>
                                    <p className="font-semibold text-3xl pt-12">{team.position}</p>                                    
                                </div>         
                                <div className="w-[48vw] max-sm:w-full">
                                 <Image src={team.image} width={500} height={500} alt="team_picture" className="object-contain w-full rounded-lg" />                   
                                </div>
                            </div>
                        </div>   
                    </div>                   
                ))
            }
        
        </div>
        <CustomButton title='Take a look at the full team.' linkURL="/about" btnType='button' customButtonStyles='rounded-full my-24  bg-primary-color-default text-white border-none px-24 max-sm:px-10'/>
    </div>
  )
}

export default Team