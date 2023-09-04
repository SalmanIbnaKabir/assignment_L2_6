import Head from "next/head";
import RootLayout from "../component/Layouts/RootLayout";
import ProductCard from "../component/UI/ProductCard";

export default function Category({ category }) {
  // console.log(category);
  // const router = useRouter();
  // console.log(router);
  return (
    <div>
      <Head>
        <title>PC-Builder {category[0]?.category}</title>
        <meta
          name="description"
          content="This is pc builder website of  Sik Tanzid made by next-js"
        />
      </Head>
      <h1 className="text-2xl text-center my-5 font-semibold ">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 lg:container my-5 mx-auto">
        {category.map((product) => (
          <ProductCard product={product} key={product?._id} />
        ))}
      </div>
    </div>
  );
}
Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

const url = process.env.URL;

/// create paths for product details
export const getStaticPaths = async () => {
  const res = await fetch(`${url}/category`);
  const products = await res.json();

  const paths = products.map((category) => ({
    params: { category: category.toLowerCase().split(" ").join("-") },
  }));
  // console.log(paths);

  return { paths, fallback: false };
};

// get product details

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`${url}/category/${params.category}`);
  const product = await res.json();

  return {
    props: {
      category: product,
    },
  };
};
