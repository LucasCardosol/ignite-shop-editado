import { useContext, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import {
  OffcanvasStyle,
  OffcanvasClass,
  Button,
  ImageContainer,
  CartItem,
  OffcanvasBodyStyle,
  ItemDetails,
} from "@/styles/components/cart";
import close from "../../assets/close.svg";
import carrinho from "../../assets/carrinho.svg";
import Image from "next/image";
import { CartContext } from "@/contexts/CartContext";
import axios from "axios";
import { useRouter } from "next/router";

function Cart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();
  const isPaginaSuccess = router.asPath.includes("/success");

  const { listProducts, total, removeOfCart }: any = useContext(CartContext);

  const NumberOfProducts = listProducts.length;
  const totalPriceFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  async function handleBuyProductsCart() {
    try {
      const dataToSend = listProducts.map((product: any) => ({
        price: product.defaultPriceId,
        quantity: 1,
      }));

      const response = await axios.post("/api/checkout", {
        cartProducts: dataToSend,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Data / Sentry)
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <>
      {!isPaginaSuccess && (
        <>
          <Button onClick={handleShow}>
            <Image src={carrinho} alt="" />
            {NumberOfProducts > 0 && <span>{NumberOfProducts}</span>}
          </Button>
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            className={OffcanvasClass()}
          >
            <OffcanvasStyle>
              <Offcanvas.Header>
                <Offcanvas.Title />
                <Button onClick={handleClose}>
                  <Image src={close} alt="" />
                </Button>
              </Offcanvas.Header>

              <OffcanvasBodyStyle>
                <div>
                  <p>
                    <strong>Sacola de compras</strong>
                  </p>
                  <ul>
                    {NumberOfProducts === 0 ? (
                      <p>Sua sacola ainda não possui produtos !!</p>
                    ) : (
                      listProducts.map((product: any) => (
                        <CartItem key={product.id}>
                          <ImageContainer>
                            <Image
                              src={product.imageUrl}
                              alt=""
                              height={95}
                              width={95}
                            />
                          </ImageContainer>
                          <ItemDetails>
                            <p>
                              {product.name}
                              <br />
                              <span>{product.price}</span>
                            </p>
                            <button onClick={() => removeOfCart(product)}>
                              Remover
                            </button>
                          </ItemDetails>
                        </CartItem>
                      ))
                    )}
                  </ul>
                </div>
                <footer>
                  <table>
                    <tr>
                      <th>Quantidade</th>
                      <td>{NumberOfProducts} itens</td>
                    </tr>
                    <tr>
                      <th>
                        <strong>Valor total</strong>
                      </th>
                      <td>
                        <strong>{totalPriceFormated}</strong>
                      </td>
                    </tr>
                  </table>
                  <button onClick={handleBuyProductsCart}>
                    Finalizar compra
                  </button>
                </footer>
              </OffcanvasBodyStyle>
            </OffcanvasStyle>
          </Offcanvas>
        </>
      )}
    </>
  );
}

export default Cart;
