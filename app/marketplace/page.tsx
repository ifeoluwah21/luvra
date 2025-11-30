"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { introStore } from "@/store/introStore";

export default function Marketplace() {
  const { slideUp } = introStore();
  const [priceRange, setPriceRange] = useState([100, 150]);
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    artist: true,
  });

  const products = [
    {
      id: 1,
      name: "PHILOMENA '22",
      price: 3.9,
      artist: "Sarah Chen",
      image: "/marketplace/img1.png",
    },
    {
      id: 2,
      name: "BOOLEAN EGYPTIAN",
      price: 3.9,
      artist: "Marcus Reid",
      image: "/marketplace/img2.png",
    },
    {
      id: 3,
      name: "BLANC",
      price: 3.9,
      artist: "Elena Dubois",
      image: "/marketplace/img3.png",
    },
    {
      id: 4,
      name: "ELLIPSIA",
      price: 3.9,
      artist: "James Park",
      image: "/marketplace/img4.png",
    },
    {
      id: 5,
      name: "THE LAWMAKERS",
      price: 3.9,
      artist: "David Torres",
      image: "/marketplace/img5.png",
    },
    {
      id: 6,
      name: "VEIL",
      price: 3.9,
      artist: "Aisha Kumar",
      image: "/marketplace/img6.png",
    },
    {
      id: 7,
      name: "ALTERNATING",
      price: 3.9,
      artist: "Sofia Martinez",
      image: "/marketplace/img7.png",
    },
    {
      id: 8,
      name: "ROSEMARY '22",
      price: 3.9,
      artist: "Lin Zhang",
      image: "/marketplace/img8.png",
    },
    {
      id: 9,
      name: "BEVERLY",
      price: 3.9,
      artist: "Alex Johnson",
      image: "/marketplace/img9.png",
    },
    {
      id: 10,
      name: "BLANC",
      price: 3.9,
      artist: "Elena Dubois",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
    },
    {
      id: 11,
      name: "ELLIPSIA",
      price: 3.9,
      artist: "James Park",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
    {
      id: 12,
      name: "THE LAWMAKERS",
      price: 3.9,
      artist: "David Torres",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    },
    {
      id: 13,
      name: "VEIL",
      price: 3.9,
      artist: "Aisha Kumar",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    },
    {
      id: 14,
      name: "ALTERNATING",
      price: 3.9,
      artist: "Sofia Martinez",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop",
    },
    {
      id: 15,
      name: "ROSEMARY '22",
      price: 3.9,
      artist: "Lin Zhang",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop",
    },
    {
      id: 16,
      name: "BEVERLY",
      price: 3.9,
      artist: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    },
  ];

  const categories = [
    { id: "editorials", label: "Editorials", checked: true },
    { id: "fashion", label: "Fashion", checked: true },
    { id: "optics", label: "Optics", checked: false },
    { id: "art", label: "Art & Museum", checked: false },
    { id: "nature", label: "Nature", checked: false },
  ];

  const artists = [
    "All",
    "Sarah Chen",
    "Marcus Reid",
    "Elena Dubois",
    "James Park",
    "David Torres",
  ];

  interface ExpandedSections {
    category: boolean;
    price: boolean;
    artist: boolean;
  }

  const toggleSection = (section: keyof ExpandedSections): void => {
    setExpandedSections((prev: ExpandedSections) => ({
      ...prev, // Keep previous state
      [section]: !prev[section], // Toggle the specified section
    }));
  };

  return (
    <AnimatePresence>
      {slideUp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="min-h-screen bg-gray-50 py-4 sm:py-8"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {/* Search Bar & Controls */}
            <div className="mb-6 sm:mb-8">
              <div className="relative mb-4">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search art..."
                  className="focus:ring-opacity-5 w-full rounded-full border border-gray-200 bg-white py-3 pr-4 pl-12 text-sm shadow-sm transition-all focus:border-black focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row">
              {/* Filters Sidebar - Mobile Optimized */}
              <div className="w-full lg:w-72 lg:shrink-0">
                <div className="sticky top-4 rounded-2xl bg-white p-4 shadow-sm sm:p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <SlidersHorizontal className="h-5 w-5" />
                    <h2 className="text-lg font-semibold">Filters</h2>
                  </div>

                  {/* Categories */}
                  <div className="mb-6 border-b border-gray-100 pb-6">
                    <button
                      onClick={() => toggleSection("category")}
                      className="mb-4 flex w-full items-center justify-between text-sm font-medium transition-colors hover:text-gray-600"
                    >
                      <span>By Category</span>
                      {expandedSections.category ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>

                    {expandedSections.category && (
                      <div className="space-y-3">
                        {categories.map((category) => (
                          <label
                            key={category.id}
                            className="flex cursor-pointer items-center gap-3 transition-colors hover:text-gray-600"
                          >
                            <input
                              type="checkbox"
                              defaultChecked={category.checked}
                              className="h-4 w-4 rounded border-gray-300 text-black focus:ring-2 focus:ring-black focus:ring-offset-0"
                            />
                            <span className="text-sm">{category.label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price Range */}
                  <div className="mb-6 border-b border-gray-100 pb-6">
                    <button
                      onClick={() => toggleSection("price")}
                      className="mb-4 flex w-full items-center justify-between text-sm font-medium transition-colors hover:text-gray-600"
                    >
                      <span>By Price</span>
                      {expandedSections.price ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>

                    {expandedSections.price && (
                      <div>
                        <div className="mb-4 flex items-center justify-between text-sm">
                          <span className="font-semibold">
                            ${priceRange[0]}
                          </span>
                          <span className="text-gray-400">—</span>
                          <span className="font-semibold">
                            ${priceRange[1]}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={priceRange[1]}
                          onChange={(e) =>
                            setPriceRange([
                              priceRange[0],
                              parseInt(e.target.value),
                            ])
                          }
                          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-black"
                        />
                        <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-500">
                          <div>Min: $0</div>
                          <div className="text-right">Max: $200</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Artists */}
                  <div>
                    <button
                      onClick={() => toggleSection("artist")}
                      className="mb-4 flex w-full items-center justify-between text-sm font-medium transition-colors hover:text-gray-600"
                    >
                      <span>By Artist</span>
                      {expandedSections.artist ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>

                    {expandedSections.artist && (
                      <div className="space-y-2">
                        {artists.map((artist, index) => (
                          <button
                            key={index}
                            className="block w-full text-left text-sm text-gray-600 transition-colors hover:text-black"
                          >
                            {artist}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button className="mt-6 w-full rounded-lg bg-black py-2.5 text-sm font-medium text-white transition-transform hover:scale-[0.98] active:scale-95">
                    Apply Filters
                  </button>
                </div>
              </div>

              {/* Product Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
                  {products.map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ y: -4 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative mb-3 aspect-4/5 overflow-hidden rounded-xl bg-gray-200 shadow-md transition-shadow group-hover:shadow-xl">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute right-0 bottom-0 left-0 translate-y-4 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
                          <Link
                            href={`/marketplace/${product.name.replace(/\s+/g, "-").toLowerCase()}`}
                          >
                            <button className="w-full rounded-lg bg-white py-2 text-xs font-medium text-black transition-colors hover:bg-gray-100 active:bg-gray-200 sm:text-sm">
                              View
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className="px-1">
                        <h3 className="mb-1 line-clamp-2 text-xs font-semibold tracking-wide text-gray-900 sm:text-sm">
                          {product.name}
                        </h3>
                        <p className="mb-1 truncate text-xs text-gray-500">
                          {product.artist}
                        </p>
                        <p className="text-sm font-bold text-black sm:text-base">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
