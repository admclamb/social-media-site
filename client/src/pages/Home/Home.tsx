import React from 'react';
import CreatePostFeed from '../../components/Create/CreatePostFeed/CreatePostFeed';
import Post from '../../components/Post/Post';
import './Home.css';
type Props = {};

const Home = (props: Props) => {
  return (
    <main className="home">
      <nav className="home--nav"></nav>
      <section className="home--main">
        <CreatePostFeed />
        <Post />
        <Post />
        <Post />
      </section>
      <aside className="home--aside"></aside>
    </main>
  );
};

export default Home;
