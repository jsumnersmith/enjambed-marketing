import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import LogoStrip from '../components/LogoStrip';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';


const Page = () => (
  <Layout>
    <Header />
    <LogoStrip />
    <Features />
    <Pricing />
    <Footer />
  </Layout>
)

export default Page;