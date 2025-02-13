const toggle = document.getElementById("share");

toggle.addEventListener("click", (e) => {
  let shareMenu = document.getElementById("dynamicShareMenu");
  if (shareMenu) {
    shareMenu.remove();
    return;
  }
  const buttonRect = toggle.getBoundingClientRect();
  shareMenu = document.createElement("div");
  shareMenu.id = "dynamicShareMenu";
  shareMenu.innerHTML = `
    <div id="shareMenu">
      <span>SHARE</span>
      <img src="icon-facebook.svg" alt="Facebook">
      <img src="icon-twitter.svg" alt="Twitter">
      <img src="icon-pinterest.svg" alt="LinkedIn">
      <div id="triangle"></div>
    </div>
  `;
  document.body.appendChild(shareMenu);
  shareMenu.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
  shareMenu.style.top = `${buttonRect.top - shareMenu.offsetHeight - 40}px`;
  shareMenu.style.transform = "translateX(-50%)";
});

document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !document.getElementById("dynamicShareMenu")?.contains(e.target)) {
    document.getElementById("dynamicShareMenu")?.remove();
  }
});
