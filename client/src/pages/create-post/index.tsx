import Card from '@/components/Card/Card';
import ContainerColumns from '@/components/Container/ContainerColumns/ContainerColumns';
import CreatePostBody from '@/components/CreatePost/CreatePostBody/CreatePostBody';
import CreatePostHeader from '@/components/CreatePost/CreatePostHeader/CreatePostHeader';
import CreatePostNav from '@/components/CreatePost/CreatePostNav/CreatePostNav';
import { UserContext } from '@/context/UserContext';
import Layout from '@/layout/Layout';
import Head from 'next/head';
import React, { useContext, useState } from 'react';

type Props = {};

const CreatePost = (props: Props) => {
  const { user } = useContext(UserContext);
  const [body, setBody] = useState<string>('');
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
      <Layout classes="bg-gray-100 pt-1 lg:pt-3" headerEl={<CreatePostNav />}>
        <div className="custom-container mx-auto xl:pt-12">
          <ContainerColumns classes="gap-4" isDoubleCols>
            <section>
              <Card>
                <CreatePostHeader />
                <CreatePostBody text={body} setText={setBody} />
              </Card>
            </section>
            <aside className="custom-container-2-cols-aside  border border-green-500"></aside>
          </ContainerColumns>
        </div>
      </Layout>
    </>
  );
};

export default CreatePost;
