import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Button className="bg-red-500 hover:bg-red-600 text-white">Test Button</Button>
      </div>
    </div>
  );
}
