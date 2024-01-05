import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { Container, Header } from "@/styles/pages/app";
import logoImg from "../assets/logo.svg";
import Image from "next/image";
import Cart from "../components/cart";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from "@/contexts/CartContext";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Header>
          <Link href="/">
            <Image src={logoImg.src} alt="" height={52} width={130} />
          </Link>
          <Cart />
        </Header>
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  );
}
