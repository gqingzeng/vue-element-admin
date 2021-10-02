export default {
  route: {
    website: '蜘蛛IP',
    dashboard: '首页',
    createGuide: '创建向导',
    product: '代理产品',
    'product-globalDynamicHouse': '全球动态住宅',
    'product-globalStaticHouse': '全球静态住宅',
    'product-globalComputerRoom': '全球数据中心',
    'product-buy': '购买套餐',
    bill: '账单管理',
    'bill-rech': '在线充值',
    'bill-consume': '消费记录',
    'bill-relist': '充值记录',
    'bill-invoice': '发票管理',
    certification: '实名认证',
    'certification-personal': '个人认证',
    'certification-enterprise': '企业认证',
    countryList: '国家代码',
    'extension': '合伙人计划',
    profile: '个人中心'
  },
  navbar: {
    dashboard: '首页',
    logOut: '退出登录',
    profile: '个人中心'
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
    uploadSizeError: '上传大小不能超过',
    more: '更多',
    close: '关闭',
    submit: '提交',
    operate: '操作',
    renew: '续费',
    batchRenew: '批量续费',
    ip: 'IP',
    port: '端口',
    account: '账号',
    password: '密码',
    country: '地区',
    countryPlaceholder: '请选择地区',
    protocol: '协议',
    delete: '删除',
    useHelp: '使用教程',
    flowChat: '流量统计图',
    tips: '提示',
    batchDelete: '批量删除',
    minute: '分钟',
    isDiff: '是否去重',
    yes: '是',
    no: '否',
    diffCycle: '去重周期',
    subAccountNum: '子账号数量',
    ipTimeLen: 'IP时长',
    ipTimeLenPlaceholder: '请输入IP时长',
    infinite: '无限',
    confirmDelete: '确定要删除吗？',
    deleteSuccess: '删除成功',
    generateSuccess: '生成成功',
    confirmRenew: '确定要续费吗？',
    globalDynamicHouse: '全球动态住宅',
    globalStaticHouse: '全球静态住宅',
    globalComputerRoom: '全球数据中心',
    useFlowCharging: '按流量计费',
    useTimeCharging: '按时间计费',
    useIpNumCharging: '按IP数量计费',
    proxyType: '代理类型',
    chargingType: '计费方式'
  },
  components: {
    productBox: {
      ipTotalDesc: '9800w+ip池',
      flowInfo: '可使用流量：{0}GB',
      subAccountNum: '子账号数量：{0}个',
      subAccountThread: '子账号线程：{0}个',
      infiniteFlow: '无限流量',
      infiniteTime: '不限制使用时间',
      infiniteSubAccountNun: '不限制子账号数量',
      infiniteSubAccountThread: '不限制子账号线程',
      ipUnitPrice: '￥{0}/个',
      originalPrice: '原价￥{0}/IP',
      discountPrice: '套餐折扣价￥{0}/IP',
      globalStaticHouseTimeTips: '购买数量达到套餐要求，自动获得套餐折扣价',
      buyBtnText: '去购买',
      buyMessage: '您确定要购买{0}吗？',
      buySuccess: '购买成功'
    },
    flowChatCard: {
      globalDynamicHouseFlow: '全球动态住宅流量使用',
      globalStaticHouseFlow: '全球静态住宅流量使用',
      globalComputerRoomFlow: '全球数据中心流量使用',
      xAxisName: '天数（日）',
      yAxisName: '流量（GB）'
    }
  },
  login: {
    passwordTitle: '密码登录',
    captchaTitle: '验证码登录',
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
  register: {
    mobileRegister: '手机号注册',
    emailRegister: '邮箱注册',
    usernamePlaceholder: '请输入用户名',
    passwordPlaceholder: '请设置较复杂的密码',
    passwordConfirmPlaceholder: '请再次确认密码',
    emailPlaceholder: '请输入邮箱',
    emailErrorPlaceholder: '请输入正确的邮箱',
    mobilePlaceholder: '请输入手机号',
    mobileErrorPlaceholder: '请输入正确的手机号',
    codePlaceholder: '请输入验证码',
    registerBtn: '注册',
    refPlaceholder: '推广ref',
    agreementTips: '注册即代表您同意{0}和{1}',
    accountAgreement: '《用户协议》',
    privacyAgreement: '《隐私协议》',
    hasAccount: '已有账号？',
    goLogin: '去登录'
  },
  website: {
    dashboard: '首页',
    product: '产品',
    price: '价格',
    scenario: '使用场景',
    help: '文档帮助',
    login: '登录',
    register: '注册',
    bannerTitle: `为大数据产业，
跨境电商产业提供优质可靠的代理网络服务`,
    bannerTips: `9800w+住宅ip池时刻为您准备
计费灵活，价格低至3￥/GB`,
    cloudArchitecture: '云端架构',
    highAnonymity: '高匿名',
    highAvailability: '高可用',
    highConcurrency: '高并发',
    seePackage: '查看套餐',
    freeTrial: '免费试用',
    selectionReason: {
      title: '为什么要选择蜘蛛IP?',
      api: 'API',
      apiTips: '简单易用的API，高匿名，高可用，高并发',
      country: '230+ 国家/地区',
      countryTips: '覆盖全球230+国家和地区的真实，优质的家庭住宅IP',
      num: '9500 万的住宅 IP',
      numTips: '这些都是干净的房子 IP，它可以很好地完成这项工作。',
      flexible: '灵活的计费模式',
      flexibleTips: '极度适合中小用户',
      customized: '可按需求定制',
      customizedTips: '随心所欲，尽情搭配',
      time: '7x24小时',
      timeTips: '贴心服务'
    },
    scenarioBox: {
      title: '经典用例和场景',
      subTitle: '用例和场景',
      ad: '广告验证',
      adTips: '追踪网络并检查广告是否到达正确的受众，提高ROI',
      brand: '品牌保护',
      brandTips: '通过监控您的品牌标识,收集假冒侵权信息,保护您的权益不被侵犯',
      seo: 'SEO优化',
      seoTips: '监控您的网站在搜索引擎全球各地的排名信息，以便更好的优化',
      market: '市场调查',
      marketTips: '从全球各地获取准确全面的市场信息，例如：电商价格，市场新闻，竞争对手情报，方便企业决策',
      ticket: '旅行票价',
      ticketTips: '方便快速地获取世界各地的酒店机票实时数据',
      webTest: '网站测试',
      webTestTips: '通过设置多种环境和参数，更全面地对网站进行多维度的测试',
      financeStat: '金融数据',
      financeStatTips: '批量实时获取股市、期货等市场公开数据',
      more: `更多使用场景
期待您的发掘`
    },
    priceBox: {
      title: '灵活定价',
      subTitle: '多种计费模式和定价，极度适合中小用户',
      moreProductBtn: '更多套餐'
    },
    commonProblem: {
      title: '常见问题'
    },
    cooperativePartner: {
      title: '为超过500家企业提供稳定优质的服务',
      subTitle: '覆盖互联网，金融，大数据，电子商务等多个领域'
    }
  },
  dashboard: {
    balance: {
      title: '金币',
      goRecharge: '去充值',
      createGuideTips: `不知道买什么代理，快使用创建向导试试吧~`,
      createGuide: '创建引导',
      extensionGuideTips: '郑重的邀请您一起分享蜘蛛IP的发展成果。',
      extensionGuide: '合伙人计划'
    },
    notice: {
      title: '通知栏'
    },
    flow: {
      globalDynamicHouse: '全球动态住宅流量使用',
      staticHouse: '静态住宅流量使用',
      xAxisName: '天数（日）',
      yAxisName: '流量（GB）'
    }
  },
  createGuide: {
    documentation: {
      title: '说明文档导航'
    },
    search: {
      title: '创建代理',
      targetWebSiteName: '目标网站名',
      purpose: '用途',
      quantityPerDay: '每天需要的IP数量',
      useDevice: '使用设备',
      onlineQuantity: '同时在线IP数量',
      createProxyBtn: '创建代理信息',
      flow: '每月使用的流量',
      purposePlaceholder: '请选择用途',
      quantityPerDayPlaceholder: '请输入每天需要的IP数量',
      useDevicePlaceholder: '请选择用途使用设备',
      onlineQuantityPlaceholder: '请输入同时在线IP数量',
      flowPlaceholder: '请输入每月使用的流量'
    },
    recommend: {
      title: '根据您的业务需求，推荐您使用',
      otherRecommendTitle: '您也可以尝试其他的代理产品',
      ipTotalDesc: '9800w+ip池',
      subAccountNum: '子账号数量{0}个',
      subAccountThread: '子账号线程{0}个',
      infiniteFlow: '无限流量'
    }
  },
  product: {
    purchasedProduct: '已购买套餐',
    productName: '套餐名称',
    purchaseTime: '购买时间',
    generateSubAccountNum: '可生成子账号数量',
    subAccountThread: '子账号线程',
    expirationTime: '到期时间',
    modifySubAccount: '修改子账号',
    batchExportSubAccount: '批量导出子账号信息',
    statisticsUseFlowCharging: '流量统计',
    usageUseFlowCharging: '共计{0}GB，已用{1}GB',
    residualUseFlowCharging: '剩余流量{0}GB',
    statisticsUseTimeCharging: '流量统计',
    usageUseTimeCharging: '共计{0}GB，已用{1}GB',
    residualUseTimeCharging: '剩余流量{0}GB',
    statisticsUseIpNumCharging: 'IP数量使用统计',
    usageUseIpNumCharging: '共计{0}个，已用{1}个',
    residualUseIpNumCharging: '剩余{0}个',
    generateProxy: '生成代理',
    balanceFlow: '可用流量',
    balanceSubAccount: '可用子账号数量',
    tab: {
      flow: '流量计费',
      time: '时间计费',
      num: '数量计费'
    },
    globalDynamicHouse: {
      title: '全球动态住宅',
      titleBuyBtnText: '购买动态住宅流量包',
      subAccountList: '全球动态住宅子账号列表'
    }
  },
  bill: {
    rech: {
      title: '在线充值',
      rechType: '充值类型',
      presetLabel: '推荐',
      rechBtnText: '充值',
      rechSuccess: '充值成功'
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
        countryPlaceholder: '中国大陆（暂不支持非大陆地区实名认证）',
        name: '姓名',
        namePlaceholder: '请输入姓名',
        idCardNo: '身份证号码',
        idCardNoPlaceholder: '身份证号码',
        mobile: '认证手机号',
        mobilePlaceholder: '认证手机号',
        captcha: '验证码',
        captchaPlaceholder: '请输入验证码',
        getCaptchaBtnText: '获取验证码'
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
        `,
        idCardNoHandPlaceholder: '请上传手持身份证头像面照片',
        idCardNoPositivePlaceholder: '请上传身份证头像面照片',
        idCardNoBackPlaceholder: '请上传手持身份证国辉面照片',
        uploadImageTips: '图片格式要求：jpg、jpeg、png，不超过10M'
      }
    },
    enterprise: {
      title: '企业实名',
      step1: '填写基本信息',
      step2: '认证完成',
      basicInfo: {
        organizationName: '机构名称',
        organizationNamePlaceholder: '请输入机构名称',
        organizationNo: '机构证件号',
        organizationNoPlaceholder: '请输入机构证件号',
        organizationLegalName: '法定代表人名称',
        organizationLegalNamePlaceholder: '请输入法定代表人名称',
        organizationLegalNo: '法定代表人证件号',
        organizationLegalNoPlaceholder: '请输入法定代表人证件号',
        submitBtnText: '提交校验'
      }
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
    title: '个人信息',
    avatar: '头像',
    avatarTips: '点击头像区域上传，且图片不超过2MB',
    username: '用户名',
    usernamePlaceholder: '请输入用户名',
    mobile: '手机号',
    mobilePlaceholder: '请输入手机号',
    email: '邮箱',
    emailPlaceholder: '请输入邮箱',
    goVerify: '去验证',
    verifySuccess: '已验证'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
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
