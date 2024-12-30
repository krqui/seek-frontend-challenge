"use client";

import { Provider } from "react-redux";
import { UserStore, userStore } from "@/lib/features/user/userStore";
import { useRef } from "react";

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<UserStore | null>(null);
  if (!storeRef.current) {
    // To create the store instance the first time this renders
    storeRef.current = userStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
