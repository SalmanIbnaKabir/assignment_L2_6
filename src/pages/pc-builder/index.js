import { useSelector } from "react-redux";

import RootLayout from "../component/Layouts/RootLayout";
import Choose from "../component/UI/Choose";
import SelectedProduct from "../component/UI/SelectedProduct";

export default function PcBuilder() {
  const { products } = useSelector((state) => state.pcBuild);
  // console.log(products);

  const categoryData = [
    {
      name: "Processor",
      href: "/pc-builder/processor",
      image: "/image/processor.png",
    },
    {
      name: "Motherboard",
      href: "/pc-builder/motherboard",
      image: "/image/motherboard.png",
    },
    { name: "RAM", href: "/pc-builder/ram", image: "/image/ram.png" },
    {
      name: "Power Supply Unit",
      href: "/pc-builder/power-supply-unit",
      image: "/image/power-supply-unit.png",
    },
    {
      name: "Storage Device",
      href: "/pc-builder/storage-device",
      image: "/image/storage-device.png",
    },
    {
      name: "Monitor",
      href: "/pc-builder/monitor",
      image: "/image/monitor.png",
    },
  ];
  const hasProductForCategory = (categoryName) => {
    return products.find((product) => product.category === categoryName);
  };

  const isBuildComplete = products.length >= 5;
  return (
    <div className="md:container md:mx-auto flex flex-col gap-5  my-5">
      <h1 className="text-2xl text-center my-5 font-semibold"> PC Builder</h1>
      {categoryData.map((category) => {
        // Find products that match the current category
        const matchingProducts = products.filter(
          (product) => product.category === category.name
        );

        // Render the SelectedProduct component for each matching product
        return matchingProducts.map((product, index) => (
          <SelectedProduct
            key={`${category.href}-${index}`}
            product={product}
          />
        ));
      })}
      {/* Render Choose components for categories with no products */}
      {categoryData.map((category) => {
        const matchingProducts = products.filter(
          (product) => product.category === category.name
        );

        if (matchingProducts.length === 0) {
          return <Choose category={category} key={category.href} />;
        }

        return null;
      })}
      <button
        disabled={!isBuildComplete}
        className="btn btn-outline btn-secondary"
        onClick={() => {
          alert("Build Complete Successfully");
        }}
      >
        Complete Build
      </button>
    </div>
  );
}

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
