import { Link } from "react-router-dom"
import { Avatar } from "./BlogsCard.tsx"
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { BellIcon } from "@heroicons/react/24/outline";
export const AppBar=()=>{
    return <div className="flex justify-between px-6 py-2 border-b">
        <Link to={'/blogs'} className="font-bold text-3xl font-serif flex flex-col justify-center cursor-pointer">
            Medium
        </Link>
        <div className="flex">
            <Link to={'/new-story'} className=" flex cursor-pointer text-slate-600 hover:text-black">
                <div className="flex justify-center flex-col">
                    <PencilSquareIcon className="h-6 w-6 mr-2"></PencilSquareIcon>
                </div>
                <div className=" flex justify-center flex-col text-md">
                    Write
                </div>
            </Link>
            <div className="flex justify-center flex-col">
                <BellIcon className="h-6 w-6 text-slate-600 mx-8"></BellIcon>
            </div>
            <div>
                <Avatar name="Abhinav Singh" size="big"></Avatar>
            </div>
        </div>
    </div>
}