<template>
    <div id="formulaire-authentification">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required @change="verifEmail">
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password" required @change="verifPassword">
        <button id="valide-authentification" @click="submitForm">Soumettre</button>
    </div>
</template>

<script>
export default {
    name: 'FormulaireAuthentification',
    data() {
        return {
            email: '',
            password: '',
            correctEmail: false,
            correctPassword: false
        }
    },
    methods: {
        submitForm() {
            if(this.correctEmail && this.correctPassword){
                let emailForm = document.getElementById('email').nodeValue;
                let passwordForm = document.getElementById('password').value;
                this.setEmail(emailForm);
                this.setPassword(passwordForm);
            }
            else {
                alert('Veuillez remplir correctement les champs');
            }
        },
        setEmail(email) {
            this.email = email;
        },
        setPassword(password) {
            this.password = password;
        },
        verifEmail() {
            let email = document.getElementById('email').value;
            let regexEmail = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');
            if(regexEmail.test(email)) {
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
            if(regexPassword.test(password)) {
                this.correctPassword = true;
                this.colorVert(document.getElementById('password'));
            } else {
                this.correctPassword = false;
                this.colorRouge(document.getElementById('password'));
            }
        },
        colorRouge(element){
            element.style.backgroundColor = 'tomato';
        },
        colorVert(element){
            element.style.backgroundColor = 'lightgreen';
        }
    }
}
</script>

<style scoped>
.formulaire-authentification {
    width: 50%;
    height: 100%;
    margin-left: 25%;
    display: flex;
}

.formulaire-authentification label {
    display: block;
}

</style>