"use client";

import { useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { GoShare } from "react-icons/go";
import { Separator } from "@/components/ui/separator";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Post() {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <div className="pt-1 pb-3">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="w-full flex items-center gap-2">
            <Avatar className="h-11 w-11">
              <AvatarImage
                src="https://www.unsplash.com/random"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-full flex flex-col gap-[2px]">
              <h1 className="line-clamp-1 font-medium">DKMS UK</h1>
              <p className="text-sm line-clamp-1 text-[#464646]">12/8/2023</p>
            </div>
            <Menubar className="border-0">
              <MenubarMenu>
                <MenubarTrigger>
                  <FiMoreHorizontal className="text-2xl" />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Copy link</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Save</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Unfollow</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
        <p className="px-4 mb-2 text-sm text-[#464646] line-clamp-3 md:mb-3 md:mt-1 md:text-sm+">
          DKMS is an international nonprofit where creativity, initiative,
          compassion, collaboration and strategic thinking are rewarded as we
          work together to expand our reach, recruit more bone marrow donors and
          help save more lives. Following the establishment of DKMS, our German
          predecessor, we were founded in 2004 in the U.S. as DKMS Americas, and
          since renamed DKMS. With the firm belief that people everywhere can
          play an active role in saving the lives of others with blood cancers
          and blood and bone marrow disorders, our mission is to grow the number
          of suitable bone marrow and blood stem cell donors for patients in
          need of a
        </p>
        <Image
          src=""
          alt="Event Photo"
          className="w-full aspect-[4/3] bg-secondary"
        />
        <div className="px-4 h-11 w-full flex gap-4 items-center">
          {liked ? (
            <AiFillLike
              className="text-2xl text-[#007aff]"
              onClick={() => setLiked(!liked)}
            />
          ) : (
            <AiOutlineLike
              className="text-2xl text-[#464646]"
              onClick={() => setLiked(!liked)}
            />
          )}
          <FaRegComment className="text-xl text-[#464646]" />
          <GoShare className="text-xl text-[#464646]" />
        </div>
        <div className="px-4 h-8 w-full flex gap-4 items-start">
          <p className="text-sm text-[#464646]">128 Likes</p>
          <p className="text-sm text-[#464646]">18 Comments</p>
        </div>
      </div>
      <Separator />
    </>
  );
}