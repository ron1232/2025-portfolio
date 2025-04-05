import Image from "next/image";
import Link from "next/link";
import { PiCursorClickLight } from "react-icons/pi";
import { toast } from "react-toastify";
import CustomNotification from "./CustomNotification";

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
  const handleNoHrefClick = () => {
    toast.error(CustomNotification, {
      data: {
        title: "Oh Snap!",
        content: "Something went wrong",
      },
      autoClose: 2000,
      ariaLabel: "Something went wrong",
      progress: 0,
      icon: false,
      theme: "colored",
    });
  };

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
          <p className="app-card-title" onClick={handleNoHrefClick}>
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
            onClick={handleNoHrefClick}
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
