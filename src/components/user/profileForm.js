"use client"
import React, {useState} from 'react';
import LoaderButton from "@/components/master/LoaderButton";
import { useRouter } from 'next/navigation'
import toast from "react-hot-toast";

const ProfileForm = (props) => {

    let [submit,setSubmit]=useState(false)
    const router = useRouter()
    async function onAction(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        setSubmit(true)
        await fetch(`/api/user/profile`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                cus_name:formData.get('cus_name'),
                cus_add:formData.get('cus_add'),
                cus_city :formData.get('cus_city'),
                cus_state:formData.get('cus_state'),
                cus_postcode:formData.get('cus_postcode'),
                cus_country:formData.get('cus_country'),
                cus_phone:formData.get('cus_phone'),
                cus_fax:formData.get('cus_fax'),
                ship_name:formData.get('ship_name'),
                ship_add:formData.get('ship_add'),
                ship_city:formData.get('ship_city'),
                ship_state:formData.get('ship_state'),
                ship_postcode:formData.get('ship_postcode'),
                ship_country:formData.get('ship_country'),
                ship_phone:formData.get('ship_phone')
            })
        });
        setSubmit(false)
        toast.success("Profile Updated")
        router.refresh();
    }

    return (
        <div className="container mt-5">
            <form onSubmit={onAction} className="card p-5 rounded-3">
                <h6>Customer Details</h6>
                <hr/>
                <div className="row mb-4">
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer Name </label>
                        <input defaultValue={props.data!==null? props.data['cus_name'] : ' '} name="cus_name" type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">

                        <label className="form-label">Customer Phone </label>
                        <input defaultValue={props.data!==null? props.data['cus_phone'] : ' '} name="cus_phone" type="text" className="form-control "/>

                    </div>

                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer Fax </label>
                        <input defaultValue={props.data!==null? props.data['cus_fax'] : ' '} name="cus_fax" type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer Country </label>
                        <input  defaultValue={props.data!==null? props.data['cus_country'] : ' '}  name="cus_country" type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer City </label>
                        <input defaultValue={props.data!==null? props.data['cus_city'] : ' '} name="cus_city" type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer State </label>
                        <input defaultValue={props.data!==null? props.data['cus_state'] : ' '} name="cus_state" type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer Post Code </label>
                        <input defaultValue={props.data!==null? props.data['cus_postcode'] : ' '} name="cus_postcode" type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer Address</label>
                        <input defaultValue={props.data!==null? props.data['cus_add'] : ' '} name="cus_add"  type="text" className="form-control "/>
                    </div>
                </div>

                <h6>Shipping Details</h6>
                <hr/>
                <div className="row">
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping Name </label>
                        <input defaultValue={props.data!==null? props.data['ship_name'] : ' '} name="ship_name" type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping Phone </label>
                        <input  defaultValue={props.data!==null? props.data['ship_phone'] : ' '} name="ship_phone"   type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping Country </label>
                        <input  defaultValue={props.data!==null? props.data['ship_country'] : ' '} name="ship_country" type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping City </label>
                        <input  defaultValue={props.data!==null? props.data['ship_city'] : ' '} name="ship_city" type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping State </label>
                        <input defaultValue={props.data!==null? props.data['ship_state'] : ' '} name="ship_state" type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping Post Code </label>
                        <input defaultValue={props.data!==null? props.data['ship_postcode'] : ' '} name="ship_postcode" type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping Address</label>
                        <input  defaultValue={props.data!==null? props.data['ship_add'] : ' '} name="ship_add" type="text" className="form-control "/>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-3 p-2">
                        <button disabled={submit} type="submit" className="btn mt-3 btn-success">
                            {submit ? (<LoaderButton/>) : ("Update")}
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
}
;

export default ProfileForm;