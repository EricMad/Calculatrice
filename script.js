const touches = [...document.querySelectorAll(".touche")];
const listKeyCode = touches.map((touche) => touche.dataset.key);
const ecran = document.querySelector(".ecran");

document.addEventListener("click", (e) => {
  console.log(e);
  const valeur = e.target.dataset.key;
  calculer(valeur);
});

const calculer = (valeur) => {
  if (listKeyCode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "13":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      default:
        const indexKeyCode = listKeyCode.indexOf(valeur);
        const touche = touches[indexKeyCode];
        ecran.textContent += touche.innerHTML;
    }
  }
};
