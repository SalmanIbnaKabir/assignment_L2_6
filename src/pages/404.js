import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900 ">
      <Head>
        <title>PC-Builder Error</title>
        <meta
          name="description"
          content="This is pc builder website of  Sik Tanzid made by next-js"
        />
      </Head>
      <h1 className="text-5xl text-red-500 ">404!! Not Found </h1>
    </div>
  );
}
