var app = new Vue({
    el: '#app',
    data: {
        type: 'list',
        articals: [
            { title: 'JavaScript',url: 'https://ru.wikipedia.org/wiki/JavaScript' ,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/80px-Unofficial_JavaScript_logo_2.svg.png', seen: false  },
            { title: 'Vue.js',url: 'https://ru.wikipedia.org/wiki/Vue.js' ,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/93px-Vue.js_Logo_2.svg.png', seen: false },
            { title: 'React.js',url: 'https://ru.wikipedia.org/wiki/React' ,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png', seen: false },
            { title: 'JavaScript 2',url: 'https://ru.wikipedia.org/wiki/JavaScript' ,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/80px-Unofficial_JavaScript_logo_2.svg.png', seen: false  },
            { title: 'Vue.js 2',url: 'https://ru.wikipedia.org/wiki/Vue.js' ,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/93px-Vue.js_Logo_2.svg.png', seen: false },
            { title: 'React.js 2',url: 'https://ru.wikipedia.org/wiki/React' ,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png', seen: false }
        ],
    },
    methods: {
        setType: function (type) {
            this.type = type
        },
      }
})