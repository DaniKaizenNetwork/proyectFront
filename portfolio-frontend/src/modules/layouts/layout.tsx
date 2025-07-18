"use client";

//import React, { use, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayout } from "../hooks/useLayout";


interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  console.log(pathname)
  const { routes } = useLayout(pathname);

   

  return (
    <main className="bg-black px-20 h-screen flex gap-5">
      <div className="flex-1 py-20 overflow-auto no-scrollbar">
      <section className="flex-1 flex flex-col p-4 sm:p-6 lg:p-10 gap-4 sm:gap-6">
          <header className="flex justify-between">
            <nav className="absolute top-0 right-0 px-10 py-4 bg-neutral-800 rounded-bl-2xl border-b border-l border-neutral-600">
              <ul className="flex gap-10">
                {routes.map((route) => (
                     <Link
                  key={route.path}
                  
                  className={`${
                    pathname === route.path
                      ? "text-cyan-300 border-b-2 border-b-indigo-300"
                      : "text-gray-400 hover:text-white"
                  
                    } font-medium text-sm sm:text-base transition-colors duration-200`}
                    href={route.path}
                
                >
                    {route.name}
                  </Link>
                ))}
              </ul>
            </nav>
          </header>

          {children}
        </section>
      </div>
    </main>
  );
}
