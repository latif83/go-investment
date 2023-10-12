"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBarsStaggered,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css";

function Navbar() {
  const [openMenu,setOpenMenu]=useState(false)
  return (
    <>

<nav
          style={{ margin: "auto" }}
          className={`${styles.nav} px-10 flex justify-between items-center nav pt-3`}
        >
          <Link
            href="/"
            className="flex-col flex-center"
            style={{ display: "inline-block", flex: 1 }}
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className={`${styles.image} object-contain`}
            />
            <p className="logo_text font-black w-full m-0">Investment</p>
          </Link>

          <div
            className={`${styles.links} flex justify-between`}
            style={{ flex: 2 }}
          >
            <Link href="/">Market Activity</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/">Insights</Link>
            <Link href="/">Technologies</Link>
          </div>

          <div
            style={{ flex: 1, textAlign: "right", fontWeight: "bold" }}
            className={styles.mbFlex}
          >
            <button style={{ display: "inline-flex" }} className="items-center">
              Join Now
              <FontAwesomeIcon
                className="pl-2"
                icon={faArrowRight}
                width="20"
              />
            </button>
            <button onClick={()=>{
              setOpenMenu(!openMenu)
            }}>
            <FontAwesomeIcon
              className={`${styles.menuIcon} hidden`}
              width={30}
              icon={faBarsStaggered}
            />
            </button>
          </div>

          {/* Desktop navigation */}
          {/* <div className="sm:flex hidden">
       
      </div> */}

          {/* Mobile Navigation */}
          {openMenu && <div className={`${styles.mbMenu} animate__animated animate__backInLeft`}>
            <div
              className="flex flex-col gap-10 h-100 w-full items-center text-center mt-5"
              style={{ fontSize: "1.5rem", position: "relative", zIndex: 99 }}
            >
              <div className="flex justify-between w-full items-center" style={{paddingLeft:20,paddingRight: 20}}>
              <button className={styles.regBtn}>
                Join Now
              </button>
              <button onClick={()=>{
              setOpenMenu(!openMenu)
            }}>
              <FontAwesomeIcon
                icon={faClose}
                width="20"
              />
              </button>
              </div>
              <Link href="/">Market Activity</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/">Insights</Link>
              <Link href="/">Technologies</Link>
              <button className={styles.loginBtn}>
                Login
              </button>
            </div>
          </div>}

        </nav>
    </>
  );
}

export default Navbar;
