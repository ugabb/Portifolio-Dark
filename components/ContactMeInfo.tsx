import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
};

const ContactMeInfo = ({ title, icon }: Props) => {
  return (
    <div className="space-y-10">
      <div className="flex items-center space-x-5 justify-center">
        {icon}
        <p className="text-2xl">{title}9</p>
      </div>
    </div>
  );
};

export default ContactMeInfo;
