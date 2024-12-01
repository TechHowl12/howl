// import React from "react";
// import maskgroup from "../assets/Mask group (1).png";
// import maskgrou1 from "../assets/Mask group.png";
// import maskgrou2 from "../assets/Mask group (2).png";
// import maskgrou3 from "../assets/Mask group (3).png";

// import maskgroup6 from "../assets/Mask group (6).png";
// import maskgroup7 from "../assets/Mask group (7).png";
// import maskgroup8 from "../assets/Mask group (8).png";
// import maskgroup9 from "../assets/Mask group (9).png";

// export const Connect = () => {
//   return (
//     <>
//       <div className="bg-white py-16 px-6 md:px-20 hidden sm:block">
//         {/* Grid layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
//           {/* First Column: Text and Single Image */}
//           <div className="flex flex-col justify-end items-end gap-6">
//             <p
//               className="text-[#3D155D] text-lg leading-5 "
//               style={{ fontFamily: "Hoves-reg" }}
//             >
//               If you’re ready to go beyond <br /> conversations ceilinged at
//               approvals,
//               <br />
//               feedback and deadlines, if building <br /> brands, even your own,
//               is on the cards <br /> – we’d love to start a conversation.
//             </p>
//             <img
//               width={334}
//               height={409}
//               src={maskgroup}
//               alt="Placeholder"
//               className="rounded-lg object-cover"
//             />
//           </div>

//           {/* Second Column: Single Image */}
//           <div className="flex justify-center items-start">
//             <div className="relative">
//               {/* Image */}
//               <img
//                 src={maskgrou1}
//                 alt="Placeholder"
//                 className="rounded-[10px] object-cover w-full h-full"
//               />
//               {/* Overlay */}
//               <div className="absolute inset-0 rounded-[10px]"></div>
//             </div>
//           </div>

//           {/* Third Column: Two Images and Footer */}
//           <div className="flex flex-col gap-6 items-start">
//             {/* Two stacked images */}
//             <img
//               src={maskgrou2}
//               width={334}
//               height={215}
//               alt="Placeholder"
//               className="rounded-lg object-cover"
//             />
//             <img
//               src={maskgrou3}
//               width={334}
//               height={215}
//               alt="Placeholder"
//               className="rounded-lg object-cover"
//             />
//             {/* Careers Text */}
//             <div className="text-left">
//               <p className="text-[#3D155D] text-lg font-medium">WRITE TO</p>
//               <a
//                 href="mailto:careers@howl.in"
//                 className="text-[#3D155D] font-extrabold text-xl hover:underline"
//                 style={{ fontFamily: "Hovesbold" }}
//               >
//                 CAREERS@HOWL.IN
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white flex-col py-16 px-6 md:px-20 block sm:hidden">
//         {/* Ismei Mobile ka code likh */}

//         <p
//           className="text-[#3D155D] text-sm leading-5 reg"
//         >
//           If you’re ready to go beyond conversations ceilinged at
//           approvals,feedback and deadlines, if building brands, even your own,
//           is on the cards – we’d love to start a conversation.
//         </p>

//         <div className="flex justify-start gap-3 mt-4 items-start">
            
//               {/* Image */}
//               <img
//                 src={maskgroup6}
//                 alt="Placeholder"
//                 className="rounded-[10px] object-cover h-full"
//               />

//             {/* third colum paste here  */}
//             <div className="flex flex-col gap-2 items-start">
//             {/* Two stacked images */}
//             <img
//               src={maskgroup7}
             
//               alt="Placeholder"
//               className="rounded-lg object-cover"
//             />
//             <img
//               src={maskgroup8}
              
//               alt="Placeholder"
//               className="rounded-lg object-cover"
//             />

  

//             {/* third colum paste here  */}
             
//             </div>          
//           </div>
//           <img src={maskgroup9}  className="rounded-lg object-cover mt-6"/>
//       </div>
//     </>
//   );
// };



// updated code 



import React from "react";
import diwalipic1 from "../assets/diwalipic1.png";
import diwalipic2 from "../assets/diwalipic2.png";
import diwalipic3 from "../assets/diwalipic3.png";
import diwalipic4 from "../assets/diwalipic4.png";
import diwalipic5 from "../assets/diwalipic5.png";

export const Connect = () => {
  return (
    <div className="w-full bg-white">
      <div className="bg-white mx-auto w-9/12 py-20 px-6 sm:px-0 hidden sm:block">
        {/* Grid layout */}
        <div className="flex items-center  px-14 justify-between">
          {/* First Row */}
          <div className="flex w-4/12 flex-col  gap-4">
            {/* Text */}
            <p
              className="text-[#3D155D] text-lg  leading-5"
              style={{ fontFamily: "Hoves-reg" }}
            >
              If you’re ready to go beyond conversations ceilinged at approvals,
              feedback and deadlines, if building brands, even your own, is on
              the cards – we’d love to start a conversation.
            </p>

            {/* Careers Text */}
            <div>
              <p className="text-[#3D155D] text-lg font-medium">WRITE TO</p>
              <a
                href="mailto:careers@howl.in"
                className="text-[#3D155D] font-extrabold text-xl hover:underline"
                style={{ fontFamily: "Hovesbold" }}
              >
                CAREERS@HOWL.IN
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            {/* Two Images Side by Side */}
            <img
              src={diwalipic1}
              alt="Small Image 1"
              className="rounded-lg object-cover"
            />
            <img
              src={diwalipic2}
              alt="Small Image 2"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex lg:w-28/12 px-14 gap-4 mt-8">
          {/* Large Image */}
          <img
            src={diwalipic3}
            alt="Large Image"
            className="rounded-lg"
          />

          {/* Two Vertical Images */}
          <div className="flex items-end flex-col gap-4">
            <img
              src={diwalipic4}
              alt="Vertical Image 1"
              className="rounded-lg object-cover w-[334px] h-[215px] "
            />
            <img
              src={diwalipic5}
              alt="Vertical Image 2"
              className="rounded-lg w-[334px] h-[215px]"
            />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="bg-white py-16 px-6 block sm:hidden">
        {/* First Row */}
        <div className="flex flex-col gap-4">
          <p className="text-[#3D155D] text-lg reg leading-5" 
          
          >
            If you’re ready to go beyond conversations ceilinged at approvals,
            feedback and deadlines, if building brands, even your own, is on
            the cards – we’d love to start a conversation.
          </p>

         
        </div>

        {/* Images */}
        <div className="flex flex-col gap-4 mt-6">
          {/* Two Images Side by Side */}
          <div className="flex gap-4">
            <img
              src={diwalipic1}
              alt="Small Image 1"
              className="rounded-lg object-cover w-[150px] h-[123px]"
            />
            <img
              src={diwalipic2}
              alt="Small Image 2"
              className="rounded-lg object-cover w-[150px] h-[123px]"
            />
          </div>

      
            <div className="flex gap-4 mt-4">
              <img
                src={diwalipic4}
                alt="Vertical Image 1"
                className="rounded-lg object-cover w-[150px] h-[107px]"
              />
              <img
                src={diwalipic5}
                alt="Vertical Image 2"
                className="rounded-lg object-cover w-[150px] h-[107px]"
              />
          
          

            </div>
          </div>

           
          <div className="flex flex-col gap-4 mt-6">
            <img
              src={diwalipic3}
              alt="Large Image"
              className="rounded-lg object-cover w-full h-auto"
            />
</div>

<div>
            <p className="text-[#3D155D] mt-8 text-lg font-medium">WRITE TO</p>
            <a
              href="mailto:careers@howl.in"
              className="text-[#3D155D] font-extrabold text-xl hover:underline"
              style={{ fontFamily: "Hovesbold" }}
            >
              CAREERS@HOWL.IN
            </a>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};







