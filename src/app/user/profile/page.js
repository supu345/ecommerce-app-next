import React from 'react';
import Master from "@/components/master/Master";
import ProfileForm from "@/components/user/profileForm";
import {getCookies} from "@/utility/CookieHelper";



async function getData() {
    let storedCookies=await getCookies()
    return (await (await fetch(`${process.env.HOST}/api/user/profile`,{cache:'no-cache',headers: {'Cookie': storedCookies }})).json())['data']
}
const Page = async () => {

    let ProfileData = await getData();

    return (
        <Master>
            <ProfileForm data={ProfileData}/>
        </Master>
    );
};

export default Page;