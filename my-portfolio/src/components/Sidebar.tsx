"use client";

import "./Sidebar.scss";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Image from "next/image";
// import InstagramLogo from '../../public/icons';

// import logo from

export default function Sidebar(){

    const pathname = usePathname();
    const MenuItem = ({icon, name, route
    }: {
        icon?: any;
        name?: string;
        route?: any;
    }) => {
        const colorClass = pathname === route ? "text-black" : "text-black/50 hover:text-black";
        return (
            <Link
                href={route}
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`} //
            >
                <div className="text-xl flex [&>*]:mx-auto w-[29px]">
                    <img src={icon} alt="icon" className = {name === "Profile" ? "rounded-full" : ""}/>
                </div>
                <div>{name}</div>
            </Link>
        )
    }

    return (
        // <div className="bg-gray-800 text-white h-screen w-1/4 p-4">
        //     <div className="font-bold text-xl mb-4">Sidebar</div>
        //     {/* Add your sidebar content here */}
        // </div>

            <div className="bg-white text-black h-screen w-1/6 p-8">
                <div className="p-2 flex">
                    <Link href="/">
                        <img src="/icons/InstagramLogo.png" alt="Company Logo" className="w-full h-auto" />
                    </Link>
                </div>
                <div className="flex flex-col">
                    <MenuItem
                        name="Profile"
                        route="/"
                        icon="/icons/Pfp.jpg"
                    />
                    <MenuItem
                        name="Experience"
                        route="/experience"
                        icon="/icons/Compass.png"
                    />
                    <MenuItem
                        name="Projects"
                        route="/projects"
                        icon="/icons/Bookmark.png"
                    />


                </div>
            </div>
    );
}