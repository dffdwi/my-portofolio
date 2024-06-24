"use client";

import React from "react";
import InputField from "./InputField";
import useInput from "./useInput";

function Contact() {
  const [
    fullName,
    handleFullNameChange,
    setFullName,
    fullNameError,
    setFullNameError,
  ] = useInput();
  const [
    subject,
    handleSubjectChange,
    setSubject,
    subjectError,
    setSubjectError,
  ] = useInput();
  const [email, handleEmailChange, setEmail, emailError, setEmailError] =
    useInput();
  const [
    phoneNumber,
    handlePhoneNumberChange,
    setPhoneNumber,
    phoneNumberError,
    setPhoneNumberError,
  ] = useInput();
  const [
    message,
    handleMessageChange,
    setMessage,
    messageError,
    setMessageError,
  ] = useInput();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (!fullName.trim()) {
      setFullNameError("Full name is required.");
      isValid = false;
    }

    if (!subject.trim()) {
      setSubjectError("Subject is required.");
      isValid = false;
    }

    if (!email.trim() || !validateEmail(email)) {
      setEmailError("Valid email is required.");
      isValid = false;
    }

    if (!phoneNumber.trim() || isNaN(phoneNumber)) {
      setPhoneNumberError("Valid phone number is required.");
      isValid = false;
    }

    if (!message.trim()) {
      setMessageError("Message is required.");
      isValid = false;
    }

    if (isValid) {
      const formData = {
        fullName,
        subject,
        email,
        phoneNumber,
        message,
      };

      try {
        const response = await fetch(
          "https://porto-mail-backend.vercel.app/send",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Form data submitted:", data);
        } else {
          console.error("Error sending email:", response.statusText);
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <main
      id="contact"
      className="flex justify-center items-center px-16 py-20 bg-neutral-950 max-md:px-5"
    >
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
              For business and partnership inquiry please contact me below!.
            </p>
          </div>
        </header>
        <form
          className="flex flex-col mt-16 max-md:mt-10 max-md:max-w-full"
          onSubmit={handleSubmit}
        >
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <InputField
                  label="Full name"
                  value={fullName}
                  onChange={handleFullNameChange}
                  error={fullNameError}
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <InputField
                  label="Subject"
                  value={subject}
                  onChange={handleSubjectChange}
                  error={subjectError}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <InputField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={emailError}
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <InputField
                  label="Phone number"
                  type="number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  error={phoneNumberError}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-8 text-xl leading-8 max-md:max-w-full">
            <label htmlFor="message" className="text-white max-md:max-w-full">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              className="justify-center px-4 pt-4 pb-24 mt-2.5 bg-white text-black rounded-lg border border-indigo-600 border-solid text-neutral-600 max-md:pb-10 max-md:max-w-full"
              placeholder="Type your message..."
            />
            {messageError && (
              <p className="text-red-500 mt-2">{messageError}</p>
            )}
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
