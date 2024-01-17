const menulist = document.querySelector('.menu__list')
const curtain = document.querySelector('.blur')

const openMenuFunc = () => {
	menulist.classList.add('menu__list--open')
	curtain.classList.add('blur--on')
}

const closeMenuFunc = () => {
	menulist.classList.remove('menu__list--open')
	curtain.classList.remove('blur--on')
}
