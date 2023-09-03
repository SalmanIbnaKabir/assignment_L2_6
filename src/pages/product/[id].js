import RootLayout from "../component/Layouts/RootLayout";
import ProductDetailsCard from "../component/UI/ProductDetailsCard";

export default function ProductDetails({ product }) {
  return (
    <div className="py-5">
      <h1 className="text-2xl text-center my-5 font-semibold">
        Product Details
      </h1>
      <ProductDetailsCard product={product} />
    </div>
  );
}

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

const url = process.env.URL;

/// create paths for product details
export const getStaticPaths = async () => {
  const res = await fetch(`${url}/products`);
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { id: product._id },
  }));
  // console.log(paths);

  return { paths, fallback: true };
};

// get product details

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`${url}/product/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product: product,
    },
  };
};
