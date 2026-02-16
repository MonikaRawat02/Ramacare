import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isServicesRoute = router.pathname.startsWith("/services");
  const excludedCategoryRoutes = new Set([
    "/services/ayurveda-dubai",
    "/services/dental-dubai",
    "/services/physiotherapy-dubai",
    "/services/general-physician-dubai",
    "/services/aesthetic-dermatology-dubai",
    "/services/facial-dubai",
  ]);
  const isSubcategoryRoute = isServicesRoute && !excludedCategoryRoutes.has(router.pathname);
  if (isSubcategoryRoute) {
    return (
      <>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
  return <Component {...pageProps} />;
}
