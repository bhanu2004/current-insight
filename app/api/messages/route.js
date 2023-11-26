import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (req)=>{
    
    try{
        const body = await req.json();
        console.log(body);
        const message = await prisma.message.create({
            data:{...body},
        })
        
        return new NextResponse(JSON.stringify(message, {status: 200}))

    } catch(err){
        console.log(err);
        return new NextResponse(
            JSON.stringify({message: "something went wrong!"}, {status:500})
        );
    }
}