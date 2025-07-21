import React from "react"
import { Link } from "react-router-dom"
import { HiArrowLeft } from "react-icons/hi"
import { FaExclamationTriangle } from "react-icons/fa"

export default function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        padding: "2rem",
      }}
    >
          <FaExclamationTriangle
          size={80} 
          color="#FB8807" 
          style={{ marginBottom: '1rem' }} 
        />
      <h1 style={{ fontSize: "6rem", fontWeight: "700", color: "#FB8807" }}>
        404
      </h1>
      <h2 className="mb-3 fw-semibold" style={{ fontSize: "2rem" }}>
        Page Not Found
      </h2>
      <p className="text-muted mb-4" style={{ maxWidth: "400px" }}>
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn btn-sm d-flex align-items-center gap-2"
        style={{
          backgroundColor: "#FB8807",
          borderColor: "#FB8807",
          color: "white",
          borderRadius: "8px",
          padding: "0.5rem 1rem",
          fontWeight: "500",
          transition: "background-color 0.3s ease",
        }}
      >
        <HiArrowLeft size={18} />
        Back to Home
      </Link>
    </div>
  )
}
