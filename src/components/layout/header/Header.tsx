import React, { use, useState } from "react";
import { GoSearch } from "react-icons/go";

export default function Header() {
  const [isActiveSearch, setIsActiveSearch] = useState(false);

  const onClickSearch = () => {
    setIsActiveSearch(!isActiveSearch);
  };

  return (
    <div className="md:hidden w-full fixed top-0 h-14 shadow-md shadow-black/5">
			<div className="flex h-full items-center justify-end">
        <button onClick={onClickSearch}>
          <GoSearch size={20} className='mr-4' />
        </button>
      </div>
    </div>
  );
}
