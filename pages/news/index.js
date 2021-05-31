import Head from "../../components/elements/Head/Head";
import Footer from "../../components/elements/Footer/Footer";
import Navbar from "../../components/elements/Navbar/Navbar";
import Button from "../../components/elements/Button/Button";
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
      <Button
        text="View more news"
        buttonClassName="w-full mb-2 py-2 bg-turqoise-100"
        textClassName="text-center font-medium text-xs text-turqoise"
      />
    </div>
    <div className="container mx-auto bg-black-100">
      <Footer />
    </div>
  </>
);

export default News;
