
import { ClockIcon, HandThumbUpIcon, LockClosedIcon, ScaleIcon, UsersIcon, CodeBracketIcon, UserIcon, WindowIcon } from '@heroicons/react/24/outline'
import { ArrowDownLeftIcon } from '@heroicons/react/24/solid'


export const information = [
    {
        icon: <ClockIcon className='w-14 h-14 text-[#0FABBE] group-hover:text-white' />,
        title: "Agility" ,
        text: "Speed in development with fast, continuous delivery."
    },
    {
        icon: <ArrowDownLeftIcon className='w-14 h-14 text-[#0FABBE] group-hover:text-white' />,
        title: "Minor updates",
        text: "Authorization for minor and continuous system updates as to keep up with market transformations."
    },
    {
        icon: <HandThumbUpIcon className='w-14 h-14 text-[#0FABBE] group-hover:text-white' />,
        title: "Credibility and Automation",
        text: "Reliability from automation of launching schedules and backups, ensuring safety in operations."
    },
    {
        icon: <ScaleIcon className='w-14 h-14 text-[#0FABBE] group-hover:text-white' />,
        title: "Scale",
        text: "With scale of infrastructure and development processes."
    },
    {
        icon: <UsersIcon className='w-14 h-14 text-[#0FABBE] group-hover:text-white' />,
        title: "Collaboration",
        text: "Integration and collaboration among teams and tools: agile, continuous delivery, and automation to innovate faster and more efficiently."
    },
    {
        icon: <LockClosedIcon className='w-14 h-14 text-[#0FABBE] group-hover:text-white' />,
        title: "Security",
        text: "Control practices and management techniques guarantee information security."
    },
]

export const partner_information = [
    {
        icon: <ClockIcon className='w-10 h-10'/> ,
        number: '100,000',
        superScript: 'h',
        text: 'Hours invested in work',
    },
    {
        icon: <UserIcon className='w-10 h-10'/> ,
        number: '500',
        superScript: '+',
        text: 'Clients',
    },
    {
        icon: <CodeBracketIcon className='w-10 h-10'/> ,
        number: '50',
        superScript: '+',
        text: 'Active projects',
    },
    {
        icon: <WindowIcon className='w-10 h-10'/>,
        number: '530',
        superScript: '+',
        text: 'Accomplished projects',
    }
]