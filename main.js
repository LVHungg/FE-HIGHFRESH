function sendEmail() {
  let params = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    messenger: document.getElementById("messenger").value,
  };

  emailjs
    .send("service_dgeuf2t", "template_v0vax3a", params)
    .then(() => alert("Email sent successfully"));
}
