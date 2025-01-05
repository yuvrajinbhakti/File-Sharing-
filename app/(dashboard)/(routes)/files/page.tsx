import { UserButton } from "@clerk/nextjs";
import React from "react";

const Files = () => {
  return (
    <div className=" flex flex-col">
      Files
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Files;
