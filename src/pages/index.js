import RootLayout from "@/pages/component/Layouts/RootLayout";

import Carousel from "./component/UI/Carousel";
import ProductCard from "./component/UI/ProductCard";
import CategoryCard from "./component/UI/CategoryCard";
import Loader from "./component/UI/Loader";
import Head from "next/head";

export default function HomePage({ products }) {
  const categoryData = [
    {
      name: "CPU / Processor",
      href: "/category/processor",
      image: "/image/processor.png",
    },
    {
      name: "Motherboard",
      href: "/category/motherboard",
      image: "/image/motherboard.png",
    },
    { name: "RAM", href: "/category/ram", image: "/image/ram.png" },
    {
      name: "Power Supply Unit",
      href: "/category/power-supply-unit",
      image: "/image/power-supply-unit.png",
    },
    {
      name: "Storage Device",
      href: "/category/storage-device",
      image: "/image/storage-device.png",
    },
    { name: "Monitor", href: "/category/monitor", image: "/image/monitor.png" },
  ];

  if (!products) {
    return <Loader></Loader>;
  }
  const limitProducts = products.slice(0, 8);
  return (
    <div>
      <Head>
        <title>PC-Builder Home</title>
        <meta
          name="description"
          content="This is pc builder website of  Sik Tanzid made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Carousel />
      <div className="bg-indigo-100 py-5">
        <h1 className="text-2xl text-center my-5 font-semibold">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 lg:container my-5 mx-auto">
          {limitProducts.map((product) => (
            <ProductCard product={product} key={product?._id} />
          ))}
        </div>
        <h1 className="text-2xl text-center my-5 font-semibold">
          Featured Category
        </h1>
        <div className="flex flex-wrap gap-4 md:container my-5 mx-auto">
          {categoryData.map((category) => (
            <CategoryCard key={category.href} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

const url = process.env.URL;
// products SSG get
export const getStaticProps = async () => {
  const res = await fetch(`${url}/products`);
  const data = await res.json();

  // console.log(data.data);

  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};
