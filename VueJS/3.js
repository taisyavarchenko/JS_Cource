var app = new Vue({
    el: '#search',
    data: {
      message: '',
      articals: [
        { title: 'JavaScript',url: 'https://ru.wikipedia.org/wiki/JavaScript' ,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/80px-Unofficial_JavaScript_logo_2.svg.png', seen: true  },
        { title: 'Vue.js',url: 'https://ru.wikipedia.org/wiki/Vue.js' ,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/93px-Vue.js_Logo_2.svg.png', seen: true },
        { title: 'React.js',url: 'https://ru.wikipedia.org/wiki/React' ,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png', seen: true }
      ],
    },
    methods: {
        open: function () {
            if(this.message != '')
            {
                this.articals = this.articals.map((artical)=>{
                    if(artical.title.indexOf(this.message) != -1)
                    {
                        artical.seen = true;
                    }
                    else
                    {
                        artical.seen = false;
                    }
                    return artical;
                });
            }
        },
      }
})