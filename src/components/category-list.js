import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Image from "~/components/image";
import Card from "~/components/styled/card";

const CategoryList = ({ categories }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="styleWave"
    >
      <path
        fill-opacity="1"
        d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,213.3C840,213,960,171,1080,149.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
    {categories.map(({ node }) => {
      return (
        <Card key={node.id}>
          <Link to={`/categories/${node.slug}`}>
            <Image
              alt="Category Image"
              className="rounded-t-md border-gray-200	 border-b"
              image={node.image}
            />
            <p className="px-4 py-6">{node.name}</p>
          </Link>
        </Card>
      );
    })}
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.array,
};

export default CategoryList;
