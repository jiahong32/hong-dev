import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let points: Point[][] = [];
    const spacing = 45; // Grid spacing in pixels
    const maxRadius = 150; // Interaction radius
    const pullForce = 0.35; // Strength of displacement toward mouse

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initGrid();
    };

    const initGrid = () => {
      if (!canvas) return;
      points = [];
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        const rowPoints: Point[] = [];
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          rowPoints.push({
            x,
            y,
            homeX: x,
            homeY: y,
          });
        }
        points.push(rowPoints);
      }
    };

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const cols = points[0]?.length || 0;
      const rows = points.length || 0;

      // 1. Update point positions based on mouse displacement
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = points[r][c];
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - p.homeX;
            const dy = mouse.y - p.homeY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxRadius) {
              // Calculate displacement towards mouse
              const force = (maxRadius - dist) / maxRadius; // 0 (far) to 1 (at mouse)
              const targetX = p.homeX + dx * force * pullForce;
              const targetY = p.homeY + dy * force * pullForce;
              
              // Smooth easing
              p.x += (targetX - p.x) * 0.15;
              p.y += (targetY - p.y) * 0.15;
            } else {
              // Return home
              p.x += (p.homeX - p.x) * 0.1;
              p.y += (p.homeY - p.y) * 0.1;
            }
          } else {
            // Return home if mouse is active but left window
            p.x += (p.homeX - p.x) * 0.1;
            p.y += (p.homeY - p.y) * 0.1;
          }
        }
      }

      // 2. Draw connections (lines)
      ctx.lineWidth = 1.0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p1 = points[r][c];

          // Draw horizontal connection
          if (c + 1 < cols) {
            const p2 = points[r][c + 1];
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            // Determine line opacity based on proximity to mouse
            let opacity = 0.04; // default very faint line
            if (mouse.x !== null && mouse.y !== null) {
              const dx = mouse.x - (p1.x + p2.x) / 2;
              const dy = mouse.y - (p1.y + p2.y) / 2;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < maxRadius) {
                const force = (maxRadius - dist) / maxRadius;
                opacity = 0.04 + force * 0.18; // glow up to 0.22 opacity blue
              }
            }
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`; // Cool blue color
            ctx.stroke();
          }

          // Draw vertical connection
          if (r + 1 < rows) {
            const p3 = points[r + 1][c];
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p3.x, p3.y);

            let opacity = 0.04;
            if (mouse.x !== null && mouse.y !== null) {
              const dx = mouse.x - (p1.x + p3.x) / 2;
              const dy = mouse.y - (p1.y + p3.y) / 2;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < maxRadius) {
                const force = (maxRadius - dist) / maxRadius;
                opacity = 0.04 + force * 0.18;
              }
            }
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.stroke();
          }
        }
      }

      // 3. Draw a subtle glow dot at mouse location
      if (mouse.x !== null && mouse.y !== null) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.4)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.03)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.parentElement?.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave);
    canvas.parentElement?.addEventListener('touchmove', handleTouchMove);
    canvas.parentElement?.addEventListener('touchend', handleMouseLeave);

    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave);
      canvas.parentElement?.removeEventListener('touchmove', handleTouchMove);
      canvas.parentElement?.removeEventListener('touchend', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
