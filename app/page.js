import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex justify-center py-10 items-center">
      <div className="container h-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-6xl">Welcome To the Blogs</h1>
        <p className="text-xl">
          Here you can write and read top notch blogs by tech
        </p>
        <Button asChild>
          <Link href={"/blogs"}> Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
