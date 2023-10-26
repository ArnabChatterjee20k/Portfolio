import React from "react";
import Menu from "../../icons/Menu";

interface Props {
  navID: string;
  navVisibilityClass: string;
}

export default function MenuToggler({navID, navVisibilityClass }: Props) {
  function navTogglerWithId() {
    document.getElementById(navID)?.classList.toggle(navVisibilityClass);
  }
  return (
    <button onClick={navTogglerWithId}>
      <Menu className="w-10 h-10 md:hidden stroke-black dark:stroke-white" />
    </button>
  );
}
