<template>
<div class="box">
  <v-card class="elevation-0">
    <v-card-text>
      <v-container fluid class="pa-0">
        <v-layout row wrap>
          <v-flex xs12 sm3>
            <v-btn icon class="pink--text">
              <v-icon>favorite</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm3>
            <v-btn icon class="indigo--text">
              <v-icon>star</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm3>
            <v-btn icon class="green--text">
              <v-icon>cached</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm3>
            <v-btn icon class="deep-orange--text">
              <v-icon>thumb_up</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
  </div>
</template>


<script>
import {mapActions} from 'vuex';

export default {
    name: 'sort',
    props: {},
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        ...mapActions('appShell/appBottomNavigator', [
            'showBottomNav',
            'activateBottomNav'
        ])
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
        this.activateBottomNav('sort');
        this.showBottomNav();
    }
};
</script>

<style lang="stylus" scoped>
$text-color := rgba($material-theme.text-color, $material-theme.primary-text-percent)

.content
    width 100%
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)

    h2
        font-size 46px
        font-weight 500

    h2, h4
        color $text-color

.layout .flex.xs12
    flex-basis 0
</style>
