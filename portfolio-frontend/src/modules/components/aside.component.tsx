import Image from "next/image";
import React from "react";
//import Info from "../profile/info.componet";

export default function Aside() {
  return (
    <aside className="w-full lg:w-1/4 px-4 sm:px-6 py-6 bg-gray-900 rounded-2xl shadow-md flex flex-col items-center gap-8">
      
     <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-gray-700 shadow-md">
          <Image
            src="/profile-placeholder.png" 
            alt="Perfil"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-600">
          Bienvenido a tu Gym favorito 
        </h3>
        <span className="bg-gray-800 text-sm sm:text-base px-3 py-1 rounded-full text-white font-medium">
          
        </span>
      </div>

      <div className="w-full">
      
      </div>
    </aside>
  );
}
