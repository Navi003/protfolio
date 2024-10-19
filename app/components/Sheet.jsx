import Button from "@/app/ui/Button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ListItem from "../ui/ListItem";

export function SheetNav({ ham }) {
  return (
    <Sheet>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        <ul className="flex flex-col gap-4 mr-8 font-semibold uppercase text-secondary-20 mobile-navigation ">
          <ListItem href="/">Home</ListItem>
          <ListItem href="/projects">Projects</ListItem>
          <ListItem href="/aboutme">About Me</ListItem>
          <ListItem href="/resources">Resources</ListItem>
          <ListItem href="/contact">Contact</ListItem>
        </ul>

        <SheetFooter>
          <SheetClose></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
