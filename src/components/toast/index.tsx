import { Toast } from "react-bootstrap";
import { ToastStyle } from "@/styles/components/toast";

interface BoxMessageProps {
  message: string;
  variantMessage: string;
  showMessage: boolean;
  closeMessage: () => void;
}

function BoxMessage({
  message,
  variantMessage,
  showMessage,
  closeMessage,
}: BoxMessageProps) {
  return (
    <Toast
      bg={variantMessage}
      onClose={closeMessage}
      show={showMessage}
      delay={3000}
      autohide
      className={ToastStyle()}
    >
      <Toast.Body>
        <p>{message}</p>
      </Toast.Body>
    </Toast>
  );
}

export default BoxMessage;
