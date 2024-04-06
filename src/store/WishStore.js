import create from 'zustand';
const WishStore=create((set)=>({
    WishCount:0,
    WishListRequest:async()=>{
        let res=await fetch("/api/wish/list")
        let wishItem= await res.json();
        set({WishCount:(wishItem['data'].length)})
    }
}))
export default WishStore;