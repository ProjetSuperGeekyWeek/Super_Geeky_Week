<template>
    <div id="carte-interactive" @mouseover="addMapListener()">
		<!-- alt + w -->
		<!-- manque correctif bug hover grande scene -->
		<div id="bandeau-container">
			<div id="bandeau-selected">
				<div id="haut-selected">
					<router-link id="image-selected" to="/services">
						<img src="https://www.smashbros.com/assets_v2/img/top/hero05_en.jpg" alt="Image du tournoi">
					</router-link>
					<h4 id="titre-selected">
						{{ nom_prestataire }}
					</h4>
					<div id="tags-selected">
						<h6>Tag 1</h6>
						<h6>Tag 2</h6>
						<h6>Tag 3</h6>
					</div>
					<h6 id="description-selected">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl.
					</h6>
				</div>
				<div id="bas-selected">
					<h5 id="stand-selected">
						{{ nom_stand }}
					</h5>
				</div>
			</div>
		</div>
        <svg id="carte" data-name="carte" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 756.73 757.44">
			<rect id="exterieur" class="exterieur" fill="#ccc" x="631.71" y="248.09" width="125.02" height="349.62"/>
			<polygon id="fond-principal" class="fond" fill="#b3b3b3" points="0 0 0 597.71 215.5 597.71 631.71 597.71 631.71 248.09 631.71 .07 0 0"/>
			<rect id="fond-entree" class="fond" fill="#b3b3b3" y="597.71" width="215.5" height="159.73"/>
			<rect id="fond-auxiliaires" class="fond" fill="#b3b3b3" x="631.71" y="0" width="125.02" height="248.02"/>
			<polygon id="stand-16" class="stand" fill="#666" points="439.34 257.83 489.1 257.83 489.1 307.62 439.33 307.62 439.34 257.83"/>
			<polygon id="stand-22" class="stand" fill="#666" points="439.34 315.32 489.1 315.32 489.1 365.1 439.33 365.1 439.34 315.32"/>
			<polygon id="stand-21" class="stand" fill="#666" points="381.58 315.32 431.33 315.32 431.33 365.1 381.56 365.1 381.58 315.32"/>
			<polygon id="stand-15" class="stand" fill="#666" points="381.57 257.83 431.32 257.83 431.32 307.62 381.55 307.62 381.57 257.83"/>
			<polygon id="stand-14" class="stand" fill="#666" points="283.78 257.83 333.54 257.83 333.54 307.62 283.77 307.62 283.78 257.83"/>
			<polygon id="stand-20" class="stand" fill="#666" points="283.78 315.32 333.54 315.32 333.54 365.1 283.77 365.1 283.78 315.32"/>
			<polygon id="stand-19" class="stand" fill="#666" points="226.01 315.32 275.77 315.32 275.77 365.1 226 365.1 226.01 315.32"/>
			<polygon id="stand-13" class="stand" fill="#666" points="226.01 257.83 275.76 257.83 275.76 307.62 225.99 307.62 226.01 257.83"/>
			<polygon id="stand-26" class="stand" fill="#666" points="283.8 409.04 333.55 409.04 333.55 458.82 283.78 458.82 283.8 409.04"/>
			<polygon id="stand-32" class="stand" fill="#666" points="283.8 466.52 333.55 466.52 333.55 516.31 283.78 516.31 283.8 466.52"/>
			<polygon id="stand-31" class="stand" fill="#666" points="226.03 466.52 275.78 466.52 275.78 516.31 226.01 516.31 226.03 466.52"/>
			<polygon id="stand-25" class="stand" fill="#666" points="226.02 409.04 275.78 409.04 275.78 458.82 226.01 458.82 226.02 409.04"/>
			<polygon id="stand-28" class="stand" fill="#666" points="439.35 409.04 489.11 409.04 489.11 458.82 439.34 458.82 439.35 409.04"/>
			<polygon id="stand-33" class="stand" fill="#666" points="381.59 466.52 431.34 466.52 431.34 516.31 381.57 516.31 381.59 466.52"/>
			<polygon id="stand-27" class="stand" fill="#666" points="381.58 409.04 431.33 409.04 431.33 458.82 381.56 458.82 381.58 409.04"/>
			<polygon id="stand-5" class="stand" fill="#666" points="439.33 110.73 489.08 110.73 489.08 160.51 439.31 160.51 439.33 110.73"/>
			<polygon id="stand-9" class="stand" fill="#666" points="439.33 168.21 489.08 168.21 489.08 218 439.31 218 439.33 168.21"/>
			<polygon id="stand-8" class="stand" fill="#666" points="381.56 168.21 431.31 168.21 431.31 218 381.54 218 381.56 168.21"/>
			<polygon id="stand-4" class="stand" fill="#666" points="381.55 110.73 431.31 110.73 431.31 160.51 381.54 160.51 381.55 110.73"/>
			<polygon id="stand-3" class="stand" fill="#666" points="283.78 110.72 333.54 110.72 333.54 160.5 283.77 160.5 283.78 110.72"/>
			<polygon id="stand-7" class="stand" fill="#666" points="283.78 168.2 333.54 168.2 333.54 217.99 283.77 217.99 283.78 168.2"/>
			<polygon id="stand-6" class="stand" fill="#666" points="520.98 110.72 570.74 110.72 570.74 160.5 520.97 160.5 520.98 110.72"/>
			<polygon id="stand-10" class="stand" fill="#666" points="520.98 168.2 570.74 168.2 570.74 217.99 520.97 217.99 520.98 168.2"/>
			<polygon id="stand-2" class="stand" fill="#666" points="570.74 .02 570.74 49.78 520.96 49.78 520.96 0 570.74 .02"/>
			<polygon id="stand-1" class="stand" fill="#666" points="513.26 .02 513.26 49.78 463.47 49.78 463.47 0 513.26 .02"/>
			<polygon id="stand-12" class="stand" fill="#666" points="117.46 257.83 167.21 257.83 167.21 307.62 117.44 307.62 117.46 257.83"/>
			<polygon id="stand-18" class="stand" fill="#666" points="117.46 315.32 167.21 315.32 167.21 365.1 117.44 365.1 117.46 315.32"/>
			<polygon id="stand-24" class="stand" fill="#666" points="117.46 408.36 167.21 408.36 167.21 458.15 117.44 458.15 117.46 408.36"/>
			<polygon id="stand-30" class="stand" fill="#666" points="117.46 465.85 167.21 465.85 167.21 515.63 117.44 515.63 117.46 465.85"/>
			<polygon id="stand-23" class="stand" fill="#666" points=".01 409.05 49.77 409.05 49.77 458.83 0 458.83 .01 409.05"/>
			<polygon id="stand-29" class="stand" fill="#666" points=".01 466.53 49.77 466.53 49.77 516.32 0 516.32 .01 466.53"/>
			<polygon id="stand-11" class="stand" fill="#666" points=".01 257.83 49.77 257.83 49.77 307.62 0 307.62 .01 257.83"/>
			<polygon id="stand-17" class="stand" fill="#666" points=".01 315.32 49.77 315.32 49.77 365.1 0 365.1 .01 315.32"/>
			<polygon id="dedicace-1" class="stand" fill="#666" points="226.02 597.69 226.02 547.93 275.8 547.93 275.8 597.7 226.02 597.69"/>
			<polygon id="dedicace-2" class="stand" fill="#666" points="283.5 597.69 283.5 547.93 333.29 547.93 333.29 597.7 283.5 597.69"/>
			<polygon id="dedicace-3" class="stand" fill="#666" points="341.01 547.92 390.77 547.92 390.77 597.71 341 597.71 341.01 547.92"/>
			<polygon id="bar" class="stand" fill="#666" points="283.52 49.76 283.52 0 417.37 0 417.37 49.77 283.52 49.76"/>
			<polygon id="salle-1" class="stand" fill="#666" points="618.48 11.83 745.87 11.83 745.87 105.9 618.44 105.9 618.48 11.83"/>
			<polygon id="salle-2" class="stand" fill="#666" points="618.48 135.6 745.87 135.6 745.87 229.67 618.44 229.67 618.48 135.6"/>
			<polygon id="scene-grande" class="stand" fill="#666" points="22.77 190.6 22.77 21.03 125.95 21.03 125.95 190.65 22.77 190.6"/>
			<polygon id="espace-gaming" class="stand" fill="#666" points="523.72 433.62 523.72 306.23 617.79 306.23 617.79 433.66 523.72 433.62"/>
			<polygon id="foodtruck-1" class="stand" fill="#666" points="756.71 349.04 717.34 349.04 717.34 266.26 756.73 266.26 756.71 349.04"/>
			<polygon id="foodtruck-2" class="stand" fill="#666" points="756.71 456.11 717.34 456.11 717.34 373.33 756.73 373.33 756.71 456.11"/>
			<polygon id="foodtruck-3" class="stand" fill="#666" points="756.72 563.17 717.35 563.17 717.35 480.39 756.73 480.39 756.72 563.17"/>
			<polygon id="scene-petite" class="stand" fill="#666" points="549.9 589.26 549.9 483.43 626.54 483.43 626.54 589.29 549.9 589.26"/>
			<rect id="stand-34" class="stand" fill="#666" x="103.66" y="547.93" width="85.26" height="50.22"/>
			<rect id="accueil" class="stand" fill="#666" x="103.66" y="598.15" width="111.84" height="48.55"/>
		</svg>
		<InfobulleCarte nom_prestataire="nom" nom_stand="stand" id="infobulle" class="infobulle-hidden"/>
    </div>
</template>

<script>
import {mapState} from "vuex";
import InfobulleCarte from '@/components/InfobulleCarte.vue'

export default {
    name: 'CarteInteractive',
	components: {
    InfobulleCarte,
},
    methods: {
		infoBulle(stand){
			var infoBulle = document.getElementById("infobulle");
			infobulle.setAttribute('class', 'infobulle');
			this.$store.commit('setNomPrestataire', 'nom '+stand.id);
			this.$store.commit('setNomStand', stand.id);
			//position
			var widthBulle = infoBulle.getBoundingClientRect().width;
			var heightBulle = infoBulle.getBoundingClientRect().height;
			var widthStand = stand.getBoundingClientRect().width;
			var ajustementX = (widthStand - widthBulle) / 2;
			var ajustementY = -(heightBulle + 10);
			infoBulle.style.top = ((stand.getBoundingClientRect().top + window.pageYOffset) + ajustementY )+ "px";
			infoBulle.style.left = ((stand.getBoundingClientRect().left + window.pageXOffset) + ajustementX )+ "px";
		},
		bandeauSelected(stand){
			var bandeau = document.getElementById("bandeau-selected");
			bandeau.style.maxWidth = "100%";
			bandeau.style.border = "3px solid #000";
			this.$store.commit('setNomPrestataire', 'nom '+stand.id);
			this.$store.commit('setNomStand', stand.id);
		},
		resetAllClicked(){
			var map = document.getElementById('carte');
			var polygones = map.getElementsByTagName('polygon');
			var rects = map.getElementsByTagName('rect');
			var paths = [...polygones, ...rects];
			for (var i = 0; i < paths.length; i++) {
				if(paths[i].classList.contains('stand-selected')){
					paths[i].setAttribute('class', 'stand');
				}
			}
		},
		verifyNoClicked() {
			var map = document.getElementById('carte');
			var polygones = map.getElementsByTagName('polygon');
			var rects = map.getElementsByTagName('rect');
			var paths = [...polygones, ...rects];
			var noClicked = true;
			for (var i = 0; i < paths.length; i++) {
				if(paths[i].classList.contains('stand-selected')){
					noClicked = false;
				}
			}
			return noClicked;
		},
		addMapListener(){
			var map = document.getElementById("carte");
			var polygones = map.getElementsByTagName("polygon");
			var rects = map.getElementsByTagName("rect");
			var paths = [...polygones, ...rects];
			var vue = this;

			paths.forEach(stand => {
				stand.addEventListener('mouseenter', function(){
                    if(stand.classList.contains('stand') && vue.verifyNoClicked()){
                        stand.setAttribute('class', 'stand stand-hover');
						vue.infoBulle(stand);
                    }
                });
                stand.addEventListener('mouseleave', function(){
                    if(stand.classList.contains('stand-hover')){
                        stand.setAttribute('class', 'stand');
						var infoBulle = document.getElementById("infobulle");
						infobulle.setAttribute('class', 'infobulle-hidden');
                    }
                });
                stand.addEventListener('click', function(){
                    if(stand.classList.contains('stand-selected') && stand.classList.contains('stand')){
                        setTimeout(function(){
                            stand.setAttribute('class', 'stand stand-hover');
                        }, 100);
						vue.infoBulle(stand);
						var bandeau = document.getElementById("bandeau-selected");
						bandeau.style.maxWidth = "0%";
						bandeau.style.border = "none";
                    }
                    else if(stand.classList.contains('stand')){
                        vue.resetAllClicked();
                        setTimeout(function(){
                            stand.setAttribute('class', 'stand stand-selected');
                        }, 100);
						var infoBulle = document.getElementById("infobulle");
						infobulle.setAttribute('class', 'infobulle-hidden');
						vue.bandeauSelected(stand);
					}
                });
			});
		},
	},
	computed: {
		...mapState(['nom_prestataire', 'nom_stand'])
	},
}
</script>

<style scoped>
#carte-interactive {
	width: 100%;
	height: 100%;
	display: flex;
}

#carte{
	width: 100%;
	height: 100%;
}

svg rect{
	stroke: black;
    transition: fill 0.3s ease;
}

svg polygon{
	stroke: black;
	transition: fill 0.3s ease;
}

.stand-hover{
    fill: #fc3816;
	filter: drop-shadow(0px 0px 30px #fc8873);
	stroke: none;
}
.stand-selected{
    fill: #be2105;
	filter: drop-shadow(0px 0px 30px #ee6149);
	stroke: none;
}

.infobulle{
	display: inline;
}
.infobulle-hidden{
	display: none;
}

#bandeau-container{
	width: 20%;
	max-height: fit-content;
	display: flex;
	justify-content: flex-end;
	position: relative;
}

#bandeau-selected{
	max-width: 0%;
	max-height: 100%;
	background-color: #fff;
	border-radius: 10px 0px 0px 10px;
	transition: all 0.3s ease;
	overflow: hidden;
}

#bandeau-selected #haut-selected{
	width: 100%;
	height: 90%;
	border-radius: 7px 0px 0px 0px;
	border-bottom: 4px solid #000;
	overflow-y: scroll;
}

#haut-selected #image-selected{
	width: 100%;
	height: 30%;
	overflow: hidden;
}
#image-selected img{
	width: 100%;
	height: 30%;
	border-bottom: 1px solid black;
	border-radius: 7px 0px 0px 0px;
}
#haut-selected #titre-selected{
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
	color: red;
	margin-top: 1%;
	margin-bottom: 1%;
}
#haut-selected #tags-selected{
	width: 100%;
	height: 10%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
#tags-selected h6{
	font-size: 1rem;
	margin-left: 1%;
	margin-right: 1%;
}
#haut-selected #description-selected{
	font-size: 0.8rem;
	margin-top: 1%;
	margin-bottom: 1%;
	overflow-y: scroll;
}

#bandeau-selected #bas-selected{
	width: 100%;
	height: 10%;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
	color: rgb(158, 12, 12);
	background-color: lightcoral;
}

</style>