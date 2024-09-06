import { AppBar } from "../components/AppBar"
import { BlogsCard } from "../components/BlogsCard"
import { useBlogs } from "../hooks"
import { BlogSkeleton } from "../components/BlogSkeleton"
export const Blogs=()=>{
    const {loading,blogs}=useBlogs();
    if(loading){
        return <div>
            <BlogSkeleton/>
        </div>
    }
    return <div>
        <div className="h-10">
            <AppBar></AppBar>
        </div>
        <div className="flex justify-center pt-4">
            <div className="">
                {blogs.map(blog=><BlogsCard 
                            key={blog.id}
                            id={blog.id}
                            AuthorName={blog.author.name ||"Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate="29/11/2004">
                </BlogsCard>)}
            </div>
        </div>
    </div>
}