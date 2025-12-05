import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

type AuctionCarouselItemProps = {
  src: string;
  alt: string;
  time: Date;
};
const AuctionCarouselItem: React.FC<AuctionCarouselItemProps> = ({
  src,
  alt,
  time,
}) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return (
    <Card className="relative h-[186px] w-[228px] overflow-clip p-0 md:h-[261px] md:w-[320px] 2xl:h-[396px] 2xl:w-[485px]">
      <CardContent className="relative px-0">
        <Image
          src={src}
          alt={alt}
          width={100}
          height={100}
          className="h-[186px] w-[228px] object-cover md:h-[261px] md:w-[320px] 2xl:h-[396px] 2xl:w-[485px]"
        />
      </CardContent>

      <CardFooter className="absolute bottom-0 left-1/2 mb-2 w-max -translate-x-1/2 rounded-sm border-[0.5px] border-white bg-white/15 p-2 text-white backdrop-blur-[3px]">
        <p>
          {" "}
          <span>{hours}</span>hrs: <span>{minutes}</span>mins :
          <span>{seconds}</span>s
        </p>
      </CardFooter>
    </Card>
  );
};

export default AuctionCarouselItem;
