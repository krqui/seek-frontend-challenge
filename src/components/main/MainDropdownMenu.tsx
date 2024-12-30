"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

interface MainDropdownMenuProps {
  onAction: (action: "edit" | "delete") => void;
}

export const MainDropdownMenu: React.FC<MainDropdownMenuProps> = ({
  onAction,
}) => {
  return (
    <div>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-primary-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-primary-400 data-[open]:bg-primary-400 data-[focus]:outline-1 data-[focus]:outline-white">
          Options
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 bg-black origin-top-right rounded-xl border border-black/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
              onClick={() => onAction("edit")}
            >
              <PencilIcon className="size-4 fill-white/30" />
              Edit
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘E
              </kbd>
            </button>
          </MenuItem>
          <div className="my-0.5 bg-white/5" />
          <MenuItem>
            <button
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
              onClick={() => onAction("delete")}
            >
              <TrashIcon className="size-4 fill-white/30" />
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};
