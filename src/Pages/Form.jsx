// import React, { useState } from "react";

// export const Form = () => {

//   return (
//     <div id="form" className="bg-[#FCF5FF]">
//       <div className="w-[85%] sm:w-10/12 mx-auto">
//         <form className="pt-6 pb-20 sm:pb-10 rounded-tl-xl rounded-br-xl text-[#3D155D]">

//           {/* Dynamic main heading */}
//           <div className="flex flex-col gap-x-6 sm:flex-row sm:justify-between sm:mt-20">
//             <div className="sm:w-1/2">
//             <button
//               type="button"
//               className='bold text-[4vw] sm:text-[2vw] uppercase border-b-2 border-black pb-1 text-[#3D155D]'
//             >
//               work with us
//             </button>
//             <h1 className="text-[8vw] sm:text-[3vw] bold uppercase sm:mt-[6%] tracking-tight leading-snug my-6 sm:my-0">
// Build a solution for your business
// </h1>
// <p className="text-[#00031A] mt-0 sm:mt-4 hidden sm:block reg mb-4 sm:mb-0">
// Drive revenue and focus budgets to break past <br /> benchmarks. We're just a HOWL away.
// </p>

// <p 
//   className="text-[#00031A] mt-0 sm:mt-4 reg mb-4 sm:mb-0 block sm:hidden">
//   Drive revenue and focus budgets to break past benchmarks. We're just a HOWL away.
// </p>

//             </div>
//             <div className="sm:w-1/2 flex flex-col gap-y-5 mt-7 sm:mt-0">
//               <div className="flex justify-between gap-x-3">
//                 <input
//                   type="text"
//                   className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-3 rounded-md reg w-full py-3"
//                   placeholder="First Name"
//                 />
//                 <input
//                   type="text"
//                   className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-3 rounded-md reg w-full py-3"
//                   placeholder="Last Name"
//                 />
//               </div>
//               <input
//                 type="text"
//                 className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-2 rounded-md reg w-full py-3"
//                 placeholder="Email"
//               />
//               <input
//                 type="text"
//                 className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-2 rounded-md reg w-full py-3"
//                 placeholder="Contact Number"
//               />
//               <input
//                 type="text"
//                 className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-2 rounded-md reg w-full py-3"
//                 placeholder="Company Name"
//               />
//               <p className="reg text-sm text-[#AEAAB2]">
//                 *All the fields are required
//               </p>
//               <button className="border-2 light text-[#3D155D] w-1/2 ml-auto py-4 rounded-tl-xl rounded-br-xl border-[#3D155D] hover:bg-[#3D155D] hover:text-white transition-colors">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };


// added code with form submiision

// email js integration code 


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.contactNumber ||
      !formData.companyName
    ) {
      setStatus("Please fill out all fields.");
      return;
    }

    // Simulate successful form submission
    setStatus("Data has been submitted successfully!");

    // Optionally clear the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      companyName: "",
    });
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

              <p className="text-[#00031A] mt-0 sm:mt-4 reg mb-4 sm:mb-0 block sm:hidden">
                Drive revenue and focus budgets to break past benchmarks. We're
                just a HOWL away.
              </p>
            </div>
            <div className="sm:w-1/2 flex flex-col gap-y-5 mt-7 sm:mt-0">
              <div className="flex justify-between gap-x-3">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-3 rounded-md reg w-full py-3"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-3 rounded-md reg w-full py-3"
                  placeholder="Last Name"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-2 rounded-md reg w-full py-3"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-2 rounded-md reg w-full py-3"
                placeholder="Contact Number"
                required
              />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="border-[#AEAAB2] bg-[#FCF5FF] border-2 pl-2 rounded-md reg w-full py-3"
                placeholder="Company Name"
                required
              />
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
          {status && <p className="text-center mt-4">{status}</p>}
        </form>
      </div>
    </div>
  );
};


