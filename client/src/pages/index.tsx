import ButtonLightPrimary from "@/components/Button/ButtonLightPrimary/ButtonLightPrimary";
import ButtonOutlinePrimary from "@/components/Button/ButtonOutlinePrimary/ButtonOutlinePrimary";
import Card from "@/components/Card/Card";
import ContainerColumns from "@/components/Container/ContainerColumns/ContainerColumns";
import Feed from "@/components/Feed/Feed";
import { UserContext } from "@/context/UserContext";
import Layout from "@/layout/Layout";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
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
        <div className="custom-container mx-auto">
          <ContainerColumns classes="gap-4">
            <aside className="custom-container-cols-left">
              <Card>
                <h4 className="font-semibold text-lg">
                  Devify is a great community of 124 developers
                </h4>
                <p className="text-gray-600">
                  Best place for developers to grow in their careers.
                </p>
                <ButtonOutlinePrimary href="/signup" className="block my-2">
                  Create Account
                </ButtonOutlinePrimary>
                <ButtonLightPrimary href="/login" className="block">
                  Login
                </ButtonLightPrimary>
              </Card>
            </aside>
            <section>
              <Feed />
            </section>
            <aside className="custom-container-cols-right">
              <Card>
                <h1>Info</h1>
              </Card>
            </aside>
          </ContainerColumns>
        </div>
      </Layout>
    </>
  );
}
