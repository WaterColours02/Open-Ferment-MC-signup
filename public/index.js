const submitButton = document.querySelector(".submit-button");
const email = document.querySelector(".email-input");

console.log(email.value);

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(email.value);  data flow test print
  if ((email.value == null || history, email.value == "")) {
    alert("please add an email");
  } else {
    let fetchData = {
      method: "POST",
      body: JSON.stringify({ email: email.value, js: true }),
      headers: { "Content-Type": "application/json " },
    };

    fetch("/subscribe", fetchData).then((res) => {
      if (res.ok) {
        console.log("Yay it worked");
        showSuccessModal();
      } else {
        showErrorModal();
      }
    });
  }
});

const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 6}deg)">${char}</span>`
  )
  .join("");

const errorModal = document.querySelector(".error-modal");
const errorModalOverlay = document.querySelector(".error-modal-overlay");

const successModal = document.querySelector(".success-modal");
const successModalOverlay = document.querySelector(".success-modal-overlay");

const successCloseButton = document.querySelector(".success-close-button");
successCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  successModal.classList.add("hidden");
  successModalOverlay.classList.add("hidden");
});

const errorCloseButton = document.querySelector(".error-close-button");
errorCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  errorModal.classList.add("hidden");
  errorModalOverlay.classList.add("hidden");
});

function showSuccessModal() {
  successModal.classList.remove("hidden");
  successModalOverlay.classList.remove("hidden");
}

function showErrorModal() {
  errorModal.classList.remove("hidden");
  errorModalOverlay.classList.remove("hidden");
}
