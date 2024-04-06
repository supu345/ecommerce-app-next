import React from 'react';
import Master from "@/components/master/Master";
import {getCookies} from "@/utility/CookieHelper";
import Link from "next/link";

async function getData() {
    let storedCookies=await getCookies()
    return (await (await fetch(`${process.env.HOST}/api/invoice/invoice-list`,{cache:'no-cache',headers: {'Cookie': storedCookies }})).json())['data']
}

const Page = async () => {
    let data=await getData();
    return (
        <Master>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-3">
                            <h6>Order List</h6>
                            <hr/>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Total</th>
                                        <th>Vat</th>
                                        <th>Payable</th>
                                        <th>Customer</th>
                                        <th>Shipping</th>
                                        <th>Delivery</th>
                                        <th>Payment</th>
                                        <th>Details</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.map((item, i) => {
                                            return (
                                                <tr>
                                                    <td>{item['total']}</td>
                                                    <td>{item['vat']}</td>
                                                    <td>{item['payable']}</td>
                                                    <td>{item['cus_details']}</td>
                                                    <td>{item['ship_details']}</td>
                                                    <td>{item['delivery_status']}</td>
                                                    <td>{item['payment_status']}</td>
                                                    <td><Link className="btn btn-outline-success btn-sm"
                                                              href={`/user/order/details?id=${item['id']}`}>Details</Link>
                                                    </td>
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