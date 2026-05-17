"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const artworks = [
  // Portrait Paintings
  { id: 34, title: "The Greenwalds", category: "Portrait Paintings", image: "/Portrait Paintings/The Greenwalds.jpg" },
  { id: 31, title: "Portrait of my Mother", category: "Portrait Paintings", image: "/Portrait Paintings/Portrait Painting Mom.jpg" },
  { id: 32, title: "Sara", category: "Portrait Paintings", image: "/Portrait Paintings/Portrait Painting Sara.jpg" },
  { id: 33, title: "Self Portrait", category: "Portrait Paintings", image: "/Portrait Paintings/Self Portrait.jpg" },

  // Oil Sketches
  { id: 14, title: "Chuck", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Sketch Oil Goatee.jpg" },
  { id: 9, title: "Muse", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Muse_.jpg" },
  { id: 11, title: "Rebecca", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Rebecca.JPG" },
  { id: 5, title: "Alaina", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Alaina.PNG" },
  { id: 1, title: "Ana", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Oil Sketch Ana.jpg" },
  { id: 4, title: "Mattisse", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Oil Sketch Mattisse.jpg" },
  { id: 7, title: "Elderly Woman", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Elderly Woman.PNG" },
  { id: 8, title: "Johnathan", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Johnathan.JPG" },
  { id: 2, title: "Bob", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Oil Sketch Bob.jpg" },
  { id: 3, title: "Jim", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Oil Sketch Jim.jpg" },
  { id: 6, title: "Stephanie", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Blonde Stephanie.PNG" },
  { id: 10, title: "Pearl Earring", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Pearl Earring.PNG" },
  { id: 13, title: "Sherman", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Sherman.PNG" },
  { id: 12, title: "Sara", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Sara.JPG" },

  // Drawings
  { id: 19, title: "Camille", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Camille.JPG" },
  { id: 20, title: "Ballerina 1", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Girl 1.JPG" },
  { id: 21, title: "Ballerina 2", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Girl 2.JPG" },
  { id: 22, title: "Ballerina 3", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Girl 3.JPG" },
  { id: 23, title: "Ballerina 4", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Girl 4.JPG" },
  { id: 24, title: "Izabel", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Girl 5.JPG" },
  { id: 25, title: "Vivi", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Girl 6.JPG" },
  { id: 17, title: "Winston Churchill", category: "Graphite Drawings", image: "/Portrait drawing/Graphite Drawing Winston Churchill.jpg" },
  { id: 18, title: "Alaina", category: "Graphite Drawings", image: "/Portrait drawing/Graphite Portrait Alaina.jpg" },
  { id: 16, title: "Ariane", category: "Graphite Drawings", image: "/Portrait drawing/Graphite Drawing Ariane_.jpg" },
  { id: 15, title: "Gypsy Girl", category: "Charcoal Studies", image: "/Portrait drawing/Charcoal Portrait Gypsy_.jpg" },

  // Pet Portraits
  { id: 26, title: "Benny", category: "Pet Portrait", image: "/Pet portrait/Pet Portrait Oil Benny.jpg" },

    // Artworks For Sale
  { id: 27, title: "Alaina", category: "Artworks For Sale", price: "$200", image: "/Artworks For Sale/(Price - $200)Portrait Oil Sketch Alaina (Size 8_x10_).PNG" },
  { id: 28, title: "Muse", category: "Artworks For Sale", price: "$500", image: "/Artworks For Sale/(Price 500)ortrait Oil Sketch Muse  (Size 18_x24_).JPG" },
  { id: 29, title: "Rebecca", category: "Artworks For Sale", price: "$300", image: "/Artworks For Sale/Price (300) - Portrait Oil Sketch Rebecca (size 11_x14_).JPG" },
  { id: 30, title: "Chuck", category: "Artworks For Sale", price: "$500", image: "/Artworks For Sale/Price (500) Portrait Sketch Oil Goatee (Size 18_x24_).JPG" },
];
