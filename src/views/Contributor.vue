<template>
  <div>
    <div class="container">
      <div class="row markdown-body">
        <div class="col-sm-8">
          <h2>People</h2>
          <SingleContributor v-for="(con,index) in conList" :key="'1' + index" :avatar="con.avatar" :name="con.name"
                             :org="con.org" :role="con.role" :id="con.id" :date="con.date"></SingleContributor>
        </div>
        <my-sidebar/>
      </div>
    </div>
    <br>
    <br>
    <br>
    <footer-bar/>
  </div>
</template>

<script>
  import Footer from "../components/FooterFixed"
  import SideBar from '../components/SideBar'
  import axios from 'axios'
  import Global from '../components/Global'
  import SingleContributor from '../components/SingleContributor'

  export default {
    name: "Community",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar,
      SingleContributor
    },
    data() {
      return {
        msg: 'Welcome to Community Page',
        md: "",
        toc: "",
        conList: [{
          avatar: 'http://ise.thss.tsinghua.edu.cn/~wangjianmin/jimwang.jpg',
          name: 'Jianmin Wang',
          role: 'PPMC, Committer',
        }, {
          avatar: 'xdh.jpg',
          name: 'Xiangdong Huang',
          role: 'PPMC, Committer',
          id: 'hxd',
          date: '2017-01-01'
        }, {
          name: 'Chen Wang',
          role: 'PPMC, Committer',
          id: 'wangchen',
          date: '2017-01-01'
        }, {
          name: 'Jun Yuan',
          role: 'PPMC, Committer',
          id: 'yuanjun',
          date: '2017-01-01'
        }, {
          avatar: 'jlq.png',
          name: 'Jialin Qiao',
          role: 'PPMC, Committer',
          id: 'qiaojialin',
          date: '2017-01-01'
        }, {
          name: 'Jinrui Zhang',
          role: 'PPMC, Committer',
          id: 'xingtanzjr',
          date: '2017-01-01'
        }, {
          name: 'Rong Kang',
          role: 'PPMC, Committer',
          id: 'kangrong',
          date: '2017-01-01'
        }, {
          name: 'Tian Jiang',
          role: 'PPMC, Committer',
          id: 'jiangtian',
          date: '2017-01-01'
        }, {
          name: 'Shuo Zhang',
          role: 'PPMC, Committer',
          id: 'shuozhang',
          date: '2017-01-01'
        }, {
          name: 'Lei Rui',
          role: 'PPMC, Committer',
          id: 'leirui',
          date: '2017-01-01'
        }, {
          name: 'Rui Liu',
          role: 'PPMC, Committer',
          id: 'liurui',
          date: '2017-01-01'
        }, {
          name: 'Gaofei Cao',
          role: 'PPMC, Committer',
          id: 'caogaofei',
          date: '2017-01-01'
        }, {
          name: 'Kun Liu',
          role: 'PPMC, Committer',
          id: 'liukun',
          date: '2017-01-01'
        }, {
          name: 'Xinyi Zhao',
          role: 'PPMC, Committer',
          id: 'zhaoxinyi',
          date: '2017-01-01'
        }, {
          name: 'Yi Xu',
          role: 'PPMC, Committer',
          id: 'dope',
          date: '2017-01-01'
        }, {
          name: 'Dongfang Mao',
          role: 'PPMC, Committer',
          id: 'east',
          date: '2017-01-01'
        }, {
          name: 'Tianan Li',
          role: 'PPMC, Committer',
          id: 'lta',
          date: '2017-01-01'
        }, {
          name: 'Yue Su',
          role: 'PPMC, Committer',
          id: 'suyue',
          date: '2017-01-01'
        }, {
          name: 'Jack Tsai',
          role: 'Committer',
          id: 'tsaitsunghan',
          date: '2019-01-01'
        }, {
          avatar: 'https://avatars1.githubusercontent.com/u/19167280?s=400&u=b7fa4acd5b6161283946c2ecb5e4837b6f137a1b&v=4',
          name: 'Zesong Sun',
          role: 'Committer',
          id: 'sunzesong',
          date: '2019-12-31'
        }, {
          avatar: 'kfx.jpeg',
          name: 'Kaifeng Xue',
          role: 'Committer',
          id: 'xuekaifeng',
          date: '2019-12-31'
        }, {
          avatar: 'yt.jpg',
          name: 'Yuan Tian',
          role: 'Committer',
          id: 'jackietien',
          date: '2019-12-31'
        }, {
          name: 'Boris Zhu',
          role: 'Committer',
          id: 'geniuspig',
          date: '2019-12-31'
        }, {
          avatar: 'https://avatars1.githubusercontent.com/u/22488084?s=400&u=2ef5ad52a7c4241bf88fb5e45682948b307a7d90&v=4',
          name: 'Jincheng Sun',
          role: 'Committer',
          id: 'jincheng',
          date: '2020-1-30'
        }]
      }
    },
    created() {
    },
    methods: {
      parse(html) {
        return Global.isReadyForPrerender(html)
      }
    }
  }
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  body {
    font-family: Georgia, "Times New Roman", Times, serif;
    color: #555;
  }

  .pager > li > a {
    width: 140px;
    padding: 10px 20px;
    text-align: center;
    border-radius: 30px;
  }

  .blog-footer p:last-child {
    margin-bottom: 0;
  }

  .markdown-body {
    font-size: 16px;
  }

</style>
