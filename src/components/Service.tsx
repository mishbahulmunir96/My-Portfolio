import ServiceCard from "./Elements/ServiceCard";
import SubTitle from "./Elements/SubTitle";
import Title from "./Elements/Title";

const Service = () => {
  return (
    <section className="pt-20">
      <div className="container m-auto">
        <div className="text-center">
          <Title>
            <span className="text-slate-900">My</span> Services
          </Title>
          <SubTitle>
            Providing trusted <br />
            web development services
          </SubTitle>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-5">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Service;
