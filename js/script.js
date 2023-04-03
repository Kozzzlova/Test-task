const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
     
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });

  const slider1 = new Swiper ('.slider1', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     slidesPerView: 3,
    
   
    
   
     // Navigation arrows
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
}) 
