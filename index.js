import React from "react";
import ReactDOM from "react-dom";
import { SearchDropdown } from "./SearchDropdown/SearchDropdown";

const objs2 = [
  { id: "1", text: "Blue", value: "bl" },
  { id: "2", text: "Yellow", value: "ye" },
  { id: "3", text: "Green", value: "gr" },
  { id: "4", text: "Red", value: "re" },
  { id: "5", text: "Purple", value: "pu" },
];

ReactDOM.render(
  <React.StrictMode>
    <SearchDropdown items={objs2} defaultValue={"Scooby Doo"}>
      {objs2.map((obj) => (
        <SearchDropdown.Item key={obj.id} filterKey={obj.id}>
          <div>{obj.text}</div>
        </SearchDropdown.Item>
      ))}
    </SearchDropdown>
    <SearchDropdown items={objs2} defaultValue={"Scooby Doo"}>
      {objs2.map((obj) => (
        <SearchDropdown.Item key={obj.id} filterKey={obj.id}>
          <div>{obj.value}</div>
        </SearchDropdown.Item>
      ))}
    </SearchDropdown>
    <SearchDropdown items={objs2} defaultValue={"Scooby Doo"}>
      {objs2.map((obj) => (
        <SearchDropdown.Item key={obj.id} filterKey={obj.id}>
          <div>{obj.id}</div>
        </SearchDropdown.Item>
      ))}
    </SearchDropdown>
  </React.StrictMode>,
  document.getElementById("root")
);
