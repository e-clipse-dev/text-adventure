String.prototype.splitCamelCase = function() {
  return this.replace(/([a-z])([A-Z])/g, '$1 $2');
}

String.prototype.capitalize = function() {
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

//arrow functions do not have their own 'this' value, and are therefore not able to reference itself. 
const globalInventory = {
  weapons: {
    sword: {
      basicSword: {
        rarity: 'common',
        buyPrice: 5,
        sellPrice: 3,
        image: 'images/basic-sword.png',
        description: function() { return 'A standard basic sword'},
      },
      /* 'jeweled-sword': {
        'attack': 15,
        'buyPrice': 20,
        'sellPrice': 10,
        'image': 'images/jeweled-sword.png',
        'description': 'A sword with an embedded jewel of mysterious origin. It contains magic, granting additional power compared to ordinary swords.'
      }, */
    },
    ring: {
      basicRing: {
        rarity: 'common',
        attack: 3,
        buyPrice: 5,
        sellPrice: 3,
        image: 'images/basic-ring.png',
        description: function () { return 'A standard basic ring for casting basic spells'},
      }
    },
    dagger: {
      basicDagger: {
        rarity: 'common',
        attack: 3,
        buyPrice: 5,
        sellPrice: 3,
        image: 'images/basic-dagger.png',
        description: function() {return 'A standard dagger'},
      }
    },
    bow: {
      basicBow:{
        rarity: 'common',
        attack: 3,
        buyPrice: 5,
        sellPrice: 3,
        image: 'images/bow-arrow.png',
        description: function() {return 'A standard bow with arrows'},
      }
    },
    axe: {
      basicAxe: {
        rarity: 'common',
        attack: 3,
        buyPrice: 5,
        sellPrice: 3,
        image: 'images/basic-axe.png',
        description: function() {return 'A standard axe, meant for chopping wood.'},
      }
    }
  },
  consumables: {
    potion: {
      healthPotion: {
        quantity: 1,
        power: 10,
        buyPrice: 6,
        sellPrice: 3,
        image: 'images/health-potion.png',
        description: function() { return colorExpressions(this,'A standard potion that restores ${this.power} health.')}
      },
      poisonPotion:{
        quantity: 3,
        power: 3,
        damage: 3,
        buyPrice: 6,
        sellPrice: 3,
        image: 'images/poison-potion.png',
        description: function() { return colorExpressions(this, 'A flask filled with poison. The flask does ${this.damage} damage and inflicts the poison status. If the poison status is already inflicted, remove the poison status instead.')}
      },
      sludgePotion:{
        quantity: 2,
        damage: 2,
        buyPrice: 4,
        sellPrice: 3,
        image: 'images/sludge-potion.png',
        description: function() {return colorExpressions(this,'A flask filled with a gelatinous green, oozing sludge. The flask does ${this.damage} damage and inflicts the fatigue status. If the fatigue status is already inflicted, remove the slow status instead.')}
      },
      burnPotion:{
        quantity: 2,
        damage: 3,
        buyPrice: 6,
        sellPrice: 3,
        image: 'images/burn-potion.png',
        description: function() {return colorExpressions(this,'A flask filled with a flammable liquid. The flask does ${this.damage} damage and inflicts the burn status. If the burn status is already inflicted, remove the burn status instead.')}
      },
      attackBoost: {
        quantity: 4,
        damage: 3,
        buyPrice: 6,
        sellPrice: 3,
        image: 'images/attack-boost-potion.png',
        description: function() {return colorExpressions(this,'A potion that boosts the attack of the user and applies the attack status. The user will deal an additional ${this.damage} attack for all sources.')}
      }
      /* 'mana-potion': {
        'mana-power': 10,
        'buyPrice': 8,
        'sellPrice': 4,
        'image': 'images/mana-potion.png',
        'description': 'A potion that restores mana for casting spells.'
      } */
    }
  },
  materials:{}
};



 //CHANGE/ADD INLINE STYLING BEFORE OUR EXPRESSIONS ARE EVALUATED SO WE TURN OUR STRINGS INTO TEMPLATE LITERALS WITH THIS FUNCTION
 function colorExpressions(obj, str) {
  let result = str;
  // Replace ${this.damage} with a span styled to display in red
  result = result.replace(/\$\{this\.damage\}/g, `<span style="color:red;">${obj.damage}</span>`);
  
  // Replace ${this.power} with a span styled to display in green
  result = result.replace(/\$\{this\.power\}/g, `<span style="color:green;">${obj.power}</span>`);
  
  // Return the result as a template literal
  return result;
}

 console.log(globalInventory.consumables.potion["healthPotion"].description());
function createNewInventory(obj, inputs) {
  // Initialize new inventory object
  let newInventory = {};
 
  // Helper function to copy an item
  const copyItem = (category, subCategory, item, newInventory) => {
    // Initialize new object structures in newInventory
    newInventory[category] = newInventory[category] || {};
    newInventory[category][subCategory] = newInventory[category][subCategory] || {};
    newInventory[category][subCategory][item] = newInventory[category][subCategory][item] || {};
  
    // Copy properties from original item to newInventory
    for (let prop in obj[category][subCategory][item]) {
      newInventory[category][subCategory][item][prop] = obj[category][subCategory][item][prop];
    }
  };
 
  // Check if the input is the entire object
  if (!inputs) { 
    //No inputs were given, so the first parameter left is just the obj itself the user wants to copy. 
    return deepCopy(obj);
  }
  // If inputs is not an array, treat it as a single input 
  if (!Array.isArray(inputs)) {
  inputs = [inputs];
  }
  // Loop over each input
  for (let input of inputs) {
    // Check if input is a category
    if (obj[input]) {
      // Copy all items under the category
      for (let subCategory in obj[input]) {
        for (let item in obj[input][subCategory]) {
          copyItem(input, subCategory, item, newInventory);
        }
      }
    } else {
      // Check if input is a subcategory
      for (let category in obj) {
        if (obj[category][input]) {
          // Copy all items under the subcategory
          for (let item in obj[category][input]) {
            copyItem(category, input, item, newInventory);
          }
        } else {
          // Check if input is an item
          for (let subCategory in obj[category]) {
            for (let item in obj[category][subCategory]) {
              if (item === input) {
                copyItem(category, subCategory, item, newInventory);
              }
            }
          }
        }
      }
    }
  }
 
  // Return the new inventory
  return newInventory;
 }

 function deepCopy(obj) {
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
     if (typeof obj[key] === 'function') {
       result[key] = obj[key];
     } else if (obj[key] !== null && typeof obj[key] === 'object') {
       result[key] = deepCopy(obj[key]);
     } else {
       result[key] = obj[key];
     }
  }
  return result;
 }

/*  function createNewInventory(obj, inputs) {
  // Initialize new inventory object
  let newInventory = {};
 
  // Helper function to copy an item
  const copyItem = (category, subCategory, item, quantity, newInventory) => {
     // Initialize new object structures in newInventory
     newInventory[category] = newInventory[category] || {};
     newInventory[category][subCategory] = newInventory[category][subCategory] || {};
     newInventory[category][subCategory][item] = newInventory[category][subCategory][item] || {};
 
     // Set or update the quantity
     newInventory[category][subCategory][item].quantity = quantity;
 
     // Copy properties from original item to newInventory
     for (let prop in obj[category][subCategory][item]) {
      newInventory[category][subCategory][item][prop] = obj[category][subCategory][item][prop];
     }
  };
 
  // Check if the input is the entire object
  if (!inputs) {
     return deepCopy(obj);
  }
 
  // Loop over each input
  for (let input of inputs) {
     let category, subCategory, item, quantity;
 
     if (input.length === 3) {
       [category, subCategory, item] = input;
       quantity = 1;
     } else if (input.length === 2) {
       [category, item] = input;
       quantity = 1;
     } else {
       continue;
     }
 
     // Check if input is a category
     if (obj[category]) {
       // Copy all items under the category
       for (let subCategory in obj[category]) {
         for (let item in obj[category][subCategory]) {
           copyItem(category, subCategory, item, quantity, newInventory);
         }
       }
     } else {
       // Check if input is a subcategory
       for (let category in obj) {
         if (obj[category][subCategory]) {
           // Copy all items under the subcategory
           for (let item in obj[category][subCategory]) {
             copyItem(category, subCategory, item, quantity, newInventory);
           }
         } else {
           // Check if input is an item
           for (let subCategory in obj[category]) {
             for (let item in obj[category][subCategory]) {
               if (item === input) {
                 copyItem(category, subCategory, item, quantity, newInventory);
               }
             }
           }
         }
       }
     }
  }
 
  // Return the new inventory
  return newInventory;
 } */

 let tutorialInventory = createNewInventory(globalInventory, ['consumables', 'basicSword']);

 /* tutorialInventory = createNewInventory(globalInventory, ['basic-sword']) */
 console.log(tutorialInventory);

console.log(globalInventory);


const statusEffects = {

}
const categoryIcons = {
  weapons: 'ra ra-crossed-swords',
  consumables: 'ra ra-potion',
  materials: 'ra ra-zigzag-leaf',
}

const inventory = {};
const NPC = {
  'Mason': {
    image: 'images/blacksmith-person-1.png.png',
    messages : {
      intro : "Welcome to my shop!", //intro of the shop
      purchase : ["Thanks for the purchase!", "Good find!"], //after purchasing
      sell : ["What have we got here?", "Just what i needed!"],  //selling to shop
      outOfCurrency : ["My prices displayed are final."], //trying to buy an item with 0 currency
      outOfStock : "Sorry, we've run out of stock for that item.", //no more inventory
      hover : "What are ya lookin for traveler?", //after hovering over 3 items
      leave : "Don't be a stranger. ", //leaving the shop 
    }
  }
};
populateNav(tutorialInventory);
populateGrid(tutorialInventory);
populateNPC('Mason');

function grabData(objInventory, itemDescription, event){
  console.log(event.target.parentNode.parentNode.querySelector('img')); 
  //navigate out of our hover-content and select an element from the item-wrapper element.
  let url = new URL(event.target.parentNode.parentNode.querySelector('img').src);
  console.log(url.pathname.slice(1))
  const imgSrc = url.pathname.slice(1); //grab the image pathing only
  const price = parseInt(event.target.parentNode.parentNode.querySelector('.item-wrapper > .coin').innerText, 10);
  const currency = document.querySelector('#currency-amount') 
  console.log(event.target.parentNode.parentNode.parentNode.id == 'shop-grid');

  if(event.target.parentNode.parentNode.parentNode.id == 'shop-grid'){ //check if you are on the shop-grid
    const quantity = event.target.parentNode.parentNode.querySelector('.quantity-item');
    const container = event.target.parentNode.parentNode;
    var soldOut = container.querySelector('.out-of-stock');
    let num = parseInt(quantity.innerText.match(/\d+/)); //match any numbers for our quantity
    
    if(num == 0){
      console.log("error: We are out of stock!");
      return;
    }
    if (currency.innerText == 0){
      console.log("error: You don't have enough money to buy that!")
      return;
    }
    else{
      if((parseInt(currency.innerText, 10) - price) < 0){
        console.log("error: You don't have enough money to buy that!")
        return;
      }
      else{
        //WE WILL NOT SUBTRACT FROM SHOP INVENTORY OBJECT ONLY BY VALUE ON THE SHOP STATICALLY, BECAUSE ALL SHOPS ARE ONLY VISITED ONCE. 
        
        num-= 1;
        console.log('num' + num)
        /* console.log((quantity.innerText).match(/\d+/)); */
        quantity.innerText = 'x' + num;
        //update our new quantity on shop
        if(num == 1 ){
          quantity.classList.toggle('hidden');
        }
        if(num == 0){
          // Apply grayscale filter to all elements inside the container
          
          var elementsToGray = container.querySelectorAll(':not(.out-of-stock)');
          for (var i = 0; i < elementsToGray.length; i++) {
            elementsToGray[i].style.filter = 'grayscale(100%)';
          }

          // Remove the filter from elements with the 'coin' class
          
          soldOut.classList.toggle('hidden');
          soldOut.style.filter = "none";
        }
        console.log('Currency' + currency.innerText);
        currency.innerText = parseInt(currency.innerText, 10) - price; //subtract item price from user currency
        console.log(currency.innerText);
      }
    }
    populateInventoryItemFromImg(objInventory, imgSrc); 
  }
  else if(event.target.parentNode.parentNode.parentNode.id == 'inventory-grid'){ //check if you are on the inventory-grid
    console.log('hi');
    const shopGrid = document.querySelector('#shop-grid');
    let targetItemWrapper; 
    let imageUrl;
    console.log(shopGrid);
    shopGrid.querySelectorAll('.item-wrapper').forEach(wrapper => { //looping through our #shop-grid Inventory
      wrapper.querySelectorAll('.shop-item').forEach(image => {
        imageUrl = new URL(image.src).pathname.slice(1);

        if(imageUrl === imgSrc){
          targetItemWrapper = image.parentNode; 
          //We have isolated the correct itemWrapper from #shop-grid here! 

          const quantity = targetItemWrapper.querySelector('.quantity-item');
          console.log(quantity);
          let num = parseInt(quantity.innerText.match(/\d+/));
          num ++;
          quantity.innerText = 'x' + num;
          console.log(quantity);
          if(num == 1){ //remove the out of order red banner and remove the grayscale filter
            targetItemWrapper.querySelector('.out-of-stock').classList.toggle('hidden');
            targetItemWrapper.querySelectorAll('*').forEach(element => element.style.filter = "none");
          }
          if(num == 2){ //If we have more than 2 quantities then show the quantity visual. 
            targetItemWrapper.querySelector('.quantity-item').classList.toggle('hidden');
          }
        }
      })
    })
    if(!targetItemWrapper){ //if targetItemWrapper is undefined/we were not able to find a match 
      //we search our globalInventory here and find the object that matches our imgSrc and use the createItemContainer function and append it to our shopInventory. 
    }
    currency.innerText = parseInt(currency.innerText, 10) + price;
    removeInventoryItemFromImg(imgSrc);
  }
}


//BUY AND SELL BUTTONS
document.querySelector('#buy-button').addEventListener('click', () => {
  document.querySelector('#sell-button').classList.add('gray-background')
  document.querySelector('#buy-button').classList.remove('gray-background')
  document.querySelector('#shop-grid').classList.remove('hidden')
  document.querySelector('#inventory-grid').classList.add('hidden')
})

document.querySelector('#sell-button').addEventListener('click', () =>{
  document.querySelector('#buy-button').classList.add('gray-background')
  document.querySelector('#sell-button').classList.remove('gray-background')
  document.querySelector('#shop-grid').classList.add('hidden')
  document.querySelector('#inventory-grid').classList.remove('hidden')
})


//CATEGORY NAVIGATION------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.querySelector('#all-category').addEventListener('click', () => {
  showItemsOnly('all');
  // Remove 'expanded' class from all other .category-nav elements
  const allCategoryElements = document.querySelectorAll('.category-nav');
  allCategoryElements.forEach((otherCategoryElement) => {
    if (otherCategoryElement !== document.querySelector('#all-category')) {
      otherCategoryElement.classList.remove('expanded');
    }
  });
  toggleCategoryText('all')
});

function populateNav(objInventory){
  const container = document.getElementById('category-navbar');
  let numOfNavElements = 1 + Object.keys(objInventory).length;  //the first 1 accounts for the 'all' category nav

  document.querySelector('#all-category').style.width = `calc(100%/${numOfNavElements})`;
  Object.keys(objInventory).forEach(category => {
    const categoryElement = document.createElement('article');
    categoryElement.classList.add('category-nav');
    categoryElement.style.width = `calc(100%/${numOfNavElements})`;

    if (categoryIcons[category]) {
      const icon = document.createElement('i');
      const classes = categoryIcons[category].split(' ');
      icon.classList.add(...classes); // Use the spread operator to add classes individually
      categoryElement.appendChild(icon);
    }
    
    const categoryText = document.createElement('span');
    /* categoryText.style.border = 'solid black'; */
    categoryText.innerText = category[0].toUpperCase() + category.slice(1);
    
    categoryText.classList.add('hidden');
    categoryElement.appendChild(categoryText);
    
    const categoryExitButton = createCoin('red-coin-nav', '');
    categoryExitButton.classList.add('hidden');
    categoryText.appendChild(categoryExitButton);
    
    /* console.log(categoryIcons[category])
    categoryElement.classList.add(categoryIcons[category]); */

    
    if(numOfNavElements !== 2){
      document.querySelector('#all-category').style.display = '';
      categoryElement.addEventListener('click', () => {
        showItemsOnly(category);

        const viewportWidth = window.innerWidth;


        // Remove 'expanded' class from all other .category-nav elements
        const allCategoryElements = document.querySelectorAll('.category-nav');
        allCategoryElements.forEach((otherCategoryElement) => {
          console.log(otherCategoryElement);
          if (otherCategoryElement !== categoryElement) {
            otherCategoryElement.classList.remove('expanded');
            if(viewportWidth <=1740){
              otherCategoryElement.classList.toggle('hidden');
            }
          }else{
            if(viewportWidth <=1740){
              categoryExitButton.classList.toggle('hidden');
            }
          }
        });
        
        // Toggle 'expanded' class for the clicked .category-nav element
        toggleCategoryText(categoryText);
        
        categoryElement.classList.toggle('expanded');
          /* categoryText.classList.toggle('hidden'); */
        

        /* const allCategoryTexts = document.querySelectorAll('.category-nav span');
        allCategoryTexts.forEach(text => {
            text.classList.add('hidden');
        });
        if(categoryText !== 'all'){
            categoryText.classList.remove('hidden');
        } */
      
      });
    }
    else{
      document.querySelector('#all-category').style.display = 'none';
      categoryElement.style.width = '100%';
      categoryElement.querySelector('i').style.marginRight = '0';
      categoryElement.addEventListener('click', () => {
        categoryText.classList.toggle('hidden');
      });
    }
    
    container.appendChild(categoryElement);
  }); 
};


function showItemsOnly(category) {
  const items = document.querySelectorAll('#shop-grid .item-wrapper');
  if(category == 'all'){
    items.forEach(item => {
      item.style.display = '';
    })
  }
  else{
    items.forEach(item => {
      console.log(item.classList); // Log the classes of the current item
      if (!item.classList.contains(category)) {
        item.style.display = 'none';
      } else {
        item.style.display = ''; // Reset display property to its default value
      }
    });
  }
}
function toggleCategoryText(categoryText) {
    const allCategoryTexts = document.querySelectorAll('.category-nav span');
    allCategoryTexts.forEach(text => {
        text.classList.add('hidden');
    });
    if(categoryText !== 'all'){
      if(categoryText.parentNode.classList.contains('expanded')){
          categoryText.classList.add('hidden');
      } 
      else{
        categoryText.classList.remove('hidden');
      }   
    }
}

function populateGrid(objInventory) {
  const gridContainer = document.querySelector('#shop-grid');

  Object.keys(objInventory).forEach(category => {
    Object.keys(objInventory[category]).forEach(itemType => {
      Object.keys(objInventory[category][itemType]).forEach(itemName => {
        const container = createItemContainer(category);
        console.log(objInventory[category][itemType][itemName].description());
        

        //create hover content
        let hoverContent;
        if(objInventory[category][itemType][itemName]['rarity']){
          hoverContent = createHoverContent(
            objInventory,
            itemName.splitCamelCase().capitalize(),
            itemType,
            objInventory[category][itemType][itemName].description(),
            objInventory[category][itemType][itemName]['rarity'],
          );
        }
        else{
          hoverContent = createHoverContent(
            objInventory,
            itemName.splitCamelCase().capitalize(),
            itemType,
            objInventory[category][itemType][itemName].description(),
          );
        }
        container.appendChild(hoverContent);

        const outOfStock = document.createElement('span'); //sold out
        outOfStock.innerText = 'SOLD OUT';
        outOfStock.classList.add('out-of-stock');
        outOfStock.classList.toggle('hidden');
        container.appendChild(outOfStock);

        if (!objInventory[category][itemType][itemName]['quantity']) { 
          //if no quantity is set, set it to one since it appears on the shop inventory
          objInventory[category][itemType][itemName]['quantity'] = 1;
        }

        container.appendChild(createItemQuantity(objInventory[category][itemType][itemName]['quantity']));
        container.appendChild(createItemImage(objInventory[category][itemType][itemName]['image']));
        container.appendChild(createItemPrice(objInventory[category][itemType][itemName]['buyPrice']));

        gridContainer.appendChild(container);
      });
    });
  });
}

function populateInventoryItemFromImg(objInventory, image){
  const gridContainer = document.querySelector('#inventory-grid');
  console.log('image: ' + image)
  for (let category of Object.keys(objInventory)) {
    for (let itemType of Object.keys(objInventory[category])) {
      for (let itemName of Object.keys(objInventory[category][itemType])){
        if (objInventory[category][itemType][itemName]['image'] === image) {

          if(!inventory[category]){
            inventory[category] = {};
          }
          if (!inventory[category][itemType]) {
            inventory[category][itemType] = {};
          }
          
          if (!inventory[category][itemType][itemName]) {
            inventory[category][itemType][itemName] = {};
          }

          
          console.log(inventory)
          console.log(objInventory)
          if (!inventory[category][itemType][itemName]['quantity']) {
            inventory[category][itemType][itemName]['quantity'] = 1;
            for(let itemKeys of Object.keys(objInventory[category][itemType][itemName])){
              if(itemKeys !== 'quantity'){
                inventory[category][itemType][itemName][itemKeys] = objInventory[category][itemType][itemName][itemKeys];
              }
              //ensure all key value pairs are placed into the inventory from globalInventory 
              //copy everything except the quantity because we are purchasing product starting at one. 
            }
            /* inventory[category][itemType][itemName]['image'] = image; */
            //create item container
            const container = createItemContainer(category);

            //create hover content
            let hoverContent;
            if(objInventory[category][itemType][itemName]['rarity']){
              hoverContent = createHoverContent(
                objInventory,
                itemName.splitCamelCase().capitalize(),
                itemType,
                objInventory[category][itemType][itemName].description(),
                objInventory[category][itemType][itemName]['rarity'],
              )
            }
            else{
              hoverContent = createHoverContent(
                objInventory,
                itemName.splitCamelCase().capitalize(),
                itemType,
                objInventory[category][itemType][itemName].description()
              )
            }
            

            container.appendChild(hoverContent);
            container.appendChild(createItemImage(image));
            container.appendChild(createItemPrice(objInventory[category][itemType][itemName]['sellPrice']));

            gridContainer.appendChild(container);
          }
          else{
            inventory[category][itemType][itemName]['quantity'] += 1;
            console.log(inventory)
            if (inventory[category][itemType][itemName]['quantity'] > 1) {
              const container = gridContainer.querySelector('.item-wrapper img[src="' + image + '"]').parentNode
              //REMEMBER THIS REFERS TO THE ITEMWRAPPER THAT HAS THE IMG IMAGE TARGETED, THEN WE TARGET THE PARENT NODE TO GRAB ITS CONTAINER.
              console.log('container: ', container)
              if (container.querySelector('.quantity-item') == undefined) { //if our container does not find a quantity-item that means we havent created a quantity indicator
                const quantitySpan = document.createElement('span');
                quantitySpan.innerText = 'x' + inventory[category][itemType][itemName]['quantity'];
                quantitySpan.classList.add('quantity-item');
                container.appendChild(quantitySpan);
              }
              else {
                const quantitySpan = container.querySelector('.quantity-item');
                quantitySpan.innerText = 'x' + inventory[category][itemType][itemName]['quantity'];
              }
            }
          }
        }
      }
    }
  }
  console.log(inventory);
}

function createHoverContent(objInventory, itemName, itemType, itemDescription, itemRarity){
  const hoverContent = document.createElement('div');
    hoverContent.style.backgroundColor = 'rgba(0,0,0,0.8)';
    hoverContent.classList.add('hover-content');

    const hoverWrapper = document.createElement('article');
      hoverWrapper.classList.add('hover-details');

      const itemNameHeading = document.createElement('h2');
        itemNameHeading.textContent = itemName;
        /* itemNameHeading.classList.add('sticky'); */
        hoverWrapper.appendChild(itemNameHeading);

      const typeAndName = document.createElement('p');
        if (itemRarity) {
          typeAndName.textContent = `${itemRarity} ${itemType}`;
        } else {
          typeAndName.textContent = itemType;
        }
        hoverWrapper.appendChild(typeAndName);

      const description = document.createElement('p');
        description.classList.add('description');
        description.innerHTML = itemDescription;
        hoverWrapper.appendChild(description);

      hoverContent.appendChild(hoverWrapper);
  
    const buyCoin = createCoin('green-coin', '', (event) => grabData(objInventory, itemDescription, event));
    hoverContent.appendChild(buyCoin);
  
    const exitCoin = createCoin('red-coin', '', () => hoverContent.style.display = 'none');
    hoverContent.appendChild(exitCoin);
  

  return hoverContent; 
}

function createCoin(coinClass, price, clickHandler) {
  const coin = document.createElement('div'); //or span if you want
  coin.classList.add('coin');
  coin.classList.add(coinClass);
  coin.innerText = price;
  coin.addEventListener('click', clickHandler);
  return coin;
}

function createItemContainer(category) {
  const container = document.createElement('article');
  container.classList.add('item-wrapper');
  container.classList.add(category);
  container.addEventListener('mousemove', () => container.querySelector('.hover-content').style.display = 'block');
  container.addEventListener('mouseleave', () => container.querySelector('.hover-content').style.display = 'none');
  return container;
}

function createItemQuantity(quantity){
    const span = document.createElement('span');
    span.innerText = 'x' + quantity;
    span.classList.add('quantity-item');
    if(quantity < 2){ //if quantity is 1 or 0, don't show the quantity visual.
      span.classList.toggle('hidden'); 
    }
    return span;
}
function createItemImage(imageSrc) {
  const img = document.createElement('img');
  img.src = imageSrc;
  img.classList.add('shop-item');
  return img;
}

function createItemPrice(price) {
  const span = document.createElement('span');
  span.innerText = price;
  span.classList.add('coin');
  return span;
}

function subtractItemQuantity(quantity){
  
}
//REMOVES ITEM FROM INVENTORY GRID AND YOUR INVENTORY OBJECT
function removeInventoryItemFromImg(image) {
  console.log('Removing item with image:', image);
  const gridContainer = document.querySelector('#inventory-grid');
  const containerToRemove = gridContainer.querySelector('.item-wrapper img[src="' + image + '"]').parentNode

  console.log('Container to remove:', containerToRemove);
  console.log('inventory', inventory);

  for (let category of Object.keys(inventory)) {
    for (let itemType of Object.keys(inventory[category])) {
      for (let itemName of Object.keys(inventory[category][itemType])) {
        const currentItem = inventory[category][itemType][itemName];

        if (currentItem['image'] === image) {
          currentItem['quantity'] -= 1;

          console.log('Quantity after decrement:', currentItem['quantity']);

          const quantity = containerToRemove.querySelector('.quantity-item');

          if (currentItem['quantity'] > 1) {
            if (quantity) {
              quantity.innerText = 'x' + currentItem['quantity'];
            } else {
              const quantitySpan = document.createElement('span');
              quantitySpan.innerText = 'x' + currentItem['quantity'];
              quantitySpan.classList.add('quantity-item');
              containerToRemove.appendChild(quantitySpan);
            }
          } else {
            // Remove quantity item and update container
            if (quantity) {
              quantity.innerText = '';
              containerToRemove.removeChild(quantity);
            }
          }

          // Remove the container if the quantity is 0
          if (currentItem['quantity'] === 0) {
            gridContainer.removeChild(containerToRemove);   //remove item from inventory grid
            delete inventory[category][itemType][itemName]; //delete from inventory object 
          }
        }
      }
    }
  }

  console.log(inventory);
} 

function populateNPC(name){
  const npc = document.querySelector('#npc')
  const image = document.createElement('img');
  image.src = NPC[name].image
  image.classList.add('npc');
  image.classList.add('flipX');
  image.id = name;
  npc.appendChild(image);
}

