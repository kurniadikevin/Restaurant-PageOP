
 export const menuFun= function(){
    const menuContent= document.createElement('div');
    menuContent.classList.add('menu-content');
        const menuHeader = document.createElement('div');
        menuHeader.classList.add('menu-header');
        menuHeader.textContent='Menu Selection';
        menuContent.appendChild(menuHeader); 
        
        const coffeeMenu = document.createElement('div');
        coffeeMenu.classList.add('coffee-menu');
        menuContent.appendChild(coffeeMenu);
                const coffeeTitle = document.createElement('div');
                coffeeTitle.classList.add('coffee-title');
                coffeeTitle.textContent='Coffee';
                coffeeMenu.appendChild(coffeeTitle);
                const coffeeContent = document.createElement('div');
                coffeeContent.classList.add('coffee-cont');
                coffeeContent.textContent='Americano, Cappucino, Latte, Picolo, Cold Brew, V60, Aeropress';
                coffeeMenu.appendChild(coffeeContent);

        const brunchMenu = document.createElement('div');
        brunchMenu.classList.add('brunch-menu');
        menuContent.appendChild(brunchMenu);
                const brunchTitle = document.createElement('div');
                brunchTitle.classList.add('brunch-title');
                brunchTitle.textContent='Brunch';
                brunchMenu.appendChild(brunchTitle);
                const brunchContent = document.createElement('div');
                brunchContent.classList.add('brunch-cont');
                brunchContent.textContent='English Breakfast, Muffin, Pancake, Souther Toast, Steak and Egg, Muesli, Pizza Margherita';
                brunchMenu.appendChild(brunchContent);
                
    return menuContent;
    //return menuHeader;
    }

export const test= function(){
    console.log('test');
}