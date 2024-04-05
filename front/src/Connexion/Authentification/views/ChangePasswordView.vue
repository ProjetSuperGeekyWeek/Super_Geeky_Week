<template>
    <div class="authentificationChange">
        <div id="changePasswordBox">
            <label for="newPassword">{{translate('nouvmotdepasse')}}</label>
            <input type="password" name="newPassword" id="newPassword" required @change="verifNewPassword()">
            <label for="confirmNewPassword">{{translate('confirmnouvmotdepasse')}}</label>
            <input type="password" name="confirmNewPassword" id="confirmNewPassword" required @change="verifNewConfirmPassword()">
            <span id="incorrectNewPassword"></span>
            <button id="valid-new-password" @click="submitForm">{{translate('soumettre')}}</button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'ChangePasswordView',
        data() {
            return {
                correctNewPassword: false,
                correctConfirmNewPassword: false,
            }
        },
        methods:{
            ...mapActions('authentifierStore',['changePassword']),
            
            async submitForm() {
                if (this.correctNewPassword && this.correctConfirmNewPassword) {
                    let newPasswordForm = document.getElementById('newPassword').value;
                    let confirmNewPasswordForm = document.getElementById('confirmNewPassword').value;
                    if(newPasswordForm === confirmNewPasswordForm){
                        let payload = {
                            id: this.prestataireAuthentifier["id_personne"],
                            mdp: newPasswordForm
                        }
                        await this.changePassword(payload);
                        this.$router.push('/page_prestataire/' + this.prestataireAuthentifier["id_personne"]);
                    }
                    else {
                        this.clearConfirmMdp();
                        alert("Les mots de passe ne correspondent pas");
                    }
                }
                else {
                    this.clearConfirmMdp();
                    alert(this.translate('remplirchamp'));
                }
            },
            clearConfirmMdp() {
                document.getElementById('confirmNewPassword').value = '';
            },
            verifNewPassword() {
                let regexPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
                let elem = document.getElementById('newPassword');
                if (regexPassword.test(elem.value)) {
                    this.correctNewPassword = true;
                    this.colorVert(elem);
                    this.clearMdpIncorrect();
                } else {
                    this.correctNewPassword = false;
                    this.colorRouge(elem);
                    this.mdpIncorrect();
                }
            },
            verifNewConfirmPassword() {
                let regexPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
                let elem = document.getElementById('confirmNewPassword');
                if (regexPassword.test(elem.value)) {
                    this.correctConfirmNewPassword = true;
                    this.colorVert(elem);
                    this.clearMdpIncorrect();
                } else {
                    this.correctConfirmNewPassword = false;
                    this.colorRouge(elem);
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
                document.getElementById('incorrectNewPassword').innerHTML = this.translate('mdpincorrect');
            },
            clearMdpIncorrect() {
                document.getElementById('incorrectNewPassword').innerHTML = '';
            },
            translate(prop) {
                return this[this.lang][this.lang][prop];
            },
        },
        computed: {
            ...mapState('authentifierStore',['prestataireAuthentifier']),
            ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
        },   
    }
</script>

<style scoped>

.authentificationChange {
    background-color: rgb(48, 15, 65);
    height: 100vh;
    width: 100vw;
    padding-top: 25vh;
    backdrop-filter: blur(0.5rem);
}

#changePasswordBox {
    padding-top: 4%;
    padding-bottom: 4%;
    width: 30%;
    height: 45%;
    margin-left: 35%;
    margin-top: 200px;
    border: solid 1px palevioletred;
    border-radius: 10px;
    background-color: mediumpurple;
    filter: drop-shadow(0 0 10rem palevioletred);
}

label {
    display: block;
    margin-top: 10px;
    text-align: center;
}

input {
    width: 80%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
    margin-left: 10%;
}

input:focus {
    outline: none;
    filter: drop-shadow(0 0 0.4rem rgb(240, 38, 105));
}

#incorrectNewPassword {
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