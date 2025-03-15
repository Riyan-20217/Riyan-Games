document.addEventListener("DOMContentLoaded", function () {
    let timeSpent = 0;
    setInterval(() => {
        timeSpent++;
        document.getElementById("time-spent").textContent = timeSpent;
    }, 1000);

    // Tic-Tac-Toe Game Logic
    let currentPlayer = "X";
    const cells = document.querySelectorAll(".cell");

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (cells[a].textContent &&
                cells[a].textContent === cells[b].textContent &&
                cells[a].textContent === cells[c].textContent) {
                alert(`${currentPlayer} Wins!`);
                return true;
            }
        }
        return false;
    }

    function makeMove(cell) {
        if (cell.textContent === "") {
            cell.textContent = currentPlayer;
            if (checkWinner()) {
                setTimeout(() => location.reload(), 1500);
                return;
            }
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }

    cells.forEach(cell => {
        cell.addEventListener("click", function () {
            makeMove(this);
        });
    });

    // Shooting Game (Basic)
    const canvas = document.getElementById("shootingCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 300;

    let targetX = Math.random() * canvas.width;
    let targetY = Math.random() * canvas.height;

    function drawTarget() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(targetX, targetY, 15, 0, Math.PI * 2);
        ctx.fill();
    }
    drawTarget();

    canvas.addEventListener("click", function (event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const distance = Math.sqrt((x - targetX) ** 2 + (y - targetY) ** 2);
        if (distance < 15) {
            alert("Hit!");
            targetX = Math.random() * canvas.width;
            targetY = Math.random() * canvas.height;
            drawTarget();
        }
    });
});
