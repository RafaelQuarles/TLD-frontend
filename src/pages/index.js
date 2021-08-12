import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import CategoryList from "~/components/category-list";
import PageHeading from "~/components/styled/page-heading";
import Hero from "../components/hero";
import Contact from "../components/contact";

const IndexPage = ({ data: { allStrapiCategory } }) => {
  const categories = allStrapiCategory.edges;
  const seo = { title: "Categories" };
  return (
    <Layout>
      <SEO seo={seo} />
      <Hero />
      <PageHeading>Services</PageHeading>
      <CategoryList categories={categories} />
      <Contact />
    </Layout>
  );
};

export const query = graphql`
  query CategoriesQuery {
    allStrapiCategory {
      edges {
        node {
          name
          id
          slug
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  aspectRatio: 1.3
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
