import React from 'react';
import Master from "@/components/master/Master";
import ProductList from "@/components/product/ProductList";



async function getData(id) {
    return (await (await fetch(`${process.env.HOST}/api/product/list-by-brand?id=${id}`)).json())['data']
}




const Page = async ({searchParams}) => {

    let id=searchParams.id
    let data=await getData(id);


    return (
        <Master>
            <ProductList data={data}/>
        </Master>
    );
};

export default Page;