import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="https://picsum.photos/id/400/2000/2000" alt=" "
      />
    </Layout>
  );
};
export default IndexPage;