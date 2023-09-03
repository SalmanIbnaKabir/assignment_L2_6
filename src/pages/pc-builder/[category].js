import RootLayout from "../component/Layouts/RootLayout";
import ChooseProductCard from "../component/UI/ChooseProductCard";

export default function ChooseProduct({ category }) {
  // console.log(category);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 lg:container py-8 mx-auto">
      {category.map((product) => (
        <ChooseProductCard product={product} key={product?._id} />
      ))}
    </div>
  );
}

ChooseProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

const url = process.env.URL;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`${url}/category/${params.category}`);
  const data = await res.json();

  return {
    props: {
      category: data,
    },
  };
};
