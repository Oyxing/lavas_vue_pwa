<template>
    <div>
        <div class="content">
            <div class="slide">
                <img src="/static/img/image/38f7de64a70f4a5b88cd1539a7717208.jpg" alt="">
            </div>
            <h2>LAVAS</h2>
            <h4>Home</h4>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'home',
    props: {},
   
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        ...mapActions('appShell/appBottomNavigator', [
            'showBottomNav',
            'activateBottomNav'
        ]),
      

    },
    async asyncData() {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 500);
        });
    },
    activated() {
        this.setAppHeader({
            show: true,
            title: 'Lavas',
            showMenu: true,
            showBack: false,
            showLogo: true,
            actions: [
                {
                    icon: 'search',
                    route: '/search'
                }
            ]
        });
        this.activateBottomNav('home');
        this.showBottomNav();
    }
};
</script>

<style lang="stylus" scoped>
$text-color := rgba($material-theme.text-color, $material-theme.primary-text-percent)

.content
    width 100%
    position absolute
    top 150px
    left 50%
    transform translate(-50%, -50%)

    h2
        font-size 46px
        font-weight 500

    h2, h4
        color $text-color

.slide
    img
        width 95%
        height 50%
</style>
