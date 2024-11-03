import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default async function NavBar() {
  return (
    <nav
      className={
        "w-full flex justify-between items-center z-50 py-5 bg-blue-900"
      }
    >
      <div className={"md:ml-5 ml-3"}>
        <Link href={"/"}>
          <Image
            src={logo}
            alt={"logo"}
            width={140}
            height={80}
            className={"object-cover "}
            priority
            layout={"intrinsic"}
          />
        </Link>
      </div>

      <div className={"md:mr-5 mr-3 gap-x-3 md:flex hidden"}>
        <button
          className={
            "flex justify-center items-center p-2 rounded-xl bg-slate-200/20 text-white/80 font-medium hover:bg-slate-200/40 transition-all"
          }
          type={"button"}
        >
          Log In
        </button>
        <button
          className={
            "flex justify-center items-center p-2 rounded-xl bg-slate-200/20 text-white/80 font-medium hover:bg-slate-200/40 transition-all"
          }
          type={"button"}
        >
          Sign Up
        </button>
      </div>

      <div className={"md:hidden mr-3"}>
        <Sheet>
          <SheetTrigger>
            <Menu className={"text-white/80"} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Hello</SheetTitle>
              <SheetDescription>Welcome to My Kind of Cruise</SheetDescription>
            </SheetHeader>
            <div className={"mt-10 flex w-full flex-col gap-y-3"}>
              <button
                className={
                  "flex justify-center items-center p-2 rounded-xl bg-blue-900 text-white font-medium hover:bg-blue-900/80 transition-all"
                }
                type={"button"}
              >
                Log In
              </button>
              <button
                className={
                  "flex justify-center items-center p-2 rounded-xl bg-blue-900 text-white font-medium hover:bg-blue-900/80 transition-all"
                }
                type={"button"}
              >
                Sign Up
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
