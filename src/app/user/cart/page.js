import {getCookies} from "@/utility/CookieHelper";
import CartList from "@/components/user/cartList";
import Master from "@/components/master/Master";

async function getData() {
    let storedCookies=await getCookies()
    return (await (await fetch(`${process.env.HOST}/api/cart/list`,{cache:'no-cache',headers: {'Cookie': storedCookies }})).json())['data']
}


const Page = async () => {
    let data=await getData();
    return (
        <Master>
            <CartList data={data}/>
        </Master>
    );
};

export default Page;