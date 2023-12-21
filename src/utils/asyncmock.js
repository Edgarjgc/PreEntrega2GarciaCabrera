const productos = [
  //productos
  {
    id: 1,
    title: "Clay Bar Kit",
    description:
      "The OG Clay Bar Kit is the perfect way to take your detail to the next level by removing embedded contaminants and pollution to restore your rough paintwork to smooth-as-glass feeling!",
    stock: 15,
    type: "Chemicals",
    imageProduct: {
      firtsImage: "https://i.ibb.co/NxT4Q1z/claybar.jpg",
      secondImage:
        "https://media.ldlc.com/r1600/ld/products/00/05/74/25/LD0005742587_1_0005869333.jpg",
    },

    price: 19.99,
  },

  {
    id: 2,
    title: "Leather Care Kit",
    description:
      "Get the best results and everything you need in one place with the New Leather Care Kit! Best way to keep new leather looking and smelling new.",
    stock: 7,
    type: "Chemicals",
    imageProduct: {
      firtsImage: "https://i.ibb.co/6DBxZ22/Leatherkit.jpg",
    },
    price: 64.99,
  },

  {
    id: 3,
    title: " Wheel Kit",
    description:
      "Give a signature shine to your wheels, underriage, engine bay, and more on your car’s exterior with the All Purpose Exterior & Wheel Cleaning Kit! Easily deep clean your wheels, rims, plastic grilles, trim, and more with this ultra versatile exterior kit!",
    stock: 20,
    type: "Chemicals",
    imageProduct: {
      firtsImage: "https://i.ibb.co/rvmrdZ0/wheel-trimkit.jpg",
    },
    price: 39.99,
  },

  {
    id: 4,
    title: "Microfiber Towel",
    description:
      "Orange Banger Towels are fine 70/30 microfiber interior detailing towels that clean the most sensitive interior surfaces without scratching available in regular 16” x 16” and large 24” x 16” size.",
    stock: 6,
    type: "Accesories",
    imageProduct: {
      firtsImage: "https://i.ibb.co/PT7M186/microfibertowel.jpg",
    },
    price: 9.99,
  },

  {
    id: 5,
    title: "Detailing Bucket",
    description:
      "Ever wish you could see exactly what is going on inside your bucket? Well, now you can with the all-new Ultra Clear Detailing Bucket! It’s the perfect way to see all that dirt and grime that you pull off your car during your wash while looking awesome and having tons of fun at the same time!",
    stock: 6,
    type: "Accesories",
    imageProduct: {
      firtsImage: "https://i.ibb.co/xjTKkpW/detailingbucket.jpg",
    },
    price: 27.99,
  },

  {
    id: 6,
    title: "Fabric Cleaner",
    description:
      "Fabric Clean dissolves and removes dirt, odors, and stains from automotive carpets, fabrics, and upholstery with hi-sudsing, deep penetrating foaming bubbles for professional detailing results and comes in concentrated and ready to use formulas!",
    stock: 3,
    type: "Chemicals",
    imageProduct: {
      firtsImage: "https://i.ibb.co/N2xf0C3/fabriccleaner.jpg",
    },
    price: 9.99,
  },

  {
    id: 7,
    title: "Odor Eliminator",
    description:
      "Ghosted is the powerful odor eliminator that targets bad odors at the source, making bad smells disappear like a ghost!",
    stock: 1,
    type: "Chemicals",
    imageProduct: {
      firtsImage: "https://i.ibb.co/Y0F4h3V/odoreliminator.jpg",
    },
    price: 14.99,
  },

  {
    id: 8,
    title: "Interior Cleaner",
    description:
      "Total Interior is the one product that cleans and protects virtually any car interior surface in three great scents! Simply mist and wipe for professional cleaning results everywhere, from the dashboard to glass and more",
    stock: 5,
    type: "Chemicals",
    imageProduct: {
      firtsImage: "https://i.ibb.co/RYYk856/interiorcleaningproduct.jpg",
    },
    price: 27.99,
  },
  //servicios
  {
    id: 9,
    title: "Full Detailing",
    description:
      "Our full detail car wash includes a comprehensive exterior wash, thorough interior vacuuming, and meticulous upholstery treatment. Additionally, we provide window cleaning, tire dressing to leave your car looking and feeling refreshed and revitalized.",
    stock: 7,
    type: "Services",
    imageProduct: {
      firtsImage: "https://i.ibb.co/9vZr2SK/fulldetail.jpg",
    },
    price: 149.99,
  },

  {
    id: 10,
    title: "Interior Detailing",
    description:
      "- Vacuum all seats and carpets - Shampoo all seats and carpets - Pet hair/Sand removal - Clean and Condition leather seats (if applicable) - Detail all interior panels and glass - Detail Trunk area - Detail all door jambs - Complete interior protection - Steam cleaning",
    stock: 7,
    type: "Services",
    imageProduct: {
      firtsImage: "https://i.ibb.co/L1M7b86/interiordetail.jpg",
    },
    price: 84.99,
  },

  {
    id: 11,
    title: "Window Coating",
    description:
      "- Protection from Chemical Stains,Scratches, UV Rays - Ease Of Cleaning - Gloss",
    stock: 7,
    type: "Services",
    imageProduct: {
      firtsImage: "https://i.ibb.co/tq58D88/Windowcoating.jpg",
    },
    price: 45.99,
  },
  {
    id: 12,
    title: "Paint Correction",
    description:
      "- -Hand Wash with Decontamination Process on All Exterior Parts - Clay Bar Process - Paint Decon (iron X) - Single Stage Polish (removes up to 50% of imperfections)",
    stock: 7,
    type: "Services",
    imageProduct: {
      firtsImage: "https://i.ibb.co/0cy10Z0/paintcorrection.jpg",
    },
    price: 249.99,
  },
  {
    id: 13,
    title: "Engine Detailing",
    description:
      "Revitalize your car's engine with our engine detail wash. Our expert technicians will clean and degrease every nook and cranny, restoring its pristine condition. Experience improved performance and a gleaming engine bay that impresses every time you pop the hood.",
    stock: 7,
    type: "Services",
    imageProduct: {
      firtsImage: "https://i.ibb.co/jZQPfdr/enginedetail.jpg",
    },
    price: 29.99,
  },
  {
    id: 14,
    title: "Headlight Restoration",
    description:
      "- Headlights Restored and Protected - Guarantee that headlights wont fade for 2 years (minimum)",
    stock: 7,
    type: "Services",
    imageProduct: {
      firtsImage: "https://i.ibb.co/VgYmBBG/headlightrestoration.jpg",
    },
    price: 29.99,
  },
  {
    id: 15,
    title: "Ceramic Coating",
    description:
      "Hand Wash with Decontamination Process on All Exterior Parts Including Wheels - Clay Bar Process - Paint Decon (Iron X) - Two Stage Compound and Polish (removes up to 85% of imperfections) - Our 2 year H9 Ceramic Coating",
    stock: 7,
    type: "Services",
    imageProduct: { firtsImage: "https://i.ibb.co/LSJCJ4C/coating.jpg" },
    price: 699.99,
  },
  {
    id: 16,
    title: "Clay & Polish",
    description:
      "Revitalize your vehicle with our clay and polish service. Our skilled technicians use premium clay bar treatments to remove imperfections, followed by a meticulous polishing process for a sleek, glossy finish. Treat your car to a rejuvenating makeover, leaving it looking showroom-ready.",
    stock: 7,
    type: "Services",
    imageProduct: { firtsImage: "https://i.ibb.co/gjrSHYJ/clay-polish.jpg" },
    price: 99.99,
  },

  {
    id: 17,
    title: " Utility Detailing Cart",
    description:
      "The Soft Stool Ultimate Rolling Detailing & Utility Cart is the hyper functional and ultra comfortable supreme mobile detailing stool and station that makes even the most time consuming jobs a piece of cake!",
    stock: 3,
    type: "Equipment",
    imageProduct: { firtsImage: "https://i.ibb.co/ZxrMgJY/detailingcart.jpg" },
    price: 159.99,
  },
];

export default productos;
