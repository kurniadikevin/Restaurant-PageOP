import _ from 'lodash';
import './style.css';

console.log('Hello !');
const body = document.querySelector('body');


//col1    
const col1= document.createElement('div');
col1.classList.add('col1');
body.appendChild(col1);
//col2    
const col2= document.createElement('div');
col2.classList.add('col2');
body.appendChild(col2);

    const image1 = document.createElement('img');
    image1.src='https://images.unsplash.com/photo-1515860734122-e0d771b36d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80';
    image1.width='600';
    image1.height='900';
    col1.appendChild(image1);


const header= document.createElement('div');
header.classList.add('header');
       
        col2.appendChild(header);
            const nameShop= document.createElement('div');
            nameShop.classList.add('nameShop');
            nameShop.textContent='Souther Soul Cafe ';
            header.appendChild(nameShop);

            
            const menu= document.createElement('div');
            menu.classList.add('menu');
            menu.textContent='Menu';
            header.appendChild(menu);

            const contact= document.createElement('div');
            contact.classList.add('contact');
            contact.textContent='Contact';
            header.appendChild(contact);

            const rsvp= document.createElement('div');
            rsvp.classList.add('rsvp');
            rsvp.textContent='Reservation';
            header.appendChild(rsvp);
            

        
const content = document.getElementById('content'); 
content.classList.add('content');     
col2.appendChild(content);
    const sideContent = document.createElement('div');
    sideContent.classList.add('side-content');
        const text1= document.createElement('div');
        text1.classList.add('text1');
        text1.textContent='Brunch and Coffee everyday from 6am - 3pm. We are serving curated coffee beans from all around the world and finest brunch with our organic ingridients. All product are natural and sustainable. Have a great time with use all day!';
        sideContent.appendChild(text1);
        const text12= document.createElement('div');
        text12.classList.add('text12');
        text12.textContent='Greatdale West Street no. 132,'
        sideContent.appendChild(text12);
        const text2=document.createElement('div');
        text2.classList.add('text2');
        const btn1=document.createElement('button');
        btn1.classList.add('btn1');
        btn1.textContent='Order now';
        sideContent.appendChild(text2);
        text2.appendChild(btn1);
    content.appendChild(sideContent);
        
