import Title from "./Elements/Title";
import SubTitle from "./Elements/SubTitle";
import PortofolioCard from "./Elements/PortofolioCard";

const Blog = () => {
  return (
    <section>
      <div className="container m-auto">
        <div className="text-center">
          <Title>
            <span className="text-slate-900">Latest</span> Blog
          </Title>
          <SubTitle>Blog & Articles</SubTitle>
        </div>

        <div className="grid grid-cols-3">
          <PortofolioCard />
          <PortofolioCard />
          <PortofolioCard />
        </div>
      </div>
    </section>
  );
};

export default Blog;
