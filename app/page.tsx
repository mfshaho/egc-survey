import Link from "next/link";
import Image from "next/image";
import { Languages } from "@/components";
export default function Home() {
  return (
    <main className="flex flex-col gap-10 text-center font-Celias pt-5">
      <Languages />
    </main>
  );
}
