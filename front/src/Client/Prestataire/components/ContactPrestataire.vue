<template>
    <div>
        <h2>Messages</h2>
        <div v-for="message in messages" :key="message.id_contact">
            <h3>{{ message.mail_client }}</h3>
            <p>{{ message.message_client }}</p>
            <button @click="deleteMessage(message.id_contact)">{{translate('supprimer')}}</button>
        </div>
    </div>
</template>

<script>
import { deleteContact } from '@/axiosFunctions/contactAxios';
import {mapState} from "vuex";
export default{
    name: "ContactPrestataire",
    data() {
        return {
        };
    },
    props: {
        messages: Object,
        idPresta: Number,
    },
    methods: {
      translate(prop) {
        return this[this.lang][this.lang][prop];
      },
        updateProps() {
            this.$emit('update:messages', true);
        },
        async deleteMessage(id) {
            try {
                await deleteContact(id);
                this.updateProps();
            } catch (error) {
                console.log(error);
            }
        },
    },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
  }
}
</script>

<style scoped>

</style>