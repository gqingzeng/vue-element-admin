export default {
  route: {
    dashboard: '首页',
    bill: '账单',
    'bill-rech': '在线充值',
    'bill-consume': '消费记录',
    'bill-relist': '充值记录',
    'bill-invoice': '发票管理',
    certification: '实名认证',
    'certification-personal': '个人认证',
    'certification-enterprise': '企业认证',
    countryList: '国家代码',
    'extension': '推广奖励',
    documentation: '文档',
    guide: '引导页',
    permission: '权限测试页',
    rolePermission: '角色权限',
    pagePermission: '页面权限',
    directivePermission: '指令权限',
    icons: '图标',
    components: '组件',
    tinymce: '富文本编辑器',
    markdown: 'Markdown',
    jsonEditor: 'JSON 编辑器',
    dndList: '列表拖拽',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    dragDialog: '拖拽 Dialog',
    dragSelect: '拖拽 Select',
    dragKanban: '可拖拽看板',
    charts: '图表',
    keyboardChart: '键盘图表',
    lineChart: '折线图',
    mixChart: '混合图表',
    example: '综合实例',
    nested: '路由嵌套',
    menu1: '菜单1',
    'menu1-1': '菜单 1-1',
    'menu1-2': '菜单 1-2',
    'menu1-2-1': '菜单 1-2-1',
    'menu1-2-2': '菜单 1-2-2',
    'menu1-3': '菜单 1-3',
    menu2: '菜单 2',
    Table: 'Table',
    dynamicTable: '动态 Table',
    dragTable: '拖拽 Table',
    inlineEditTable: 'Table 内编辑',
    complexTable: '综合 Table',
    tab: 'Tab',
    form: '表单',
    createArticle: '创建文章',
    editArticle: '编辑文章',
    articleList: '文章列表',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: '导出 Excel',
    selectExcel: '导出 已选择项',
    mergeHeader: '导出 多级表头',
    uploadExcel: '上传 Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: '换肤',
    clipboardDemo: 'Clipboard',
    i18n: '国际化',
    externalLink: '外链',
    profile: '个人中心'
  },
  navbar: {
    dashboard: '首页',
    github: '项目地址',
    logOut: '退出登录',
    profile: '个人中心',
    theme: '换肤',
    size: '布局大小'
  },
  login: {
    passwordTitle: '密码登录',
    captchaTitle: '短信登录',
    accountPlaceholder: '请输入您的邮箱/ID',
    passwordPlaceholder: '请输入您的密码',
    mobilePlaceholder: '请输入手机号',
    captchaPlaceholder: '请输入验证码',
    accountRegister: '新用户注册',
    forgetPassword: '忘记密码',
    agreementTips: '登录即代表您同意{0}和{1}',
    accountAgreement: '《用户协议》',
    privacyAgreement: '《隐私协议》',
    logIn: '登录'
  },
  globalVar: {
    search: '搜索',
    index: '序号',
    loading: '加载中',
    saveLoading: '保存中',
    modifyLoading: '更新中',
    refresh: '刷新',
    modify: '修改',
    createTime: '创建时间',
    modifyTime: '修改时间',
    cancel: '取消',
    confirm: '确定',
    saveSuccess: '保存成功',
    modifySuccess: '修改成功',
    orderNo: '订单号',
    amountOfMoney: '金额',
    amountOfMoneyPlaceholder: '请输入金额',
    refund: '退款',
    goodsName: '商品名称',
    orderStatus: '订单状态',
    WeChat: '微信',
    Alipay: '支付宝',
    CDKEY: '卡密',
    CDKEYPlaceholder: '请输入卡密',
    inactiveStatus: '未激活',
    activeStatus: '已激活',
    status: '状态',
    percentage: '比例',
    open: '打开',
    copyLink: '复制链接',
    copySuccessTips: '复制成功',
    balance: '余额',
    withdrawProgress: '提取中',
    withdrawSuccess: '提取成功',
    auditingLoading: '申请中',
    auditingSuccess: '申请成功',
    time: '时间',
    remark: '描述',
    recommend: '推荐',
    preStep: '上一步',
    checkLoading: '校验中',
    checkSuccess: '校验成功',
    uploadError: '上传失败',
    uploadSizeError: '上传大小不能超过'
  },
  bill: {
    rech: {
      title: '在线充值',
      rechType: '充值类型',
      presetLabel: '推荐',
      rechBtnText: '充值'
    },
    relist: {
      title: '充值记录',
      rechTime: '充值时间',
      rechAmount: '充值金额'
    },
    consume: {
      title: '消费记录',
      consumeTime: '消费时间',
      consumeAmount: '消费金额'
    },
    invoice: {
      explain: {
        title: '发票管理',
        cycle: '开票周期',
        cycleDesc: '每账号每月可开票一次，每次可选20张充值订单开票，目前为手动开票，提交最长一周可下载。',
        type: '发票类型',
        typeDesc: '只可开具新版OFD增值税普通电子发票（非字纸质、非PDF，同样为合法发票）。',
        note: '特别说明',
        noteDesc: '充值订单只有完结后才可开发票，一旦开局发票的充值订单不接受任何理由的退款。'
      },
      company: {
        title: '开票信息',
        companyName: '公司名称',
        identifier: '纳税人识别号',
        modifyTips: '一年可修改一次开票信息，\n我方不承担错误填写带来的损失。',
        addCompanyBtn: '添加公司',
        notCompanyDesc: '您还未添加公司',
        editDialog: {
          createTitle: '新增开票信息',
          modifyTitle: '修改开票信息',
          companyNameLabel: '名称',
          companyNamePlaceholder: '请输入名称',
          identifierLabel: '纳税人识别号',
          identifierPlaceholder: '请输入纳税人识别号',
          addressLabel: '地址',
          addressPlaceholder: '请输入纳税人识别号',
          phoneLabel: '电话',
          phonePlaceholder: '请输入电话',
          bankLabel: '开户行',
          bankPlaceholder: '请输入开户行',
          accountLabel: '账户',
          accountPlaceholder: '请输入账户'
        }
      },
      rechargeLog: {
        title: '可开发票的充值',
        invoiceAmount: '可开票金额',
        invoicingBtn: '开票',
        selectedMoney: '选中金额',
        selectedCount: '选中数量',
        invoicingConfirmTitle: '请确认您的开票名称',
        addInvoiceLoading: '开票中',
        addInvoiceSuccess: '开票成功'
      }
    }
  },
  certification: {
    personal: {
      title: '个人实名',
      step1: '填写基本信息',
      step2: '选择认证方式',
      step3: '认证完成',
      submitBtnText: '提交校验',
      basicInfo: {
        country: '地区',
        countryPlaceholder: '中国大陆（暂不支持非大陆地区实名认证）',
        name: '姓名',
        namePlaceholder: '请输入姓名',
        idCardNo: '身份证号码',
        idCardNoPlaceholder: '身份证号码',
        mobile: '认证手机号',
        mobilePlaceholder: '认证手机号',
        captcha: '验证码',
        captchaPlaceholder: '请输入验证码',
        getCaptchaBtnText: '获取验证码',
        checkLoading: '校验中'
      },
      checkMethod: {
        tips: '您的信息已基本核实，请选择一种方式完成后续认证',
        alipayCheckTitle: '支付宝认证',
        alipayCheckSubTitle: '（即时完成）',
        alipayCheckTips: '打开支付宝扫描二维码完成认证',
        idImageCheckTitle: '身份证认证',
        idImageCheckSubTitle: '（即时完成）',
        idImageCheckTips: '需要上传${}手持二代身份证照片+身份证正反面照片',
        backBasicInfo: '返回修改基本信息',
        alipayQrcodeTips: '请{0}打开支付宝扫描二维码完成认证',
        idImageCheckCautions: '注意事项',
        idImageCheckCautionsTips: `1.您提供的证件信息将受到严格保护，仅用于身份验证，未经本人许可不会用于其他用途
          2.证件照不清晰或与输入的信息不匹配，将导致实名认证被驳回
          3.需本人手持二代身份证照片+身份证正反面照片
          4.证件必须在有效期内，有效期需在一个月以上
          5.本人手持正面露脸，五官清晰可辨
          6.证件照上信息需完整且清晰可辨（无反光、遮挡、水印、证件套、logo等）
          7.申请人填写的“真实姓名”和“证件号码”需和提交证件照片信息一致
          8.证件照必须真实拍摄，不能使用复印件
          9.确保照片完整（不缺边角），证件周围不允许加上边框（如：加上红框等）
        `
      }
    },
    enterprise: {
      title: '企业实名'
    }
  },
  countryList: {
    searchBox: {
      header: '国家代码查询',
      placeholder: '请输入国家名称'
    },
    countryNameLabel: '国家或地区名称',
    countryCodeLabel: '国家代码'
  },
  extension: {
    title: '推广奖励',
    status: {
      inactive: '申请激活',
      auditing: '审核中',
      active: '激活成功',
      auditFailed: '审核失败'
    },
    tabs: {
      summary: '概述',
      withdraw: '提取推广奖励',
      settlementLog: '结算记录',
      unsettled: '未结算记录',
      invalidLog: '无效记录'
    },
    summary: {
      extractable: '可提取',
      unsettled: '未结算',
      monthExtensionTotal: '月推广额',
      monthExtensionTotalTips: '（近三十日的有效推广）',
      weekExtensionTotal: '周推广额',
      weekExtensionTotalTips: '（近七日的有效推广）',
      chainTotal: '周环比',
      chainTotalTips: '（近七日与上七日比）',
      extensionLinkTitle: '参数访问',
      copyLinkTips: '您只需要在本站任何URL上，加上参数{0}，值为{1}。'
    },
    withdraw: {
      withdrawTotalTips: '目前您已累计提取',
      withdrawAlipay: '提取到支付宝',
      withdrawAlipayTips: '提款金额必须大于等于¥100。',
      alipayNo: '账号',
      alipayNoPlaceholder: '支付宝账号',
      alipayNoRequiredTips: '请输入姓名',
      alipayName: '姓名',
      alipayNamePlaceholder: '需要与支付宝实名认证一致',
      alipayNameRequiredTips: '请输入姓名',
      alipayBtnText: '支付宝提现',
      withdrawBalance: '提取到余额',
      withdrawBalanceTips: '提款到余额可为任意金额，一旦转移至余额，将无法再取出。\n提款到余额可获得对应的积分和经验。',
      withdrawLog: '提款记录',
      withdrawTime: '提取时间',
      paymentTime: '支付时间',
      withdrawType: '目标'
    }
  },
  profile: {
    title: '个人信息'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    addRole: '新增角色',
    editPermission: '编辑权限',
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。',
    delete: '删除',
    confirm: '确定',
    cancel: '取消'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定'
  },
  example: {
    warning: '创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用   window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    tagsView: '开启 Tags-View',
    fixedHeader: '固定 Header',
    sidebarLogo: '侧边栏 Logo'
  }
}
