import Head from "../../components/elements/Head/Head.js";
import Navbar from "../../components/elements/Navbar/Navbar.js";
import ButtonBorderless from "../../components/elements/Button/ButtonBorderless";
import Invest101 from "../../components/modules/Invest101/Invest101";

const Invest101Page = () => (
  <>
    <Head />
    <Navbar />
    <div className="mt-4 px-4">
      <p className="font-bold text-base text-blue-100 mb-4">Investing 101</p>
      <Invest101 />
      <Invest101 />
      <Invest101 />
      <Invest101 />
      <Invest101 />
      <Invest101 />
      <ButtonBorderless text="View more articles" />
    </div>
  </>
);

export default Invest101Page;
