import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axiosInstance from "../../config/axiosInstance";
import Swal from "sweetalert2";

const Login = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [error, setError] = useState()
  const [formData, setFormData] = useState({
    mobileNumber: "",
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const sendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post("/user/send-otp", {
        mobileNumber: formData.mobileNumber,
      });

      if (response.status === 200) {
        Swal.fire({
          title: "OTP Sent Successfully",
          icon: "success",
          draggable: true,
        });
        setShowOtpField(true);
      }
    } catch (error) {
      let errorMessage = "Something went wrong! Please try again.";

      if (error.response) {
        console.log("error", error.response)
        console.log("error", error.response.data?.message)
        console.log("error", error.response.data?.data)
        // API ne response diya but error status ke saath
        errorMessage =  error.response.data?.message || "An error occurred";
        setLoading(false)
      } else if (error.request) {
        // Network down hone ki wajah se response nahi aaya
        errorMessage = "Network Error! Please check your internet connection.";
        setLoading(false)
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };


  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post("/user/verify-otp", {
        mobileNumber: formData.mobileNumber,
        otp,
      });
      // console.log("Response:-",response.data.user.token)
      if (response.status === 200) {
        const token = response.data.user.token;
        const id = response.data.user.id;
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        Swal.fire({
          title: "Login Successful",
          icon: "success",
          draggable: true,
        }).then(() => {
          navigate("/dashboard");
        });
      }
    } catch (error) {


      if (error.response) {
        console.log("error", error.response)
        console.log("error", error.response.data?.message)
        console.log("error", error.response.data?.data)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data?.message || "User not Register`",
        });
        setError(error.response?.data?.message);
      } else if (error.request) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Network Error! Please try again." || "An error occurred",
        });
        setError("Network Error! Please try again.");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Network Error! Please try again." || "An error occurred",
        });
        setError("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid p-0 login_container">
        <div className="login_bg">
          <div className="row">
            <div className="col-md-6">
              <div className="side_img">
              <div
  className="d-flex justify-content-center align-items-center"
  style={{ height: "100vh", marginTop: "70px" }}
>
  <img
    src="./images/gallery/login-salon.png"
    className="img-fluid"
    alt="salon"
    style={{ height: "70vh", objectFit: "cover" }}
  />
</div>

              </div>
            </div>
            <div className="col-md-6 pe-5 my-auto">
              <div className="login-control ps-2">



                <div className="form_heading text-left">
                  <h2>Welcome Back!</h2>
                  <p>Please Enter Your Login Details</p>
                </div>

                <div className="login_form">
                  <form>
                    <div className="row">
                      {/* Mobile Number Field */}
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                          <input
                            type="tel"
                            className="form-control w-75"
                            id="mobileNumber"
                            placeholder="Enter Mobile Number"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                            disabled={showOtpField} // Disable after sending OTP
                          />
                        </div>
                        {!showOtpField && (
                          <button type="button" className="btn btn-primary w-75" onClick={sendOtp} disabled={loading}>
                            {loading ? "Sending..." : "Send OTP"}
                          </button>
                        )}
                      </div>

                      {/* OTP Field (Shown After Sending OTP) */}
                      {showOtpField && (
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="otp" className="form-label">OTP</label>
                            <input
                              type="number"
                              className="form-control"
                              id="otp"
                              placeholder="Enter OTP"
                              name="otp"
                              value={otp}
                              onChange={(e) => setOtp(e.target.value)}
                              required
                            />
                          </div>
                          <button type="button" className="btn btn-success w-100" onClick={verifyOtp} disabled={loading}>
                            {loading ? "Verifying..." : "Login"}
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Register Link */}
                    <div className="mt-3 ">
                      <p style={{ fontSize: "13px" }}>
                        Don't have an account? <a href="/register">Register</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;