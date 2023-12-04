<template>
    <div id="infobulle">
        <div id="haut">
            <div id="image">
                <img src="https://www.smashbros.com/assets_v2/img/top/hero05_en.jpg" alt="Image du tournoi">
            </div>
            <h4 id="titre">
                {{ nom_prestataire }}
            </h4>
        </div>
        <div id="bas">
            <h5>{{ nom_stand }}</h5>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: 'InfobulleCarte',
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['nom_prestataire', 'nom_stand']),
    },
}
</script>

<style scoped>

#infobulle{
    position : absolute;
	width : 20vh;
	height : 15vh;
	border-radius : 10px;
	font-size : 1.2rem;
	font-weight : bold;
	text-align : center;
	z-index : 100;
}

#infobulle #haut{
    padding: 0.5rem;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    background-color: white;
    border : darkred 2px solid;
    border-radius: 10px 10px 0 0;
}

#infobulle #haut #image{
    width : 5vh;
    height : 5vh;
}

#infobulle #haut #image img{
    width : 100%;
    height : 100%;
    border-radius : 50%;
    border: 1px solid black;
    object-fit: cover;
}

#infobulle #haut #titre{
    font-size : 1rem;
    font-weight : bold;
    text-align : center;
    color : red;
}

#infobulle #bas{
    padding: 0.5rem;
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    background-color: lightcoral;
    border : darkred 2px solid;
    border-radius: 0 0 10px 10px;
}

#infobulle #bas h5{
    font-size : 1rem;
    font-weight : bold;
    text-align : center;
    color : rgb(158, 12, 12);
}

</style>