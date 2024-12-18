import { Search } from "lucide-react";
import React from "react";

const SearchForm = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-gradient-to-r from-white via-pink-50 to-purple-50 rounded-lg shadow-lg">
      {/* Search Input */}
      <div className="flex flex-col gap-3">
        <label
          htmlFor="search"
          className="text-sm font-semibold text-gray-700"
        >
          Search
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search for locations"
          className="py-2 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none shadow-sm"
        />
      </div>

      {/* Destination Dropdown */}
      <div className="flex flex-col gap-3">
        <label
          htmlFor="destination"
          className="text-sm font-semibold text-gray-700"
        >
          Destination
        </label>
        <select
          id="destination"
          className="py-2 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none shadow-sm"
        >
          <option value="dubai">Dubai</option>
          <option value="america">America</option>
          <option value="india">India</option>
        </select>
      </div>

      {/* Duration Dropdown */}
      <div className="flex flex-col gap-3">
        <label
          htmlFor="duration"
          className="text-sm font-semibold text-gray-700"
        >
          Duration
        </label>
        <select
          id="duration"
          className="py-2 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none shadow-sm"
        >
          <option value="1 Day">1 Day</option>
          <option value="2 Days">2 Days</option>
          <option value="2-4 Days">2-4 Days</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2 col-span-full md:col-span-1"
      >
        <Search size={20} />
        <span className="font-semibold">Search</span>
      </button>
    </form>
  );
};

export default SearchForm;


