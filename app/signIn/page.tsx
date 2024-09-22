"use client";

import React from "react";
import SigninGithubGoogle from "@/components/signinGithubGoogle";
import SigninByEmail from "@/components/signinByEmail";
import LineORLine from "@/components/LineORLine";
import { Button, Link } from "@nextui-org/react";

export default function SignIn() {
  return (
    <div className="flex">
      {/* left side左半边 */}
      <div className="w-1/2 ">
        <Link href="/" className="text-white text-lg mt-10 ml-10">
          AIctopus
        </Link>
        <p className="text-white text-3xl mt-[260px] ml-10 font-bold">
          Don&apos;t have access yet?
          <br /> We onboard new users every week.
        </p>
        <p className="text-white text-lg mt-[270px] ml-10">
          Build software products, using only a chat interface
        </p>
      </div>
      {/*  right side右半边 */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-2/5 h-3/5 flex flex-col items-center mt-10">
          <h1 className="text-white text-[21px] font-bold">Login</h1>
          <SigninGithubGoogle width="280px" />
          <LineORLine width="124px" />
          <div className="text-gray-300 text-[13px]">
            Enter your email and password below to login
          </div>
          <SigninByEmail />
          <Button className="bg-white text-black text-sm w-[280px] h-7 rounded-md mt-7">
            Sign in
          </Button>
          <div className="flex mt-6">
            <div className="text-white text-sm">
              Don&apos;t have am account?&nbsp;
            </div>
            <Link href="/signUp" className="text-white text-sm">
              Sign up
            </Link>
          </div>
          <Link href="#" className="text-white text-sm mt-4">
            Forgot pssword?
          </Link>
        </div>
      </div>
    </div>
  );
}
