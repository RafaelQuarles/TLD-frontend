import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Logo from "~/images/TLD_nav-logo.png";

const Header = ({ setOpenModal }) => {
  return (
    <nav className="bg-white py-2 md:py-4 sticky top-0 z-50">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <Link className="text-lg w-60 " to="/">
            <img src={Logo} alt="TLD Logo" />
          </Link>
        </div>

        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
        >
          {/*           <Link
            className="p-2 lg:px-6 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            to="/"
          >
            Products
          </Link> */}
          {/*           <Link
            className="p-2 lg:px-6 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            to="/products"
          >
            Products
          </Link> */}
          <button
            className="p-2 lg:px-6 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            onClick={() => setOpenModal(true)}
          >
            Search Products
          </button>
          <Link
            className="p-2 lg:px-6 md:mx-2 text-white rounded bg-gray-600"
            to="/"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  siteName: PropTypes.string,
};

Header.defaultProps = {
  siteName: ``,
};

export default Header;
