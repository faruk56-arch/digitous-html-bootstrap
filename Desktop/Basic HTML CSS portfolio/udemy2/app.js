


const titre = document.querySelector('h1')
const btn = document.querySelector('.btn-tr')


btn.addEventListener('click', presetbet )
titre.addEventListener('mouseenter', presetbet)
document.addEventListener('Keydown', presetbet)

function presetbet() {
    // titre.classList.add('taille-txt')
    console.log("Touche pressée");

}
