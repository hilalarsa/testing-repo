import Head from "../../components/elements/Head/Head";
import Footer from "../../components/elements/Footer/Footer";
import Navbar from "../../components/elements/Navbar/Navbar";
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
    <div className="container mx-auto bg-black-100">
      <Footer />
    </div>
  </>
);

export default Invest101Page;
