<template>
  <div>
    <div class="container">
      <div class="row markdown-body">
        <div class="col-sm-8">
          <h2>Committers</h2>
          <SingleContributor v-for="(con,index) in conList" :key="'1' + index" :avatar="con.avatar" :name="con.name"
                             :org="con.org" :role="con.role" :id="con.id" :date="con.date"></SingleContributor>
          <h2>Contributors who submit PRs</h2>
          <SingleContributor v-for="(con,index) in conWithPRList" :key="'2' + index" :avatar="con.avatar" :name="con.name"
                             :org="con.org" :role="con.role" :id="con.id" :date="con.date"></SingleContributor>
          <h2>Contributors who submit issues</h2>
          <SingleContributor v-for="(con,index) in conWithIssueList" :key="'3' + index" :avatar="con.avatar" :name="con.name"
                             :org="con.org"></SingleContributor>
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
          role: 'Committer and PPMC member',
          org: 'Tsinghua University'
        }, {
          avatar: 'xdh.jpeg',
          name: 'Xiangdong Huang',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'hxd',
          date: '2017-01-01'
        }, {
          name: 'Jun Yuan',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'yuanjun',
          date: '2017-01-01'
        }, {
          name: 'Chen Wang',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
        }, {
          avatar: 'jlq.png',
          name: 'Jialin Qiao',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'qiaojialin',
          date: '2017-01-01'
        }, {
          name: 'Jinrui Zhang',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'xingtanzjr',
          date: '2017-01-01'
        }, {
          name: 'Rong Kang',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'kangrong',
          date: '2017-01-01'
        }, {
          name: 'Tian Jiang',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'jiangtian',
          date: '2017-01-01'
        }, {
          name: 'Shuo Zhang',
          role: 'Committer and PPMC member',
          org: 'K2Data Company',
          id: 'shuozhang',
          date: '2017-01-01'
        }, {
          name: 'Lei Rui',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'leirui',
          date: '2017-01-01'
        }, {
          name: 'Rui Liu',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'liurui',
          date: '2017-01-01'
        }, {
          name: 'Gaofei Cao',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'caogaofei',
          date: '2017-01-01'
        }, {
          name: 'Kun Liu',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'liukun',
          date: '2017-01-01'
        }, {
          name: 'Xinyi Zhao',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'zhaoxinyi',
          date: '2017-01-01'
        }, {
          name: 'Yi Xu',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'dope',
          date: '2017-01-01'
        }, {
          name: 'Dongfang Mao',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'east',
          date: '2017-01-01'
        }, {
          name: 'Tianan Li',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'lta',
          date: '2017-01-01'
        }, {
          name: 'Yue Su',
          role: 'Committer and PPMC member',
          org: 'Tsinghua University',
          id: 'suyue',
          date: '2017-01-01'
        }, {
          name: 'Hui Da',
          role: 'Committer and PPMC member',
          org: 'Lenovo',
        } ,{
          name: 'Jack Tsai',
          role: 'Committer',
          id: 'tsaitsunghan',
          date: '2019-01-01'
        } ],
        conWithPRList: [{
          avatar: 'https://avatars1.githubusercontent.com/u/19167280?s=400&u=b7fa4acd5b6161283946c2ecb5e4837b6f137a1b&v=4',
          name: 'Zesong Sun',
          org: 'Tsinghua University'
        }],
        conWithIssueList: []
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
