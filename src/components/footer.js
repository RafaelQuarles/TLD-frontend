import React from "react";
import { Link } from "gatsby";

import github from "~/images/github.svg";
import twitter from "~/images/twitter.svg";
import facebook from "~/images/facebook.svg";
import Logo from "~/images/TLD_nav-logo.png";

const Footer = () => {
  return (
    <footer className="flex justify-between pt-4 pb-4">
      <Link className="text-lg w-60 hidden md:block" to="/">
        <img src={Logo} alt="strapi catalog logo" />
      </Link>

      <p className="text-sm font-semibold text-gray-600">
        © Top Line Distributors 2021
      </p>
      <div className="flex gap-3 ml-4">
        <a href="https://twitter.com/" className="max-w-xs ml-4">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="https://facebook.com/" className="ml-3">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://github.com/" className="ml-3">
          <img src={github} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
