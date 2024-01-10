<template>
    <div>
        <h2>Messages</h2>
        <div v-for="message in messages" :key="message.id_contact">
            <h3>{{ message.mail_client }}</h3>
            <p>{{ message.message_client }}</p>
            <button @click="deleteMessage(message.id_contact)">Supprimer</button>
        </div>
    </div>
</template>

<script>
import { deleteContact } from '@/axiosFunctions/contactAxios';
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
}
</script>

<style scoped>

</style>