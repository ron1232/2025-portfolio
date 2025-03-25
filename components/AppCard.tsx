import Image from "next/image";

interface AppCardProps {
  imgSrc: string;
  href?: string;
}

const AppCard: React.FC<AppCardProps> = ({ imgSrc, href }) => {
  const handleImageClick = () => {
    if (!href) return;
    window.open(href, "_blank")?.focus();
  };

  return (
    <div className="app-card">
      <Image
        width={540}
        height={270}
        src={imgSrc}
        alt=""
        className="cursor-pointer rounded-xl"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default AppCard;
