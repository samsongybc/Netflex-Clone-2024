// import React from 'react'
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import InstagramIcon from "@mui/icons-material/Instagram";


// import "./Footer.css"

// const Footer = () => {
//   return (
//     <div className='footer_outer_container'>
//       <div className='footer_inner_container'>
//         <div className="footer_icons">
//           <FacebookOutlinedIcon />
//           <YouTubeIcon />
//           <InstagramIcon/>
//         </div>
//         <div className="footer_data">
//           <div>
//             <ul>
//               <li>Audio Description</li>
//               <li>Investor Relations</li>
//               <li>Legal Notice</li>
//             </ul>
//           </div>

//           <div>
//             <ul>
//               <li>Help Center</li>
//               <li>Jobs</li>
//               <li>Cookie Performance</li>
//             </ul>
//           </div>
//           <div>
//             <ul>
//               <li>Gift Cards</li>
//               <li>Terms of Use</li>
//               <li>Corporate Information</li>
//             </ul>
//           </div>
//           <div>
//             <ul>
//               <li>Media Center</li>
//               <li>Privacy</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer



import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";


const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <a href="#" aria-label="Facebook" className="footer_icon_link">
            <FacebookOutlinedIcon />
          </a>
          <a href="#" aria-label="YouTube" className="footer_icon_link">
            <YouTubeIcon />
          </a>
          <a href="#" aria-label="YouTube" className="footer_icon_link">
            <InstagramIcon />
          </a>
        </div>

        <div className="footer_data">
          <div>
            <ul>
              <li>
                <a href="#">Audio Description</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <a href="#">Media Center</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_bottom">
          <button className="service_code_btn" type="button">
            Service Code
          </button>
          <p className="copy">© 2025 Netflex</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
