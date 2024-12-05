import React from "react";

export const Design = () => {
  const cards = [
    { title: "DEFINE", number: "01", description: "STRATEGY & CONSULTATION", videoUrl: "./4Define.mp4" },
    { title: "DESIGN", number: "02", description: "ONLINE MARKETING EXPERIENCES", videoUrl: "./4Design.mp4" },
    { title: "DEPLOY", number: "03", description: "COMMERCE SOLUTIONS", videoUrl: "./4Deploy.mp4" },
    { title: "DISTRIBUTE", number: "04", description: "GROWTH MARKETING", videoUrl: "./4Ddistributenew.mp4" },
  ];

  const gradientBorder = "linear-gradient(to right, #F79A5F 0%, #F69976 9%, #F399B1 29%, #F399C1 33%, #C7A7CF 69%, #A1B5DD 99%)";

  return (<>
  
  
     <h1 className=' text-3xl text-center my-16 md:text-5xl xl:text-6xl uppercase  bold text-white'>Our Approach</h1>
    <div className="bg-black flex items-center justify-center">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 overflow-x-auto  max-w-full">
        {cards.map((card, index) => (
          <div key={index} className="flex-none">
            <div
              className={`w-[278px] bg-black relative flex ${
                card.title === "DESIGN" || card.title === "DISTRIBUTE" ? "flex-col-reverse" : "flex-col"
              } items-center`}
            >
              {/* Top div with video */}
              <div className="w-[278px] h-[386px] mb-4 overflow-hidden rounded-tl-xl rounded-br-xl"
                   style={{
                     background: gradientBorder,
                     padding: "0.9px"
                   }}>
                <div className="w-full h-full bg-black rounded-tl-xl rounded-br-xl overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    aria-label={`Video for ${card.title}`}
                  >
                    <source src={card.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              {/* Title and numbering in separate divs but same row */}
              <div className="flex justify-between items-center mb-4 w-full">
                <div className="w-[170px] h-[88px] rounded-tl-xl rounded-br-xl flex items-center justify-around"
                     style={{
                       background: gradientBorder,
                       padding: "1px"
                     }}>
                  <div className="w-full h-full bg-black rounded-tl-xl rounded-br-xl flex items-center justify-around hover:bg-[#3D155D] transition-colors">
                    <span className="text-white mr-4 text-[20px] bold">{card.title}</span>
                  </div>
                </div>
                <div className="w-[98px] h-[90px] rounded-tl-xl rounded-br-xl flex items-center justify-center"
                     style={{
                       background: gradientBorder,
                       padding: "1px"
                     }}>
                  <div className="w-full h-full bg-black rounded-tl-xl rounded-br-xl flex items-center justify-center hover:bg-[#3D155D] transition-colors">
                    <span className="text-white text-[40px] font-light">{card.number}</span>
                  </div>
                </div>
              </div>
              
              {/* Bottom description */}
              <div className="w-[278px] h-[104px] mb-4 rounded-tl-xl rounded-br-xl"
                   style={{
                     background: gradientBorder,
                     padding: "1px"
                   }}>
                <div className="w-full h-full bg-black rounded-tl-xl rounded-br-xl flex items-center justify-center hover:bg-[#3D155D] transition-colors">
                  <span className="text-white w-4/6 mr-10 reg text-sm px-4 text-left">{card.description}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     </>
  )
}

