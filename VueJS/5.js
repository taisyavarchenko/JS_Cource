var app = new Vue({
    el: '#app',
    data: {
      sum: 0,
      items: [
        { id:1, title: 'JavaScript',value: 400, seen: false  },
        { id:2, title: 'Vue.js',value: 300, seen: false },
        { id:3, title: 'React.js',value: 700, seen: false }
      ],
    },
    methods: {
        buy: function (id) {
            console.log(id)
            this.items[id].seen = !this.items[id].seen;
            this.sum = this.items.reduce((sum, item)=>{
                return item.seen ? sum + item.value : sum
            }, 0)
        },
      }
})