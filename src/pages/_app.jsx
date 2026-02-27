import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { ModalProvider } from "../../components/ModalContext";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isServicesRoute = router.pathname.startsWith("/services");
  const isLandingPageRoute = router.pathname === "/best-fillers-in-dubai";
  
  const excludedCategoryRoutes = new Set([
    "/services/ayurveda-dubai",
    "/services/dental-dubai",
    "/services/physiotherapy-dubai",
    "/services/general-physician-dubai",
    "/services/aesthetic-dermatology-dubai",
    "/services/facial-dubai",
  ]);
  
  const isSubcategoryRoute = isServicesRoute && !excludedCategoryRoutes.has(router.pathname);
  
  if (isLandingPageRoute) {
    return (
      <ModalProvider>
        <>
          <Head>
           <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
          </Head>
          <Component {...pageProps} />
        </>
      </ModalProvider>
    );
  }
  
  if (isSubcategoryRoute) {
    return (
      <ModalProvider>
        <>
          <Head>
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />
          </Head>
          <Component {...pageProps} />
        </>
      </ModalProvider>
    );
  }
  
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
