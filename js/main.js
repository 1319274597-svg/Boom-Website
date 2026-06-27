
/* ============================================================
   BOOM MEDIA ASIA - Main JavaScript
   Multi-language (ZH/EN/TH), modal, interactions
   ============================================================ */

(function() {
  'use strict';

  // ==================== LANGUAGE DATA ====================
  const i18n = {
    zh: {
      nav: { about: '关于我们', capability: '核心能力', strength: '硬实力', talent: '达人矩阵', clients: '合作客户', cases: '案例中心', contact: '联系我们' },
      hero: {
        badge: 'BOOM TECHNOLOGY GROUP | BOOM MEDIA ASIA',
        title1: '成为中国乃至全球第一',
        title2: '本地数字营销平台企业',
        subtitle: '以 NUT MCN 为核心，连接集团内容、达人、投放与本地化资源，帮助品牌实现海外市场拓展，从冷启动到长期经营的增长闭环。',
        cta1: '探索我们的能力',
        cta2: '立即咨询'
      },
      stats: [
        { num: '2015', unit: '年', label: '企业成立' },
        { num: '15', unit: '+', label: '全球分公司' },
        { num: '8000', unit: 'M+', label: '传播范围' },
        { num: '2000', unit: '+', label: '营销案例' },
        { num: '100', unit: 'K+', label: '合作品牌' }
      ],
      about: {
        label: '关于我们',
        title: '大事件科技集团',
        text1: '大事件科技集团成立于2015年，是一家荣获数千万政府基金投资的数字营销综合型集团企业。总部位于中国广州，国内已在北京、上海、深圳、曼谷等多个重要城市设立共15家海内外分公司，已构建起强大的本地化和全球化营销网络。',
        text2: '目前是中国排名第一（抖音官方粉丝排名）外籍达人MCN机构，也是中国头部明星达人MCN机构。业务覆盖海内外，累积为超10万家企业提供了从内容创作、平台运营到效果评估的一站式数字营销解决方案。',
        text3: '大事件科技集团将继续通过技术创新和跨行业资源整合，推动数字营销的变革，为品牌创造更多价值。',
        highlights: [
          { title: '国家高新技术企业', desc: '官方认证的技术创新型企业' },
          { title: '广州未来独角兽', desc: '高速成长中的行业领军者' },
          { title: '广州专精特新企业', desc: '专业化、精细化、特色化' },
          { title: '广州广告4A成员', desc: '行业最高资质认证' }
        ],
        group_logo_label: 'BOOM TECHNOLOGY GROUP',
        timeline_label: '发展历程',
        timeline: [
          { year: '2015', title: '广东大事件网络科技有限公司成立', desc: '首个自孵化账号"广州吃喝玩乐蒲"粉丝半年突破70万，公众号吃喝玩乐推广业务TOP1' },
          { year: '2016-2018', title: '华南TOP1自媒体企业', desc: '全网自孵化粉丝突破1亿，业务布局突破全国' },
          { year: '2018-2020', title: '国家高新技术企业', desc: '创建贪吃商城本地生活平台，全网自孵化粉丝突破1.5亿，成立本地生活MCN机构' },
          { year: '2020-2022', title: '业务多元化扩展', desc: '联合淘车车成立寻车MCN，荣获腾峰数千万投资；成立铁虎投资，布米数字营销加入广州4A' },
          { year: '2023', title: '广州未来独角兽企业', desc: '歪果仁Studio MCN成立；贪吃商城注册用户破5000万，GMV破5亿；全网自孵化粉丝突破3亿' },
          { year: '2024', title: '全域服务商升级', desc: '抖音全域服务商、代理商资质；成立星界MCN新增明星业务；成立歪果仁甄选直播品牌' },
          { year: '2025', title: '全球化布局', desc: '布局海外业务，成立泰国分公司，开启全球数字营销新篇章' }
        ]
      },
      capability: {
        label: '核心能力',
        title: '全球达人营销矩阵',
        desc: '自营+签约+深度链接超百万达人，根据目标市场与转化路径组合达人层级，从头部声量到KOC信任的金字塔配置。',
        cards: [
          { icon: '🌍', title: '达人资源覆盖', desc: '覆盖35+国家及地区，库内达人资源100K+，战略合作媒体&本土MCN 60+，专注全球主流社交媒体。' },
          { icon: '🎯', title: '垂直领域细分', desc: '达人细分20+垂直领域：品牌/电商/潮流生活/旅游/探店/文化兴趣/亲子母婴/娱乐游戏等。' },
          { icon: '📱', title: '多形态服务', desc: '品牌本地化海外营销、创意内容投放、矩阵达人引爆圈层影响力、直播带货、线下活动、目的地文旅推广、UGC铺量宣传。' }
        ],
        process_label: '六步全链路服务',
        process: [
          { title: '市场洞察', desc: '跨文化人群洞察，竞品声量与机会判断' },
          { title: '达人矩阵', desc: '海外本土达人/华人/外籍达人，垂直圈层KOL/KOC' },
          { title: '内容制作', desc: '原生短视频/挑战赛/品牌故事与创意脚本' },
          { title: '媒介投放', desc: 'TikTok/Instagram/YouTube信息流/搜索' },
          { title: '直播带货', desc: '达人本地专线直播，TikTok Shop认证' },
          { title: '转化闭环', desc: '电商/线索/门店导流+长期账号资产' }
        ],
        adv_label: '为什么选择我们',
        adv: [
          { num: '01', title: '外籍视角懂中国', desc: '中国粉丝量第一的外籍MCN，擅长把中国品牌/城市故事翻译成海外受众能理解的语境。' },
          { num: '02', title: '短视频 × AI 方法论', desc: '以内容为核心载体，结合AI与数据洞察，形成从生产、匹配到转化的智能营销体系。' },
          { num: '03', title: '海外本地化资源', desc: 'NUT MCN连接海外达人、海外华人、本土内容伙伴，兼顾跨境传播与在地执行。' },
          { num: '04', title: '生意闭环基因', desc: '集团拥有本地生活、电商、私域与投放经验，不止追求曝光，也关注线索、门店、销售和复购。' }
        ]
      },
      strength: {
        label: '硬实力',
        title: '基地与资质',
        cards: [
          { title: '曼谷直播基地', desc: '2000㎡+综合性直播基地，集直播、培训、拍摄、制作、包装于一体，配备专业设施与多元空间，赋能创作者和主播的成长与品牌升级。基地坐落于泰国曼谷。' },
          { title: 'TikTok 官方资质认证', desc: '入驻 TikTok for Business，2026年已完成 TikTok Shop 泰国市场 TAP/TSP/MCN 三项重要资质认证，多次斩获 TikTok 官方多项重要奖项。' },
          { title: '战略合作 A EIGHT MEDIA', desc: '与 A EIGHT MEDIA 建立深度战略合作关系。A8集团以泰国曼谷为国际业务总部，深耕 TikTok LIVE 生态，涵盖团播运营、艺人经纪、内容制作、达人孵化、品牌营销等多个领域。' }
        ]
      },
      talent: {
        label: '达人矩阵',
        title: '全球达人资源库',
        desc: '独家签约及深度合作达人超过100万，覆盖全球主流社交媒体平台。',
        featured: {
          name: 'Doug Marcaida',
          followers: '5.09M+',
          title: '道格·马卡伊达',
          desc: '菲律宾裔武器专家 / Forged in Fire 常驻评委'
        },
        creators: [
          { name: 'PANDABOI', followers: '78M+' },
          { name: 'Doug Marcaida', followers: '5.09M+' },
          { name: 'traveltomtom', followers: '3.5M+' },
          { name: 'piriawes', followers: '2.5M+' },
          { name: 'Brent Timm Travel', followers: '2.3M+' },
          { name: 'jessmelu', followers: '2M+' },
          { name: 'lexinchina', followers: '1.9M+' },
          { name: 'petchppc', followers: '1.8M+' },
          { name: 'TC IN CHINA', followers: '1.3M+' },
          { name: 'chloe jade travels', followers: '1M+' },
          { name: 'Edward Halim', followers: '1M+' },
          { name: '2passports1dream', followers: '1M+' },
          { name: 'Jack and Sophia', followers: '700K+' },
          { name: 'Chi đi Chill', followers: '600K+' },
          { name: 'passportvisionz_', followers: '328K+' },
          { name: 'Ira Nova', followers: '420K+' },
          { name: 'wavyute', followers: '780.3K+' },
          { name: 'tianmei.qiqi 泰国KK', followers: '880.4K+' },
          { name: '倪暄 Eli', followers: '342K+' },
          { name: 'Nikki', followers: '331K+' },
          { name: 'exteriorglam', followers: '1.31M+' },
          { name: '提姆哥和妮可姐', followers: '616K+' },
          { name: 'amottivation', followers: '1.36M+' },
          { name: 'Niranjan', followers: '2M+' },
          { name: 'CastCrafter', followers: '631K+' },
          { name: 'tonmaiiiiiiiiii', followers: '574.1K+' },
          { name: 'neoluvo', followers: '1.4M+' },
          { name: 'Josh the Intern', followers: '2M+' },
          { name: '_mehmetbuse', followers: '2.7M+' },
          { name: 'Katie Feeney', followers: '12.73M+' },
          { name: 'milena__94', followers: '1.9M+' },
          { name: 'davidmaluco_', followers: '3.91M+' },
          { name: 'youusaff', followers: '700K+' },
          { name: 'kuya_panch', followers: '5.6M+' },
          { name: 'thechavezfamilyy', followers: '2.1M+' },
          { name: 'itsjustourlife', followers: '1.8M+' },
          { name: 'you_fay', followers: '2.4M+' },
          { name: 'selma.sofiane', followers: '2.4M+' },
          { name: 'mbymelanightt', followers: '1.93M+' },
          { name: 'justt__zizouu', followers: '12.26M+' },
          { name: 'jannanickofficial', followers: '2.36M+' },
          { name: '美有姫', followers: '628K+' },
          { name: 'Magnacars', followers: '1.87M+' },
          { name: 'bepnhalinh', followers: '1.1M+' },
          { name: 'dangthuhaf', followers: '3.7M+' }
        ]
      },
      clients: {
        label: '合作客户',
        title: '合作客户一览',
        stats_title: '2000+ 案例，100K+ 品牌',
        stats_desc: '覆盖餐饮KA、食品饮料、消费品、汽车3C、老字号、时尚品牌、互联网与金融、商业地产等多个行业领域'
      },
      talent: {
        label: '创作者矩阵',
        title: '全球创作者阵容',
        desc: '覆盖全球主流社交媒体平台，超过100万合作创作者。',
        more_text: '更多100万+深度合作达人',
        featured: {
          name: 'Doug Marcaida',
          followers: '5.09M+',
          title: 'Doug Marcaida',
          desc: '菲律宾裔武器专家 / Forged in Fire 常驻评委'
        },
        creators: [
          { name: 'PANDABOI', followers: '78M+' },
          { name: 'Doug Marcaida', followers: '5.09M+' },
          { name: 'traveltomtom', followers: '3.5M+' },
          { name: 'piriawes', followers: '2.5M+' },
          { name: 'Brent Timm Travel', followers: '2.3M+' },
          { name: 'jessmelu', followers: '2M+' },
          { name: 'lexinchina', followers: '1.9M+' },
          { name: 'petchppc', followers: '1.8M+' },
          { name: 'TC IN CHINA', followers: '1.3M+' },
          { name: 'chloe jade travels', followers: '1M+' },
          { name: 'Edward Halim', followers: '1M+' },
          { name: '2passports1dream', followers: '1M+' },
          { name: 'Jack and Sophia', followers: '700K+' },
          { name: 'Chi đi Chill', followers: '600K+' },
          { name: 'passportvisionz_', followers: '328K+' },
          { name: 'Ira Nova', followers: '420K+' },
          { name: 'wavyute', followers: '780.3K+' },
          { name: 'tianmei.qiqi 泰国KK', followers: '880.4K+' },
          { name: '倪暄 Eli', followers: '342K+' },
          { name: 'Nikki', followers: '331K+' },
          { name: 'exteriorglam', followers: '1.31M+' },
          { name: '提姆哥和妮可姐', followers: '616K+' },
          { name: 'amottivation', followers: '1.36M+' },
          { name: 'Niranjan', followers: '2M+' },
          { name: 'CastCrafter', followers: '631K+' },
          { name: 'tonmaiiiiiiiiii', followers: '574.1K+' },
          { name: 'neoluvo', followers: '1.4M+' },
          { name: 'Josh the Intern', followers: '2M+' },
          { name: '_mehmetbuse', followers: '2.7M+' },
          { name: 'Katie Feeney', followers: '12.73M+' },
          { name: 'milena__94', followers: '1.9M+' },
          { name: 'davidmaluco_', followers: '3.91M+' },
          { name: 'youusaff', followers: '700K+' },
          { name: 'kuya_panch', followers: '5.6M+' },
          { name: 'thechavezfamilyy', followers: '2.1M+' },
          { name: 'itsjustourlife', followers: '1.8M+' },
          { name: 'you_fay', followers: '2.4M+' },
          { name: 'selma.sofiane', followers: '2.4M+' },
          { name: 'mbymelanightt', followers: '1.93M+' },
          { name: 'justt__zizouu', followers: '12.26M+' },
          { name: 'jannanickofficial', followers: '2.36M+' },
          { name: '美有姫', followers: '628K+' },
          { name: 'Magnacars', followers: '1.87M+' },
          { name: 'bepnhalinh', followers: '1.1M+' },
          { name: 'dangthuhaf', followers: '3.7M+' }
        ]
      },
      cases: {
        label: '案例中心',
        title: '精选案例展示',
        desc: '点击卡片查看完整案例详情。2000+营销案例，100K+合作品牌。',
        filter_all: '全部',
        filter_tourism: '文旅外宣',
        filter_brand: '品牌营销',
        tourism_label: '文旅外宣',
        brand_label: '品牌营销',
        items: [
          { cat: 'tourism', title: '桂林之夜 × 携程', stats: ['播放 14.2M', '互动 301K'], desc: '3位IG 50万+旅行博主 + TikTok/YouTube/Facebook多渠道宣发，远超预期。', slide: 14, highlight: '3位IG 50万+旅行博主同步宣发，覆盖TikTok/YouTube/Facebook等多渠道，以桂林山水+文化夜游为核心视觉符号，实现远超预期的海外曝光效果。', extra_data: ['播放量: 14.2M', '互动量: 301K', '博主: 3位IG 50万+', '渠道: TikTok / YouTube / Facebook'] },
          { cat: 'tourism', title: '三亚文旅推广', stats: ['曝光 116K', '互动 128K'], desc: '4条百万级播放视频火爆出圈，覆盖海外粉丝998K。', slide: 15, highlight: '以三亚热带海岛为核心场景，通过外籍达人第一视角沉浸式体验，产出4条百万级播放爆款视频，覆盖海外粉丝998K。', extra_data: ['TikTok曝光: 116K', '互动: 128K', '覆盖粉丝: 998K', '爆款视频: 4条百万级'] },
          { cat: 'tourism', title: '汕头文旅 · 广东年味', stats: ['播放 6.1M', '互动 306K'], desc: '30+国家100+外籍KOC出席，跨国文化盛宴，全球共此时。', slide: 16, highlight: '以"广东年味"为主题，邀请来自30+国家的100+外籍KOC出席线下活动，结合英歌舞、潮汕美食等文化符号进行跨国传播。', extra_data: ['播放量: 6.1M', '互动: 306K', 'KOC: 100+位', '覆盖: 30+国家'] },
          { cat: 'tourism', title: '无锡鼋头渚樱花节', stats: ['播放 5M', '互动 45K'], desc: 'RED+Facebook双平台，覆盖30+国家地区，粉丝2.35M。', slide: 17, highlight: 'RED（小红书海外版）+ Facebook双平台联动推广，以樱花节为核心视觉，覆盖30+国家和地区，触达2.35M海外粉丝。', extra_data: ['播放量: 5M', '互动: 45K', '覆盖: 30+国家', '粉丝: 2.35M'] },
          { cat: 'tourism', title: '江西婺源婺女洲', stats: ['播放 5M', 'CPM 29.85'], desc: 'lifestyle博主美女转场+景区二创跨界推广，CPE 1.04，CPC 0.02。', slide: 18, highlight: 'lifestyle博主创意转场视频+景区二创内容，跨界推广婺源婺女洲。CPM仅29.85，CPE 1.04，CPC 0.02，以极低成本撬动大规模曝光。', extra_data: ['播放量: 5M', 'CPM: 29.85', 'CPE: 1.04', 'CPC: 0.02'] },
          { cat: 'tourism', title: '梅州文旅推广', stats: ['播放 359K', 'CPM<50'], desc: 'YouTube长视频策略，具备深度文化展示价值，长期ROI。', slide: 19, highlight: '采用YouTube长视频策略深度展示梅州客家文化，具备长期内容沉淀价值。长尾效应显著，持续产出稳定的ROI。', extra_data: ['播放量: 359K', 'CPM: <50', '平台: YouTube', '策略: 长视频深度展示'] },
          { cat: 'tourism', title: '云丘山文化节', stats: ['播放 14.6M', '粉丝 18.5M'], desc: '打造3个10M级播放话题，跨国文化体验+传统晒秋文化。', slide: 20, highlight: '打造3个10M级播放话题，通过跨国文化体验+传统晒秋文化双线并行，将云丘山"柿柿如意"文化节推向全球。', extra_data: ['播放量: 14.6M', '覆盖粉丝: 18.5M', '爆款话题: 3个10M+', '模式: 跨国文化体验'] },
          { cat: 'tourism', title: '成都西岭山', stats: ['播放 885K', '粉丝 9.8M'], desc: 'CPM≈50，CPE≈0.59，互动76K。', slide: 21, highlight: '以成都西岭雪山为核心场景，CPM控制在约50的低成本水平，CPE仅0.59。精准触达海外户外旅行爱好者。', extra_data: ['播放量: 885K', '覆盖粉丝: 9.8M', 'CPM: ≈50', 'CPE: ≈0.59'] },
          { cat: 'tourism', title: '重庆观音桥', stats: ['播放 3M', '互动 134K'], desc: '单条爆款视频472K播放，互动38.6K，CPM≈56。', slide: 22, highlight: '单条爆款视频播放472K，以重庆"赛博朋克"城市景观引发海外热议。整体互动134K，CPM≈56。', extra_data: ['播放量: 3M', '互动: 134K', '单条爆款: 472K', 'CPM: ≈56'] },
          { cat: 'tourism', title: '贵州遵义', stats: ['播放 300K', '粉丝 900K'], desc: '精准投放触达目标受众。', slide: 23, highlight: '以遵义红色旅游和自然风光为卖点，精准投放策略触达对中国文化感兴趣的海外受众群体。', extra_data: ['播放量: 300K', '覆盖粉丝: 900K', '互动: 2K', '策略: 精准投放'] },
          { cat: 'tourism', title: '三渡山地运动公园', stats: ['曝光 4.63M', '互动 4.7K'], desc: '小红书为主阵地，17位达人覆盖8个国家，CPM 67。', slide: 24, highlight: '以小红书为主阵地，17位达人覆盖8个国家，以山地户外运动为核心内容，精准触达户外爱好者圈层。CPM 67，CPC 0.23。', extra_data: ['曝光: 4.63M', '互动: 4.7K', '达人: 17位', '覆盖: 8个国家'] },
          { cat: 'tourism', title: '江西南昌 × 携程', stats: ['播放 3.2M'], desc: '南非/加拿大/泰国/越南外籍达人，全网粉丝超2000万。', slide: 25, highlight: '与携程合作，调集南非、加拿大、泰国、越南等多国外籍达人，全网粉丝总量超2000万，为南昌打造国际化文旅形象。', extra_data: ['播放量: 3.2M', '达人粉丝: 2000万+', '国家: 南非/加拿大/泰国/越南', '合作方: 携程'] },
          { cat: 'tourism', title: '西塘古镇', stats: ['播放 167K', '互动 12.2K'], desc: '江南水乡文化的海外传播。', slide: 26, highlight: '以江南水乡西塘古镇的独特建筑和生活方式为内容，向海外受众传播中国传统水乡文化的魅力。', extra_data: ['播放量: 167K', '互动: 12.2K', '主题: 江南水乡文化'] },
          { cat: 'brand', title: '洽洽瓜子 CNY', stats: ['曝光 1.34M', '7国霸屏'], desc: '外国人嗑瓜子事件营销，小红书1.3M围观，笔记点赞401K。', slide: 27, highlight: '"外国人嗑瓜子"事件营销引爆社交网络，霸屏7个国家和地区（新加坡/美国/泰国/马来西亚/韩国/澳大利亚/加拿大）。小红书1.3M围观，笔记点赞收藏401K。', extra_data: ['总曝光: 1.34M', '覆盖: 7个国家', '小红书: 1.3M围观', '点赞收藏: 401K'] },
          { cat: 'brand', title: '青岛啤酒', stats: ['单篇曝光 100K+'], desc: 'Billboard式问题开场+外籍视角，汉江公园露营场景软植入。', slide: 29, highlight: '以Billboard式问题开场吸引注意，外籍达人在韩国汉江公园露营场景中软性植入青岛啤酒，自然不突兀，单篇笔记超100K曝光。', extra_data: ['单篇曝光: 100K+', '场景: 汉江公园露营', '手法: Billboard式+软植入'] },
          { cat: 'brand', title: '王老吉', stats: ['播放 130M', '互动 1M'], desc: '43位百万级KOL+300+KOC矩阵，CPM≈13.1，CPE≈0.33。', slide: 30, highlight: '43位百万级KOL+300+营销号/KOC矩阵传播，话题播放130M，CPM≈13.1，CPE≈0.33，以极致性价比打造现象级传播。', extra_data: ['播放量: 130M', '互动: 1M', 'KOL: 43位百万级', 'CPM: ≈13.1'] },
          { cat: 'brand', title: '卡尔顿春节好礼', stats: ['播放 993K', '互动 60K'], desc: '外籍达人差异化视角+高亲和力，文化新奇感信任背书。', slide: 31, highlight: '外籍达人以差异化视角诠释中国春节送礼文化，高亲和力内容使文化新奇感转化为消费信任背书。', extra_data: ['播放量: 993K', '互动: 60K', '策略: 差异化视角+亲和力'] },
          { cat: 'brand', title: '仰望U8 汽车试驾', stats: ['曝光 414万+'], desc: 'YouTube 600万博主试驾，中国汽车出海标杆传播。', slide: 32, highlight: 'YouTube 600万粉丝博主试驾仰望U8，以"中国豪车出海"为话题引爆关注。三位达人总曝光超414万。', extra_data: ['总曝光: 414万+', '博主: YouTube 600万粉丝', '达人: 3位', '主题: 中国汽车出海'] },
          { cat: 'brand', title: '广交会达人探访', stats: ['播放 2.93M'], desc: '双平台联动放大国际影响力，可复用数据模型。', slide: 33, highlight: '多位外籍达人实地探访广交会，双平台联动放大国际影响力。建立了可复用的数据模型，为后续展会类项目提供标准方法论。', extra_data: ['播放量: 2.93M', '互动: 10.5K', '模式: 双平台联动', '特点: 可复用数据模型'] },
          { cat: 'brand', title: '小马智行 Robotaxi', stats: ['播放 214K'], desc: 'L4自动驾驶×潮流社交语境，打破科技传播壁垒。', slide: 34, highlight: '将L4级自动驾驶技术与潮流社交语境结合，以轻松有趣的方式打破科技传播壁垒，触达香港及大湾区年轻受众。', extra_data: ['播放量: 214K', '互动: 10.3K', '主题: L4自动驾驶', '受众: 香港及大湾区'] },
          { cat: 'brand', title: 'ZKT一体机 × 徕芬', stats: ['粉丝 3.2M'], desc: '东南亚+美区双线推广，本地化开箱测评。', slide: 35, highlight: '东南亚+美区双线并进，采用本地化场景开箱测评+垂类3C博主组合策略，有效覆盖目标市场。', extra_data: ['覆盖粉丝: 3.2M', '市场: 东南亚+美区', '手法: 本地化开箱测评', '博主: 垂类3C'] },
          { cat: 'brand', title: '慕思床垫', stats: ['播放 152K'], desc: 'IG生活美学Vlog+YouTube科技实测，"科技+睡眠"心智。', slide: 36, highlight: 'IG生活美学博主Vlog种草 + YouTube科技博主实测AI智能床垫，双平台联动打造"科技+睡眠"品牌心智。', extra_data: ['播放量: 152K', '互动: 8.12K', '平台: IG + YouTube', '策略: 生活美学+科技实测'] },
          { cat: 'brand', title: '话梅HARMAY', stats: ['播放 3.5M', '互动 18.6K'], desc: '空间美学+沉浸式购物，线上传播连接线下消费场景。', slide: 37, highlight: '以HARMAY独特的空间美学+沉浸式购物体验为核心内容，线上传播直接连接线下消费场景，实现"线上种草→线下打卡→社交分享"闭环。', extra_data: ['播放量: 3.5M', '互动: 18.6K', '主题: 空间美学+沉浸式', '闭环: 种草→打卡→分享'] },
          { cat: 'brand', title: '宜必思酒店', stats: ['播放 304K', '互动 13.9K'], desc: '小红书攻略种草+抖音场景亮点，双平台差异化打法。', slide: 38, highlight: '小红书攻略种草（上海/北京住宿指南）+ 抖音场景亮点（前台变酒吧），双平台差异化内容策略实现精准触达。', extra_data: ['播放量: 304K', '互动: 13.9K', '平台: 小红书+抖音', '策略: 双平台差异化'] },
          { cat: 'brand', title: '招商邮轮', stats: ['播放 639K', '互动 17.6K'], desc: '12位达人5轮种草，邮轮海景+港珠澳大桥视觉场景。', slide: 39, highlight: '12位达人分5轮种草，以邮轮海景+港珠澳大桥为视觉核心场景，输出令人向往的高端旅行内容。', extra_data: ['播放量: 639K', '互动: 17.6K', '达人: 12位', '轮次: 5轮种草'] }
        ]
      },
      contact: {
        label: '联系我们',
        title: '助力品牌全球破圈',
        desc: '无论您是品牌方、地方文旅还是政府机构，我们都能为您提供量身定制的出海整合营销方案。',
        services: [
          { icon: '📡', title: '海外主流媒体达人投放', desc: 'TikTok / Instagram / YouTube / Facebook 精准达人匹配与投放' },
          { icon: '🚀', title: '品牌出海整合营销', desc: '从市场洞察到转化闭环的全链路品牌出海服务' },
          { icon: '🎬', title: '全球达人内容共创', desc: '原生短视频、挑战赛、品牌故事等多样化内容制作' }
        ],
        emails: [
          { label: '商业合作', name: 'Aryln', email: 'Lizilin@boomsj.net' },
          { label: '达人合作', name: 'Skai', email: 'Lairuihong@boomsj.net' }
        ],
        cta: '立即联系我们'
      },
      footer: {
        brand: 'BOOM TECHNOLOGY GROUP | BOOM MEDIA ASIA',
        copy: '© 2025 BOOM TECHNOLOGY GROUP. All Rights Reserved.'
      }
    },

    en: {
      nav: { about: 'About Us', capability: 'Capabilities', strength: 'Strength', talent: 'Talents', clients: 'Clients', cases: 'Cases', contact: 'Contact' },
      hero: {
        badge: 'BOOM TECHNOLOGY GROUP | BOOM MEDIA ASIA',
        title1: "China's #1 Local Digital",
        title2: 'Marketing Platform, Going Global',
        subtitle: 'Powered by NUT MCN, connecting group content, creators, media buying and localized resources to help brands expand into global markets—from cold start to long-term growth loop.',
        cta1: 'Explore Capabilities',
        cta2: 'Get in Touch'
      },
      stats: [
        { num: '2015', unit: '', label: 'Established' },
        { num: '15', unit: '+', label: 'Global Offices' },
        { num: '8000', unit: 'M+', label: 'Reach' },
        { num: '2000', unit: '+', label: 'Campaigns' },
        { num: '100', unit: 'K+', label: 'Brands Served' }
      ],
      about: {
        label: 'About Us',
        title: 'BOOM Technology Group',
        text1: 'Founded in 2015, BOOM Technology Group is a comprehensive digital marketing group enterprise with tens of millions in government fund investment. Headquartered in Guangzhou, China, with 15 domestic and international branches in Beijing, Shanghai, Shenzhen, Bangkok, and other key cities.',
        text2: "We are China's #1 foreign creator MCN (ranked by Douyin official followers) and a leading celebrity MCN. Our business spans both domestic and international markets, having served over 100,000 enterprises with one-stop digital marketing solutions.",
        text3: 'BOOM Technology Group continues to drive digital marketing transformation through technological innovation and cross-industry resource integration, delivering greater value for brands worldwide.',
        highlights: [
          { title: 'National High-Tech Enterprise', desc: 'Officially certified tech innovator' },
          { title: 'Guangzhou Future Unicorn', desc: 'High-growth industry leader' },
          { title: 'SRDI Enterprise', desc: 'Specialized, Refined, Differentiated, Innovative' },
          { title: 'Guangzhou 4A Member', desc: 'Highest industry accreditation' }
        ],
        group_logo_label: 'BOOM TECHNOLOGY GROUP',
        timeline_label: 'Milestones',
        timeline: [
          { year: '2015', title: 'Company Founded', desc: 'First self-incubated account reached 700K followers in 6 months, becoming #1 WeChat food & entertainment promotion.' },
          { year: '2016-2018', title: '#1 Self-Media in South China', desc: 'Self-incubated followers surpassed 100M; business expanded nationwide.' },
          { year: '2018-2020', title: 'National High-Tech Enterprise', desc: 'Launched Tanchi Mall local lifestyle platform; followers exceeded 150M; established local lifestyle MCN.' },
          { year: '2020-2022', title: 'Diversification', desc: 'Co-founded Xunche MCN; secured tens of millions in investment; joined Guangzhou 4A.' },
          { year: '2023', title: 'Future Unicorn', desc: 'Launched Waiguoren Studio MCN; Tanchi Mall users exceeded 50M, GMV surpassed 500M; followers reached 300M+.' },
          { year: '2024', title: 'Full-Service Upgrade', desc: 'Douyin full-service provider qualifications; launched Xingjie MCN; launched Waiguoren Select livestream brand.' },
          { year: '2025', title: 'Global Expansion', desc: 'Launched overseas business with Thailand branch, opening a new chapter in global digital marketing.' }
        ]
      },
      capability: {
        label: 'Capabilities',
        title: 'Global Creator Marketing Matrix',
        desc: 'Self-operated + signed + deeply connected with over 1 million creators. Combining creator tiers based on target markets and conversion paths.',
        cards: [
          { icon: '🌍', title: 'Creator Network Coverage', desc: 'Covering 35+ countries and regions, 100K+ creators in database, 60+ strategic media partners & local MCNs.' },
          { icon: '🎯', title: 'Vertical Segmentation', desc: '20+ verticals: brand/e-commerce/lifestyle/travel/food/cultural interests/parenting/entertainment & gaming.' },
          { icon: '📱', title: 'Multi-Format Services', desc: 'Localized overseas brand marketing, creative content distribution, matrix campaigns, livestream, offline events, tourism promotion.' }
        ],
        process_label: '6-Step Full-Funnel Service',
        process: [
          { title: 'Market Insights', desc: 'Cross-cultural audience insights, competitive analysis' },
          { title: 'Creator Matrix', desc: 'Local/overseas Chinese/foreign creators, vertical KOL/KOC' },
          { title: 'Content Production', desc: 'Short videos, challenges, brand storytelling' },
          { title: 'Media Buying', desc: 'TikTok/Instagram/YouTube feed ads & search' },
          { title: 'Livestream Commerce', desc: 'Local dedicated livestreams, TikTok Shop certified' },
          { title: 'Conversion Loop', desc: 'E-commerce/leads/store traffic + long-term assets' }
        ],
        adv_label: 'Why Choose Us',
        adv: [
          { num: '01', title: 'Foreign Perspective, China-Savvy', desc: "China's #1 foreign creator MCN. We translate Chinese brand stories into contexts overseas audiences understand." },
          { num: '02', title: 'Short Video × AI Methodology', desc: 'Content-driven, AI and data-powered intelligent marketing system from production to conversion.' },
          { num: '03', title: 'Overseas Localized Resources', desc: 'NUT MCN connects overseas creators for both cross-border communication and on-the-ground execution.' },
          { num: '04', title: 'Business Loop DNA', desc: 'We go beyond exposure to focus on leads, store traffic, sales, and retention.' }
        ]
      },
      strength: {
        label: 'Infrastructure',
        title: 'Base & Certifications',
        cards: [
          { title: 'Bangkok Livestream Base', desc: '2,000㎡+ comprehensive livestream base integrating streaming, training, filming, production and packaging. Located in Bangkok, Thailand.' },
          { title: 'TikTok Official Certifications', desc: 'Completed all three key TikTok Shop Thailand certifications (TAP/TSP/MCN) in 2026, with multiple TikTok official awards.' },
          { title: 'Strategic Partnership: A EIGHT MEDIA', desc: 'Deep strategic partnership with A EIGHT MEDIA, headquartered in Bangkok, engaged in TikTok LIVE ecosystem.' }
        ]
      },
      talent: {
        label: 'Creator Matrix',
        title: 'Global Creator Roster',
        desc: 'Over 1 million partner creators across major global social media platforms.',
        more_text: 'Over 1 Million Partner Creators',
        featured: {
          name: 'Doug Marcaida',
          followers: '5.09M+',
          title: 'Doug Marcaida',
          desc: 'Filipino-American Weapons Expert / Forged in Fire Judge'
        },
        creators: [
          { name: 'PANDABOI', followers: '78M+' },
          { name: 'Doug Marcaida', followers: '5.09M+' },
          { name: 'traveltomtom', followers: '3.5M+' },
          { name: 'piriawes', followers: '2.5M+' },
          { name: 'Brent Timm Travel', followers: '2.3M+' },
          { name: 'jessmelu', followers: '2M+' },
          { name: 'lexinchina', followers: '1.9M+' },
          { name: 'petchppc', followers: '1.8M+' },
          { name: 'TC IN CHINA', followers: '1.3M+' },
          { name: 'chloe jade travels', followers: '1M+' },
          { name: 'Edward Halim', followers: '1M+' },
          { name: '2passports1dream', followers: '1M+' },
          { name: 'Jack and Sophia', followers: '700K+' },
          { name: 'Chi đi Chill', followers: '600K+' },
          { name: 'passportvisionz_', followers: '328K+' },
          { name: 'Ira Nova', followers: '420K+' },
          { name: 'wavyute', followers: '780.3K+' },
          { name: 'tianmei.qiqi 泰国KK', followers: '880.4K+' },
          { name: '倪暄 Eli', followers: '342K+' },
          { name: 'Nikki', followers: '331K+' },
          { name: 'exteriorglam', followers: '1.31M+' },
          { name: '提姆哥和妮可姐', followers: '616K+' },
          { name: 'amottivation', followers: '1.36M+' },
          { name: 'Niranjan', followers: '2M+' },
          { name: 'CastCrafter', followers: '631K+' },
          { name: 'tonmaiiiiiiiiii', followers: '574.1K+' },
          { name: 'neoluvo', followers: '1.4M+' },
          { name: 'Josh the Intern', followers: '2M+' },
          { name: '_mehmetbuse', followers: '2.7M+' },
          { name: 'Katie Feeney', followers: '12.73M+' },
          { name: 'milena__94', followers: '1.9M+' },
          { name: 'davidmaluco_', followers: '3.91M+' },
          { name: 'youusaff', followers: '700K+' },
          { name: 'kuya_panch', followers: '5.6M+' },
          { name: 'thechavezfamilyy', followers: '2.1M+' },
          { name: 'itsjustourlife', followers: '1.8M+' },
          { name: 'you_fay', followers: '2.4M+' },
          { name: 'selma.sofiane', followers: '2.4M+' },
          { name: 'mbymelanightt', followers: '1.93M+' },
          { name: 'justt__zizouu', followers: '12.26M+' },
          { name: 'jannanickofficial', followers: '2.36M+' },
          { name: '美有姫', followers: '628K+' },
          { name: 'Magnacars', followers: '1.87M+' },
          { name: 'bepnhalinh', followers: '1.1M+' },
          { name: 'dangthuhaf', followers: '3.7M+' }
        ]
      },
      clients: {
        label: 'Our Clients',
        title: 'Trusted by Leading Brands',
        stats_title: '2,000+ Campaigns, 100K+ Brands',
        stats_desc: 'Covering F&B KA, food & beverage, consumer goods, automotive & 3C, heritage brands, fashion, internet & finance, commercial real estate, and more.'
      },
      cases: {
        label: 'Case Studies',
        title: 'Selected Campaigns',
        desc: 'Click a card to view full case details. 2,000+ campaigns, 100K+ brands served.',
        filter_all: 'All',
        filter_tourism: 'Tourism',
        filter_brand: 'Brand Marketing',
        tourism_label: 'Tourism Promotion',
        brand_label: 'Brand Marketing',
        items: [
          { cat: 'tourism', title: 'Guilin Night × Trip.com', stats: ['Views 14.2M', 'Engagement 301K'], desc: '3 IG 500K+ travel bloggers + TikTok/YouTube/Facebook multi-channel distribution.', slide: 14, highlight: '3 IG 500K+ travel bloggers synchronous promotion across TikTok/YouTube/Facebook. Guilin landscape and night cruise as core visual symbols, achieving far-above-expected overseas exposure.', extra_data: ['Views: 14.2M', 'Engagement: 301K', 'Bloggers: 3 IG 500K+', 'Channels: TikTok / YouTube / Facebook'] },
          { cat: 'tourism', title: 'Sanya Tourism', stats: ['Exposure 116K', 'Engagement 128K'], desc: '4 viral videos with 1M+ views each, reaching 998K overseas followers.', slide: 15, highlight: 'Tropical Sanya beach destination. Foreign creators produced 4 viral videos with 1M+ views each, reaching 998K overseas followers through immersive first-person experience.', extra_data: ['TikTok Exposure: 116K', 'Engagement: 128K', 'Followers Reached: 998K', 'Viral Videos: 4 with 1M+'] },
          { cat: 'tourism', title: 'Shantou · Guangdong New Year', stats: ['Views 6.1M', 'Engagement 306K'], desc: '100+ foreign KOCs from 30+ countries in a cross-cultural feast.', slide: 16, highlight: '"Guangdong New Year" themed campaign. 100+ foreign KOCs from 30+ countries attended offline event, combined with Yingge dance and Chaoshan cuisine as cultural symbols.', extra_data: ['Views: 6.1M', 'Engagement: 306K', 'KOCs: 100+', 'Countries: 30+'] },
          { cat: 'tourism', title: 'Wuxi Cherry Blossom Festival', stats: ['Views 5M', 'Engagement 45K'], desc: 'RED + Facebook dual-platform, covering 30+ countries, 2.35M followers.', slide: 17, highlight: 'RED (Xiaohongshu Global) + Facebook dual-platform cherry blossom festival promotion, reaching 30+ countries and 2.35M overseas followers.', extra_data: ['Views: 5M', 'Engagement: 45K', 'Countries: 30+', 'Followers: 2.35M'] },
          { cat: 'tourism', title: 'Wuyuan Wunvzhou', stats: ['Views 5M', 'CPM 29.85'], desc: 'Lifestyle blogger transitions + scenic spot crossover promotion.', slide: 18, highlight: 'Lifestyle blogger creative transition videos + scenic spot crossover content. CPM only 29.85, CPE 1.04, CPC 0.02 — massive exposure at minimal cost.', extra_data: ['Views: 5M', 'CPM: 29.85', 'CPE: 1.04', 'CPC: 0.02'] },
          { cat: 'tourism', title: 'Meizhou Tourism', stats: ['Views 359K', 'CPM<50'], desc: 'YouTube long-form strategy with deep cultural value and long-term ROI.', slide: 19, highlight: 'YouTube long-form video strategy showcasing Hakka culture in depth. Strong long-tail effect with sustained ROI. ', extra_data: ['Views: 359K', 'CPM: <50', 'Platform: YouTube', 'Strategy: Long-form deep showcase'] },
          { cat: 'tourism', title: 'Yunqiu Mountain Festival', stats: ['Views 14.6M', 'Followers 18.5M'], desc: '3 topics with 10M+ views each; cross-cultural harvest culture experience.', slide: 20, highlight: '3 topics with 10M+ views each. Cross-cultural experience + traditional harvest culture dual-track approach, bringing the "Persimmon Ruyi" culture festival to global audiences.', extra_data: ['Views: 14.6M', 'Followers: 18.5M', 'Viral Topics: 3 with 10M+', 'Model: Cross-cultural experience'] },
          { cat: 'tourism', title: 'Chengdu Xiling Mountain', stats: ['Views 885K', 'Followers 9.8M'], desc: 'CPM≈50, CPE≈0.59, engagement 76K.', slide: 21, highlight: 'Xiling Snow Mountain near Chengdu. CPM controlled at ~50, CPE only 0.59, precisely targeting overseas outdoor travel enthusiasts.', extra_data: ['Views: 885K', 'Followers: 9.8M', 'CPM: ≈50', 'CPE: ≈0.59'] },
          { cat: 'tourism', title: 'Chongqing Guanyinqiao', stats: ['Views 3M', 'Engagement 134K'], desc: 'Single viral video 472K views, CPM≈56.', slide: 22, highlight: 'Single viral video 472K views. Chongqing "cyberpunk" cityscape sparked international buzz. Total engagement 134K, CPM≈56.', extra_data: ['Views: 3M', 'Engagement: 134K', 'Top Video: 472K', 'CPM: ≈56'] },
          { cat: 'tourism', title: 'Guizhou Zunyi', stats: ['Views 300K', 'Followers 900K'], desc: 'Precision targeting reaching the desired audience.', slide: 23, highlight: 'Zunyi red tourism and natural scenery as core selling points. Precision ad targeting strategy reaching overseas audiences interested in Chinese culture.', extra_data: ['Views: 300K', 'Followers: 900K', 'Engagement: 2K', 'Strategy: Precision targeting'] },
          { cat: 'tourism', title: 'Sandu Mountain Sports Park', stats: ['Exposure 4.63M', 'Engagement 4.7K'], desc: 'RED as primary platform, 17 creators across 8 countries.', slide: 24, highlight: 'RED as the primary platform. 17 creators from 8 countries producing mountain outdoor sports content. CPM 67, CPC 0.23.', extra_data: ['Exposure: 4.63M', 'Engagement: 4.7K', 'Creators: 17', 'Countries: 8'] },
          { cat: 'tourism', title: 'Nanchang × Trip.com', stats: ['Views 3.2M'], desc: 'Creators from South Africa/Canada/Thailand/Vietnam, 20M+ followers.', slide: 25, highlight: 'Partnered with Trip.com, assembled foreign creators from South Africa, Canada, Thailand, and Vietnam with 20M+ combined followers.', extra_data: ['Views: 3.2M', 'Creator Followers: 20M+', 'Countries: ZA/CA/TH/VN', 'Partner: Trip.com'] },
          { cat: 'tourism', title: 'Xitang Ancient Town', stats: ['Views 167K', 'Engagement 12.2K'], desc: 'Jiangnan water town culture overseas promotion.', slide: 26, highlight: 'Xitang Ancient Town architecture and lifestyle as content core, sharing authentic Jiangnan water town culture with overseas audiences.', extra_data: ['Views: 167K', 'Engagement: 12.2K', 'Theme: Jiangnan water town culture'] },
          { cat: 'brand', title: 'Qiaqia Seeds CNY', stats: ['Exposure 1.34M', '7 Countries'], desc: 'Foreigners eating sunflower seeds event marketing, 1.3M RED views.', slide: 27, highlight: '"Foreigners eating sunflower seeds" event marketing went viral across 7 countries (Singapore/US/Thailand/Malaysia/Korea/Australia/Canada). RED 1.3M views, 401K likes.', extra_data: ['Exposure: 1.34M', 'Countries: 7', 'RED: 1.3M views', 'Likes: 401K'] },
          { cat: 'brand', title: 'Tsingtao Beer', stats: ['Per Post 100K+'], desc: 'Billboard-style + foreign perspective; Hangang Park camping scene.', slide: 29, highlight: 'Billboard-style opening question + foreign perspective. Soft product placement in Korea Hangang Park camping scene, naturally integrated.', extra_data: ['Per Post: 100K+', 'Scene: Hangang Park camping', 'Style: Billboard + soft placement'] },
          { cat: 'brand', title: 'WALOVI (Wanglaoji)', stats: ['Views 130M', 'Engagement 1M'], desc: '43 million-follower KOLs + 300+ KOCs matrix.', slide: 30, highlight: '43 million-follower KOLs + 300+ KOCs matrix distribution. Topic views 130M, CPM≈13.1, CPE≈0.33 — phenomenal reach at extreme cost efficiency.', extra_data: ['Views: 130M', 'Engagement: 1M', 'KOLs: 43 million-level', 'CPM: ≈13.1'] },
          { cat: 'brand', title: 'Carlton CNY Gifts', stats: ['Views 993K', 'Engagement 60K'], desc: 'Foreign creator differentiated perspective + high affinity.', slide: 31, highlight: 'Foreign creators interpret Chinese New Year gifting culture from a differentiated perspective. High-affinity content turns cultural novelty into consumer trust.', extra_data: ['Views: 993K', 'Engagement: 60K', 'Strategy: Differentiated + affinity'] },
          { cat: 'brand', title: 'Yangwang U8 Test Drive', stats: ['Exposure 4.14M+'], desc: '6M-subscriber YouTuber test drive, China auto benchmark.', slide: 32, highlight: '6M-subscriber YouTuber test drives the Yangwang U8. Three creators with 4.14M+ total exposure, positioning the narrative around Chinese luxury auto going global.', extra_data: ['Exposure: 4.14M+', 'YouTuber: 6M subscribers', 'Creators: 3', 'Theme: China auto going global'] },
          { cat: 'brand', title: 'Canton Fair Creator Tour', stats: ['Views 2.93M'], desc: 'Dual-platform amplification, reusable data model.', slide: 33, highlight: 'Multiple foreign creators toured the Canton Fair. Dual-platform amplification maximizing international influence. Established a reusable data model for future expo campaigns.', extra_data: ['Views: 2.93M', 'Engagement: 10.5K', 'Model: Dual-platform', 'Feature: Reusable data model'] },
          { cat: 'brand', title: 'Pony.ai Robotaxi', stats: ['Views 214K'], desc: 'L4 autonomous driving × trendy social context.', slide: 34, highlight: 'L4 autonomous driving technology meets trendy social context. Breaking tech communication barriers, reaching Hong Kong and Greater Bay Area young audiences.', extra_data: ['Views: 214K', 'Engagement: 10.3K', 'Theme: L4 autonomous driving', 'Audience: HK & GBA'] },
          { cat: 'brand', title: 'ZKT + Laifen', stats: ['Followers 3.2M'], desc: 'SEA + US dual-market with localized unboxing reviews.', slide: 35, highlight: 'Southeast Asia + US dual-market promotion. Localized unboxing reviews + vertical 3C creator strategy effectively covering target markets.', extra_data: ['Followers: 3.2M', 'Markets: SEA + US', 'Style: Localized unboxing', 'Creators: Vertical 3C'] },
          { cat: 'brand', title: 'DeRUCCI Mattress', stats: ['Views 152K'], desc: 'IG lifestyle Vlog + YouTube tech review, "tech + sleep".', slide: 36, highlight: 'IG lifestyle blogger Vlog seeding + YouTube tech reviewer testing AI smart mattress. Dual-platform building the "technology + sleep" brand mindshare.', extra_data: ['Views: 152K', 'Engagement: 8.12K', 'Platforms: IG + YouTube', 'Strategy: Lifestyle + Tech review'] },
          { cat: 'brand', title: 'HARMAY Beauty', stats: ['Views 3.5M', 'Engagement 18.6K'], desc: 'Space aesthetics + immersive shopping connecting online to offline.', slide: 37, highlight: 'HARMAY unique space aesthetics + immersive shopping experience. Online content directly drives offline store visits: "discover online → visit offline → share on social".', extra_data: ['Views: 3.5M', 'Engagement: 18.6K', 'Theme: Space aesthetics', 'Loop: Discover→Visit→Share'] },
          { cat: 'brand', title: 'ibis Hotel', stats: ['Views 304K', 'Engagement 13.9K'], desc: 'RED strategy seeding + Douyin scene highlights.', slide: 38, highlight: 'RED strategy seeding (Shanghai/Beijing accommodation guide) + Douyin scene highlights (front desk turns into bar). Differentiated dual-platform strategy achieving precision reach.', extra_data: ['Views: 304K', 'Engagement: 13.9K', 'Platforms: RED + Douyin', 'Strategy: Dual-platform differentiated'] },
          { cat: 'brand', title: 'China Merchants Cruise', stats: ['Views 639K', 'Engagement 17.6K'], desc: '12 creators × 5 rounds, cruise seascape + HK-Zhuhai-Macao Bridge.', slide: 39, highlight: '12 creators across 5 rounds of seeding. Cruise seascape + HK-Zhuhai-Macao Bridge as core visual scenes, producing aspirational premium travel content.', extra_data: ['Views: 639K', 'Engagement: 17.6K', 'Creators: 12', 'Rounds: 5'] }
        ]
      },
      contact: {
        label: 'Contact Us',
        title: 'Make China Brands Global',
        desc: 'Whether you are a brand, tourism destination, or government agency, we provide tailored overseas integrated marketing solutions.',
        services: [
          { icon: '📡', title: 'Global Creator Media Buying', desc: 'Precision creator matching and media buying on TikTok / Instagram / YouTube / Facebook' },
          { icon: '🚀', title: 'Brand Overseas Integrated Marketing', desc: 'Full-funnel brand globalization from market insights to conversion loop' },
          { icon: '🎬', title: 'Global Creator Content Co-creation', desc: 'Native short videos, challenges, brand storytelling and more' }
        ],
        emails: [
          { label: 'Business Cooperation', name: 'Aryln', email: 'Lizilin@boomsj.net' },
          { label: 'Creator Cooperation', name: 'Skai', email: 'Lairuihong@boomsj.net' }
        ],
        cta: 'Contact Us Now'
      },
      footer: {
        brand: 'BOOM TECHNOLOGY GROUP | BOOM MEDIA ASIA',
        copy: '© 2025 BOOM TECHNOLOGY GROUP. All Rights Reserved.'
      }
    },

    th: {
      nav: { about: 'เกี่ยวกับเรา', capability: 'ความสามารถ', strength: 'ศักยภาพ', talent: 'ครีเอเตอร์', clients: 'ลูกค้า', cases: 'ผลงาน', contact: 'ติดต่อ' },
      hero: {
        badge: 'BOOM TECHNOLOGY GROUP | BOOM MEDIA ASIA',
        title1: 'แพลตฟอร์มการตลาดดิจิทัล',
        title2: 'อันดับหนึ่งของจีน ก้าวสู่ระดับโลก',
        subtitle: 'ขับเคลื่อนโดย NUT MCN เชื่อมโยงคอนเทนต์ ครีเอเตอร์ การซื้อสื่อ และทรัพยากรท้องถิ่น เพื่อช่วยแบรนด์ขยายตลาดสู่ระดับโลก',
        cta1: 'สำรวจความสามารถ',
        cta2: 'ติดต่อเรา'
      },
      stats: [
        { num: '2015', unit: '', label: 'ก่อตั้ง' },
        { num: '15', unit: '+', label: 'สาขาทั่วโลก' },
        { num: '8000', unit: 'M+', label: 'การเข้าถึง' },
        { num: '2000', unit: '+', label: 'แคมเปญ' },
        { num: '100', unit: 'K+', label: 'แบรนด์ที่ดูแล' }
      ],
      about: {
        label: 'เกี่ยวกับเรา',
        title: 'BOOM Technology Group',
        text1: 'BOOM Technology Group ก่อตั้งขึ้นในปี 2015 เป็นองค์กรการตลาดดิจิทัลครบวงจรที่ได้รับการลงทุนจากกองทุนรัฐบาลหลายสิบล้านหยวน สำนักงานใหญ่ตั้งอยู่ที่กวางโจว',
        text2: 'เราเป็น MCN ครีเอเตอร์ต่างชาติอันดับหนึ่งของจีน และเป็น MCN ชั้นนำด้านคนดัง ให้บริการลูกค้ามากกว่า 100,000 รายด้วยโซลูชันการตลาดดิจิทัลแบบครบวงจร',
        text3: 'BOOM Technology Group มุ่งมั่นขับเคลื่อนการเปลี่ยนแปลงการตลาดดิจิทัลผ่านนวัตกรรมเทคโนโลยีและการบูรณาการทรัพยากรข้ามอุตสาหกรรม',
        highlights: [
          { title: 'องค์กรไฮเทคระดับชาติ', desc: 'นวัตกรรมเทคโนโลยีที่ได้รับการรับรอง' },
          { title: 'กวางโจว Future Unicorn', desc: 'ผู้นำอุตสาหกรรมที่เติบโตสูง' },
          { title: 'องค์กร SRDI', desc: 'เฉพาะทาง ละเอียด แตกต่าง นวัตกรรม' },
          { title: 'สมาชิก Guangzhou 4A', desc: 'การรับรองมาตรฐานสูงสุด' }
        ],
        group_logo_label: 'BOOM TECHNOLOGY GROUP',
        timeline_label: 'เส้นทางการเติบโต',
        timeline: [
          { year: '2015', title: 'ก่อตั้งบริษัท', desc: 'บัญชีแรกมีผู้ติดตาม 700K ใน 6 เดือน กลายเป็นอันดับ 1 ด้านโปรโมทอาหาร WeChat' },
          { year: '2016-2018', title: 'สื่อออนไลน์อันดับ 1 ในจีนใต้', desc: 'ผู้ติดตามทะลุ 100M ขยายธุรกิจทั่วประเทศ' },
          { year: '2018-2020', title: 'องค์กรไฮเทคระดับชาติ', desc: 'เปิดตัวแพลตฟอร์ม Tanchi Mall ผู้ติดตามทะลุ 150M ก่อตั้ง MCN' },
          { year: '2020-2022', title: 'การขยายธุรกิจ', desc: 'ร่วมก่อตั้ง Xunche MCN ระดมทุนหลายสิบล้านหยวน เข้าร่วม Guangzhou 4A' },
          { year: '2023', title: 'Future Unicorn', desc: 'เปิดตัว Waiguoren Studio MCN ผู้ใช้ Tanchi Mall ทะลุ 50M GMV เกิน 500M' },
          { year: '2024', title: 'อัปเกรดบริการครบวงจร', desc: 'ได้รับคุณสมบัติ Douyin Full-Service Provider เปิดตัว Xingjie MCN' },
          { year: '2025', title: 'การขยายสู่ระดับโลก', desc: 'เปิดตัวธุรกิจต่างประเทศพร้อมสาขาประเทศไทย เปิดศักราชใหม่ของการตลาดดิจิทัลระดับโลก' }
        ]
      },
      capability: {
        label: 'ความสามารถ',
        title: 'เครือข่ายครีเอเตอร์ระดับโลก',
        desc: 'ครีเอเตอร์ที่บริหารเอง + เซ็นสัญญา + เชื่อมต่อกว่า 1 ล้านคน ผสมผสานระดับครีเอเตอร์ตามตลาดเป้าหมาย',
        cards: [
          { icon: '🌍', title: 'เครือข่ายครีเอเตอร์', desc: 'ครอบคลุม 35+ ประเทศ ครีเอเตอร์ในฐานข้อมูล 100K+ พันธมิตรสื่อและ MCN ท้องถิ่น 60+ ราย' },
          { icon: '🎯', title: 'การแบ่งกลุ่มแนวตั้ง', desc: '20+ กลุ่มแนวตั้ง: แบรนด์/อีคอมเมิร์ซ/ไลฟ์สไตล์/ท่องเที่ยว/วัฒนธรรม/ครอบครัว/บันเทิง' },
          { icon: '📱', title: 'บริการหลากหลายรูปแบบ', desc: 'การตลาดแบรนด์ต่างประเทศ การกระจายคอนเทนต์สร้างสรรค์ แคมเปญครีเอเตอร์ ไลฟ์สตรีม ส่งเสริมการท่องเที่ยว' }
        ],
        process_label: 'บริการครบวงจร 6 ขั้นตอน',
        process: [
          { title: 'ข้อมูลเชิงลึกตลาด', desc: 'ข้อมูลผู้ชมข้ามวัฒนธรรม วิเคราะห์คู่แข่ง' },
          { title: 'เมทริกซ์ครีเอเตอร์', desc: 'ครีเอเตอร์ท้องถิ่น/ชาวจีนโพ้นทะเล/ต่างชาติ' },
          { title: 'การผลิตคอนเทนต์', desc: 'วิดีโอสั้น แฮชแท็กชาเลนจ์ การเล่าเรื่องแบรนด์' },
          { title: 'การซื้อสื่อ', desc: 'TikTok/Instagram/YouTube ฟีดและค้นหา' },
          { title: 'ไลฟ์สตรีมคอมเมิร์ซ', desc: 'ไลฟ์สตรีมท้องถิ่น ได้รับการรับรอง TikTok Shop' },
          { title: 'วงจรการแปลง', desc: 'อีคอมเมิร์ซ/ลีด/การเข้าชมร้านค้า' }
        ],
        adv_label: 'ทำไมต้องเลือกเรา',
        adv: [
          { num: '01', title: 'มุมมองต่างชาติ เข้าใจจีน', desc: 'MCN ครีเอเตอร์ต่างชาติอันดับหนึ่งของจีน เราแปลเรื่องราวแบรนด์จีนให้ผู้ชมต่างประเทศเข้าใจ' },
          { num: '02', title: 'วิดีโอสั้น × วิธีการ AI', desc: 'ขับเคลื่อนด้วยคอนเทนต์ ระบบการตลาดอัจฉริยะที่ขับเคลื่อนด้วย AI และข้อมูล' },
          { num: '03', title: 'ทรัพยากรท้องถิ่นต่างประเทศ', desc: 'NUT MCN เชื่อมต่อครีเอเตอร์ต่างประเทศ ชาวจีนโพ้นทะเล และพาร์ทเนอร์คอนเทนต์ท้องถิ่น' },
          { num: '04', title: 'DNA วงจรธุรกิจ', desc: 'เรามุ่งเน้นมากกว่าการเปิดเผย ไปจนถึงลีด การเข้าชมร้านค้า ยอดขาย และการรักษาลูกค้า' }
        ]
      },
      strength: {
        label: 'ศักยภาพ',
        title: 'ฐานและใบรับรอง',
        cards: [
          { title: 'ฐานไลฟ์สตรีมกรุงเทพฯ', desc: 'ฐานไลฟ์สตรีมครบวงจรขนาด 2,000 ตร.ม. รวมการสตรีม การฝึกอบรม การถ่ายทำ ตั้งอยู่ในกรุงเทพฯ ประเทศไทย' },
          { title: 'ใบรับรองอย่างเป็นทางการ TikTok', desc: 'เสร็จสิ้นการรับรอง TikTok Shop Thailand ที่สำคัญทั้งสามรายการ (TAP/TSP/MCN) ในปี 2026' },
          { title: 'พันธมิตรเชิงกลยุทธ์: A EIGHT MEDIA', desc: 'ความร่วมมือเชิงกลยุทธ์กับ A EIGHT MEDIA สำนักงานใหญ่ที่กรุงเทพฯ ดำเนินธุรกิจในระบบนิเวศ TikTok LIVE' }
        ]
      },
      talent: {
        label: 'ครีเอเตอร์',
        title: 'รายชื่อครีเอเตอร์ระดับโลก',
        desc: 'ครีเอเตอร์พาร์ทเนอร์กว่า 1 ล้านคนบนแพลตฟอร์มโซเชียลมีเดียระดับโลก',
        more_text: 'ครีเอเตอร์พาร์ทเนอร์กว่า 1 ล้านคน',
        featured: {
          name: 'Doug Marcaida',
          followers: '5.09M+',
          title: 'Doug Marcaida',
          desc: 'ผู้เชี่ยวชาญด้านอาวุธชาวฟิลิปปินส์-อเมริกัน / กรรมการรายการ Forged in Fire'
        },
        creators: [
          { name: 'PANDABOI', followers: '78M+' },
          { name: 'Doug Marcaida', followers: '5.09M+' },
          { name: 'traveltomtom', followers: '3.5M+' },
          { name: 'piriawes', followers: '2.5M+' },
          { name: 'Brent Timm Travel', followers: '2.3M+' },
          { name: 'jessmelu', followers: '2M+' },
          { name: 'lexinchina', followers: '1.9M+' },
          { name: 'petchppc', followers: '1.8M+' },
          { name: 'TC IN CHINA', followers: '1.3M+' },
          { name: 'chloe jade travels', followers: '1M+' },
          { name: 'Edward Halim', followers: '1M+' },
          { name: '2passports1dream', followers: '1M+' },
          { name: 'Jack and Sophia', followers: '700K+' },
          { name: 'Chi đi Chill', followers: '600K+' },
          { name: 'passportvisionz_', followers: '328K+' },
          { name: 'Ira Nova', followers: '420K+' },
          { name: 'wavyute', followers: '780.3K+' },
          { name: 'tianmei.qiqi 泰国KK', followers: '880.4K+' },
          { name: '倪暄 Eli', followers: '342K+' },
          { name: 'Nikki', followers: '331K+' },
          { name: 'exteriorglam', followers: '1.31M+' },
          { name: '提姆哥和妮可姐', followers: '616K+' },
          { name: 'amottivation', followers: '1.36M+' },
          { name: 'Niranjan', followers: '2M+' },
          { name: 'CastCrafter', followers: '631K+' },
          { name: 'tonmaiiiiiiiiii', followers: '574.1K+' },
          { name: 'neoluvo', followers: '1.4M+' },
          { name: 'Josh the Intern', followers: '2M+' },
          { name: '_mehmetbuse', followers: '2.7M+' },
          { name: 'Katie Feeney', followers: '12.73M+' },
          { name: 'milena__94', followers: '1.9M+' },
          { name: 'davidmaluco_', followers: '3.91M+' },
          { name: 'youusaff', followers: '700K+' },
          { name: 'kuya_panch', followers: '5.6M+' },
          { name: 'thechavezfamilyy', followers: '2.1M+' },
          { name: 'itsjustourlife', followers: '1.8M+' },
          { name: 'you_fay', followers: '2.4M+' },
          { name: 'selma.sofiane', followers: '2.4M+' },
          { name: 'mbymelanightt', followers: '1.93M+' },
          { name: 'justt__zizouu', followers: '12.26M+' },
          { name: 'jannanickofficial', followers: '2.36M+' },
          { name: '美有姫', followers: '628K+' },
          { name: 'Magnacars', followers: '1.87M+' },
          { name: 'bepnhalinh', followers: '1.1M+' },
          { name: 'dangthuhaf', followers: '3.7M+' }
        ]
      },
      clients: {
        label: 'ลูกค้าของเรา',
        title: 'แบรนด์ชั้นนำที่ไว้วางใจเรา',
        stats_title: '2,000+ แคมเปญ, 100K+ แบรนด์',
        stats_desc: 'ครอบคลุม F&B สินค้าอุปโภคบริโภค ยานยนต์และ 3C แบรนด์มรดก แฟชั่น อินเทอร์เน็ตและการเงิน อสังหาริมทรัพย์เชิงพาณิชย์'
      },
      cases: {
        label: 'ผลงาน',
        title: 'แคมเปญที่คัดสรร',
        desc: 'คลิกการ์ดเพื่อดูรายละเอียดเต็ม 2,000+ แคมเปญ 100K+ แบรนด์',
        filter_all: 'ทั้งหมด',
        filter_tourism: 'การท่องเที่ยว',
        filter_brand: 'การตลาดแบรนด์',
        tourism_label: 'ส่งเสริมการท่องเที่ยว',
        brand_label: 'การตลาดแบรนด์',
        items: [
          { cat: 'tourism', title: 'Guilin Night × Trip.com', stats: ['Views 14.2M', 'Engagement 301K'], desc: 'บล็อกเกอร์ IG 500K+ 3 คน + หลายช่องทาง TikTok/YouTube/Facebook', slide: 14, highlight: 'บล็อกเกอร์ท่องเที่ยว IG 500K+ 3 คนพร้อมกันบน TikTok/YouTube/Facebook ทัศนียภาพกุ้ยหลินเป็นสัญลักษณ์ภาพหลัก', extra_data: ['Views: 14.2M', 'Engagement: 301K', 'Bloggers: 3 IG 500K+', 'Channels: TikTok / YouTube / Facebook'] },
          { cat: 'tourism', title: 'Sanya Tourism', stats: ['Exposure 116K', 'Engagement 128K'], desc: 'วิดีโอไวรัล 4 รายการที่มียอดดู 1M+', slide: 15, highlight: 'ครีเอเตอร์ต่างชาติผลิตวิดีโอไวรัล 4 รายการ มียอดดู 1M+ แต่ละรายการ เข้าถึงผู้ติดตามต่างประเทศ 998K', extra_data: ['Exposure: 116K', 'Engagement: 128K', 'Followers: 998K', 'Viral: 4 with 1M+'] },
          { cat: 'tourism', title: 'Shantou · Guangdong New Year', stats: ['Views 6.1M', 'Engagement 306K'], desc: 'KOC ต่างชาติ 100+ คนจาก 30+ ประเทศ', slide: 16, highlight: 'แคมเปญ "ตรุษจีนกวางตุ้ง" KOC ต่างชาติ 100+ คนจาก 30+ ประเทศ ร่วมกับ Yingge และอาหารแต้จิ๋ว', extra_data: ['Views: 6.1M', 'Engagement: 306K', 'KOCs: 100+', 'Countries: 30+'] },
          { cat: 'tourism', title: 'Wuxi Cherry Blossom', stats: ['Views 5M', 'Engagement 45K'], desc: 'RED + Facebook สองแพลตฟอร์ม 30+ ประเทศ', slide: 17, highlight: 'RED + Facebook สองแพลตฟอร์ม เทศกาลดอกซากุระ เข้าถึง 30+ ประเทศ ผู้ติดตาม 2.35M', extra_data: ['Views: 5M', 'Engagement: 45K', 'Countries: 30+', 'Followers: 2.35M'] },
          { cat: 'tourism', title: 'Wuyuan Wunvzhou', stats: ['Views 5M', 'CPM 29.85'], desc: 'บล็อกเกอร์ไลฟ์สไตล์ + โปรโมทข้ามประเภท CPE 1.04', slide: 18, highlight: 'วิดีโอสร้างสรรค์ + เนื้อหาข้ามประเภท CPM 29.85, CPE 1.04, CPC 0.02', extra_data: ['Views: 5M', 'CPM: 29.85', 'CPE: 1.04', 'CPC: 0.02'] },
          { cat: 'tourism', title: 'Meizhou Tourism', stats: ['Views 359K', 'CPM<50'], desc: 'YouTube วิดีโอแบบยาว วัฒนธรรมแคะ', slide: 19, highlight: 'YouTube วิดีโอแบบยาวแสดงวัฒนธรรมแคะ ผลระยะยาว ROI ยั่งยืน', extra_data: ['Views: 359K', 'CPM: <50', 'Platform: YouTube', 'Strategy: Long-form'] },
          { cat: 'tourism', title: 'Yunqiu Mountain Festival', stats: ['Views 14.6M', 'Followers 18.5M'], desc: '3 หัวข้อ 10M+ ประสบการณ์ข้ามวัฒนธรรม', slide: 20, highlight: '3 หัวข้อ 10M+ ประสบการณ์ข้ามวัฒนธรรม + วัฒนธรรมการเก็บเกี่ยว นำเสนอสู่สายตาโลก', extra_data: ['Views: 14.6M', 'Followers: 18.5M', 'Topics: 3 with 10M+', 'Model: Cross-cultural'] },
          { cat: 'tourism', title: 'Chengdu Xiling Mountain', stats: ['Views 885K', 'Followers 9.8M'], desc: 'CPM≈50, CPE≈0.59, Engagement 76K', slide: 21, highlight: 'Xiling Snow Mountain ใกล้เฉิงตู CPM≈50, CPE≈0.59', extra_data: ['Views: 885K', 'Followers: 9.8M', 'CPM: ≈50', 'CPE: ≈0.59'] },
          { cat: 'tourism', title: 'Chongqing Guanyinqiao', stats: ['Views 3M', 'Engagement 134K'], desc: 'วิดีโอไวรัล 472K views, CPM≈56', slide: 22, highlight: 'วิดีโอไวรัลเดี่ยว 472K views ทัศนียภาพ "ไซเบอร์พังค์" ฉงชิ่ง', extra_data: ['Views: 3M', 'Engagement: 134K', 'Top Video: 472K', 'CPM: ≈56'] },
          { cat: 'tourism', title: 'Guizhou Zunyi', stats: ['Views 300K', 'Followers 900K'], desc: 'การกำหนดเป้าหมายที่แม่นยำ', slide: 23, highlight: 'การท่องเที่ยวสีแดงและธรรมชาติ การกำหนดเป้าหมายที่แม่นยำ', extra_data: ['Views: 300K', 'Followers: 900K', 'Engagement: 2K', 'Strategy: Precision'] },
          { cat: 'tourism', title: 'Sandu Mountain Sports Park', stats: ['Exposure 4.63M', 'Engagement 4.7K'], desc: 'RED แพลตฟอร์มหลัก ครีเอเตอร์ 17 คน 8 ประเทศ', slide: 24, highlight: 'RED แพลตฟอร์มหลัก ครีเอเตอร์ 17 คน 8 ประเทศ CPM 67, CPC 0.23', extra_data: ['Exposure: 4.63M', 'Engagement: 4.7K', 'Creators: 17', 'Countries: 8'] },
          { cat: 'tourism', title: 'Nanchang × Trip.com', stats: ['Views 3.2M'], desc: 'ครีเอเตอร์จาก ZA/CA/TH/VN 20M+ followers', slide: 25, highlight: 'ร่วมกับ Trip.com ครีเอเตอร์จากแอฟริกาใต้/แคนาดา/ไทย/เวียดนาม ผู้ติดตามรวม 20M+', extra_data: ['Views: 3.2M', 'Followers: 20M+', 'Countries: ZA/CA/TH/VN', 'Partner: Trip.com'] },
          { cat: 'tourism', title: 'Xitang Ancient Town', stats: ['Views 167K', 'Engagement 12.2K'], desc: 'วัฒนธรรมเมืองน้ำเจียงหนาน', slide: 26, highlight: 'สถาปัตยกรรมและวิถีชีวิตเมืองน้ำเจียงหนาน แบ่งปันวัฒนธรรมจีนแท้ๆ', extra_data: ['Views: 167K', 'Engagement: 12.2K', 'Theme: Jiangnan culture'] },
          { cat: 'brand', title: 'Qiaqia Seeds CNY', stats: ['Exposure 1.34M', '7 Countries'], desc: 'การตลาดเชิงกิจกรรมต่างชาติกินเมล็ดทานตะวัน', slide: 27, highlight: 'การตลาดเชิงกิจกรรม "ต่างชาติกินเมล็ดทานตะวัน" 7 ประเทศ RED 1.3M views 401K likes', extra_data: ['Exposure: 1.34M', 'Countries: 7', 'RED: 1.3M views', 'Likes: 401K'] },
          { cat: 'brand', title: 'Tsingtao Beer', stats: ['Per Post 100K+'], desc: 'Billboard + มุมมองต่างชาติ สวนฮันกัง', slide: 29, highlight: 'เปิดตัวแบบ Billboard + มุมมองต่างชาติ ซอฟต์อินเสิร์ตที่สวนฮันกัง เกาหลี', extra_data: ['Per Post: 100K+', 'Scene: Hangang Park', 'Style: Billboard + soft'] },
          { cat: 'brand', title: 'WALOVI (Wanglaoji)', stats: ['Views 130M', 'Engagement 1M'], desc: 'KOL ระดับล้าน 43 คน + KOC 300+ คน', slide: 30, highlight: 'KOL ระดับล้าน 43 คน + KOC 300+ คน Topic 130M, CPM≈13.1, CPE≈0.33', extra_data: ['Views: 130M', 'Engagement: 1M', 'KOLs: 43 million-level', 'CPM: ≈13.1'] },
          { cat: 'brand', title: 'Carlton CNY Gifts', stats: ['Views 993K', 'Engagement 60K'], desc: 'มุมมองครีเอเตอร์ต่างชาติ + ความใกล้ชิดสูง', slide: 31, highlight: 'ครีเอเตอร์ต่างชาติตีความวัฒนธรรมของขวัญตรุษจีน มุมมองที่แตกต่าง ความแปลกใหม่สร้างความไว้วางใจ', extra_data: ['Views: 993K', 'Engagement: 60K', 'Strategy: Differentiated'] },
          { cat: 'brand', title: 'Yangwang U8 Test Drive', stats: ['Exposure 4.14M+'], desc: 'YouTuber 6M ทดลองขับ รถยนต์จีนสู่โลก', slide: 32, highlight: 'YouTuber 6M ผู้ติดตามทดลองขับ Yangwang U8 ครีเอเตอร์ 3 คน รวม 4.14M+ exposure', extra_data: ['Exposure: 4.14M+', 'YouTuber: 6M', 'Creators: 3', 'Theme: China auto global'] },
          { cat: 'brand', title: 'Canton Fair Creator Tour', stats: ['Views 2.93M'], desc: 'สองแพลตฟอร์ม ขยายอิทธิพลระหว่างประเทศ', slide: 33, highlight: 'ครีเอเตอร์ต่างชาติเยี่ยมชมงาน Canton Fair สองแพลตฟอร์ม โมเดลข้อมูลที่ใช้ซ้ำได้', extra_data: ['Views: 2.93M', 'Engagement: 10.5K', 'Model: Dual-platform', 'Feature: Reusable'] },
          { cat: 'brand', title: 'Pony.ai Robotaxi', stats: ['Views 214K'], desc: 'L4 ขับขี่อัตโนมัติ × บริบทโซเชียล', slide: 34, highlight: 'L4 ขับขี่อัตโนมัติ × บริบทโซเชียล ทลายกำแพงการสื่อสารเทคโนโลยี เข้าถึงฮ่องกงและ GBA', extra_data: ['Views: 214K', 'Engagement: 10.3K', 'Theme: L4 autonomous', 'Audience: HK & GBA'] },
          { cat: 'brand', title: 'ZKT + Laifen', stats: ['Followers 3.2M'], desc: 'SEA + US สองตลาด รีวิวแกะกล่องท้องถิ่น', slide: 35, highlight: 'SEA + US สองตลาด รีวิวแกะกล่องท้องถิ่น + ครีเอเตอร์ 3C แนวตั้ง', extra_data: ['Followers: 3.2M', 'Markets: SEA + US', 'Style: Localized unboxing'] },
          { cat: 'brand', title: 'DeRUCCI Mattress', stats: ['Views 152K'], desc: 'IG ไลฟ์สไตล์ Vlog + YouTube รีวิวเทค', slide: 36, highlight: 'IG ไลฟ์สไตล์ Vlog + YouTube รีวิว AI เตียงอัจฉริยะ "เทคโนโลยี + การนอนหลับ"', extra_data: ['Views: 152K', 'Engagement: 8.12K', 'Platforms: IG + YouTube'] },
          { cat: 'brand', title: 'HARMAY Beauty', stats: ['Views 3.5M', 'Engagement 18.6K'], desc: 'สุนทรียศาสตร์พื้นที่ + ช้อปปิ้งแบบดื่มด่ำ', slide: 37, highlight: 'HARMAY สุนทรียศาสตร์พื้นที่ + ช้อปปิ้งแบบดื่มด่ำ "ค้นหาออนไลน์ → เยี่ยมชมออฟไลน์ → แชร์"', extra_data: ['Views: 3.5M', 'Engagement: 18.6K', 'Theme: Space aesthetics'] },
          { cat: 'brand', title: 'ibis Hotel', stats: ['Views 304K', 'Engagement 13.9K'], desc: 'RED strategy + Douyin highlights', slide: 38, highlight: 'RED strategy (Shanghai/Beijing guide) + Douyin highlights (bar front desk) กลยุทธ์สองแพลตฟอร์ม', extra_data: ['Views: 304K', 'Engagement: 13.9K', 'Platforms: RED + Douyin'] },
          { cat: 'brand', title: 'China Merchants Cruise', stats: ['Views 639K', 'Engagement 17.6K'], desc: 'ครีเอเตอร์ 12 คน × 5 รอบ วิวทะเล + สะพาน HK-Zhuhai-Macao', slide: 39, highlight: 'ครีเอเตอร์ 12 คน 5 รอบ วิวทะเล + สะพานฮ่องกง-จูไห่-มาเก๊า เนื้อหาท่องเที่ยวพรีเมียม', extra_data: ['Views: 639K', 'Engagement: 17.6K', 'Creators: 12', 'Rounds: 5'] }
        ]
      },
      contact: {
        label: 'ติดต่อเรา',
        title: 'ทำให้แบรนด์จีนเป็นที่รู้จักทั่วโลก',
        desc: 'ไม่ว่าคุณจะเป็นแบรนด์ จุดหมายปลายทาง หรือหน่วยงานรัฐบาล เรามีโซลูชันที่ออกแบบเฉพาะสำหรับคุณ',
        services: [
          { icon: '📡', title: 'การซื้อสื่อครีเอเตอร์ระดับโลก', desc: 'TikTok / Instagram / YouTube / Facebook' },
          { icon: '🚀', title: 'การตลาดแบรนด์ต่างประเทศ', desc: 'การสร้างแบรนด์ระดับโลกแบบเต็มช่องทาง' },
          { icon: '🎬', title: 'การร่วมสร้างคอนเทนต์ระดับโลก', desc: 'วิดีโอสั้น แฮชแท็กชาเลนจ์ การเล่าเรื่องแบรนด์' }
        ],
        emails: [
          { label: 'ความร่วมมือทางธุรกิจ', name: 'Aryln', email: 'Lizilin@boomsj.net' },
          { label: 'ความร่วมมือครีเอเตอร์', name: 'Skai', email: 'Lairuihong@boomsj.net' }
        ],
        cta: 'ติดต่อเราทันที'
      },
      footer: {
        brand: 'BOOM TECHNOLOGY GROUP | BOOM MEDIA ASIA',
        copy: '© 2025 BOOM TECHNOLOGY GROUP. All Rights Reserved.'
      }
    }
  };

  // ==================== STATE ====================
  let currentLang = localStorage.getItem('boom-lang') || 'zh';
  let currentCaseFilter = 'all';
  let currentModalIndex = -1;
  let filteredCases = [];
  let langChangeListeners = [];

  // ==================== DOM HELPERS ====================
  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return document.querySelectorAll(sel); }

  // ==================== HELPERS ====================
  function t(path) {
    const keys = path.split('.');
    let obj = i18n[currentLang];
    for (const k of keys) {
      if (obj && obj[k] !== undefined) obj = obj[k];
      else return path;
    }
    return obj;
  }

  function addLangListener(fn) {
    langChangeListeners.push(fn);
  }

  function notifyLangChange() {
    langChangeListeners.forEach(fn => fn());
  }

  // ==================== RENDER ====================
  function renderAll() {
    renderNav();
    renderHero();
    renderStats();
    renderAbout();
    renderCapability();
    renderStrength();
    renderTalent();
    renderClients();
    renderCases();
    renderContact();
    renderFooter();
    updateLangButtons();
    document.documentElement.lang = currentLang === 'th' ? 'th' : currentLang === 'en' ? 'en' : 'zh-CN';
    notifyLangChange();
  }

  function renderNav() {
    const nav = $('#main-nav');
    if (!nav) return;
    nav.innerHTML = Object.entries(t('nav')).map(([key, label]) =>
      `<a href="#${key}">${label}</a>`
    ).join('');
  }

  function renderHero() {
    const el = $('#home');
    if (!el) return;
    el.querySelector('.hero-badge').textContent = t('hero.badge');
    el.querySelector('.hero-title').innerHTML = `${t('hero.title1')}<br><span class="red">${t('hero.title2')}</span>`;
    el.querySelector('.hero-subtitle').textContent = t('hero.subtitle');
    const ctas = el.querySelectorAll('.hero-cta .btn');
    if (ctas[0]) ctas[0].textContent = t('hero.cta1');
    if (ctas[1]) ctas[1].textContent = t('hero.cta2');
  }

  function renderStats() {
    const container = $('#stats-row');
    if (!container) return;
    const stats = t('stats');
    container.innerHTML = stats.map(s =>
      `<div class="stat-item"><div class="stat-number">${s.num}<span class="unit">${s.unit}</span></div><div class="stat-label">${s.label}</div></div>`
    ).join('');
  }

  function renderAbout() {
    const section = $('#about');
    if (!section) return;
    section.querySelector('.section-label').textContent = t('about.label');
    section.querySelector('.section-title').textContent = t('about.title');
    const texts = section.querySelectorAll('.about-text p');
    if (texts[0]) texts[0].textContent = t('about.text1');
    if (texts[1]) texts[1].textContent = t('about.text2');
    if (texts[2]) texts[2].textContent = t('about.text3');

    const highlights = t('about.highlights');
    const hlCards = section.querySelectorAll('.highlight-card');
    hlCards.forEach((card, i) => {
      if (highlights[i]) {
        card.querySelector('.hl-title').textContent = highlights[i].title;
        card.querySelector('.hl-desc').textContent = highlights[i].desc;
      }
    });

    const groupLogoLabel = section.querySelector('.about-group-logo p');
    if (groupLogoLabel) groupLogoLabel.textContent = t('about.group_logo_label');

    const timelineContainer = section.querySelector('.timeline');
    const timelineTitle = section.querySelector('.about-timeline-title');
    if (timelineTitle) timelineTitle.textContent = t('about.timeline_label');
    if (timelineContainer) {
      timelineContainer.innerHTML = t('about.timeline').map(item =>
        `<div class="timeline-item fade-in"><div class="timeline-year">${item.year}</div><div class="timeline-title">${item.title}</div><div class="timeline-desc">${item.desc}</div></div>`
      ).join('');
    }
  }

  function renderCapability() {
    const section = $('#capability');
    if (!section) return;
    section.querySelector('.section-label').textContent = t('capability.label');
    section.querySelector('.section-title').textContent = t('capability.title');
    section.querySelector('.section-desc').textContent = t('capability.desc');

    const cards = section.querySelectorAll('.cap-card');
    const capData = t('capability.cards');
    cards.forEach((card, i) => {
      if (capData[i]) {
        card.querySelector('.cap-icon').textContent = capData[i].icon;
        card.querySelector('.cap-title').textContent = capData[i].title;
        card.querySelector('.cap-desc').textContent = capData[i].desc;
      }
    });

    const processLabel = section.querySelector('.process-label');
    if (processLabel) processLabel.textContent = t('capability.process_label');
    const steps = section.querySelectorAll('.process-step');
    const processData = t('capability.process');
    steps.forEach((step, i) => {
      if (processData[i]) {
        step.querySelector('.step-title').textContent = processData[i].title;
        step.querySelector('.step-desc').textContent = processData[i].desc;
      }
    });

    const advLabel = section.querySelector('.adv-label');
    if (advLabel) advLabel.textContent = t('capability.adv_label');
    const advCards = section.querySelectorAll('.adv-card');
    const advData = t('capability.adv');
    advCards.forEach((card, i) => {
      if (advData[i]) {
        card.querySelector('.adv-num').textContent = advData[i].num;
        card.querySelector('.adv-body h4').textContent = advData[i].title;
        card.querySelector('.adv-body p').textContent = advData[i].desc;
      }
    });
  }

  function renderStrength() {
    const section = $('#strength');
    if (!section) return;
    section.querySelector('.section-label').textContent = t('strength.label');
    section.querySelector('.section-title').textContent = t('strength.title');
    const cards = section.querySelectorAll('.strength-card');
    const data = t('strength.cards');
    cards.forEach((card, i) => {
      if (data[i]) {
        card.querySelector('h4').textContent = data[i].title;
        card.querySelector('p').textContent = data[i].desc;
      }
    });
  }

  function renderTalent() {
    const section = $('#talent');
    if (!section) return;
    section.querySelector('.section-label').textContent = t('talent.label');
    section.querySelector('.section-title').textContent = t('talent.title');
    section.querySelector('.section-desc').textContent = t('talent.desc');

    const featuredEl = section.querySelector('.talent-featured');
    const grid = section.querySelector('.talent-grid');

    // Talent image mapping — uses organized photos from output/images/talents/
    const talentImages = [
      '../images/talents/PANDABOI.png',          // 0: PANDABOI (78M+)
      '../images/talents/Doug Marcaida.png',     // 1: Doug Marcaida (5.09M+)
      '../images/talents/traveltomtom.png',      // 2: traveltomtom (3.5M+)
      '../images/talents/piriawes.png',          // 3: piriawes (2.5M+)
      '../images/talents/Brent Timm Travel.jpg', // 4: Brent Timm Travel (2.3M+)
      '../images/talents/jessmelu.png',          // 5: jessmelu (2M+)
      '../images/talents/lexinchina.png',        // 6: lexinchina (1.9M+)
      '../images/talents/petchppc.png',          // 7: petchppc (1.8M+)
      '../images/talents/TC IN CHINA.png',       // 8: TC IN CHINA (1.3M+)
      '../images/talents/chloe jade travels.png',// 9: chloe jade travels (1M+)
      '../images/talents/Edward Halim.png',      // 10: Edward Halim (1M+)
      '../images/talents/2passports1dream.jpg',  // 11: 2passports1dream (1M+)
      '../images/talents/Jack and Sophia.png',   // 12: Jack and Sophia (700K+)
      '../images/talents/Chi đi Chill.png',      // 13: Chi đi Chill (600K+)
      '../images/talents/passportvisionz_.jpg',          // 14: passportvisionz_ (328K+)
      '../images/talents/Ira Nova.jpg',                  // 15: Ira Nova (420K+)
      '../images/talents/wavyute.jpg',                   // 16: wavyute (780.3K+)
      '../images/talents/tianmei.qiqi 泰国KK.jpg',       // 17: tianmei.qiqi 泰国KK (880.4K+)
      '../images/talents/倪暄 Eli.jpg',                   // 18: 倪暄 Eli (342K+)
      '../images/talents/Nikki.jpg',                      // 19: Nikki (331K+)
      '../images/talents/exteriorglam.jpg',               // 20: exteriorglam (1.31M+)
      '../images/talents/提姆哥和妮可姐.jpg',              // 21: 提姆哥和妮可姐 (616K+)
      '../images/talents/amottivation.jpg',               // 22: amottivation (1.36M+)
      '../images/talents/Niranjan.jpg',                   // 23: Niranjan (2M+)
      '../images/talents/CastCrafter.jpg',                // 24: CastCrafter (631K+)
      '../images/talents/tonmaiiiiiiiiii.jpg',            // 25: tonmaiiiiiiiiii (574.1K+)
      '../images/talents/neoluvo.jpg',                    // 26: neoluvo (1.4M+)
      '../images/talents/Josh the Intern.jpg',            // 27: Josh the Intern (2M+)
      '../images/talents/_mehmetbuse.jpg',                // 28: _mehmetbuse (2.7M+)
      '../images/talents/Katie Feeney.jpg',               // 29: Katie Feeney (12.73M+)
      '../images/talents/milena__94.jpg',                 // 30: milena__94 (1.9M+)
      '../images/talents/davidmaluco_.jpg',               // 31: davidmaluco_ (3.91M+)
      '../images/talents/youusaff.jpg',                   // 32: youusaff (700K+)
      '../images/talents/kuya_panch.jpg',                 // 33: kuya_panch (5.6M+)
      '../images/talents/thechavezfamilyy.jpg',           // 34: thechavezfamilyy (2.1M+)
      '../images/talents/itsjustourlife.jpg',             // 35: itsjustourlife (1.8M+)
      '../images/talents/you_fay.jpg',                    // 36: you_fay (2.4M+)
      '../images/talents/selma.sofiane.jpg',              // 37: selma.sofiane (2.4M+)
      '../images/talents/mbymelanightt.jpg',              // 38: mbymelanightt (1.93M+)
      '../images/talents/justt__zizouu.jpg',              // 39: justt__zizouu (12.26M+)
      '../images/talents/jannanickofficial.jpg',          // 40: jannanickofficial (2.36M+)
      '../images/talents/美有姫.jpg',                      // 41: 美有姫 (628K+)
      '../images/talents/Magnacars.jpg',                  // 42: Magnacars (1.87M+)
      '../images/talents/bepnhalinh.jpg',                 // 43: bepnhalinh (1.1M+)
      '../images/talents/dangthuhaf.jpg',                 // 44: dangthuhaf (3.7M+)
    ];

    // Render Doug Marcaida as featured card
    const featured = t('talent.featured');
    if (featuredEl && featured) {
      const imgSrc = talentImages[1] || '';  // Doug is index 1
      featuredEl.innerHTML = `
        <div class="talent-featured-card fade-in">
          <div class="talent-featured-avatar">
            ${imgSrc ? `<img src="${imgSrc}" alt="${featured.name}" loading="lazy" onerror="this.style.display='none'">` : ''}
          </div>
          <div class="talent-featured-info">
            <div class="talent-featured-title">${featured.title}</div>
            <div class="talent-featured-name">${featured.name}</div>
            <div class="talent-featured-followers">${featured.followers} Followers</div>
            <div class="talent-featured-desc">${featured.desc}</div>
          </div>
        </div>`;
    }

    // Render remaining 13 talents (exclude Doug at index 1)
    if (grid) {
      const creators = t('talent.creators');
      const others = creators.filter((c, i) => i !== 1);
      const otherImages = talentImages.filter((img, i) => i !== 1);
      grid.innerHTML = others.map((c, i) => {
        const imgSrc = otherImages[i] || '';
        const avatarHtml = imgSrc
          ? `<img src="${imgSrc}" alt="${c.name}" class="talent-avatar" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">`
          : '';
        const fallbackHtml = `<div class="talent-avatar-fallback" style="display:${imgSrc?'none':'flex'};width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg, #1a1a1a, #222);align-items:center;justify-content:center;font-size:1.3rem;color:var(--red);margin:0 auto;">${c.name.charAt(0)}</div>`;
        return `<div class="talent-card fade-in">${avatarHtml}${fallbackHtml}<div class="talent-name">${c.name}</div><div class="talent-followers">${c.followers} Followers</div></div>`;
      }).join('');

      // Append "more creators" line below grid
      const existingMore = section.querySelector('.talent-more');
      if (existingMore) existingMore.remove();
      const moreText = t('talent.more_text');
      if (moreText && moreText !== 'talent.more_text') {
        const moreEl = document.createElement('div');
        moreEl.className = 'talent-more';
        moreEl.innerHTML = `<p>${moreText}</p>`;
        grid.insertAdjacentElement('afterend', moreEl);
      }
    }
  }

  function renderClients() {
    const section = $('#clients');
    if (!section) return;
    section.querySelector('.section-label').textContent = t('clients.label');
    section.querySelector('.section-title').textContent = t('clients.title');
    const statsTitle = section.querySelector('.clients-stats-banner h3');
    if (statsTitle) statsTitle.innerHTML = '<span>' + t('clients.stats_title').split('，')[0] + '</span>，' + (t('clients.stats_title').split('，')[1] || '');
    const statsDesc = section.querySelector('.clients-stats-banner p');
    if (statsDesc) statsDesc.textContent = t('clients.stats_desc');

    // Render slide_13 client logos (35 images: slide_13_img2.png through slide_13_img35.png)
    const grid = $('#clients-grid');
    if (!grid) return;
    let logosHtml = '';
    for (let i = 2; i <= 35; i++) {
      const imgPath = `../images/slide_13_img${i}.png`;
      logosHtml += `<div class="client-logo-item"><img src="${imgPath}" alt="Client Logo" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`;
    }
    grid.innerHTML = logosHtml;
  }

  function renderCases() {
    const section = $('#cases');
    if (!section) return;
    section.querySelector('.section-label').textContent = t('cases.label');
    section.querySelector('.section-title').textContent = t('cases.title');
    section.querySelector('.section-desc').textContent = t('cases.desc');

    const filters = section.querySelectorAll('.case-filter');
    const filterLabels = [t('cases.filter_all'), t('cases.filter_tourism'), t('cases.filter_brand')];
    filters.forEach((f, i) => { if (filterLabels[i]) f.textContent = filterLabels[i]; });

    filterCases();
  }

  function filterCases() {
    const grid = $('#case-grid');
    if (!grid) return;
    const items = t('cases.items');
    filteredCases = currentCaseFilter === 'all' ? items : items.filter(item => item.cat === currentCaseFilter);

    grid.innerHTML = filteredCases.map((item, idx) => {
      const tagClass = item.cat === 'tourism' ? 'tourism' : 'brand';
      const tagLabel = item.cat === 'tourism' ? t('cases.tourism_label') : t('cases.brand_label');
      const cover = getCaseCover(item.slide);
      return `<div class="case-card fade-in" data-case-index="${idx}" onclick="window._openCaseModal(${idx})">
        <div class="case-img">${cover ? `<img src="${cover}" alt="${item.title}" loading="lazy">` : `<span class="case-img-placeholder">${item.title}</span>`}</div>
        <div class="case-body">
          <span class="case-tag ${tagClass}">${tagLabel}</span>
          <div class="case-title">${item.title}</div>
          <div class="case-stats">${item.stats.map(s => `<span class="case-stat">${s}</span>`).join('')}</div>
          <div class="case-desc">${item.desc}</div>
          <span class="case-view-more">查看详情 →</span>
        </div>
      </div>`;
    }).join('');
  }

  // ==================== MODAL ====================
  // Image mapping: loaded from output/images/cases/slideXX/ folders.
  // Each slide folder contains real case images (screenshots, photos).
  // SVG files are excluded. Cover = first image alphabetically.
  function getCaseImages(slideNum) {
    const MAP = {
      14: ['../images/cases/slide14/slide14_img03.png','../images/cases/slide14/slide14_img04.png','../images/cases/slide14/slide14_img05.png','../images/cases/slide14/slide14_img06.png','../images/cases/slide14/slide14_img07.png','../images/cases/slide14/slide14_img08.png'],
      15: ['../images/cases/slide15/slide15_img01.jpeg','../images/cases/slide15/slide15_img02.jpeg','../images/cases/slide15/slide15_img03.jpeg','../images/cases/slide15/slide15_img04.png','../images/cases/slide15/slide15_img05.png','../images/cases/slide15/slide15_img06.png','../images/cases/slide15/slide15_img07.png','../images/cases/slide15/slide15_img08.jpeg','../images/cases/slide15/slide15_img13.png','../images/cases/slide15/slide15_img14.png','../images/cases/slide15/slide15_img15.png','../images/cases/slide15/slide15_img16.jpeg'],
      16: ['../images/cases/slide16/slide16_img08.jpeg','../images/cases/slide16/slide16_img11.png','../images/cases/slide16/slide16_img12.png','../images/cases/slide16/slide16_img13.jpeg','../images/cases/slide16/slide16_img14.jpeg','../images/cases/slide16/slide16_img15.png','../images/cases/slide16/slide16_img16.jpeg','../images/cases/slide16/slide16_img17.jpeg','../images/cases/slide16/slide16_img18.jpeg','../images/cases/slide16/slide16_img19.jpeg','../images/cases/slide16/slide16_img20.jpeg'],
      17: ['../images/cases/slide17/slide17_img08.jpeg','../images/cases/slide17/slide17_img09.jpeg','../images/cases/slide17/slide17_img10.png','../images/cases/slide17/slide17_img12.png','../images/cases/slide17/slide17_img13.png','../images/cases/slide17/slide17_img14.png','../images/cases/slide17/slide17_img15.png','../images/cases/slide17/slide17_img16.png','../images/cases/slide17/slide17_img18.png','../images/cases/slide17/slide17_img19.jpeg','../images/cases/slide17/slide17_img20.png','../images/cases/slide17/slide17_img21.jpeg','../images/cases/slide17/slide17_img22.jpeg','../images/cases/slide17/slide17_img23.jpeg','../images/cases/slide17/slide17_img24.jpeg','../images/cases/slide17/slide17_img25.jpeg'],
      18: ['../images/cases/slide18/slide18_img01.png','../images/cases/slide18/slide18_img04.png','../images/cases/slide18/slide18_img05.jpeg','../images/cases/slide18/slide18_img06.jpeg','../images/cases/slide18/slide18_img07.jpeg','../images/cases/slide18/slide18_img08.jpeg','../images/cases/slide18/slide18_img09.jpeg','../images/cases/slide18/slide18_img11.png','../images/cases/slide18/slide18_img15.png'],
      19: ['../images/cases/slide19/slide19_img01.png','../images/cases/slide19/slide19_img02.png','../images/cases/slide19/slide19_img03.png'],
      20: ['../images/cases/slide20/slide20_img07.png','../images/cases/slide20/slide20_img08.png','../images/cases/slide20/slide20_img09.png'],
      21: ['../images/cases/slide21/slide21_img08.png','../images/cases/slide21/slide21_img09.png','../images/cases/slide21/slide21_img11.png','../images/cases/slide21/slide21_img12.png','../images/cases/slide21/slide21_img13.png'],
      22: ['../images/cases/slide22/1.png','../images/cases/slide22/2.png','../images/cases/slide22/slide22_img08.png','../images/cases/slide22/slide22_img09.png','../images/cases/slide22/slide22_img10.png','../images/cases/slide22/slide22_img12.png'],
      23: ['../images/cases/slide23/slide23_img01.png','../images/cases/slide23/slide23_img03.png','../images/cases/slide23/slide23_img04.png','../images/cases/slide23/slide23_img05.png','../images/cases/slide23/slide23_img06.png','../images/cases/slide23/slide23_img10.png','../images/cases/slide23/slide23_img12.png','../images/cases/slide23/slide23_img13.png'],
      24: ['../images/cases/slide24/slide24_img04.png','../images/cases/slide24/slide24_img05.png','../images/cases/slide24/slide24_img06.png'],
      25: ['../images/cases/slide25/slide25_img01.png','../images/cases/slide25/slide25_img02.png','../images/cases/slide25/slide25_img03.png','../images/cases/slide25/slide25_img04.png','../images/cases/slide25/slide25_img05.jpeg','../images/cases/slide25/slide25_img06.jpeg','../images/cases/slide25/slide25_img07.jpeg','../images/cases/slide25/slide25_img11.jpeg','../images/cases/slide25/slide25_img18.png'],
      26: ['../images/cases/slide26/slide26_img05.png','../images/cases/slide26/slide26_img06.png','../images/cases/slide26/slide26_img07.png','../images/cases/slide26/slide26_img08.png','../images/cases/slide26/slide26_img09.png','../images/cases/slide26/slide26_img10.png'],
      27: ['../images/cases/slide27/slide27_img01.jpeg','../images/cases/slide27/slide27_img02.jpeg','../images/cases/slide27/slide27_img03.jpeg','../images/cases/slide27/slide27_img04.jpeg','../images/cases/slide27/slide27_img05.jpeg','../images/cases/slide27/slide27_img06.jpeg','../images/cases/slide27/slide27_img07.jpeg','../images/cases/slide27/slide28_img01.png','../images/cases/slide27/slide28_img03.png','../images/cases/slide27/slide28_img04.png','../images/cases/slide27/slide28_img05.jpeg','../images/cases/slide27/slide28_img07.png','../images/cases/slide27/slide28_img09.png','../images/cases/slide27/slide28_img10.png','../images/cases/slide27/slide28_img11.png','../images/cases/slide27/slide28_img12.png','../images/cases/slide27/slide28_img13.png','../images/cases/slide27/slide28_img14.png','../images/cases/slide27/slide28_img15.png','../images/cases/slide27/slide28_img16.png','../images/cases/slide27/slide28_img17.png','../images/cases/slide27/slide28_img18.png','../images/cases/slide27/slide28_img19.png','../images/cases/slide27/slide28_img20.png','../images/cases/slide27/slide28_img21.png','../images/cases/slide27/slide28_img22.png','../images/cases/slide27/slide28_img23.png','../images/cases/slide27/slide28_img25.png','../images/cases/slide27/slide28_img26.png','../images/cases/slide27/slide28_img27.png','../images/cases/slide27/slide28_img28.png','../images/cases/slide27/slide28_img29.png','../images/cases/slide27/slide28_img30.png','../images/cases/slide27/slide28_img31.png','../images/cases/slide27/slide28_img32.png','../images/cases/slide27/slide28_img33.png','../images/cases/slide27/slide28_img34.png'],
      28: ['../images/cases/slide28/slide27_img01.jpeg','../images/cases/slide28/slide27_img02.jpeg','../images/cases/slide28/slide27_img03.jpeg','../images/cases/slide28/slide27_img04.jpeg','../images/cases/slide28/slide27_img05.jpeg','../images/cases/slide28/slide27_img06.jpeg','../images/cases/slide28/slide27_img07.jpeg','../images/cases/slide28/slide28_img01.png','../images/cases/slide28/slide28_img03.png','../images/cases/slide28/slide28_img04.png','../images/cases/slide28/slide28_img05.jpeg','../images/cases/slide28/slide28_img07.png','../images/cases/slide28/slide28_img09.png','../images/cases/slide28/slide28_img10.png','../images/cases/slide28/slide28_img11.png','../images/cases/slide28/slide28_img12.png','../images/cases/slide28/slide28_img13.png','../images/cases/slide28/slide28_img14.png','../images/cases/slide28/slide28_img15.png','../images/cases/slide28/slide28_img16.png','../images/cases/slide28/slide28_img17.png','../images/cases/slide28/slide28_img18.png','../images/cases/slide28/slide28_img19.png','../images/cases/slide28/slide28_img20.png','../images/cases/slide28/slide28_img21.png','../images/cases/slide28/slide28_img22.png','../images/cases/slide28/slide28_img23.png','../images/cases/slide28/slide28_img25.png','../images/cases/slide28/slide28_img26.png','../images/cases/slide28/slide28_img27.png','../images/cases/slide28/slide28_img28.png','../images/cases/slide28/slide28_img29.png','../images/cases/slide28/slide28_img30.png','../images/cases/slide28/slide28_img31.png','../images/cases/slide28/slide28_img32.png','../images/cases/slide28/slide28_img33.png','../images/cases/slide28/slide28_img34.png'],
      29: ['../images/cases/slide29/slide29_img02.png','../images/cases/slide29/slide29_img04.jpeg','../images/cases/slide29/slide29_img05.jpeg','../images/cases/slide29/slide29_img06.jpeg','../images/cases/slide29/slide29_img07.jpeg','../images/cases/slide29/slide29_img10.png','../images/cases/slide29/slide29_img11.png','../images/cases/slide29/slide29_img15.jpeg'],
      30: ['../images/cases/slide30/slide30_img04.png','../images/cases/slide30/slide30_img05.png','../images/cases/slide30/slide30_img06.png','../images/cases/slide30/slide30_img07.png','../images/cases/slide30/slide30_img08.png','../images/cases/slide30/slide30_img09.png','../images/cases/slide30/slide30_img10.png','../images/cases/slide30/slide30_img12.png'],
      31: ['../images/cases/slide31/slide31_img01.jpeg','../images/cases/slide31/slide31_img02.png','../images/cases/slide31/slide31_img03.png','../images/cases/slide31/slide31_img06.jpeg','../images/cases/slide31/slide31_img07.jpeg','../images/cases/slide31/slide31_img08.jpeg','../images/cases/slide31/slide31_img09.jpeg','../images/cases/slide31/slide31_img10.jpeg','../images/cases/slide31/slide31_img11.jpeg','../images/cases/slide31/slide31_img12.jpeg'],
      32: ['../images/cases/slide32/slide32_img01.jpeg','../images/cases/slide32/slide32_img02.jpeg','../images/cases/slide32/slide32_img03.jpeg','../images/cases/slide32/slide32_img06.png','../images/cases/slide32/slide32_img07.png','../images/cases/slide32/slide32_img08.png'],
      33: ['../images/cases/slide33/slide33_img01.png','../images/cases/slide33/slide33_img02.png','../images/cases/slide33/slide33_img03.png','../images/cases/slide33/slide33_img05.png','../images/cases/slide33/slide33_img06.png','../images/cases/slide33/slide33_img07.png','../images/cases/slide33/slide33_img09.png','../images/cases/slide33/slide33_img10.png','../images/cases/slide33/slide33_img11.png','../images/cases/slide33/slide33_img12.png','../images/cases/slide33/slide33_img13.png','../images/cases/slide33/slide33_img14.png','../images/cases/slide33/slide33_img15.png','../images/cases/slide33/slide33_img16.png'],
      34: ['../images/cases/slide34/slide34_img04.png','../images/cases/slide34/slide34_img05.png','../images/cases/slide34/slide34_img06.png','../images/cases/slide34/slide34_img07.png','../images/cases/slide34/slide34_img08.png','../images/cases/slide34/slide34_img09.png'],
      35: ['../images/cases/slide35/slide35_img01.png','../images/cases/slide35/slide35_img04.png','../images/cases/slide35/slide35_img05.png','../images/cases/slide35/slide35_img06.png','../images/cases/slide35/slide35_img11.png'],
      36: ['../images/cases/slide36/slide36_img03.png','../images/cases/slide36/slide36_img04.png','../images/cases/slide36/slide36_img05.png','../images/cases/slide36/slide36_img06.png'],
      37: ['../images/cases/slide37/slide37_img03.png','../images/cases/slide37/slide37_img04.png','../images/cases/slide37/slide37_img05.png','../images/cases/slide37/slide37_img06.png','../images/cases/slide37/slide37_img07.png','../images/cases/slide37/slide37_img09.png','../images/cases/slide37/slide37_img10.png','../images/cases/slide37/slide37_img11.png'],
      38: ['../images/cases/slide38/slide38_img04.png','../images/cases/slide38/slide38_img05.png','../images/cases/slide38/slide38_img06.png','../images/cases/slide38/slide38_img07.png','../images/cases/slide38/slide38_img08.png','../images/cases/slide38/slide38_img09.png'],
      39: ['../images/cases/slide39/slide39_img04.png','../images/cases/slide39/slide39_img05.png','../images/cases/slide39/slide39_img06.png','../images/cases/slide39/slide39_img07.png','../images/cases/slide39/slide39_img08.png','../images/cases/slide39/slide39_img09.png']
    };
    return MAP[slideNum] || [];
  }

  function getCaseCover(slideNum) {
    const imgs = getCaseImages(slideNum);
    return imgs.length > 0 ? imgs[0] : null;
  }

  function openCaseModal(index) {
    currentModalIndex = index;
    const item = filteredCases[index];
    if (!item) return;

    const overlay = $('#case-modal-overlay');
    const modal = $('#case-modal');
    if (!overlay || !modal) return;

    const tagClass = item.cat === 'tourism' ? 'tourism' : 'brand';
    const tagLabel = item.cat === 'tourism' ? t('cases.tourism_label') : t('cases.brand_label');

    // Build data items HTML
    let dataHtml = '';
    if (item.extra_data) {
      dataHtml = item.extra_data.map(d => {
        const parts = d.split(': ');
        return `<div class="modal-data-item"><div class="md-value">${parts[1] || d}</div><div class="md-label">${parts[0] || ''}</div></div>`;
      }).join('');
    }
    if (item.stats) {
      const existingKeys = item.extra_data ? item.extra_data.map(d => d.split(':')[0]) : [];
      item.stats.forEach(s => {
        if (!existingKeys.some(k => s.includes(k))) {
          dataHtml += `<div class="modal-data-item"><div class="md-value">${s}</div><div class="md-label">${currentLang === 'en' ? 'Metric' : '指标'}</div></div>`;
        }
      });
    }

    // Build carousel images from manual map
    const caseImgs = getCaseImages(item.slide);
    let carouselSlides = '';
    let dotsHtml = '';
    caseImgs.forEach((img, i) => {
      carouselSlides += `<div class="modal-carousel-slide" data-slide="${i}">
        <img src="${img}" alt="${item.title} ${i+1}" loading="lazy">
      </div>`;
      dotsHtml += `<button class="modal-carousel-dot${i===0?' active':''}" data-slide="${i}" onclick="window._goToSlide(${i})"></button>`;
    });

    const hasPrev = index > 0;
    const hasNext = index < filteredCases.length - 1;

    modal.innerHTML = `
      <button class="modal-close" onclick="window._closeCaseModal()">✕</button>
      <button class="modal-case-nav prev" onclick="window._prevCase()" ${!hasPrev?'disabled':''}>‹</button>
      <button class="modal-case-nav next" onclick="window._nextCase()" ${!hasNext?'disabled':''}>›</button>
      ${caseImgs.length > 0 ? `
      <div class="modal-carousel">
        <div class="modal-carousel-track" id="modal-carousel-track">${carouselSlides}</div>
        <button class="modal-carousel-arrow prev" onclick="window._carouselPrev()">‹</button>
        <button class="modal-carousel-arrow next" onclick="window._carouselNext()">›</button>
        <div class="modal-carousel-dots">${dotsHtml}</div>
      </div>` : ''}
      <div class="modal-body">
        <span class="case-tag ${tagClass}">${tagLabel}</span>
        <h2>${item.title}</h2>
        <div class="modal-data-grid">${dataHtml}</div>
        <div class="modal-highlight">
          <h4>${currentLang === 'en' ? 'Strategy Highlights' : currentLang === 'th' ? 'ไฮไลท์กลยุทธ์' : '策略亮点'}</h4>
          <p>${item.highlight || item.desc}</p>
        </div>
        <div class="modal-case-counter">${index + 1} / ${filteredCases.length}</div>
      </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    window._currentSlide = 0;
    window._totalSlides = caseImgs.length;
    if (caseImgs.length > 0) updateCarousel();
  }

  function updateCarousel() {
    const track = document.getElementById('modal-carousel-track');
    if (!track) return;
    track.style.transform = `translateX(-${window._currentSlide * 100}%)`;
    // Update dots
    const dots = track.closest('.modal-carousel').querySelectorAll('.modal-carousel-dot');
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === window._currentSlide);
    });
  }

  function closeCaseModal() {
    const overlay = $('#case-modal-overlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextCase() {
    if (currentModalIndex < filteredCases.length - 1) {
      openCaseModal(currentModalIndex + 1);
    }
  }

  function prevCase() {
    if (currentModalIndex > 0) {
      openCaseModal(currentModalIndex - 1);
    }
  }

  function _carouselNext() {
    if (window._currentSlide < window._totalSlides - 1) {
      window._currentSlide++;
      updateCarousel();
    }
  }

  function _carouselPrev() {
    if (window._currentSlide > 0) {
      window._currentSlide--;
      updateCarousel();
    }
  }

  function _goToSlide(idx) {
    window._currentSlide = idx;
    updateCarousel();
  }

  // Expose modal functions globally (for onclick handlers in HTML)
  window._openCaseModal = openCaseModal;
  window._closeCaseModal = closeCaseModal;
  window._nextCase = nextCase;
  window._prevCase = prevCase;
  window._carouselNext = _carouselNext;
  window._carouselPrev = _carouselPrev;
  window._goToSlide = _goToSlide;

  function renderContact() {
    const section = $('#contact');
    if (!section) return;
    section.querySelector('.section-label').textContent = t('contact.label');
    section.querySelector('.section-title').textContent = t('contact.title');
    section.querySelector('.section-desc').textContent = t('contact.desc');

    const cards = section.querySelectorAll('.contact-card');
    const data = t('contact.services');
    cards.forEach((card, i) => {
      if (data[i]) {
        card.querySelector('.contact-icon').textContent = data[i].icon;
        card.querySelector('h4').textContent = data[i].title;
        card.querySelector('p').textContent = data[i].desc;
      }
    });

    const emailsContainer = $('#contact-emails');
    if (emailsContainer) {
      const emails = t('contact.emails') || [];
      emailsContainer.innerHTML = emails.map(e =>
        '<div class="contact-email-item">' +
          '<div class="contact-email-label">' + e.label + '</div>' +
          '<div class="contact-email-name">' + e.name + '</div>' +
          '<div class="contact-email-addr">' + e.email + '</div>' +
        '</div>'
      ).join('');
    }

    const cta = section.querySelector('.btn-primary');
    if (cta) cta.textContent = t('contact.cta');
  }

  function renderFooter() {
    const el = $('#footer');
    if (!el) return;
    el.querySelector('.footer-logo').textContent = t('footer.brand');

    const emailsContainer = $('#footer-emails');
    if (emailsContainer) {
      const emails = t('contact.emails') || [];
      emailsContainer.innerHTML = emails.map(e =>
        '<span>' + e.label + ': </span>' + e.name + ' | ' + e.email
      ).join('<span style="margin:0 16px;color:var(--border-light);">|</span>');
    }

    el.querySelector('.footer-copy').textContent = t('footer.copy');
    const links = el.querySelectorAll('.footer-links a');
    const navData = t('nav');
    const navKeys = Object.keys(navData);
    links.forEach((a, i) => { if (navKeys[i]) a.textContent = navData[navKeys[i]]; });
  }

  function updateLangButtons() {
    $$('.lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
  }

  // ==================== EVENTS ====================
  function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('boom-lang', lang);
    renderAll();
  }

  $$('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
  });

  // Mobile menu
  const mobileBtn = $('.mobile-menu-btn');
  const nav = $('#main-nav');
  if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Case filters
  $$('.case-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.case-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCaseFilter = btn.dataset.filter;
      filterCases();
    });
  });

  // Modal overlay click to close
  const modalOverlay = $('#case-modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === this) closeCaseModal();
    });
  }

  // Keyboard navigation for modal
  document.addEventListener('keydown', function(e) {
    const overlay = $('#case-modal-overlay');
    if (!overlay || !overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeCaseModal();
    if (e.key === 'ArrowRight') nextCase();
    if (e.key === 'ArrowLeft') prevCase();
  });

  // Smooth scroll for nav links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      if (nav) nav.classList.remove('open');
    }
  });

  // Scroll spy for nav active
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const sections = $$('section[id]');
      const scrollPos = window.scrollY + 100;
      sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const link = $(`.nav a[href="#${id}"]`);
        if (link) {
          link.classList.toggle('active', scrollPos >= top && scrollPos < bottom);
        }
      });
    }, 100);
  });

  // Intersection Observer for fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    $$('.fade-in').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  });

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => renderAll());
  } else {
    renderAll();
  }

})();
