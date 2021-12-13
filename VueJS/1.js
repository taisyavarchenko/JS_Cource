var app = new Vue({
    el: '#app',
    data: {
        seen: false
    },
    methods: {
        open: function () {
            this.seen = !this.seen;
        }
    }
})