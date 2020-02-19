import React from 'react';
import { navigate } from 'gatsby-link';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Contact from '../components/Contact';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Contact Me - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Contact Me">
        <Contact></Contact>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
