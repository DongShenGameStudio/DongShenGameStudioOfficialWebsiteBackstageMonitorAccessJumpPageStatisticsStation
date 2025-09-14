// Dezr.js - 完整的中国地理位置信息映射文件
var locationMapping = {
    // 国家/地区代码映射
    "CN": "中国", "US": "美国", "JP": "日本", "KR": "韩国",
    "UK": "英国", "DE": "德国", "FR": "法国", "RU": "俄罗斯",
    "IN": "印度", "BR": "巴西", "CA": "加拿大", "AU": "澳大利亚",
    
    // 直辖市
    "Beijing": "北京", "Tianjin": "天津", "Shanghai": "上海", "Chongqing": "重庆",
    
    // 省份
    "Hebei": "河北", "Shanxi": "山西", "Liaoning": "辽宁", "Jilin": "吉林",
    "Heilongjiang": "黑龙江", "Jiangsu": "江苏", "Zhejiang": "浙江", "Anhui": "安徽",
    "Fujian": "福建", "Jiangxi": "江西", "Shandong": "山东", "Henan": "河南",
    "Hubei": "湖北", "Hunan": "湖南", "Guangdong": "广东", "Hainan": "海南",
    "Sichuan": "四川", "Guizhou": "贵州", "Yunnan": "云南", "Shaanxi": "陕西",
    "Gansu": "甘肃", "Qinghai": "青海",
    
    // 自治区
    "Guangxi": "广西", "Ningxia": "宁夏", "Xinjiang": "新疆", "Tibet": "西藏", "Inner Mongolia": "内蒙古",
    
    // 特别行政区
    "Hong Kong": "香港", "Macau": "澳门", "Taiwan": "台湾",
    
    // 北京市区县
    "Dongcheng": "东城区", "Xicheng": "西城区", "Chaoyang": "朝阳区", "Fengtai": "丰台区",
    "Shijingshan": "石景山区", "Haidian": "海淀区", "Mentougou": "门头沟区", "Fangshan": "房山区",
    "Tongzhou": "通州区", "Shunyi": "顺义区", "Changping": "昌平区", "Daxing": "大兴区",
    "Huairou": "怀柔区", "Pinggu": "平谷区", "Miyun": "密云区", "Yanqing": "延庆区",
    
    // 上海市区县
    "Huangpu": "黄浦区", "Xuhui": "徐汇区", "Changning": "长宁区", "Jing'an": "静安区",
    "Putuo": "普陀区", "Hongkou": "虹口区", "Yangpu": "杨浦区", "Minhang": "闵行区",
    "Baoshan": "宝山区", "Jiading": "嘉定区", "Pudong": "浦东新区", "Jinshan": "金山区",
    "Songjiang": "松江区", "Qingpu": "青浦区", "Fengxian": "奉贤区", "Chongming": "崇明区",
    
    // 天津市区县
    "Heping": "和平区", "Hedong": "河东区", "Hexi": "河西区", "Nankai": "南开区",
    "Hebei_TJ": "河北区", "Hongqiao": "红桥区", "Dongli": "东丽区", "Xiqing": "西青区",
    "Jinnan": "津南区", "Beichen": "北辰区", "Wuqing": "武清区", "Baodi": "宝坻区",
    "Binhai": "滨海新区", "Ninghe": "宁河区", "Jinghai": "静海区", "Jizhou": "蓟州区",
    
    // 重庆市区县
    "Wanzhou": "万州区", "Fuling": "涪陵区", "Yuzhong": "渝中区", "Dadukou": "大渡口区",
    "Jiangbei": "江北区", "Shapingba": "沙坪坝区", "Jiulongpo": "九龙坡区", "Nan'an": "南岸区",
    "Beibei": "北碚区", "Qijiang": "綦江区", "Dazu": "大足区", "Yubei": "渝北区",
    "Banan": "巴南区", "Qianjiang": "黔江区", "Changshou": "长寿区", "Jiangjin": "江津区",
    "Hechuan": "合川区", "Yongchuan": "永川区", "Liangjiang": "两江新区", "Liangping": "梁平区",
    "Wulong": "武隆区", "Chengkou": "城口县", "Fengdu": "丰都县", "Dianjiang": "垫江县",
    "Zhongxian": "忠县", "Kaixian": "开州区", "Yunyang": "云阳县", "Fengjie": "奉节县",
    "Wushan": "巫山县", "Wuxi": "巫溪县", "Shizhu": "石柱县", "Xiushan": "秀山县",
    "Youyang": "酉阳县", "Pengshui": "彭水县",
    
    // 河北省主要城市和区县
    "Shijiazhuang": "石家庄", "Tangshan": "唐山", "Qinhuangdao": "秦皇岛", "Handan": "邯郸",
    "Xingtai": "邢台", "Baoding": "保定", "Zhangjiakou": "张家口", "Chengde": "承德",
    "Cangzhou": "沧州", "Langfang": "廊坊", "Hengshui": "衡水",
    
    // 山西省主要城市和区县
    "Taiyuan": "太原", "Datong": "大同", "Yangquan": "阳泉", "Changzhi": "长治",
    "Jincheng": "晋城", "Shuozhou": "朔州", "Jinzhong": "晋中", "Yuncheng": "运城",
    "Xinzhou": "忻州", "Linfen": "临汾", "Lvliang": "吕梁",
    
    // 辽宁省主要城市和区县
    "Shenyang": "沈阳", "Dalian": "大连", "Anshan": "鞍山", "Fushun": "抚顺",
    "Benxi": "本溪", "Dandong": "丹东", "Jinzhou": "锦州", "Yingkou": "营口",
    "Fuxin": "阜新", "Liaoyang": "辽阳", "Panjin": "盘锦", "Tieling": "铁岭",
    "Chaoyang_LN": "朝阳", "Huludao": "葫芦岛",
    
    // 吉林省主要城市和区县
    "Changchun": "长春", "Jilin": "吉林", "Siping": "四平", "Liaoyuan": "辽源",
    "Tonghua": "通化", "Baishan": "白山", "Songyuan": "松原", "Baicheng": "白城",
    "Yanbian": "延边",
    
    // 黑龙江省主要城市和区县
    "Harbin": "哈尔滨", "Qiqihar": "齐齐哈尔", "Jixi": "鸡西", "Hegang": "鹤岗",
    "Shuangyashan": "双鸭山", "Daqing": "大庆", "Yichun_HLJ": "伊春", "Jiamusi": "佳木斯",
    "Qitaihe": "七台河", "Mudanjiang": "牡丹江", "Heihe": "黑河", "Suihua": "绥化",
    "Daxinganling": "大兴安岭",
    
    // 江苏省主要城市和区县
    "Nanjing": "南京", "Wuxi": "无锡", "Xuzhou": "徐州", "Changzhou": "常州",
    "Suzhou": "苏州", "Nantong": "南通", "Lianyungang": "连云港", "Huai'an": "淮安",
    "Yancheng": "盐城", "Yangzhou": "扬州", "Zhenjiang": "镇江", "Taizhou_JS": "泰州",
    "Suqian": "宿迁",
    
    // 浙江省主要城市和区县
    "Hangzhou": "杭州", "Ningbo": "宁波", "Wenzhou": "温州", "Jiaxing": "嘉兴",
    "Huzhou": "湖州", "Shaoxing": "绍兴", "Jinhua": "金华", "Quzhou": "衢州",
    "Zhoushan": "舟山", "Taizhou_ZJ": "台州", "Lishui": "丽水",
    
    // 安徽省主要城市和区县
    "Hefei": "合肥", "Wuhu": "芜湖", "Bengbu": "蚌埠", "Huainan": "淮南",
    "Maanshan": "马鞍山", "Huaibei": "淮北", "Tongling": "铜陵", "Anqing": "安庆",
    "Huangshan": "黄山", "Chuzhou": "滁州", "Fuyang": "阜阳", "Suzhou_AH": "宿州",
    "Lu'an": "六安", "Bozhou": "亳州", "Chizhou": "池州", "Xuancheng": "宣城",
    
    // 福建省主要城市和区县
    "Fuzhou": "福州", "Xiamen": "厦门", "Putian": "莆田", "Sanming": "三明",
    "Quanzhou": "泉州", "Zhangzhou": "漳州", "Nanping": "南平", "Longyan": "龙岩",
    "Ningde": "宁德",
    // 福州市区县
    "Gulou_FZ": "鼓楼区", "Taijiang": "台江区", "Cangshan": "仓山区", "Mawei": "马尾区",
    "Jin'an_FZ": "晋安区", "Changle": "长乐区", "Fuqing": "福清市", "Minhou": "闽侯县",
    "Lianjiang_FZ": "连江县", "Luoyuan": "罗源县", "Minqing": "闽清县", "Yongtai": "永泰县",
    "Pingtan": "平潭县",
    // 厦门市区县
    "Siming": "思明区", "Haicang": "海沧区", "Huli": "湖里区", "Jimei": "集美区",
    "Tong'an": "同安区", "Xiang'an": "翔安区",
    // 漳州市区县
    "Xiangcheng_ZZ": "芗城区", "Longwen": "龙文区", "Longhai": "龙海市", "Yunxiao": "云霄县",
    "Zhangpu": "漳浦县", "Zhao'an": "诏安县", "Changtai": "长泰县", "Dongshan": "东山县",
    "Nanjing_ZZ": "南靖县", "Pinghe": "平和县", "Hua'an": "华安县",
    
    // 江西省主要城市和区县
    "Nanchang": "南昌", "Jingdezhen": "景德镇", "Pingxiang": "萍乡", "Jiujiang": "九江",
    "Xinyu": "新余", "Yingtan": "鹰潭", "Ganzhou": "赣州", "Ji'an": "吉安",
    "Yichun_JX": "宜春", "Fuzhou_JX": "抚州", "Shangrao": "上饶",
    
    // 山东省主要城市和区县
    "Jinan": "济南", "Qingdao": "青岛", "Zibo": "淄博", "Zaozhuang": "枣庄",
    "Dongying": "东营", "Yantai": "烟台", "Weifang": "潍坊", "Jining": "济宁",
    "Taian": "泰安", "Weihai": "威海", "Rizhao": "日照", "Linyi": "临沂",
    "Dezhou": "德州", "Liaocheng": "聊城", "Binzhou": "滨州", "Heze": "菏泽",
    
    // 河南省主要城市和区县
    "Zhengzhou": "郑州", "Kaifeng": "开封", "Luoyang": "洛阳", "Pingdingshan": "平顶山",
    "Anyang": "安阳", "Hebi": "鹤壁", "Xinxiang": "新乡", "Jiaozuo": "焦作",
    "Puyang": "濮阳", "Xuchang": "许昌", "Luohe": "漯河", "Sanmenxia": "三门峡",
    "Nanyang": "南阳", "Shangqiu": "商丘", "Xinyang": "信阳", "Zhoukou": "周口",
    "Zhumadian": "驻马店",
    
    // 湖北省主要城市和区县
    "Wuhan": "武汉", "Huangshi": "黄石", "Shiyan": "十堰", "Yichang": "宜昌",
    "Xiangyang": "襄阳", "Ezhou": "鄂州", "Jingmen": "荆门", "Xiaogan": "孝感",
    "Jingzhou": "荆州", "Huanggang": "黄冈", "Xianning": "咸宁", "Suizhou": "随州",
    "Enshi": "恩施", "Xiantao": "仙桃", "Qianjiang_HB": "潜江", "Tianmen": "天门",
    "Shennongjia": "神农架",
    
    // 湖南省主要城市和区县
    "Changsha": "长沙", "Zhuzhou": "株洲", "Xiangtan": "湘潭", "Hengyang": "衡阳",
    "Shaoyang": "邵阳", "Yueyang": "岳阳", "Changde": "常德", "Zhangjiajie": "张家界",
    "Yiyang": "益阳", "Chenzhou": "郴州", "Yongzhou": "永州", "Huaihua": "怀化",
    "Loudi": "娄底", "Xiangxi": "湘西",
    
    // 广东省主要城市和区县
    "Guangzhou": "广州", "Shaoguan": "韶关", "Shenzhen": "深圳", "Zhuhai": "珠海",
    "Shantou": "汕头", "Foshan": "佛山", "Jiangmen": "江门", "Zhanjiang": "湛江",
    "Maoming": "茂名", "Zhaoqing": "肇庆", "Huizhou": "惠州", "Meizhou": "梅州",
    "Shanwei": "汕尾", "Heyuan": "河源", "Yangjiang": "阳江", "Qingyuan": "清远",
    "Dongguan": "东莞", "Zhongshan": "中山", "Chaozhou": "潮州", "Jieyang": "揭阳",
    "Yunfu": "云浮",
    
    // 广西壮族自治区主要城市和区县
    "Nanning": "南宁", "Liuzhou": "柳州", "Guilin": "桂林", "Wuzhou": "梧州",
    "Beihai": "北海", "Fangchenggang": "防城港", "Qinzhou": "钦州", "Guigang": "贵港",
    "Yulin_GX": "玉林", "Baise": "百色", "Hezhou": "贺州", "Hechi": "河池",
    "Laibin": "来宾", "Chongzuo": "崇左",
    
    // 海南省主要城市和区县
    "Haikou": "海口", "Sanya": "三亚", "Sansha": "三沙", "Danzhou": "儋州",
    "Wuzhishan": "五指山", "Qionghai": "琼海", "Wenchang": "文昌", "Wanning": "万宁",
    "Dongfang": "东方", "Ding'an": "定安", "Tunchang": "屯昌", "Chengmai": "澄迈",
    "Lingao": "临高", "Baisha": "白沙", "Changjiang": "昌江", "Ledong": "乐东",
    "Lingshui": "陵水", "Baoting": "保亭", "Qiongzhong": "琼中",
    
    // 四川省主要城市和区县
    "Chengdu": "成都", "Zigong": "自贡", "Panzhihua": "攀枝花", "Luzhou": "泸州",
    "Deyang": "德阳", "Mianyang": "绵阳", "Guangyuan": "广元", "Suining": "遂宁",
    "Neijiang": "内江", "Leshan": "乐山", "Nanchong": "南充", "Meishan": "眉山",
    "Yibin": "宜宾", "Guang'an": "广安", "Dazhou": "达州", "Ya'an": "雅安",
    "Bazhong": "巴中", "Ziyang": "资阳", "Aba": "阿坝", "Ganzi": "甘孜",
    "Liangshan": "凉山",
    
    // 贵州省主要城市和区县
    "Guiyang": "贵阳", "Liupanshui": "六盘水", "Zunyi": "遵义", "Anshun": "安顺",
    "Bijie": "毕节", "Tongren": "铜仁", "Qianxinan": "黔西南", "Qiandongnan": "黔东南",
    "Qiannan": "黔南",
    
    // 云南省主要城市和区县
    "Kunming": "昆明", "Qujing": "曲靖", "Yuxi": "玉溪", "Baoshan": "保山",
    "Zhaotong": "昭通", "Lijiang": "丽江", "Pu'er": "普洱", "Lincang": "临沧",
    "Chuxiong": "楚雄", "Honghe": "红河", "Wenshan": "文山", "Xishuangbanna": "西双版纳",
    "Dali": "大理", "Dehong": "德宏", "Nujiang": "怒江", "Diqing": "迪庆",
    
    // 陕西省主要城市和区县
    "Xi'an": "西安", "Tongchuan": "铜川", "Baoji": "宝鸡", "Xianyang": "咸阳",
    "Weinan": "渭南", "Yan'an": "延安", "Hanzhong": "汉中", "Yulin_SN": "榆林",
    "Ankang": "安康", "Shangluo": "商洛",
    
    // 甘肃省主要城市和区县
    "Lanzhou": "兰州", "Jiayuguan": "嘉峪关", "Jinchang": "金昌", "Baiyin": "白银",
    "Tianshui": "天水", "Wuwei": "武威", "Zhangye": "张掖", "Pingliang": "平凉",
    "Jiuquan": "酒泉", "Qingyang": "庆阳", "Dingxi": "定西", "Longnan": "陇南",
    "Linxia": "临夏", "Gannan": "甘南",
    
    // 青海省主要城市和区县
    "Xining": "西宁", "Haidong": "海东", "Haibei": "海北", "Huangnan": "黄南",
    "Hainan_QH": "海南", "Golog": "果洛", "Yushu": "玉树", "Haixi": "海西",
    
    // 宁夏回族自治区主要城市和区县
    "Yinchuan": "银川", "Shizuishan": "石嘴山", "Wuzhong": "吴忠", "Guyuan": "固原",
    "Zhongwei": "中卫",
    
    // 新疆维吾尔自治区主要城市和区县
    "Urumqi": "乌鲁木齐", "Karamay": "克拉玛依", "Turpan": "吐鲁番", "Hami": "哈密",
    "Changji": "昌吉", "Bortala": "博尔塔拉", "Bayingolin": "巴音郭楞", "Aksu": "阿克苏",
    "Kizilsu": "克孜勒苏", "Kashgar": "喀什", "Hotan": "和田", "Ili": "伊犁",
    "Tacheng": "塔城", "Altay": "阿勒泰", "Shihezi": "石河子", "Aral": "阿拉尔",
    "Tumxuk": "图木舒克", "Wujiaqu": "五家渠", "Beitun": "北屯", "Tiemenguan": "铁门关",
    "Shuanghe": "双河", "Kokdala": "可克达拉", "Kunyu": "昆玉", "Huyanghe": "胡杨河",
    
    // 内蒙古自治区主要城市和区县
    "Hohhot": "呼和浩特", "Baotou": "包头", "Wuhai": "乌海", "Chifeng": "赤峰",
    "Tongliao": "通辽", "Ordos": "鄂尔多斯", "Hulunbuir": "呼伦贝尔", "Bayannur": "巴彦淖尔",
    "Ulanqab": "乌兰察布", "Xing'an": "兴安", "Xilin Gol": "锡林郭勒", "Alxa": "阿拉善",
    
    // 西藏自治区主要城市和区县
    "Lhasa": "拉萨", "Qamdo": "昌都", "Shannan": "山南", "Xigaze": "日喀则",
    "Nagqu": "那曲", "Ngari": "阿里", "Nyingchi": "林芝",
    
    // 台湾省主要城市和区县
    "Taipei": "台北", "Kaohsiung": "高雄", "Taichung": "台中", "Tainan": "台南",
    "Taoyuan": "桃园", "Keelung": "基隆", "Hsinchu": "新竹", "Chiayi": "嘉义",
    "Yilan": "宜兰", "Hualien": "花莲", "Taitung": "台东", "Penghu": "澎湖",
    "Kinmen": "金门", "Lienchiang": "连江",
    
    // 香港特别行政区主要区域
    "Central and Western": "中西区", "Wan Chai": "湾仔区", "Eastern": "东区",
    "Southern": "南区", "Yau Tsim Mong": "油尖旺区", "Sham Shui Po": "深水埗区",
    "Kowloon City": "九龙城区", "Wong Tai Sin": "黄大仙区", "Kwun Tong": "观塘区",
    "Kwai Tsing": "葵青区", "Tsuen Wan": "荃湾区", "Tuen Mun": "屯门区",
    "Yuen Long": "元朗区", "North": "北区", "Tai Po": "大埔区",
    "Sai Kung": "西贡区", "Sha Tin": "沙田区", "Islands": "离岛区",
    
    // 澳门特别行政区主要区域
    "Nossa Senhora de Fátima": "花地玛堂区", "Santo António": "圣安多尼堂区",
    "São Lázaro": "望德堂区", "Sé": "大堂区", "São Lourenço": "风顺堂区",
    "Taipa": "氹仔", "Cotai": "路氹城", "Coloane": "路环",
    
    // 常见国际城市映射
    "New York": "纽约", "Los Angeles": "洛杉矶", "London": "伦敦", "Paris": "巴黎",
    "Tokyo": "东京", "Seoul": "首尔", "Moscow": "莫斯科", "Berlin": "柏林",
    "Sydney": "悉尼", "Singapore": "新加坡", "Kuala Lumpur": "吉隆坡", "Bangkok": "曼谷",
    "Delhi": "德里", "Mumbai": "孟买", "Toronto": "多伦多", "Vancouver": "温哥华",
    "Melbourne": "墨尔本", "Osaka": "大阪", "Dubai": "迪拜", "Istanbul": "伊斯坦布尔"
};

// 将英文地理位置转换为中文
function convertToChineseLocation(englishLocation) {
    if (!englishLocation || englishLocation === "位置未知") {
        return "位置未知";
    }
    
    // 尝试匹配格式如 "CN-Beijing-Beijing-Dongcheng"
    const parts = englishLocation.split('-');
    const convertedParts = [];
    
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        
        // 跳过空部分
        if (!part) continue;
        
        // 尝试在映射表中查找
        const chinesePart = locationMapping[part];
        
        if (chinesePart) {
            convertedParts.push(chinesePart);
        } else {
            // 如果没有找到映射，保留原样
            convertedParts.push(part);
        }
    }
    
    // 如果转换后没有内容，返回"位置未知"
    if (convertedParts.length === 0) {
        return "位置未知";
    }
    
    return convertedParts.join('-');
}

// 获取更详细的地理位置信息
async function getDetailedLocationInfo(ip) {
    if (ip === "未获取到" || ip === "未知") {
        return "位置未知";
    }
    
    try {
        // 使用ipinfo.io API获取更详细的位置信息
        const response = await fetch(`https://ipinfo.io/${ip}/json?token=YOUR_TOKEN_HERE`);
        const data = await response.json();
        
        if (data.error) {
            return "位置未知";
        }
        
        // 构建详细位置信息
        let locationParts = [];
        
        if (data.country) {
            locationParts.push(data.country);
        }
        
        if (data.region) {
            locationParts.push(data.region);
        }
        
        if (data.city) {
            locationParts.push(data.city);
        }
        
        return locationParts.join('-');
    } catch (error) {
        console.error("获取详细位置信息失败:", error);
        return "位置未知";
    }
}