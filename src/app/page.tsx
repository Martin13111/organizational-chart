import React, { Suspense } from "react";
// import Users from "@/components/Users";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Users /> */}
        </Suspense>
      </div>
    </div>
  );
}
