const allImages = ["images/asher.jpg", "images/peter.jpg", "images/niar.jpg", "images/sanji.jpg", "images/kitties.jpg"];
const allCatNames = ["asher", "peter", "niar", "sanji", "kitties"];
const imgContainer = $('.img_container');
let cats = [];

const Cat = function(catName) {
	this.name = catName;
	this.geturl = function() {
		for (let image of allImages) {
			if(image.includes(this.name)) {
				
				this.url = image;
			}
		}
	};
};

for (let cat of allCatNames) {
	cats.push(new Cat(cat));
}

for (cat of cats) {
	cat.geturl();
}




/*---------------FAIL ONE-------------------------------------*/

// const imageContainer = document.querySelector('.img_container');
// const asherImg = document.querySelector('.image1');
// const asherName = document.createElement('p');
// const niarImg = document.createElement('img');
// const niarName = document.createElement('p');

// let clickAsher = 0;
// let clickNiar = 0;

// asherName.innerHTML = "Asher";
// niarName.innerHTML = "Niar";

// niarImg.setAttribute('src', 'images/Niar.jpg');
// niarImg.setAttribute('class', 'image2');

// imageContainer.appendChild(asherName);
// imageContainer.appendChild(niarImg);
// imageContainer.appendChild(niarName);

// asherImg.addEventListener('click', function() {
// 	clickAsher++;
// 	asherName.innerHTML = `Asher. Clicks = ${clickAsher}`;
// });

// niarImg.addEventListener('click', function() {
// 	clickNiar++;
// 	niarName.innerHTML = `Niar. Clicks = ${clickNiar}`;
// });

