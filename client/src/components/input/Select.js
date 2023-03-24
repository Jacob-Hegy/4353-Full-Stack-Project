import React, { useState, useEffect, useRef } from "react";

const Select = ({ name, prompt, data, query, setQuery, dark = true }) => {
  const [list, setList] = useState([]);
  const [placeHolder, setPlaceHolder] = useState(prompt);
  const [open, setOpen] = useState(false);
  const [closed, setClosed] = useState(true);
  const openStyles = "max-h-[320px] overflow-y-auto";
  const closedStyles = `max-h-0 overflow-hidden p-0`;
  const darkfocusStyles =
    "focus:bg-white focus:placeholder:text-primary-300 focus:text-primary-300 focus:uppercase focus:rounded-bl-none focus:rounded-br-none";
  const lightfocusStyles =
    "focus:bg-primary-300 focus:placeholder:text-white focus:text-white focus:uppercase focus:rounded-bl-none focus:rounded-br-none";
  const darkStyles =
    "bg-primary-300 hover:bg-white hover:text-primary-300 text-white placeholder:text-gray-200 hover:placeholder:text-primary-300 border-primary-300";
  const lightStyles =
    "bg-white hover:bg-primary-300 hover:text-white text-primary-300 placeholder:text-gray-400 hover:placeholder:text-white border-primary-300";
  const liStyles = `relative h-[40px] flex items-center cursor-pointer text-white bg-primary-300 hover:bg-white hover:text-primary-300 px-3 duration-300 ${
    closed && closedStyles
  }`;

  const inputElement = useRef();
  const ulElement = useRef();

  const handleBlur = (e) => {
    setPlaceHolder(prompt);
    setOpen(false);
  };

  const handleFocus = (e) => {
    setPlaceHolder("Type to filter");
    setOpen(true);
    setClosed(false);
  };

  const handleChange = (e) => {
    setOpen(true);
    const results = data.filter((item) => {
      if (e.target.value === "") return data;
      return item.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setQuery(e.target.value);
    setList(results);
  };

  const handleItemClick = (e) => {
    setQuery(e.target.textContent);
  };

  useEffect(() => {
    function hideDropDownOnBlur(e) {
      const isDropdown = ulElement.current.contains(e.target);
      const isInput = inputElement.current.contains(e.target);
      if (!isDropdown && !isInput) {
        setOpen(false);
      }
    }
    window.addEventListener("click", hideDropDownOnBlur);

    return () => {
      window.removeEventListener("click", hideDropDownOnBlur);
    };
  }, [open]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className={`rounded-md hover:cursor-pointer w-full h-10 py-2 px-3 duration-300 border-2 ${
          dark ? darkStyles : lightStyles
        } ${open && dark && darkfocusStyles} ${
          open && !dark && lightfocusStyles
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeHolder.toUpperCase()}
        ref={inputElement}
      />

      <ul
        className={`absolute top-0 left-0 w-full list-none mt-[40px] shadow-md overflow-hidden duration-300 ${
          open ? openStyles : closedStyles
        }`}
        ref={ulElement}
      >
        {query === ""
          ? data.map((item, index) => (
              <li key={index} className={liStyles} onClick={handleItemClick}>
                {item.toUpperCase()}
              </li>
            ))
          : list.map((item, index) => (
              <li key={index} className={liStyles} onClick={handleItemClick}>
                {item.toUpperCase()}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Select;
