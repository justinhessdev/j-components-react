import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import "./SearchDropdown.scss";

const DropdownContext = React.createContext();

function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      `Dropdown compound components cannot be rendered outside the Dropdown component`
    );
  }
  return context;
}

function Item({ children, filterKey, onClick }) {
  const {
    setValue,
    setActive,
    filterOptions,
    setFilterOptions,
    options,
    setSelectedItem,
    items,
  } = useDropdownContext();

  const handleSelection = useCallback(() => {
    if (onClick) {
      onClick(items.find((item) => item.id === filterKey));
    }
    setValue(filterOptions[filterKey]);
    setSelectedItem(filterOptions[filterKey]);
    setActive(false);
    setFilterOptions(options); // reset options after selection
  }, [
    setActive,
    setValue,
    setFilterOptions,
    setSelectedItem,
    options,
    filterOptions,
    filterKey,
    onClick,
    items,
  ]);

  /**
   * only return items that have not been filtered out
   * ie each search drodown item has a filterkey
   * filteredOptions is an object of filterKey value pairs
   */
  return filterOptions[filterKey] ? (
    <div
      className="search-dropdown-item"
      value={children}
      onClick={handleSelection}
    >
      {children}
    </div>
  ) : null;
}

/*
 * assign Object a filter function
 */
Object.filter = (
  obj,
  predicate // utility function
) =>
  Object.keys(obj) // array of all keys
    .filter((key) => predicate(obj[key])) // array of filtered keys
    .reduce((res, key) => {
      res[key] = obj[key];
      return res;
    }, {}); // reduced to object of filtered key value pairs

export function SearchDropdown({ children, items, defaultValue }) {
  const [value, setValue] = useState(defaultValue || "");
  const [active, setActive] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedItem, setSelectedItem] = useState(defaultValue || "");
  const [filterOptions, setFilterOptions] = useState([]);
  const inputRef = useRef();
  const contentRef = useRef();

  // Using React top level api toArray to flatten children in cases where children contains array elements and single elements
  useEffect(() => {
    const opts = items.reduce(function (map, obj) {
      map[obj.id] = obj.text;
      return map;
    }, {});
    setFilterOptions(opts);
    setOptions(opts);
  }, [items]);

  useEffect(() => {
    if (!value) {
      setFilterOptions(options);
    }
  }, [value, options]);

  const handleClickOutside = useCallback(
    (event) => {
      if (inputRef.current && inputRef.current.contains(event.target)) {
        // if clicking input keep focus (do nothing)
        return;
      } else if (
        contentRef.current &&
        !contentRef.current.contains(event.target) // otherwise if clicking outside dropdown container close dropdown
      ) {
        setActive(false);
        setFilterOptions(options);
        const values = Object.values(filterOptions);
        if (
          values.length === 1 && // if input value matches an option when closing dropdown we keep that value
          values[0].toUpperCase() === value.toUpperCase()
        ) {
          setSelectedItem(values[0]);
          setValue(values[0]);
        } else {
          setValue(selectedItem);
        }
      }
    },
    [selectedItem, value, filterOptions, options]
  );

  const handleFocus = useCallback(() => {
    setActive(true);
  }, []);

  const searchFilter = useCallback(
    (val) => {
      setValue(val);
      const inputValue = val.toUpperCase();
      var filtered = Object.filter(
        options,
        (option) => option.toUpperCase().indexOf(inputValue) > -1
      );

      setFilterOptions(filtered); // filter through dropdown items (options) that include current input value
    },
    [options]
  );

  useEffect(() => {
    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside); // if dropdown is not active (closed) remove event listener to prevent registering unncessary clicks
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [active, handleClickOutside]);

  return (
    <DropdownContext.Provider
      value={{
        value,
        setValue,
        setActive,
        setOptions,
        filterOptions,
        setFilterOptions,
        options,
        setSelectedItem,
        items,
      }}
    >
      <div className="search-dropdown-wrapper">
        <input
          className="search-dropdown-input"
          onFocus={handleFocus}
          value={value}
          onChange={(e) => searchFilter(e.target.value)}
          placeholder="Select an option"
          ref={inputRef}
        />
        {active && (
          <div className="search-dropdown-content" ref={contentRef}>
            {children}
          </div>
        )}
      </div>
    </DropdownContext.Provider>
  );
}
SearchDropdown.Item = Item;

SearchDropdown.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, function (child) {
      if (child.type !== Item) {
        error = new Error(
          "`" + componentName + "` children should be of type `Item`."
        );
      }
    });
    return error;
  },
  items: PropTypes.array.isRequired,
};

Item.propTypes = {
  filterKey: PropTypes.string.isRequired,
};
