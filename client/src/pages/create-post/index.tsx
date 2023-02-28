import ContainerColumns from '@/components/Container/ContainerColumns/ContainerColumns';
import CreatePostNav from '@/components/CreatePost/CreatePostNav/CreatePostNav';
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
      <Layout classes="bg-gray-100" headerEl={<CreatePostNav />}>
        <div className="custom-container mx-auto">
          <ContainerColumns classes="gap-4">
            <aside className="custom-container-cols-left border border-red-500"></aside>
            <section className="border border-blue-500">
              
            </section>
            <aside className="custom-container-cols-right  border border-green-500"></aside>
          </ContainerColumns>
        </div>
      </Layout>
    </>
  );
};

export default CreatePost;
