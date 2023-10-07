// Select all the list items in the navigation
document.querySelectorAll("#nav li").forEach((navEl) => {
    navEl.addEventListener("click", () => {
        toggleTab(navEl.id, navEl.dataset.target);
    });
});

// Function to toggle the active tab and hide/show content
function toggleTab(selectedNav, targetId) {
    const navEls = document.querySelectorAll("#nav li");

    navEls.forEach((navEl) => {
        if (navEl.id === selectedNav) {
            navEl.classList.add("is-active");
        } else {
            navEl.classList.remove("is-active");
        }
    });

    const tabs = document.querySelectorAll(".tab-pane");

    tabs.forEach((tab) => {
        if (tab.id === targetId) {
            tab.style.display = "block";
        } else {
            tab.style.display = "none";
        }
    });
}
