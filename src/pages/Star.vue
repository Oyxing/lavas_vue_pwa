<template>
    <div>
        <div>
            <div id="container" class="cont"></div>
            <div id="container1" class="cont"></div>
            <div id="container2" class="cont"></div>
        </div>
        <div class="content">
            <h2>LAVAS</h2>
            <h4>Star</h4>
        </div>
        
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'star',
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
    mounted(){
        canvas()
        function canvas(){
                console.log(1)
             var width = window.innerWidth;
            var height = window.innerHeight;
            var stage = new Konva.Stage({
                container: 'container',
                    width: 350,
                    height: 600
            });
             var stage1 = new Konva.Stage({
                container: 'container1',
                    width: 350,
                    height: 600
            });
             var stage2 = new Konva.Stage({
                container: 'container2',
                    width: 350,
                    height: 600
            });
                Konvas(stage)
                Konvas(stage1)
                Konvas(stage2)

        }
    function Konvas(name){

    var layer = new Konva.Layer();
    var rect = new Konva.Rect({
        x: name.getWidth() / 10,
        y: name.getHeight() / 10,
        width: 100,
        height: 200,
        stroke: 'black',
        strokeWidth: 1,
        offset: {
            x: 30 ,
            y: 0 
        }
    });
   
    var Ellipse1 = new Konva.Ellipse({
        x: name.getWidth() / 10,
        y: name.getHeight() / 10,
        radius: {
            x: 50 ,
            y: 15
        },
        fill: '#f5f5f5',
        stroke: '#00D2FF',
        stroke: 'black',
        strokeWidth: 1,
         offset: {
            x: -20 ,
            y: 0
        }
    });
    var Ellipse2 = new Konva.Ellipse({
        x: name.getWidth() / 10,
        y: name.getHeight() / 10,
        radius: {
            x: 50,
            y: 15
        },
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 1,
         offset: {
            x: -20 ,
            y: -200
        }
    });
     var Ellipse3 = new Konva.Ellipse({
        x: name.getWidth() / 10,
        y: name.getHeight() / 10,
        radius: {
            x: 50,
            y: 15
        },
        fill: '#f0f',
        stroke: 'black',
        strokeWidth: 1,
         offset: {
            x: -20 ,
            y: -100 
        }
    });
     var Ellipse4 = new Konva.Ellipse({
          x: name.getWidth() / 10,
        y: name.getHeight() / 10,
        radius: {
            x: 50,
            y: 15
        },
        fill: '#f0f',
        stroke: 'black',
        strokeWidth: 1.5,
         offset: {
            x: -20 ,
            y: -50 
        }
    });  
    var rectdata = new Konva.Rect({
        x: name.getWidth() / 10,
        y: name.getHeight() / 10,
        width: 100,
        height: -100,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 1,   
        offset: {
            x: 30 ,
            y: -200 
        }
    });
    var rectdata1 = new Konva.Rect({
         x: name.getWidth() / 10,
        y: name.getHeight() / 10,
        fill: '#f0f',
        width: 100,
        height: -50,
        strokeWidth: 1,   
        offset: {
            x: 30 ,
            y: -100 
        }
    });
    rectdata.on('mouseover', function() {
    //   writeMessage('Mouseover oval');
            console.log("data")
    });
    rectdata.on('mouseout', function() {
    //   writeMessage('');
    });
    // add the shape to the layer
    layer.add(rect);
    layer.add(rectdata);
    layer.add(rectdata1);
    layer.add(Ellipse1);

    layer.add(Ellipse2);
    layer.add(Ellipse3);
    layer.add(Ellipse4);
    // add the layer to the stage
    name.add(layer);
}
            
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
        this.activateBottomNav('star');
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

#container,#container1,#container2
    width: 30%

.cont
    float:left;
              
</style>
