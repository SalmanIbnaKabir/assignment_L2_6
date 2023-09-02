import RootLayout from "@/pages/component/Layouts/RootLayout";

import Carousel from "./component/UI/Carousel";
import ProductCard from "./component/UI/ProductCard";
import CategoryCard from "./component/UI/CategoryCard";

export default function HomePage() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 lg:container my-5 mx-auto">
        {arr.map((a) => (
          <ProductCard key={a} />
        ))}
      </div>
      <div className="flex flex-wrap gap-4 md:container mx-auto">
        {arr.map((a) => (
          <CategoryCard key={a} />
        ))}
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
