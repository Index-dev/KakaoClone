import { useEffect, createRef } from "react";
import styled from "styled-components";

function SelectedEffect() {
  const canvasRef = createRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.width = canvas.offsetWidth;
    ctx.height = canvas.offsetHeight;

    ctx.scale(1.5, 1.5);

    class Circle {
      constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        let colorArray = ["#663300", "#ff8000", "#ffff00", "#cc3300"];

        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
      }

      draw = () => {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();

        this.update();
      };

      update = () => {
        if (
          this.x + this.radius >= canvas.offsetWidth ||
          this.x - this.radius <= 0
        ) {
          this.dx = -this.dx;
        }
        if (
          this.y + this.radius >= canvas.offsetHeight ||
          this.y - this.radius <= 0
        ) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
      };
    }
    let circleArray = [];

    for (let i = 0; i < 80; i++) {
      let radius = Math.random() * 7 + 4;
      let x = Math.random() * canvas.offsetWidth;
      let dx = Math.random() - 0.2;
      let y = Math.random() * canvas.offsetHeight;
      let dy = Math.random() - 0.2;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      circleArray.forEach((circle) => {
        circle.draw();
      });
    }

    animate();
  }, [canvasRef]);

  return <Canvas ref={canvasRef} className="slideEffect" />;
}

export default SelectedEffect;

const Canvas = styled.canvas`
  position: absolute;
  z-index: 0;
`;
