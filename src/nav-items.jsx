import { Paw, Heart } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Discover Dogs",
    to: "/",
    icon: <Paw className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Dog Care",
    to: "/care",
    icon: <Heart className="h-4 w-4" />,
    page: <div>Dog Care Page (To be implemented)</div>,
  },
];
