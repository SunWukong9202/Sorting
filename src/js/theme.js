const themeMap = {
  light: "dark",
  dark: "light",
};

const toggle = document.getElementById('Toggle1');
toggle.onclick = toggleTheme

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],localStorage.setItem('theme', tmp),tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);
if(theme == 'dark') {
  toggle.checked = true;
}

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];
  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}