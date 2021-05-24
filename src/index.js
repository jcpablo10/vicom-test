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

console.log(sliderImgAsArray)

sliderImgAsArray.map((item,idx) => {
    item.src = imgSliderList[idx]
})