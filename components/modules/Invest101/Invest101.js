import Link from "next/link";

const Invest101 = () => (
  <Link href="/invest-101/:slug">
    <div>
      <div className="cursor-pointer border rounded-lg p-2 mb-4">
        <img
          src="/images/invest-101/dbs.jpg"
          alt="invest-101-image"
          className="mb-4 rounded-lg"
        />
        <p className="font-medium text-xs text-turqoise mb-2">INVESTING 101</p>
        <p className="font-bold text-lg tracking-wide text-blue-110 mb-2">
          Investing with little money: Can I invest with less than $1000?
        </p>
        <div className="flex mb-4">
          <div className="flex-1">
            <p className="font-normal text-xs leading-3 text-black-40">
              1 Month Ago
            </p>
          </div>
          <div className="flex-1">
            <p className="font-normal text-xs leading-3 text-black-40 text-right">
              12 Min Read
            </p>
          </div>
        </div>
      </div>
      <div className="mb-4 dashed-line-grey"></div>
    </div>
  </Link>
);

export default Invest101;
