import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    navigate("/account");
  };

  return (
    <div className="font-rubik min-h-screen bg-[#F7F8F9] px-6 py-8">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 font-rubik">
            Create your
            <br />
            PopX account
          </h1>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* <div className='relative'>
            <label className="block text-[#6C25FF] text-sm font-medium mb-1 absolute -top-3 left-2.5">
              Full Name<span className='text-[#DD4A3D]'>*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-[8px]  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
              required
            />
          </div> */}

          <div className="relative">
            <label className="absolute -top-2 left-3 px-1 bg-[#F7F8F9] text-[#6C25FF] text-sm font-medium">
              Full Name<span className="text-[#DD4A3D]">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-[8px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-[#6C25FF] bg-[#F7F8F9] px-1 text-sm font-medium mb-1 absolute -top-3 left-2.5">
              Phone number<span className="text-[#DD4A3D]">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Marry Doe"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-[8px]  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-[#6C25FF] bg-[#F7F8F9] px-1  text-sm font-medium mb-1  absolute -top-3 left-2.5">
              Email address<span className="text-[#DD4A3D]">*</span>
            </label>
            <input
              type="email"
              name="emailAddress"
              placeholder="Marry Doe"
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-[8px]  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-[#6C25FF] bg-[#F7F8F9] px-1  text-sm font-medium mb-1 absolute -top-3 left-2.5">
              Password<span className="text-[#DD4A3D]">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-[8px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-[#6C25FF] bg-[#F7F8F9] px-1  text-sm font-medium mb-1 absolute -top-3 left-2.5">
              Company name
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Marry Doe"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-[8px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Agency Selection */}
          <div className="py-2">
            <p className="text-gray-700 text-sm font-medium mb-3">
              Are you an Agency?<span className="text-[#DD4A3D]">*</span>
            </p>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleInputChange}
                  className="w-4 h-4 accent-[#6C25FF] border-gray-300 "
                />
                <span className="ml-2 text-gray-700 text-sm">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleInputChange}
                  className="w-4 h-4 accent-[#6C25FF] border-gray-300 "
                />
                <span className="ml-2 text-gray-700 text-sm">No</span>
              </label>
            </div>
          </div>

          <div className="pt-8 mt-28">
            <button
              type="submit"
              className="w-full bg-[#6C25FF] text-white  py-3 rounded-[8px] font-semibold text-lg cursor-pointer transition-colors"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
