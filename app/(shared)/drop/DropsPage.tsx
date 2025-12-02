import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";

const DropsPage: React.FC = () => {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="mb-6 space-y-6 text-center">
        <h2 className="text-3xl font-bold">Upcoming drops</h2>
        <p className="mx-auto w-[291px] text-xl text-[#616161] md:w-fit">
          You may turn on notifications so that no drop will miss you.
        </p>
        <Button
          variant={"outline"}
          className="h-[52px] w-[260px] rounded-sm border-black text-2xl font-medium"
        >
          Notify me
        </Button>
      </div>
      <section className="space-y-4">
        <Select>
          <SelectTrigger
            size="default"
            className="ml-auto w-max border-none text-lg font-light text-black shadow-none"
          >
            <SelectValue placeholder="Sort by" className="text-black" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
              <SelectItem value="date-newest">Date: Newest First</SelectItem>
              <SelectItem value="date-oldest">Date: Oldest First</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex flex-col gap-y-10">
          <DropItemDetailCard />
          <DropItemDetailCard />
          <DropItemDetailCard />
          <DropItemDetailCard />
          <DropItemDetailCard />
        </div>
      </section>
    </section>
  );
};

export default DropsPage;

const DropItemDetailCard: React.FC = () => {
  return (
    <article className="space-y-4 lg:flex lg:gap-12 lg:space-y-0">
      <div className="relative lg:basis-3/5">
        <Image
          src={"/drop.jpg"}
          alt="Eyo : Eko For Show drop preview image"
          width={640}
          height={427}
          className="w-full rounded-sm"
        />
        <span className="absolute top-4 right-1/20 rounded-[5px] bg-[#4693ED] px-6 py-1 text-white uppercase lg:hidden">
          Upcoming
        </span>
        <div className="absolute bottom-4 left-1/2 w-9/10 -translate-x-1/2 space-y-2 rounded-sm border border-white bg-white/15 px-6 py-2 text-white backdrop-blur-[2px]">
          <p>Time remaining</p>
          <p className="text-xl">06 hrs : 45 mins : 22 s</p>
        </div>
      </div>
      <div className="space-y-4 lg:flex lg:basis-2/5 lg:flex-col lg:justify-between">
        <span className="hidden w-max rounded-[5px] bg-[#4693ED] px-6 py-1 text-white uppercase lg:block">
          Upcoming
        </span>
        <span className="block">November 21 at 11 am WAT</span>
        <h3 className="text-2xl font-medium">Eyo : Eko For Show</h3>
        <p className="text-[#616161]">
          Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae
          tempus. Sed nunc tempus aliquet lectus ut vulputate.
        </p>
        <p className="text-xl font-medium">
          Creator: <span className="text-[#006CA2]">Aliya Minat</span>
        </p>
        <span className="border-b border-b-[#006CA2] pb-1 text-[#006CA2] lg:w-max">
          Get notified
        </span>
      </div>
    </article>
  );
};
