document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission until confirmation

    const creditedTransactionMode = document.getElementById(
      "credited-transaction-mode"
    ).value;
    const Dispositioned = document.getElementById("Dispositioned").value;

    // Confirmation alert before submission
    if (confirm("Are you sure you want to submit the form?")) {
      // Check if transaction details are valid
      if (
        creditedTransactionMode === "Select Transaction Mode" ||
        Dispositioned === "Select Employeer Name"
      ) {
        alert("Please Fill all the Details.");
      } else {
        // Proceed with form submission
        const scriptURL =
          "https://script.google.com/macros/s/AKfycbwcZR36jxnasujQivEcQBjV9gpzHZLpUWLOZ_kOKy1Dc-Kr-Nd-4aGD5G6rRHaV2NpV/exec";

        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            alert("Thank you! Your form is submitted successfully.");
            // Reload the page or clear the form after submission
            location.reload();
          })
          .catch((error) => console.error("Error!", error.message));
      }
    } else {
      // If user cancels, do nothing
      alert("Form submission cancelled.");
    }
  });

  const mobileNumberInput = document.getElementById("mobile-number");

  mobileNumberInput.addEventListener("input", function () {
    const value = mobileNumberInput.value;
    if (!/^\d{0,10}$/.test(value)) {
      mobileNumberInput.value = value.slice(0, 10); // Limit to 10 digits
    }
  });

  mobileNumberInput.addEventListener("focusout", function () {
    const value = mobileNumberInput.value;
    if (!/^\d{10}$/.test(value)) {
      alert("Mobile number must be exactly 10 digits.");
    }
  });
});
