<template>
    <div id="formulaire-authentification">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required @change="verifEmail">
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password" required @change="verifPassword">
        <span id="incorrectPassword"></span>
        <button id="valide-authentification" @click="submitForm">Soumettre</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { getIdSession, linkSessionPresta } from '@/../../back/axiosFunctions/sessionAxios';
import { getPrestataireMailPassword, adminVerif  } from '@/../../back/axiosFunctions/authentificationAxios';

export default {
    name: 'FormulaireAuthentification',
    data() {
        return {
            correctEmail: false,
            correctPassword: false,
        }
    },
    methods: {
        async authentification(email, password) {
            const enregistrerInfos = await this.enregistrer(email, password);
            this.$store.commit('setAuthentifier', prestataireInfo.authentifier);
            this.$store.commit('setAdmin', prestataireInfo.admin);
            const prestataireInfo = enregistrerInfos.infos;
            this.$store.commit('setPrestataire', prestataireInfo);

            let id_session = await getIdSession();
            if (id_session.id_session !== undefined && this.$store.state.authentifier) {
                await linkSessionPresta(id_session.id_session, prestataireInfo.id_personne);
            }

            if (this.$store.state.admin) {
                    this.$router.push('/admin/crud');
            } else if (this.$store.state.authentifier) {
                this.$router.push('/services');
            } else {
                this.clearMdp();
                alert('Email ou mot de passe incorrect');
            }
        },

        async enregistrer(email, password) {
            let authentifier = false;
            let admin = false;

            let prestataireInfos = await getPrestataireMailPassword(email, password);

            if (prestataireInfos.id_personne !== undefined) {
                authentifier = true;
                admin = await this.verifAdmin(prestataireInfos.id_personne);
            }

            return {
                infos : prestataireInfos,
                authentifier: authentifier,
                admin: admin
            };
        },

        async verifAdmin(id_personne) {
            let admin = false;
            let id_admin = await adminVerif(id_personne);
            if (id_admin.id_personne !== undefined) {
                admin = true;
            }
            return admin;
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
                alert('Veuillez remplir correctement les champs');
            }
        },
        clearMdp() {
            document.getElementById('password').value = '';
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
            document.getElementById('incorrectPassword').innerHTML = 'Mot de passe incorrect ! Votre mot de passe doit contenir au moins 8 caractères dont une majuscule, une minuscule, un chiffre et un caractère spécial';
        },
        clearMdpIncorrect() {
            document.getElementById('incorrectPassword').innerHTML = '';
        }
    },
    computed: {
        ...mapState(['authentifier', 'admin']),
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
