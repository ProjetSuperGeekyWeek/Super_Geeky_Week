<template>
    <div class="prestataires">
        <h1>Prestataires</h1>
        <div class="prestataires-box">
            <div class="prestataires-cards">
                <div class="prestataires-card" v-for="prestataire in prestataires" :key="prestataire.id">
                    <div class="prestataires-photo">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="prestataires-description">
                        <div class="prestataires-tag" v-for="tag in prestataire.tags" :key="tag.libelle">
                            <span>
                                {{ tag.libelle }}
                            </span>
                        </div>
                        <div class="prestataires-info">
                            <p>
                                {{ prestataire.info }}
                            </p>
                        </div>
                        <router-link :to="{ name: 'PrestataireView', params: { id: prestataire.id } }">
                            {{ prestataire.nom }}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="prestataires-chips">
                <button class="chip-1 chip"></button>
                <button class="chip-2 chip"></button>
                <button class="chip-3 chip"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'PrestatairesList',
    props: {
        prestataires: {
            type: Array,
            default: () => [{nom: 'Prestataire 1', id: 1, info: 'Je suis un Prestataire investi et sérieux', tags: [{libelle: 'tag1'}, {libelle: 'tag2'}]}, {nom: 'Prestataire 2', id: 2, info: 'Je suis un Prestataire investi et sérieux', tags: [{libelle: 'tag1'}, {libelle: 'tag2'}]}, {nom: 'Prestataire 3', id: 3, info: 'Je suis un Prestataire investi et sérieux', tags: [{libelle: 'tag1'}, {libelle: 'tag2'}]}]
        }
    }
}
</script>

<style scoped>
.prestataires-box{
    width: 60%;
    display: block;
    padding-left: 20%;
}
.prestataires-cards{
    width: auto;
}
.prestataires-card{
    display: inline-block;
    width: 25%;
    height: 250px;
    margin-left: 2%;
    margin-right: 2%;
    border-radius: 10px;
    border-style: solid;
    border-color: darkblue;
}
.prestataires-photo{
    width: 100%;
    height: 100px;
    position: relative;
    
}
.prestataires-photo img{
    max-width: 100%;
    height: 100px;
}
.prestataires-description{
    width: 100%;
    height: 150px;
    position: relative;
}
.prestataires-tag{
    display: inline-block;
    padding: 1px;
    width: auto;
    height: 20px;
    border-radius: 10px;
    border-style: solid;
    border-color: darkblue;
    background-color: lightslategrey;
    color: white;
    margin-left: 1px;
    margin-right: 1px;
}
.prestataires-chips{
    display: block;
}
.chip{
    display: inline;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-style: solid;
    border-color: rebeccapurple;
    background-color: plum;
    margin: 10px;
}
.chip:hover, .chip-2{
    transition: 0.2s;
    background-color: rebeccapurple;
}

</style>