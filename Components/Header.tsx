"use client";
import { useGlobalContext } from "@/context/globalContext";
import { LogIn, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Profile from "./Profile";
import Ubuntu from "../public/ubuntu.png";

function Header() {
  const { isAuthenticated } = useGlobalContext();
  const pathname = usePathname();
  return (
    <header className="px-10 py-6 bg-[#0a192f] text-white flex justify-between items-center">
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={Ubuntu} alt="logo" width={45} height={45} />
        <h1 className="font-extrabold text-2xl text-white">
          Ubuntu Job Finder
        </h1>
      </Link>

      <ul className="flex items-center gap-8">
        <li>
          <Link
            href={"/findwork"}
            className={`py-2 px-6 rounded-md ${
              pathname === "/findwork"
                ? "text-white border-green-500 border bg-green-500"
                : ""
            }`}
          >
            Find Work
          </Link>
          <Link
            href={"/myjobs"}
            className={`py-2 px-6 rounded-md ${
              pathname === "/myjobs"
                ? "text-white border-green-500 border bg-green-500"
                : ""
            }`}
          >
            My Jobs
          </Link>
          <Link
            href={"/post"}
            className={`py-2 px-6 rounded-md ${
              pathname === "/post"
                ? "text-white border-green-500 border bg-green-500"
                : ""
            }`}
          >
            Post a Job
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <Profile />
        ) : (
          <div className="flex items-center gap-6">
            <Link
              href={"/login"}
              className="py-2 px-6 rounded-md border flex items-center gap-4 bg-green-500 text-white border-green-500 hover:bg-green-600 trasition-all duration-200 ease-in-out"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link
              href={"/register"}
              className="py-2 px-6 rounded-md border flex items-center gap-4 bg-green-500 text-white border-green-500 hover:bg-green-600 trasition-all duration-200 ease-in-out"
            >
              <UserPlus className="w-4 h-4" />
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
