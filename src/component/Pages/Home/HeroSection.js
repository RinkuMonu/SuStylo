import React, { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import axiosInstance from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: ""
  });
  const [searchInput, setSearchInput] = useState({
    service: "",
    address: "Fetching address..."
  });
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          const addr = await getAddressFromCoords(latitude, longitude);
          setSearchInput(prev => ({ ...prev, address: addr }));
        },
        (error) => {
          console.error("Error getting location:", error);
          setSearchInput(prev => ({ ...prev, address: "Allow location access for better results" }));
        }
      );
    } else {
      setSearchInput(prev => ({ ...prev, address: "Geolocation not supported" }));
    }
  };

  const getAddressFromCoords = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCklkVV3ho7yawqRP-imgtd1OtfbrH_akU`
      );
      const data = await response.json();

      if (data.status === "OK" && data.results.length > 0) {
        return data.results[0].formatted_address;
      }
      return "Address not found";
    } catch (error) {
      console.error("Error fetching address:", error);
      return "Error fetching address";
    }
  };

  const getCoordsFromAddress = async (address) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCklkVV3ho7yawqRP-imgtd1OtfbrH_akU`
      );
      const data = await response.json();
      if (data.status === "OK" && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        return { latitude: lat, longitude: lng };
      }
      return null;
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);

    try {
      const params = {
        service: searchInput.service
      };

      // Use current location if available
      if (location.latitude && location.longitude) {
        params.latitude = location.latitude;
        params.longitude = location.longitude;
      }
      // Otherwise get coordinates from address
      else if (searchInput.address) {
        const coords = await getCoordsFromAddress(searchInput.address);
        if (coords) {
          params.latitude = coords?.latitude;
          params.longitude = coords.longitude;
        } else {
          alert("Unable to find coordinates for the entered address.");
          return;
        }
      }

      const response = await axiosInstance.get("/salon/nearby", { params });

      navigate("/search-results", {
        state: {
          salons: response.data.salons,
          searchQuery: searchInput.service,
          location: searchInput.address
        }
      });

    } catch (error) {
      console.error("Search error:", error);
      alert("Error searching for salons. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <section className="hero-section d-flex align-items-center hero-banner overflow-hidden">
      <div className="hero-overlay"></div>
      <div className="container position-relative pt-5">
        <div className="row">
          <div className="col-md-8">
            <h1 className="hero-title text-start">
              List Your Salon & Start Receiving Online Appointments
            </h1>
            <p className="text-white fw-bold mt-3 text-start">
              At SuStylo, we are dedicated to the timeless art of barbering.
              Our passion drives us to deliver precision, style, and an
              unmatched grooming experience.
            </p>

            <form onSubmit={handleSearch}>
              <div className="search_input">
                <div className="d-flex flex-column flex-md-row align-items-stretch align-items-md-center justify-content-between bg-white p-2 shadow rounded-1">
                  {/* Service Name Input */}
                  <div className="flex-column flex-grow-1 me-md-3 mb-3 mb-md-0 text-start">
                    <label className="fw-bold text-orange mb-1 ps-1 ps-md-3">
                      Service Name
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="service"
                        value={searchInput.service}
                        onChange={handleInputChange}
                        className="form-control border-0 border-bottom rounded-0"
                        placeholder="Book your services..."
                        required
                      />
                      <span className="input-group-text bg-white border-0">
                        <FaSearch />
                      </span>
                    </div>
                  </div>

                  {/* Address Input */}
                  <div className="flex-column flex-grow-1 me-md-3 mb-3 mb-md-0 text-start">
                    <label className="fw-bold text-orange mb-1 ps-1 ps-md-3">
                      Address
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="address"
                        value={searchInput.address}
                        onChange={handleInputChange}
                        className="form-control border-0 border-bottom rounded-0"
                        placeholder="Where"
                        required 
                      />
                      <span className="input-group-text bg-white border-0">
                        <FaMapMarkerAlt />
                      </span>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="d-flex align-items-end">
                    <button
                      type="submit"
                      className="btn btn-warning rounded-2 px-3 px-md-4 py-2 d-flex align-items-center justify-content-center w-100"
                      disabled={isSearching}
                    >
                      {isSearching ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Searching...
                        </>
                      ) : (
                        <>
                          <span className="me-1 me-md-2 fw-bold">Search</span>
                          <FaSearch />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}  