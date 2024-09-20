import { Link, Button } from "@nextui-org/react";
import logo from "../logo/logo-text.png";
import lovable from "../logo/by-lovable.png";
import Image from "next/image";

export default function Nav_bar() {
  return (
    <div className="flex justify-between container mx-auto p-4">
      <div>
        <Link href="#" className="text-white mb-1">
          <Image src={logo} alt="logo" width={140} />
          {/* <b>GPT</b>Engineer */}
        </Link>
        <br />
        <Link href="#" className="text-white pl-1">
          <Image src={lovable} alt="lovable" width={70} />
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <Button
          radius="sm"
          variant="light"
          className="text-white font-bold p-1"
          size="sm"
        >
          About
        </Button>
        <Button
          radius="sm"
          variant="ghost"
          className="text-white font-bold bg-black border-gray-400 border-1 p-1"
          size="sm"
        >
          Sign in
        </Button>
        <Button
          radius="sm"
          variant="solid"
          className="text-white font-bold bg-white bg-opacity-20 p-1"
          size="sm"
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}
