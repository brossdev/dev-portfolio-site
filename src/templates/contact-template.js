import React from 'react';
import { navigate } from 'gatsby-link';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Contact Me - ${title}`} description={subtitle}>
      <Sidebar />
      <Contact title="Contact Me">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Contact>
    </Layout>
  );
};

export default NotFoundTemplate;
