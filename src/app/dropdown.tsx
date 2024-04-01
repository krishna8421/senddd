"use client";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown as DropdownComponent,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";

interface IProp {
  name: string;
  email: string;
  imageUrl: string;
}

const Dropdown = ({ name, email, imageUrl }: IProp) => {
  return (
    <DropdownComponent placement="bottom-end" backdrop="blur">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          name={name}
          size="sm"
          src={imageUrl}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{email}</p>
        </DropdownItem>
        <DropdownItem key="settings">Settings</DropdownItem>
        <DropdownItem key="integrations">Integrations</DropdownItem>
        <DropdownItem key="logs">Logs</DropdownItem>

        <DropdownItem
          key="logout"
          color="danger"
          onClick={async () => await signOut()}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </DropdownComponent>
  );
};

export default Dropdown;
