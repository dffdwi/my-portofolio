import * as React from "react";

const InputField = ({ label, type = "text" }) => (
  <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-8 max-md:max-w-full">
    <label className="max-md:max-w-full">{label}</label>
    <input
      type={type}
      className="shrink-0 mt-2.5 h-16 bg-white rounded-lg border border-indigo-600 border-solid max-md:max-w-full"
      aria-label={label}
    />
  </div>
);

function Contact() {
  return (
    <main className="flex justify-center items-center px-16 py-20 bg-neutral-950 max-md:px-5">
      <div className="flex flex-col mt-16 max-w-full w-[1024px] max-md:mt-10">
        <header className="flex flex-col text-center text-white max-md:max-w-full">
          <h2 className="self-center text-xl font-semibold leading-8">
            Get In Touch
          </h2>
          <div className="flex flex-col mt-6 max-md:max-w-full">
            <h1 className="text-6xl font-bold leading-[76.8px] max-md:max-w-full max-md:text-4xl">
              Contact me
            </h1>
            <p className="mt-8 text-2xl leading-9 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </header>
        <form className="flex flex-col mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <InputField label="Full name" />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <InputField label="Subject" />
              </div>
            </div>
          </div>
          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <InputField label="Email" type="email" />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <InputField label="Phone number" type="tel" />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-8 text-xl leading-8 max-md:max-w-full">
            <label htmlFor="message" className="text-white max-md:max-w-full">
              Message
            </label>
            <textarea
              id="message"
              className="justify-center px-4 pt-4 pb-24 mt-2.5 bg-white rounded-lg border border-indigo-600 border-solid text-neutral-600 max-md:pb-10 max-md:max-w-full"
              placeholder="Type your message..."
            />
          </div>
          <button
            type="submit"
            className="justify-center self-center px-11 py-5 mt-8 text-xl leading-8 text-white whitespace-nowrap bg-violet-500 rounded-lg max-md:px-5"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
