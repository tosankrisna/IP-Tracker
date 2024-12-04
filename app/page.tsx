"use client";

import Error from "@/components/Error";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import { useFetch } from "@/hooks/useFetch";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { useState } from "react";

const Maps = dynamic(() => import("@/components/Maps"), { ssr: false });

export default function Home() {
  const [input, setInput] = useState("");
  const { data, error, isLoading } = useFetch(input);

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  if (data.code === 422) {
    alert(data.messages);
    redirect("/");
  }

  const {
    location: { lat, lng },
  } = data;

  const handleLocationChange = (input: string) => {
    setInput(input);
  };

  return (
    <main className="relative flex flex-col">
      <Hero>
        <h1 className="text-white text-center text-xl font-bold">
          IP Address Tracker
        </h1>
        <Input onLocationChange={handleLocationChange} />
      </Hero>
      <Maps posix={[lat, lng]} />
      <Information data={data} />
    </main>
  );
}
