import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import ContainerColumns from "@/components/Container/ContainerColumns/ContainerColumns";
import CreatePostBody from "@/components/CreatePost/CreatePostBody/CreatePostBody";
import CreatePostHeader from "@/components/CreatePost/CreatePostHeader/CreatePostHeader";
import CreatePostNav from "@/components/CreatePost/CreatePostNav/CreatePostNav";
import { UserContext } from "@/context/UserContext";
import Layout from "@/layout/Layout";
import { isObjectEmpty } from "@/utils/isObjectEmpty";
import { PostApi } from "@/api/PostApi";

type Props = {};

const CreatePost = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const { user } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (isObjectEmpty(user)) {
      router.push("/");
    }
  }, [user]);

  const publish = async () => {
    try {
      const post = {
        title,
        body,
        author: user._id,
      };
      const response = await PostApi.getInstance().create(post);
    } catch (error) {}
  };

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
      <Layout
        classes="bg-gray-100 pt-1 lg:pt-3"
        headerEl={<CreatePostNav body={body} setBody={setBody} />}
      >
        <div className="custom-container mx-auto xl:pt-12">
          <ContainerColumns classes="gap-4" isDoubleCols>
            <section>
              <Card>
                <CreatePostHeader title={title} setTitle={setTitle} />
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
