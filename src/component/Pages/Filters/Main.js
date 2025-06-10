// pages/FilterSidebarPage.js
import React, { useState, useEffect } from "react";

const Main = () => {
  const [filters, setFilters] = useState({
    gender: "",
    sortBy: "",
    rating: 0,
    pricing: [100, 5000],
    amenities: [],
    offers: false,
    category: "",
    location: "Fetching current location...",
  });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
          );
          const data = await response.json();
          const address = data?.results?.[0]?.formatted_address || "Location found";
          setFilters((prev) => ({ ...prev, location: address }));
        },
        () => {
          setFilters((prev) => ({ ...prev, location: "Unable to get location" }));
        }
      );
    } else {
      setFilters((prev) => ({ ...prev, location: "Geolocation not supported" }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "amenities") {
      setFilters((prev) => ({
        ...prev,
        amenities: checked
          ? [...prev.amenities, value]
          : prev.amenities.filter((item) => item !== value),
      }));
    } else if (type === "checkbox") {
      setFilters((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split(",");
    setFilters((prev) => ({ ...prev, pricing: [Number(min), Number(max)] }));
  };

  return (
    <div className="d-flex">
      <aside
        className="border-end bg-light p-4"
        style={{ width: "280px", minHeight: "100vh" }}
      >
        <h4 className="mb-4">Filters</h4>

        {/* Gender */}
        <div className="mb-3">
          <label className="fw-bold">Gender</label>
          <select
            name="gender"
            value={filters.gender}
            onChange={handleChange}
            className="form-select mt-1"
          >
            <option value="">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="mb-3">
          <label className="fw-bold">Sort By</label>
          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleChange}
            className="form-select mt-1"
          >
            <option value="">Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* Rating */}
        <div className="mb-3">
          <label className="fw-bold">Rating</label>
          <input
            type="range"
            name="rating"
            min="0"
            max="5"
            value={filters.rating}
            onChange={handleChange}
            className="form-range"
          />
          <div>Rating: {filters.rating}+</div>
        </div>

        {/* Pricing */}
        <div className="mb-3">
          <label className="fw-bold">Pricing</label>
          <input
            type="range"
            name="pricing"
            min="100"
            max="5000"
            step="100"
            value={filters.pricing.join(",")}
            onChange={handlePriceChange}
            className="form-range"
          />
          <div>
            ₹{filters.pricing[0]} - ₹{filters.pricing[1]}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-3">
          <label className="fw-bold">Amenities</label>
          <div className="form-check">
            <input
              type="checkbox"
              name="amenities"
              value="ac"
              onChange={handleChange}
              checked={filters.amenities.includes("ac")}
              className="form-check-input"
            />
            <label className="form-check-label">AC</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="amenities"
              value="parking"
              onChange={handleChange}
              checked={filters.amenities.includes("parking")}
              className="form-check-input"
            />
            <label className="form-check-label">Parking</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="amenities"
              value="hygiene"
              onChange={handleChange}
              checked={filters.amenities.includes("hygiene")}
              className="form-check-input"
            />
            <label className="form-check-label">Hygiene</label>
          </div>
        </div>

        {/* Offers & Discounts */}
        <div className="mb-3">
          <label className="fw-bold">Offers & Discounts</label>
          <div className="form-check">
            <input
              type="checkbox"
              name="offers"
              checked={filters.offers}
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label">Show Only with Offers</label>
          </div>
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="fw-bold">Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="form-select mt-1"
          >
            <option value="">Any</option>
            <option value="premium">Premium</option>
            <option value="general">General</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-3">
          <label className="fw-bold">Location</label>
          <div className="border p-2 bg-white">{filters.location}</div>
        </div>

        <button className="btn btn-primary w-100">Apply Filters</button>
      </aside>

      <main className="flex-grow-1 p-4">
        <h2>Salon Listings</h2>
        <p>Filters will be applied here...</p>
      </main>
    </div>
  );
};

export default Main;
