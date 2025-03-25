import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="w-screen py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-4 md:flex-row">
        <p className="text-center text-lg font-light md:text-left">
          © Ron Barak {new Date().getFullYear()}. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          <SocialLinks iconsClassName="text-xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
