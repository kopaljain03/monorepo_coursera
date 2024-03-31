import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@repo/ui/button";
import { Signup } from "@repo/ui/signup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      hello world
      <Button
        className={"bg-blue-700 rounded-xl"}
        children={"hello"}
        appName={"here"}
      />
    </div>
  );
}
