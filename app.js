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
    const catPic = $(`<img src="${cat.url}" class="hidden">`);
    catList.append(catName);
    imgContainer.append(catPic);
}

//open cat list when the button is clicked.
button.click(function() {
    catList.toggleClass("drop_down_visibility");
});


const catListNames = $('.drop_down_contents p');
const images = $('.img_container img');
catList.click(function(evt) {
    if (evt.target.nodeName === "P") {
      if(evt.target === catListNames[0]) {
      	images.index(0).toggleClass("hidden");
      }
    }
});




/*----Application View----*/