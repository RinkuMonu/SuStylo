import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axiosInstance from "../../config/axiosInstance";
import Swal from "sweetalert2";
import SEO from "../../SEO";

const Login = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [error, setError] = useState(null);
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

    // Validate mobile number
    if (!formData.mobileNumber || !/^\d{10}$/.test(formData.mobileNumber)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Mobile Number",
        text: "Please enter a valid 10-digit mobile number",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post("/user/send-otp", {
        mobileNumber: formData.mobileNumber,
      });

      if (response.status === 200) {
        Swal.fire({
          title: "OTP Sent Successfully",
          text: `OTP has been sent to ${formData.mobileNumber}`,
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        });
        setShowOtpField(true);
        setError(null);
      }
    } catch (error) {
      let errorMessage = "Something went wrong! Please try again.";
      if (error.response) {
        errorMessage = error.response.data?.message || "An error occurred";
      } else if (error.request) {
        errorMessage = "Network Error! Please check your internet connection.";
      }
      setError(errorMessage);
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

    // Validate OTP
    if (!otp || !/^\d{4}$/.test(otp)) {
      Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: "Please enter a valid 4-digit OTP",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post("/user/verify-otp", {
        mobileNumber: formData.mobileNumber,
        otp: otp,
      });
      console.log("Login data", response.data)
      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("id", user._id);
        localStorage.setItem("gender", user.gender);

        await Swal.fire({
          title: "Login Successful",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      }
    } catch (error) {
      let errorMessage = "Something went wrong!";
      if (error.response) {
        errorMessage = error.response.data?.message || "Invalid OTP";
      } else if (error.request) {
        errorMessage = "Network Error! Please check your internet connection.";
      }
      setError(errorMessage);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO />
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-image-section">
            <img
              src="./images/gallery/login-salon.png"
              className="login-image"
              alt="Salon"
            />
          </div>

          <div className="login-form-section">
            <div className="login-form-container">
              <img
                src="/images/stylo_Logo.png"
                alt="logo"
                className="img-fluid"
                width={70}
              />
              <div className="login-header">
                <h2 className="mt-3">Welcome Back!</h2>
                <p>Please enter your login details</p>
              </div>

              <form className="login-form">
                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    placeholder="Enter 10-digit mobile number"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={(e) => {
                      const onlyNumbers = e.target.value.replace(/\D/g, "");
                      handleChange({
                        target: {
                          name: "mobileNumber",
                          value: onlyNumbers
                        }
                      });
                    }}

                    required
                    maxLength="10"
                    pattern="\d{10}"
                    disabled={showOtpField}
                    className={error ? "error-input" : ""}
                  />
                  {error && <div className="error-message">{error}</div>}
                </div>

                {!showOtpField ? (
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      backgroundColor: "#ffdecc",
                      backgroundImage: "linear-gradient(225deg, #ffdecc 0%, #f35200 100%)",
                    }}
                    onClick={sendOtp}
                    disabled={loading || !formData.mobileNumber}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending OTP...
                      </>
                    ) : (
                      "Send OTP"
                    )}
                  </button>
                ) : (
                  <>
                    <div className="form-group">
                      <label htmlFor="otp">OTP</label>
                      <input
                        type="text"
                        id="otp"
                        placeholder="Enter 4-digit OTP"
                        name="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        required
                        maxLength="4"
                        pattern="\d{4}"
                        inputMode="numeric"
                      />
                      <div className="otp-resend">
                        Didn't receive OTP?
                        <button
                          type="button"
                          className="resend-link"
                          onClick={sendOtp}
                          disabled={loading}
                        >
                          Resend
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{
                        backgroundColor: "#ffdecc",
                        backgroundImage: "linear-gradient(225deg, #ffdecc 0%, #f35200 100%)",
                      }}
                      onClick={verifyOtp}
                      disabled={loading || !otp}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Verifying...
                        </>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;