import Head from "../../components/elements/Head/Head.js";
import Navbar from "../../components/elements/Navbar/Navbar.js";
import Invest101 from "../../components/modules/Invest101/Invest101";
import ShareOn from "../../components/modules/ShareOn/ShareOn";

const Invest101Page = () => (
  <>
    <Head />
    <Navbar />
    <div>
      <img
        src="/images/invest-101/dbs.jpg"
        alt="news-images"
        className="mb-4"
      />
      <div className="m-4">
        <p className="font-medium text-xs tracking-wide text-turqoise mb-1">
          Investing 101
        </p>
        <p className="font-bold text-2xl leading-9 tracking-wide mb-1">
          Gen Z Singaporeans found to be better at saving money and budgeting
          than millennials
        </p>
        <p className="text-xs tracking-wide mb-4">
          <span className="font-medium mr-2">Felicia Tan</span>
          Fri, Apr 30, 2021 / 7:26 AM
        </p>
        <p className="font-normal text-sm leading-5 tracking-wider">
          About 85% of Singaporean Gen Zs say they began saving before the age
          of 22, while nearly half the amount (41%) of millennials did the same,
          according to a new survey by Singsaver. The survey, which was
          conducted from August to September, comprised the responses of some
          1,000 Singaporeans from both demographics. When it comes to sticking
          to their planned budget, about 65% of Gen Zs do so “often” and “very
          often” compared to just 56% of millennials. However, more millennials
          (47%) are better at budgeting, saving, and investing on the whole than
          Gen Zs (35%). This may be possibly due to their added responsibilities
          and pandemic-induced economic uncertainty, says the comparison site.
          When asked about their biggest challenges when managing their personal
          finances, 38% of millennials feel they do not have adequate knowledge
          and guidance when doing so, compared to 26% of their Gen Z
          counterparts. According to the survey, millennials are considered to
          be aged from 24 to 39 years old, where a larger proportion are
          presumed to have already started work. This is compared to Gen Zs who
          are aged between the school-going ages of 18 and 23. The economic
          uncertainty this year has also prompted 48% of Gen Zs and millennials
          to do more research on personal finance.
          <br />
          <br />
          The improved knowledge could be why 71% of those surveyed are
          confident that they have enough savings to tide them through three to
          six months of expenses should the need arise. On investing, eight in
          10 of both demographics say they invest, but only 60% of these
          respondents are “new to” or have a “basic understanding” of investing.
          However, nearly two-thirds (57%) of the total surveyed still use a
          basic, low-yield savings account. Notably, most Gen Zs (39%) cited
          retirement as the reason for their savings, while millennials (45%)
          largely sought financial freedom. Both Gen Zs and millennials prefer
          to invest in bonds and stocks (59%), real estate (41%), and mutual
          funds (35%) as their top three investment products. “As we look
          towards recovery, it is crucial for young Singaporeans to become more
          financially aware as they adapt to a new environment,” says Prashant
          Aggarwal, interim country manager of Singsaver. “For millennials,
          whose concerns often lie in being sandwiched between taking care of
          their family and their parents, it is important to be forward-looking
          and plan for unforeseen circumstances. Meanwhile, for Gen Zs who are
          just kick starting their career, there is a need to adapt their
          mindsets and attitudes towards personal finance by consistently
          adjusting their spending habits,” he adds.
        </p>
        <p className="font-medium text-xs tracking-wide text-turqoise my-4">
          <span className="text-black">TAGS: </span>
          SINGSAVER - PERSONAL FINANCE - GENERATION Z (GEN Z) - MILLENNIAL
          GENERATION
        </p>
        <div className="dashed-line-grey"></div>
        <p className="font-bold text-base text-blue-100 mb-4">
          What to Read Next
        </p>
        <ShareOn />
        <Invest101 />
        <Invest101 />
        <Invest101 />
      </div>
    </div>
  </>
);

export default Invest101Page;
