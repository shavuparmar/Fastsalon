import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your images from assets
import barberBg from "../assets/background.png";
import appointmentImg from "../assets/about.png";
import hairdresserImg from "../assets/men.png";

export default function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);


    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
        // Add search logic here (e.g., navigate or filter content)
    };

    return (
        <div className="min-h-screen bg-black flex flex-col">
            {/* Header */}
            <header className="w-full bg-black text-white shadow-lg fixed top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Site Name */}
                    <div className="text-2xl font-bold tracking-wide">FastSalon</div>

                    {/* Desktop Nav & Search */}
                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex space-x-6 font-medium">
                            <a href="#services" className="hover:text-pink-400 transition">Service</a>
                            <a href="#about" className="hover:text-pink-400 transition">About</a>
                            <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
                            <Link to="/booking" className="hover:text-pink-400 transition">Book</Link>
                        </nav>
                        {/* Desktop Search Bar */}
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="px-3 py-1 rounded-md text-white bg-transparent border border-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </form>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Nav & Search */}
                {menuOpen && (
                    <div className="md:hidden bg-black px-4 pb-4 pt-2 flex flex-col space-y-3 font-medium animate-fade-in-down">
                        <a href="#services" className="hover:text-pink-400 transition" onClick={() => setMenuOpen(false)}>Service</a>
                        <a href="#about" className="hover:text-pink-400 transition" onClick={() => setMenuOpen(false)}>About</a>
                        <a href="#contact" className="hover:text-pink-400 transition" onClick={() => setMenuOpen(false)}>Contact</a>
                        <Link to="/booking" className="hover:text-pink-400 transition" onClick={() => setMenuOpen(false)}>Book</Link>

                        {/* Mobile Search */}
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-3 py-2 rounded-md text-white bg-transparent border border-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </form>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section
                className="pt-28 w-full flex items-center justify-center text-center px-4 py-12"
                style={{
                    backgroundImage: `url(${barberBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "65vh",
                }}
            >
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl text-white md:text-5xl font-bold mb-4">Welcome to FastSalon</h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
                        Premium salon experience with trendy haircuts, beard trims, shaves, and facial care. Book your seat today!
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="bg-[#e7dbd7] py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-center text-lg md:text-xl text-gray-700 mb-2">Trendy Salon & Spa</h3>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center" data-aos="fade-up">
                            <span className="text-4xl mb-2">✂️</span>
                            <h4 className="font-semibold text-lg mb-1">Haircut Styles</h4>
                            <p className="text-gray-500 text-sm text-center">Modern & classic styles for every occasion.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                            <span className="text-4xl mb-2">🧔</span>
                            <h4 className="font-semibold text-lg mb-1">Beard Trimming</h4>
                            <p className="text-gray-500 text-sm text-center">Refine your appearance with expert beard care.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                            <span className="text-4xl mb-2">🪒</span>
                            <h4 className="font-semibold text-lg mb-1">Smooth Shave</h4>
                            <p className="text-gray-500 text-sm text-center">Experience a premium, close shave every time.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                            <span className="text-4xl mb-2">💆‍♂️</span>
                            <h4 className="font-semibold text-lg mb-1">Face Masking</h4>
                            <p className="text-gray-500 text-sm text-center">Relax and rejuvenate with our facial treatments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Appointment Section */}
            <section className="bg-[#e7dbd7] py-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="mb-8 md:mb-0" data-aos="fade-right">
                        <img
                            src={appointmentImg}
                            alt="Appointment"
                            className="rounded-xl shadow w-full max-h-[400px] object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div data-aos="fade-left">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Make an appointment</h3>
                        <p className="text-gray-600 mb-4 text-sm md:text-base">Book a premium stylist for your next haircut or beauty session.</p>
                        <Link to="/booking" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition">Book Now</Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-[#e7dbd7] py-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div data-aos="fade-right">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Do you like our hairdresser?</h3>
                        <p className="text-gray-700 mb-4 text-sm md:text-base">
                            FastSalon was founded in 1996 with the mission of providing hair care services. From grandpa’s night out to wild haircut aquiet. Amena sollicitudin, lorem quis bibendum auctor.
                        </p>
                        <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transition">Read More</button>
                    </div>
                    <div className="flex justify-center md:justify-end" data-aos="fade-left">
                        <img
                            src={hairdresserImg}
                            alt="Hairdresser"
                            className="rounded-xl w-full max-w-sm md:max-w-md object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-8 mt-auto">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 text-sm">
                    <div>
                        <div className="font-bold mb-2">Popular Service</div>
                        <ul className="space-y-1">
                            <li>Email Us</li>
                            <li>Help Center</li>
                            <li>Booking Status</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold mb-2">Contact Info</div>
                        <ul className="space-y-1">
                            <li>+91 9912233344</li>
                            <li>Omsalon@gmail.com</li>
                            <li>Ankleshwar Main road near Railway Station</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold mb-2">Working hours</div>
                        <ul className="space-y-1">
                            <li>Mon – Thurs: 10:00 AM – 8:00 PM</li>
                            <li>Thurs – Fri: 10:00 AM – 7:00 PM</li>
                            <li>Saturday: 11:00 – 5:30 PM</li>
                            <li>Sunday: CLOSED</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
