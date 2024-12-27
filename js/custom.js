
// Select all dropdowns within the navigation menu
const dropdowns = document.querySelectorAll('#header nav ul.nav-main li.dropdown > a');
const submenus = document.querySelectorAll('.dropdown-submenu > a');

// Function to handle dropdown click
function handleDropdownClick(e) {
    e.preventDefault(); // Prevent default link behavior
    const parentLi = this.parentElement;

    // Remove 'active' class from all other dropdowns
    document.querySelectorAll('#header nav ul.nav-main li.dropdown.active').forEach(activeDropdown => {
        if (activeDropdown !== parentLi) {
            activeDropdown.classList.remove('active');
        }
    });

    // Toggle the 'active' class on the clicked dropdown
    parentLi.classList.toggle('active');
}

// Function to handle submenu click
function handleSubmenuClick(e) {
    e.preventDefault();
    const parentLi = this.parentElement;

    // Toggle the 'active' class on the clicked submenu
    parentLi.classList.toggle('active');
}

// Add event listeners to main dropdown links
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', handleDropdownClick);
});

// Add event listeners to submenu links
submenus.forEach(submenu => {
    submenu.addEventListener('click', handleSubmenuClick);
});

