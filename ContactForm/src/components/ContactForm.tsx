import "../styles/ContactForm.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState ,reset} = form;
  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  useEffect(() => {
  if (isSubmitSuccessful) {
    reset();
  }
}, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form Submitted", data);
  };

  return (
    <div>
      <section className="contactSection">
        <div className="glow"></div>
        <div className="content">
          <p className="title">Get in touch with us</p>
          <p className="subtitle">
            Please fill out the form below to share your information and we'll
            respond as soon as possible
          </p>
          <div className="formCard">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formControl">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: { value: true, message: "Name is required" },
                  })}
                />
                <p className="error">{errors.name?.message}</p>
              </div>
              <div className="formControl">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <p className="error">{errors.email?.message}</p>
              </div>
              <div className="formControl">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  {...register("message", {
                    required: { value: true, message: "Message is required" },
                  })}
                  rows={5}
                />
                <p className="error">{errors.message?.message}</p>
              </div>
              <button
                type="submit"
                className="submitBtn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
            <DevTool control={control} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
