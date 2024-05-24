"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    if (searchParams.get("lg") == "1") {
      toast.success("Successfuly logged in.");
      window.history.replaceState(null, "", "/");
    }
  }, []);

  return null;
}
