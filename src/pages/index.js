import RootLayout from "@/pages/component/Layouts/RootLayout";
import Hero from "./component/UI/";

export default function HomePage() {
  return (
    <div>
      <Hero />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
