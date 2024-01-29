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

/* function toggleNav(categoryText){
  const allCategoryNavs = document.querySelectorAll('.category-nav');
  allCategoryNavs.forEach(obj => {
    const spanElem = obj.querySelector('span');
    console.log(spanElem);
    if(spanElem !== categoryText){
      obj.classList.toggle('hidden');
    }
  })
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