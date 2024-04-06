"use client"
import React, {useState} from 'react';
import toast from "react-hot-toast";
import LoaderButton from "@/components/master/LoaderButton";

const OtpForm = () => {

    let [submit,setSubmit]=useState(false)

    async function onAction(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const otp =formData.get("otp");
        if(otp.length===0){
            toast.error("Code Required !");
        }else{
            setSubmit(true)
            await fetch(`/api/user/verify-otp`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email:sessionStorage.getItem("email"),otp:otp})
            });
            setSubmit(false)
            sessionStorage.clear();
            window.location.href="/"
        }
    }
    return (
        <div>

            <div className="container section">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <form onSubmit={onAction} className="card p-5">
                            <h4>Enter Verification Code</h4>
                            <p>A verification code will be sent to the email address you provide</p>
                            <input defaultValue="" placeholder="XXX-XXX" name="otp" type="text" className="form-control"/>
                            <button disabled={submit} type="submit" className="btn mt-3 btn-success">
                                {submit?(<LoaderButton/>):("Verify")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpForm;