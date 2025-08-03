<!-- const contactForm = document.getElementById("contact-form")
const name = document.getElementById("name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const body = document.getElementById("body")
const error = document.getElementById("error")

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (validateFields()) {
        sendMail()
        resetFields()
    }
})

function validateFields() {
    let error_message = ""
    if (name.value.trim() === "") {
        error_message = "Your name is required!"
    }
    else if (email.value.trim() === "") {
        error_message = "Your email is required!"
    }
    else if (subject.value.trim() === "") {
        error_message = "Subject is required!"
    }
    else if (body.value.trim() === "") {
        error_message = "Message is required!"
    }
    error.textContent = error_message
    return error_message === "";
}

function sendMail() {
    const sender_name = name.value.trim();
    const sender_email = email.value.trim();
    const mail_subject = subject.value.trim();
    const mail_body = body.value.trim();

    const mail_link = "mailto:er.dharamrajranjan@gmail.com" +
        "?Subject=" + encodeURIComponent(mail_subject) +
        "&body=Hi Dharam, \nI am " + sender_name + ", found you through your portfolio.\n" + encodeURIComponent(mail_body)

    window.location.href = mail_link;
}

function resetFields() {
    name.value = ""
    email.value = ""
    subject.value = ""
    body.value = ""
}-->                              <!--upper part for direct mail and lower for json message ****************** -->  
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("body").value.trim();

        // Validation (optional)
        if (!name || !email || !subject || !message) {
            document.getElementById("error").textContent = "Please fill in all fields.";
            return;
        }

        // Build the message object
        const contactEntry = {
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        };

        // Get existing messages from localStorage or create a new array
        const existingData = JSON.parse(localStorage.getItem("contactMessages")) || [];

        // Add the new entry
        existingData.push(contactEntry);

        // Save back to localStorage
        localStorage.setItem("contactMessages", JSON.stringify(existingData));

        // Clear the form
        contactForm.reset();
        document.getElementById("error").textContent = "Message saved locally (localStorage).";

        // (Optional) Debug: log current storage
        console.log("Saved Messages:", existingData);
    });
});
<script>
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("body").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const now = new Date();
    const time = now.toLocaleString(); // e.g., "8/1/2025, 3:45:12 PM"

    const newMessage = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      time: time
    };

    // Get existing data
    let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];

    // Add new message
    messages.push(newMessage);

    // Save back to localStorage
    localStorage.setItem("contactMessages", JSON.stringify(messages));

    alert("Message submitted successfully!");

    // Reset form
    this.reset();
  });
</script>

