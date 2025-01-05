import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React from "react";

const TopHeader = () => {
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <AlignJustify className="md:hidden" />
      <Image
        src="/filesharinglogosvg.svg"
        height={50}
        width={50}
        className="md:hidden"
      />
      <UserButton />
    </div>
  );
};

export default TopHeader;
