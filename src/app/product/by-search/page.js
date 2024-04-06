import React from 'react';
import Master from "@/components/master/Master";
import ProductList from "@/components/product/ProductList";


async function getData(key) {
    return (await (await fetch(`${process.env.HOST}//api/product/list-by-keyword?keyword=${key}`)).json())['data']
}


const Page = async ({searchParams}) => {
    let key=searchParams.key
    let data=await getData(key)
    return (
        <Master>
            <ProductList data={data}/>
        </Master>
    );
};

export default Page;