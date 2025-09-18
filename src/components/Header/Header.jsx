// import React from 'react'
// import "./Header.css"
// import SearchIcon from "@mui/icons-material/Search";
// const Header = () => {
//   return (
//     <div className="header_outer_container">
//       <div className="header_container">
//         <div className="header_left">
//           <ul>
//             <li>Netflex</li>
//             <li>Home</li>
//             <li>Movies</li>
//             <li>Latest</li>
//             <li>MyList</li>
//             <li>Browse by Language</li>
//           </ul>
//         </div>

//         <div className="header_right">
//           <ul>
//             <li>
//               <SearchIcon />
//             </li>
//             <li>NotificationNoneIcon</li>
//             <li>AccountBoxIcon</li>
//             <li>ArrowDropDownUcon</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header


import React from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li className="logo">Netflex</li>
            <li>Home</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li>
              <button className="icon_btn" aria-label="Search">
                <SearchIcon />
              </button>
            </li>
            <li>
              <button className="icon_btn" aria-label="Notifications">
                <NotificationsNoneIcon />
              </button>
            </li>
            <li>
              <button className="icon_btn" aria-label="Account">
                <AccountBoxIcon />
              </button>
            </li>
            <li>
              <button className="icon_btn" aria-label="More">
                <ArrowDropDownIcon />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
