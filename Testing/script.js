function showColor() {
  const color = document.getElementById("colorPicker").value;
  const preview = document.getElementById("preview");
  const name = document.getElementById("colorName");
  const desc = document.getElementById("colorDesc");

  let colorHex = "";
  let colorDescription = "";

  switch (color) {
    case "purple":
      colorHex = "#6C1EFF";
      name.innerText = "Electric Purple";
      colorDescription = "Represents creativity, innovation, and futuristic energy. Perfect for AI, tech, and creators.";
      break;
    case "navy":
      colorHex = "#1E1E2F";
      name.innerText = "Deep Navy Blue";
      colorDescription = "Symbolizes focus, professionalism, and trust. A grounding shade to balance boldness.";
      break;
    case "yellow":
      colorHex = "#FFD700";
      name.innerText = "Cyber Yellow";
      colorDescription = "Grabs attention, conveys optimism, and adds an energetic spark to your brand.";
      break;
    case "aqua":
      colorHex = "#00FFFF";
      name.innerText = "Neon Aqua";
      colorDescription = "Gives a vibrant, techy glow. Perfect accent for engaging and modern visuals.";
      break;
    case "gray":
      colorHex = "#F5F5F5";
      name.innerText = "Light Gray";
      colorDescription = "A clean, minimal background that enhances readability and makes other colors pop.";
      break;
    default:
      return;
  }

  preview.style.backgroundColor = colorHex;
  desc.innerText = colorDescription;
  preview.style.display = "block";
}
