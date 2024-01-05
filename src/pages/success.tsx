import { SuccessContainer, ImageContainer } from "@/styles/pages/success";
import Link from "next/link";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  cartProducts: {
    name: string;
    imageUrl: string;
  }[];
  total: number;
}

export default function Success({
  customerName,
  cartProducts,
  total,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ul style={{ marginRight: `calc(-5% * ${total})` }}>
          {cartProducts.map((product, index) => (
            <ImageContainer
              key={product.imageUrl}
              style={{ transform: `translateX(calc(-40% * ${index}))` }}
            >
              <Image src={product.imageUrl} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ul>
        <h1>Compra efetuada</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, {"sua(s) "}
          <strong>{total > 0 ? total : cartProducts[0].name}</strong> já está a
          caminho da sua casa
        </p>
        <Link href="/">Voltar ao catalogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;
  //session.line_items.data
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  const leanListProducts = session.line_items?.data.map((item) => {
    return {
      imageUrl: item.price.product.images[0],
      name: item.price.product.name,
    };
  });

  return {
    props: {
      customerName,
      cartProducts: leanListProducts,
      total: leanListProducts?.length,
    },
  };
};
