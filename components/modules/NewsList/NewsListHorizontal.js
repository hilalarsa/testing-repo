import Link from "next/link";
import PropTypes from "prop-types";

const NewsListVertical = ({ imgSrc }) => (
  <Link href="/news/:slug">
    <div className="cursor-pointer">
      <div className="grid grid-cols-3 gap-2">
        <div className={`${imgSrc ? "col-span1" : "hidden"}`}>
          <img src={imgSrc} alt="news-images" className="rounded mb-2" />
        </div>
        <div className={`${imgSrc ? "col-span-2" : "col-span-3"}`}>
          <p className="font-medium text-xs leading-4 text-turqoise mb-2">
            CATEGORY
          </p>
          <p className="font-medium text-base text-black mb-2">
            Singtel enters MOU with Hyundai to collaborate on smart
            manufacturing, EV battery
          </p>
          <div className="flex mb-4">
            <div className="flex-1">
              <p className="font-normal text-xs leading-3 text-black-600">
                1 Month Ago
              </p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-xs leading-3 text-black-600 text-right">
                12 Min Read
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 dashed-line-grey"></div>
    </div>
  </Link>
);

NewsListVertical.propTypes = {
  imgSrc: PropTypes.string,
};

export default NewsListVertical;
