"use client";
import { decrement, increment } from "@/lib/features/counter/counterSlice";
import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <p>Welcome to SeekyApp</p>
        <Link
          href="/login"
          className="bg-red-500 text-white w-max px-4 py-1.5 rounded-2xl hover:bg-red-300"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
