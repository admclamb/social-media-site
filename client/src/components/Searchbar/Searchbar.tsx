import { SearchContext } from "@/context/UserContext";
import React, { FormEvent, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-regular-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
type Props = {
  className: string;
};

const Searchbar = ({ className }: Props) => {
  const [currSearch, setCurrSearch] = useState("");
  const { setSearch } = useContext(SearchContext);
  const router = useRouter();
  const handleChange = ({ target: { value } }) => {
    setCurrSearch(value);
  };

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/search?q=${currSearch}`);
  };
  return (
    <form className={`relative w-80${" " + className}`} onSubmit={submitSearch}>
      <input
        value={currSearch}
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-indigo-800"
        placeholder="Search..."
      />
      <Link
        href={`/search?q=${currSearch}`}
        className="absolute right-0 p-2 rounded top-1/2 -translate-y-1/2 hover:text-indigo-600 hover:bg-indigo-200 ease-in-out duration-300"
      >
        <FontAwesomeIcon icon={faSearch} size="lg" className="text-inherit" />
      </Link>
    </form>
  );
};

Searchbar.defaultProps = {
  className: "",
};

export default Searchbar;
