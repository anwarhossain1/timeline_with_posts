"use client";

import siteData from "@/blog.config";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const {
    header: { logo, title },
  } = siteData;

  const { theme, setTheme } = useTheme();

  return (
    <header className={"container flex justify-between py-4"}>
      <div className={"flex justify-center items-center"}>
        <Link className={"flex justify-center items-center mr-4"} href={"/"}>
          <Image src={logo} height={28} width={28} alt={"logo"} />
          <div className={"ml-1 text-lg font-semibold"}>{title}</div>
        </Link>
        <div className={"hidden md:block space-x-1"}></div>
      </div>
      <div className={"flex justify-center items-center space-x-1"}>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => {
            setTheme(theme == "light" ? "dark" : "light");
          }}
        >
          {theme == "light" && <Sun size={20} />}
          {theme == "dark" && <Moon size={20} />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
