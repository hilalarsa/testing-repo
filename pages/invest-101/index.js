import Head from "../../components/elements/Head/Head.js";
import Navbar from "../../components/elements/Navbar/Navbar.js";
import Button from "../../components/elements/Button/Button";
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
      <Button
        text="View more articles"
        buttonClassName="w-full mb-2 py-2 bg-turqoise-100"
        textClassName="text-center font-medium text-xs text-turqoise"
      />
    </div>
  </>
);

export default Invest101Page;
