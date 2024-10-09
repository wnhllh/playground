import React from "react";
import { Avatar } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineHomeWork } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { FiBell } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { Link } from "@nextui-org/react";
import { IoFileTrayStackedOutline } from "react-icons/io5";
import { useDisclosure } from "@nextui-org/react";
import { RxExit } from "react-icons/rx";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/react";

export default function SideBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="hidden md:w-1/6 md:flex flex-col bg-[rgb(20,20,20)] md:flex-col h-screen p-4 min-w-[200px]">
      <div className="flex items-center relative left-1">
        <Link href="/me">
          <Avatar
            isBordered
            radius="sm"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </Link>
        <span className="ml-5">Wellcome, Aaron!</span>
      </div>
      <Input
        type="search"
        placeholder="&nbsp;Search"
        startContent={<IoSearch />}
        className="mt-6 "
      />
      <hr className="border-gray-800 mt-5 mb-5" />
      <div>
        <div className="flex pl-4 items-center mb-1 h-12 hover:bg-gray-500 rounded-md">
          <MdOutlineHomeWork className="size-4 mr-3" />
          <Link href="/me" color="primary" className="text-gray-300">
            Home
          </Link>
        </div>
        <div className="flex pl-4 items-center mb-1 h-12 hover:bg-gray-500 rounded-md">
          <IoFileTrayStackedOutline className="size-4 mr-3" />
          <Link href="/me/my_work" className="text-gray-300">
            My Work
          </Link>
        </div>
        <div className="flex pl-4 items-center mb-1 h-12 hover:bg-gray-500 rounded-md">
          <FiBell className="size-4 mr-3" />
          <Link href="#" className="text-gray-300">
            Notifications
          </Link>
        </div>
        <div className="flex pl-4 items-center mb-1 h-12 hover:bg-gray-500 rounded-md ">
          <MdFavoriteBorder className="size-4 mr-3" />
          <Link href="/me/likes" className="text-gray-300 ">
            Likes
          </Link>
        </div>
        <div className="flex pl-4 items-center mb-1 h-12 hover:bg-gray-500 rounded-md">
          <MdOutlineMessage className="size-4 mr-3" />
          <Link href="#" className="text-gray-300">
            Messages
          </Link>
        </div>
      </div>
      <hr className="border-gray-800  mb-5 " />
      <Button
        color="default"
        variant="light"
        className="w-full text-gray-300 mb-3 flex justify-start text-md"
        startContent={<IoSettingsOutline className="size-4 mr-1" />}
      >
        Setting
      </Button>
      <Button
        color="default"
        variant="light"
        className="w-full text-gray-300 mb-3 flex justify-start text-md"
        startContent={<MdHelpOutline className="size-4 mr-1" />}
      >
        Help
      </Button>

      {/* --------------log out--------------- */}
      <Link
        onPress={onOpen}
        className="cursor-pointer text-gray-300 mt-auto ml-4"
      >
        <RxExit /> &nbsp;&nbsp;Log Out
      </Link>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirmation
              </ModalHeader>
              <ModalBody>
                <p>Do you want to log out?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
