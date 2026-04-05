import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout"; 
const products = {
  mens: [

    {
  slug: "pangeos-polo-shirt",
  name: "Pangeos Polo Shirt",
  image: "/images/style001.jpg", // make sure this matches your file
  meta: "Cotton Rich | GSM: 200G | Premium Polo",
  sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  cm: ["80", "85", "90", "95", "100", "105"],
  features: ["Cotton Rich", "Regular Fit", "Premium Polo"],
  box: "5 Pcs / Box",
  colors: [
    "#e3b53c", "#000000", "#5c7f97",  "#4b5d1f",  "#6b0012", "#cbb28f", "#2b8c99", "#8ea6b7", "#6c7078"   
  ]
},
    {
      slug: "lebron-tee",
      name: "LeBron Tee",
      image: "/images/style002.jpg",
      meta: "Tencel | GSM: 210G | Premium Tees",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      cm: ["80", "85", "90", "95", "100", "105"],
      features: ["Tencel Fabric", "Regular Fit", "Premium Tees"],
      box: "5 Pcs / Box",
      colors: ["#e3b53c", "#e5e5e5", "#000000", "#5c7f97", "#4b5d1f", "#6b0012", "#cbb28f", "#2b8c99", "#8ea6b7", "#6c7078"],
    },

    {
      slug: "atlas-track-pant",
      name: "Atlas Track Pant",
      image: "/images/style003.jpg",
      meta: "Cotton Rich | GSM: 190G | Premium Track",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      cm: ["80", "85", "90", "95", "100", "105"],
      features: ["Cotton Rich", "Regular Fit", "Premium Track"],
      box: "3 Pcs / Box",
      colors: ["#000", "#888", "#0a2a43", "#2f2f2f", "#556b2f", "#3a5a8f"],
    },

    {
      slug: "vibe-shorts",
      name: "Vibe Shorts",
      image: "/images/style004.jpg",
      meta: "Cotton Rich | GSM: 190G | Premium Shorts",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      cm: ["80", "85", "90", "95", "100", "105"],
      features: ["Cotton Rich", "Regular Fit", "Premium Shorts"],
      box: "3 Pcs / Box",
      colors: ["#000", "#888", "#0a2a43", "#2f2f2f", "#556b2f", "#3a5a8f"],
    },

    {
      slug: "titan-jogger",
      name: "Titan Jogger Pant",
      image: "/images/style005.jpg",
      meta: "Cotton Rich | GSM: 190G | Premium Jogger",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      cm: ["80", "85", "90", "95", "100", "105"],
      features: ["Cotton Rich", "Regular Fit", "Premium Jogger"],
      box: "3 Pcs / Box",
      colors: ["#000", "#888", "#0a2a43", "#2f2f2f", "#556b2f", "#3a5a8f"],
    },

    {
      slug: "oscar-vest",
      name: "Oscar Vest RN",
      image: "/images/style006.jpg",
      meta: "100% Cotton | GSM: 130G | Premium Vest",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      cm: ["80", "85", "90", "95", "100", "105"],
      features: ["100% Cotton", "Regular Fit", "Premium Vest"],
      box: "10 Pcs / Box",
      colors: ["#ffffff"],
    },

    {
      slug: "active-trunk",
      name: "Active Trunk OE",
      image: "/images/style007.jpg",
      meta: "Cotton Spandex | GSM: 180G | Short Trunk",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      cm: ["80", "85", "90", "95", "100", "105"],
      features: ["Cotton Spandex", "Regular Fit", "Short Trunk"],
      box: "3 Pcs / Box",
      colors: ["#000", "#888", "#0a2a43", "#2f2f2f", "#556b2f", "#3a5a8f"],
    },

    {
      slug: "alfa-trunk",
      name: "Alfa Trunk OE",
      image: "/images/style008.jpg",
      meta: "Cotton Spandex | GSM: 180G | Short Trunk",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      cm: ["80", "85", "90", "95", "100", "105"],
      features: ["Cotton Spandex", "Regular Fit", "Short Trunk"],
      box: "3 Pcs / Box",
      colors: ["#000", "#888", "#0a2a43", "#2f2f2f", "#556b2f", "#3a5a8f"],
    },

    {
      slug: "classic-trunk",
      name: "Classic Trunk OE",
      image: "/images/style009.jpg",
      meta: "Tencel | GSM: 200G | Short Trunk",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      cm: ["80", "85", "90", "95", "100", "105"],
      features: ["Tencel", "Regular Fit", "Short Trunk"],
      box: "3 Pcs / Box",
      colors: ["#ffffff"],
    },
  ],

  womens: [
    {
  slug: "smiley-top",
  name: "Smiley Top",
  image: "/images/style10.jpg",
  meta: "Cotton Rich | GSM: 165G | Premium Top",
  sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  cm: ["80", "85", "90", "95", "100", "105"],
  features: ["Cotton Rich", "Regular Fit", "Premium Top"],
  box: "5 Pcs / Box",
  colors: ["#9333ea", "#b8a9c9", "#ff6b81", "#5f9ea0", "#6b8e23", "#c08081"],
},

{
  slug: "smiley-teen-top",
  name: "Smiley Teen Top",
  image: "/images/style11.jpg",
  meta: "Tencel | GSM: 210G | Premium Top",
  sizes: ["S", "M", "L"],
  cm: ["80", "85", "90"],
  features: ["Tencel", "Regular Fit", "Premium Top"],
  box: "5 Pcs / Box",
  colors: ["#9333ea", "#b8a9c9", "#ff6b81", "#5f9ea0", "#6b8e23", "#c08081"],
},

{
  slug: "smiley-track",
  name: "Smiley Track",
  image: "/images/style12.jpg",
  meta: "Cotton Rich | GSM: 190G | Premium Track",
  sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  cm: ["80", "85", "90", "95", "100", "105"],
  features: ["Cotton Rich", "Regular Fit", "Premium Track"],
  box: "3 Pcs / Box",
  colors: ["#7b5c8e", "#cfcfcf", "#2f2f2f", "#ff4da6", "#4e79a7", "#0b3c5d"],
},

{
  slug: "sara-kurthi-pant",
  name: "Sara Kurthi Pant - Woven",
  image: "/images/style13.jpg",
  meta: "Reyon Spandex | GSM: 200G | Premium Kurthi",
  sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  cm: ["80", "85", "90", "95", "100", "105"],
  features: ["Reyon Spandex", "Narrow Fit", "Premium Kurthi"],
  box: "5 Pcs / Box",
  colors: ["#000000", "#e5e5e5", "#cbb28f", "#ff1493", "#ff0000", "#003366"],
},

{
  slug: "keira-kurthi-pant",
  name: "Keira Kurthi Pant - Knitted",
  image: "/images/style14.jpg",
  meta: "Tencel | GSM: 210G | Premium Kurthi",
  sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  cm: ["80", "85", "90", "95", "100", "105"],
  features: ["Tencel", "Slim Fit", "Premium Kurthi"],
  box: "5 Pcs / Box",
  colors: ["#000000", "#e5e5e5", "#cbb28f", "#ff1493", "#ff0000", "#003366"],
},

{
  slug: "lisa-jogger-pant",
  name: "Lisa Jogger Pant",
  image: "/images/style15.jpg",
  meta: "Reyon Spandex | GSM: 200G | Premium Jogger",
  sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  cm: ["80", "85", "90", "95", "100", "105"],
  features: ["Reyon Spandex", "Narrow Fit", "Premium Jogger"],
  box: "5 Pcs / Box",
  colors: ["#000000", "#e5e5e5", "#4e5f9a", "#cbb28f", "#8b0000", "#003366"],
}
  ],

  kids: [
  {
    slug: "scooby-tee",
    name: "Scooby Tee",
    image: "/images/style16.jpg",
    meta: "Cotton Rich | GSM: 165G | Premium Tee",
    sizes: ["5-6", "6-7", "7-8", "8-9"],
    cm: ["60", "65", "70", "75"],
    features: ["Cotton Rich", "Regular Fit", "Premium Tee"],
    box: "5 Pcs / Box",
    colors: ["#e3b53c", "#d2a1a1", "#000000", "#5c7f97", "#4b5d1f", "#6b0012", "#cbb28f", "#2b8c99", "#8ea6b7", "#6c7078"],
  },

  {
    slug: "jerry-tee",
    name: "Jerry Tee",
    image: "/images/style17.jpg",
    meta: "Tencel | GSM: 210G | Premium Tee",
    sizes: ["5-6", "6-7", "7-8", "8-9"],
    cm: ["60", "65", "70", "75"],
    features: ["Tencel", "Regular Fit", "Premium Tee"],
    box: "5 Pcs / Box",
    colors: ["#e3b53c", "#d2a1a1", "#000000", "#5c7f97", "#4b5d1f", "#6b0012", "#cbb28f", "#2b8c99", "#8ea6b7", "#6c7078"],
  },

  {
    slug: "mickey-shorts",
    name: "Mickey Shorts",
    image: "/images/style18.jpg",
    meta: "Cotton Rich | GSM: 190G | Premium Shorts",
    sizes: ["5-6", "6-7", "7-8", "8-9"],
    cm: ["60", "65", "70", "75"],
    features: ["Cotton Rich", "Regular Fit", "Premium Shorts"],
    box: "3 Pcs / Box",
    colors: ["#000", "#888", "#0a2a43", "#2f2f2f", "#556b2f", "#3a5a8f"],
  },

  {
    slug: "finn-track",
    name: "Finn Track Pant",
    image: "/images/style19.jpg",
    meta: "Cotton Rich | GSM: 190G | Premium Track",
    sizes: ["5-6", "6-7", "7-8", "8-9"],
    cm: ["60", "65", "70", "75"],
    features: ["Cotton Rich", "Regular Fit", "Premium Track"],
    box: "3 Pcs / Box",
    colors: ["#000", "#888", "#0a2a43", "#2f2f2f", "#556b2f", "#3a5a8f"],
  },


  {
  slug: "jim-jogger-pant",
  name: "Jim Jogger Pant",
  image: "/images/style20.jpg",
  meta: "Cotton Rich | GSM: 190G | Premium Jogger",
  sizes: ["5-6", "6-7", "7-8", "8-9"],
  cm: ["60", "65", "70", "75"],
  features: ["Cotton Rich", "Regular Fit", "Premium Jogger"],
  box: "3 Pcs / Box",
  colors: ["#000000", "#7a7a7a",  "#0b3c5d",  "#2f2f2f",  "#556b2f", "#3a5a8f" ],
},

{
  slug: "dora-top",
  name: "Dora Top",
  image: "/images/style21.jpg",
  meta: "Cotton Rich | GSM: 165G | Premium Tee",
  sizes: ["5-6", "6-7", "7-8", "8-9"],
  cm: ["60", "65", "70", "75"],
  features: ["Cotton Rich", "Puff Sleeve", "Premium Tee"],
  box: "5 Pcs / Box",
  colors: ["#9333ea",  "#b8a9c9",  "#ff6b81",  "#5f9ea0",  "#6b8e23","#c08081" ],
},

{
  slug: "moona-track-pant",
  name: "Moona Track Pant",
  image: "/images/style22.jpg",
  meta: "Cotton Rich | GSM: 190G | Premium Track",
  sizes: ["5-6", "6-7", "7-8", "8-9"],
  cm: ["60", "65", "70", "75"],
  features: ["Cotton Rich", "Regular Fit", "Premium Track"],
  box: "3 Pcs / Box",
  colors: ["#7b5c8e", "#2f2f2f", "#ff4da6", "#4e79a7", "#0b3c5d"],
}


],
winter: [
  {
    slug: "dora-top",
    name: "Dora Top",
    image: "/images/style021.jpg",
    meta: "Cotton Rich | GSM: 165G | Premium Tee",
    sizes: ["5-6", "6-7", "7-8", "8-9"],
    cm: ["60", "65", "70", "75"],
    features: ["Cotton Rich", "Puff Sleeve", "Premium Tee"],
    box: "5 Pcs / Box",
    colors: ["#8a2be2", "#b19cd9", "#f08080", "#5f9ea0", "#778899", "#d8a39d"],
  },

  {
    slug: "moona-track",
    name: "Moona Track Pant",
    image: "/images/style022.jpg",
    meta: "Cotton Rich | GSM: 190G | Premium Track",
    sizes: ["5-6", "6-7", "7-8", "8-9"],
    cm: ["60", "65", "70", "75"],
    features: ["Cotton Rich", "Regular Fit", "Premium Track"],
    box: "3 Pcs / Box",
    colors: ["#6a4c93", "#c0c0c0", "#2f2f2f", "#ff69b4", "#5c7f97", "#0a2a43"],
  }
]

};

export default function CategoryProducts() {
  const { category } = useParams();
  const data = products[category as keyof typeof products];
   const getOffset = () => {
    if (category === "mens") return 0;
    if (category === "womens") return 9;
    if (category === "kids") return 15;
    return 0;
  };

  if (!data) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1>Category Not Found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>

      <div className="container mx-auto px-6 pt-10 pb-16">

        {/* 🔥 TITLE */}
        <h1 className="text-5xl font-bold mb-16 tracking-tight">
          {category?.toUpperCase()} COLLECTION
        </h1>

        {/* 🚀 FULL WIDTH PRODUCTS */}
        <div className="space-y-24">
{data.map((item, index) => (
  <div
    key={index}
    className={`py-20 ${
      index % 2 === 0 ? "bg-white" : "bg-[#ffffff]"
    }`}
  >
    <div className="container mx-auto px-6">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* 🖼 IMAGE */}
      <div className="border-[.1px] border-dashed p-2 flex justify-center">
  <div className="relative w-[360px] h-[460px] overflow-hidden bg-white flex items-end justify-center">

    {/* IMAGE */}
    <img
      src={item.image}
      alt={item.name}
      className="max-h-full max-w-full object-contain"
    />

    {/* 🔢 SERIAL NUMBER */}
    <span className="absolute bottom-0 right-4 text-[#9A9A9A] text-[15.36px] font-roboto">
      {String(getOffset() + index + 1).padStart(2, "0")}
    </span>

  </div>
</div>
       {/* 📄 CONTENT */}
<div>

  {/* TITLE */}
  <h2 className="text-4xl font-extrabold mb-4">
    {item.name}
  </h2>

  {/* META */}
  <p className="text-gray-600 mb-6">
    {item.meta}
  </p>

  {/* INFO CARDS */}
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div className="bg-blue-100 px-4 py-3 font-semibold">
      Cotton Rich
    </div>
    <div className="bg-blue-100 px-4 py-3 font-semibold">
      200 G
    </div>
    <div className="bg-blue-100 px-4 py-3 font-semibold">
      Regular Fit
    </div>
    <div className="bg-blue-100 px-4 py-3 font-semibold">
      Premium Style
    </div>
  </div>

  {/* COLORS */}
  <div className="mb-6">
    <p className="font-semibold mb-2">Available colours</p>
    <div className="flex gap-3 flex-wrap">
      {["#000", "#888", "#0a2a43", "#2f2f2f", "#556b2f", "#3a5a8f"].map((c, i) => (
        <div
          key={i}
          className="w-10 h-10 rounded border"
          style={{ backgroundColor: c }}
        />
      ))}
    </div>
  </div>

  {/* BOX INFO */}
  <div className="mb-6">
    <p className="text-2xl font-bold">3 Pcs / Box</p>
    <p className="text-gray-500 text-sm">Assorted colours</p>
  </div>

  {/* SIZE */}
  <div className="mb-4">
    <p className="font-semibold">Size:</p>
    <div className="flex gap-4 mt-2 border-b pb-2">
      {item.sizes.map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  </div>

  {/* CM */}
  <div className="mb-6">
    <p className="font-semibold">CM:</p>
    <div className="flex gap-4 mt-2">
      {item.cm.map((c, i) => (
        <span key={i}>{c}</span>
      ))}
    </div>
  </div>

  {/* FEATURES */}
  <ul className="space-y-2 text-gray-800 mb-6">
    {item.features.map((f, i) => (
      <li key={i}>- {f}</li>
    ))}
  </ul>

  {/* BRAND */}
  <div className="mt-6">
    <img src="/images/logo.png" className="h-12" />
  </div>

</div>

      </div>

    </div>
  </div>
))}
        </div>
      </div>

    </Layout>
  );
}