import Head from "../../components/elements/Head/Head.js";
import Navbar from "../../components/elements/Navbar/Navbar.js";
import NewsListVertical from "../../components/modules/NewsList/NewsListVertical";

const News = () => (
  <>
    <Head />
    <Navbar />
    <div className="mt-4 px-4">
      <p className="font-bold text-base text-blue-100 mb-4">Market News</p>
      <NewsListVertical />
      <NewsListVertical />
    </div>
  </>
);

export default News;
