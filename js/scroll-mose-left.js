document.addEventListener("DOMContentLoaded", function () {
  const rightPanel = document.querySelector(".right");
  const sections = rightPanel.querySelectorAll(".box");
  const navLinks = document.querySelectorAll(".left-ul li a");

  // اضافه کردن کلاس active به لینک ABOUT هنگام بارگذاری صفحه
  document.getElementById("aboutLink").classList.add("active");

  rightPanel.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const containerTop = rightPanel.getBoundingClientRect().top;
      const top = rect.top - containerTop;

      if (top >= 0 && top <= 300) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
