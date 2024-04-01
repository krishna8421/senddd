"use client";

import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { FiGithub } from "react-icons/fi";

export const GetStarted = () => {
  return (
    <Button
      color="secondary"
      radius="full"
      startContent={<FiGithub />}
      className="bg-primary"
      onClick={() => signIn("github")}
    >
      Get Started
    </Button>
  );
};
