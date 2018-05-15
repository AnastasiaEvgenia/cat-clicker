/*----Application Data----*/
const data = {
    cats: [{
            name: "asher",
            url: "images/asher.jpg",
            clicks: 0
        },

        {
            name: "kitties",
            url: "images/kitties.jpg",
            clicks: 0
        },

        {
            name: "niar",
            url: "images/niar.jpg",
            clicks: 0
        },

        {
            name: "peter",
            url: "images/peter.jpg",
            clicks: 0
        },

        {
            name: "sanji",
            url: "images/sanji.jpg",
            clicks: 0
        }
    ]
};


/*----Application Octapus----*/
const button = $('button');
const catList = $('.drop_down_contents');
const imgContainer = $('.img_container');

//create list with cat names and append to dom hidden images
for (let cat of data.cats) {
    const catName = $(`<p>${cat.name}</p>`);
    const catPic = $(`
			<div class="cat-card hidden">
				<p>${cat.name}</p>
    			<img src="${cat.url}">
				<p>Clicks: ${cat.clicks}</p>
			</div>`);
    catList.append(catName);
    imgContainer.append(catPic);
}

//open cat list when the button is clicked.
button.click(function() {
    catList.toggleClass("drop_down_visibility");
});


const catListNames = $('.drop_down_contents p');
const catCards = $('.cat-card');
catList.click(function(evt) {
	//find which cat was clicked
	let currentCat = evt.target.innerText;
	//find which catCard has same name with current cat
	//and make it appear on DOM
	for(let catCard of catCards) {
		if(catCard.children[0].innerText === currentCat) {
			catCard.classList.remove("hidden");
		} else {
			catCard.classList.add("hidden");
		}
	}
	
});

const image = $('img');

image.click(function(evt) {
  let currentCatName = evt.target.previousElementSibling.innerText;
  let currentCatClicks = evt.target.nextElementSibling;
  for(let cat of data.cats) {
  	if(currentCatName === cat.name){
  		cat.clicks++;
  		currentCatClicks.innerHTML = `Clicks: ${cat.clicks}`;
  	}
  } 
});



/*----Application View----*/