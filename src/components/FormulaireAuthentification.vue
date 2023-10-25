<template>
    <div id="formulaire-authentification">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password" required>
        <button id="valide-authentification" @click="submitForm">Soumettre</button>
    </div>
</template>

<script>
export default {
    name: 'FormulaireAuthentification',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        submitForm() {
            let emailForm = document.getElementById('email').nodeValue;
            let passwordForm = document.getElementById('password').value;
            this.setEmail(emailForm);
            this.setPassword(passwordForm);
        },
        setEmail(email) {
            this.email = email;
        },
        setPassword(password) {
            this.password = password;
        },
    }
}
</script>

<style scoped>
.formulaire-authentification {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>