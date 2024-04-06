import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res) {
    try{
        let {searchParams}=new URL(req.url);
        let id= parseInt(searchParams.get('id'));

        const prisma=new PrismaClient();
        const result=await prisma.products.findUnique({
             where:{id:id},
             include:{product_details:true}
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}