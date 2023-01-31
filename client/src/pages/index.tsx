import Card from '@/components/Card/Card';
import ContainerColumns from '@/components/Container/ContainerColumns/ContainerColumns';
import Layout from '@/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
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
                <Link
                  href="/signup"
                  className="block text-center my-2 border rounded px-3 py-2 text-indigo-800 border-indigo-800 cursor-pointer hover:bg-indigo-800 hover:text-white ease-in-out duration-300"
                >
                  Create Account
                </Link>
                <Link
                  href="/login"
                  className="block text-center rounded hover:bg-indigo-200 hover:text-indigo-800 ease-in-out duration-300 p-3"
                >
                  Login
                </Link>
              </Card>
            </aside>
            <section>
              <Card>
                <h1>Main</h1>
              </Card>
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
