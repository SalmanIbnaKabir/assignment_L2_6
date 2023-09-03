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
      <h1 className="text-5xl text-red-500 ">404!! Not Found </h1>
    </div>
  );
}
