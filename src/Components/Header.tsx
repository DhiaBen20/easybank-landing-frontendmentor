import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import NavLink from "./Navlink";
import PrimaryButton from "./PrimaryButton";
import { Container } from "./Container";

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const matchMedia = useRef(window.matchMedia("(min-width: 768px)"));

  useEffect(() => {
    function close(e: MediaQueryListEvent) {
      if (e.matches) {
        setIsOpen(false);
      }
    }

    matchMedia.current.addEventListener("change", close);

    const media = matchMedia.current;

    return () => media.removeEventListener("change", close);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 top-[5rem] bg-gradient-to-b from-black/30 to-white/50" />
      )}
      <Dropdown.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dropdown.Trigger className="group md:hidden">
          <Menu className="group-data-[state=open]:hidden" />
          <X className="group-data-[state=closed]:hidden" />
        </Dropdown.Trigger>

        <Dropdown.Portal>
          <Dropdown.Content
            sideOffset={45}
            className="mx-4 w-[calc(var(--radix-dropdown-menu-content-available-width)-theme(spacing.8))] rounded bg-white shadow-xl"
          >
            <nav className="flex flex-col items-center py-6">
              <Dropdown.Item className="group outline-none">
                <NavLink href="#" className="py-2">
                  Home
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item className="group outline-none">
                <NavLink href="#" className="py-2">
                  About
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item className="group outline-none">
                <NavLink href="#" className="py-2">
                  Contact
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item className="group outline-none">
                <NavLink href="#" className="py-2">
                  Blog
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item className="group outline-none">
                <NavLink href="#" className="py-2">
                  Careers
                </NavLink>
              </Dropdown.Item>
            </nav>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>
  );
}

export default function Header() {
  return (
    <header className="bg-white">
      <Container className="flex h-[5rem] items-center justify-between gap-4">
        <a href="#" className="shrink-0">
          <img src={logo} alt="" />
        </a>

        <MobileNavigation />

        <nav className="hidden h-full flex-1 md:block">
          <ul className="flex h-full justify-center gap-7">
            <li className="flex">
              <NavLink href="#">Home</NavLink>
            </li>
            <li className="flex">
              <NavLink href="#">About</NavLink>
            </li>
            <li className="flex">
              <NavLink href="#">Contact</NavLink>
            </li>
            <li className="flex">
              <NavLink href="#">Blog</NavLink>
            </li>
            <li className="flex">
              <NavLink href="#">Careers</NavLink>
            </li>
          </ul>
        </nav>

        <PrimaryButton className="hidden md:block">
          Request Invite
        </PrimaryButton>
      </Container>
    </header>
  );
}
