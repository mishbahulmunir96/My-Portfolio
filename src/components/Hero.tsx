import Button from "./Elements/Button";

const Hero = () => {
  return (
    <section className="h-screen w-full bg-blue-100">
      <div className="container mx-auto grid h-full grid-cols-2 gap-4 pt-16">
        <div className="m-auto">
          <h4 className="text-lg font-medium text-slate-800">
            <span className="text-red-600">Hello</span> There
          </h4>
          <h1 className="mb-3 text-[44px] font-bold text-slate-900">
            I'm <span className="text-red-600">Misbahul Munir</span> <br />
            Fullstack Web Developer
          </h1>
          <p className="mb-8 text-xl font-normal text-gray-500">
            I'm a fullstack web developer based in Yogyakarta, i'm very
            passionate and dedicated to my work.
          </p>

          <Button />
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[400px] w-[400px] rounded-full bg-[#f22225] opacity-10"></div>
          <div className="absolute h-[350px] w-[350px] rounded-full bg-[#f22225] opacity-30"></div>
          <div className="absolute h-[300px] w-[300px] rounded-full bg-[#f22225]"></div>

          <div className="right-15 relative z-40">
            <img
              src="/img/my_photo.png"
              alt="photo of the dev"
              className="rounded-bl-full rounded-br-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
