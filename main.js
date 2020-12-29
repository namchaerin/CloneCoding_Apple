const selecElement = (element) => document.querySelector(element);

selecElement('.mobile-menu').addEventListener('click', () => {
    selecElement('header').classList.toggle('active');
});