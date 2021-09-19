let show = true;


const menuSection = document.querySelector(".menu-section");
//pegando menuToggle de dentro de menu-section
const menuToggle = menuSection.querySelector(".menu-toggle");

//ao clicar no componente menuToogle,'click' adicionar evento,
//adicionar 'on' na lista de classes de menuSection
menuToggle.addEventListener("click", () => {
    //travar a rolagem caso show seja false
    document.body.style.overflow = show ? "hidden" : "initial";

    //caso show seja true, o objeto aparece
    menuSection.classList.toggle("on", show)
    //ao passar por aqui o show fica false, e ao clicar novamente
    //para fechar, a funçao executa, ela ve que esta false, 
    //e desativa o 'on'
    show = !show;
})