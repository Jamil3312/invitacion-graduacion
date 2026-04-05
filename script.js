document.addEventListener("DOMContentLoaded", () => {
    // ---------------------------------------------------
    // 1. Matrix Binary Rain Background
    // ---------------------------------------------------
    const canvas = document.getElementById("binaryCanvas");
    const ctx = canvas.getContext("2d");

    let width, height;
    let columns;
    const fontSize = 16;
    let drops = [];

    function initMatrix() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        columns = Math.floor(width / fontSize);
        drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
    }

    initMatrix();

    // Characters commonly used in "Matrix" code (including binary)
    const chars = "010101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

    function drawMatrix() {
        // Black background with slight opacity to create the fading trail effect
        ctx.fillStyle = "rgba(11, 15, 25, 0.05)";
        ctx.fillRect(0, 0, width, height);

        // Gold/Yellow to match the main theme (or could be matrix green, but gold fits the invite)
        ctx.fillStyle = "#d4af37";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            // Random character
            const text = chars.charAt(Math.floor(Math.random() * chars.length));

            // Draw character
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reset drop to top randomly, or if it reaches the bottom
            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }

        requestAnimationFrame(drawMatrix);
    }

    drawMatrix();

    // ---------------------------------------------------
    // 2. RSVP Form Submission
    // ---------------------------------------------------
    const rsvpForm = document.getElementById("rsvpForm");

    if (rsvpForm) {
        rsvpForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const guestName = document.getElementById("guestName").value.trim();
            if (guestName) {
                // TODO: Reemplaza este número con el tu número real incluyendo el código de área (ej: 502 para Guatemala)
                const phoneNumber = '50247045968';
                const message = `¡Hola Cristofer! Confirmo mi asistencia a tu recepción de graduación. Soy ${guestName}. 🎓🎉`;
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                window.open(whatsappUrl, '_blank');
            }
        });
    }

});
