import React, { useState } from "react";
import { bg2 } from "../assets";
import axios from "axios";
// import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const notify = () => toast("Successfully message!");
  const handleSumit = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const token = "7593360870:AAGzGobs9r4Mcux4F6TsMzG7064F1xXk9iQ";
    const chat_id = 5895156876;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const textMessage = `Ism: ${firstName} \nFamiliya: ${lastName} \nEmail: ${email} \nMessage: ${message}`;

    setIsLoading(!isLoading);
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: textMessage,
      },
    })
      .then((res) => {
        setIsLoading(false);
        notify();

        e.target.firstName.value = "";
        e.target.lastName.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full bg-[#FAFAFA]">
      <section className="w-full relative">
        <ToastContainer />
        <img
          src={bg2}
          alt="message1"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute top-0 left-0 right-0 w-full h-full flex flex-col gap-5 justify-center align-middle text-center items-center bg-black/30">
          <h1
            data-aos="fade-up"
            className="md:text-6xl text-4xl font-bold text-white"
          >
            {t("contact.contact_heading")}
          </h1>
          <p
            data-aos="fade-down"
            className="md:text-3xl text-xl text-white font-medium"
          >
            {t("contact.contact_subheading")}
          </p>
        </div>
      </section>

      <section className="w-full mb-15">
        <div className="w-9/10 mx-auto flex md:flex-row flex-col justify-center items-center gap-5 my-20">
          <div className="md:w-1/2 w-full rounded-2xl shadow-2xl bg-white md:p-14 p-3 md:h-[600px]">
            <span className="text-md font-medium uppercase text-[#1BA98D]">
              {t("contact.contact_heading")}
            </span>
            <h1 className="md:text-5xl text-3xl font-bold text-black/80 my-5 mb-8">
              {t("contact.contact_title")}
            </h1>
            <hr className="text-black/30 mb-8" />
            <div className="my-4 flex md:gap-5 gap-2">
              <div className="rounded-full bg-[#D4F8C4] md:h-[50px] md:w-[50px] h-[30px] w-[30px]"></div>
              <div className="">
                <h1 className="text-md font-bold text-black/50">
                  {t("contact.department_hr")}
                </h1>
                <p className="text-black/50">hr.uz@tekgrup.net</p>
              </div>
            </div>
            <div className="my-4 flex md:gap-5 gap-2">
              <div className="rounded-full bg-[#D4F8C4] md:h-[50px] md:w-[50px] h-[30px] w-[30px]"></div>
              <div className="">
                <h1 className="text-md font-bold text-black/50">
                  {t("contact.department_sales")}
                </h1>
                <p className="text-black/50">
                  sales.uz@tekgrup.net | +998 55 511 16 86
                </p>
              </div>
            </div>
            <div className="my-4 flex md:gap-5 gap-2">
              <div className="rounded-full bg-[#D4F8C4] md:h-[50px] md:w-[50px] h-[30px] w-[30px]"></div>
              <div className="">
                <h1 className="text-md font-bold text-black/50">
                  {t("contact.department_info")}
                </h1>
                <p className="text-black/50">
                  info.uz@tekgrup.net | +998 55 515 04 15
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full rounded-2xl shadow-2xl bg-white md:p-14 p-5 md:min-h-[600px]">
            <h1 className="md:text-5xl text-3xl font-bold text-black/80">
              {t("contact.contact_form_title")}
            </h1>
            <form onSubmit={handleSumit}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="firstName"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        {t("contact.form_first_name")}
                      </label>
                      <div className="mt-2">
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="First name"
                          autoComplete="given-name"
                          required
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="lastName"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        {t("contact.form_last_name")}
                      </label>
                      <div className="mt-2">
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Last name"
                          autoComplete="family-name"
                          required
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-full">
                      <label
                        htmlFor="email"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        {t("contact.form_email")}
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email address"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="message"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        {t("contact.form_message")}
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          placeholder="Message"
                          required
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  {t("contact.form_cancel")}
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isLoading ? "loading..." : t("contact.form_submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
