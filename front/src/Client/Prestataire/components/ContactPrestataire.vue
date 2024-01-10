<template>
    <div>
        <h2>Messages</h2>
        <div v-for="message in messages" :key="message.id">
            <h3>{{ message.mail }}</h3>
            <p>{{ message.contenu }}</p>
            <button @click="deleteMessage(message.id)">Supprimer</button>
        </div>
    </div>
</template>

<script>
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
            // try {
            //     await deleteMessage(id);
            //     this.updateProps();
            // } catch (error) {
            //     console.log(error);
            // }
            return id;
        },
    },
}
</script>

<style scoped>

</style>