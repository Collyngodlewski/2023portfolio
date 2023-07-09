import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="header">
          <div className="header-container">
            <div className="row">
              <Link className="header-name" href="/">
                Collyn Godlewski
              </Link>

              <div className="menu-container">
                <div>Work</div>
                <div>About</div>
                <div>Contact</div>
              </div>
            </div>
            <div className="circle small">
              <p className="circle-text">scroll</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
