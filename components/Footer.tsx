import React, { ReactElement } from "react";
import Link from "next/link";

const Footer = (): ReactElement => {
  return (
    <footer className="block py-4 h-24 w-full">
      <div className="container mx-auto px-4">
        <hr className="mb-4 border-b-1 border-blueGray-200" />
        <div className="flex flex-wrap items-center md:justify-between justify-center mx-5 lg:mx-10">
          <div className="w-full md:w-4/12 px-4">
            <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://gakux.net/"
                className="text-sm font-semibold py-1 underline decoration-2 decoration-orange-400 hover:text-orange-400"
                target="_blank"
                rel="noreferrer"
              >
                Gakux
              </a>
            </div>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <ul className="flex list-none md:justify-end justify-center">
              <li>
                <Link href="/">
                  <a
                    className="text-sm font-semibold block py-1 px-3 underline decoration-2 decoration-orange-400 hover:text-orange-400"
                  >Top</a>
                </Link>
              </li>
              <li>
                <a
                  href="https://twitter.com/takane_x"
                  className="text-sm font-semibold block py-1 px-3 underline decoration-2 decoration-orange-400 hover:text-orange-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <a
                    className="text-sm font-semibold block py-1 px-3 underline decoration-2 decoration-orange-400 hover:text-orange-400"
                  >Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;