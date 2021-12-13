var app = new Vue({
    el: '#changedInput',
    data: {
        message: 'Текст',
        edit: false
    },
    methods: {
        edited: function () {
            this.edit = true;
        },
        change: function () {
            this.edit = false
        }
    }
});