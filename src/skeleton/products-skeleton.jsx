import React from 'react';
import Skeleton from "react-loading-skeleton";


const ProductsSkeleton = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    Array.from({length:8}).map((_,index)=>{
                        return (
                            <div key={index} className="col-lg-5-cols col-md-5-cols p-2  col-sm-6 col-12">
                                <div className="card shadow-sm h-100 rounded-3 bg-white">
                                    <img className="w-100" src="/images/ImagePlaceholder.svg"/>
                                    <div className="card-body">
                                        <Skeleton count={3}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductsSkeleton;