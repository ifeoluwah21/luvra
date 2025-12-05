import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import CachedDropItemSection from "./CachedDropItemSection";

const DropsPage: React.FC = () => {
  return (
    <>
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
      <section className="mx-auto max-w-5xl space-y-4">
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
          <CachedDropItemSection />
        </div>
      </section>
    </>
  );
};

export default DropsPage;
