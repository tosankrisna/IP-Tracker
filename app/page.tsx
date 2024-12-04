"use client";

import Error from "@/components/Error";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import { useFetch } from "@/hooks/useFetch";
import { redirect } from "next/navigation";

export default function Home() {
  const { data, error, isLoading } = useFetch("");

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  if (data.code === 422) {
    alert(data.messages);
    redirect("/");
  }

  return (
    <main className="relative flex flex-col">
      <Hero>
        <h1 className="text-white text-center text-xl font-bold">
          IP Address Tracker
        </h1>
        <Input />
      </Hero>
      <Information data={data} />
    </main>
  );
}
