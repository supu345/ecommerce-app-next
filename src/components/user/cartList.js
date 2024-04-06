"use client"
import cartStore from "@/store/CartStore";
import {useRouter} from "next/navigation";

const CartList = (props) => {

    const router=useRouter();
    const {CartListRequest}=cartStore();

    const remove = async (id) => {
        await fetch(`/api/cart/list`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id:id})
        });

        await CartListRequest()
        router.refresh();
    }


    const cartTotal=()=>{
        let total=0;
        props.data.forEach((item,i)=>{
            let qty=item['qty']
            let price=item['products']['price']
            if(item['products']['discount']===true){
                price=item['products']['discount_price']
            }
            total=total+(qty*price);
        })

        return total;
    }


    const CreateInvoice=async ()=>{
       let res= await fetch(`/api/invoice/create`);
       let resJSON=await  res.json();
       window.location.href= resJSON['data']['GatewayPageURL']
    }



    return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4">
                            <ul className="list-group list-group-flush"> {props.data.map((item, i) => {

                                let price=item['products']['price']
                                if(item['products']['discount']===true){
                                    price=item['products']['discount_price']
                                }

                                return (
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <img alt="" className="rounded-1" width="90" height="auto" src={item['products']['image']}/>
                                        <div className="ms-2 me-auto">
                                            <p className="fw-lighter m-0">{item['products']['title']}</p>
                                            <p className="fw-lighter my-1">Unit Price: {price},Qty: {item['qty']}, Size: {item['size']}, Color: {item['color']}</p>
                                            <p className=" h6 fw-bold m-0 text-dark">
                                                Total <i className="bi bi-currency-dollar"></i>{parseInt(price) * parseInt(item['qty'])}
                                            </p>
                                        </div>
                                        <button onClick={() => remove(item['id'])} className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i>
                                        </button>
                                    </li>)
                            })} </ul>
                            <div className="my-4">
                                <ul className="list-group bg-transparent  list-group-flush">
                                    <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                        <span className="float-end">Total: <i className="bi bi-currency-dollar"/>{cartTotal()} </span>
                                    </li>
                                    <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                        <span className="float-end"> Vat(5%): <i className="bi bi-currency-dollar"/>{cartTotal()*0.05} </span>
                                    </li>
                                    <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                        <span className="float-end"> Payable: <i className="bi bi-currency-dollar"/>{cartTotal()+(cartTotal()*0.05)} </span>
                                    </li>
                                    <li className="list-group-item bg-transparent ">
                                        <span className="float-end">
                                            <button onClick={CreateInvoice} className="btn btn-success">Check Out</button>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CartList;