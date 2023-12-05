import React from "react";

const HowItWorks = () => {
  return (
    <div className="max-w-[90vw]  py-10 mx-auto justify-center  flex flex-col lg:flex-row">
      <img src="https://i.ibb.co/6Xyptyt/Printme-1.png" alt="" />
      <div className=" space-y-10 lg:w-1/2">
        <h2 className="text-center text-2xl dark:text-white border-b-2 lg:w-fit  pb-3 font-semibold mt-16">
          How Do We Opareate ?
        </h2>
        <p className=" mx-auto dark:text-gray-300">
          We regularly gather news, reviews, and details about new products and
          developments from these brands. You can easily explore our website to
          find out what's happening with your favorite tech companies. We've
          made it simple to navigate, so you can effortlessly access product
          specifications and even compare different models, making it easier for
          you to make well-informed decisions when you're thinking about buying
          something. But that's not all – we also encourage discussions and
          conversations. You can join forums or comment on articles to share
          your experiences and get advice from others who are just as passionate
          about these brands as you are. So, think of our website as your
          ultimate resource for staying connected with these tech giants and a
          community of brand enthusiasts.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
