import ServiceCard from "./Elements/ServiceCard";

const Service = () => {
  return (
    <section className="pt-20">
      <div className="container m-auto">
        <div className="text-center">
          <h2 className="text-base font-medium text-red-600">
            <span className="text-slate-900">My</span> Services
          </h2>
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
