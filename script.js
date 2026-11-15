document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("membershipForm");
  if (!form) return;

  const alertBox = document.getElementById("formAlert");
  const fields = ["fullName", "email", "password", "confirmPassword", "contact", "membershipId"];
  const get = id => document.getElementById(id);

  function setValidity(input, valid, message) {
    input.classList.toggle("is-invalid", !valid);
    input.classList.toggle("is-valid", valid);
    const feedback = input.parentElement.querySelector(".invalid-feedback");
    if (feedback && message) feedback.textContent = message;
    return valid;
  }

  function validate() {
    let valid = true;
    fields.forEach(id => {
      const input = get(id);
      const ok = input.value.trim() !== "";
      valid = setValidity(input, ok, "This field is required.") && valid;
    });

    const email = get("email");
    const emailValue = email.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue) &&
                    (emailValue.match(/@/g) || []).length === 1;
    valid = setValidity(email, emailValue !== "" && emailOk, "Enter a valid email with one @ and a valid domain.") && valid;

    const password = get("password");
    const confirm = get("confirmPassword");
    const match = password.value !== "" && confirm.value !== "" && password.value === confirm.value;
    valid = setValidity(confirm, match, "Passwords do not match.") && valid;

    const contact = get("contact");
    const contactValue = contact.value.trim();
    const digits = contactValue.replace(/-/g, "");
    const contactOk = /^[0-9-]+$/.test(contactValue) && /^\d+$/.test(digits) && digits.length <= 11;
    valid = setValidity(contact, contactValue !== "" && contactOk, "Use digits and optional hyphens (maximum 11 digits).") && valid;

    const member = get("membershipId");
    const memberOk = /^RS-\d{4}$/.test(member.value.trim());
    valid = setValidity(member, member.value.trim() !== "" && memberOk, "Membership ID must match RS-2026 format.") && valid;
    return valid;
  }

  fields.forEach(id => get(id).addEventListener("input", () => {
    get(id).classList.remove("is-invalid", "is-valid");
    alertBox.classList.add("d-none");
  }));

  form.addEventListener("submit", event => {
    event.preventDefault();
    alertBox.classList.add("d-none");
    if (!validate()) {
      alertBox.className = "alert alert-warning";
      alertBox.textContent = "Please review the highlighted fields and correct the information.";
      return;
    }
    alertBox.className = "alert alert-success";
    alertBox.textContent = "Thank you! Your membership inquiry has been submitted successfully.";
    form.reset();
    form.querySelectorAll(".is-valid, .is-invalid").forEach(el => el.classList.remove("is-valid", "is-invalid"));
  });
});