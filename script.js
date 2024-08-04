// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Interactive Elements
    const nav = document.querySelector('nav');
    const hero = document.querySelector('#hero');
    const gameCanvas = document.getElementById('gameCanvas');
    const ctx = gameCanvas.getContext('2d');

    // Sticky Navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > hero.offsetHeight - nav.offsetHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    // Game Logic
    let playerX = gameCanvas.width / 2;
    let playerY = gameCanvas.height - 30;
    const playerWidth = 50;
    const playerHeight = 50;
    const playerSpeed = 5;

    function drawPlayer() {
        ctx.fillStyle = '#f60';
        ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    }

    function gameLoop() {
        clearCanvas();
        drawPlayer();
        requestAnimationFrame(gameLoop);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft' && playerX > 0) {
            playerX -= playerSpeed;
        } else if (event.key === 'ArrowRight' && playerX < gameCanvas.width - playerWidth) {
            playerX += playerSpeed;
        } else if (event.key === 'ArrowUp' && playerY > 0) {
            playerY -= playerSpeed;
        } else if (event.key === 'ArrowDown' && playerY < gameCanvas.height - playerHeight) {
            playerY += playerSpeed;
        }
    });

    gameLoop();
});
