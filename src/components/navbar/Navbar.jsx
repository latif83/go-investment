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
      <header
        className={`${styles.header} pb-10 animate__animated animate__fadeInDownBig`}
      >
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
            <Link href="/">Solutions</Link>
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
              <Link href="/">Solutions</Link>
              <Link href="/">Insights</Link>
              <Link href="/">Technologies</Link>
              <button className={styles.loginBtn}>
                Login
              </button>
            </div>
          </div>}

        </nav>
        <div className={`${styles.banner} pt-16 pb-10 px-10`}>
          <div
            className={`${styles.bannerFlex} flex items-center gap-1 justify-evenly`}
          >
            <div style={{ flex: 1 }}>
              <h1
                className="text-gray-50 text-2xl font-black"
                style={{ fontSize: "3em", fontWeight: "bolder", lineHeight: 1 }}
              >
                Start Earning <br /> with GOI Today!!
              </h1>
              <p className="text-white mt-4">
                Explore our Listings today and investing.
              </p>
            </div>
            <div
              className={`${styles.flex} text-center flex justify-center items-center`}
            >
              <Image src="/main4.png" width={300} height={300} alt="image" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
