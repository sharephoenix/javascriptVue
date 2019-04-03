<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import xhbSdk from '../../utils/xhb-js-sdk.js'
export default {
  name: 'XHBMessage',
  props: ['customAction'],
  data () {
    return {
      log: '这里是显示的 log',
      buttonTitle: 'default',
      moduleAction: {
        module: 'XHBMessage',
        event: '',
        params: ''
      }
    }
  },
  watch: {
    customAction (res) {
      this.log = '这里是显示的 log'
      if (res === 'a-1') {
        const message = this.getMessage()
        this.buttonTitle = 'forwardMessage'
        this.moduleAction.event = 'forwardMessage'
        this.moduleAction.params = message
      }
    }
  },
  methods: {
    async customClick () {
      this.log = await xhbSdk.useJsbridge(this.moduleAction) || '请填写相关方法参数'
    },
    getMessage () {
      return {
        'category': 'NOTICE_MESSAGE',
        'id': '5c7faefbb78b0d0001780d30',
        'isRoomDismissed': false,
        'from': 'BLACKBOARD',
        'unreadCount': 0,
        'observer': false,
        'sender': {
          'username': '',
          'subject': '',
          'classroomRole': 'SPEAKABLE',
          'id': '5b585721f284de7fd137ff8e',
          'pinyin': 'ce shi',
          'userId': '',
          'notifierUserId': '',
          'userType': 'COMMON',
          'realname': '',
          'school': '',
          'verifyMessage': '',
          'avatar': '',
          'timestamp': 0,
          'speakableInClassroom': true,
          'email': '',
          'displayName': '侧室',
          'topicSpeakCount': 0,
          'role': 'TEACHER',
          'address': '',
          'mobile': '13506118446'
        },
        'notice': {
          'fileUpload': false,
          'code': 0,
          'content': '送OK你咯公司磨破哦你你哦婆婆哦你哦婆婆破哦破哦你你你哦哦你你哦',
          'title': '',
          'isFromCache': false
        },
        'isReceiptExpired': true,
        'deliveryTime': 0,
        'createTime': 1551871739637,
        'timestamp': 1551871739637,
        'identifier': '',
        'doNotDisturb': false,
        'receipt': {
          'received': false,
          'isObserver': false,
          'total': 5,
          'receipted': 0,
          'feedbacked': 0
        },
        'senderId': '5b585721f284de7fd137ff8e',
        'classroomId': '5bc57a97e368b94caad8508a',
        'classroom': {
          'speakableInClassroom': true,
          'classShareToken': '',
          'notifierTopicId': '',
          'lastUpdateTime': 1541088017000,
          'grade': '',
          'mutualDisclosure': true,
          'classNo': '',
          'remindTime': 0,
          'school': '南京西路街道社区党校',
          'code': '010267',
          'managerId': '5b57e3b5f284de0589bd3723',
          'joinState': 'JOINED',
          'touchTime': '1539668631000',
          'vip': false,
          'stage': '',
          'badgeId': 'http://growthtest-1252817547.image.myqcloud.com/201810/8284A1B7-DB32-456D-9E5E-8E86868AF629.jpg',
          'badgeType': 'CUSTOM',
          'teacherName': '马上就到家🎉🍾️🍾️🚔🚨',
          'subject': '幼教',
          'membersCount': 0,
          'bgImage': '',
          'name': '你们是谁了！',
          'hide': true,
          'id': '5bc57a97e368b94caad8508a',
          'role': 'SPEAKABLE',
          'locking': false
        }
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .body {
    background-color: lightgray;
    height: 100%;
    border-radius: 5px;
  }

  .log-cls {
    background-color: aliceblue;
    width: 100%;
  }
</style>

