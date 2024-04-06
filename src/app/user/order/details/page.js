import React from 'react';
import Master from "@/components/master/Master";
import {getCookies} from "@/utility/CookieHelper";
import Link from "next/link";


async function getData(id) {
    let storedCookies=await getCookies()
    return (await (await fetch(`${process.env.HOST}/api/invoice/invoice-product-list?invoice_id=${id}`,{cache:'no-cache',headers: {'Cookie': storedCookies }})).json())['data']
}



const Page = async ({searchParams}) => {
    let id=searchParams.id
    console.log(id)
    let data=await getData(id);
    console.log(data)

    return (
        <Master>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-3">
                            <h6><Link className="text-success fw-bolder" href="/user/order/list"><i className="bi bi-arrow-left-circle"></i></Link> Order Details</h6>
                            <hr/>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Sale Price</th>
                                        <th>Qty</th>
                                        <th>Color</th>
                                        <th>Size</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.map((item,i)=> {
                                            return (
                                                <tr>
                                                    <td>{item['products']['title']}</td>
                                                    <td>{item['sale_price']}</td>
                                                    <td>{item['qty']}</td>
                                                    <td>{item['color']}</td>
                                                    <td>{item['size']}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Master>
    );
};

export default Page;