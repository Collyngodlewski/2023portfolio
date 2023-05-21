"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import "./home.css";
import "./globals.css";
import Header from "@/components/header";
import Help from "./help/page";
import Hero from "./hero/page";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <Help />
        </section>
        <section id="second">
          <Help />
        </section>
      </main>
    </>
  );
}
