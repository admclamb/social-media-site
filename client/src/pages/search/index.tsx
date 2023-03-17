import ContainerColumns from "@/components/Container/ContainerColumns/ContainerColumns";
import Layout from "@/layout/Layout";
import { isObjectEmpty } from "@/utils/isObjectEmpty";
import Head from "next/head";
import React from "react";

type Props = {};

const Search = (props: Props) => {
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
        <div className="custom-container mx-auto">
          <ContainerColumns classes="gap-4">
            <aside className="custom-container-cols-left"></aside>
            <section></section>
            <aside className="custom-container-cols-right"></aside>
          </ContainerColumns>
        </div>
      </Layout>
    </>
  );
};

export default Search;
