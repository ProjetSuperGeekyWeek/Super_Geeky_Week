<template>
    <div id="formulaire-authentification">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required @change="verifEmail">
        <label for="password">{{translate('mdp')}}</label>
        <input type="password" name="password" id="password" required @change="verifPassword">
        <span id="incorrectPassword"></span>
        <button id="valide-authentification" @click="submitForm">{{translate('soumettre')}}</button>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex';

export default {
    name: 'FormulaireAuthentification',
    data() {
        return {
            correctEmail: false,
            correctPassword: false,
        }
    },
    methods: {

        ...mapActions('authentifierStore',['getPrestataireMailPassword', 'adminVerif']),
        ...mapGetters('authentifierStore',['getPrestataireAuthentifier']),

        async authentification(email, password) {
            let info = {
                mail: email,
                mdp: password};
            if (await this.getPrestataireMailPassword(info)) {
                if (await this.adminVerif(this.getPrestataireAuthentifier().id_personne)){
                    this.$router.push('/admin/crud');
                }
                else {
                    this.$router.push('/page_prestataire/' + this.getPrestataireAuthentifier().id_personne);
                }
            } else {
                this.clearMdp();
                alert('Email ou mot de passe incorrect');
            }
        },

        async submitForm() {
            if (this.correctEmail && this.correctPassword) {
                let emailForm = document.getElementById('email').value;
                let passwordForm = document.getElementById('password').value;
                await this.authentification(emailForm, passwordForm);
            }
            else {
                this.clearMdp();
                this.$store.commit('setAuthentifier', false);
                alert(this.translate('remplirchamp'));
            }
        },
        clearMdp() {
            document.getElementById('password').value = '';
        },
      translate(prop) {
        return this[this.lang][this.lang][prop];
      },
        verifEmail() {
            let email = document.getElementById('email').value;
            let regexEmail = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');
            if (regexEmail.test(email)) {
                this.correctEmail = true;
                this.colorVert(document.getElementById('email'));
            } else {
                this.correctEmail = false;
                this.colorRouge(document.getElementById('email'));
            }
        },
        verifPassword() {
            let password = document.getElementById('password').value;
            let regexPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
            if (regexPassword.test(password)) {
                this.correctPassword = true;
                this.colorVert(document.getElementById('password'));
                this.clearMdpIncorrect();
            } else {
                this.correctPassword = false;
                this.colorRouge(document.getElementById('password'));
                this.mdpIncorrect();
            }
        },
        colorRouge(element) {
            element.style.backgroundColor = 'tomato';
        },
        colorVert(element) {
            element.style.backgroundColor = 'lightgreen';
        },
        mdpIncorrect() {
            document.getElementById('incorrectPassword').innerHTML = this.translate('mdpincorrect');
        },
        clearMdpIncorrect() {
            document.getElementById('incorrectPassword').innerHTML = '';
        }
    },
    computed: {
        ...mapState(['lang', 'en', 'fr']),
    }
}
</script>

<style scoped>
.formulaire-authentification {
    width: 50%;
    height: 100%;
    margin-left: 25%;
}

label {
    display: block;
    margin-top: 10px;
    text-align: center;
}

input {
    width: 60%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
    margin-left: 20%;
}

input:focus {
    outline: none;
    filter: drop-shadow(0 0 0.4rem rgb(240, 38, 105));
}

#incorrectPassword {
    color: red;
    font-size: 12px;
    margin-bottom: 10px;
    display: block;
}

button {
    width: 30%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid;
    margin-bottom: 10px;
    margin-left: 35%;
    background-color: rgb(238, 103, 250);
    cursor: pointer;
    border-color: rgb(88, 3, 88);
    color: rgb(88, 3, 88);
    transition: ease-in-out 0.15s;
}

button:hover {
    background-color: rgb(88, 3, 88);
    color: rgb(238, 103, 250);
}
</style>
