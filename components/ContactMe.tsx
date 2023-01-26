import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import ContactMeInfo from "./ContactMeInfo";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ugabrieldev@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name}.${formData.message} (${formData.email})`
  };

  return (
    <div className="h-screen flex relative flex-col text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got whay you need{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Let's Talk!</span>
        </h4>

        <div className="space-y-10">
          <ContactMeInfo
            title="+12345678"
            icon={
              <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            }
          />
          <ContactMeInfo
            title="ugabrieldev@gmail.com"
            icon={
              <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            }
          />
          <ContactMeInfo
            title="Brasilia - DF"
            icon={
              <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            }
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit  mx-auto">
          <div className="flex space-x-2">
            <input {...register("name")} className="contactInput" placeholder="Name" type="text" />
            <input {...register("email")} className="contactInput" placeholder="Email" type="text" />
          </div>
          <input {...register("subject")} className="contactInput" placeholder="Subject" type="text" />

          <textarea {...register("message")} className="contactInput" placeholder="Message" />

          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
