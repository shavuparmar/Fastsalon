import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here you can send form data to backend if needed
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50 flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-pink-200">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2 text-center">Book Your Salon Seat</h1>
        <p className="text-gray-500 text-center mb-8">Reserve your spot at FastSalon for a premium experience.</p>
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4 text-pink-500">🎉</div>
            <div className="text-xl font-semibold text-pink-600 mb-2">Booking Confirmed!</div>
            <div className="text-gray-600 mb-6">Thank you, {form.name || "Guest"}! We look forward to seeing you.</div>
            <Link to="/" className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition">Back to Home</Link>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Time Slot</label>
                <select
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition"
                  required
                >
                  <option value="">Select Time</option>
                  <option value="11-12">11:00 to 12:00</option>
                  <option value="12-13">12:00 to 13:00</option>
                  <option value="13-14">13:00 to 14:00</option>
                  <option value="14-15">14:00 to 15:00</option>
                  <option value="15-16">15:00 to 16:00</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Service</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition"
                required
              >
                <option value="">Select Service</option>
                <option value="haircut">Haircut</option>
                <option value="coloring">Hair Coloring</option>
                <option value="facial">Facial</option>
                <option value="manicure">Manicure</option>
                <option value="pedicure">Pedicure</option>
                <option value="spa">Spa</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Notes (Optional)</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition"
                placeholder="Any special requests?"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Confirm Booking
            </button>
            <Link to="/" className="text-pink-500 hover:underline text-center mt-2">Back to Home</Link>
          </form>
        )}
      </div>
    </div>
  );
}