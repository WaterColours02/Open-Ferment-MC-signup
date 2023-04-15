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
      } else {
        // alert("please add an email");
      }
    });
  }
});

// circle text animation

// const circleText = document.querySelector(".circle-text p");
// circleText.innerHTML = circleText.innerText
//   .split("")
//   .map(
//     (char, i) => `<span style="transform:rotate(${i * 6}deg)">${char}</span>`
//   )
//   .join("");

const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 6}deg)">${char}</span>`
  )
  .join("");
