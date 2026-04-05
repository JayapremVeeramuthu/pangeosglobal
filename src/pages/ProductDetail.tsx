import { useParams } from "react-router-dom";

const products = {
  "premium-cotton-vest": {
    name: "BRIGHT VEST RN",
    image: "/images/vest1.jpg",
    meta: "100% Cotton | Style: Fine Vest | Made in India",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    cm: ["80", "85", "90", "95", "100", "105", "110"],
    features: [
      "Made from superior 100% soft combed cotton",
      "Flat-locked seams for better fit & comfort",
    ],
  },
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products[slug as keyof typeof products];

  if (!product) {
    return <div className="text-center py-20">Product Not Found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-16">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* 🖼 LEFT IMAGE */}
        <div className="border p-6">
          <img
            src={product.image}
            className="w-full object-contain"
          />
        </div>

        {/* 📄 RIGHT CONTENT */}
        <div>
          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          {/* META */}
          <p className="text-gray-600 mb-6">
            {product.meta}
          </p>

          {/* SIZE */}
          <div className="mb-4">
            <p className="font-semibold">Size:</p>
            <div className="flex gap-3 mt-2">
              {product.sizes.map((s, i) => (
                <span key={i} className="border px-3 py-1">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CM */}
          <div className="mb-6">
            <p className="font-semibold">CM:</p>
            <div className="flex gap-3 mt-2">
              {product.cm.map((c, i) => (
                <span key={i}>{c}</span>
              ))}
            </div>
          </div>

          {/* FEATURES */}
          <ul className="space-y-2 text-gray-700 mb-6">
            {product.features.map((f, i) => (
              <li key={i}>- {f}</li>
            ))}
          </ul>

          {/* BRAND */}
          <div className="mt-6">
            <img
              src="/images/logo.png"
              className="h-12"
            />
          </div>
        </div>

      </div>
    </div>
  );
}