import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faChartBar,
  faSearch,
  faShield,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";
import styles from "./page.module.css"
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className={`${styles.solutionHeader} animate__animated animate__backInUp pb-8`}>
        <Navbar />
        <div className={`${styles.container} text-white mt-8 mx-auto text-center`}>
          <h3>End-To-End Capital Raising Solutions</h3>
          <h1
            className="text-bold text-gray-200"
            style={{ fontSize: "2.5em", fontWeight: "bolder", lineHeight: "3em" }}
          >
            List on GOI
          </h1>
          <div className="flex justify-center">
            <button className="bg-red-500 rounded mr-5 p-4 shadow-lg">
              Contact Us
            </button>
            <button className="bg-blue-500 rounded p-4 shadow-lg">
              View Listings Guide
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.contentContainer} py-10`}>
      <div className={`${styles.container} m-auto`}>
        <p style={{ lineHeight: "1.5em" }}>
          At GOI we understand the importance of finding practical and effective
          solutions to the challenges you face. Whether you're looking for
          answers to everyday problems or seeking innovative approaches to
          complex issues, we're here to help. Our Solutions Sector is dedicated
          to providing you with valuable insights, expert advice, and actionable
          steps to overcome obstacles and achieve your goals.
        </p>
        <h1 className="mt-4 text-red-500" style={{ fontWeight: "bold" }}>
          Explore the diverse range of solutions we offer:
          <hr className="bg-red-500" style={{ width: 30, height: 10,border:'none' }} />
        </h1>
        <div className="grid mt-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10">
              {/* Feature 1: Foreign Countries Listing */}
              <div className="p-4 border rounded shadow-md">
                <div
                  className="mb-4 pb-2 flex items-center"
                  style={{ borderBottom: "2px solid" }}
                >
                  <FontAwesomeIcon
                    icon={faGlobe}
                    width={20}
                    color="red"
                    className="mr-2"
                  />{" "}
                  <span style={{ fontSize: "1em" }}>
                    Foreign Countries Listing
                  </span>
                </div>
                <div className="bg-grey-500">
                  <p>
                    While we have established a strong presence in the domestic
                    market, you might be curious as to why we haven't yet
                    expanded our operations to include listings from foreign
                    countries. Allow us to shed light on our rationale:
                  </p>
                </div>
              </div>

              {/* Feature 2: Strengthening the Local Market */}
              <div className="p-4 border rounded shadow-md">
                <div
                  className="mb-4 pb-2 flex items-center"
                  style={{ borderBottom: "2px solid" }}
                >
                  <FontAwesomeIcon
                    icon={faChartBar}
                    width={20}
                    color="red"
                    className="mr-2"
                  />{" "}
                  <span style={{ fontSize: "1em" }}>
                    Strengthening the Local Market
                  </span>
                </div>
                <p>
                  At Go Investment, we firmly believe in nurturing and
                  strengthening the local market. By prioritizing domestic
                  listings, we actively contribute to the development of local
                  businesses, fostering entrepreneurship, and generating
                  employment opportunities within our own country. This approach
                  enables us to support the growth of our economy and lay a
                  solid foundation for future international expansion.
                </p>
              </div>

              {/* Feature 3: Conducting Extensive Market Research */}
              <div className="p-4 border rounded shadow-md">
                <div
                  className="mb-4 pb-2 flex items-center"
                  style={{ borderBottom: "2px solid" }}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    width={20}
                    color="red"
                    className="mr-2"
                  />{" "}
                  <span style={{ fontSize: "1em" }}>
                    Conducting Extensive Market Research
                  </span>
                </div>
                <p>
                  Expanding into foreign markets necessitates a comprehensive
                  understanding of each unique market's dynamics, risks, and
                  opportunities. At Go Investment, we are committed to
                  conducting thorough market research and analysis before
                  venturing into international listings. This approach allows us
                  to make informed decisions, identify potential challenges, and
                  devise effective strategies to navigate diverse international
                  markets successfully.
                </p>
              </div>

              {/* Feature 4: Building Investor Confidence */}
              <div className="p-4 border rounded shadow-md">
                <div
                  className="mb-4 pb-2 flex items-center"
                  style={{ borderBottom: "2px solid" }}
                >
                  <FontAwesomeIcon
                    icon={faShield}
                    width={20}
                    color="red"
                    className="mr-2"
                  />{" "}
                  <span style={{ fontSize: "1em" }}>
                    Building Investor Confidence
                  </span>
                </div>
                <p>
                  Building trust and confidence among investors is paramount to
                  our success. By focusing on domestic listings, we have had the
                  opportunity to develop strong relationships with local
                  investors, gaining their trust through our reliable and
                  transparent operations. This investor confidence serves as a
                  solid foundation upon which we can expand our operations to
                  foreign markets with credibility and trustworthiness.
                </p>
              </div>

              {/* Feature 5: Developing Technological Infrastructure */}
              <div className="p-4 border rounded shadow-md">
                <div
                  className="mb-4 pb-2 flex items-center"
                  style={{ borderBottom: "2px solid" }}
                >
                  <FontAwesomeIcon
                    icon={faCogs}
                    width={20}
                    color="red"
                    className="mr-2"
                  />{" "}
                  <span style={{ fontSize: "1em" }}>
                    Developing Technological Infrastructure
                  </span>
                </div>
                <p>
                  Providing a seamless investing experience to our investors is
                  a top priority for Go Investment. Before venturing into
                  foreign listings, we are investing in advanced technological
                  infrastructure and finance systems. By ensuring our platform
                  can handle increased investing volumes, process transactions
                  efficiently, and deliver real-time data, we guarantee a secure
                  and efficient investing experience for all our investors.
                </p>
              </div>

              {/* Feature 6: Long-Term Growth Strategy */}
              <div className="p-4 border rounded shadow-md">
                <div
                  className="mb-4 pb-2 flex items-center"
                  style={{ borderBottom: "2px solid" }}
                >
                  <FontAwesomeIcon
                    icon={faChartBar}
                    width={20}
                    color="red"
                    className="mr-2"
                  />{" "}
                  <span style={{ fontSize: "1em" }}>
                    Long-Term Growth Strategy
                  </span>
                </div>
                <p>
                  Go Investment's decision to prioritize the domestic market
                  aligns with our long-term growth strategy. By establishing a
                  robust presence locally, we create a solid base from which to
                  expand internationally. This deliberate approach allows us to
                  build a strong foundation, accumulate valuable experience, and
                  be better prepared to navigate the complexities of foreign
                  markets when the time is right.
                </p>
              </div>
            </div>
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
            <div className="flex mt-2">
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
  );
}

export default page;
