document.addEventListener("DOMContentLoaded", function() {
    const statuses = document.querySelectorAll(".status");

    statuses.forEach(status => {
        status.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
        });

        status.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
