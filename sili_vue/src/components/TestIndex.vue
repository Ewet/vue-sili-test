<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            API
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            TEST
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            WORK
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu :accordion="true" :active-name='active' @on-select="route" theme="light" width="auto" :open-names="menus">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                render
                            </template>
                            <MenuItem name="1-1" to="/render">render 使用</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                vue-route
                            </template>
                            <MenuItem name="2-1" to="/query/456">路由参数问题</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '24px'}">
                    <Content style="height: 680px;">
                        <Card style="height: 100%;">
                            <router-view/>
                        </Card>
                    </Content>
                </Layout>
            </Layout>
            <Footer class="layout-footer-center">Ewet &copy; Test</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                active: '1-1',
                menus: this.$route.meta.rout.substring(0,1).split(),
            }
        },
        mounted(){
            this.active = this.$route.meta.rout;
        },
        methods:{
            route(name){
                // this.$router.push({path: '/'+name});
            }
        },
        computed:{
            // 路由加载之前请求
        }
    }
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
    background: #515a6e;
    color: #fff;
}
</style>