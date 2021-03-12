import React from "react";

const SidebarOption = ({ Icon, title, number, selected }) => {
  return (
    <div className={`sidebaroption ${selected && "sidebar--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOption;
