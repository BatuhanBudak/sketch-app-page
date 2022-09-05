import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import Ribbon from "../components/Ribbon";
const Home: NextPage = () => {
  return (
    <>
      <Ribbon />
      <Header />
      <MainContent />
      <Footer />
      <div className="page-overlay"></div>
    </>
  );
};

export default Home;
