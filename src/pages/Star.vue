<template>
    <div>
        <div>
        <div class="content">
            <div id="container" class="cont"></div>
            <div id="container1" class="cont"></div>
            <div id="container2" class="cont"></div>
        </div>
            <h2>LAVAS</h2>
            <h4 v-for = "item in data">Star{{item.height}}</h4>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'star',
    props: {},
    data(){
        return {
            data:[
                {height:111},
                {height:112},
                {height:113}
            ]
        }
    },
    created(){
        this.Getjson()
    },
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        ...mapActions('appShell/appBottomNavigator', [
            'showBottomNav',
            'activateBottomNav'
        ]),
        Getjson(){
          
        }

    },
    async asyncData() {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 500);
        });
    },
    mounted(){
            this.$http.get('/static/json/date.json')
                .then((res)=>{
                    canvas(res.body.data)
                    return 
                    })
                .catch((error)=>{
                    console.log(error)
                })
        // for(var j = 0; j < this.data.length; j++ ){
        //             console.log('j')
        //             console.log(this.data[j])
        //         }
        //获取 ID
        function canvas(data){
            var conedom = document.getElementsByClassName('cont')
                for (var j = 0; j < data.length; j++){
                        for (var q = 0 ;q < data[j].height.length; q++){
                            console.log('高')
                            console.log(data[j].height[q])
                        }
                        for (var q = 0 ;q < data[j].height.length; q++){
                            console.log('size')
                            console.log(data[j].size[q])
                        }
                }
                for(var i = 0;i < conedom.length;i++){
                    KonvaStage(conedom[i].id,conedom[i].clientWidth,1)
                }
            }
            // 舞台
        function KonvaStage(name,width,data){
                var stage = new Konva.Stage({
                    container: name,
                        width: width,
                        height: 250
                });
                Konvas(stage,data)
            }
            //形状
        function Konvas(name,date){
            var layer = new Konva.Layer();
                var rect = new Konva.Rect({
                    x: name.getWidth() / 10,
                    y: name.getHeight() / 10,
                    width: 100,
                    height: 200,
                    // stroke: '#81a3f1',
                    stroke: '#fof',
                    strokeWidth: 0.7,
                    offset: {
                        x: 5 ,
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
                    stroke: '#81a3f1',
                    stroke: 'black',
                    strokeWidth: 0.7,
                      offset: {
                        x: -45 ,
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
                    fill: '#30487c',
                    stroke: '#30487c',
                    strokeWidth: 0.7,
                    offset: {
                        x: -45 ,
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
                    fill: '#30487c',
                    stroke: '#81a3f1',
                    strokeWidth: 0.7,
                    offset: {
                        x: -45 ,
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
                    fill: '#81a3f1',
                    stroke: '#30487c',
                    strokeWidth: 0.7,
                    offset: {
                        x: -45 ,
                        y: -50 
                    }
                });  
                var rectdata = new Konva.Rect({
                    x: name.getWidth() / 10,
                    y: name.getHeight() / 10,
                    width: 100,
                    height: -100,
                    fill: '#30487c',
                    stroke: '#81a3f1',
                    strokeWidth: 0.7,   
                    offset: {
                        x: 5 ,
                        y: -200 
                    }
                });
                var rectdata1 = new Konva.Rect({
                    x: name.getWidth() / 10,
                    y: name.getHeight() / 10,
                    fill: '#618cef',
                    stroke:'#81a3f1',
                    width: 100,
                    height: -50,
                    strokeWidth: 0.7,   
                    offset: {
                        x: 5 ,
                        y: -100 
                    }
                });
            
                // add the shape to the layer
                layer.add(rect);
                layer.add(rectdata);
                layer.add(rectdata1);
                layer.add(Ellipse1);

                layer.add(Ellipse2);
                layer.add(Ellipse3);
                layer.add(Ellipse4);
                rectdata.tween = new Konva.Tween({
                            node: rectdata,
                            fill:'#81a3f1',
                            // easing: Konva.Easings.EaseIn,
                        });
                Ellipse2.tween = new Konva.Tween({
                            node: Ellipse2,
                            fill:'#81a3f1',
                            // easing: Konva.Easings.EaseIn,
                        });
                rectdata1.tween = new Konva.Tween({
                        node: rectdata1,
                        fill:'#81a3f1',
                        // easing: Konva.Easings.EaseIn,
                    });        
                rectdata.on('mouseover touchstart', function(evt) {
                            evt.target.tween.play();
                            console.log(evt)
                            console.log(1)
                            console.log(evt.target)
                            console.log(2)
                            console.log(evt.target.tween)
                            console.log(3)
                            console.log(evt.target.tween.play(Ellipse2))
                            console.log(4)
                            evt.target.tween.play(Ellipse2);
                        //   writeMessage('Mouseover oval');
                                console.log('蓝')
                            });
                rectdata.on('mouseout touchend', function(evt) {
                            evt.target.tween.reverse();
                        //   writeMessage('');
                });
                rectdata1.on('mouseover touchstart', function(evt) {
                            evt.target.tween.play();
                        //   writeMessage('Mouseover oval');
                        console.log("紫")
                });
                rectdata1.on('mouseout touchend', function(evt) {
                            evt.target.tween.reverse();
                            //   writeMessage('');
                });
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
