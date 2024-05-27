"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, CareerList } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarMain() { 
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <CareerList
              title="TalentOne"
              href=" "
              src=""
              description="A platfoem where customers can hire talented freelancers and influencers ."
            />
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Career">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Join US</HoveredLink>
            <HoveredLink href="/individual">DigiChamps</HoveredLink>
            <HoveredLink href="/team">Digilearn</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
