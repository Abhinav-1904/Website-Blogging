import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {verify} from 'hono/jwt'
import { blogInput,blogUpdate } from '@abhinav-1904/common'

export const blogRouter = new Hono<{
  Bindings:{
    DATABASE_URL:string
    JWT_secret:string
  }
  Variables:{
    userId:string
  }
}>()


blogRouter.use('/*',async(c,next)=>{
    const header=c.req.header("authorization") 
    if(!header){
      return c.json({msg:"Header missing"})
    }
    const token=header.split(' ')[1]
    try{
        const response=await verify(token,c.env.JWT_secret)
        if(response){
            c.set("userId",response.id as string)
            await next();
        }
        else{
        c.status(403)
        return c.json({error:"You are not logged in"})
        }
    }
    catch(e){
        c.status(403)
        return c.json({error:"Wrong Authorization Header"})
    }
  })
  
  
blogRouter.post('/',async(c) => {
    const body= await c.req.json()
    const {success}= blogInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message:"Input not in correct format"
      })
    }
    const userId=c.get("userId")
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blog= await prisma.post.create({
        data:{
            title:body.title,
            content: body.content,
            authorId:userId,
        }
    })
    return c.json({
        id:blog.id
    })
})
  
  
blogRouter.put('/',async(c) => {
    const body= await c.req.json()
    const {success}= blogUpdate.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message:"Input not in correct format"
      })
    }
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blog= await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content: body.content,
        }
    })
    return c.json({
        id:blog.id
    })
})
  
  
blogRouter.get('/bulk',async(c)=>{
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs=await prisma.post.findMany()
    return c.json({
        blogs
    })
})


blogRouter.get('/:id', async(c) => {
    const id= await c.req.param("id")
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const blog= await prisma.post.findFirst({
            where:{
                id:id
            }
        })
        return c.json({
            blog
        })
    }
    catch(e){
        c.status(411);
        return c.json({
            message:"Error while fetching the blog"
        })
    }
})

  

  