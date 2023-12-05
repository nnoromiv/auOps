import Image from "next/image"
import { CustomButton } from "."
import { navigation } from "@/constants"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="w-full">
        <div className="navbar fixed glass z-10 lg:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Image
                            src="/Menu.svg"
                            width={30}
                            height={20}
                            alt="Menu"
                        />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow glass bg-black bg-opacity-95 rounded-box w-52">
                        {
                            navigation.map((nav, index) => (
                                <li key={index} className="py-3">
                                    <Link href={nav.link} className="text-xl text-white font-semibold">
                                        {nav.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    AUOps
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl text-secondary-color font-semibold">
                    {
                        navigation.map((nav, index) => (
                            <li key={index}>
                                <Link href={nav.link}>
                                    {nav.title}
                                </Link>
                            </li>
                        ))
                    }
                    <CustomButton title="Schedule a Call" btnType="button" customButtonStyles="bg-orange-100 text-white border-none"/>
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <CustomButton title="Schedule a Call" btnType="button" customButtonStyles="bg-orange-100 text-white mr-2 border-none"/>
            </div>
        </div>
    </header>
  )
}

export default Navbar