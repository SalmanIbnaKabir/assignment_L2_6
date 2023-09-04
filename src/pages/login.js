import Head from "next/head";
import RootLayout from "./component/Layouts/RootLayout";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div>
      <Head>
        <title>PC-Builder Login</title>
        <meta
          name="description"
          content="This is pc builder website of  Sik Tanzid made by next-js"
        />
      </Head>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body items-center">
              <div>
                <button
                  onClick={() =>
                    signIn("google", {
                      callbackUrl: "https://pc-builder-frontend-xi.vercel.app",
                    })
                  }
                  className="btn btn-outline btn-secondary"
                >
                  Login with Google
                </button>
              </div>
              <div>
                <button
                  onClick={() =>
                    signIn("github", {
                      callbackUrl: "https://pc-builder-frontend-xi.vercel.app",
                    })
                  }
                  className="btn btn-outline btn-secondary"
                >
                  Login with Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
