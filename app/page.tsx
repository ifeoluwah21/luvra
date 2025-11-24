"use client";
import Intro from "@/components/Intro";
import { introStore } from "@/store/introStore";
import { motion, AnimatePresence } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoveRight } from "lucide-react";

export default function Home() {
  const { slideUp } = introStore();

  const images = [
    { img: "home/carousel/img1.png", alt: "Carousel Image 1" },
    { img: "home/carousel/img2.png", alt: "Carousel Image 2" },
    { img: "home/carousel/img3.png", alt: "Carousel Image 3" },
    { img: "home/carousel/img4.png", alt: "Carousel Image 4" },
    { img: "home/carousel/img5.jpg", alt: "Carousel Image 5" },
    { img: "home/carousel/img6.jpg", alt: "Carousel Image 6" },
    { img: "home/carousel/img7.jpg", alt: "Carousel Image 7" },
  ];

  const plugin = useRef(Autoplay({ delay: 2000 }));

  return (
    <>
      <Intro />
      <AnimatePresence>
        {slideUp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full"
          >
            <div className="mt-12 flex flex-col gap-8 px-4 text-center md:px-8">
              <h1 className="mx-auto text-4xl font-semibold sm:text-5xl sm:leading-18 md:max-w-5xl md:text-6xl md:leading-20">
                Photography is poetry & beautiful untold stories
              </h1>
              <p className="mx-auto max-w-2xl sm:max-w-md md:max-w-lg lg:max-w-2xl">
                Flip through more than 10,000 vintage shots, old photographs,
                historic images and captures seamlessly in one place. Register
                to get top access.
              </p>
            </div>
            {/* Carousel */}
            <div className="mx-auto mt-16 w-full max-w-4xl px-4 lg:max-w-5xl">
              <Carousel plugins={[plugin.current]} className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-2">
                        <div className="overflow-hidden">
                          <div className="relative aspect-square p-0">
                            <Image
                              src={image.img}
                              alt={image.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            {/* desktop featured */}
            <div className="mt-20 hidden p-10 md:block md:px-20 lg:px-30">
              <h2 className="font-semibold md:text-4xl">Featured products</h2>
              <hr className="mt-8" />
              <div>
                <div className="flex justify-between gap-10 pt-10 md:flex">
                  <Image
                    src={"/featured/featured.png"}
                    alt="Featured image"
                    width={1200}
                    height={800}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                    className="h-auto w-full object-cover"
                  />
                  <div className="w-full max-w-3xl">
                    <h3 className="mb-12 text-4xl font-semibold">
                      The Boolean Egyptian
                    </h3>

                    <p className="text-2xl leading-7 text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Expedita, dolorem. Rerum laboriosam provident quo harum
                      sunt deleniti, aperiam, dolor consequuntur quae temporibus
                      quis ratione sint similique ipsum possimus laborum ipsa.
                    </p>
                    <div className="mt-20 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="*:data-[slot=avatar]:ring-background flex -space-x-4 *:data-[slot=avatar]:ring-2">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img1.png"} />
                            <AvatarFallback>Img1</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img2.png"} />
                            <AvatarFallback>Img2</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img3.png"} />
                            <AvatarFallback>Img3</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img4.png"} />
                            <AvatarFallback>Img4</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img5.png"} />
                            <AvatarFallback>Img5</AvatarFallback>
                          </Avatar>
                        </div>

                        <p className="text-lg font-medium">64 major creators</p>
                      </div>
                      <motion.div
                        className="cursor-pointer rounded-full border border-gray-500 p-3"
                        whileHover="hover"
                      >
                        <motion.div
                          variants={{
                            hover: { x: 3 },
                          }}
                        >
                          <MoveRight />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <hr className="mt-8" />
                <div className="flex justify-between gap-10 pt-10 md:flex">
                  <div className="w-full max-w-3xl">
                    <h3 className="mb-12 text-4xl font-semibold">
                      Are We There Yet?
                    </h3>

                    <p className="text-2xl leading-7 text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Expedita, dolorem. Rerum laboriosam provident quo harum
                      sunt deleniti, aperiam, dolor consequuntur quae temporibus
                      quis ratione sint similique ipsum possimus laborum ipsa.
                    </p>
                    <div className="mt-20 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="*:data-[slot=avatar]:ring-background flex -space-x-4 *:data-[slot=avatar]:ring-2">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img1.png"} />
                            <AvatarFallback>Img1</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img2.png"} />
                            <AvatarFallback>Img2</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img3.png"} />
                            <AvatarFallback>Img3</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img4.png"} />
                            <AvatarFallback>Img4</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img5.png"} />
                            <AvatarFallback>Img5</AvatarFallback>
                          </Avatar>
                        </div>

                        <p className="text-lg font-medium">64 major creators</p>
                      </div>
                      <motion.div
                        className="cursor-pointer rounded-full border border-gray-500 p-3"
                        whileHover="hover"
                      >
                        <motion.div
                          variants={{
                            hover: { x: 3 },
                          }}
                        >
                          <MoveRight />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                  <Image
                    src={"/featured/featured2.png"}
                    alt="Featured image"
                    width={1200}
                    height={800}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <hr className="mt-8" />
                <div className="flex justify-between gap-10 pt-10 md:flex">
                  <Image
                    src={"/featured/featured3.png"}
                    alt="Featured image"
                    width={1200}
                    height={800}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                    className="h-auto w-full object-cover"
                  />
                  <div className="w-full max-w-3xl">
                    <h3 className="mb-12 text-4xl font-semibold">
                      Oloibiri 1997
                    </h3>

                    <p className="text-2xl leading-7 text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Expedita, dolorem. Rerum laboriosam provident quo harum
                      sunt deleniti, aperiam, dolor consequuntur quae temporibus
                      quis ratione sint similique ipsum possimus laborum ipsa.
                    </p>
                    <div className="mt-20 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="*:data-[slot=avatar]:ring-background flex -space-x-4 *:data-[slot=avatar]:ring-2">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img1.png"} />
                            <AvatarFallback>Img1</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img2.png"} />
                            <AvatarFallback>Img2</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img3.png"} />
                            <AvatarFallback>Img3</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img4.png"} />
                            <AvatarFallback>Img4</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={"/home/avatars/img5.png"} />
                            <AvatarFallback>Img5</AvatarFallback>
                          </Avatar>
                        </div>

                        <p className="text-lg font-medium">64 major creators</p>
                      </div>
                      <motion.div
                        className="cursor-pointer rounded-full border border-gray-500 p-3"
                        whileHover="hover"
                      >
                        <motion.div
                          variants={{
                            hover: { x: 3 },
                          }}
                        >
                          <MoveRight />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* mobile featured */}
            <div className="mt-8 p-10 md:hidden md:px-20 lg:px-30">
              <h2 className="font-bold">Featured products</h2>
              <hr className="mt-8" />

              <div>
                <div className="flex flex-col gap-10 pt-10">
                  <div className="relative">
                    <Image
                      src={"/featured/featured.png"}
                      alt="Featured image"
                      width={1200}
                      height={800}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                      className="h-auto w-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Text content */}
                    <div className="absolute inset-0 mt-8 text-center sm:mt-14">
                      <h3 className="text-xl font-bold text-white sm:text-5xl">
                        Boolean Egyptian
                      </h3>
                    </div>

                    {/* Arrow button */}
                    <motion.div
                      className="absolute right-8 bottom-8 cursor-pointer rounded-full border-2 border-white p-2 text-white transition-colors hover:bg-white hover:text-black sm:bottom-12 sm:p-4"
                      whileHover="hover"
                    >
                      <motion.div
                        variants={{
                          hover: { x: 3 },
                        }}
                      >
                        <MoveRight className="h-4 w-4 sm:h-6 sm:w-6" />
                      </motion.div>
                    </motion.div>
                  </div>

                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas numquam dolores, natus qui quis ad perferendis,
                      architecto cumque nihil ipsa dolore nobis recusandae eaque
                      est. Excepturi delectus laudantium culpa quia?
                    </p>
                    <div className="mt-4 flex items-center gap-6">
                      <div className="*:data-[slot=avatar]:ring-background flex -space-x-4 *:data-[slot=avatar]:ring-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img1.png"} />
                          <AvatarFallback>Img1</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img2.png"} />
                          <AvatarFallback>Img2</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img3.png"} />
                          <AvatarFallback>Img3</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img4.png"} />
                          <AvatarFallback>Img4</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img5.png"} />
                          <AvatarFallback>Img5</AvatarFallback>
                        </Avatar>
                      </div>

                      <p className="text-lg font-medium">64 major creators</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-10 pt-10">
                  <div className="relative">
                    <Image
                      src={"/featured/featured2.png"}
                      alt="Featured image"
                      width={1200}
                      height={800}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                      className="h-auto w-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Text content */}
                    <div className="absolute inset-0 mt-8 text-center sm:mt-14">
                      <h3 className="text-xl font-bold text-white sm:text-5xl">
                        Are We There Yet?
                      </h3>
                    </div>

                    {/* Arrow button */}
                    <motion.div
                      className="absolute right-8 bottom-8 cursor-pointer rounded-full border-2 border-white p-2 text-white transition-colors hover:bg-white hover:text-black sm:bottom-12 sm:p-4"
                      whileHover="hover"
                    >
                      <motion.div
                        variants={{
                          hover: { x: 3 },
                        }}
                      >
                        <MoveRight className="h-4 w-4 sm:h-6 sm:w-6" />
                      </motion.div>
                    </motion.div>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas numquam dolores, natus qui quis ad perferendis,
                      architecto cumque nihil ipsa dolore nobis recusandae eaque
                      est. Excepturi delectus laudantium culpa quia?
                    </p>
                    <div className="mt-4 flex items-center gap-6">
                      <div className="*:data-[slot=avatar]:ring-background flex -space-x-4 *:data-[slot=avatar]:ring-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img1.png"} />
                          <AvatarFallback>Img1</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img2.png"} />
                          <AvatarFallback>Img2</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img3.png"} />
                          <AvatarFallback>Img3</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img4.png"} />
                          <AvatarFallback>Img4</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img5.png"} />
                          <AvatarFallback>Img5</AvatarFallback>
                        </Avatar>
                      </div>

                      <p className="text-lg font-medium">64 major creators</p>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col gap-10 pt-10">
                  <div className="relative">
                    <Image
                      src={"/featured/featured3.png"}
                      alt="Featured image"
                      width={1200}
                      height={800}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                      className="h-auto w-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Text content */}
                    <div className="absolute inset-0 mt-8 text-center sm:mt-14">
                      <h3 className="text-xl font-bold text-white sm:text-5xl">
                        Oloibiri 1997
                      </h3>
                    </div>

                    {/* Arrow button */}
                    <motion.div
                      className="absolute right-8 bottom-8 cursor-pointer rounded-full border-2 border-white p-2 text-white transition-colors hover:bg-white hover:text-black sm:bottom-12 sm:p-4"
                      whileHover="hover"
                    >
                      <motion.div
                        variants={{
                          hover: { x: 3 },
                        }}
                      >
                        <MoveRight className="h-4 w-4 sm:h-6 sm:w-6" />
                      </motion.div>
                    </motion.div>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas numquam dolores, natus qui quis ad perferendis,
                      architecto cumque nihil ipsa dolore nobis recusandae eaque
                      est. Excepturi delectus laudantium culpa quia?
                    </p>
                    <div className="mt-4 flex items-center gap-6">
                      <div className="*:data-[slot=avatar]:ring-background flex -space-x-4 *:data-[slot=avatar]:ring-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img1.png"} />
                          <AvatarFallback>Img1</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img2.png"} />
                          <AvatarFallback>Img2</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img3.png"} />
                          <AvatarFallback>Img3</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img4.png"} />
                          <AvatarFallback>Img4</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"/home/avatars/img5.png"} />
                          <AvatarFallback>Img5</AvatarFallback>
                        </Avatar>
                      </div>

                      <p className="text-lg font-medium">64 major creators</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative text-white">
              <Image
                src="/auction/auctionBackground.png"
                alt="background"
                fill
                priority
                className="object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 z-10 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-20 p-8 md:p-18">
                <h1 className="mb-4 text-4xl">
                  See Upcoming Auctions and Exhibitions
                </h1>
                <Image
                  src={"/auction/arrow.png"}
                  alt="arrow image"
                  width={1200}
                  height={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                  className="mt-6 h-auto w-[50%] object-cover"
                />
                <Image
                  src={"/auction/auctionMain.png"}
                  alt="auction image"
                  width={1200}
                  height={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                  className="mt-6 h-auto w-full object-cover"
                />
              </div>
            </div>

            <hr className="mt-20" />
            <div className="flex items-center justify-between p-4 sm:p-8 md:p-20">
              <h1 className="text-3xl font-semibold sm:text-4xl">
                Explore marketplace
              </h1>
              <motion.div
                className="cursor-pointer rounded-full border border-gray-500 p-2"
                whileHover="hover"
              >
                <motion.div
                  variants={{
                    hover: { x: 3 },
                  }}
                >
                  <MoveRight />
                </motion.div>
              </motion.div>
            </div>
            <hr />
            <div className="flex items-center justify-between p-4 sm:p-8 md:p-20">
              <h1 className="text-3xl font-semibold sm:text-4xl">
                See auctions
              </h1>
              <motion.div
                className="cursor-pointer rounded-full border border-gray-500 p-2"
                whileHover="hover"
              >
                <motion.div
                  variants={{
                    hover: { x: 3 },
                  }}
                >
                  <MoveRight />
                </motion.div>
              </motion.div>
            </div>
            <hr className="mb-20" />
            <div className="relative">
              <Image
                src={"/creators/background.png"}
                alt="background-image"
                fill
                priority
                className="object-cover"
              />
              <div className="relative z-20 flex flex-col p-20 md:flex-row md:gap-40">
                <div>
                  <h1 className="mb-8 text-5xl font-bold lg:text-6xl">
                    TOP CREATORS OF
                    <br />
                    THE WEEK
                  </h1>{" "}
                  <p className="mt-10 flex max-w-3xl justify-center text-center">
                    “Everything always looked better in black and white.
                    Everything always as if it were the first time; there’s
                    always more people in a black and white photograph. It just
                    makes it seem that there were more people at a gig, more
                    people at a football match, than with colour photography.
                    Everything looks more exciting.”– Jack Lowden
                  </p>
                </div>
                <Image
                  src={"/creators/topCreator.png"}
                  alt="top"
                  width={200}
                  height={300}
                  className="flex h-auto w-[40%] justify-center object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
