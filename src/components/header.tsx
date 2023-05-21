import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [menuClick_class, setMenuClickClass] = useState("menu-btn unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClickClass("menu-btn clicked");
      setMenuClass("menu visible");
    } else {
      setMenuClickClass("menu-btn unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <header>
        <nav>
          <div className="header">
            <div className="header-container">
              <div className="row">
                <Link className="header-name" href="/">
                  COLLYN
                </Link>

                {/* <div className={menuClick_class} onClick={updateMenu}>
                  MENU
                </div> */}
                <div className="menu-container">
                  <div>WORK</div>
                  <div>ABOUT</div>
                  <div>CONTACT</div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* <div className={menu_class}>
        <div className="menu-container">
          <div className="menu-item">
            <Link href="/">Home</Link>
          </div>
          <div className="menu-item">Project</div>
          <div className="menu-item">About</div>
        </div>
      </div> */}
    </motion.div>
  );
}
