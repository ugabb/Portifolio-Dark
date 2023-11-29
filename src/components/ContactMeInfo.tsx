import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
};

const ContactMeInfo = ({ title, icon }: Props) => {
  return (
    <div className="">
      <div className="flex items-center space-x-5 justify-center">
        {icon}
        <p className="text-xl md:text-2xl">{title}</p>
      </div>
    </div>
  );
};

export default ContactMeInfo;
