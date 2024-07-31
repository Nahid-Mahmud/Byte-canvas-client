import BannerImage from "../../assets/cool-background.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className="hero-overlay dark:bg-opacity-40 bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-[40rem]">
          <h1 className="mb-5 text-5xl font-bold">Welcome to ByteCanvas</h1>
          <p className="mb-5">
            Unlock the World of Innovation: Explore Google, Xiaomi, and Apple with Us! Your Premier Destination for
            Breaking News, Reviews, and Product Insights. Join Our Community of Tech Enthusiasts for Expert Advice and
            Exclusive Updates. Discover, Discuss, and Decide - All Here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
