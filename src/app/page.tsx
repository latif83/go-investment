import React from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { useParallax } from 'react-scroll-parallax';
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar"

function page() {
  // const { ref } = useParallax({ speed: 10 });

  return (
    <>
    <header
        className={`${styles.header} pb-10 animate__animated animate__fadeInDownBig`}
      >
        <Navbar />
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
    <div className={`${styles.container}`}>
      <div
        className={`${styles.bg} px-20 py-10 items-center gap-3 justify-evenly`}
      >
        <div>
          <h1 className={`${styles.content} font-bold`}>
            Save time. Get <span className="text-red-700">higher return</span>.{" "}
            <br /> Multiply wealth.
          </h1>
        </div>
        <div className={`${styles.btnCon} text-center`}>
          <button
            style={{
              color: "#1b3729",
              borderTopRightRadius: "10px",
              borderBottomLeftRadius: "10px",
              display: "inline-flex",
              width: "max-content",
              border: "2px solid #1b3729;",
            }}
            className={`${styles.mw} text-white rounded-sm p-2 items-center`}
          >
            FIND OUT MORE
            <FontAwesomeIcon
              className="pl-3"
              icon={faChevronRight}
              width={20}
            />
          </button>
        </div>
      </div>
      <div className={`${styles.mainCon} flex justify-between px-10 mt-10`}>
        <div className={`${styles.con} flex p-6`}>
          <Image
            className={styles.conImage}
            src="/im1.svg"
            alt="image"
            width={310}
            height={310}
          />
          <h1
            style={{
              fontSize: "1.5rem !important",
              fontWeight: "bold",
              color: "#f2f2f2",
            }}
          >
            Various assets
          </h1>
          <p className="mt-3" style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            exercitationem assumenda minus, enim sit, a cum dolor excepturi eum
            sunt doloribus quia doloremque aliquam dicta repellendus consectetur
            ratione eligendi? Quae.
          </p>
        </div>
        <div className={`${styles.con} flex p-6`}>
          <Image
            className={styles.conImage}
            src="/im2.svg"
            alt="image"
            width={310}
            height={310}
          />
          <h1
            style={{
              fontSize: "1.5rem !important",
              fontWeight: "bold",
              color: "#f2f2f2",
            }}
          >
            Market Analysis
          </h1>
          <p className="mt-3" style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            exercitationem assumenda minus, enim sit, a cum dolor excepturi eum
            sunt doloribus quia doloremque aliquam dicta repellendus consectetur
            ratione eligendi? Quae.
          </p>
        </div>

        <div className={`${styles.con} flex p-6`}>
          <Image
            className={styles.conImage}
            src="/im3.svg"
            alt="image"
            width={310}
            height={310}
          />
          <h1
            style={{
              fontSize: "1.5rem !important",
              fontWeight: "bold",
              color: "#f2f2f2",
            }}
          >
            Enhanced tools
          </h1>
          <p className="mt-3" style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            exercitationem assumenda minus, enim sit, a cum dolor excepturi eum
            sunt doloribus quia doloremque aliquam dicta repellendus consectetur
            ratione eligendi? Quae.
          </p>
        </div>
      </div>

      <div
        className={`${styles.about} mt-5 p-5 px-20 text-white`}
        style={{ backgroundColor: "black", lineHeight: 2 }}
      >
        <h1 style={{ fontWeight: "bold" }}>ABOUT US</h1>
        <hr style={{ width: 15 }} />
        <p className="mt-5">
          Go Investment is a premier investment company that is dedicated to
          providing a wide range of investment opportunities for individuals and
          institutions through public listing. We are a team of experienced
          investment professionals who have a passion for helping our clients
          achieve their financial goals. Our platform is designed to provide
          companies with a secure and user-friendly way to reach out to a large
          pool of investors and raise capital.
        </p>
        <h1 className="mt-10" style={{ fontWeight: "bold" }}>
          OUR MISSION
        </h1>
        <hr style={{ width: 20 }} />
        <p className="mt-5">
          Our ultimate goal is to enable enterprises regardless of their scale,
          to achieve their maximum potential by providing them access to the Bid
          market. We firmly believe that every business deserves equal
          opportunity to expand and flourish, and our user-friendly platform has
          been specially crafted to translate this belief into reality. Our main
          focus will be giving enterprises access to public listing on the bid
          market at a convinient cost.
        </p>
      </div>

      <div className={`${styles.waiting} py-10 text-center px-20`}>
       <div className={`${styles.waitingContainer}`}>
       <h1 style={{ fontWeight: "bold" }}>RESERVE A SPOT NOW</h1>
        <hr
          className="mt-2"
          style={{
            width: 40,
            margin: "auto",
            borderColor: "black",
            backgroundColor: "black",
          }}
        />
        <p className="mt-3">Be the next person on the waiting list.</p>

        <form className="flex mt-10 flex-col items-center">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full p-2 mb-5 border-2 border-gray-200 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full p-2 mb-5 border-2 border-gray-200 rounded-md"
          />
          <select
            name="selection"
            className="w-full p-2 mb-5 border-2 border-gray-200 rounded-md"
          >
            <option value="">what best describes you.</option>
            <option value="individual">Individual</option>
            <option value="company">Company</option>
            <option value="investor">Investor</option>
          </select>
          <button
            type="submit"
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Join Waiting List
          </button>
        </form>
        <footer className={`${styles.footer} mt-10`}>
          <div className={`${styles.footerFlex} flex justify-evenly`}>
          <Link
            href="/"
            className="flex-col justify-center"
            style={{ display: "inline-block", flex: 1 }}
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className={`${styles.image} object-contain`}
            />
            <p style={{textAlign:'left'}} className="logo_text font-black w-full m-0">Investment</p>
          </Link>
          <div className={styles.footerFlexCon} style={{flex:1,textAlign:'left'}}>
          <h1 style={{fontWeight:'bold'}}>Contact Us</h1>
              <p>+233 244 808 0452</p>

              <h1 className="mt-5" style={{fontWeight:'bold'}}>Locate Us</h1>
              <p>Accra, Ghana</p>
          </div>
          <div style={{flex:1}}>
            <h1>follow Us</h1>
            <div className="flex">
            <Link href="/" className="flex justify-center" style={{flex:1,textAlign:'center'}}>
            <FontAwesomeIcon
              className="pl-3"
              icon={faFacebook}
              width={50}
            />
            </Link>
            <Link href="/" className="flex justify-center" style={{flex:1,textAlign:'center'}}>
            <FontAwesomeIcon
              className="pl-3"
              icon={faTwitter}
              width={50}
            />
              </Link>
            <Link href="/" className="flex justify-center" style={{flex:1,textAlign:'center'}}>
            <FontAwesomeIcon
              className="pl-3"
              icon={faInstagram}
              width={50}
            />
            </Link>
            </div>
          </div>
          </div>
          <p className="mt-6">Copyright &copy; 2023 Go Investment</p>
</footer>
       </div>

      </div>
    </div>
    </>
  );
}

export default page;
