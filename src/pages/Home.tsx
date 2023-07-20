import Feed from "../components/Feed";

const Home = ({posts}: any) => {
  return (
    <div>
      <Feed posts={ posts } />
    </div>
  );
};

export default Home;
