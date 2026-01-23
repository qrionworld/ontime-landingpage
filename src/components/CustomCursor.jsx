import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const hide = () => setVisible(false);
    const show = () => setVisible(true);

    // ✅ TAMBAH img
    const targets = document.querySelectorAll(
      "a, button, input, textarea, select, img, [data-hide-cursor]"
    );

    targets.forEach((el) => {
      el.addEventListener("mouseenter", hide);
      el.addEventListener("mouseleave", show);
    });

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", hide);
        el.removeEventListener("mouseleave", show);
      });
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="green-cursor"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    />
  );
}
