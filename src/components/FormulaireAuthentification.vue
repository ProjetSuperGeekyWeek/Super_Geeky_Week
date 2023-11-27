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

export default {
    name: 'FormulaireAuthentification',
    data() {
        return {
            correctEmail: false,
            correctPassword: false,
        }
    },
    methods: {
      authentification(email, password) {
        const prestataireInfo = this.enregistrer(email, password);
        this.$store.commit('setAuthentifier', prestataireInfo.authentifier);

        if (prestataireInfo.authentifier) {
          this.$store.commit('setAdmin', this.verifAdmin(email, password));

          // Mettez à jour cette partie pour utiliser les informations du prestataire
          const prestataire = {
            prenom: 'Jean',
            nom: 'Dupont',
            email: 'jean.dupont@example.com',
            description: 'Gérant des tournois de super smash bros',
            image: require ('../assets/main_logo.png'),
            service : 'Tournois de super smash bros',
          };

          this.$store.commit('setPrestataire', prestataire);

          if (this.$store.state.admin) {
            this.$router.push('/services');
          } else {
            this.$router.push('/');
          }
        } else {
          this.clearMdp();
          this.$store.commit('setAuthentifier', false);
          alert('Email ou mot de passe incorrect');
        }
      },
      enregistrer(email, password) {
        let authentifier = false;
        let admin = false;

        if ((email === 'user@gmail.com' && password === 'User1234&') || (email === 'admin@gmail.com' && password === 'Admin1234&')) {
          authentifier = true;
          admin = this.verifAdmin(email, password);
        }

        return {
          authentifier: authentifier,
          admin: admin
        };
      },

      verifAdmin(email, password) {
            let admin = false;
            if (email === 'admin@gmail.com' && password === 'Admin1234&')
                admin = true;
            return admin;
        },
        submitForm() {
            if (this.correctEmail && this.correctPassword) {
                let emailForm = document.getElementById('email').value;
                let passwordForm = document.getElementById('password').value;
                this.authentification(emailForm, passwordForm);
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
}

input {
    width: 90%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
}

input:focus {
    filter: drop-shadow(0 0 0.2rem purple);
}

/* select input there are not focus only when one other input is focus */
input:not(:focus) {
    filter: blur(0.07rem);
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
    background-color: rgb(238, 103, 250);
    cursor: pointer;
    border-color: rgb(238, 103, 250);
    color: rgb(88, 3, 88);
}
</style>
