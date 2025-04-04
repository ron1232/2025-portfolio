import Image from "next/image";
import { PiCursorClickLight } from "react-icons/pi";

interface AppCardProps {
  imgSrc: string;
  title: string;
  description: string;
  technologies: Array<string>;
  href?: string;
}

const AppCard: React.FC<AppCardProps> = ({
  imgSrc,
  href,
  title,
  description,
  technologies,
}) => {
  const handleClick = () => {
    if (!href) return;
    window.open(href, "_blank")?.focus();
  };

  return (
    <div className="app-card">
      <div className="app-card-info">
        <p className="app-card-title" onClick={handleClick}>
          <span className="relative">
            {title}
            <PiCursorClickLight className="absolute right-[-17px] top-4" />
          </span>
        </p>
        <div className="app-card-description">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <p className="mt-1.5 font-bold">Technologies:</p>
        <ul className="app-card-technologies">
          {technologies.map((technology) => (
            <li key={technology}>{technology}.</li>
          ))}
        </ul>
      </div>
      <div className="app-card-image-container">
        <Image
          width={540}
          height={270}
          src={imgSrc}
          alt=""
          className="cursor-pointer rounded-xl"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default AppCard;
