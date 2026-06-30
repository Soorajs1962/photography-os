"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("HELLO FROM REACT 🚀");
  }, []);

  return <h1>Testing...</h1>;
}