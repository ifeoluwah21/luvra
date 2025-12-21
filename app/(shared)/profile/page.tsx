import Image from "next/image";
import React from "react";
import ProductCard from "./_components/ProductCard";
import { auth } from "@/lib/auth";
import { getNftsByUserId } from "@/lib/dal";

const ProfilePage = async () => {
  const session = await auth();
  if (!session) return null;
  const nfts = await getNftsByUserId(session.user.id);
  return (
    <main className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-10 md:gap-16">
      <section className="flex flex-col items-start gap-8 px-4 md:flex-row md:items-center lg:px-6">
        <figure>
          <Image
            src={session.user.image || "/placeholder.png"}
            width={100}
            height={100}
            alt="user avatar"
            className="aspect-square w-32 rounded-full object-cover"
          />
        </figure>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            {session.user.name}
          </h1>
          <p className="text-custom-text text-lg">{session.user.email}</p>
        </div>
      </section>
      <section className="flex flex-1 flex-col gap-10 px-4 lg:px-6">
        <nav className="border-b border-b-white/10">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li className="border-b-pry cursor-pointer border-b-2 py-3 whitespace-nowrap text-white">
              Created
            </li>
            <li className="text-custom-text hover:border-b--white/50 cursor-pointer border-b-2 border-b-transparent py-3 whitespace-nowrap transition-colors hover:border-b-white/50 hover:text-white">
              Collected
            </li>
            <li className="text-custom-text hover:border-b--white/50 cursor-pointer border-b-2 border-b-transparent py-3 whitespace-nowrap transition-colors hover:border-b-white/50 hover:text-white">
              Favorites
            </li>
            <li className="text-custom-text hover:border-b--white/50 cursor-pointer border-b-2 border-b-transparent py-3 whitespace-nowrap transition-colors hover:border-b-white/50 hover:text-white">
              Activity
            </li>
          </ul>
        </nav>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {nfts.map(({ id, url, title, creator }) => (
            <ProductCard
              key={id}
              id={id}
              url={url}
              creator={creator}
              name={title}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
