import PortofolioCard from "./Elements/PortofolioCard";
import Testimoni from "./Elements/Testimoni";

const Portfolio = () => {
  return (
    <section className="w-full pt-20">
      <div className="container m-auto mb-10">
        <div className="mb-10">
          <h2 className="mb-1 text-lg font-medium text-red-600">
            <span className="text-slate-900">My </span>
            Portfolio
          </h2>
          <h1 className="text-4xl font-medium text-slate-800">
            My Recent Projects
          </h1>
        </div>
        <div className="mb-8 grid grid-cols-3 gap-4">
          <PortofolioCard />
          <PortofolioCard />
          <PortofolioCard />
        </div>

        <Testimoni />
      </div>
    </section>
  );
};

export default Portfolio;
