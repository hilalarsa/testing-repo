import Head from "../../components/elements/Head/Head";
import Footer from "../../components/elements/Footer/Footer";
import Navbar from "../../components/elements/Navbar/Navbar";
import NewsListHorizontal from "../../components/modules/NewsList/NewsListHorizontal";
import ShareOn from "../../components/modules/ShareOn/ShareOn";

const News = () => (
  <>
    <Head />
    <Navbar />
    <div>
      <img
        src="https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/2/1/8/0/23520812-2-eng-GB/Cropped-157381478320191115%20Singtel.jpg"
        alt="news-images"
        className="mb-4"
      />
      <div className="m-4">
        <p className="font-medium text-xs tracking-wide text-turqoise mb-1">
          Results
        </p>
        <p className="font-bold text-2xl leading-9 tracking-wide mb-1">
          DBS posts record quarterly net profit of $2.01 bil in 1Q21; maintains
          dividend of 18 cents per share
        </p>
        <p className="text-xs tracking-wide mb-4">
          <span className="font-medium mr-2">Felicia Tan</span>
          Fri, Apr 30, 2021 / 7:26 AM
        </p>
        <p className="font-normal text-sm leading-5 tracking-wider">
          DBS Group Holdings has reported net profit of $2.01 billion for the
          1QFY2021 ended March, making it the first time that the bank has
          crossed $2 billion in its quarterly earnings. The higher net profit
          was attributable to accelerated business momentum with faster loan
          growth, as well as record fee income. The 1QFY2021 net profit stood
          72% higher y-o-y compared to net profit of $1.17 billion for the
          1QFY2020 and nearly double the net profit of $1.01 billion in the
          4QFY2020. The bank has kept its dividend for the quarter at 18 cents
          per share, in line with the Monetary Authority of Singapore’s (MAS)
          guidance of a dividend payout cap of 60% that of FY2019. The scrip
          dividend scheme will also apply. In comparison, the bank maintained
          its dividend for the 1QFY2020 at 33 cents per share as it
          pre-emptively set aside $703 million in general reserves to buffer
          from potential risks from the potential Covid-19 outbreak at the time.
          <br />
          <br />
          Total income for the 1QFY2021 fell 4% y-o-y to $3.85 billion due to
          lower interest rates, which were slightly offset by strong business
          volume growth. The figure would’ve seen a 9% growth y-o-y had net
          interest margin (NIM) been stable. Total income for the quarter was,
          however, 18% higher q-o-q. NIM fell 0.37 percentage points y-o-y, but
          remained steady q-o-q at 1.49%. Net interest income (NII) fell 15%
          y-o-y to $2.11 billion due to the decline in NIM on global interest
          rate cuts, and moderated by loan growth of 7% y-o-y.
        </p>
        <p className="font-medium text-xs tracking-wide text-turqoise my-4">
          <span className="text-black">TAGS: </span>
          DBS GROUP HOLDINGS (DBS) - 1Q BUSINESS UPDATE - LAKSHMI VILAS BANK
          (LVB) - MONETARY AUTHORITY OF SINGAPORE’S (MAS) - SHENZHEN RURAL
          COMMERCIAL BANK
        </p>
        <div className="dashed-line-grey"></div>
        <ShareOn />
        <p className="font-bold text-base text-blue-100 mb-4">
          What to Read Next
        </p>
        <NewsListHorizontal imgSrc="https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/2/1/8/0/23520812-2-eng-GB/Cropped-157381478320191115%20Singtel.jpg" />
        <NewsListHorizontal imgSrc="https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/2/1/8/0/23520812-2-eng-GB/Cropped-157381478320191115%20Singtel.jpg" />
        <NewsListHorizontal imgSrc="https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/2/1/8/0/23520812-2-eng-GB/Cropped-157381478320191115%20Singtel.jpg" />
      </div>
    </div>
    <div className="container mx-auto bg-black-100">
      <Footer />
    </div>
  </>
);

export default News;
