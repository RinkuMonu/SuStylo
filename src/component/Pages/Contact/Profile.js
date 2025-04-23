import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import '../style/style.css';
import './profile.css';
import { FaArrowDown,FaArrowUp } from 'react-icons/fa';
import { IoAddOutline } from "react-icons/io5";
import axiosInstance from "../../config/axiosInstance";
import Swal from "sweetalert2";
export default function Profile() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        gender: 'male'
    });
    const [isMale, setIsMale] = useState(true);
    const [isVisible, setVisible] = useState(false);
    const [filter, setFilter] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [amount, setAmount] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const domRef = useRef(null);
    const userId = localStorage.getItem("id");

    const transactions = [
        { type: 'credit', title: 'Wallet Top-up', date: '4/22/2025', time: '10:31 AM', status: 'Approved', amount: 1200 },
        { type: 'credit', title: 'Wallet Top-up', date: '4/22/2025', time: '10:31 AM', status: 'Approved', amount: 1200 },
        { type: 'debit', title: 'Wallet Top-up', date: '4/22/2025', time: '10:19 AM', status: 'Approved', amount: 10 },
    ];

    const filteredTransactions = transactions.filter(txn =>
        filter === 'all' ? true : txn.type === filter
    );

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axiosInstance.get(`/user/get/${userId}`);
                const userData = response.data;
                
                setFormData({
                    name: userData.name || '',
                    email: userData.email || '',
                    mobile: userData.mobileNumber || '',
                    gender: userData.gender || 'male'
                });
                
                setIsMale(userData.gender === 'male');
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching profile:", error);
                setIsLoading(false);
            }
        };

        fetchUserProfile();
        
        new WOW().init();
        AOS.init({ duration: 1000 });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        if (domRef.current) observer.observe(domRef.current);

        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, [userId]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleToggle = () => {
        const newGender = !isMale;
        setIsMale(newGender);
        setFormData(prev => ({
            ...prev,
            gender: newGender ? 'male' : 'female'
        }));
    };

    const updateProfile = async () => {
        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                gender: formData.gender
            };
    
            const response = await axiosInstance.put(`/user/update-profile/${userId}`, payload);
            console.log('Profile updated successfully:', response.data);
    
            if (response.status === 200) {
                Swal.fire({
                    title: "Profile Updated",
                    text: "Your profile has been updated successfully.",
                    icon: "success",
                    timer: 3000,
                    showConfirmButton: false,
                });
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            Swal.fire({
                title: "Update Failed",
                text: "An error occurred while updating your profile. Please try again.",
                icon: "error",
                showConfirmButton: true,
            });
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile();
    };

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleAmountClick = (value) => {
        setAmount(prev => (parseInt(prev || 0) + value).toString());
    };

    if (isLoading) {
        return <div className="text-center py-5">Loading profile...</div>;
    }

    return (
        <>
            <div className={` ${isVisible ? "is-visible" : ""}`} ref={domRef}>
                <section className="Profile-section d-flex align-items-center">
                    <div className="hero-overlay"></div>
                    <div className="container text-center position-relative">
                        <h2 className="hero-title fw-bold">Profile</h2>
                        <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                    </div>
                </section>
                
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card shadow p-4 mb-5">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row user_form">
                                            <div className="col-md-12 mb-5" style={{
                                                backgroundImage: `url('/images/bg.jpg')`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                borderRadius: '12px',
                                                height: "12vh"
                                            }}>
                                                <img
                                                    src="/images/user.png"
                                                    alt="Profile"
                                                    className="img-fluid rounded-circle mb-3"
                                                    style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        objectFit: 'cover',
                                                        marginTop: '20px',
                                                        border: '3px solid white'
                                                    }}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">Full Name</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="name" 
                                                        placeholder="Enter Name"   
                                                        value={formData.name} 
                                                        onChange={handleChange} 
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                                    <input 
                                                        type="tel" 
                                                        className="form-control" 
                                                        id="mobile" 
                                                        placeholder="Enter Number" 
                                                        value={formData.mobile} 
                                                        onChange={handleChange} 
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Email Address</label>
                                                    <input 
                                                        type="email" 
                                                        className="form-control" 
                                                        id="email" 
                                                        placeholder="Enter Email" 
                                                        value={formData.email} 
                                                        onChange={handleChange} 
                                                   
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-check form-switch mt-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        role="switch"
                                                        id="genderSwitch"
                                                        checked={isMale}
                                                        onChange={handleToggle}
                                                    />
                                                    <label className="form-check-label ms-3" htmlFor="genderSwitch">
                                                        {isMale ? 'Male' : 'Female'}
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button 
                                                    type="button" 
                                                    onClick={handleSubmit} 
                                                    className="btn-8 custom-btn m-0 mt-3"
                                                >
                                                    <span>Save Changes</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6 mb-5">
                            <div className="card shadow p-4" style={{ height: '100%' }}>
                                <div className="">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h5 className="mb-0">Recent Transactions
                                            <button 
                                                className="btn border px-4 py-2 rounded-sm btn-sm ms-2 w-auto" 
                                                onClick={openModal}
                                            >
                                                <IoAddOutline /> Add
                                            </button>
                                        </h5>
                                        <div className="btn-group">
                                            <button
                                                className={`btn btn-danger btn-sm ${filter === 'credit' ? 'active' : ''}`}
                                                onClick={() => setFilter('credit')}
                                            >
                                                Credit
                                            </button>
                                            <button
                                                className={`btn btn-light btn-sm ${filter === 'debit' ? 'active' : ''}`}
                                                onClick={() => setFilter('debit')}
                                            >
                                                Debit
                                            </button>
                                        </div>
                                    </div>

                                    {filteredTransactions.map((txn, index) => (
                                        <div key={index} className="d-flex align-items-center border-bottom py-3">
                                            <div className="me-3">
                                                <div
                                                    className={`rounded-circle ${txn.type === 'credit' ? 'bg-success' : 'bg-danger'} bg-opacity-10 d-flex justify-content-center align-items-center`}
                                                    style={{ width: '40px', height: '40px' }}
                                                >
                                                         {txn.type === 'credit' ? (
                                                        <FaArrowDown className="text-danger" />
                                                       
                                                    ) : (
                                                        <FaArrowUp className="text-success" />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="fw-semibold">{txn.title}</div>
                                                <div className="text-muted small">{txn.date} • {txn.time}</div>
                                                <span className="badge bg-warning text-dark mt-1">{txn.status}</span>
                                            </div>
                                            <div className={`fw-semibold ${txn.type === 'credit' ? 'text-success' : 'text-danger'}`}>
                                                {txn.type === 'credit' ? '+' : '-'}₹{txn.amount}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Money Modal */}
            {showModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Money to Wallet</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">Amount</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="amount"
                                            placeholder="₹ Enter Amount"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                        />
                                    </div>

                                    <div className="money_btns mb-3">
                                        <button
                                            type="button"
                                            className="btn directaddmoney me-2"
                                            onClick={() => handleAmountClick(100)}
                                        >
                                            +100
                                        </button>
                                        <button
                                            type="button"
                                            className="btn directaddmoney me-2"
                                            onClick={() => handleAmountClick(500)}
                                        >
                                            +500
                                        </button>
                                        <button
                                            type="button"
                                            className="btn directaddmoney"
                                            onClick={() => handleAmountClick(1000)}
                                        >
                                            +1000
                                        </button>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-primary d-block w-100"
                                        onClick={() => {
                                            // Handle add money logic here
                                            closeModal();
                                        }}
                                    >
                                        Continue
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}