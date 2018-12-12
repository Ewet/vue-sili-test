<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="0"  @on-select="goPage">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem v-for="(item, index) in menuList" :name="(index)" :key="index+'m'" >
                            <Icon type="ios-navigate"></Icon>
                            {{item.name}}
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
                                基本框架
                            </template>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                工作便利
                            </template>
                            <!-- <MenuItem name="Attribute">路由的跳转和传参</MenuItem> -->
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                常用插件
                            </template>
                            <!-- <MenuItem name="Attribute">路由的跳转和传参</MenuItem> -->
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
                active: this.$route.name,
                menuList: [
                    {name: 'API', url: 'index.html'},
                    {name: 'TEST', url: 'test.html'},
                    {name: 'API', url: 'index.html'},
                    {name: 'API', url: 'index.html'},
                ]
            }
        },
        methods:{
            route(name){
                this.$router.push({
                    name: name
                });
            },
            goPage (name) {
                location.href = this.menuList[name].url;
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