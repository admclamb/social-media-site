import React from 'react';
import CreatePostFeed from '../../components/Create/CreatePostFeed/CreatePostFeed';
import QuestionFeed from '../../components/Question/QuestionFeed/QuestionFeed';
import SideNav from '../../components/SideNav/SideNav';
import './Home.css';
type Props = {};

const Home = (props: Props) => {
  return (
    <main className="home">
      <nav className="home--nav">
        <SideNav />
      </nav>
      <section className="home--main">
        <CreatePostFeed />
        <QuestionFeed />
      </section>
      <aside className="home--aside"></aside>
    </main>
  );
};

export default Home;
