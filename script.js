document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.menu-section').forEach((section) => {
    section.style.display = 'none';
  });
  document.querySelector('#main-menu').style.display = 'grid';
  
});

let image = document.querySelector('#character');
/* let width = image.width; */
/* let height = image.height; */

range.addEventListener("input", function() {
  document.body.style.setProperty("--size", this.value + "px");  
  /* image.width = width * (this.value/100);
  image.height = height *(this.value/100);
  image.style.left=(width/2-image.width/2+"px");
  image.style.top=(height/2-image.height/2+"px");     */
}); 

const menuSections = document.querySelectorAll('.menu-section');
console.log(menuSections);
/*const backButton = document.querySelector('#back');

const menuOptions = document.querySelectorAll('.main-menu-options')

menuOptions.forEach((section) => {
  section.addEventListener('click', () =>{
    const menuId = section.id;
    navigateTo(menuId);
  })
})


menuSections.forEach((section) => {
  section.addEventListener('click', ()=> {
    const menuId= section.id;
    navigateTo(menuId);
  });
});

backButton.addEventListener('click', ()=>{
  navigateTo('main-menu');
})

function navigateTo(menuId){
  menuSections.forEach((section) => {
    section.style.display = 'none';
  });
  document.querySelector(menuId).style.display = 'block';

} */
document.querySelector('#character1').addEventListener('click', () =>{
  document.querySelector('.main-nav').style.display = 'none';
  image.style.display = 'inline-block';
  document.querySelector('#character-menu').style.display = 'grid';
})
document.querySelector('.closebtn').addEventListener('click', removeNav);
document.querySelector('#character').addEventListener('click', triggerNav);

function removeNav(){
  document.querySelector('.sidenav').classList.remove('expandNav')
}
function triggerNav(){
  document.querySelector('.sidenav').classList.toggle('expandNav')
}
/*document.querySelector('#cc-skin').addEventListener('click', openSkinNav);
document.querySelector('#cc-hair').addEventListener('click', openHairNav);
 */

/* document.querySelector('#hairback').addEventListener('click', openHairNav) */

const menuOptions = document.querySelectorAll('.menu-options');

menuOptions.forEach((section) => console.log(section.id))

//NAVIGATING TO OTHER MENUS
menuOptions.forEach((section) => {
  section.addEventListener('click', () =>{
    console.log('hi')
    const menuId = section.id;
    navigateTo(menuId);
  })
})

const backMainMenu = document.querySelectorAll('.backMain');
const backCharMenu = document.querySelectorAll('.backChar');
/* backButton.forEach((section) => console.log(section)); */

backMainMenu.forEach((section) =>{
  section.addEventListener('click', () => navigateTo('main-menu'));
})
backCharMenu.forEach((section) =>{ 
  section.addEventListener('click', () => navigateTo('character-menu'));
}); 

document.querySelector('#randomizer').addEventListener('click', randomize);

function randomize(){
  let genders = Object.keys(characters.gender);
  let randomGender = genders[Math.floor(Math.random() * genders.length)];
  console.log(randomGender)
  let outfits = Object.keys(characters.gender[randomGender].outfits);
  let randomOutfit = outfits[Math.floor(Math.random() * outfits.length)];
  console.log(randomOutfit)
  let skinColors = Object.keys(characters.gender[randomGender].outfits[randomOutfit].skinColorImages);
  let randomSkinColor = skinColors[Math.floor(Math.random() * skinColors.length)];
  console.log(randomSkinColor)
  /* let mainCharacter = new Character('Main', randomGender, randomOutfit, randomSkinColor); */
  mainCharacter.gender = randomGender;
  mainCharacter.outfit = randomOutfit;
  mainCharacter.skinColor = randomSkinColor; 
  /* let newImage = characters.gender[mainCharacter.gender].outfits[mainCharacter.outfit].skinColorImages[mainCharacter.skinColor]; */
  document.querySelector('#character').src = mainCharacter.getAvatarImage();
}


function navigateTo(menuId){
  console.log()
  menuSections.forEach((section) => { //all menu sections disappear
    section.style.display = 'none';
  });
  document.getElementsByClassName(menuId)[0].style.display = 'grid'; //make the only menu appear with grid display
}  

/* function openNav(){
  document.querySelector('.sidenav').style.width = '30vw';
}
function closeNav(){
  document.querySelector('.sidenav').style.width = '0';
} */

document.querySelectorAll('.gender').forEach( () => addEventListener('click', changeImage));
document.querySelectorAll('.outfit').forEach( () => addEventListener('click', changeImage));
/* function changeGender(event){
  console.log(event.target.innerText);
  console.log(characters.sex[event.target.innerText].traits[mainCharacter.outfit].skinColorImages[mainCharacter.skinColor])
  mainCharacter.gender = event.target.innerText;
  let newImage = characters.sex[event.target.innerText].traits[mainCharacter.outfit].skinColorImages[mainCharacter.skinColor];
  document.querySelector('#character').src = newImage; 
} */

function changeImage(event){
  mainCharacter[event.target.className] = event.target.innerText; //new data reassigned
  let newImage = characters.gender[mainCharacter.gender].outfits[mainCharacter.outfit].skinColorImages[mainCharacter.skinColor];
  document.querySelector('#character').src = newImage;
}

/* function openSkinNav(){
  document.querySelector('#main-menu').classList.toggle('hidden')
  document.querySelector('#skin-sidenav').classList.toggle('hidden')
} 

function openHairNav(){
  document.querySelector('#main-menu').classList.toggle('hidden')
  document.querySelector('#hair-sidenav').classList.toggle('hidden')
}  */

let characters ={
  gender: {
    'Male': {
      outfits: {
        'Farmer' : {
          skinColorImages : {
            'Pale' : 'images/farmer male pale.png',
            'Fair' : 'images/farmer male fair.png',
            'Beige' : 'images/farmer male beige.png',
            'Medium' : 'images/farmer male medium.png',
            'Olive' : 'images/farmer male olive.png',
            'Brown' : 'images/farmer male brown.png',
            'Black' : 'images/farmer male black.png'
          }
        },
        'Thief' :{
          skinColorImages : {
            'Pale' : 'images/thief male pale.png',
            'Fair' : 'images/thief male fair.png',
            'Beige' : 'images/thief male beige.png',
            'Medium' : 'images/thief male medium.png',
            'Olive' : 'images/thief male olive.png',
            'Brown' : 'images/thief male brown.png',
            'Black' : 'images/thief male black.png'
          }
        },
        'Guard' :{
          skinColorImages : {
            'Pale' : 'images/guard male pale.png',
            'Fair' : 'images/guard male fair.png',
            'Beige' : 'images/guard male beige.png',
            'Medium' : 'images/guard male medium.png',
            'Olive' : 'images/guard male olive.png',
            'Brown' : 'images/guard male brown.png',
            'Black' : 'images/guard male black.png'
          }
        },
        'Merchant' :{
          skinColorImages : {
            'Pale' : 'images/merchant male pale.png',
            'Fair' : 'images/merchant male fair.png',
            'Beige' : 'images/merchant male beige.png',
            'Medium' : 'images/merchant male medium.png',
            'Olive' : 'images/merchant male olive.png',
            'Brown' : 'images/merchant male brown.png',
            'Black' : 'images/merchant male black.png'
          }
        }
      }
    },
    'Female': {
      outfits: {
        'Farmer' : {
          skinColorImages : {
            'Pale' : 'images/farmer female pale.png',
            'Fair' : 'images/farmer female fair.png',
            'Beige' : 'images/farmer female beige.png',
            'Medium' : 'images/farmer female medium.png',
            'Olive' : 'images/farmer female olive.png',
            'Brown' : 'images/farmer female brown.png',
            'Black' : 'images/farmer female black.png'
          }
        },
        'Thief' :{
          skinColorImages : {
            'Pale' : 'images/thief female pale.png',
            'Fair' : 'images/thief female fair.png',
            'Beige' : 'images/thief female beige.png',
            'Medium' : 'images/thief female medium.png',
            'Olive' : 'images/thief female olive.png',
            'Brown' : 'images/thief female brown.png',
            'Black' : 'images/thief female black.png'
          }
        },
        'Guard' :{
          skinColorImages : {
            'Pale' : 'images/guard female pale.png',
            'Fair' : 'images/guard female fair.png',
            'Beige' : 'images/guard female beige.png',
            'Medium' : 'images/guard female medium.png',
            'Olive' : 'images/guard female olive.png',
            'Brown' : 'images/guard female brown.png',
            'Black' : 'images/guard female black.png'
          }
        },
        'Merchant' :{
          skinColorImages : {
            'Pale' : 'images/merchant female pale.png',
            'Fair' : 'images/merchant female fair.png',
            'Beige' : 'images/merchant female beige.png',
            'Medium' : 'images/merchant female medium.png',
            'Olive' : 'images/merchant female olive.png',
            'Brown' : 'images/merchant female brown.png',
            'Black' : 'images/merchant female black.png'
          }
        }
      }
    }
  }
}

class Character {
  constructor(name, gender, outfit, skinColor){
    this.name = name;
    this.gender = gender;
    this.outfit = outfit;
    this.skinColor = skinColor;
  }

  //getters : all these methods are already in the prototype of our class object

  getName(){
    return this.name;
  }

  getGender(){
    return this.gender;
  }

  getOutfit(){
    return this.outfit;
  }

  getSkinColor(){
    return this.skinColor;
  }

  getAvatarImage(){
    return characters.gender[this.gender].outfits[this.outfit].skinColorImages[this.skinColor]
  }
}

let mainCharacter = new Character('John', 'Male', 'Farmer', 'Pale');

console.log(mainCharacter.name)