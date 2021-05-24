import './styles/index.scss';
import imgHeaderLogo from './images/logo_lavasconia.png'
import imgIconUser from './images/icon_user.svg'
import imgIconCart from './images/icon_cart.svg'
import imgEkco from './images/EKCO.png'
import imgHeroBanner from './images/hero_banner.png'
import imgRecipe from './images/receta_1.png'
import imgSliderList from './imports/bestProducts.js'

const headerLogo = document.querySelector('#header__logo');
const iconUser = document.querySelector('#icon_user');
const iconCart = document.querySelector('#icon_cart');
const logoEkco = document.querySelector('#logo_ekco');
const heroBanner = document.querySelector('#hero_banner')
const recipeImg = document.querySelector('#recipe_img')
const sliderImgList = document.querySelectorAll('.slider__img')
const sliderImgAsArray = [...sliderImgList]

headerLogo.src = imgHeaderLogo
iconUser.src = imgIconUser
iconCart.src = imgIconCart
logoEkco.src = imgEkco
heroBanner.src = imgHeroBanner
recipeImg.src = imgRecipe

sliderImgAsArray.map((item,idx) => {
    item.src = imgSliderList[idx]
})

// 

const faqList = document.querySelectorAll('.faq__item')

for (let index = 0; index < faqList.length; index++) {
    faqList[index].addEventListener('click', ()=> {
        faqList[index].classList.toggle('active')
    })
    
}


const characterImg = document.querySelector('#characterImg')
const characterName = document.querySelector('#characterName')
const characterGender = document.querySelector('#characterGender')
const episodesList = document.querySelector('#episodesList')

let getCharacter = async () => {
    let characterData = await fetch('https://rickandmortyapi.com/api/character/2')
    .then(response => response.json())
    .then(data => {
        return data
    })
    return characterData
}



let renderCharacter = async () => {
    let character = await getCharacter()
    characterImg.src = character.image
    characterName.innerHTML = character.name
    characterGender.innerHTML = character.gender
    
    for (let index = 0; index < 5; index++) {
        episodesList.innerHTML += `<li>${character.episode[index]}</li>`
        
    }
    
}

renderCharacter();