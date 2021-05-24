import Head from "../../components/elements/Head/Head.js";
import Navbar from "../../components/elements/Navbar/Navbar.js";
import ButtonBorderless from "../../components/elements/Button/ButtonBorderless";
import NewsListVertical from "../../components/modules/NewsList/NewsListVertical";
import NewsListHorizontal from "../../components/modules/NewsList/NewsListHorizontal";

const News = () => (
  <>
    <Head />
    <Navbar />
    <div className="mt-4 px-4">
      <p className="font-bold text-base text-blue-100 mb-4">Market News</p>
      <NewsListVertical />
      <NewsListVertical />
      <NewsListHorizontal imgSrc="https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/2/1/8/0/23520812-2-eng-GB/Cropped-157381478320191115%20Singtel.jpg" />
      <NewsListHorizontal imgSrc="https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/2/1/8/0/23520812-2-eng-GB/Cropped-157381478320191115%20Singtel.jpg" />
      <NewsListHorizontal />
      <NewsListHorizontal />
      <ButtonBorderless text="View more news" />
    </div>
  </>
);

export default News;
