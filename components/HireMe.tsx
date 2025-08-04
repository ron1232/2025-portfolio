import AnimatedSocialLinks from "./AnimatedSocialLinks";
import AnimatedSubtitle from "./AnimatedSubtitle";
import AnimatedTitle from "./AnimatedTitle";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10 ">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden bg-img-code">
        <div className="flex flex-col items-center text-center ">
          <AnimatedTitle title="Hire Me!" />
        </div>
        <div className="mt-10">
          <AnimatedSubtitle title="ronfiverr123@gmail.com" />
        </div>
        <AnimatedSocialLinks />
      </div>
    </div>
  );
};

export default Contact;
