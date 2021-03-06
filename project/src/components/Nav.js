import React from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";
import { Search, AccountCircle } from "@material-ui/icons";
import default_Img from "./imgs/dinosaur.png";

function Nav({ connectWallet, account }) {
  return (
    <div id="nav-body">
      <span className="title">
        <img id="logo" src={default_Img} />
        <span className="name">
          <Link to="/" style={{ textDecoration: "none" }}>
            Dinosaur
          </Link>
        </span>
      </span>
      <div className="search-container">
        <Search fontSize="large" style={{ paddingTop: "10px" }} />
        <input
          className="searchBox"
          type="text"
          placeholder="  Search items, collections, and accounts"
        ></input>
      </div>
      <div id="menu">
        <span id="account">
          <Link to="/nfts" style={{ textDecoration: "none" }}>
            <AccountCircle />
          </Link>
        </span>
        <span id="wallet">
          <ConnectWallet
            className="navIcon"
            connectWallet={connectWallet}
            account={account}
          />
        </span>
      </div>
    </div>
  );
}

export default Nav;
