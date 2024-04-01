import React from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
// import Link from "next/link";
// import {
//   DropdownItem,
//   DropdownTrigger,
//   Dropdown,
//   DropdownMenu,
// } from "@nextui-org/dropdown";
// import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import { getServerAuthSession } from "@/server/auth";
import { GetStarted } from "./get-started";
import Dropdown from "./dropdown";

const NavBar = async () => {
  const session = await getServerAuthSession();
  const user = session?.user;

  return (
    <Navbar>
      <NavbarBrand className="space-x-2">
        <Image
          src="/logo/logo2x.png"
          alt="Senddd Logo"
          width={32}
          height={32}
        />
        <p className="font-semibold text-inherit">Senddd</p>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        {user ? (
          <Dropdown
            name={user.name!}
            email={user.email!}
            imageUrl={user.image!}
          />
        ) : (
          <GetStarted />
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
