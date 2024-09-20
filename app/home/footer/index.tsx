import React from "react";
import { Link, Button } from "@nextui-org/react";
import githubIcon from "../logo/github.png";
import discordIcon from "../logo/discord.png";
import xIcon from "../logo/x.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="pt-40 pb-20">
      <div className="w-full  flex justify-center items-center text-gray-300 text-sm mb-4">
        <Link href="#" className="text-gray-300 text-xs">
          About
        </Link>
        <b> &nbsp;· &nbsp;</b>
        <Link href="#" className="text-gray-300 text-xs">
          Pricing
        </Link>
        <b> &nbsp;· &nbsp;</b>
        <Link href="#" className="text-gray-300 text-xs">
          Docs
        </Link>
        <b> &nbsp;· &nbsp;</b>
        <Link href="#" className="text-gray-300 text-xs">
          News
        </Link>
        <b> &nbsp;· &nbsp;</b>
        <Link href="#" className="text-gray-300 text-xs">
          Get in touch
        </Link>
      </div>
      <div className="w-full flex justify-center items-center text-gray-300 text-xs mb-4">
        GPT Engineer is currently in beta.
      </div>
      <div className="w-full flex justify-center items-center text-gray-300 text-xs">
        Made by &nbsp;
        <Link href="#" className="text-gray-300 text-xs">
          Lovable<span className="text-gray-300">❤</span>
        </Link>
      </div>
      <div className="w-full flex justify-center items-center text-gray-300 text-sm mt-4">
        <Link href="https://github.com">
          <Button isIconOnly aria-label="Like">
            <Image src={githubIcon} alt="GitHub" width={60} height={60} />
          </Button>
        </Link>
        <Link href="https://x.com">
          <Button isIconOnly aria-label="Like">
            <Image src={xIcon} alt="GitHub" width={60} height={60} />
          </Button>
        </Link>
        <Link href="https://discord.com">
          <Button isIconOnly aria-label="Like">
            <Image src={discordIcon} alt="GitHub" width={100} height={100} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
