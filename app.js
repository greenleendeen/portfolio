
//j'appel mon grid à animer
let grid= document.querySelector(".gridd-anim ")
// j'ecoute event 'click' sur le 'grid'

grid.addEventListener('click',()=>{

    
     // alert("Hello World!");

      anime({
        targets: '.gridd-anim .el',
        scale: [
          {value: .1, easing: 'easeOutSine', duration: 500},
          {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: [3, 3], from: 'center'})
      });
})




 



