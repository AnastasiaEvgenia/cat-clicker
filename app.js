/*----Application Data----*/
const data = {
    currentCat: null,
    adminStatus: false,
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
        catAdminView.init();
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
    },

    openCatAdminView: function() {
        data.adminStatus = true;
        catAdminView.render();
    },

    closeCatAdminView: function() {
        data.adminStatus = false;
        catAdminView.render();
    },

    updateCurrentCat: function() {
        data.currentCat.name = catAdminView.inputName.value;
        data.currentCat.url = catAdminView.inputUrl.value;
        data.currentCat.clicks = catAdminView.inputClicks.value;

        catView.render();
        // catListView.render();

        data.adminStatus = false;
        catAdminView.render();
    },

    adminModeStatus: function() {
        return data.adminStatus;
    }

};


/*----Application View----*/
const catListView = {
    init: function() {
        this.button = $('.drop_down_button');
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
};


const catAdminView = {
    init: function() {
        this.adminForm = $('.form');
        this.inputName = $('.input_name');
        this.inputUrl = $('.input_url');
        this.inputClicks = $('.input_clicks');

        const adminButton = $('.admin_button');
        const submitButton = $('.submit_button');
        const cancelButton = $('.cancel_button');

        adminButton.click(function() {
            octapus.openCatAdminView();
        });

        submitButton.click(function() {
            octapus.updateCurrentCat();
        });

        cancelButton.click(function() {
            octapus.closeCatAdminView();
        });
      
    },

    render: function() {
        if(octapus.adminModeStatus() === false) {
            this.adminForm.toggleClass("admin_form");
        } else {            
            let newCat = octapus.getCurrentCat();

            this.inputName.value = newCat.name;
            this.inputUrl.value = newCat.url;
            this.inputClicks.value = newCat.clicks;

            this.adminForm.toggleClass("admin_form");
        }
    }
};


octapus.init();