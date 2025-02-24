<template>
    <div class="title-container">
      <span class="title-text">{{ text }}</span>
      <div class="title-line"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .title-container {
    display: flex;
    align-items: center;
    white-space: nowrap;
    gap: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  .title-text {
    font-weight: bold;
    color: #0047ab; /* Adjust to match your design */
    font-size: 1.2rem;
  }
  
  .title-line {
    flex-grow: 1;
    height: 2px;
    background-color: #ccc; /* Adjust for design */
    margin-right: 25px;
  }
  </style>
  