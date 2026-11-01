import { createPortal } from "react-dom";

function Toast({ message }) {
  return createPortal(
    <div className="fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 rounded-lg bg-[var(--accent)] px-5 py-3 text-white shadow-lg">
      {message}
    </div>,
    document.body
  );
}

export default Toast;