<script setup>
    import Menubar from 'primevue/menubar';
    import { ref } from 'vue';
</script>

<template>
    <div class="header-menu">
        <div class="menu-link">
            <router-link to="/" class="link">Main Page</router-link>
            <router-link to="/formPage" class="link">Popup Page</router-link>    
        </div>

    </div>

</template>
<script setup></script>

<style>
    .header-menu{
        position: fixed;
        left: 50%;
        top:0;
        transform: translateX(-50%);
        margin-top:5px;
    }
    .menu-link{
        display: flex;
        flex-direction: row;
        gap:15px;
        justify-content: space-around;
        font-size: 20px;
    }
    .link{
        text-decoration: none;
        color: #fff;
        padding: 8px 10px;
        background-color: #6366f1;
        border-radius: 8px;
        width: 150px;
        text-align: center;
    }
    @media (max-width: 600px){
        .link{
            font-size: 14px;
        }
    }
</style>