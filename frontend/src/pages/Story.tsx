import { useState } from "react";
import { StoryBar } from "../components/StoryAppbar"
import { PlusCircleIcon } from '@heroicons/react/24/outline';
export const Story=()=>{
    const [showIcon,setshowIcon]=useState(false)
    const [showIcon2,setshowIcon2]=useState(false)
    const [title,setTitle]=useState("")
    const [content,setcontent]=useState("")
    return <div>
        <div>
            <StoryBar title={title} content={content}></StoryBar>
        </div>
        <div className="grid grid-cols-12 pt-10 ">
            <div className="col-span-2">
            </div>
            <div className="col-span-8">
                <div className="flex">
                    <div className="flex justify-center pr-2 flex-col border-r h-20 ">
                        <PlusCircleIcon style={{ strokeWidth: 0.5 }} className={`w-12 h-12
                         text-slate-400 ${showIcon ? 'opacity-100' : 'opacity-0'}`}></PlusCircleIcon>
                    </div>
                    <div className="flex justify-center flex-col pl-4 w-full">
                    <textarea
                            placeholder="Title"
                            className="text-5xl font-normal font-serif text-black placeholder-gray-400 
                                        outline-none focus:ring-0 w-full resize-none overflow-hidden"
                            onFocus={() => setshowIcon(true)} // Show icon on focus
                            onBlur={() => setshowIcon(false)} // Hide icon on blur
                            rows={1} // Initial row size
                            onInput={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.style.height = "auto";  // Reset the height
                                target.style.height = `${target.scrollHeight}px`; // Adjust height
                            }}
                            onChange={(e)=>{
                                setTitle(e.target.value)
                            }}
                    />
                    </div>
                    
                </div>
                <div className="flex pt-2 ">
                    <div className="flex justify-center pr-2 flex-col pl-1">
                        <PlusCircleIcon style={{ strokeWidth: 0.5 }} className={` w-10 h-10
                         text-slate-400 ${showIcon2 ? 'opacity-100' : 'opacity-0'}`}></PlusCircleIcon>
                    </div>
                    <div className="flex justify-center flex-col w-full pl-6">
                        <textarea
                                placeholder="Tell your story..."
                                className="text-xl font-normal font-serif text-black placeholder-gray-400 
                                outline-none focus:ring-0 w-full resize-none overflow-hidden"
                                onFocus={() => setshowIcon2(true)}
                                onBlur={() => setshowIcon2(false)}
                                rows={1}
                                onInput={(e)=>{
                                    const target=e.target as HTMLTextAreaElement
                                    target.style.height="auto"
                                    target.style.height=`${target.scrollHeight}px`
                                }}
                                onChange={(e)=>{
                                    setcontent(e.target.value)
                                }}
                            />

                    </div>
                    
                </div>
            </div>
            <div className="col-span-2">
            </div>
        </div>
    </div>   
}

