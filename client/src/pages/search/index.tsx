import ButtonLightPrimary from "@/components/Button/ButtonLightPrimary/ButtonLightPrimary";
import ContainerColumns from "@/components/Container/ContainerColumns/ContainerColumns";
import Layout from "@/layout/Layout";
import { isObjectEmpty } from "@/utils/isObjectEmpty";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {};

const Search = (props: Props) => {
  const [query, setQuery] = useState("relevant");
  const router = useRouter();
  const { q } = router.query;
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
      <Layout className="bg-gray-100" hasSpacing>
        <div className="custom-container mx-auto">
          <header className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Search Results for {q}</h2>
            <ul className="flex gap-1">
              <li>
                <ButtonLightPrimary>Most Relevant</ButtonLightPrimary>
              </li>
              <li>
                <ButtonLightPrimary>Newest</ButtonLightPrimary>
              </li>
              <li>
                <ButtonLightPrimary>Oldest</ButtonLightPrimary>
              </li>
            </ul>
          </header>

          <ContainerColumns className="gap-4" isDoubleCols>
            <section></section>
            <aside>
              <ul>
                <ButtonLightPrimary>Posts</ButtonLightPrimary>
              </ul>
              <ul>
                <ButtonLightPrimary>Tags</ButtonLightPrimary>
              </ul>
              <ul>
                <ButtonLightPrimary>Comments</ButtonLightPrimary>
              </ul>
              <ul>
                <ButtonLightPrimary>My Post Only</ButtonLightPrimary>
              </ul>
            </aside>
          </ContainerColumns>
        </div>
      </Layout>
    </>
  );
};

export default Search;
