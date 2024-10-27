import Button from "./Elements/Button";
import Input from "./Elements/Input";
import SubTitle from "./Elements/SubTitle";
import Title from "./Elements/Title";

const Contact = () => {
  return (
    <div className="py-16">
      <div className="container m-auto grid grid-cols-2 gap-5">
        <div className="w-[450px]">
          <img src="/img/contact-img.png" alt="gambar biasa mah" />
        </div>
        <div className="pt-8">
          <Title>
            <span className="text-slate-900">Get In</span> Touch
          </Title>
          <SubTitle>Feel Free to Contact</SubTitle>

          <form action="" className="span mt-8 grid grid-cols-2 gap-4">
            <Input name="name" type="text" placeholder="Enter Your Name" />
            <Input name="email" type="email" placeholder="Enter Your Email" />
            <Input
              name="phone"
              type="tel"
              placeholder="Enter Your Phone Number"
            />
            <Input name="subject" type="text" placeholder="Enter Subject" />
            <Input
              name="message"
              type="text"
              placeholder="Enter Your Message"
              style="col-span-2"
            />

            <Button />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
