import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import ContactMeInfo from "./ContactMeInfo";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRef } from "react";

import emailjs from '@emailjs/browser';

type Email = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Email>();
  const form = useRef('')

  const onSubmit: SubmitHandler<Email> = (formData) => {

    // window.location.href = `mailto:ugabrieldev@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name}.${formData.message} (${formData.email})`

    emailjs
      .sendForm('service_9fpcwpc', 'template_il1yoen', form.current, '7JQbKxEuJzdHYC57W')
      .then(
        res => {
          console.log(res.text)
          if (res.text === 'OK') {
            return (
              <div className="absolute z-50 mx-auto top-0 left-0">
                <p className="text-4xl text-emerald-500 ">Email Enviado com sucesso</p>
              </div>
            )
          }
        },
        (error) => console.log(error.text)
      )
  };



  return (
    <div className="h-screen flex relative flex-col text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          I have got whay you need{" "}
          <span className="decoration-[#45c7e5]/50 underline">Let's Talk!</span>
        </h4>

        <div className="space-y-3 md:space-y-5">
          {/* <ContactMeInfo
            title="+12345678"
            icon={
              <PhoneIcon className="text-[#45c7e5] h-7 w-7 animate-pulse" />
            }
          /> */}
          <ContactMeInfo
            title="ugabrieldev@gmail.com"
            icon={
              <EnvelopeIcon className="text-[#45c7e5] h-7 w-7 animate-pulse" />
            }
          />
          <ContactMeInfo
            title="Brasília - DF"
            icon={
              <MapPinIcon className="text-[#45c7e5] h-7 w-7 animate-pulse" />
            }
          />
        </div>

        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit  mx-auto">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input {...register("name")} className="contactInput" placeholder="Name" type="text" />
            <input {...register("email")} className="contactInput" placeholder="Email" type="text" />
          </div>
          <input {...register("subject")} className="contactInput" placeholder="Subject" type="text" />

          <textarea {...register("message")} className="contactInput" placeholder="Message" />

          <button
            type="submit"
            className="bg-[#45c7e5] hover:text-white py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
