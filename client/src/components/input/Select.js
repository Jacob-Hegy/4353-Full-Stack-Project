import React, { useState, useEffect, useRef } from "react";

const Select = ({ name, prompt, data }) => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");
  const [placeHolder, setPlaceHolder] = useState(prompt);
  const [open, setOpen] = useState(false);
  const [closed, setClosed] = useState(true);
  const openStyles = "max-h-[320px] overflow-y-auto";
  const closedStyles = `max-h-0 overflow-hidden p-0`;
  const focusStyles =
    "focus:bg-white focus:placeholder:text-primary-300 focus:text-primary-300 focus:uppercase focus:rounded-bl-none focus:rounded-br-none";
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
        className={`rounded-md hover:cursor-pointer bg-primary-300 hover:bg-white hover:text-primary-300 text-white placeholder:text-gray-200 hover:placeholder:text-primary-300 w-full h-10 py-2 px-3 duration-300 border-2 border-primary-300 ${
          open ? focusStyles : ""
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
