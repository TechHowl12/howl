import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    companyName: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContactNumber = (contactNumber) => {
    const contactRegex = /^[0-9]{10}$/; // Adjust for your specific country format
    return contactRegex.test(contactNumber);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear specific field error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required.";
    if (!formData.lastName) formErrors.lastName = "Last name is required.";
    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Invalid email address.";
    }
    if (!formData.contactNumber) {
      formErrors.contactNumber = "Contact number is required.";
    } else if (!validateContactNumber(formData.contactNumber)) {
      formErrors.contactNumber = "Invalid contact number (must be 10 digits).";
    }
    if (!formData.companyName)
      formErrors.companyName = "Company name is required.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      setStatus("Please fix the errors and try again.");
      return;
    }

    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwOPsIkbpsKeYFwgnV5Yq3rAKUWQu-GW6L1Lwg728vTfCoQKZmcMEl16d79_H85sF9lRQ/exec",
        requestOptions
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        companyName: "",
      });
      setStatus("Data has been submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred while submitting the data.");
    }
  };

  return (
    <div id="form" className="bg-[#FCF5FF]">
      <div className="w-[85%] sm:w-10/12 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="pt-6 pb-20 sm:pb-10 rounded-tl-xl rounded-br-xl text-[#3D155D]"
        >
          <div className="flex flex-col gap-x-6 sm:flex-row sm:justify-between sm:mt-20">
            <div className="sm:w-1/2">
              <button
                type="button"
                className="bold text-[4vw] sm:text-[2vw] uppercase border-b-2 border-black pb-1 text-[#3D155D]"
              >
                work with us
              </button>
              <h1 className="text-[8vw] sm:text-[3vw] bold uppercase sm:mt-[6%] tracking-tight leading-snug my-6 sm:my-0">
                Build a solution for your business
              </h1>
              <p className="text-[#00031A] mt-0 sm:mt-4 hidden sm:block reg mb-4 sm:mb-0">
                Drive revenue and focus budgets to break past <br /> benchmarks.
                We're just a HOWL away.
              </p>
            </div>
            <div className="sm:w-1/2 flex flex-col gap-y-5 mt-7 sm:mt-0">
              <div className="flex justify-between gap-x-3">
                <div className="w-full">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-3 rounded-md reg w-full py-3"
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 light">{errors.firstName}</p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-3 rounded-md reg w-full py-3"
                    placeholder="Last Name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 light">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-2 rounded-md reg w-full py-3"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 light">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-2 rounded-md reg w-full py-3"
                  placeholder="Contact Number"
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 light">
                    {errors.contactNumber}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-2 rounded-md reg w-full py-3"
                  placeholder="Company Name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 light">{errors.companyName}</p>
                )}
              </div>
              <p className="reg text-sm text-[#AEAAB2]">
                *All the fields are required
              </p>
              <button
                type="submit"
                className="border-2 light text-[#3D155D] w-1/2 ml-auto py-4 rounded-tl-xl rounded-br-xl border-[#3D155D] hover:bg-[#3D155D] hover:text-white transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
          {status && <p className="text-center mt-4 reg">{status}</p>}
        </form>
      </div>
    </div>
  );
};
