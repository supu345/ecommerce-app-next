import create from 'zustand';
const CartStore=create((set)=>({
    CartCount:0,
    CartListRequest:async()=>{
        let res=await fetch("/api/cart/list")
        let cartItem= await res.json();
        set({CartCount:(cartItem['data'].length)})
    },
}))

export default CartStore;