import "../styles/ContactForm.css";
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

type FormValues={
  name:string;
  email:string;
  message:string;
}

const ContactForm = () => {
  const form=useForm<FormValues>();
  const{register,control,handleSubmit}=form;
  const onSubmit=(data:FormValues)=>{
    console.log("Form Submitted",data);
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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register('name')}
            />
            
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register('email')}

            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              {...register('message')}
              rows={5}
            />
            <button type="submit" className="submitBtn">Submit</button>
          </form>
          <DevTool control={control}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
