import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import ContactMeInfo from "./ContactMeInfo";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRef, useState } from "react";

import emailjs from '@emailjs/browser';
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";


type Email = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Email>();

  const { toast } = useToast()

  const [openToast, setOpenToast] = useState<boolean>(false);
  const form = useRef('')

  const onSubmit: SubmitHandler<Email> = (formData) => {
    emailjs
      .sendForm('service_9fpcwpc', 'template_il1yoen', form.current, '7JQbKxEuJzdHYC57W')
      .then(
        res => {
          console.log(res.status)
          if (res.status === 200) {
            toast({
              variant: "successfully",
              title: "Email send successfully",
              description: "Thank you for visiting!"
            })
            reset()
          } else {
            toast({
              variant: "destructive",
              title: "Something went wrong sending the email",
              description: "Thank you for visiting!",
              action: (<ToastAction altText="Pssou o mouse" onSubmit={handleSubmit(onSubmit)}>Try Again!</ToastAction>),
            })
          }
        })
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
            <div className="flex flex-col gap-3">

              <input {...register("name", { required: true })} className={`contactInput ${errors.name ? "border border-red-500" : ""}`} placeholder="Name" type="text" />
            </div>
            <input {...register("email", { required: true })} className={`contactInput ${errors.email ? "border border-red-500" : ""}`} placeholder="Email" type="text" />
          </div>
          <input {...register("subject", { required: true })} className={`contactInput ${errors.subject ? "border border-red-500" : ""}`} placeholder="Subject" type="text" />

          <textarea {...register("message", { required: true })} className={`contactInput ${errors.message ? "border border-red-500" : ""}`} placeholder="Message" />

          <button
            type="submit"
            className="bg-gradient-to-r from-sky-400 to-cyan-200 hover:text-sky-500 py-5 px-10 rounded-md text-white font-bold text-lg"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactMe;
