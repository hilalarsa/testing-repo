import Link from "next/link";

const NewsListVertical = () => (
  <Link href="/news/:slug">
    <div className="cursor-pointer">
      <img
        src="https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/2/1/8/0/23520812-2-eng-GB/Cropped-157381478320191115%20Singtel.jpg"
        alt="news-images"
        className="rounded mb-2"
      />
      <p className="font-bold text-xs text-turqoise mb-2">
        DEALS, JOINT VENTURES & ALLIANCES
      </p>
      <p className="font-medium text-base text-black mb-2 leading-5">
        Singtel enters MOU with Hyundai to collaborate on smart manufacturing,
        EV battery
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
      <div className="mb-4 dashed-line-grey"></div>
    </div>
  </Link>
);

export default NewsListVertical;
