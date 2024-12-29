//  Hiệu ứng hoa mai vàng
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.style.left = `${Math.random() * 100}vw`;
  flower.style.animationDuration = `${Math.random() * 3 + 2}s`;
  document.getElementById("flower-container").appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 5000);
}
setInterval(createFlower, 200);

//  Xác thực đăng nhập
document.getElementById("loginButton").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (
    (username === "admin" && password === "admin") ||
    (username === "pedau" && password === "pedau2808")
  ) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("home").style.display = "block";
    document.getElementById("homeMusic").play();
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
});

//  Chuyển tab và điều chỉnh nhạc
document.querySelectorAll(".nav-link").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => (content.style.display = "none"));
    document.getElementById(tab.dataset.tab).style.display = "block";

    // Tắt nhạc khi vào Video
    const music = document.getElementById("homeMusic");
    if (tab.dataset.tab === "video") {
      music.pause(); // Dừng phát nhạc
    } else {
      music.play(); // Phát nhạc nếu không phải Video
    }
  });
});
//  Chặn Click Chuột Phải
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  alert(" Chức năng này bị vô hiệu hóa!");
});

//  Chặn Phím Tắt Ctrl+S, Ctrl+U, Ctrl+Shift+I
document.addEventListener("keydown", (event) => {
  if (
    event.ctrlKey &&
    (event.key === "s" ||
      event.key === "S" ||
      event.key === "u" ||
      event.key === "U")
  ) {
    event.preventDefault();
    alert(" Chức năng này bị vô hiệu hóa!");
  }
  if (
    event.ctrlKey &&
    event.shiftKey &&
    (event.key === "I" || event.key === "i")
  ) {
    event.preventDefault();
    alert(" Chức năng này bị vô hiệu hóa!");
  }
});
