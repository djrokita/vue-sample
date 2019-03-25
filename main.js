new Vue({
    el: '#app',
    data: {
        link: {
            href: 'https://www.wyborcza.pl',
            target: '_blank',
            title: 'Gazeta Wyborcza'
        },
        foo: '',
        dest: 'Wyborcza',
        hobbys: {
            forex: {
                eurusd: 0,
                dax: 0,
                sp30: 0
            },
            coding: {
                language: 'javascript',
                framework: 'vue.js',
                site: 'frontend'
            }
        },
        income: 0,
        tax: 19,
        colors: {
            0: 'lightblue',
            1: 'lightgreen',
            2: 'yellowgreen'
        },
        styleColor: 0
    },
    methods: {
        countSalary() {
            console.log('countSalary was running');
            return Math.floor(this.income - (this.income * this.tax / 100));
        }
    },
    computed: {
        computeSalary() {
            console.log('countSalary was computed');
            return Math.floor(this.income - (this.income * this.tax / 100));
        },
        buy(event) {
            console.log('buy', event);
        },
        sell(position) {

        }
    }
});
