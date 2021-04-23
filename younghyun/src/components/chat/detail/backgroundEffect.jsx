import { useEffect, createRef } from "react";
import styled from "styled-components";
import { Hill } from "components/chat/detail/hill";
import { Sun } from "components/chat/detail/sun";

function SelectedEffect() {
  const canvasRef = createRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stageWidth = document.body.clientWidth;
    let stageHeight = document.body.clientHeights;

    let sun = new Sun();

    let hills = [
      new Hill("#2A120A", 0.3, 5),
      new Hill("#191007", 0.7, 4),
      new Hill("#181907", 2, 3),
    ];

    function resize() {
      stageWidth = canvas.offsetWidth;
      stageHeight = canvas.offsetHeight;

      ctx.width = canvas.offsetWidth;
      ctx.height = canvas.offsetHeight;

      sun.resize(stageWidth, stageHeight);

      for (let i = 0; i < hills.length; i++) {
        hills[i].resize(stageWidth, stageHeight);
      }
    }
    function animate(t) {
      requestAnimationFrame(animate.bind(this));

      ctx.clearRect(0, 0, stageWidth, stageHeight);

      sun.draw(ctx, t);
      sun.drawFace(ctx);

      let dots;
      for (let i = 0; i < hills.length; i++) {
        dots = hills[i].draw(ctx);
      }
    }

    window.addEventListener("resize", resize.bind(this), false);
    resize();

    requestAnimationFrame(animate.bind(this));
  }, [canvasRef]);

  return <Canvas ref={canvasRef} width={500} height={window.innerHeight} />;
}

export default SelectedEffect;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  opacity: 0.4;
`;
