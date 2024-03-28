<script>
  import dayjs from 'dayjs';
  export default {
    data() {
      return {
        currentDate: '',
        currentTime: ''
      };
    },
    mounted() {
      this.currentDate = dayjs().format('YYYY-MM-DD');
      this.currentTime = dayjs().format('HH:mm:ss');
    }
  };
</script>
<template>
  <header>
    <div v-bind="date" class="font-sans">{{ currentDate }}</div>
    <div v-bind="time" class="font-sans">{{ currentTime }}</div>
  </header>
</template>