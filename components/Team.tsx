import { team_images } from "@/constants"
import Image from "next/image"

const Team = () => {
  return (
    <div className="text-center mt-20">
        <h1 className='text-5xl font-extrabold text-gray-700 mb-10'>Our team</h1>
        <div className="divider divider-primary w-[70px] m-auto"></div>
        <p className="mt-10 w-[50vw] md:w-[90vw] max-sm:w-[80vw] m-auto text-gray-100 text-lg">
            We have a team of in-cloud DevOps experts who have a deep understanding of the AWS platform and other tools – such as Jenkins/Docker – that automate systems with thorough security and utter efficiency.
        </p>

        <div className="w-[80vw] md:w-[90vw] grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-5 mt-10 m-auto">
            {
                team_images?.map((team, index) => (
                    <div key={index} className="relative group overflow-hidden">
                        <div className="bg-black opacity-0 group-hover:opacity-30 w-full h-full absolute cursor-pointer ease-in duration-100 delay-200">
                        <div className="flex justify-between -mt-20 items-center group-hover:mt-20 group-hover:max-sm:mt-0 px-10 max-sm:px-5">
                            <div className="text-left  group-hover:ease-in-out group-hover:duration-300 group-hover:delay-300 group-hover:translate-y-40">
                                <h1 className="group-hover:text-white opacity-1 font-extrabold text-lg">{team.name}</h1>
                                <p>{team.position}</p>
                            </div>
                            <span className="group-hover:ease-in-out group-hover:duration-300 group-hover:delay-300 group-hover:translate-y-40">&rarr;</span>
                        </div>
                        </div>
                        <Image src={team.image} width={400} height={400} alt="team_picture" className="object-contain w-full" />
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Team