"use client"
import React from "react";
import StarRatings from "react-star-ratings/build/star-ratings";
import Link from "next/link";
import wishStore from "@/store/WishStore";
import {useRouter} from "next/navigation";
const WishList = (props) => {


    const router=useRouter();
    const {WishListRequest}=wishStore();

    const remove = async (product_id) => {

        await fetch(`/api/wish/list`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({product_id:product_id})
        });

       await WishListRequest();
       router.refresh();
    }


    return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4">
                            <ul className="list-group list-group-flush"> {props.data.map((item, i) => {

                                let price=<p className="bodyMedium  text-dark my-1">Price: ${item['products']['price']} </p>
                                if(item['products']['discount']===true){
                                    price=<p className="bodyMedium  text-dark my-1">Price:<strike> ${item['products']['price']} < /strike> ${item['products']['discount_price']} </p>
                                }
                                return (
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <img alt="" className="rounded-1" width="90" height="auto" src={item['products']['image']}/>
                                        <div className="ms-2 me-auto">
                                            <p className="fw-lighter m-0">{item['products']['title']}</p>
                                            {price}
                                            <StarRatings rating={parseFloat(item['products']['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                        </div>
                                        <Link className="btn btn-sm btn-outline-success" href={`/details?id=${item['product_id']}`}><i className="bi bi-eye"></i></Link>
                                        <button onClick={() => remove(item['product_id'])} className="btn mx-1 btn-sm btn-outline-danger"><i className="bi bi-trash"></i></button>
                                    </li>)
                            })} </ul>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default WishList;