"use client";
import toast from "react-hot-toast";
import { useState } from "react";
import LoaderButton from "@/components/master/LoaderButton";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  let [submit, setSubmit] = useState(false);
  const router = useRouter();
  async function onAction(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    if (email.length === 0) {
      toast.error("Email Address Required !");
    } else {
      setSubmit(true);
      await fetch(`/api/user/sent-otp?email=${email}`);
      setSubmit(false);
      sessionStorage.setItem("email", email);
      router.push("/user/otp");
    }
  }
  return (
    <div>
      <div className="container section">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
            <form onSubmit={onAction} className="card p-5">
              <h4>Enter Your Email</h4>
              <p>
                A verification code will be sent to the email address you
                provide
              </p>
              <input
                defaultValue=""
                placeholder="Email Address"
                name="email"
                type="email"
                className="form-control"
              />
              <button
                disabled={submit}
                type="submit"
                className="btn mt-3 btn-success"
              >
                {submit ? <LoaderButton /> : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
