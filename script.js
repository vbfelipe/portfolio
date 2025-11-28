    const contactBtn = document.getElementById("contactBtn");
    const contactForm = document.getElementById("contactForm");
    const closeForm = document.getElementById("closeForm");
    const messageForm = document.getElementById("messageForm");

    contactBtn.addEventListener("click", () => {
      contactBtn.style.display = "none";
      contactForm.style.display = "flex";
    });

    closeForm.addEventListener("click", () => {
      contactForm.style.display = "none";
      contactBtn.style.display = "inline-block";
    });

    /* Forced redirect fix after submit */
    messageForm.addEventListener("submit", () => {
      setTimeout(() => {
        window.location.href = "https://vbfelipe.github.io/portfolio/";
      }, 1500);
    });