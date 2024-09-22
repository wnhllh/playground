"use client";

import React from "react";
import SigninGithubGoogle from "@/components/signinGithubGoogle";

import LineORLine from "@/components/LineORLine";
import {
  Button,
  Link,
  Input,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";

export default function SignIn() {
  return (
    <div className="flex">
      {/*---------------------------- left side左半边 -----------------------*/}
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
      {/*  -------------------right side右半边-------------------------- */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-1/2  flex flex-col items-center ">
          <h1 className="text-white text-[21px] font-bold">
            Creare your account
          </h1>
          <SigninGithubGoogle width="360px" />
          <LineORLine width="163px" />
          <div className="text-gray-300 text-[13px]">
            Enter your email below to create your account
          </div>
          {/*--------------------- Create your account  START----------------- */}
          <div className="flex justify-center items-center flex-wrap bg-black">
            <Input
              type="email"
              variant="bordered"
              placeholder="name@example.com"
              className="rounded w-[360px] h-7 mt-4 border-gray-300 "
            />

            <Input
              type="password"
              variant="bordered"
              placeholder="Password"
              className="rounded w-[360px] h-7 mt-6 border-gray-300 "
            />
          </div>
          {/* ----------------------Create your account END--------------------- */}
          <div className="flex">
            <CheckboxGroup color="default">
              <Checkbox className="mt-6 ml-1 checked:bg-white"></Checkbox>
            </CheckboxGroup>

            <div className="flex flex-wrap mt-8 ml-2  justify-center">
              <p className="text-gray-300 text-xs">
                By signing up, you agree to our&nbsp;{" "}
              </p>
              <Link href="#" className="underline text-gray-300 text-xs">
                Terms of Service
              </Link>
              <p className="text-gray-300 text-xs">&nbsp;and&nbsp;</p>
              <Link href="#" className="underline text-gray-300 text-xs mt-1">
                Privacy Policy
              </Link>
            </div>
          </div>

          <Button className="bg-white text-black text-sm w-[358px] h-7 rounded-md mt-7">
            Sign Up
          </Button>
          <div className="flex mt-6">
            <div className="text-white text-sm">
              Don&apos;t have am account?&nbsp;
            </div>
            <Link href="/signIn" className="text-white text-sm">
              Sign in
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
