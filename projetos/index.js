//Buscar os elementos html
//selecionar todas as tags div.slide
const slide =  document.querySelectorAll('.slide');
//buscar btn prev
const prev = document.querySelector('#prev');
//buscar btn next
const next = document.querySelector('#next');

//configuraçao do autoplay
const auto = true;
//Tempo de transsiçao
const intervaloTrasicao = 6000;;
//tempo para exibiçao
let slideIntervalo;

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
//Eventos
next.addEventListener('click', (e) => {
    nextSlide();//chama a funçao
    if(auto){
        clearInterval(slideIntervalo);
        slideIntervalo = setInterval(nextSlide,intervaloTrasicao)
    }
});

function nextSlide(){
    //localizar o elemento que detém da classe atual
    const atual = document.querySelector('.atual');
    //removendo a classe do elemento
    atual.classList.remove('atual');
    if(atual.nextElementSibling){
        atual.nextElementSibling.classList.add('atual');

    } 
    else{
        slide[0].classList.add('atual');
    }
    setTimeout(() => atual .classList.remove('atual'));

};
function prevSlide(){
    
        //localizar o elemento que detém da classe atual
        const atual = document.querySelector('.atual');
        //removendo a classe do elemento
        atual.classList.remove('atual');

        if(atual.previousElementSibling){
            atual.previousElementSibling.classList.add('atual');
    
        } 
        else{
            slide[slide.length-1].classList.add('atual');
        }
        setTimeout(() => atual .classList.remove('atual'));


};
//caso a variavel esteja com true
if (auto){
    //mostra o proximo slide um tempo
    slideIntervalo = setInterval(nextSlide, intervaloTrasicao)
}




