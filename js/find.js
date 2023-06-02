// function changeProductList(type , element)
// {

// 	let tabs = document.getElementsByClassName('tab-item');
	
// 	for(i=0;i<tabs.length;i++){
// 		tabs[i].style.background = '#FFFFFF' ;
// 	}
//    element.style.background = '#888888';
//    document.getElementById(type).style.display = 'flex';

//    switch (type) {
//    case'trend':
//    	document.getElementById('new').style.display = 'none';
//    	document.getElementById('like').style.display = 'none';
//    	break;
//    	 case'new':
//    	document.getElementById('trend').style.display = 'none';
//    	document.getElementById('like').style.display = 'none';
//    	break;
//    	 case'like':
//    	document.getElementById('trend').style.display = 'none';
//    	document.getElementById('new').style.display = 'none';
//    	break;
//    }
// }

//  	// Lấy tham chiếu đến các phần tử HTML
// var displayin4 = document.querySelector('#displayin4');
// var watch_in4 = document.querySelector('#watch_in4');

// // Khi nút được nhấp, hiển thị displayin4
// watch_in4.addEventListener('click', function() {
//   displayin4.style.display = 'block';
// });

// // Khi người dùng nhấn ESC, ẩn displayin4
// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Escape') {
//     displayin4.style.display = 'none';
//   }
// });

// // Khi người dùng nhấp bên ngoài displayin4, ẩn nó
// displayin4.addEventListener('click', function(event) {
//   if (event.target === displayin4) {
//     displayin4.style.display = 'none';
//   }
// });

//   let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


// bộ lọc
let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let listHouse = [
    {
	name:'Ahouse',
	address: 'Quận Hải Châu',
	price: 85  ,
	image: '../images/house1.png',
	
	nature: {
		
		adr:'haichau'
		

	}
	},

	{
	name:'Bhouse',
	address: 'Quận Hải Châu',
	price: 46 ,
	image: '../images/house2.png',
	nature: {
		
		adr: 'haichau'
		

	}
	},
	{
	name:'Chouse',
	address: 'Quận Hải Châu',
	price: 200 ,
	image: '../images/house3.png',
	nature: {
		
		adr: 'haichau'
		

	}
	},
	{
	name:'Dhouse',
	address: 'Quận Hải Châu',
	price: 100 ,
	image: '../images/house4.png',
	nature: {
		
		adr: 'haichau'
		
	}
	},	
	{
	name:'Ehouse',
	address: 'Huyện đảo Hoàng Sa',
	price: 72 ,
	image: '../images/house5.png',
	nature: {
		
		adr: 'hoangsa'
		

	}
	},
	{
	name:'Fhouse',
	address: 'Quận Sơn Trà',
	price: 40 ,
	image: '../images/house6.png',
	nature: {
		
		adr:'sontra'
		

	}
	},

	{
	name:'Ghouse',
	address: 'Quận Sơn Trà',
	price: 132 ,
	image: '../images/house7.png',
	nature: {
		
		adr: 'sontra'
		

	}
	},
	{
	name:'Hhouse',
	address: 'Quận Sơn Trà',
	price: 72 ,
	image: '../images/house8.png',
	nature: {
		
		adr: 'sontra'
		

	}
	},
	{
	name:'Ihouse',
	address: 'Quận Sơn Trà',
	price: 102 ,
	image: '../images/house9.png',
	nature: {
		
		adr: 'sontra'
		
	}
	},	
	{
	name:'Jhouse',
	address: 'Quận Ngũ Hành Sơn',
	price: 89 ,
	image: '../images/house10.png',
	nature: {
		
		adr: 'nguhanhson'
		

	}
	},
	{
	name:'Khouse',
	address: 'Quận Ngũ Hành Sơn',
	price: 104 ,
	image: '../images/house11.png',
	nature: {
		
		adr:'nguhanhson'
		

	}
	},

	{
	name:'Lhouse',
	address: 'Huyện Hòa Vang',
	price: 2000 ,
	image: '../images/house12.png',
	nature: {
		
		adr: 'hoavang'
		

	}
	},
	{
	name:'Mhouse',
	address: 'Quận Ngũ Hành Sơn',
	price: 83 ,
	image: '../images/house13.png',
	nature: {
		
		adr: 'nguhanhson'
		

	}
	},
	{
	name:'Nhouse',
	address: 'Quận Ngũ Hành Sơn',
	price: 76 ,
	image: '../images/house14.png',
	nature: {
		
		adr: 'nguhanhson'
		
	}
	},	
	{
	name:'Ohouse',
	address: 'Quận Cẩm Lệ',
	price: 63 ,
	image: '../images/house15.png',
	nature: {
		
		adr: 'camle'
		

	}
	},
	{
	name:'Phouse',
	address: 'Quận Cẩm Lệ',
	price: 96 ,
	image: '../images/house16.png',
	nature: {
		
		adr:'camle'
		

	}
	},

	{
	name:'Qhouse',
	address: 'Quận Hải Châu',
	price: 74 ,
	image: '../images/house17.png',
	nature: {
		
		adr: 'haichau'
		

	}
	},
	{
	name:'Rhouse',
	address: 'Quận Cẩm Lệ',
	price: 68 ,
	image: '../images/house18.png',
	nature: {
		
		adr: 'camle'
		

	}
	},
	{
	name:'Shouse',
	address: 'Quận Cẩm Lệ',
	price: 110,
	image: '../images/house19.png',
	nature: {
		
		adr: 'camle'
		
	}
	},	
	{
	name:'Thouse',
	address: 'Quận Thanh Khê',
	price: 105 ,
	image: '../images/house20.png',
	nature: {
		
		adr: 'thanhkhe'
		

	}
	},
	{
	name:'Uhouse',
	address: 'Quận Thanh Khê',
	price: 53,
	image: '../images/house21.png',
	nature: {
		
		adr:'thanhkhe'
		

	}
	},

	{
	name:'Vhouse',
	address: 'Quận Thanh Khê',
	price: 90 ,
	image: '../images/house22.png',
	nature: {
		
		adr: 'thanhkhe'
		

	}
	},
	{
	name:'Whouse',
	address: 'Huyện đảo Hoàng Sa',
	price: 66 ,
	image: '../images/house23.png',
	nature: {
		
		adr: 'hoangsa'
		

	}
	},
	{
	name:'Xhouse',
	address: 'Quận Thanh Khê',
	price: 100 ,
	image: '../images/house24.png',
	nature: {
		
		adr: 'thanhkhe'
		
	}
	},	
	{
	name:'Yhouse',
	address: 'Quận Hải Châu',
	price: 63,
	image: '../images/house25.png',
	nature: {
		
		adr: 'haichau'
		

	}
	},
	{
	name:'Zhouse',
	address: 'Quận Liên Chiểu',
	price: 88 ,
	image: '../images/house26.png',
	nature: {
		
		adr:'lienchieu'
		

	}
	},

	{
	name:'SHHhouse',
	address: 'Quận Liên Chiểu',
	price: 64 ,
	image: '../images/house27.png',
	nature: {
		
		adr: 'lienchieu'
		

	}
	},
	{
	name:'ABBhouse',
	address: 'Quận Liên Chiệu',
	price: 55 ,
	image: '../images/house28.png',
	nature: {
		
		adr: 'lienchieu'
		

	}
	},
	{
	name:'ABLhouse',
	address: 'Huyện Hòa Vang',
	price: 62 ,
	image: '../images/house29.png',
	nature: {
		
		adr: 'hoavang'
		
	}
	},	
	{
	name:'VARhouse',
	address: 'Quận Liên Chiểu',
	price: 77 ,
	image: '../images/house30.png',
	nature: {
		
		adr: 'lienchieu'
		

	}
	},

	];

function showHouse(houseFilter){
	list.innerHTML = '';
	houseFilter.forEach(item =>{
		let newItem = document.createElement('div');
		newItem.classList.add('item');

		//create image
		let newImage = new Image();
		newImage.src =  item.image;
		newItem.appendChild(newImage);	
		


		//create name house
		let newTitle = document.createElement('div');
		newTitle.classList.add('title');
	    newTitle.innerText = item.name;
	    newItem.appendChild(newTitle);
	    

	    //create address
	    let newAddress = document.createElement('div');
	    newAddress.classList.add('address');
	    newAddress.innerText = item.address;
	    newItem.appendChild(newAddress);
	    //create price
	    let newPrice = document.createElement('button');
	    newPrice.classList.add('price');
	    
	    newPrice.onclick= function(){
	    	event.preventDefault();
	    	 window.location.href = "in4.html";
	    };
	    newPrice.innerText = item.price + ' $';
	    newItem.appendChild(newPrice);


		list.appendChild(newItem);

	});

}
let houseFilter = listHouse;
showHouse(houseFilter);

filter.addEventListener('submit', function(event){
	event.preventDefault();
	let valueFilter = event.target.elements;
	houseFilter = listHouse.filter( item => {
		if(valueFilter.quanhuyen.value != ''){
			if(item.nature.adr != valueFilter.quanhuyen.value){
				return false;
			}

		}
		// check min price
            if(valueFilter.minPrice.value != ''){
                if(item.price < valueFilter.minPrice.value){
                    return false;
                }
            }
            //  check max price
            if(valueFilter.maxPrice.value != ''){
                if(item.price > valueFilter.maxPrice.value){
                    return false;
                }
            }
		return true;

	})
	showHouse(houseFilter);
})