"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import StarRatings from "react-star-ratings/build/star-ratings";


const ProductList = (props) => {
    const [brands,SetBrands]=useState(null);
    const [category,SetCategory]=useState(null);


    useEffect(() => {
        (async ()=>{
            let category=await fetch("/api/product/category-list");
            let categoryJSON=await category.json();
            SetCategory(categoryJSON['data'])


            let brand=await fetch("/api/product/brand-list");
            let brandJSON=await brand.json();
            SetBrands(brandJSON['data'])


        })()
    }, []);





    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3 p-2">
                    <div className="card h-100 mt-1 p-4">

                        <div>
                            <label>Category</label>
                            <select className="form-select form-control">
                                <option value="">Choose Category</option>
                                {
                                    category !== null &&
                                    category.map((item, i) => {
                                        return <option value={item['id']}>{item['categoryName']}</option>
                                    })

                                }
                            </select>
                        </div>

                        <div className="my-2">
                            <label>Brand</label>
                            <select className="form-select form-control">
                                <option value="">Choose Brands</option>
                                {
                                    brands !== null &&
                                    brands.map((item, i) => {
                                        return <option value={item['id']}>{item['brandName']}</option>
                                    })

                                }
                            </select>
                        </div>

                        <div className="my-2">
                            <label>Min Price</label>
                            <input min={1000} max={1000000} className="w-100" type="range"/>
                        </div>

                        <div className="my-2">
                            <label>Max Price</label>
                            <input className="w-100" min={1000} max={1000000} type="range"/>
                        </div>


                    </div>
                </div>
                <div className="col-md-9 p-2">
                    <div className="row">
                        {
                            props.data.map((item,i)=>{
                                let price=<p className="bodyMedium  text-dark my-1">Price: ${item['price']} </p>
                                if(item['discount']===true){
                                    price=<p className="bodyMedium  text-dark my-1">Price:<strike> ${item['price']} < /strike> ${item['discount_price']} </p>
                                }
                                return(
                                    <div className="col-lg-5-cols col-md-5-cols p-1  col-sm-6 col-12">
                                        <Link href={`/details?id=${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                            <img className="w-100 rounded-top-2" src={item['image']} />
                                            <div className="card-body">
                                                <p className="bodySmal text-secondary my-1">{item['title']}</p>
                                                {price}
                                                <StarRatings rating={parseFloat(item['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;