"use client"

import { useState, useEffect } from "react"
import { FaStar, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa"
import { HiAdjustments } from "react-icons/hi"

const SalonSearch = () => {
  const [filters, setFilters] = useState({
    gender: "",
    sortBy: "rating",
    sortOrder: "desc",
    rating: 0,
    pricing: [100, 5000],
    amenities: [],
    services: [],
    offers: false,
    category: "",
    location: "",
    latitude: 26.9124,
    longitude: 75.7873,
    maxDistance: 10,
    search: "salon",
  })

  const [salons, setSalons] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [mobileNumber, setMobileNumber] = useState("8003767732") // Default mobile number
  const [locationUpdateStatus, setLocationUpdateStatus] = useState("")

  // Dummy services data by gender
  const serviceData = {
    male: [
      "Beard Trim",
      "Haircut",
      "Facial",
      "Head Massage",
      "Hair Spa",
      "Shaving",
      "Hair Coloring",
      "Body Scrub",
      "Manicure",
      "Pedicure",
    ],
    female: [
      "Hair Spa",
      "Manicure",
      "Pedicure",
      "Facial",
      "Threading",
      "Waxing",
      "Hair Coloring",
      "Makeup",
      "Body Polishing",
      "Henna Application",
    ],
    unisex: [
      "Massage",
      "Hair Color",
      "Body Spa",
      "Detan Treatment",
      "Foot Massage",
      "Body Wrap",
      "Aromatherapy",
      "Scalp Treatment",
      "Rejuvenation Therapy",
      "Steam Bath",
    ],
  }

  useEffect(() => {
    // Automatically get location and update user location when component mounts
    getLocationAndUpdate()
  }, [])

  useEffect(() => {
    if (filters.latitude && filters.longitude) {
      fetchSalons()
    }
  }, [filters.latitude, filters.longitude])

  // Function to update user location via API
  const updateUserLocation = async (latitude, longitude, mobile = mobileNumber) => {
    try {
      setLocationUpdateStatus("Updating location...")

      const response = await fetch("http://localhost:5000/api/user/update-location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobileNumber: mobile,
          latitude: latitude,
          longitude: longitude,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setLocationUpdateStatus("Location updated successfully!")
      console.log("Location update response:", data)

      // Clear status after 3 seconds
      setTimeout(() => {
        setLocationUpdateStatus("")
      }, 3000)

      return data
    } catch (err) {
      setLocationUpdateStatus("Failed to update location")
      console.error("Error updating location:", err)

      // Clear error status after 3 seconds
      setTimeout(() => {
        setLocationUpdateStatus("")
      }, 3000)
    }
  }

  const getLocationAndUpdate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          const locationText = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`

          // Update local state
          setFilters((prev) => ({
            ...prev,
            location: locationText,
            latitude,
            longitude,
          }))

          // Update user location via API
          await updateUserLocation(latitude, longitude)
        },
        (error) => {
          console.error("Geolocation error:", error)
          setFilters((prev) => ({ ...prev, location: "Unable to fetch location" }))
          setLocationUpdateStatus("Unable to get location")

          // Clear error status after 3 seconds
          setTimeout(() => {
            setLocationUpdateStatus("")
          }, 3000)
        },
      )
    } else {
      setFilters((prev) => ({ ...prev, location: "Geolocation not supported" }))
      setLocationUpdateStatus("Geolocation not supported")
    }
  }

  const buildApiUrl = () => {
    const baseUrl = "http://localhost:5000/api/salon/nearby"
    const params = new URLSearchParams()

    // Required parameters
    params.append("latitude", filters.latitude.toString())
    params.append("longitude", filters.longitude.toString())
    params.append("search", filters.search)
    params.append("maxDistance", filters.maxDistance.toString())
    params.append("sortBy", filters.sortBy)
    params.append("sortOrder", filters.sortOrder)

    // Optional parameters
    if (filters.category) params.append("category", filters.category)
    if (filters.gender) params.append("gender", filters.gender)
    if (filters.services.length > 0) {
      params.append("serviceTitle", filters.services[0]) // Use first selected service
      params.append("serviceDescription", filters.services.join(","))
    }
    if (filters.pricing[0] > 100) params.append("minRate", filters.pricing[0].toString())
    if (filters.pricing[1] < 5000) params.append("maxRate", filters.pricing[1].toString())

    return `${baseUrl}?${params.toString()}`
  }

  const fetchSalons = async () => {
    setLoading(true)
    setError(null)

    try {
      const url = buildApiUrl()
      console.log("Fetching from:", url)

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setSalons(data.salons || data || [])
    } catch (err) {
      setError(err.message)
      console.error("Error fetching salons:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (name === "amenities" || name === "services") {
      setFilters((prev) => ({
        ...prev,
        [name]: checked ? [...prev[name], value] : prev[name].filter((item) => item !== value),
      }))
    } else if (type === "checkbox") {
      setFilters((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleStarRating = (value) => {
    setFilters((prev) => ({ ...prev, rating: value }))
  }

  const handleApplyFilters = () => {
    fetchSalons()
  }

  const handleRefreshLocation = () => {
    getLocationAndUpdate()
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} size={14} color={index < rating ? "#f59e0b" : "#e5e7eb"} />
    ))
  }

  return (
    <div className="d-flex" style={{ paddingTop: "6rem" }}>
      <aside className="border-end bg-light p-4" style={{ width: "300px", minHeight: "100vh" }}>
        <h4 className="mb-4" style={{ color: "rgb(251, 136, 7)" }}>
          Filters
        </h4>

        {/* Mobile Number Input */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter mobile number"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Gender</label>
          <select
            name="gender"
            value={filters.gender}
            onChange={(e) => {
              handleChange(e)
              setFilters((prev) => ({ ...prev, services: [] }))
            }}
            className="form-select"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unisex">Unisex</option>
          </select>

          {/* Services as checkboxes */}
          {filters.gender && (
            <div className="mt-3">
              <h6 className="fw-semibold">
                Services for {filters.gender.charAt(0).toUpperCase() + filters.gender.slice(1)}:
              </h6>
              {serviceData[filters.gender]?.map((service, idx) => (
                <div className="form-check" key={idx}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="services"
                    value={service}
                    onChange={handleChange}
                    checked={filters.services.includes(service)}
                  />
                  <label className="form-check-label">{service}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sort By */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Sort By</label>
          <select name="sortBy" value={filters.sortBy} onChange={handleChange} className="form-select">
            <option value="rating">Rating</option>
            <option value="price">Price</option>
            <option value="distance">Distance</option>
          </select>
          <select name="sortOrder" value={filters.sortOrder} onChange={handleChange} className="form-select mt-2">
            <option value="desc">High to Low</option>
            <option value="asc">Low to High</option>
          </select>
        </div>

        {/* Star Rating */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Rating</label>
          <div className="d-flex align-items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={20}
                style={{ cursor: "pointer" }}
                color={filters.rating >= star ? "#f59e0b" : "#e5e7eb"}
                onClick={() => handleStarRating(star)}
              />
            ))}
          </div>
          <small className="text-muted">Selected: {filters.rating}★ & up</small>
        </div>

        {/* Pricing Range */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Pricing Range (₹)</label>
          <div className="d-flex gap-2 align-items-center">
            <input
              type="number"
              min="100"
              max={filters.pricing[1]}
              value={filters.pricing[0]}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  pricing: [Number(e.target.value), prev.pricing[1]],
                }))
              }
              className="form-control"
              style={{ width: "45%" }}
              placeholder="Min"
            />
            <span>–</span>
            <input
              type="number"
              min={filters.pricing[0]}
              max="5000"
              value={filters.pricing[1]}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  pricing: [prev.pricing[0], Number(e.target.value)],
                }))
              }
              className="form-control"
              style={{ width: "45%" }}
              placeholder="Max"
            />
          </div>
          <small className="text-muted">
            ₹{filters.pricing[0]} – ₹{filters.pricing[1]}
          </small>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Amenities</label>
          {[
            "ac",
            "parking",
            "hygiene",
            "Sanitized Tools and Equipment",
            "CCTV for Security",
            "Comfortable Seating Area",
            "Wi-Fi Access",
            "Kids Play Area",
            "Private Treatment Rooms",
          ].map((amenity) => (
            <div key={amenity} className="form-check">
              <input
                type="checkbox"
                name="amenities"
                value={amenity}
                onChange={handleChange}
                checked={filters.amenities.includes(amenity)}
                className="form-check-input"
              />
              <label className="form-check-label text-capitalize">{amenity}</label>
            </div>
          ))}
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Category</label>
          <select name="category" value={filters.category} onChange={handleChange} className="form-select">
            <option value="">Select</option>
            <option value="premium">Premium</option>
            <option value="general">General</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Location</label>
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              name="location"
              value={filters.location}
              onChange={handleChange}
              placeholder="Enter location"
            />
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={handleRefreshLocation}
              title="Refresh Location"
            >
              📍
            </button>
          </div>
          {locationUpdateStatus && (
            <small
              className={`d-block mt-1 ${locationUpdateStatus.includes("success") ? "text-success" : locationUpdateStatus.includes("Failed") || locationUpdateStatus.includes("Unable") ? "text-danger" : "text-info"}`}
            >
              {locationUpdateStatus}
            </small>
          )}
        </div>

        {/* Apply Filters Button */}
        <button
          className="btn btn-sm d-flex align-items-center gap-2"
          style={{
            backgroundColor: "#FB8807",
            borderColor: "#FB8807",
            color: "white",
            borderRadius: "8px",
            padding: "0.4rem 0.8rem",
            fontWeight: "500",
            width: "100%",
          }}
          onClick={handleApplyFilters}
          disabled={loading}
        >
          <HiAdjustments size={18} />
          {loading ? "Loading..." : "Apply Filters"}
        </button>
      </aside>

      <main className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Salon Listings</h2>
          <div className="d-flex align-items-center gap-3">
            <span className="text-muted">
              {salons.length} salon{salons.length !== 1 ? "s" : ""} found
            </span>
            {locationUpdateStatus && (
              <span
                className={`badge ${locationUpdateStatus.includes("success") ? "bg-success" : locationUpdateStatus.includes("Failed") ? "bg-danger" : "bg-info"}`}
              >
                {locationUpdateStatus}
              </span>
            )}
          </div>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            <strong>Error:</strong> {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2 text-muted">Searching for salons...</p>
          </div>
        ) : salons.length === 0 && !error ? (
          <div className="text-center py-5">
            <p className="text-muted">No salons found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="row">
            {salons.map((salon, index) => (
              <div key={salon.id || index} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{salon.name || "Salon Name"}</h5>

                    <div className="d-flex align-items-center mb-2">
                      <div className="d-flex me-2">{renderStars(salon.rating || 4)}</div>
                      <span className="text-muted small">
                        ({salon.rating || 4}.0) • {salon.reviewCount || 0} reviews
                      </span>
                    </div>

                    <div className="d-flex align-items-center mb-2 text-muted small">
                      <FaMapMarkerAlt className="me-1" />
                      <span className="text-truncate">
                        {salon.address || salon.location || "Address not available"}
                      </span>
                    </div>

                    {salon.phone && (
                      <div className="d-flex align-items-center mb-2 text-muted small">
                        <FaPhone className="me-1" />
                        <span>{salon.phone}</span>
                      </div>
                    )}

                    {salon.openingHours && (
                      <div className="d-flex align-items-center mb-2 text-muted small">
                        <FaClock className="me-1" />
                        <span>{salon.openingHours}</span>
                      </div>
                    )}

                    <div className="mb-2">
                      <span className="badge bg-secondary me-1">{salon.category || "General"}</span>
                      {salon.gender && <span className="badge bg-info">{salon.gender}</span>}
                    </div>

                    {salon.services && salon.services.length > 0 && (
                      <div className="mb-2">
                        <small className="text-muted">Services:</small>
                        <div className="mt-1">
                          {salon.services.slice(0, 3).map((service, idx) => (
                            <span key={idx} className="badge bg-light text-dark me-1 mb-1">
                              {service.name || service}
                            </span>
                          ))}
                          {salon.services.length > 3 && (
                            <span className="badge bg-light text-dark">+{salon.services.length - 3} more</span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="fw-bold text-success">
                          ₹{salon.minPrice || salon.price || 200} - ₹{salon.maxPrice || salon.price + 500 || 1000}
                        </span>
                      </div>
                      <button
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#FB8807",
                          borderColor: "#FB8807",
                          color: "white",
                        }}
                      >
                        Book Now
                      </button>
                    </div>

                    {salon.distance && <small className="text-muted">{salon.distance.toFixed(1)} km away</small>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default SalonSearch
