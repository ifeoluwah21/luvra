export type NftProduct = {
  name: string;
  creator: string;
  img: string;
  description: string;
  category: "art" | "gaming" | "membership" | "music" | "photography";
  price: number;
};
export const nftProducts: NftProduct[] = [
  {
    name: "Abstract Minds",
    creator: "Artistone",
    price: 0.2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6nbRLKHl7hrzcq8HZGlB8mF08FJQTPzLVjUplgnBKHm-JR9z9WX4k0SmgRpg9Fw1BSZMzyOzzHjqXTiVcpKn2_KTjDVkkWlCDIwlnhpvW1Bwgphr9esnaNcxbjWRc9BlIrd148oKiEhLZWaCRoz8EiD8f7U-cESsTv3SqnJw5mDiXcMjB0zUfs3h_S4udz-_hTIxVnNnHmahABiPjDO-kgX4AwFvLoVz4Brmx7SqacG0XJaKJgb0dKuynxJ3SFPfTjElY9HufC9Xq",
    category: "art",
    description:
      "Pixel Punks is a rebellious squad of retro-styled heroes rendered in saturated neon pixels, each brimming with attitude. The collection pays homage to arcade legends while layering in modern cyberpunk influences, making every avatar feel ready to leap into a competitive metaverse arena.",
  },
  {
    name: "Pixel Punks",
    creator: "CryptoCrew",
    price: 1.2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHyU9FtBN_5mDyQb0QsCSQoURkAG8FvonHhh3k-5IUd-ZQcn-6G1m4IQSBXKPexcWvQ8gnmtH1xpd3E6yo3H_HURX9MQnzk-nm6ob5xugJGHka_fW7-ir0FQEbeLFpceyqmauvZjNV0PqYjTS_UUz3G9_fr5anr3OeZ8ijuRArEELu0a7rdyq9dxnIgGs5tr_q5CxaGhvWyif7E4eaHSzL03Qfpm732M_PzIWaf81dlcNHShe_MkoBwRJuyxC3blORL07Onj78qvG2",
    category: "gaming",
    description:
      "FutureScapes grants its holders access to a rotating gallery of high-fidelity holographic environments, each crafted to showcase the artist’s vision of tomorrow’s cities and sanctuaries. Membership includes seasonal unlocks, behind-the-scenes concept art, and invitations to collaborative world-building sessions.",
  },
  {
    name: "FutureScapes",
    creator: "Visionary",
    price: 3.4,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQZnedbIhs58I5AG659rytzUXJvS5NXNH93XndbGQ4yCE2P3UMuzNqvOywec7k7M0ZKHWvzVOH8wRKzHPOWwEaqJTaRppC4ymLsWZ4MjpZQFJ5j5zJmEZvnu-_GZTYFYWEXSzKvQxMup8Q-ya_iegpAOjCDjk31vHAzj40Uj97X3C3aouETjnjroXtt_Y1huLvUgzhTiiak85XSjSz21bX8ItFWwzRmRKirGS-QJFfLT8rwtpFmx7atad80gEFiVNPwV77yDrVSaFn",
    category: "membership",
    description:
      "Animata Character is a fully rigged performer sculpted in striking synthwave colors, complete with looping audio stems and stage-ready animations. Collectors receive access to motion capture updates, remixable voice packs, and community showcases where the avatar headlines virtual concerts.",
  },
  {
    name: "Animata Character",
    creator: "3D Studio",
    price: 14.2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7ydNZU15SSSigfLUqn6UAK4MNAYhRQInxU7MNJWHUv2-drru55aPFA-x8qOwKuVdKJLv3ihJ0nqd-xTlKVePfqQ7OYAiBhcnF_nN0RPyUwIZerdY8XCY_XAzyuYiVzBLwbU1gYGJaLXERybmZXwaHOYQr4NvO-fDCZgOZWzDFVJbUNC9L0MiJaRPMVAC1r77SH8yy9S602G09E-0MYUi5iqkoFK4JpXcnt3Sapiltq2JaQTVxSev03-tsCwyahmNAT_nsGq0hRFe",
    category: "music",
    description:
      "Digital Dreams captures an ethereal bloom of city light diffused through rainfall, rendered with painterly textures that feel almost tactile. The composition invites viewers to linger on reflective surfaces, discovering subtle animations that emulate the pulse of a metropolis after dark.",
  },
  {
    name: "Digital Dreams",
    creator: "Painterly",
    price: 21.4,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfuVRUgCIWtiaS9XK7Mk5qO1TVhyW_lAJCcumY28PLEogffdVTK36oFFY2UMHT_zvgHVphLqkC5VWkD1S5p1w3o-AOaocqbBct5H3zryx37aBKm0VEsdKiaiRPtLlFggAggujnD-HxmYZtjGeojsk4VFWolZi913YgeFFPGxIheKUbhtsaj4wVngzvZaXriwpgKEH71ocd_u5UP584aFD4t4ZWbppUSSIH81eNou0xTUQrdGCeRKUDdZ0R-9LUhAXXAizIRyNKY1hl",
    category: "photography",
    description:
      "Neon Nights floods the senses with a kaleidoscope of electric hues, depicting a futuristic boulevard drenched in rain and reflective chrome. The piece balances sharp architectural lines with soft glows, conjuring the sensation of wandering through a sleepless city ruled by light.",
  },
  {
    name: "Neon Nights",
    creator: "CyberArtist",
    price: 22.4,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6nbRLKHl7hrzcq8HZGlB8mF08FJQTPzLVjUplgnBKHm-JR9z9WX4k0SmgRpg9Fw1BSZMzyOzzHjqXTiVcpKn2_KTjDVkkWlCDIwlnhpvW1Bwgphr9esnaNcxbjWRc9BlIrd148oKiEhLZWaCRoz8EiD8f7U-cESsTv3SqnJw5mDiXcMjB0zUfs3h_S4udz-_hTIxVnNnHmahABiPjDO-kgX4AwFvLoVz4Brmx7SqacG0XJaKJgb0dKuynxJ3SFPfTjElY9HufC9Xq",
    category: "art",
    description:
      "Virtual Warriors assembles an elite roster of combat-ready avatars sculpted with high-poly detailing and reactive armor shaders. Each warrior comes with lore-driven backstories, unlockable battle emotes, and a roadmap of seasonal tournaments designed to crown champions within the community.",
  },
  {
    name: "Virtual Warriors",
    creator: "GameMaster",
    price: 4.5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHyU9FtBN_5mDyQb0QsCSQoURkAG8FvonHhh3k-5IUd-ZQcn-6G1m4IQSBXKPexcWvQ8gnmtH1xpd3E6yo3H_HURX9MQnzk-nm6ob5xugJGHka_fW7-ir0FQEbeLFpceyqmauvZjNV0PqYjTS_UUz3G9_fr5anr3OeZ8ijuRArEELu0a7rdyq9dxnIgGs5tr_q5CxaGhvWyif7E4eaHSzL03Qfpm732M_PzIWaf81dlcNHShe_MkoBwRJuyxC3blORL07Onj78qvG2",
    category: "gaming",
    description:
      "Elite Club Access is the gateway to a private ecosystem of curated drops, live-streamed salons, and IRL meetups hosted in architecturally striking venues. Members receive concierge support, periodic collaboration pieces from renowned designers, and governance votes on future programming.",
  },
  {
    name: "Elite Club Access",
    creator: "TheClub",
    price: 5.4,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQZnedbIhs58I5AG659rytzUXJvS5NXNH93XndbGQ4yCE2P3UMuzNqvOywec7k7M0ZKHWvzVOH8wRKzHPOWwEaqJTaRppC4ymLsWZ4MjpZQFJ5j5zJmEZvnu-_GZTYFYWEXSzKvQxMup8Q-ya_iegpAOjCDjk31vHAzj40Uj97X3C3aouETjnjroXtt_Y1huLvUgzhTiiak85XSjSz21bX8ItFWwzRmRKirGS-QJFfLT8rwtpFmx7atad80gEFiVNPwV77yDrVSaFn",
    category: "membership",
    description:
      "Sonic Waves is an evolving audio collectible featuring layered ambient beats, modular synth riffs, and field recordings captured across global coastlines. Owners unlock remix stems, binaural mixes for meditative listening, and quarterly collaborations with emerging electronic producers.",
  },
  {
    name: "Sonic Waves",
    creator: "AudioPhile",
    price: 8.5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7ydNZU15SSSigfLUqn6UAK4MNAYhRQInxU7MNJWHUv2-drru55aPFA-x8qOwKuVdKJLv3ihJ0nqd-xTlKVePfqQ7OYAiBhcnF_nN0RPyUwIZerdY8XCY_XAzyuYiVzBLwbU1gYGJaLXERybmZXwaHOYQr4NvO-fDCZgOZWzDFVJbUNC9L0MiJaRPMVAC1r77SH8yy9S602G09E-0MYUi5iqkoFK4JpXcnt3Sapiltq2JaQTVxSev03-tsCwyahmNAT_nsGq0hRFe",
    category: "music",
    description:
      "Urban Jungle juxtaposes towering glass facades with bursts of reclaimed greenery, documenting the artist’s ongoing quest to find nature’s echoes in the heart of megacities. Each photograph arrives with location notes, day-to-night time-lapse variations, and curator commentary on sustainable design.",
  },
  {
    name: "Urban Jungle",
    creator: "LensCapture",
    price: 9.8,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfuVRUgCIWtiaS9XK7Mk5qO1TVhyW_lAJCcumY28PLEogffdVTK36oFFY2UMHT_zvgHVphLqkC5VWkD1S5p1w3o-AOaocqbBct5H3zryx37aBKm0VEsdKiaiRPtLlFggAggujnD-HxmYZtjGeojsk4VFWolZi913YgeFFPGxIheKUbhtsaj4wVngzvZaXriwpgKEH71ocd_u5UP584aFD4t4ZWbppUSSIH81eNou0xTUQrdGCeRKUDdZ0R-9LUhAXXAizIRyNKY1hl",
    category: "photography",
    description:
      "Modern Chaos channels a whirlwind of emotion through bold strokes, layered spray techniques, and unexpected negative space that invites interpretation. The artwork pulses with kinetic energy, encouraging collectors to explore the interplay between order, entropy, and the rhythm of modern life.",
  },
  {
    name: "Modern Chaos",
    creator: "AbstractKing",
    price: 9.9,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6nbRLKHl7hrzcq8HZGlB8mF08FJQTPzLVjUplgnBKHm-JR9z9WX4k0SmgRpg9Fw1BSZMzyOzzHjqXTiVcpKn2_KTjDVkkWlCDIwlnhpvW1Bwgphr9esnaNcxbjWRc9BlIrd148oKiEhLZWaCRoz8EiD8f7U-cESsTv3SqnJw5mDiXcMjB0zUfs3h_S4udz-_hTIxVnNnHmahABiPjDO-kgX4AwFvLoVz4Brmx7SqacG0XJaKJgb0dKuynxJ3SFPfTjElY9HufC9Xq",
    category: "art",
    description:
      "Retro Arcade is a celebration of joystick-era nostalgia, blending saturated color palettes with easter eggs referencing iconic levels and boss fights. The artwork evolves over time with animated CRT flickers, collectible badge drops, and community-voted mini-games hidden within the pixels.",
  },
  {
    name: "Retro Arcade",
    creator: "8BitHero",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHyU9FtBN_5mDyQb0QsCSQoURkAG8FvonHhh3k-5IUd-ZQcn-6G1m4IQSBXKPexcWvQ8gnmtH1xpd3E6yo3H_HURX9MQnzk-nm6ob5xugJGHka_fW7-ir0FQEbeLFpceyqmauvZjNV0PqYjTS_UUz3G9_fr5anr3OeZ8ijuRArEELu0a7rdyq9dxnIgGs5tr_q5CxaGhvWyif7E4eaHSzL03Qfpm732M_PzIWaf81dlcNHShe_MkoBwRJuyxC3blORL07Onj78qvG2",
    description: "Vintage arcade cabinet art packed with nostalgia.",
    category: "gaming",
    price: 4.2,
  },
];
