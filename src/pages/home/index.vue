<template>
    <div>
        <Carousel />
        <Search />

        <el-row :gutter="20">
            <el-col :span="20" :offset="0">
                <Level />
                <region />
            </el-col>
            <el-col :span="4" :offset="0">456</el-col>
        </el-row>

    </div>
</template>

<script setup lang="ts">
import Carousel from './carousel/index.vue';
import Search from './search/index.vue'
import Level from "./level/index.vue";
import Region from "./region/index.vue";
</script>

<style scoped lang="scss">
.imag {
    width: 100%;
    height: 350px;
}
</style>