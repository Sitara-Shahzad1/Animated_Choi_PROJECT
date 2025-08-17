import React from "react";

const FeatureProject = () => {
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
         
          Featured Projects
        </h1>
      </div>

      {/* //cards structure */}
      <div className="px-20">

        <div className="cards w-full flex gap-20 mt-10 items-center">
          <div className="cardcontainer rounded-2xl w-1/2 h-[80vh] bg-amber-900 overflow-hidden">
          <div className="card  w-full h-full rounded-2xl bg-green-500 scale-50 ">
            <img src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="" />
          </div>
          </div>
          <div className="cardcontainer rounded-2xl w-1/2 h-[80vh]  bg-amber-900">
            <div className="card  w-full h-full rounded-2xl bg-green-500 scale-50 ">
              <img src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProject;
