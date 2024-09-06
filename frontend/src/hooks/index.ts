import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

export interface BlogIn{
    id:string,
    title:string,
    content:string,
    author:{
        name:string
    }
}

export const useBlogs=()=>{
    const [loading,setLoading]=useState(true)
    const [blogs,setblogs]=useState<BlogIn[]>([])
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(response=>{
            setblogs(response.data.blogs)
            setLoading(false)
        })
    },[])
    return{
        loading,
        blogs
    }
}
export const useBlog=({id}:{id:string})=>{
    const [loading,setLoading]=useState(true)
    const [Blog,setblog]=useState<BlogIn>({
        id: "",
        title: "Untitled",
        content: "",
        author: { name: "Anonymous" }
      })
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            } 
        }).then(response=>{
            setblog(response.data.blog)
            setLoading(false)
        })
    },[id])
    return{
        loading,
        Blog
    }
}
