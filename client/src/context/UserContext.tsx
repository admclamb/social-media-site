import { User } from "@/ts/types/User";
import { createContext } from "react";

export const UserContext = createContext<
  | {
      user: User;
      setUser: (arg0: User) => void;
    }
  | {}
>({ user: null, setUser: () => {} });

export const SearchContext = createContext<string>("");
