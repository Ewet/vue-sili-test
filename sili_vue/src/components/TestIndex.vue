<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate" :to="{path: '/index.html'}"></Icon>
                            API
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            测试
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
                    <Menu ref="menu" :accordion="true" :active-name='active' @on-select="route" theme="light" width="auto" :open-names="menus">
                        <!-- name 从1开始，0识别不了 -->
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                render
                            </template>
                            <MenuItem name="render">render 使用</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                vue-route
                            </template>
                            <MenuItem name="attribute">路由的跳转和传参</MenuItem>
                            <!-- <MenuItem name="query">路由</MenuItem> -->
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
        props: {
            menus: {
                type: Array,
                default: () => ['2']
            }
        },
        data() {
            return {
                active: this.$route.name
            }
        },
        methods:{
            route(name){
                this.$router.push({
                    path: '/'+name
                });
            }
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