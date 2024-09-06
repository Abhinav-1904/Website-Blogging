import { SignupInput } from "@abhinav-1904/common"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"

export const Auth=({type}:{type:"signup"|"signin"})=>{
    const navigate=useNavigate()
    const [postInputs,setpostInputs]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })
    async function sendRequest(){
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type=="signup"?"signup":"signin"}`,postInputs)
            const jwt=response.data.jwt;
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        }
        catch(e){

        }
    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="text-3xl font-bold px-10 text-center">
                    {type=="signin"?"Welcome Back":"Create an account"}
                </div>
                <div className="text-slate-400 px-12">
                    {type=="signin"?"Don't have an account?" : "Already have an account?"}
                    <Link className="pl-2 underline" to={type=="signup"?"/signin":"/signup"}>{type=="signin"?"Sign up":"Login"}</Link>
                </div>
                <div>
                    {type=="signup"?
                    <LabelledInput label="Name" placeholder="Enter your Username" onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                        setpostInputs({
                            ...postInputs,
                            name:e.target.value
                        })
                    }}></LabelledInput>:null}
                </div>
                <div>
                    <LabelledInput label="Email" placeholder="abc@example.com" onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                        setpostInputs({
                            ...postInputs,
                            email:e.target.value
                        })
                    }}>
                    </LabelledInput>
                </div>
                <div>
                    <LabelledInput label="Password" type={"password"} placeholder="Enter Password" onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                        setpostInputs({
                            ...postInputs,
                            password:e.target.value
                        })
                    }}>
                    </LabelledInput>
                </div>
                <div className="pt-3">
                <button onClick={sendRequest} type="button" className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none 
                focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 me-2 mb-2 dark:bg-black
                 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type=="signup"?"Sign Up":"Sign In"}</button>
                </div>
            </div>
        </div>
    </div>
}
interface LabelledInputType {
    label:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
    type?:string
}
function LabelledInput({label,placeholder,onChange,type}:LabelledInputType){
    return <div>
        <label className="block mt-2 mb-2 text-sm font-semibold text-gray-900 dark:text-black">{label}</label>
        <input onChange={onChange} type={type||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
     dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 
          dark:focus:border-blue-500" placeholder={placeholder} required />
    </div>
}