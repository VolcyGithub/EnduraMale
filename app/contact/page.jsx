import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full min-h-[400px] bg-third">
      {/* Contact Section */}
      <section className="py-10 px-4 sm:px-8 md:px-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">Contact Us</h2>
        <p className="mt-2 text-color-tetiary text-base sm:text-lg">
          Use one of these methods to contact us
        </p>

        <div className="bg-secondary mt-8 flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 mx-auto max-w-4xl rounded-lg shadow-lg">
          {/* Phone */}
          <div className="flex flex-1 items-center text-white p-4 sm:p-6 gap-3 min-w-[220px] justify-center">
            <i className="fas fa-phone-alt text-2xl text-secondary"></i>
            <div>
              <h4 className="font-bold">Phone</h4>
              <p className="break-all">+1 (386) 957-2121</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-1 items-center text-white p-4 sm:p-6 gap-3 min-w-[220px] justify-center"></div>
          <div className="items-center text-white p-6  flex items-center gap-3">
            <i className="fas fa-envelope text-2xl text-secondary"></i>
            <div>
              <h4 className="font-bold">Email</h4>
              <p>contact@enduramale.com</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="items-center text-white p-6  flex items-center gap-3">
            <i className="fab fa-whatsapp text-2xl text-secondary"></i>
            <div>
              <h4 className="font-bold">WhatsApp</h4>
              <p>Click to access our WhatsApp</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
