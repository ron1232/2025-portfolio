import clsx from "clsx";
import { FaLinkedin, FaMailBulk, FaGithub } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ron-barak/", icon: <FaLinkedin /> },
  { href: "https://www.fiverr.com/ron1542/", icon: <TbBrandFiverr /> },
  { href: "mailto:ronfiverr123@gmail.com", icon: <FaMailBulk /> },
  { href: "https://github.com/ron1232", icon: <FaGithub /> },
];

interface SocialLinksProps {
  containerClassName?: string;
  iconsClassName?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  containerClassName,
  iconsClassName,
}) => {
  return (
    <div className={clsx("flex gap-3", containerClassName)}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={iconsClassName}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
