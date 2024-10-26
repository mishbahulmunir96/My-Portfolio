import SubTitle from "./Elements/SubTitle";
import TestiClient from "./Elements/TestiClient";
import Title from "./Elements/Title";

const Testimoni = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container m-auto text-center">
        <Title>
          <span className="text-slate-900">Client</span> Testimonial
        </Title>
        <SubTitle>Feedback From Client</SubTitle>

        <div className="mt-8 grid grid-cols-2 gap-5">
          <TestiClient />
          <TestiClient />
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
