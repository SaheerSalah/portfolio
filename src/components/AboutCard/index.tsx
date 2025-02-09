import React from "react";
interface PropsAboutCard {
  headerName?: string;
  content: React.ReactNode;
  AdditionalClass?: string;
}
const AboutCard = ({headerName, content, AdditionalClass }: PropsAboutCard) => {
  return (
    <div className="">
      <div className={`text-gray-700 bg-white    p-4 duration-300 ${AdditionalClass}`}>
        <h2 className="text-lg font-semibold text-gray-800 ">
          {headerName}
        </h2>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default AboutCard;