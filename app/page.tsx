import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Input from "@/components/Input";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Hero>
        <h1 className="text-white text-center text-xl font-bold">
          IP Address Tracker
        </h1>
        <Input />
      </Hero>
      <Information />
    </main>
  );
}
