import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";

import { ReactComponent as Logo } from "../../logo.svg";
import { ItemType } from "../../types/common";

import "./Header.css";

interface HeaderProps {
  selectedType: ItemType;
  onItemClick: (itemType: ItemType) => void;
}

function Header(props: HeaderProps) {
  const { selectedType, onItemClick } = props;

  return (
    <div className="header">
      <Logo />
      <div
        className="header-item"
        aria-selected={selectedType === "person"}
        onClick={() => onItemClick("person")}
      >
        <FaUserAlt />
        <span>Person</span>
      </div>
      <div
        className="header-item"
        aria-selected={selectedType === "product"}
        onClick={() => onItemClick("product")}
      >
        <FaProductHunt />
        <span>Product</span>
      </div>
    </div>
  );
}

export default Header;
