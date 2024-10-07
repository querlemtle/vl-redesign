import { usePathname } from "next/navigation";

export default function useActiveNav() {
  const pathname = usePathname();

  const checkActiveNav = (path) => {
    if (path === "/") return false;
    return pathname.startsWith(path);
  };
  return checkActiveNav;
}
