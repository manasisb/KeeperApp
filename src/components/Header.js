import React from "react";
import BookIcon from '@material-ui/icons/Book';
import Search from "./Search";


function Header(props) {
  return (
    <div>
    <header>
      <h1>
        <BookIcon />
        Keeper
      </h1>
       <Search FSearch = {props.Search}/>
    </header>
      </div>
  );
}

export default Header;
