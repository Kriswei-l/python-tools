const { ccclass, property } = cc._decorator;

@ccclass
export default class MallLayer {
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        super.onLoad();
        this.regCmd(this, ClientCmd.HALL_MALL, this.httpResp, hallMallResponse);
        this.regCmd(this, ClientCmd.HALL_MALL_PAY_SUCCESS, this.recyPayData, PayOkResp);
        this.stopFire();
    }
    /**
     * 测试接受消息
     * @param cmd 
     * @param resp 
     * @param target 
     */
    recyPayData(cmd: number, resp: PayOkResp, target: cc.Component) {
        if (this.goodInfo) {
            for (var j in this.goodInfo.item) {
                var i = this.goodInfo.item[j];
                if (i.id == resp.jfdId) {
                    i.first = 0;
                    i.isBuy = 1;
                    if (i.time){
                        PlayerData.decode({
                            payFaceEndTime: i.time * 86400 + PlayerData.getServerTime()
                        });
                    }                    
                    break;
                }
            }
            this.sortMsg();
            if (this.curGoodType) {
                this.diamondBtnClick();
            } else {
                this.goldBtnClick();
            }
        }
    }

    sortMsg() {
        var firstArr = [];
        for (let i of this.goodInfo.item) {
            firstArr.push(i);
        }
        firstArr.sort(function (a, b) {
            if (a.position > b.position)
                return 1;
            else if (a.position == b.position)
                return 0;
            else
                return -1;
        });
        this.goodInfo.item = [];
        for (var i in firstArr)
            this.goodInfo.item.push(firstArr[i]);
    }

    httpResp(cmd: number, resp: hallMallResponse, target: cc.Component) {
        if (cmd == ClientCmd.HALL_MALL) {
            console.log("ClientCmd.HALL_MALL data = " + JSON.stringify(resp));
            this.goodInfo = resp;
            this.sortMsg();
            if (this.curGoodType) {
                this.diamondBtnClick();
            } else {
                this.goldBtnClick();
            }
        }
    }

    start() {

    }

    startFinish() {
        HttpUtil.sendWeb(ClientCmd.HALL_MALL, -1, null);
        let data = this.node.getComponent(PopDataLayer).data;
        console.log("data = ??? " + data);
        if (data) {
            this.curGoodType = data;
            if (this.curGoodType) {
                this.toggle2.check();
            } else {
                this.toggle1.check();
            }
        }
    }

    setItemState() {
        this.layoutNode.destroyAllChildren();
        var refreshData = [];
        for (let index in this.goodInfo.item) {
            if (this.goodInfo.item[index].tag == this.curGoodType && this.goodInfo.item[index].show) {
                refreshData.push(this.goodInfo.item[index]);
            }
        }

        for (let index = 0; index < refreshData.length; index++) {
            this.createPrefab(refreshData[index], index)
        }
    }

    createPrefab(data, order) {
        if (data) {
            let prefabNode = cc.instantiate(this.goodPrefab)
            let label_name = prefabNode.getChildByName("label_name").getComponent(cc.Label);
            let goodSprite = prefabNode.getChildByName("goodSprite").getComponent(cc.Sprite);
            let label_cost = prefabNode.getChildByName("layout").getChildByName("label_cost").getComponent(cc.Label);
            let label_currency = prefabNode.getChildByName("layout").getChildByName("currency").getComponent(cc.Label);
            let touxiangkuang = prefabNode.getChildByName("touxiangkuang");
            let label_duration = touxiangkuang.getChildByName("label_duration").getComponent(cc.Label);
            let tag_double = prefabNode.getChildByName("tag_double");
            let tag_present = prefabNode.getChildByName("tag_present");
            let label_present = tag_present.getChildByName("label_present").getComponent(cc.Label);

            let ep = MyToolsUtil.getExtPrice(data.id);
            label_cost.string =  ep?ep.p:`${data.amount}`;
            label_currency.string = ep?ep.pc:"";
            order = order > 5 ? 5 : order;
            if (data.tag == 0) {
                goodSprite.spriteFrame = this.goldSF[order];
                tag_double.active = data.first ? true : false;
                if (data.present && data.present.length && !data.first){
                    tag_present.active = true;
                    label_present.string = `${MyToolsUtil.strForamt("多赠{0}金币", [data.present[0].count])}`;
                }else{
                    tag_present.active = false;
                }
            } else if (data.tag == 1) {
                goodSprite.spriteFrame = this.diamondSF[order];
                tag_double.active = false;
                if (data.present && data.present.length) {
                    tag_present.active = true;
                    label_present.string = `${MyToolsUtil.strForamt("多赠{0}钻石", [data.present[0].count])}`;
                } else {
                    tag_present.active = false;
                }
            }
            if (data.time) {
                touxiangkuang.active = true;
                label_duration.string = `${data.time}h`;
            } else {
                touxiangkuang.active = false;
            }

            label_name.string = data.tag == 0 ? `${MyToolsUtil.strForamt("赠:{0}金币", [data.get[0].count])}`:`${data.get[0].count}${"钻石"}`;

            prefabNode.on(cc.Node.EventType.TOUCH_END, () => {
                GameUtil.instance.realPay(data.id);
            }, this);

            this.layoutNode.addChild(prefabNode);
        }
    }

    setBottomUI() {
        if (PlayerData.getVipLevel() == 9) {
            this.vipMaxNode.active = true;
            this.vipNotMaxNode.active = false;
        } else {
            this.vipMaxNode.active = false;
            this.vipNotMaxNode.active = true;

            // this.lvLeft.spriteFrame = this.lvSF[PlayerData.getVipLevel()];
            // this.lvRight.spriteFrame = this.lvSF[PlayerData.getVipLevel() + 1];

            i18nMgr._getSprite("common/mall/gz-"+(PlayerData.getVipLevel()), (spriteFrame: cc.SpriteFrame)=>{
                if(cc.isValid(this) && spriteFrame){
                    this.lvLeft.spriteFrame = spriteFrame
                }
            })
            i18nMgr._getSprite("common/mall/gz-"+(PlayerData.getVipLevel()+1), (spriteFrame: cc.SpriteFrame)=>{
                if(cc.isValid(this) && spriteFrame){
                    this.lvRight.spriteFrame = spriteFrame
                }
            })
            // 现在改成VIP分数显示
            var needScore = VipManager.getVipPoints(PlayerData.getVipLevel() + 1) - PlayerData.getPayPointSum();
            this.needMoney.string = `${needScore}`;
            this.progressBar.progress = PlayerData.getPayPointSum() / VipManager.getVipPoints(PlayerData.getVipLevel() + 1);
            this.progressText.string = `${PlayerData.getPayPointSum()}_${VipManager.getVipPoints(PlayerData.getVipLevel() + 1)}`;
            // 之前用充值指显示
            // var needMoney = VipManager.getVipExp(PlayerData.getVipLevel() + 1) - PlayerData.getPayAmountSum();
            // this.needMoney.string = `${needMoney}`;
            // this.progressBar.progress = PlayerData.getPayAmountSum() / VipManager.getVipExp(PlayerData.getVipLevel() + 1);
            // this.progressText.string = `${PlayerData.getPayAmountSum()}_${VipManager.getVipExp(PlayerData.getVipLevel() + 1)}`;
        }
    }

    goldBtnClick() {
        if (!this.goodInfo)
            return;
        this.curGoodType = 0;
        this.toggle1.check();
        this.setItemState()
        this.setBottomUI()
    }

    diamondBtnClick() {
        if (!this.goodInfo)
            return;
        this.curGoodType = 1;
        this.toggle2.check();
        this.setItemState()
        this.setBottomUI()
    }

    checkVipTeQuan() {
        GameUtil.instance.umCounter("A_ShopVipPrivilegesBtn", "新商城内查看Vip特权按钮");
        PopLayerManger.popView(ViewConstantVals.VipTeQuanLayer);
    }

    closeBtnClick() {
        GameUtil.instance.umCounter("A_ShopClose", "新商城关闭按钮");
        PopLayerManger.closeView(ViewConstantVals.ShopLayer);
        if (GameUtil.instance.mallOpenSourceVip) {
            PopLayerManger.popView(ViewConstantVals.VipTeQuanLayer);
        }
        else if (!PopLayerManger.getPopView(ViewConstantVals.VipTeQuanLayer))
            cc.systemEvent.emit(ConstantVals.CLOSE_VIPTEQUAN);
    }
    // update (dt) {}
}
