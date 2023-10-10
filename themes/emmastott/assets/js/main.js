function toggleDarkMode() {
	let currentMode = document.documentElement.getAttribute("data-theme");
	let targetMode = currentMode === "dark" ? "light" : "dark";

	document.documentElement.setAttribute("data-theme", targetMode)
	localStorage.setItem("theme", targetMode);
};

let storedMode = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedMode) {
	document.documentElement.setAttribute("data-theme", storedMode)
}

document.onreadystatechange = () => {
	if (document.readyState === "complete") {
		document.getElementById("darkmode-toggle").addEventListener("click", toggleDarkMode);
	}
};
