import React from 'react';

export default function ReviewSection() {
    const reviews = [
        {
            name: "Manish Gehlot",
            title: "Best digital solution for salons in Jaipur!",
            stars: 4.5,
            description: "Sustylo has made our salon operations smooth and more professional. From online booking to payment tracking - everything is managed in one place. Our walk-in is reduced, and appointments are now more organized. Salon is highly recommended for owners to modernize.",
            image: "./images/gallery/R3.jpg",
            address: "Jhotwara, Jaipur"
        },
        {
            name: "Nitish Kapoor",
            title: "Excellent platform for growing a customer base",
            stars: 5,
            description: " We saw a 30% increase in appointments within the first month of using Sustylo. Marketing equipment and customer reminders actually work. In addition, their Jaipur-based support team is very helpful and responsible.",
            image: "./images/gallery/R2.jpg",
            address: "Mansarover, Jaipur"
        },
        {
            name: "Rahul Kumar",
            title: "Great for management of employees and services",
            stars: 5,
            description: " Sustylo helped us to streamlute their service menu, assign employees and track daily performance. The dashboard requires some UI reforms, but the core features are solid and save a lot of manual work.",
            image: "./images/gallery/R4.jpg",
            address: "Vidhyadhar Nagar, Jaipur"
        },
        {
            name: "Vikash Singh",
            title: "Sustylo  made our salon digital",
            stars: 4.5,
            description: " As the owner of a small salon, I always thought that digital going would be expensive. But Sustylo changed it. It is inexpensive, easy to use, and everything - booking, payment, reviews and even the customer helps manage the records.",
            image: "./images/gallery/R1.jpg",
            address: "Malviya Nagar, Jaipur"
        }
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        return (
            <>
                {Array.from({ length: fullStars }, (_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                ))}
                {halfStar && <i className="bi bi-star-half text-warning"></i>}
            </>
        );
    };

    return (
        <div className="review_section " style={{ backgroundColor: '#f8f9fa' }}>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="gallery_heading text-center mx-auto">
                            <h2 className='fw-bold'>Customer Feedback</h2>
                            <p className='text-muted'>Real Experiences, Real Results</p>
                        </div>
                        <div
                            className="de-separator my-3"
                            style={{
                                height: "2px",
                                backgroundColor: "#ddd",
                                width: "30%",
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="col-md-6 col-lg-3">
                            <div className="bg-body-secondary border rounded shadow-md h-100 px-4 py-5 d-flex flex-column justify-content-between">
                                <div className="text-left mb-2">
                                    {renderStars(review.stars)}
                                </div>
                                <h5 className="fw-bold text-left">{review.title}</h5>
                                <p className="text-left text-muted small mb-4">{review.description}</p>
                                <div className="d-flex align-items-center  pt-3 mt-auto">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="rounded-circle me-3 border"
                                        width="50"
                                        height="50"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div>
                                        <strong>{review.name}</strong><br />
                                        <small className="text-muted">{review.address}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
