export const rsvpFun = function(){
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-cont');

        const contactHead= document.createElement('div'); 
        contactHead.classList.add('contact-head');
        contactHead.textContent='For reservation';
        contactContent.appendChild(contactHead);

        const contactText = document.createElement('div');
        contactText.classList.add('contact-text');
        contactText.textContent='Our person: Mike(+125632210382634)';
        contactContent.appendChild(contactText);

    return contactContent;

}