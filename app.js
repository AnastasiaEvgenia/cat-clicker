/*----Application Data----*/
const data = {
    currentCat: null,
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
const octapus = {
    init: function() {
        data.currentCat = data.cats[0];
        catView.init();
        catListView.init();

    },

    getCats: function() {
        return data.cats;
    },

    getCurrentCat: function() {
        return data.currentCat;
    },

    setCurrentCat: function(cat) {
        data.currentCat = cat;
    },

    incrementClicks: function() {
        data.currentCat.clicks++;
        catView.render();
    }

}



/*----Application View----*/
const catListView = {
    init: function() {
        this.button = $('button');
        this.catList = $('.drop_down_contents');

        this.render();
    },


    render: function() {
        const cats = octapus.getCats();

        for(let cat of cats){
            const catName = $(`<p>${cat.name}</p>`);
            this.catList.append(catName);
            catName.click( (function(cat) {
                return function() { 
                    octapus.setCurrentCat(cat);
                    catView.render();
                };
            })(cat));
        }

        self = this;
        this.button.click(function(){
            self.catList.toggleClass("drop_down_visibility");
        });
    }
};

const catView = {
    init: function() {
        this.imgContainer = $('.img_container');
        this.catName = $('.cat_name');
        this.catImage = $('.cat_image');
        this.catClicks = $('.cat_clicks');

        this.catImage.click(function() {
            octapus.incrementClicks();
        });

        this.render();
    },


    render: function() {
        const currentCat = octapus.getCurrentCat();
        this.catName.text(currentCat.name);
        this.catImage.attr("src", currentCat.url);
        this.catClicks.text(`Clicks: ${currentCat.clicks}`);
    }
}

octapus.init();