"use client";

import ContactForm from "@/components/contactForm/ContactForm";
import React from "react";

const page = () => {
  return (
    <div className="flex-col w-80 md:w-96 mx-auto">
      <h1>Contact</h1>
      <ContactForm />
    </div>
  );
};

export default page;
