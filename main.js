function sendEmail() {
  let params = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    messenger: document.getElementById("messenger").value,
  };

  emailjs
    .send("service_7ordbca", "template_8rg3djk", params)
    .then(() => alert("Email sent successfully"));
}
