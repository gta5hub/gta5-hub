// ==========================
// Copy Phone Number
// ==========================

const buttons = document.querySelectorAll(".copy");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const row = button.closest("tr");

        // العمود الرابع هو رقم الهاتف
        const phoneNumber = row.children[3].innerText.trim();

        navigator.clipboard.writeText(phoneNumber);

        button.textContent = "Copied ✓";

        setTimeout(() => {
            button.textContent = "Copy";
        }, 1500);

    });

});


// ==========================
// Search
// ==========================

const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", () => {

        const value = search.value.toLowerCase();

        const rows = document.querySelectorAll("#cheatList tr");

        rows.forEach(row => {

            const text = row.innerText.toLowerCase();

            row.style.display = text.includes(value) ? "" : "none";

        });

    });

}


// ==========================
// Category Filter
// ==========================

function filterCategory(category) {

    const rows = document.querySelectorAll("#cheatList tr");

    rows.forEach(row => {

        const rowCategory = row.children[1].innerText;

        if (category === "all" || rowCategory === category) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

}