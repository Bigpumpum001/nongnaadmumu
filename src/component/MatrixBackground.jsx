import React, { useRef, useEffect } from 'react';

const MatrixBackground = ({ isVisible }) => {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        if (!isVisible) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const alphabet = 'NONGNAAD';
        const font_size = 16;
        const columns = Math.floor(canvas.width / font_size);
        const drops = Array(columns).fill(1);
        
        let animationFrameId;

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#FFB6C1'; 
            ctx.font = font_size + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible]);

    return (
        <canvas 
            ref={canvasRef} 
            style={{ 
                display: isVisible ? 'block' : 'none', 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                zIndex: 1, 
                transition: 'opacity 2s ease-in-out', 
                opacity: isVisible ? 1 : 0 
            }} 
        />
    );
};
export default MatrixBackground