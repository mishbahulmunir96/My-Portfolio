import ServiceCard from "./Elements/ServiceCard";
import Title from "./Elements/Title";

const Service = () => {
  return (
    <section className="pt-20">
      <div className="container m-auto">
        <div className="text-center">
          <Title ><span className="text-slate-900">My</span> Services</Title>
          <h3 className="mb-10 text-4xl font-medium text-slate-900">
            Providing trusted <br />
            web development services
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Service;
