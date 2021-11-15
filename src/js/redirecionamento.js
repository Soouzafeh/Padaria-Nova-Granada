$('#botoes a').click(function(e){ //Quando clicar no elemento com id gotomenu_disp
    e.preventDefault //Vai prevenir que oq aql id faz por padrão
    var id = $(this).attr('href'), //o this é para pegar elemnto exato que clicar e o attr vai ser para pegar o href do elemento que eu clicar
        targetOffset = $(id).offset().top, //leva tal coisa ao topo
        menuheight = $('#header').innerHeight(); //pega altura do menu
    $('html, body').animate({ //animação
        scrollTop: targetOffset - menuheight - 20 //desconto do header e o 20 ´w pra não ficar tão grudado
    }, 500); //velocidade de 500
});