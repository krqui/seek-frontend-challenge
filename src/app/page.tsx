"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-[300px] rounded-xl py-3 lg:w-[400px] bg-black px-4 mt-40 mx-auto">
        <p className="text-[32px] text-center">Welcome to SeekyApp</p>
        <div className="w-full flex justify-center mt-4">
          <Link
            href="/login"
            className="bg-red-500 text-white w-max px-4 py-1.5 rounded-2xl hover:bg-red-300 text-[18px]"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
