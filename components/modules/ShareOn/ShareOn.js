const ShareOn = () => (
  <>
    <p className="font-medium text-xs mb-1 mt-4">Share on:</p>

    <div className="grid grid-cols-4 gap-0 mb-8">
      <div className="col-span-1 w-full justify-self-center border rounded-l-md">
        <img
          className="my-2"
          src="/images/icons/twitter-black.svg"
          alt="twitter-logo"
          style={{
            width: 16,
            height: 16,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <div className="col-span-1 w-full justify-self-center border">
        <img
          className="my-2"
          src="/images/icons/facebook-black.svg"
          alt="facebook-logo"
          style={{
            width: 16,
            height: 16,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <div className="col-span-1 w-full justify-self-center border">
        <img
          className="my-2"
          src="/images/icons/linkedin-black.svg"
          alt="linkedin-logo"
          style={{
            width: 16,
            height: 16,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <div className="col-span-1 w-full justify-self-center border rounded-r-md">
        <img
          className="my-2"
          src="/images/icons/twitter-black.svg"
          alt="twitter-logo"
          style={{
            width: 16,
            height: 16,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
    </div>
  </>
);

export default ShareOn;
