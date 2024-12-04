type HeroProps = {
  children: React.ReactNode;
};

const Hero = ({ children }: HeroProps) => {
  return (
    <div className="min-w-screen py-5 pb-10 bg-[url('../public/images/pattern-bg-desktop.png')] bg-cover">
      {children}
    </div>
  );
};

export default Hero;
