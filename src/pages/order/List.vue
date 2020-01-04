<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="所有订单" name="first">
            <el-table :data="orders">
            <el-table-column prop="id" label="订单编号"></el-table-column>
            <el-table-column prop="orderTime" label="下单时间"></el-table-column>
            <el-table-column prop="total" label="总价"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column prop="customerId" label="顾客id"></el-table-column>
            <el-table-column fixed="right" label="操作">
                <template v-slot="slot">
                    <a href="" @click.prevent="getOrderLinesByOrderId">详情</a>
                </template>
            </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="待支付" name="second"></el-tab-pane>
        <el-tab-pane label="待派单" name="third"></el-tab-pane>
        <el-tab-pane label="待接单" name="fourth"></el-tab-pane>
        <el-tab-pane label="待服务" name="fourth"></el-tab-pane>
        <el-tab-pane label="待确认" name="fourth"></el-tab-pane>
        <el-tab-pane label="已完成" name="fourth"></el-tab-pane>
        </el-tabs>        
        <!-- 表格 -->
        
        <!-- /表格 -->
    </div>
</template>
<script>
import request from '@/utils/request'
import querystring from 'querystring'
export default {
    methods:{
        getOrderLinesByOrderId(){

        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        loadData(){
            let url = "http://134.175.154.93:6677/order/findAll"
            request.get(url).then((response)=>{
            //将查询结果设置到product中,this指向外部函数的this
            this.orders = response.data;
        })
        },
    },
    data(){
        return{
            activeIndex1: '1',
            activeIndex2: '2',
            activeIndex3: '3',
            activeIndex4: '4',
            activeIndex5: '5',
            activeIndex6: '6',
            activeIndex7: '7',
            visible:false,
            orders:[],
            form:{               
            }            
        }
    },
    created(){
            //在页面加载出来时加载数据
            this.loadData();
        },
}
</script>
<style lang="stylus" scoped>

</style>