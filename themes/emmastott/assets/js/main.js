function toggleTheme() {
	let currentTheme = document.documentElement.getAttribute("data-theme");
	let targetTheme = currentTheme === "dark" ? "light" : "dark";

	document.documentElement.setAttribute("data-theme", targetTheme)
	localStorage.setItem("theme", targetTheme);

	document.getElementById("theme-toggle").dataset.feather = targetTheme === "dark" ? "moon" : "sun";
	feather.replace();
	document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
};

let storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
	document.documentElement.setAttribute("data-theme", storedTheme)
}

document.onreadystatechange = () => {
	if (document.readyState === "complete") {
		document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
	}
};
