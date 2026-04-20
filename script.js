window.onload = function() {

    let isGamer = confirm("Вітаємо на FRAG.NET! Бажаєте увійти в профіль?");
    
    if (isGamer) {
        let nickname = prompt("Введіть ваш ігровий нікнейм:", "Player1");
        
        if (nickname != null && nickname != "") {
            alert("GL HF, " + nickname + "!");
            
            let profileMenu = document.getElementById("profileLink");
            if (profileMenu) {
                profileMenu.innerText = nickname;
                profileMenu.style.color = "#ff8c00";
            }
        }
    }

    let matches = [
        "NAVI vs FaZe Clan — 19:00",
        "Vitality vs G2 — 21:00",
        "MOUZ vs Spirit — 23:30"
    ];
    
    let listElement = document.getElementById("matchesList");
    if (listElement) {
        for (let i = 0; i < matches.length; i++) {
            let li = document.createElement("li"); 
            li.innerText = matches[i];             
            li.style.padding = "5px 0";
            listElement.appendChild(li);           
        }
    }

    
    let focusButton = document.getElementById('focusToggle');
    if (focusButton) {
        focusButton.onclick = function() {
            document.body.classList.toggle('focus-mode');
        };
    }

    let navLinks = document.querySelectorAll("nav ul li a");
    
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].onclick = function(event) {
            let linkText = this.innerText;
            
            if (!this.classList.contains("active") && this.id !== "profileLink") {
                event.preventDefault(); // Команда блокує перехід по посиланню
                alert("Сторінка «" + linkText + "» зараз на етапі верстки! 🛠️ Поки що працює лише Головна.");
            }
        };
    }
};