// 💬 Global Variables
let shareCount = 0;
const maxShares = 5;

// 💬 DOM Elements
const shareBtn = document.getElementById("whatsappShareBtn");
const shareCounter = document.getElementById("shareCounter");
const shareMessage = document.getElementById("shareMessage");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");
const fileInput = document.getElementById("screenshot");

// 🔧 Create custom "clear file" button
const clearBtn = document.createElement("span");
clearBtn.textContent = "❌";
clearBtn.style.cursor = "pointer";
clearBtn.style.marginLeft = "10px";
clearBtn.style.fontSize = "1.1rem";
clearBtn.title = "Clear Screenshot";

// 📁 Container to show file name
const fileWrapper = document.createElement("div");
fileWrapper.style.display = "flex";
fileWrapper.style.alignItems = "center";
fileWrapper.style.gap = "8px";

// 📦 Function: Show file name + clear option
fileInput.addEventListener("change", function () {
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
    fileWrapper.innerText = selectedFile.name;
    fileWrapper.appendChild(clearBtn);
    fileInput.parentElement.appendChild(fileWrapper);
  }
});

// ❌ Function: Clear uploaded file
clearBtn.addEventListener("click", () => {
  fileInput.value = "";
  fileWrapper.innerHTML = ""; // remove filename + button
});

// 📱 WhatsApp Share Logic
shareBtn.addEventListener("click", () => {
  if (shareCount >= maxShares) return;

  const message = encodeURIComponent("Hey Buddy, Join Tech For Girls Community 🎀👩‍💻: https://example.com");
  const whatsappUrl = `https://wa.me/?text=${message}`;
  window.open(whatsappUrl, "_blank");

  shareCount++;
  shareCounter.innerText = `Click count: ${shareCount} / ${maxShares}`;

  // ✅ Show completed message after 5 shares
  if (shareCount === maxShares) {
    shareMessage.classList.remove("hidden");
    shareBtn.disabled = true;
  }
});

// ✅ Form Validation Utility Function
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value;
  const file = fileInput.files[0];

  if (!name || !phone || !email || !department || !file) {
    alert("❗ Please fill in all required fields and upload your screenshot.");
    return false;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("📞 Phone number must be 10 digits.");
    return false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("📧 Please enter a valid email address.");
    return false;
  }

  if (shareCount < maxShares) {
    alert("⚠️ Please complete 5 WhatsApp shares before submitting.");
    return false;
  }

  return true;
}

// 📨 Form Submission Logic
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop default form action

  if (!validateForm()) return;

  // Simulate data submission delay
  submitBtn.disabled = true;
  submitBtn.innerText = "Submitting...";

  // 💾 Simulate Data Submission (replace this block with fetch POST to Google Apps Script later)
  setTimeout(() => {
    // Disable the entire form
    const inputs = form.querySelectorAll("input, select, button");
    inputs.forEach((el) => (el.disabled = true));

    successMessage.style.display = "block";
    submitBtn.innerText = "Submitted ✅";

    // Store flag to prevent re-submission
    localStorage.setItem("hasSubmitted", "true");
  }, 1000);
});

// ♻️ Prevent Re-Submission on Refresh
window.addEventListener("DOMContentLoaded", () => {
  const hasSubmitted = localStorage.getItem("hasSubmitted");

  if (hasSubmitted === "true") {
    const inputs = form.querySelectorAll("input, select, button");
    inputs.forEach((el) => (el.disabled = true));
    successMessage.style.display = "block";
    shareMessage.classList.remove("hidden");
    shareBtn.disabled = true;
  }
});
