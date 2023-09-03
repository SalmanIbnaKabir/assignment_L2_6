import RootLayout from "@/pages/component/Layouts/RootLayout";

import Carousel from "./component/UI/Carousel";
import ProductCard from "./component/UI/ProductCard";
import CategoryCard from "./component/UI/CategoryCard";

export default function HomePage({ products }) {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  const limitProducts = products.slice(0, 8);
  return (
    <div>
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
          {arr.map((a) => (
            <CategoryCard key={a} />
          ))}
        </div>
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// products SSG get
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  console.log(data.data);

  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};
