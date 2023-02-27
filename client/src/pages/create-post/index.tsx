import { UserContext } from '@/context/UserContext';
import Layout from '@/layout/Layout';
import Head from 'next/head';
import React, { useContext } from 'react';

type Props = {};

const CreatePost = (props: Props) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Head>
        <title>Devify</title>
        <meta
          name="description"
          content="Devify is a social media platform for developers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classes="bg-gray-100" hasSpacing>
        <div className="custom-container mx-auto"></div>
      </Layout>
    </>
  );
};

export default CreatePost;
