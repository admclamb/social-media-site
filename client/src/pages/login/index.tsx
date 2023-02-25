import React, { useContext, useState } from 'react';
import Head from 'next/head';
import Card from '@/components/Card/Card';
import ErrorAlert from '@/errors/ErrorAlert';
import { Error } from '@/ts/types/Error';
import Layout from '@/layout/Layout';
import { UserApi } from '@/api/UserApi';
import { UserContext } from '@/context/UserContext';
import { storage } from '@/utils/Storage';
import { useRouter } from 'next/router';
type Props = {};

const Login = (props: Props) => {
  const [error, setError] = useState<Error>({});
  const [login, setLogin] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const [submitText, setSubmitText] = useState<string>('Continue');
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  const handleChange = ({ target: { value, id } }) => {
    setLogin((curr) => {
      return {
        ...curr,
        [id]: value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      setError({});
      setSubmitText('Loading...');
      const response = await UserApi.getInstance().login(login);
      console.log(response);
      storage.local.set('refresh_token', response.refresh_token);
      setUser(response.user);
      router.push('/');
    } catch (error: any) {
      setError({ message: error.message });
    } finally {
      setSubmitText('Continue');
    }
  };
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <Layout classes="bg-gray-100" hasSpacing>
        <Card className="custom-form-container mx-auto" padding="p-5">
          <ErrorAlert error={error} className="mb-2" />
          <h1 className="text-center font-semibold text-lg">
            Welcome Back to Devify
          </h1>
          <form>
            <div className="flex flex-col gap-4">
              <div className="form-group flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={login.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="Email"
                  className="border rounded p-2"
                />
              </div>
              <div className="form-group flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={login.password}
                  onChange={handleChange}
                  id="password"
                  placeholder="Enter Your Password"
                  className="border rounded p-2"
                />
              </div>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="py-2 px-3 bg-indigo-800 text-white rounded w-[8rem]"
                >
                  {submitText}
                </button>
              </div>
            </div>
          </form>
        </Card>
      </Layout>
    </>
  );
};

export default Login;
