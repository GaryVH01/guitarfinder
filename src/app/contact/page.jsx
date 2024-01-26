"use client";

import ContactForm from "@/components/contactForm/ContactForm";
import React from "react";

const page = () => {
  return (
    <div className="flex-col w-2/5 mx-auto min-h-screen">
      <h1>Contact</h1>
      <ContactForm />
    </div>
  );
};

export default page;
