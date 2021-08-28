import Container from "./container";

const Footer = () => {
  const bgImg = {
    backgroundImage: `url("/assets/pattern.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col">
          <div className="w-full h-24" style={bgImg} />
          <div className="text-xs mt-6">
            Copyright &copy; <a href="https://haithal.com">haithal.com</a>. All
            Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
