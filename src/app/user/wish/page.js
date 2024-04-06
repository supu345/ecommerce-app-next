import React from 'react';
import Master from "@/components/master/Master";
import WishList from "@/components/user/wishList";
import {getCookies} from "@/utility/CookieHelper";


async function getData() {
    let storedCookies=await getCookies()
    return (await (await fetch(`${process.env.HOST}/api/wish/list`,{cache:'no-cache',headers: {'Cookie': storedCookies }})).json())['data']
}


const Page = async () => {
    let data=await getData();
    return (
        <Master>
            <WishList data={data}/>
        </Master>
    );
};

export default Page;