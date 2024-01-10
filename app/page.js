"use client";
import { request } from "@/graphql/graphql";
import { HELLO_WORLD } from "@/graphql/queryies";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async function () {
      const { hello } = await request(HELLO_WORLD);
      console.log({ hello });
    })();
  }, []);
  return (
    <>
      <h1>Hii</h1>
    </>
  );
}
