import Image from "next/image";
import Link from "next/link";
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
  return (
    <div className="app-card">
      <div className="app-card-info">
        {href ? (
          <Link className="app-card-title" href={href} target="_blank">
            <span className="relative">
              {title}
              <PiCursorClickLight className="absolute right-[-17px] top-4" />
            </span>
          </Link>
        ) : (
          <p className="app-card-title">
            <span className="relative">
              {title}
              <PiCursorClickLight className="absolute right-[-17px] top-4" />
            </span>
          </p>
        )}

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
        {href ? (
          <Link href={href} target="_blank">
            <Image
              width={540}
              height={270}
              src={imgSrc}
              alt=""
              className="rounded-xl"
            />
          </Link>
        ) : (
          <Image
            width={540}
            height={270}
            src={imgSrc}
            alt=""
            className="cursor-pointer rounded-xl"
          />
        )}
      </div>
    </div>
  );
};

export default AppCard;
