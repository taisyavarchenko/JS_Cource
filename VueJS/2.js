var app = new Vue({
    el: '#app',
    data: {
      tab: 0
    },
    methods: {
        open: function (tabId) {
            this.tab = tabId;
        }
    }
})