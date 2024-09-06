import { useParams } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { useBlog } from "../hooks"
import { Authcomp } from "../components/AuthorComp.tsx";
import { BlogSkeleton } from "../components/BlogSkeleton.tsx";
export const Blog =()=>{
    const {id}=useParams()
    const {loading,Blog}=useBlog({id:id||""});
    if(loading){
        return<div className="space-y-8">
            <BlogSkeleton />
        </div>
    }
    return <div>
        <div>
            <AppBar></AppBar>
        </div>
        <div className="grid grid-cols-4">
            <div className="col-span-1">

            </div>
            <div className="col-span-2">
                <div className="">
                    <div className="font-extrabold text-5xl pt-4 pb-4">
                        {Blog.title}
                    </div>
                    <div>
                        <Authcomp name={Blog.author.name} length={Blog.content.length/200} ></Authcomp>
                    </div>
                </div>
                <div className="text-xl font-serif pt-4">
                    {Blog.content}
                </div>
            </div>
            <div className="col-span-1">

            </div>

        </div>
    </div>
}