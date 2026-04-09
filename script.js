const menuItems = ["Latte", "Espresso", "Green Tea", "Muffin", "Iced Coffee"];

const menuList = document.getElementById("menu-list");

// Display menu items
menuItems.forEach(function(item) {
  const li = document.createElement("li");
  li.textContent = item;
  menuList.appendChild(li);
});

// Daily special feature
const specialBtn = document.getElementById("show-special");
const display = document.getElementById("daily-special");

specialBtn.addEventListener("click", () => {
  const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
  display.textContent = `Today's Special: ${randomItem}`;
});

// 🌙 Day/Night Mode Toggle (NEW)
const toggleBtn = document.getElementById("toggle-mode");
const img = document.getElementById("cafe-img");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Switch image based on mode
  if (document.body.classList.contains("dark-mode")) {
    img.src = "ED56676C-2C99-4915-A068-7C91026AE8EA.jpeg";
  } else {
    img.src = "ED56676C-2C99-4915-A068-7C91026AE8EA.jpeg";
  }
});
