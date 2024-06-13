"use client";
import { ValidationError, useForm } from "@formspree/react";
import "./StylingcontactUS.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ContainerContactUS = () => {
  const [state, handleSubmit] = useForm("xqkrrqyy");
 
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h1 className='text-4xl' >
            Contact Us

            </h1>
            <p className=" text-lg">
            Thank you for visiting "Marefa4u"! We are here to assist you and answer all your inquiries. If you have any questions, comments, or suggestions, please feel free to reach out to us through the form below or via the provided contact details.

            </p>
            <p className=" text-lg">

Our mission is to offer high-quality free courses in various fields, and we always strive to improve your learning experience. Your feedback is important to us and helps us provide the best possible service.
            </p>
          
          </div>

          <div className="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm darkModeInput"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  name="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm darkModeInput"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name='message'
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg  px-5 py-3 font-medium  sm:w-auto btnSend "
                  disabled={state.submitting}
                >
             {state.submitting ? "Submitting ..." : "Send Massage"}

           
                </button>
              </div>
            </form>
            {state.succeeded && (
            <p
              style={{
                textTransform: "capitalize",
                fontSize: "16px",
                marginTop: "1.7rem",
                display:"flex",
                alignItems:"center",
               


              }}>
                <CheckCircleIcon sx={{color:"#2caac1"}} />
              your massage has been sent succesfully
            </p>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerContactUS;
