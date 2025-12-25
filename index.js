let productRemarks = new Map([
    ['639011027851', { firstOrder: 'F_74170807', remarks: '棋盘和象棋组合' }],
    ['661701782313', { firstOrder: 'F_21544661', remarks: '盒子易碎，让商家包装好些' }],
    ['714593945229', { firstOrder: 'S_31207270', remarks: '需要留意价格' }],
    ['622422612181', { firstOrder: 'F_84680342', remarks: '假发和发网组合' }],
    ['593903797625', { firstOrder: 'O_31548708', remarks: '要让客户确认logo方向' }],
    ['714805035914', { firstOrder: 'S_29630056', remarks: '确认食品届' }],
    ['726628787343', { firstOrder: 'F_35261019', remarks: '多买几双备用' }],
    ['679283023657', { firstOrder: 'S_74790820', remarks: '确认拉链末端的形状' }],
    ['660387098410', { firstOrder: 'S_87530396', remarks: '不要发电池' }],
    ['728222535497', { firstOrder: 'F_05670437', remarks: '确认是否3个1组发货' }],
    ['724950195642', { firstOrder: 'F_88715291', remarks: '包装上有3+标志' }],
    ['651123193426', { firstOrder: 'F_91475372', remarks: '托盘+网+本体要组合' }],
    ['627617185607', { firstOrder: 'F_49326640', remarks: '跑轮和底座要组合' }],
    ['669721040300', { firstOrder: 'S_55132209', remarks: '带磁' }],
    ['585687074403', { firstOrder: 'F_49326640', remarks: '确认是否有单独包装' }],
    ['635925573244', { firstOrder: 'F_49326640', remarks: '确认是否有单独包装' }],
    ['723363230181', { firstOrder: 'J_02056426', remarks: '拍+球+袋组合' }],
    ['681100657475', { firstOrder: 'J_50642781', remarks: '改入opp袋后贴6+' }],
    ['648418804856', { firstOrder: 'J_38509675', remarks: '下单前确认款式' }],
    ['691882767593', { firstOrder: 'F_79405310', remarks: '收opp袋费' }],
    ['598908898635', { firstOrder: 'F_79405310', remarks: '收opp袋费' }],
    ['657453484061', { firstOrder: 'F_79405310', remarks: '收opp袋费' }],
    ['668348469131', { firstOrder: 'F_72307861', remarks: '确认拉链末端的形状' }],
    ['708688473492', { firstOrder: 'J_75120927', remarks: '包装上有3+标志' }],
    ['716255648028', { firstOrder: 'F_24473392', remarks: '包装易滑出，需加opp袋' }],
    ['648737427960', { firstOrder: 'J_79394834', remarks: '让店家在外盒划颜色标' }],
    ['713341748070', { firstOrder: 'J_85181710', remarks: '包装上有3+标志' }],
    ['690995745286', { firstOrder: 'J_14344597', remarks: '桌面收纳筒' }],
    ['602241428424', { firstOrder: 'J_32855087', remarks: '金属连接片' }],
    ['596998141127', { firstOrder: 'S_85252783', remarks: '改价格' }],
    ['783708528598', { firstOrder: 'S_73122789', remarks: '让商家去掉胶水发货' }],
    ['644789566251', { firstOrder: 'F_53922469', remarks: '收opp袋费' }],
    ['633049978326', { firstOrder: 'F_53922469', remarks: '收opp袋费' }],
    ['590124090107', { firstOrder: 'F_60561769', remarks: '收opp袋费' }],
    ['718861592864', { firstOrder: 'F_60561769', remarks: '收opp袋费' }],
    ['771419495633', { firstOrder: 'F_60561769', remarks: '收opp袋费' }],
    ['666381273094', { firstOrder: 'F_60561769', remarks: '收opp袋费' }],
    ['565238208946', { firstOrder: 'F_60561769', remarks: '收opp袋费' }],
    ['783554824866', { firstOrder: 'F_60561769', remarks: '收opp袋费' }],
    ['702688380483', { firstOrder: 'F_60561769', remarks: '收opp袋费' }],
    ['679271582833', { firstOrder: 'F_60561769', remarks: '收opp袋费' }],
    ['704477376286', { firstOrder: 'F_60561769', remarks: '收opp袋费' }],
    ['660876047817', { firstOrder: 'F_60561769', remarks: '收opp袋费' }],
    ['598908898635', { firstOrder: 'F_60561769', remarks: '收opp袋费' }],
    ['747491997600', { firstOrder: '', remarks: '刀刃锋利，小心割手' }],
    ['787791191537', { firstOrder: 'J_02040104', remarks: '请店家检查好再发货' }],
    ['651133735200', { firstOrder: '', remarks: '客户的国内送料确认' }],
    ['676321330185', { firstOrder: 'S_61975803', remarks: '商品附有胶水' }],
    ['770712197511', { firstOrder: 'J_82428924', remarks: '商品附有粉末' }],
    ['641253181958', { firstOrder: 'J_19743694', remarks: '商品侵权，不能采购' }],
    ['660176219406', { firstOrder: '43643535-1', remarks: '到货后留意孔数' }],
    ['770842348437', { firstOrder: 'F_23732638', remarks: '收opp袋费' }],
    ['728829193744', { firstOrder: 'F_27076712', remarks: '收贴纸、贴片和桶的组合费'}],
    ['794937061113', { firstOrder: 'F_67239812', remarks: '商品无包装，需收opp袋费'}],
    ['840423167464', { firstOrder: 'F_61235740', remarks: '商品无包装，需收opp袋费'}],
    ['860643038852', { firstOrder: 'F_27078377', remarks: '有纽扣电池，可拆卸'}],
    ['595372817553', { firstOrder: 'F_58794562', remarks: '商品无包装，需收opp袋费'}],
    ['794937061113', { firstOrder: 'F_37453081', remarks: '商品无包装，需收opp袋费'}],
    ['852621657324', { firstOrder: 'J_29499708', remarks: '带磁'}],
    ['802141565164', { firstOrder: '_', remarks: '加包装收0.3元/个'}],
    ['728919793171', { firstOrder: 'S_58051030', remarks: '带磁'}],
    ['826656951283', { firstOrder: 'F_01864162', remarks: '需收opp袋费'}],
    ['865524044944', { firstOrder: 'F_01864162', remarks: '需收opp袋费'}],
    ['837608637984', { firstOrder: 'F_23009734', remarks: '需收opp袋费'}],
    ['681801714387', { firstOrder: 'F_01864162', remarks: '商品无包装，需收opp袋费'}],
    ['921882453586', { firstOrder: '64415600-6', remarks: '让店家同一部件重叠打包'}],
    ['670397471293', { firstOrder: '40159935', remarks: '量多需店家发包卸货物流'}],
    ['822306060897', { firstOrder: '_', remarks: '让店家全检后发货的'}],
    ['606635910169', { firstOrder: 'F_01161246', remarks: '改FBA费用，不收组合费'}],
    ['807803520793', { firstOrder: 'J_95631761', remarks: '涉及食品届'}],
    ['825022280685', { firstOrder: 'J_13574085', remarks: '去掉胶水'}],
    ['756131664591', { firstOrder: 'J_13574085', remarks: '去掉胶水'}],
    ['754604708805', { firstOrder: 'J_13574085', remarks: '去掉胶水'}],
    ['681743041254', { firstOrder: '_', remarks: '下单备注不要有划痕的'}],
    ['864802090939', { firstOrder: 'S_53543074', remarks: '内有电池，发特殊货'}],
    ['44743685225', { firstOrder: '_', remarks: '按页面运费10%-15％收费'}],
    ['819933026204', { firstOrder: 'S_12698281', remarks: '打包时不要留太多空位'}],
    ['790318861716', { firstOrder: '_', remarks: '仓库确认数量无误再发'}],
    ['847323147865', { firstOrder: 'F_59027216', remarks: '客户要带盒发，价格加0.5元'}],
    ['852368437778', { firstOrder: 'F_23577951', remarks: '让厂家加强下真空打包'}],
    ['720606693048', { firstOrder: '_', remarks: '备注给客户，易碎品不赔偿'}],
    ['678880080394', { firstOrder: '70185570-2', remarks: '让厂家不带电池发'}],
    ['898737071502', { firstOrder: '_', remarks: '让厂家对应层数颜色标注后再发'}],
    ['595380952260', { firstOrder: '_', remarks: '包装盒不组装和商品分开发'}],
    ['574689709810', { firstOrder: '_', remarks: '包装盒不组装和商品分开发'}],
    ['637084077059', { firstOrder: 'F_12165738', remarks: '下单时发踏板的照片'}],
    ['714357515094', { firstOrder: 'J_93440185', remarks: '下单提醒商家让物流上楼'}],
    ['719823401880', { firstOrder: 'F_48879242', remarks: '收opp袋费'}],
    ['728073717729', { firstOrder: 'F_48879242', remarks: '收opp袋费'}],
    ['836232766206', { firstOrder: 'F_47087489', remarks: '收opp袋费'}],
    ['654081800876', { firstOrder: 'F_85547713', remarks: '奶油黄的，让店家不要发错货'}],
]);

const 店铺黑名单 = [
    {'关联订单号': '10200276', '店铺名': '广州颂安贸易商行'},
]



















