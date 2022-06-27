export const contactFun = function(){
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-cont');

        const contactHead= document.createElement('div'); 
        contactHead.classList.add('contact-head');
        contactHead.textContent='Our Contact';
        contactContent.appendChild(contactHead);

        const contactText = document.createElement('div');
        contactText.classList.add('contact-text');
        contactText.textContent='For Online order: Andy(+1256474657382634)';
        contactContent.appendChild(contactText);

    return contactContent;

}