const checkoutButtons = document.querySelectorAll(".checkout-btn");
const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");
const loginForm = document.getElementById("loginForm");

let selectedCheckoutLink = "";

checkoutButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        selectedCheckoutLink = this.href;
        if(this.classList.contains("login-notice")){
            alert("Noch keine Anmeldung notwendig, Sie werden von unserer Webseite erst zur Anmeldung aufgefordert wenn Sie ein Abo abschließen möchten.");
        }
        
        loginModal.style.display = "flex";
    });
});

closeLogin.addEventListener("click", function() {
    loginModal.style.display = "none";
});

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        loginModal.style.display = "none";

        const successBox = document.createElement("div");
        successBox.innerHTML = `
            <div class="checkin-success">
                <div class="checkin-logo-box">
                    <img src="image/SS-Logo.png" alt="Secret Steps Logo" class="checkin-success-logo">
                    <div class="checkin-check">✓</div>
                </div>
                <h2>Der Check-In war erfolgreich!</h2>
                <p>Schritt für Schritt zum Ziel...</p>
            </div>
        `;

        successBox.classList.add("checkin-overlay");
        document.body.appendChild(successBox);

        setTimeout(function() {
            window.location.href = selectedCheckoutLink;
        }, 2200);
    }
});

window.addEventListener("click", function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});