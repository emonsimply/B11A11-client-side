import { useState } from "react";
import { toast } from "react-toastify";


const AddPackage = () => {
  const [formData, setFormData] = useState({
    tourName: "",
    image: "",
    duration: "",
    departureLocation: "",
    destination: "",
    price: "",
    departureDate: "",
    packageDetails: "",
    contactNo: "",
    guideName: "John Doe",   // Example: from Firebase
    guidePhoto: "https://i.ibb.co/ZVh01dm/guide.png",
    guideEmail: "guide@example.com"
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // 🚀 Later: send formData to MongoDB (tourPackages collection)
    console.log("Form Data Submitted:", formData);

    // Toast Notification
    toast.success("Tour Package Added Successfully!");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-3xl bg-gray-100 shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-teal-500 mb-6">
          Add New Tour Package
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tour Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Tour Name</label>
            <input
              type="text"
              name="tourName"
              value={formData.tourName}
              onChange={handleChange}
              placeholder="Enter Tour Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 3 Days 2 Nights"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Departure Location */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Departure Location</label>
            <input
              type="text"
              name="departureLocation"
              value={formData.departureLocation}
              onChange={handleChange}
              placeholder="Enter Departure Location"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter Destination"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Price"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Departure Date */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Departure Date</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Contact No */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Contact No</label>
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              placeholder="Enter Contact Number"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Package Details (Full Width) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1 text-gray-700">Package Details</label>
            <textarea
              name="packageDetails"
              value={formData.packageDetails}
              onChange={handleChange}
              placeholder="Write package details here..."
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Guide Info (Firebase) */}
          <div className="md:col-span-2 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg flex items-center gap-4">
            <img
              src={formData.guidePhoto}
              alt="Guide"
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <p className="font-medium text-gray-800 dark:text-white">
                {formData.guideName}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {formData.guideEmail}
              </p>
            </div>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full btn btn-lg bg-teal-500 text-white rounded-full hover:bg-teal-600 transition"
            >
              Add Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
