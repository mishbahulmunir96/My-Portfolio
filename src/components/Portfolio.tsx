import PortofolioCard from "./Elements/PortofolioCard";
import SubTitle from "./Elements/SubTitle";
import Title from "./Elements/Title";

const Portfolio = () => {
  return (
    <section className="w-full pt-20">
      <div className="container m-auto mb-10">
        <div className="mb-10">
          <Title>
            <span className="text-slate-900">My</span> Portfolio
          </Title>
          <SubTitle>My Recent Projects</SubTitle>
        </div>
        <div className="mb-8 grid grid-cols-3 gap-4">
          <PortofolioCard />
          <PortofolioCard />
          <PortofolioCard />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
