import Confetti from 'react-confetti'
import useWindowSize from "./useWindowSize";

function drawBubble(this:any, context:any) {
    // remove animation
    this.angle = 0;
    this.angularSpin = 0;
    this.rotateY = 1;
    this.rotationDirection = 0;
    this.color='';

    // random radius
    if (!this.key) {
      this.radius = Math.random() * 30;
      this.key = Math.random();
    }
    this.hue = 200;

    // draw bubble
    context.beginPath();
    context.arc(0, 0, this.radius, 0, 2 * Math.PI);
    context.strokeStyle = `hsl(${this.hue} 100% 50%)`;
    context.stroke();
  
    // gradient background
    const gradient = context.createRadialGradient(
      0,
      0,
      1,
      0 + 0.5,
      0 + 0.5,
      this.radius
    );
    gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.3)");
    gradient.addColorStop(0.95, "#e7feff");
  
    context.fillStyle = gradient;
    context.fill();
}

export default () => {
    const size = useWindowSize();
    
    if (!size.width) {
        return null;
    }

    return (
        <Confetti
          width={size.width - 50}
          height={size.height}
          confettiSource={{x: (size.width ?? 0) / 2 - 30, y: 280, w: 30, h: 30}}
          friction={1}
          gravity={0.02}
          numberOfPieces={3}
          colors={[]}
          drawShape={drawBubble}
        />
    );
}