import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import '../style/style.css';
import './profile.css'
import { FaArrowDown } from 'react-icons/fa';
import { IoAddOutline } from "react-icons/io5";

export default function Profile() {

    useEffect(() => {
        new WOW().init();
    }, []);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        if (domRef.current) observer.observe(domRef.current);

        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, []);
    const [isMale, setIsMale] = useState(false); // false = Female, true = Male

    const handleToggle = () => {
        setIsMale(!isMale);
    };
    const [filter, setFilter] = useState('all'); // 'all' | 'credit' | 'debit'

    const transactions = [
        { type: 'credit', title: 'Wallet Top-up', date: '4/22/2025', time: '10:31 AM', status: 'Approved', amount: 1200 },
        { type: 'credit', title: 'Wallet Top-up', date: '4/22/2025', time: '10:31 AM', status: 'Approved', amount: 1200 },
        { type: 'debit', title: 'Wallet Top-up', date: '4/22/2025', time: '10:19 AM', status: 'Approved', amount: 10 },
    ];

    // Filtered data based on selection
    const filteredTransactions = transactions.filter(txn =>
        filter === 'all' ? true : txn.type === filter
    );
    const [showModal, setShowModal] = useState(false);
    const [amount, setAmount] = useState('');

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleAmountClick = (value) => {
        setAmount(prev => (parseInt(prev || 0) + value).toString());
    };
    return (
        <>
            <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
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
                                    {/* Profile Details */}
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
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <div class="mb-3">
                                                    <label for="name" class="form-label">Full Name</label>
                                                    <input type="text" class="form-control" id="name" placeholder="Enter Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div class="mb-3">
                                                    <label for="number" class="form-label">Mobile</label>
                                                    <input type="number" class="form-control" id="number" placeholder="Enter Number" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div class="mb-3">
                                                    <label for="email" class="form-label">Email Address</label>
                                                    <input type="email" class="form-control" id="email" placeholder="Enter Email" />
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
                                            <div className="col-md-12 ">
                                                <button className="btn-8 custom-btn m-0 mt-3"><span>Save Changes</span></button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5" >
                            <div className="card shadow p-4" style={{ height: '100%' }}>
                                <div className="">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h5 className="mb-0">Recent Transactions
                                        <button className="btn border px-4 py-2 rounded-sm btn-sm ms-2 w-auto" onClick={openModal}><IoAddOutline /> Add</button>
                                        
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
                                                    className="rounded-circle bg-success bg-opacity-10 d-flex justify-content-center align-items-center"
                                                    style={{ width: '40px', height: '40px' }}
                                                >
                                                    <FaArrowDown className="text-success" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="fw-semibold">{txn.title}</div>
                                                <div className="text-muted small">{txn.date} • {txn.time}</div>
                                                <span className="badge bg-warning text-dark mt-1">{txn.status}</span>
                                            </div>
                                            <div className="text-success fw-semibold">
                                                ₹{txn.amount}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {showModal && (
                <div className="cdk-overlay-container fade show">
                    <div
                        className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"
                        onClick={closeModal}
                    ></div>
                    <div
                        className="d-flex cdk-global-overlay-wrapper mbk-cdk-global-overlay-wrapper"
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            zIndex: 1050,
                        }}
                    >
                        <div
                            className="cdk-overlay-pane"
                            style={{ maxWidth: '80vw', position: 'static' }}
                        >
                            <div className="mat-dialog-container">
                                <section
                                    className="modalBody add-mon-container"
                                    style={{
                                        width: '400px',
                                        borderRadius: '20px',
                                        padding: '0px',
                                        background: '#fff',
                                    }}
                                >
                                    {/* Modal Header */}
                                    <div className="form-header p-3 border-bottom d-flex justify-content-between align-items-center">
                                        <p className="add-mon-header m-0">Add Money to Wallet</p>
                                        <button className="cls btn" onClick={closeModal}>
                                            ✕
                                        </button>
                                    </div>

                                    {/* Modal Form */}
                                    <div className="form-body p-4">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="amount" className="form-label">
                                                    Amount
                                                </label>
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
                                                    100+
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn directaddmoney me-2"
                                                    onClick={() => handleAmountClick(500)}
                                                >
                                                    500+
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn directaddmoney"
                                                    onClick={() => handleAmountClick(1000)}
                                                >
                                                    1000+
                                                </button>
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary d-block w-100"
                                            >
                                                Continue
                                            </button>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
