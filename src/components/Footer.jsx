import ThemeSwitch from "./ThemeSwitch";
import { Divider } from "@nextui-org/react";

export function Footer() {
  return (
    <>
      <Divider />
      <footer className="flex justify-center lg:justify-between   py-4  px-[5%] ">
       <p className="text-sm">*Explore my social media for more </p>
        <ThemeSwitch />
      </footer>
    </>
  );
}
