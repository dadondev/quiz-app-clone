import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {PrimeReactProvider} from "primereact/api";
import localFont from "next/font/local";
import Tailwind from "primereact/passthrough/tailwind";
import {Toaster} from "react-hot-toast";
import MainModal from "@/components/modals/mainModal";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
    <PrimeReactProvider value={{ unstyled:true, pt:Tailwind }}>
      <div className={geistMono.className+" h-full [&>div]:h-full "+geistSans.variable}>
        <Component {...pageProps} />
        <Toaster toastOptions={{className:"text-sm"}}/>
        <MainModal />
      </div>
    </PrimeReactProvider>
  </QueryClientProvider>;
}
