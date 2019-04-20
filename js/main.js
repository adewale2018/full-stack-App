let dropdownMenu = () => {
    let dropdownBtn = document.getElementById("dropdownClick");
    if(dropdownBtn.className === "topnav") {
        dropdownBtn.className += " responsive";
    } else {
        dropdownBtn.className = "topnav";
    }
}