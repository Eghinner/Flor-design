
$(window).scroll(function(){
     scroll_barra();
});


jQuery(document).ready(function($){
   scroll_barra();
});

function scroll_barra(){
	 var scroll = $(document).scrollTop();

    if($(window).width()>1200){
        if ($(".banner").length){
            if (scroll<= $(".banner").position().top + 100) {

                if ($("header").hasClass("barra_reducida") )$("header").removeClass("barra_reducida");
                if (!$("header").hasClass("barra_ampliada")) $("header").addClass("barra_ampliada");

            }else{
                if (!$("header").hasClass("barra_reducida")) $("header").addClass("barra_reducida");  
                if ($("header").hasClass("barra_ampliada")) $("header").removeClass("barra_ampliada");
            }
        }

        if ($(".interiores").length){
            if (scroll<= $(".interiores").position().top - 300) {

                if ($(".portada header").hasClass("barra_reducida") )$(".portada header").removeClass("barra_reducida");
                if (!$("header").hasClass("barra_ampliada")) $("header").addClass("barra_ampliada");

            }else{
                if (!$(".portada header").hasClass("barra_reducida")) $(".portada header").addClass("barra_reducida");  
                if ($("header").hasClass("barra_ampliada")) $("header").removeClass("barra_ampliada");
            }

        }


    }else if ($(window).width()>1000){

        if ($(".banner").length){
            if (scroll<= $(".banner").position().top + 100) {

                if ($("header").hasClass("barra_reducida") )$("header").removeClass("barra_reducida");
                if (!$("header").hasClass("barra_ampliada")) $("header").addClass("barra_ampliada");

            }else{
                if (!$("header").hasClass("barra_reducida")) $("header").addClass("barra_reducida");  
                if ($("header").hasClass("barra_ampliada")) $("header").removeClass("barra_ampliada");
            }
        }

        if ($(".interiores").length){
            if (scroll<= $(".interiores").position().top - 300) {

                if ($(".portada header").hasClass("barra_reducida") )$(".portada header").removeClass("barra_reducida");
                if (!$("header").hasClass("barra_ampliada")) $("header").addClass("barra_ampliada");

            }else{
                if (!$(".portada header").hasClass("barra_reducida")) $(".portada header").addClass("barra_reducida");  
                if ($("header").hasClass("barra_ampliada")) $("header").removeClass("barra_ampliada");
            }

        }
    }
}


document.addEventListener( 'DOMContentLoaded', function () {
	if ( $( "#banner-slider" ).length ) {

		new Splide( '#banner-slider', {

			//Clase para cambiar el svg que quieras, CUIDADO, solo medidas de 40x40px
			//        arrowPath: 'M39.7,19.4L27.3,6.9c-0.3-0.3-0.9-0.3-1.2,0s-0.3,0.9,0,1.2l11.1,11.1H0.9C0.4,19.2,0,19.5,0,20s0.4,0.8,0.8,0.8h36.3L26.1,31.9c-0.3,0.3-0.3,0.9,0,1.2c0.2,0.2,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l12.5-12.5C40.1,20.3,40.1,19.7,39.7,19.4z',

			// Se mueva de manera automática, si está en hover no cuenta el tiempo y no se mueve
			autoplay: true,

			// intervalo de tiempo de movimiento
			interval: 3000,

			// para que gire
			type:"fade",

			// Esta propiedad sirve de rebonidador. Esta opción se ignora en el modo "loop"
			rewind: true,

			//el movimiento sea de 1
			perMove: 1,

			// muestra 1 elementos por página 
			perPage: 1,

			// bolitas que muestran la cantidad de páginas
			pagination: false,

			// Felchas desactivada
			arrows: false,

			// Clases para hacer cambios en las flechas
			classes: {
				arrows: 'splide__arrows your-class-arrows',
				arrow : 'splide__arrow crece_svg',
				prev  : 'splide__arrow--prev your-class-prev',
				next  : 'splide__arrow--next your-class-next',
			},


		} ).mount();
	}
} );


document.addEventListener( 'DOMContentLoaded', function () {
	
	 if ( $( "#servicios_2-slider" ).length ) {
		 
    new Splide( '#servicios_2-slider', {

        //Clase para cambiar el svg que quieras, CUIDADO, solo medidas de 40x40px
//        arrowPath: 'M30.3,18.9L11.8,0.5c-0.6-0.6-1.6-0.6-2.2,0C9,1.1,9,2,9.6,2.6L27.1,20L9.7,37.4C9,38,9,38.9,9.7,39.5c0.3,0.3,0.7,0.5,1.1,0.5s0.8-0.1,1.1-0.5l18.5-18.5c0.3-0.3,0.5-0.7,0.5-1.1S30.6,19.2,30.3,18.9z',

        // Se mueva de manera automática, si está en hover no cuenta el tiempo y no se mueve
        autoplay: false,

        // intervalo de tiempo de movimiento
        interval: 3000,

        // para que gire
        type:"loop",

		 // Esta propiedad sirve de rebonidador. Esta opción se ignora en el modo "loop"
		rewind: false,
		
        //el movimiento sea de 1
        perMove: 1,

        // muestra 1 elementos por página 
        perPage: 5,

		gap: "75px",
		
		//en pantallas de 600px solo se vea 1 elemento por pantalla
        breakpoints: {
            1500: {
                perPage: 4,
            },
			
			1100: {
                perPage: 3,
            },
            
            768: {
                perPage: 1,
				padding: {
		right: '220px',
		left : '220px',
	},
					gap: "50px",
            },
			
			767: {
                perPage: 1,
            }
        },
		
        // bolitas que muestran la cantidad de páginas
        pagination: false,

		// Felchas activadas
		arrows: false,
		
        // Clases para hacer cambios en las flechas
        classes: {
            arrows: 'splide__arrows your-class-arrows',
            arrow : 'splide__arrow servicios_svg',
            prev  : 'splide__arrow--prev your-class-prev',
            next  : 'splide__arrow--next your-class-next',
        },


    } ).mount();
	 }
} );
