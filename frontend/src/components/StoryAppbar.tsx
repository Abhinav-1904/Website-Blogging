import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogsCard.tsx"
import { BellIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { BACKEND_URL } from "../config.ts";

type StoryBarProps = {
    title: string;
    content: string;
  };

export const StoryBar=({title,content}:StoryBarProps)=>{
    console.log(content)
    const navigate=useNavigate()
    const sendBlog=async()=>{
        const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content
            },
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })
        navigate(`/blog/${response.data.id}`)
    }
    return <div className="flex justify-between px-28 py-2">
    <Link to={'/blogs'} className="font-bold text-3xl font-serif flex flex-col justify-center cursor-pointer">
        Medium
    </Link>
    <div className="flex">
        <div className="flex justify-center flex-col pt-2">
            <button onClick={sendBlog}
            type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none
            focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xs px-3 py-1.5 text-center me-1 
            mb-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
        </div>
        <div className="flex justify-center flex-col">
            <BellIcon className="h-6 w-6 text-slate-600 mx-6"></BellIcon>
        </div>
        <div className="flex justify-center flex-col">
            <Avatar name="Abhinav Singh" size="big"></Avatar>
        </div>
    </div>
</div>
}