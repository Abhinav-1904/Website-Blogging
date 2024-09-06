import { Link } from "react-router-dom"
interface BlogCardComponents{
    AuthorName:string,
    title:string,
    content:string,
    publishedDate:string
    id:string
}
export const BlogsCard=({
    AuthorName,
    title,
    content,
    publishedDate,
    id
}:BlogCardComponents)=>{
    return <Link to={`/blog/${id}`}>
        <div className="border-b p-4 pb-4 max-w-screen-md w-screen cursor-pointer">
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar name={AuthorName}></Avatar>
                </div>
                <div className="pl-2 text-sm flex justify-center flex-col">
                    {AuthorName}
                </div>
                <div className="flex justify-center flex-col pl-2 pt-1">
                    <Circle></Circle>
                </div>
                <div className="flex justify-center flex-col pl-2 text-sm font-thin text-slate-500">
                    {publishedDate}
                </div>
            </div>
            <div className="text-2xl pt-2 font-bold font-sans">
                {title}
            </div>
            <div className="font-sans text-slate-500">
                {content.slice(0,190)+"..."}
            </div>
            <div className="text-slate-500 font-thin pt-4">
                {`${Math.ceil(content.length/200)} min read`}
            </div>
        </div>
    </Link>
}

export function Circle(){
    return <div className="rounded-full h-1 w-1 bg-slate-400">

    </div>
}
export function Avatar({name,size="small"}:{name:string,size?:"small"|"big"}){
    return <div className={`relative inline-flex items-center justify-center overflow-hidden
     bg-gray-100 rounded-full dark:bg-gray-600 ${size=="small"?"w-5 h-5":"w-8 h-8"}`}>
    <span className={`${size=="small"?"text-xs":"text-md"} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
    </div>
}