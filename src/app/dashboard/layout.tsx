import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
//import { Input } from "@/components/ui/input";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { ProgressSelector } from "@/components/ProgressSelector";
import { ImageUploader } from "@/components/ImageUploader";
import { AddAnotherMedia } from "@/components/AddAnotherMedia";
import { RERARegistration } from "@/components/RERARegistration";
import { LocationInput } from "@/components/LocationInput";

export default function DashboardLayout({}: Readonly<{
  // children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-gray-50 p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">Housing Mantra</span>
        </Link>
        <Menu />
      </div>

      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll">
        <Navbar />
        <ProgressSelector />
        <ImageUploader />
        <AddAnotherMedia />
        <RERARegistration />
        <LocationInput />

        <div className="ml-6 flex justify-between w-4/6">
          {/* Previous Button */}
          <Button variant="secondary">Previous</Button>

          {/* Submit Button */}
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
}
