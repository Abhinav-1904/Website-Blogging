import { Avatar, Circle } from "./BlogsCard"

export const Authcomp=({name,length}:{name:string,length:number})=>{
    return <div className="flex">
        <div className="flex justify-center flex-col">
            <Avatar name={name} size="big"></Avatar>
        </div>
        <div className="pl-4">
            <div className="flex ">
                <div className="font-medium">
                    {name}
                </div>
                <div className="flex justify-center flex-col px-2 pt-1">
                    <Circle></Circle>
                </div>
                <div className="text-green-700 cursor-pointer">
                    Follow
                </div>
            </div>
            <div className="flex text-sm">
                <div className="text-slate-600">
                    {Math.ceil(length)+" min read"}
                </div>
                <div className="flex justify-center flex-col px-2 pt-1">
                    <Circle></Circle>
                </div>
                <div className="text-slate-600">
                    May 23, 2024
                </div>
            </div>
        </div>
    </div>
}