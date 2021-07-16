<template>
    <div class="main">
        <div class="header">
            <div><img src="../assets/back.png" alt=""></div>
            <div><span>返回</span></div>
        </div>
        <div class="mv" @click="showPopup">
            <img src="../assets/mv.png" alt="">
        </div>
        <div class="mv_title" v-for="(item,index) in mvText">
            <div class="top_text">
                <span>[视频]</span>
                <span>{{item.title}}</span>
            </div>
            <div class="bottom_text">
                <span>{{item.price}}</span>
                <span>免费试看</span>
                <span>{{item.time}}</span>
            </div>
            <div class="hr"></div>
        </div>
        <div class="teacher">
            <div>
                <span>授课老师</span>
            </div>
            <div class="flexbox">
                <div class="box" v-for="(item,index) in teacher">
                    <div>
                        <img :src="item.img" alt="">
                    </div>
                    <div>
                        <span>{{item.name}}</span><br>
                        <span>{{item.title}}</span>
                    </div>
                    <div>
                        <img src="../assets/toteacher.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="class_title">
            <span>{{classTitle}}</span>
        </div>
        <div class="chapter"  v-for="(item,index) in chapter">
            <div class="total">
                <div>
                    <img src="../assets/play.png" alt="">
                </div>
                <div class="text"  >
                    <span>{{item.title}}</span>
                    <span>课程时长：{{item.time}}</span>
                </div>
                <div>
                    <img src="../assets/button-play.png" alt="">
                </div>
            </div>
            <div class="hr"></div>

        </div>
        <div class="lockchapter"  v-for="(item,index) in lockchapter">
            <div class="total">
                <div>
                    <img src="../assets/unplay.png" alt="">
                </div>
                <div class="text"  >
                    <span>{{item.title}}</span>
                    <span>课程时长：{{item.time}}</span>
                </div>
                <div>
                    <img src="../assets/button-lock.png" alt="">
                </div>
            </div>
            <div class="hr"></div>

        </div>
<!--        vant插件区-->
        <van-popup v-model="show">
            <div class="popup">
                <h6>该视频不提供试看</h6>
                <span>您可咨询“春华教育”继续学习</span>
                <span>联系电话：（校区电话）</span>
                <van-button type="info">信息按钮</van-button>
            </div>
        </van-popup>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mvText: [
                    {
                        title: '学前儿童心理卫生与辅导',
                        price: '¥8997',
                        time: '10064人已试看',
                    }
                ],
                mvUrl: '',
                teacher: [
                    {
                        img:require('../assets/teacher2.png'),
                        name:'王福山',
                        title:'主讲老师',
                    },
                    {
                        img:require('../assets/teacher1.png'),
                        name:'谈涛',
                        title:'主讲老师',
                    },

                ],
                classTitle: '第一章 什么是儿童心理卫生',
                // 可以观看课程
                chapter: [
                    {
                        title:'学生学习会计的兴趣',
                        time:'0:05:43',
                    },
                    {
                        title:'学生学习会计的兴趣',
                        time:'0:05:43',
                    },
                    {
                        title:'学生学习会计的兴趣',
                        time:'0:05:43',
                    }

                ],
                // 不可观看课程
                lockchapter: [
                    {
                        title:'学生学习会计的兴趣',
                        time:'0:05:43',
                    },
                    {
                        title:'学生学习会计的兴趣',
                        time:'0:05:43',
                    },
                    {
                        title:'学生学习会计的兴趣',
                        time:'0:05:43',
                    }

                ],
                //弹框设置
                show: false,

            }
        },
        methods:{
            showPopup() {
                this.show = true;
            },
        }
    }
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    .header {
        width: 375px;
        height: 40px;
        background: #FFFFFF;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.08);
        opacity: 1;
        display: flex;
        justify-content: left;
        align-items: center;

        >div:nth-child(1) {
            margin-left: 14px;
        }

        >div:nth-child(2) {
            margin-left: 11px;

            >span {
                height: 20px;
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 400;
                line-height: 22px;
                color: #A2A2A2;
                opacity: 1;
            }
        }

    }

    .mv_title {
        .top_text {
            span:nth-child(1) {
                height: 25px;
                font-size: 18px;
                font-family: PingFang SC;
                font-weight: bold;
                line-height: 25px;
                color: #04A7EC;
                opacity: 1;
                margin-left: 10px;
            }

            span:nth-child(2) {
                height: 25px;
                font-size: 18px;
                font-family: PingFang SC;
                font-weight: bold;
                line-height: 25px;
                color: #333333;
                opacity: 1;
                margin-left: 10px;
            }
        }

        .bottom_text {
            span:nth-child(1) {
                height: 22px;
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: bold;
                line-height: 22px;
                color: #999999;
                opacity: 1;
                margin-left: 10px;
                text-decoration: line-through;

            }

            span:nth-child(2) {
                height: 22px;
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 400;
                line-height: 22px;
                color: #FF6666;
                opacity: 1;
                margin-left: 10px;

            }

            span:nth-child(3) {
                height: 20px;
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 400;
                line-height: 20px;
                color: #999999;
                opacity: 1;
                margin-left: 135px;

            }
        }

        .hr {
            width: 355px;
            height: 1px;
            background: #F5F5F5;
            opacity: 1;
            margin: 10px 10px 0 10px;
        }
    }

    .teacher {
        div:nth-child(1) > span {
            height: 20px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            line-height: 20px;
            color: #333333;
            opacity: 1;
            margin-left: 10px;
        }
        .flexbox{
            display: flex;
            margin-top: 8px;
            /*老师信息盒子*/
            .box {
                margin-left: 10px;
                width: 146px;
                height: 60px;
                background: #F5F5F5;
                opacity: 1;
                border-radius: 4px;
                display: flex;
                /*头像区*/
                div:nth-child(1){
                    margin: 10px 0 10px 10px;
                    width: 146px;
                    background: #F5F5F5;
                    opacity: 1;
                    border-radius: 4px;
                }
                /*名字+职位*/
                div:nth-child(2){
                    margin: 12px 0 0 10px;
                    width: 200px;
                    font-size: 14px;
                    >span:nth-child(1){
                        width: 56px;
                        height: 20px;
                        font-size: 14px;
                        font-family: PingFang SC;
                        font-weight: bold;
                        line-height: 20px;
                        color: #333333;
                        opacity: 1;
                    }
                    >span:nth-child(3){
                        width: 40px;
                        height: 14px;
                        font-size: 10px;
                        font-family: PingFang SC;
                        font-weight: 400;
                        line-height: 14px;
                        color: #999999;
                        opacity: 1;
                        margin-top: 2px;
                    }
                }
                /*按钮*/
                div:nth-child(3){
                    margin-top: 5px;
                }
            }
        }

    }

    .class_title{
        margin-top: 12px;
        height: 50px;
        background: #F5F5F5;
        opacity: 1;
        >span{
            margin: 14px 0 0 12px;
            width: 197px;
            height: 22px;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            line-height: 22px;
            color: #333333;
            opacity: 1;
        }
    }

    .chapter{
        width: 375px;
        height: 72px;
        background: #FFFFFF;
        opacity: 1;
        .total{
            display: flex;
            >div:nth-child(1){
                margin: 10px 0 0 10px;
            }
            .text{
                width: 144px;
                margin: 14px 0 0 14px;
                font-size: 0;
                >span:nth-child(1){
                    width: 144px;
                    height: 22px;
                    font-size: 16px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    line-height: 22px;
                    color: #04A7EC;
                    opacity: 1;
                }
                >span:nth-child(2){
                    margin-top: 4px;
                    width: 102px;
                    height: 17px;
                    font-size: 12px;
                    font-family: PingFang SC;
                    font-weight: 400;
                    line-height: 17px;
                    color: #04A7EC;
                    opacity: 1;
                }
            }
            >div:nth-child(3){
                margin: 14px 0 0 109px ;
            }


        }
        .hr{
            margin: 15px 10px 0 10px;
            width: 355px;
            height: 1px;
            background: #F5F5F5;
            opacity: 1;
        }
    }
    .lockchapter{
        width: 375px;
        height: 72px;
        background: #FFFFFF;
        opacity: 1;
        .total{
            display: flex;
            >div:nth-child(1){
                margin: 10px 0 0 10px;
            }
            .text{
                width: 144px;
                margin: 14px 0 0 14px;
                font-size: 0;
                >span:nth-child(1){
                    width: 144px;
                    height: 22px;
                    font-size: 16px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    line-height: 22px;
                    color: #999999;
                    opacity: 1;
                }
                >span:nth-child(2){
                    margin-top: 4px;
                    width: 102px;
                    height: 17px;
                    font-size: 12px;
                    font-family: PingFang SC;
                    font-weight: 400;
                    line-height: 17px;
                    color: #999999;
                    opacity: 1;
                }
            }
            >div:nth-child(3){
                margin: 14px 0 0 134px ;
            }


        }
        .hr{
            margin: 15px 10px 0 10px;
            width: 355px;
            height: 1px;
            background: #F5F5F5;
            opacity: 1;
        }
    }
    .popup{
        width: 300px;
        height: 244px;
        background: #FFFFFF;
        opacity: 1;
        border-radius: 10px;
    }
</style>