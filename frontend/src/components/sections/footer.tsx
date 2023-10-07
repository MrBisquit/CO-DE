import { Globe, TextQuote } from "lucide-react";
import { GetCurrentTranslation } from "@/translations/translator";

type Props = {};

const currentTranslation = GetCurrentTranslation();

const Footer = (props: Props) => {
  return (
    <div className="flex h-[3%] w-full justify-end border border-border-secondary bg-background px-4 ">
      <Globe className="h-auto w-4" />{" "}&nbsp;
      <span>
        {currentTranslation.serverStatus?.serverStatus} <span className="text-success">{currentTranslation.serverStatus?.great}</span>
      </span>{" "}&nbsp;
      <TextQuote className="h-auto w-4" />{" "}&nbsp;
      <span>
        {currentTranslation.currentTranslation?.currentTranslation} <span className="text-success">{currentTranslation.currentTranslation?.lang}</span>
      </span>
    </div>
  );
};

export default Footer;
