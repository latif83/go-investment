import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <header className={`${styles.header} pb-10`}>
        <nav
          className={`${styles.nav} px-10 flex justify-between items-center nav container pt-3`}
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

          <div className={`${styles.links} text-center`} style={{ flex: 1 }}>
            <Link href="/">About US</Link>
            <Link className="pl-4" href="/">
              Contact US
            </Link>
          </div>

          <div style={{ flex: 1, textAlign: "right" }} className={styles.mbFlex}>
            <button style={{ display: "inline-flex" }} className="items-center">
              Join Now
              <FontAwesomeIcon
                className="pl-2"
                icon={faArrowRight}
                width="20"
              />
            </button>
            <FontAwesomeIcon className={`${styles.menuIcon} hidden`} width={30} icon={faBarsStaggered} />
          </div>

          {/* Desktop navigation */}
          {/* <div className="sm:flex hidden">
       
      </div> */}

          {/* Mobile Navigation */}
          {/* <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="Profile"
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            />

            {toggleDropdown && (
              <div className="dropdown">
                {" "}
                <Link
                  href="/profile"
                  onClick={() => setToggleDropdown(false)}
                  className="dropdown_link"
                >
                  My Profile
                </Link>{" "}
                {" "}
                <Link
                  href="/create-prompt"
                  onClick={() => setToggleDropdown(false)}
                  className="dropdown_link"
                >
                  Create Prompt
                </Link>{" "}
                <button type="button" onClick={()=>{setToggleDropdown(false); signOut();}} className="mt-5 w-full black_btn">
                    Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>;
              })}
          </>
        )}
      </div> */}
        </nav>
        <div className={`${styles.banner} pt-16 pb-10 px-10`}>
          <div className={`${styles.bannerFlex} flex items-center gap-1 justify-evenly`}>
            <div style={{flex:1}}>
              <h1
                className="text-gray-50 text-2xl font-black"
                style={{ fontSize: "3em", fontWeight: "bolder",lineHeight:1 }}
              >
                New Standard <br /> in stock broker.
              </h1>
              <p className="text-white mt-4">
                Trade forex, commodities, synthetic and stock indices from a
                single account.
              </p>
            </div>
            <div className={`${styles.flex} text-center flex justify-center items-center`}>
              <Image src="/main4.png" width={300} height={300} alt="image" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
