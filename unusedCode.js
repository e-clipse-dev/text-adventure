/* function colorExpressions(item, str) { //old color changing function for expression on global inventory 
  let result = str;
  let num = 0;
  console.log('item ', item);
  if (item.hasOwnProperty('power')) {
    num ++;
    console.log('power' + num);
     let regex = new RegExp('${this.power}', 'g');
     result = result.replace(regex, `<span style="color:green;">${item.power}</span>`);
     console.log('result', result)
  }
  else if (item.hasOwnProperty('damage')) {
    console.log('damage');
     let regex = new RegExp('${this.damage}', 'g');
     result = result.replace(regex, `<span style="color:red;">${item.damage}</span>`);
  }
  return result;
 } */

 /*   //CHANGE/ADD INLINE STYLING BEFORE OUR EXPRESSIONS ARE EVALUATED SO WE TURN OUR STRINGS INTO TEMPLATE LITERALS WITH THIS FUNCTION
 function colorExpressions(obj, str) {
  let result = str;
  // Replace ${this.damage} with a span styled to display in red
  result = result.replace(/\$\{this\.damage\}/g, `<span style="color:red;">${obj.damage}</span>`);
  
  // Replace ${this.power} with a span styled to display in green
  result = result.replace(/\$\{this\.power\}/g, `<span style="color:green;">${obj.power}</span>`);
  
  // Return the result as a template literal
  return result;
} */

 /* function coloredTemplate(strings, ...expressions) {
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < expressions.length) {
      if (expressions[i] === this.damage) {
        result += `<span style="color:red;">${expressions[i]}</span>`;
      } else if (expressions[i] === this.power) {
        result += `<span style="color:green;">${expressions[i]}</span>`;
      } else {
        result += expressions[i];
      }
    }
  }
  return result;
} */

/* function createNewInventory(obj, inputs) {
  // Initialize new inventory object
  let newInventory = {};
 
  // Helper function to copy an item
  const copyItem = (category, subCategory, item, newInventory) => {
    // Initialize new object structures in newInventory
    newInventory[category] = {};
    newInventory[category][subCategory] = {};
    newInventory[category][subCategory][item] = {};
  
    // Copy properties from original item to newInventory
    for (let prop in obj[category][subCategory][item]) {
      newInventory[category][subCategory][item][prop] = obj[category][subCategory][item][prop];
      console.log(item + ' ' + prop);
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
                copyItem(category, subCategory, input, newInventory);
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
*/

/* function determineQuantity(input){
  let quantity;
  if(input.length == 3 || input.length > 2){
    if(/^every$/i.test(input[input.length - 1])){ //check to see if every is at the last position of our input
      if(/^\d+-\d+$/.test(input[1])){ //if range is given
        quantity = [input[1]];
      }
      else{ //no range given only numbers for randomization
        quantity = [...input.slice(1, -1)];
      }
      randomizeEvery = true; //flag is turned on to represent that the 'every' keyword was found
    }
    else{
      // Generate a random quantity from the rest of the inputs
      quantity = getRandomElementFromArray([...input.slice(1)]);
      console.log('got quantity: ' + quantity);
    }
    
   }
   else if (input.length == 2) { 
      if(/^\d+-\d+$/.test(input[1])){ //check for 2numbers between a dash
        
        quantity = getRandomElementFromArray([input[1]]);
        console.log(quantity);
      }
      else{ //only one quantity was provided
        console.log('only one quantity provided')
        quantity = input[1]; 
        console.log(quantity);
      }
   } else { //input.length == 1
     quantity = undefined; //quantity wasn't given 
   }
   return quantity;
 } */

/*  document.querySelector('#all-category').addEventListener('click', () => {
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
  let numOfNavElements = 1 + Object.keys(objInventory).length;  //the first one accounts for the 'all' category nav located in our html

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
    // categoryText.style.border = 'solid black'; 
    categoryText.innerText = category[0].toUpperCase() + category.slice(1);
    
    categoryText.classList.add('hidden');
    categoryElement.appendChild(categoryText);
    
    const categoryExitButton = createCoin('red-coin-nav', '');
    categoryExitButton.classList.add('hidden');
    categoryText.appendChild(categoryExitButton);
    
    // console.log(categoryIcons[category])
    //categoryElement.classList.add(categoryIcons[category]); 

    
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
        //categoryText.classList.toggle('hidden'); 
        

        // const allCategoryTexts = document.querySelectorAll('.category-nav span');
        //allCategoryTexts.forEach(text => {
        //    text.classList.add('hidden');
        //});
        //if(categoryText !== 'all'){
        //    categoryText.classList.remove('hidden');
        //} 
      
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
} */

/* function grabData(objInventory, event){
  console.log(event.target.parentNode.parentNode.querySelector('img')); 
  const imgSrc = event.target.parentNode.parentNode.querySelector('img').src.replace(/.*images/, 'images');
  //imgSrc = imgSrc.replace(/.*images/, 'images');
  console.log('cleanedPath: ' + imgSrc); // Should log the path after 'image'
  //navigate out of our hover-content and select an element from the item-wrapper element.
  //let url = new URL(event.target.parentNode.parentNode.querySelector('img').src); //url method
  //console.log(url.pathname.slice(1));
  //const imgSrc = url.pathname.slice(1); //grab the image pathing only
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
      displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.outOfStock), 0, 22);
      return;
    }
    if (currency.innerText == 0){
      console.log("error: You don't have enough money to buy that!")
      displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.outOfCurrency), 0, 22);
      return;
    }
    else{
      if((parseInt(currency.innerText, 10) - price) < 0){
        console.log("error: You don't have enough money to buy that!")
        displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.outOfCurrency), 0, 22);
        return;
      }
      else{
        //WE WILL NOT SUBTRACT FROM SHOP INVENTORY OBJECT ONLY BY VALUE ON THE SHOP STATICALLY, BECAUSE ALL SHOPS ARE ONLY VISITED ONCE. 
        displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.purchase), 0, 22);
        num-= 1;
        console.log('num' + num)
        //console.log((quantity.innerText).match(/\d+/));
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
        //imageUrl = new URL(image.src).pathname.slice(1);
        imageUrl = image.src.replace(/.*images/, 'images');
        if(imageUrl === imgSrc){
          displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.sell), 0, 22);
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
} */

/* function populateInventoryItemFromImg(objInventory, image){
  const gridContainer = document.querySelector('#inventory-grid');
  console.log('image: ' + image)
  for (let category of Object.keys(objInventory)) {
    for (let itemType of Object.keys(objInventory[category])) {
      for (let itemName of Object.keys(objInventory[category][itemType])){
        console.log(objInventory[category][itemType][itemName]['image']);
        console.log(objInventory[category][itemType][itemName]['image'] === image);
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
            //inventory[category][itemType][itemName]['image'] = image;
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
            container.appendChild(createItemQuantity(inventory[category][itemType][itemName]['quantity']));
            container.appendChild(createItemPrice(objInventory[category][itemType][itemName]['sellPrice']));
            gridContainer.appendChild(container);

            gridContainer.querySelector('.item-wrapper img[src="' + image + '"]').parentNode.querySelector('.banner').classList.add('hidden');
            
          }
          else{
            inventory[category][itemType][itemName]['quantity'] += 1;
            console.log(inventory)
            const container = gridContainer.querySelector('.item-wrapper img[src="' + image + '"]').parentNode;

            const quantitySpan = container.querySelector('.banner').querySelector('.quantity-item');
            quantitySpan.innerText = 'x' + inventory[category][itemType][itemName]['quantity'];

            if (inventory[category][itemType][itemName]['quantity'] > 1) {
              container.querySelector('.banner').classList.remove('hidden');
              //  //REMEMBER THIS REFERS TO THE ITEMWRAPPER THAT HAS THE IMG IMAGE TARGETED, THEN WE TARGET THE PARENT NODE TO GRAB ITS CONTAINER.
              // console.log('container: ', container)
              // if (container.querySelector('.quantity-item') == undefined) { //if our container does not find a quantity-item that means we havent created a quantity indicator
              //   const quantitySpan = document.createElement('span');
              //   quantitySpan.innerText = 'x' + inventory[category][itemType][itemName]['quantity'];
              //   quantitySpan.classList.add('quantity-item');
              //   container.appendChild(quantitySpan);
              // }
              // else {
              //   const quantitySpan = container.querySelector('.quantity-item');
              //   quantitySpan.innerText = 'x' + inventory[category][itemType][itemName]['quantity'];
              // } 
            }
          }
        }
      }
    }
  }
  console.log(inventory);
} */

/* function createHoverContent(objInventory, itemName, itemType, itemDescription, itemRarity){
  const hoverContent = document.createElement('div');
    //hoverContent.style.backgroundColor = 'rgba(0,0,0,0.8)';
    hoverContent.classList.add('hover-content');

    const hoverWrapper = document.createElement('article');
      hoverWrapper.classList.add('hover-details');

      const itemNameHeading = document.createElement('h2');
        itemNameHeading.textContent = itemName;
        //itemNameHeading.classList.add('sticky');
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
  
    const buyCoin = createCoin('green-coin', '', (event) => {
        clearText();
        grabData(objInventory, event);
      });
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

// Global mouseLeave counter variable
let mouseLeaveCounter = 0;
function checkMouseLeaveCounter() {
  if (mouseLeaveCounter == 6) {
    clearText();
    console.log('hi');
    displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.hover), 0, 22);
    mouseLeaveCounter = 0;
  }
}

function createItemContainer(category) {
  const container = document.createElement('article');
  container.classList.add('item-wrapper');
  container.classList.add(category);
  container.addEventListener('mousemove', () => container.querySelector('.hover-content').style.display = 'block');
  container.addEventListener('mouseleave', () => {
    container.querySelector('.hover-content').style.display = 'none';
    mouseLeaveCounter++;
    console.log(`Mouse Leave Count: ${mouseLeaveCounter}`);

    checkMouseLeaveCounter();
  });
  return container;
}

function createItemQuantity(quantity){
  const banner = document.createElement('div'); 
  banner.classList.add('banner');//apply drop-shadow here

  const span = document.createElement('span'); 
  span.innerText = 'x' + quantity;
  span.classList.add('quantity-item');//apply clip-path here, since it interferes with the drop-shadow
  banner.appendChild(span);
  if(quantity < 2){ //if quantity is 1 or 0, don't show the quantity visual.
    banner.classList.toggle('hidden'); 
  }
  return banner;
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
} */

/* function populateGrid(globalInventory) {
  const gridContainer = document.querySelector('#shop-grid');
  
  Object.keys(globalInventory).forEach(category => {
    Object.keys(globalInventory[category]).forEach(itemType => {
      Object.keys(globalInventory[category][itemType]).forEach(itemName => {
        const container = document.createElement('article')
        container.classList.add('item-wrapper');
        container.classList.add(category);
        // container.addEventListener('click', grabData); 

        //HOVER CONTENT
        const hoverContent = document.createElement('div');
        hoverContent.style.backgroundColor = 'rgba(0,0,0,0.8)';
        hoverContent.classList.add('hover-content');

        const hoverWrapper = document.createElement('article');
          hoverWrapper.classList.add('hover-details');

          const itemNameHeading = document.createElement('h2');
          itemNameHeading.textContent = itemName;
          hoverWrapper.appendChild(itemNameHeading);

          // Add itemType and itemName
          const typeAndName = document.createElement('p');
          typeAndName.textContent = itemType;
          hoverWrapper.appendChild(typeAndName);

          // Add description
          const description = document.createElement('p');
          description.classList.add('description');
          description.textContent = globalInventory[category][itemType][itemName]['description'];
          hoverWrapper.appendChild(description);
          
          hoverContent.appendChild(hoverWrapper);

          //ADD OUR BUY OR EXIT BUTTON COINS
          const buyCoin = document.createElement('span');
          buyCoin.classList.add('coin');
          buyCoin.classList.add('green-coin');
          buyCoin.addEventListener('click', grabData);
          hoverContent.appendChild(buyCoin);

          
          const exitCoin = document.createElement('span');
          exitCoin.classList.add('coin');
          exitCoin.classList.add('red-coin');
          exitCoin.addEventListener('click', () => hoverContent.style.display = 'none');
          hoverContent.appendChild(exitCoin);

          
        container.appendChild(hoverContent);
        // Add event listeners 
        container.addEventListener('mousemove', () => {
          hoverContent.style.display = 'block';
        });
        container.addEventListener('mouseleave', () => {
          hoverContent.style.display = 'none';
        });
        
        const img = document.createElement('img');
        img.src = globalInventory[category][itemType][itemName].image;
        console.log(globalInventory[category][itemType][itemName]);
        img.classList.add('shop-item');
        container.appendChild(img);

        const price = document.createElement('span');
        price.innerText = globalInventory[category][itemType][itemName]['buyPrice'];
        price.classList.add('coin');
        container.appendChild(price);
        
        gridContainer.appendChild(container);
      });
    });
  });
} */

//CREATES AND ADDS ITEMS ONTO YOUR INVENTORY OBJECT AND INVENTORY GRID ON THE SHOP
/* function populateInventoryItemFromImg(image) {
  const gridContainer = document.querySelector('#inventory-grid');
  console.log('image: ' + image)
  for (let category of Object.keys(globalInventory)) {
    for (let itemType of Object.keys(globalInventory[category])) {
      for (let itemName of Object.keys(globalInventory[category][itemType])){
        if (globalInventory[category][itemType][itemName]['image'] === image) {

          if(!inventory[category]){
            inventory[category] = {};
          }
          if (!inventory[category][itemType]) {
            inventory[category][itemType] = {};
          }
          
          if (!inventory[category][itemType][itemName]) {
            inventory[category][itemType][itemName] = {};
          }

          console.log(inventory[category][itemType][itemName]['quantity'])
          if (!inventory[category][itemType][itemName]['quantity']) {
            inventory[category][itemType][itemName]['quantity'] = 1;

            const container = document.createElement('article');
            container.classList.add('item-wrapper');
            gridContainer.appendChild(container);
            inventory[category][itemType][itemName]['image'] = image;

            //HOVER CONTENT
            const hoverContent = document.createElement('div');
            hoverContent.style.backgroundColor = 'rgba(0,0,0,0.8)';
            hoverContent.classList.add('hover-content');

            const hoverWrapper = document.createElement('article');
            hoverWrapper.classList.add('hover-details');

            const itemNameHeading = document.createElement('h2');
            itemNameHeading.textContent = itemName;
            hoverWrapper.appendChild(itemNameHeading);


            // Add itemType and itemName
            const typeAndName = document.createElement('p');
            typeAndName.textContent = itemType;
            hoverWrapper.appendChild(typeAndName);

            // Add description
            const description = document.createElement('p');
            description.classList.add('description');
            description.textContent = globalInventory[category][itemType][itemName]['description'];
            hoverWrapper.appendChild(description);
            
            hoverContent.appendChild(hoverWrapper);

            //ADD OUR BUY OR EXIT BUTTON COINS
            const buyCoin = document.createElement('span');
            buyCoin.classList.add('coin');
            buyCoin.classList.add('green-coin');
            buyCoin.addEventListener('click', grabData);
            hoverContent.appendChild(buyCoin);

            
            const exitCoin = document.createElement('span');
            exitCoin.classList.add('coin');
            exitCoin.classList.add('red-coin');
            exitCoin.addEventListener('click', () => hoverContent.style.display = 'none');
            hoverContent.appendChild(exitCoin);

            
            container.appendChild(hoverContent);
            // Add event listeners 
            container.addEventListener('mousemove', () => {
              hoverContent.style.display = 'block';
            });
            container.addEventListener('mouseleave', () => {
              hoverContent.style.display = 'none';
            });

            const img = document.createElement('img');
            img.src = image;
            img.classList.add('shop-item');
            container.appendChild(img);

            const price = document.createElement('span');
            price.innerText = globalInventory[category][itemType][itemName]['sellPrice'];
            price.classList.add('coin');
            container.appendChild(price);
            
            console.log(inventory);
          } 
          else {
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
  console.log(inventory)
} */

/* //REMOVES ITEM FROM INVENTORY GRID AND YOUR INVENTORY OBJECT
function removeInventoryItemFromImg(image) {
  console.log('Removing item with image:', image);
  const gridContainer = document.querySelector('#inventory-grid');
  const containerToRemove = gridContainer.querySelector('.item-wrapper img[src="' + image + '"]').parentNode

  const banner = containerToRemove.querySelector('.banner');
  const quantity = banner.querySelector('.quantity-item');
  
  console.log(quantity);
  console.log('Container to remove:', containerToRemove);
  console.log('inventory', inventory);

  for (let category of Object.keys(inventory)) {
    for (let itemType of Object.keys(inventory[category])) {
      for (let itemName of Object.keys(inventory[category][itemType])) {
        const currentItem = inventory[category][itemType][itemName];

        if (currentItem['image'] === image) {
          currentItem['quantity'] -= 1; //we are subtracting our quantity

          console.log('Quantity after decrement:', currentItem['quantity']);
          
          quantity.innerText = 'x' + currentItem['quantity'];

          if(currentItem['quantity'] < 2){
            banner.classList.add('hidden'); 
          }
          if(currentItem['quantity'] === 0){
            gridContainer.removeChild(containerToRemove);
            delete inventory[category][itemType][itemName];
          } 
        }
      }
    }
  }

  console.log(inventory);
}  */
/* function grabData(event){
  console.log(event.target.src);
  let url = new URL(event.target.parentNode.querySelector('img').src);
  console.log(url.pathname.slice(1))
  const imgSrc = url.pathname.slice(1);
  const price = parseInt(event.target.parentNode.querySelector('.price-item').innerText, 10);
  const currency = document.querySelector('#currency-amount') 
  console.log(event.target.parentNode.parentNode.id == 'shop-grid');

  if(event.target.parentNode.parentNode.id == 'shop-grid'){ //check if you are on the weapon-grid
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
        currency.innerText = parseInt(currency.innerText, 10) - price;
      }
    }
    populateInventoryItemFromImg(imgSrc); 
  }
  else if(event.target.parentNode.parentNode.id == 'inventory-grid'){ //check if you are on the inventory-grid
    currency.innerText = parseInt(currency.innerText, 10) + price;
    removeInventoryItemFromImg(imgSrc);
  }
} */

/* function hoverForData(event){
  event.stopPropagation();
  console.log(event.target);
  console.log(event.target.src);
  let url = new URL(event.target.parentNode.querySelector('img').src);
  console.log(url.pathname.slice(1))
  const image = url.pathname.slice(1);
  for (let category of Object.keys(shopInventory)) {
    for (let itemType of Object.keys(shopInventory[category])) {
      for (let itemName of Object.keys(shopInventory[category][itemType])){
        if (shopInventory[category][itemType][itemName]['image'] === image) {
          const container = document.createElement('article');
          container.id = 'hover-details';

          const categoryHeading = document.createElement('h2');
          categoryHeading.textContent = category;
          container.appendChild(categoryHeading);

          const line = document.createElement('hr');
          container.appendChild(line);

          // Add itemType and itemName
          const typeAndName = document.createElement('p');
          typeAndName.textContent = `${itemType}: ${itemName}`;
          container.appendChild(typeAndName);

          // Add description
          const description = document.createElement('p');
          description.textContent = shopInventory[category][itemType][itemName]['description'];
          container.appendChild(description);

          // Append the container to the .item-wrapper element
          event.target.parentNode.appendChild(container);

          // Update the position of the hover details dynamically
          updatePosition(event, container);

          // Add event listener to track mouse movement and update position
          document.addEventListener('mousemove', (event) => {
            updatePosition(event, container);
          });
        }
      }
    }
  } */
 /*  function updatePosition(event, container) {
    const mouseX = event.clientX - event.target.parentNode.getBoundingClientRect().left;
    const mouseY = event.clientY - event.target.parentNode.getBoundingClientRect().top;
  
    // Set the position styles
    container.style.position = 'absolute';
    container.style.top = mouseY + 'px';
    container.style.left = mouseX + 'px';
  }
}
function removeHoverData() {
  const existingArticle = document.querySelector('#hover-details');
  if (existingArticle) {
    existingArticle.remove();
    
  }
} */
/* weaponContainer.addEventListener('click', (event) => {
  let url = new URL(event.target.parentNode.querySelector('img').src)
  console.log(url.pathname.slice(1))
  const imgSrc = url.pathname.slice(1);
  const price = parseInt(event.target.parentNode.querySelector('.price-item').innerText, 10);
  const currency = document.querySelector('#currency-amount') 

  if (currency.innerText == 0)
    return;
  else
    if((parseInt(currency.innerText, 10) - price) < 0){
      console.log("error: You don't have enough money to buy that!")
      return;
    }
    else{
      currency.innerText = parseInt(currency.innerText, 10) - price;
    }

    populateInventoryItemFromImg(imgSrc); 
}) */

/* const inventoryContainer = document.querySelector('#inventory-grid');
inventoryContainer.addEventListener('click', (event) => {

  let url = new URL(event.target.parentNode.querySelector('img').src);
  const imgSrc = url.pathname.slice(1);
  const price = parseInt(event.target.parentNode.querySelector('.price-item').innerText, 10);
  const currency = document.querySelector('#currency-amount');

  currency.innerText = parseInt(currency.innerText, 10) + price;
  removeInventoryItemFromImg(imgSrc);
}); */


/* function populateGrid(weapons) {
  const gridContainer = document.getElementById('weapon-grid');
  Object.keys(weapons).forEach(weaponType => { //gridContainer > container > img & price
    Object.keys(weapons[weaponType]).forEach(weapon => {
      if (weapon.includes('basic')) {
        const container = document.createElement('article')
        container.classList.add('item-wrapper');
        container.addEventListener('click', grabData);
        gridContainer.appendChild(container);

        const img = document.createElement('img');
        img.src = weapons[weaponType][weapon].image;
        img.classList.add('weapon-item');
        container.appendChild(img);

        const price = document.createElement('span');
        price.innerText = weapons[weaponType][weapon]['buy-price'];
        price.classList.add('price-item');
        container.appendChild(price);
      }
    });
  });
 
} */

/* function toggleCategoryText(clickedCategoryText) {
  console.log('hello')
    const allCategoryTexts = document.querySelectorAll('.category-nav span');
    allCategoryTexts.forEach(text => {
        text.classList.add('hidden');
    });
    if(clickedCategoryText !== 'all'){
      clickedCategoryText.classList.remove('hidden');
    }
  } */

/* container.addEventListener('mouseleave', () => hideHoveredContent(hoverContent)); */
        /* container.addEventListener('mouseenter', hoverForData)
        container.addEventListener('mouseleave', removeHoverData); */
        

// Function to hide hovered content
/* function hideHoveredContent(hoveredContent) {
  hoveredContent.style.display = 'none';
} */


  // Function to update hovered content position based on mouse movement inside the article
/* function updateHoveredContentPosition(event, hoveredContent) {
  console.log(event.target.parentNode)
  const x = event.clientX - event.target.parentNode.getBoundingClientRect().left;
  const y = event.clientY - event.target.parentNode.getBoundingClientRect().top;

  hoveredContent.style.left = `${x}px`;
  hoveredContent.style.top = `${y}px`;

  hoveredContent.style.display = 'block';

} */

/* document.querySelector('#weapons-button').addEventListener('click', () => {
  showItemsOnly('weapons');
});

document.querySelector('#consumables-button').addEventListener('click', () => {
  showItemsOnly('consumables');
}); */


/* function populateInventoryItemFromImg(image) {
  const gridContainer = document.querySelector('#inventory-grid');
  console.log('image: ' + image)
  for (let weaponType of Object.keys(weapons)) {
    for (let weaponName of Object.keys(weapons[weaponType])) {
      if (weapons[weaponType][weaponName]['image'] === image) {
        
        if (!inventory[weaponType]) {
          inventory[weaponType] = {};
        }
         
        if (!inventory[weaponType][weaponName]) {
          inventory[weaponType][weaponName] = {};
        }
        console.log(inventory[weaponType][weaponName]['quantity'])
        if (!inventory[weaponType][weaponName]['quantity']) {
          inventory[weaponType][weaponName]['quantity'] = 1;

          const container = document.createElement('article');
          container.classList.add('item-wrapper');
          gridContainer.appendChild(container);
          container.addEventListener('click', grabData);
          inventory[weaponType][weaponName]['image'] = image;

          const img = document.createElement('img');
          img.src = image;
          img.classList.add('weapon-item');
          container.appendChild(img);

          const price = document.createElement('span');
          price.innerText = weapons[weaponType][weaponName]['sell-price'];
          price.classList.add('price-item');
          container.appendChild(price);
          
          console.log(inventory);
        } 
        else {
          inventory[weaponType][weaponName]['quantity'] += 1;
          console.log(inventory)
          if (inventory[weaponType][weaponName]['quantity'] > 1) {
            const container = gridContainer.querySelector('.item-wrapper img[src="' + image + '"]').parentNode
            //REMEMBER THIS REFERS TO THE ITEMWRAPPER THAT HAS THE IMG IMAGE TARGETED, THEN WE TARGET THE PARENT NODE TO GRAB ITS CONTAINER.
            console.log('container: ', container)
            if (container.querySelector('.quantity-item') == undefined) {
              const quantitySpan = document.createElement('span');
              quantitySpan.innerText = 'x' + inventory[weaponType][weaponName]['quantity'];
              quantitySpan.classList.add('quantity-item');
              container.appendChild(quantitySpan);
            }
            else {
              const quantitySpan = container.querySelector('.quantity-item');
              quantitySpan.innerText = 'x' + inventory[weaponType][weaponName]['quantity'];
            }
          }
        }
      }
    }
  }
} */

/* function removeInventoryItemFromImg(image) {
  console.log('Removing item with image:', image);
  const gridContainer = document.querySelector('#inventory-grid');
  const containerToRemove = gridContainer.querySelector('.item-wrapper img[src="' + image + '"]').parentNode

  console.log('Container to remove:', containerToRemove);
  console.log('inventory', inventory);

  for (let weaponType of Object.keys(inventory)) {
    for (let weaponName of Object.keys(inventory[weaponType])) {
      console.log(inventory);
      console.log(inventory[weaponType][weaponName]);

      if (inventory[weaponType][weaponName]['image'] === image) {
        if (inventory[weaponType][weaponName]['quantity'] > 1) {
          inventory[weaponType][weaponName]['quantity'] -= 1;
          const quantity = containerToRemove.querySelector('.quantity-item');
          if (quantity) {
            quantity.innerText = 'x' + inventory[weaponType][weaponName]['quantity'];
          }
        } else if (inventory[weaponType][weaponName]['quantity'] === 1) {
          inventory[weaponType][weaponName]['quantity'] = 0;
          gridContainer.removeChild(containerToRemove);
        }
      }
    }
  }
}  */

/* function populateGrid(weapons) {
    const gridContainer = document.getElementById('weapon-grid');
   
    weapons.forEach(weapon => {
      const item = document.createElement('div');
      item.textContent = weapon;
      item.classList.add('weapon-item');
      gridContainer.appendChild(item);
    });
} */