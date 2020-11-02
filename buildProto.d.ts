import * as $protobuf from "protobufjs";

/** Properties of an AdvertiseItem. */
export interface IAdvertiseItem {

    /** AdvertiseItem orderId */
    orderId: number;

    /** AdvertiseItem award */
    award: IToolItem;
}

/** Represents an AdvertiseItem. */
export class AdvertiseItem implements IAdvertiseItem {

    /**
     * Constructs a new AdvertiseItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAdvertiseItem);

    /** AdvertiseItem orderId. */
    public orderId: number;

    /** AdvertiseItem award. */
    public award: IToolItem;

    /**
     * Creates a new AdvertiseItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdvertiseItem instance
     */
    public static create(properties?: IAdvertiseItem): AdvertiseItem;

    /**
     * Encodes the specified AdvertiseItem message. Does not implicitly {@link AdvertiseItem.verify|verify} messages.
     * @param message AdvertiseItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAdvertiseItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AdvertiseItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdvertiseItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AdvertiseItem;
}

/** Properties of an advertiseFinishedReq. */
export interface IadvertiseFinishedReq {

    /** advertiseFinishedReq userId */
    userId: number;
}

/** Represents an advertiseFinishedReq. */
export class advertiseFinishedReq implements IadvertiseFinishedReq {

    /**
     * Constructs a new advertiseFinishedReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IadvertiseFinishedReq);

    /** advertiseFinishedReq userId. */
    public userId: number;

    /**
     * Creates a new advertiseFinishedReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns advertiseFinishedReq instance
     */
    public static create(properties?: IadvertiseFinishedReq): advertiseFinishedReq;

    /**
     * Encodes the specified advertiseFinishedReq message. Does not implicitly {@link advertiseFinishedReq.verify|verify} messages.
     * @param message advertiseFinishedReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IadvertiseFinishedReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an advertiseFinishedReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns advertiseFinishedReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): advertiseFinishedReq;
}

/** Properties of an advertiseFinishedResp. */
export interface IadvertiseFinishedResp {

    /** advertiseFinishedResp syncRandomWheelCurInfo */
    syncRandomWheelCurInfo: ISyncRandomWheelCurInfo;
}

/** Represents an advertiseFinishedResp. */
export class advertiseFinishedResp implements IadvertiseFinishedResp {

    /**
     * Constructs a new advertiseFinishedResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IadvertiseFinishedResp);

    /** advertiseFinishedResp syncRandomWheelCurInfo. */
    public syncRandomWheelCurInfo: ISyncRandomWheelCurInfo;

    /**
     * Creates a new advertiseFinishedResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns advertiseFinishedResp instance
     */
    public static create(properties?: IadvertiseFinishedResp): advertiseFinishedResp;

    /**
     * Encodes the specified advertiseFinishedResp message. Does not implicitly {@link advertiseFinishedResp.verify|verify} messages.
     * @param message advertiseFinishedResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IadvertiseFinishedResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an advertiseFinishedResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns advertiseFinishedResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): advertiseFinishedResp;
}

/** Properties of an advertiseWheelAwardsReq. */
export interface IadvertiseWheelAwardsReq {

    /** advertiseWheelAwardsReq userId */
    userId: number;
}

/** Represents an advertiseWheelAwardsReq. */
export class advertiseWheelAwardsReq implements IadvertiseWheelAwardsReq {

    /**
     * Constructs a new advertiseWheelAwardsReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IadvertiseWheelAwardsReq);

    /** advertiseWheelAwardsReq userId. */
    public userId: number;

    /**
     * Creates a new advertiseWheelAwardsReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns advertiseWheelAwardsReq instance
     */
    public static create(properties?: IadvertiseWheelAwardsReq): advertiseWheelAwardsReq;

    /**
     * Encodes the specified advertiseWheelAwardsReq message. Does not implicitly {@link advertiseWheelAwardsReq.verify|verify} messages.
     * @param message advertiseWheelAwardsReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IadvertiseWheelAwardsReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an advertiseWheelAwardsReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns advertiseWheelAwardsReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): advertiseWheelAwardsReq;
}

/** Properties of an advertiseWheelAwardsResp. */
export interface IadvertiseWheelAwardsResp {

    /** advertiseWheelAwardsResp awards */
    awards?: (IAdvertiseItem[]|null);

    /** advertiseWheelAwardsResp syncRandomWheelCurInfo */
    syncRandomWheelCurInfo: ISyncRandomWheelCurInfo;
}

/** Represents an advertiseWheelAwardsResp. */
export class advertiseWheelAwardsResp implements IadvertiseWheelAwardsResp {

    /**
     * Constructs a new advertiseWheelAwardsResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IadvertiseWheelAwardsResp);

    /** advertiseWheelAwardsResp awards. */
    public awards: Array<IAdvertiseItem>;

    /** advertiseWheelAwardsResp syncRandomWheelCurInfo. */
    public syncRandomWheelCurInfo: ISyncRandomWheelCurInfo;

    /**
     * Creates a new advertiseWheelAwardsResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns advertiseWheelAwardsResp instance
     */
    public static create(properties?: IadvertiseWheelAwardsResp): advertiseWheelAwardsResp;

    /**
     * Encodes the specified advertiseWheelAwardsResp message. Does not implicitly {@link advertiseWheelAwardsResp.verify|verify} messages.
     * @param message advertiseWheelAwardsResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IadvertiseWheelAwardsResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an advertiseWheelAwardsResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns advertiseWheelAwardsResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): advertiseWheelAwardsResp;
}

/** Properties of a randomWheelAwardReq. */
export interface IrandomWheelAwardReq {

    /** randomWheelAwardReq userId */
    userId: number;
}

/** Represents a randomWheelAwardReq. */
export class randomWheelAwardReq implements IrandomWheelAwardReq {

    /**
     * Constructs a new randomWheelAwardReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IrandomWheelAwardReq);

    /** randomWheelAwardReq userId. */
    public userId: number;

    /**
     * Creates a new randomWheelAwardReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns randomWheelAwardReq instance
     */
    public static create(properties?: IrandomWheelAwardReq): randomWheelAwardReq;

    /**
     * Encodes the specified randomWheelAwardReq message. Does not implicitly {@link randomWheelAwardReq.verify|verify} messages.
     * @param message randomWheelAwardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IrandomWheelAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a randomWheelAwardReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns randomWheelAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): randomWheelAwardReq;
}

/** Properties of a randomWheelAwardResp. */
export interface IrandomWheelAwardResp {

    /** randomWheelAwardResp awardItem */
    awardItem: IAdvertiseItem;

    /** randomWheelAwardResp syncRandomWheelCurInfo */
    syncRandomWheelCurInfo: ISyncRandomWheelCurInfo;

    /** randomWheelAwardResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;
}

/** Represents a randomWheelAwardResp. */
export class randomWheelAwardResp implements IrandomWheelAwardResp {

    /**
     * Constructs a new randomWheelAwardResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IrandomWheelAwardResp);

    /** randomWheelAwardResp awardItem. */
    public awardItem: IAdvertiseItem;

    /** randomWheelAwardResp syncRandomWheelCurInfo. */
    public syncRandomWheelCurInfo: ISyncRandomWheelCurInfo;

    /** randomWheelAwardResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /**
     * Creates a new randomWheelAwardResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns randomWheelAwardResp instance
     */
    public static create(properties?: IrandomWheelAwardResp): randomWheelAwardResp;

    /**
     * Encodes the specified randomWheelAwardResp message. Does not implicitly {@link randomWheelAwardResp.verify|verify} messages.
     * @param message randomWheelAwardResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IrandomWheelAwardResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a randomWheelAwardResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns randomWheelAwardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): randomWheelAwardResp;
}

/** Properties of a SyncRandomWheelCurInfo. */
export interface ISyncRandomWheelCurInfo {

    /** SyncRandomWheelCurInfo finishAD */
    finishAD?: (boolean|null);

    /** SyncRandomWheelCurInfo leftTimes */
    leftTimes?: (number|null);

    /** SyncRandomWheelCurInfo cdEndTime */
    cdEndTime?: (number|Long|null);
}

/** Represents a SyncRandomWheelCurInfo. */
export class SyncRandomWheelCurInfo implements ISyncRandomWheelCurInfo {

    /**
     * Constructs a new SyncRandomWheelCurInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISyncRandomWheelCurInfo);

    /** SyncRandomWheelCurInfo finishAD. */
    public finishAD: boolean;

    /** SyncRandomWheelCurInfo leftTimes. */
    public leftTimes: number;

    /** SyncRandomWheelCurInfo cdEndTime. */
    public cdEndTime: (number|Long);

    /**
     * Creates a new SyncRandomWheelCurInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SyncRandomWheelCurInfo instance
     */
    public static create(properties?: ISyncRandomWheelCurInfo): SyncRandomWheelCurInfo;

    /**
     * Encodes the specified SyncRandomWheelCurInfo message. Does not implicitly {@link SyncRandomWheelCurInfo.verify|verify} messages.
     * @param message SyncRandomWheelCurInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISyncRandomWheelCurInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SyncRandomWheelCurInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SyncRandomWheelCurInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncRandomWheelCurInfo;
}

/** Properties of a randomWheelCurInfoReq. */
export interface IrandomWheelCurInfoReq {

    /** randomWheelCurInfoReq userid */
    userid: number;
}

/** Represents a randomWheelCurInfoReq. */
export class randomWheelCurInfoReq implements IrandomWheelCurInfoReq {

    /**
     * Constructs a new randomWheelCurInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IrandomWheelCurInfoReq);

    /** randomWheelCurInfoReq userid. */
    public userid: number;

    /**
     * Creates a new randomWheelCurInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns randomWheelCurInfoReq instance
     */
    public static create(properties?: IrandomWheelCurInfoReq): randomWheelCurInfoReq;

    /**
     * Encodes the specified randomWheelCurInfoReq message. Does not implicitly {@link randomWheelCurInfoReq.verify|verify} messages.
     * @param message randomWheelCurInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IrandomWheelCurInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a randomWheelCurInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns randomWheelCurInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): randomWheelCurInfoReq;
}

/** Properties of a randomWheelCurInfoResp. */
export interface IrandomWheelCurInfoResp {

    /** randomWheelCurInfoResp syncRandomWheelCurInfo */
    syncRandomWheelCurInfo: ISyncRandomWheelCurInfo;
}

/** Represents a randomWheelCurInfoResp. */
export class randomWheelCurInfoResp implements IrandomWheelCurInfoResp {

    /**
     * Constructs a new randomWheelCurInfoResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IrandomWheelCurInfoResp);

    /** randomWheelCurInfoResp syncRandomWheelCurInfo. */
    public syncRandomWheelCurInfo: ISyncRandomWheelCurInfo;

    /**
     * Creates a new randomWheelCurInfoResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns randomWheelCurInfoResp instance
     */
    public static create(properties?: IrandomWheelCurInfoResp): randomWheelCurInfoResp;

    /**
     * Encodes the specified randomWheelCurInfoResp message. Does not implicitly {@link randomWheelCurInfoResp.verify|verify} messages.
     * @param message randomWheelCurInfoResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IrandomWheelCurInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a randomWheelCurInfoResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns randomWheelCurInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): randomWheelCurInfoResp;
}

/** TreasureChangeType enum. */
export enum TreasureChangeType {
    Type_Recharge = 1
}

/** Properties of a TreasureUpdate. */
export interface ITreasureUpdate {

    /** TreasureUpdate score */
    score: (number|Long);

    /** 玩家身上的最新道具 */
    toolsChange?: (IToolItem[]|null);

    /** TreasureUpdate isSelf */
    isSelf?: (number|null);

    /** TreasureUpdate uid */
    uid?: (number|null);

    /** TreasureUpdate type */
    type?: (TreasureChangeType|null);
}

/** Represents a TreasureUpdate. */
export class TreasureUpdate implements ITreasureUpdate {

    /**
     * Constructs a new TreasureUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITreasureUpdate);

    /** TreasureUpdate score. */
    public score: (number|Long);

    /** 玩家身上的最新道具 */
    public toolsChange: Array<IToolItem>;

    /** TreasureUpdate isSelf. */
    public isSelf: number;

    /** TreasureUpdate uid. */
    public uid: number;

    /** TreasureUpdate type. */
    public type: TreasureChangeType;

    /**
     * Creates a new TreasureUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TreasureUpdate instance
     */
    public static create(properties?: ITreasureUpdate): TreasureUpdate;

    /**
     * Encodes the specified TreasureUpdate message. Does not implicitly {@link TreasureUpdate.verify|verify} messages.
     * @param message TreasureUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITreasureUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TreasureUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TreasureUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TreasureUpdate;
}

/** Properties of a ToolItem. */
export interface IToolItem {

    /** ToolItem id */
    id: number;

    /** ToolItem count */
    count: number;
}

/** Represents a ToolItem. */
export class ToolItem implements IToolItem {

    /**
     * Constructs a new ToolItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IToolItem);

    /** ToolItem id. */
    public id: number;

    /** ToolItem count. */
    public count: number;

    /**
     * Creates a new ToolItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ToolItem instance
     */
    public static create(properties?: IToolItem): ToolItem;

    /**
     * Encodes the specified ToolItem message. Does not implicitly {@link ToolItem.verify|verify} messages.
     * @param message ToolItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IToolItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ToolItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ToolItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ToolItem;
}

/** Properties of a MatchInfo. */
export interface IMatchInfo {

    /** MatchInfo type */
    type: number;

    /** MatchInfo statrTime */
    statrTime: number;

    /** MatchInfo endTime */
    endTime: number;
}

/** Represents a MatchInfo. */
export class MatchInfo implements IMatchInfo {

    /**
     * Constructs a new MatchInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchInfo);

    /** MatchInfo type. */
    public type: number;

    /** MatchInfo statrTime. */
    public statrTime: number;

    /** MatchInfo endTime. */
    public endTime: number;

    /**
     * Creates a new MatchInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchInfo instance
     */
    public static create(properties?: IMatchInfo): MatchInfo;

    /**
     * Encodes the specified MatchInfo message. Does not implicitly {@link MatchInfo.verify|verify} messages.
     * @param message MatchInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchInfo;
}

/** Properties of a MatchinfoListResp. */
export interface IMatchinfoListResp {

    /** MatchinfoListResp matchInfo */
    matchInfo?: (IMatchInfo[]|null);
}

/** Represents a MatchinfoListResp. */
export class MatchinfoListResp implements IMatchinfoListResp {

    /**
     * Constructs a new MatchinfoListResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchinfoListResp);

    /** MatchinfoListResp matchInfo. */
    public matchInfo: Array<IMatchInfo>;

    /**
     * Creates a new MatchinfoListResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchinfoListResp instance
     */
    public static create(properties?: IMatchinfoListResp): MatchinfoListResp;

    /**
     * Encodes the specified MatchinfoListResp message. Does not implicitly {@link MatchinfoListResp.verify|verify} messages.
     * @param message MatchinfoListResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchinfoListResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchinfoListResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchinfoListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchinfoListResp;
}

/** Properties of a MatchRewardRankInfo. */
export interface IMatchRewardRankInfo {

    /** MatchRewardRankInfo type */
    type: number;

    /** MatchRewardRankInfo rankTime */
    rankTime: (number|Long);

    /** MatchRewardRankInfo rank */
    rank: number;

    /** MatchRewardRankInfo award */
    award?: (IToolItem[]|null);

    /** MatchRewardRankInfo id */
    id: number;

    /** MatchRewardRankInfo rankType */
    rankType?: (number|null);
}

/** Represents a MatchRewardRankInfo. */
export class MatchRewardRankInfo implements IMatchRewardRankInfo {

    /**
     * Constructs a new MatchRewardRankInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchRewardRankInfo);

    /** MatchRewardRankInfo type. */
    public type: number;

    /** MatchRewardRankInfo rankTime. */
    public rankTime: (number|Long);

    /** MatchRewardRankInfo rank. */
    public rank: number;

    /** MatchRewardRankInfo award. */
    public award: Array<IToolItem>;

    /** MatchRewardRankInfo id. */
    public id: number;

    /** MatchRewardRankInfo rankType. */
    public rankType: number;

    /**
     * Creates a new MatchRewardRankInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchRewardRankInfo instance
     */
    public static create(properties?: IMatchRewardRankInfo): MatchRewardRankInfo;

    /**
     * Encodes the specified MatchRewardRankInfo message. Does not implicitly {@link MatchRewardRankInfo.verify|verify} messages.
     * @param message MatchRewardRankInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchRewardRankInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchRewardRankInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchRewardRankInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchRewardRankInfo;
}

/** Properties of a MatchRewardRankReq. */
export interface IMatchRewardRankReq {

    /** MatchRewardRankReq type */
    type: number;
}

/** Represents a MatchRewardRankReq. */
export class MatchRewardRankReq implements IMatchRewardRankReq {

    /**
     * Constructs a new MatchRewardRankReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchRewardRankReq);

    /** MatchRewardRankReq type. */
    public type: number;

    /**
     * Creates a new MatchRewardRankReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchRewardRankReq instance
     */
    public static create(properties?: IMatchRewardRankReq): MatchRewardRankReq;

    /**
     * Encodes the specified MatchRewardRankReq message. Does not implicitly {@link MatchRewardRankReq.verify|verify} messages.
     * @param message MatchRewardRankReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchRewardRankReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchRewardRankReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchRewardRankReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchRewardRankReq;
}

/** Properties of a MatchRewardRankResp. */
export interface IMatchRewardRankResp {

    /** MatchRewardRankResp matchRewardRankInfos */
    matchRewardRankInfos?: (IMatchRewardRankInfo[]|null);
}

/** Represents a MatchRewardRankResp. */
export class MatchRewardRankResp implements IMatchRewardRankResp {

    /**
     * Constructs a new MatchRewardRankResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchRewardRankResp);

    /** MatchRewardRankResp matchRewardRankInfos. */
    public matchRewardRankInfos: Array<IMatchRewardRankInfo>;

    /**
     * Creates a new MatchRewardRankResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchRewardRankResp instance
     */
    public static create(properties?: IMatchRewardRankResp): MatchRewardRankResp;

    /**
     * Encodes the specified MatchRewardRankResp message. Does not implicitly {@link MatchRewardRankResp.verify|verify} messages.
     * @param message MatchRewardRankResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchRewardRankResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchRewardRankResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchRewardRankResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchRewardRankResp;
}

/** Properties of a TakeMatchRewardRankReq. */
export interface ITakeMatchRewardRankReq {

    /** TakeMatchRewardRankReq id */
    id: number;
}

/** Represents a TakeMatchRewardRankReq. */
export class TakeMatchRewardRankReq implements ITakeMatchRewardRankReq {

    /**
     * Constructs a new TakeMatchRewardRankReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITakeMatchRewardRankReq);

    /** TakeMatchRewardRankReq id. */
    public id: number;

    /**
     * Creates a new TakeMatchRewardRankReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TakeMatchRewardRankReq instance
     */
    public static create(properties?: ITakeMatchRewardRankReq): TakeMatchRewardRankReq;

    /**
     * Encodes the specified TakeMatchRewardRankReq message. Does not implicitly {@link TakeMatchRewardRankReq.verify|verify} messages.
     * @param message TakeMatchRewardRankReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITakeMatchRewardRankReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TakeMatchRewardRankReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TakeMatchRewardRankReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TakeMatchRewardRankReq;
}

/** Properties of a TakeMatchRewardRankResp. */
export interface ITakeMatchRewardRankResp {

    /** TakeMatchRewardRankResp id */
    id: number;

    /** TakeMatchRewardRankResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;
}

/** Represents a TakeMatchRewardRankResp. */
export class TakeMatchRewardRankResp implements ITakeMatchRewardRankResp {

    /**
     * Constructs a new TakeMatchRewardRankResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITakeMatchRewardRankResp);

    /** TakeMatchRewardRankResp id. */
    public id: number;

    /** TakeMatchRewardRankResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /**
     * Creates a new TakeMatchRewardRankResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TakeMatchRewardRankResp instance
     */
    public static create(properties?: ITakeMatchRewardRankResp): TakeMatchRewardRankResp;

    /**
     * Encodes the specified TakeMatchRewardRankResp message. Does not implicitly {@link TakeMatchRewardRankResp.verify|verify} messages.
     * @param message TakeMatchRewardRankResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITakeMatchRewardRankResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TakeMatchRewardRankResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TakeMatchRewardRankResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TakeMatchRewardRankResp;
}

/** Properties of a RankItem. */
export interface IRankItem {

    /** RankItem minRank */
    minRank: number;

    /** RankItem maxRank */
    maxRank: number;

    /** RankItem award */
    award: IToolItem;

    /** RankItem ToolItem */
    ToolItem?: (IToolItem[]|null);
}

/** Represents a RankItem. */
export class RankItem implements IRankItem {

    /**
     * Constructs a new RankItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRankItem);

    /** RankItem minRank. */
    public minRank: number;

    /** RankItem maxRank. */
    public maxRank: number;

    /** RankItem award. */
    public award: IToolItem;

    /** RankItem ToolItem. */
    public ToolItem: Array<IToolItem>;

    /**
     * Creates a new RankItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RankItem instance
     */
    public static create(properties?: IRankItem): RankItem;

    /**
     * Encodes the specified RankItem message. Does not implicitly {@link RankItem.verify|verify} messages.
     * @param message RankItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRankItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RankItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RankItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RankItem;
}

/** Properties of a UserRankItem. */
export interface IUserRankItem {

    /** UserRankItem rankItem */
    rankItem: IRankItem;

    /** UserRankItem integral */
    integral?: (number|Long|null);

    /** UserRankItem name */
    name?: (string|null);
}

/** Represents a UserRankItem. */
export class UserRankItem implements IUserRankItem {

    /**
     * Constructs a new UserRankItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserRankItem);

    /** UserRankItem rankItem. */
    public rankItem: IRankItem;

    /** UserRankItem integral. */
    public integral: (number|Long);

    /** UserRankItem name. */
    public name: string;

    /**
     * Creates a new UserRankItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserRankItem instance
     */
    public static create(properties?: IUserRankItem): UserRankItem;

    /**
     * Encodes the specified UserRankItem message. Does not implicitly {@link UserRankItem.verify|verify} messages.
     * @param message UserRankItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserRankItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserRankItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserRankItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserRankItem;
}

/** Properties of a MatchRank. */
export interface IMatchRank {

    /** MatchRank userRankItems */
    userRankItems?: (IUserRankItem[]|null);
}

/** Represents a MatchRank. */
export class MatchRank implements IMatchRank {

    /**
     * Constructs a new MatchRank.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchRank);

    /** MatchRank userRankItems. */
    public userRankItems: Array<IUserRankItem>;

    /**
     * Creates a new MatchRank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchRank instance
     */
    public static create(properties?: IMatchRank): MatchRank;

    /**
     * Encodes the specified MatchRank message. Does not implicitly {@link MatchRank.verify|verify} messages.
     * @param message MatchRank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchRank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchRank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchRank;
}

/** Properties of a MatchInfoReq. */
export interface IMatchInfoReq {

    /** MatchInfoReq type */
    type: number;
}

/** Represents a MatchInfoReq. */
export class MatchInfoReq implements IMatchInfoReq {

    /**
     * Constructs a new MatchInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchInfoReq);

    /** MatchInfoReq type. */
    public type: number;

    /**
     * Creates a new MatchInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchInfoReq instance
     */
    public static create(properties?: IMatchInfoReq): MatchInfoReq;

    /**
     * Encodes the specified MatchInfoReq message. Does not implicitly {@link MatchInfoReq.verify|verify} messages.
     * @param message MatchInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchInfoReq;
}

/** Properties of a MatchinfoResp. */
export interface IMatchinfoResp {

    /** MatchinfoResp integral */
    integral?: (number|Long|null);

    /** MatchinfoResp rank */
    rank?: (number|null);

    /** MatchinfoResp matchRank */
    matchRank: IMatchRank;

    /** MatchinfoResp startTime */
    startTime: number;

    /** MatchinfoResp endTime */
    endTime: number;

    /** MatchinfoResp type */
    type: number;

    /** MatchinfoResp award */
    award?: (IToolItem[]|null);

    /** MatchinfoResp tip */
    tip?: (string|null);

    /** MatchinfoResp weekRankItem */
    weekRankItem?: (IUserRankItem|null);

    /** MatchinfoResp matchType */
    matchType: number;

    /** MatchinfoResp bulletCount */
    bulletCount?: (number|null);
}

/** Represents a MatchinfoResp. */
export class MatchinfoResp implements IMatchinfoResp {

    /**
     * Constructs a new MatchinfoResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchinfoResp);

    /** MatchinfoResp integral. */
    public integral: (number|Long);

    /** MatchinfoResp rank. */
    public rank: number;

    /** MatchinfoResp matchRank. */
    public matchRank: IMatchRank;

    /** MatchinfoResp startTime. */
    public startTime: number;

    /** MatchinfoResp endTime. */
    public endTime: number;

    /** MatchinfoResp type. */
    public type: number;

    /** MatchinfoResp award. */
    public award: Array<IToolItem>;

    /** MatchinfoResp tip. */
    public tip: string;

    /** MatchinfoResp weekRankItem. */
    public weekRankItem?: (IUserRankItem|null);

    /** MatchinfoResp matchType. */
    public matchType: number;

    /** MatchinfoResp bulletCount. */
    public bulletCount: number;

    /**
     * Creates a new MatchinfoResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchinfoResp instance
     */
    public static create(properties?: IMatchinfoResp): MatchinfoResp;

    /**
     * Encodes the specified MatchinfoResp message. Does not implicitly {@link MatchinfoResp.verify|verify} messages.
     * @param message MatchinfoResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchinfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchinfoResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchinfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchinfoResp;
}

/** Properties of an ArenaSignUpReq. */
export interface IArenaSignUpReq {

    /** ArenaSignUpReq matchType */
    matchType: number;
}

/** Represents an ArenaSignUpReq. */
export class ArenaSignUpReq implements IArenaSignUpReq {

    /**
     * Constructs a new ArenaSignUpReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IArenaSignUpReq);

    /** ArenaSignUpReq matchType. */
    public matchType: number;

    /**
     * Creates a new ArenaSignUpReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ArenaSignUpReq instance
     */
    public static create(properties?: IArenaSignUpReq): ArenaSignUpReq;

    /**
     * Encodes the specified ArenaSignUpReq message. Does not implicitly {@link ArenaSignUpReq.verify|verify} messages.
     * @param message ArenaSignUpReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IArenaSignUpReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ArenaSignUpReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ArenaSignUpReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ArenaSignUpReq;
}

/** Properties of an ArenaSignUpResp. */
export interface IArenaSignUpResp {

    /** ArenaSignUpResp serverId */
    serverId: number;
}

/** Represents an ArenaSignUpResp. */
export class ArenaSignUpResp implements IArenaSignUpResp {

    /**
     * Constructs a new ArenaSignUpResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IArenaSignUpResp);

    /** ArenaSignUpResp serverId. */
    public serverId: number;

    /**
     * Creates a new ArenaSignUpResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ArenaSignUpResp instance
     */
    public static create(properties?: IArenaSignUpResp): ArenaSignUpResp;

    /**
     * Encodes the specified ArenaSignUpResp message. Does not implicitly {@link ArenaSignUpResp.verify|verify} messages.
     * @param message ArenaSignUpResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IArenaSignUpResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ArenaSignUpResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ArenaSignUpResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ArenaSignUpResp;
}

/** Properties of an IntegralAwardResp. */
export interface IIntegralAwardResp {

    /** IntegralAwardResp integral */
    integral: (number|Long);

    /** IntegralAwardResp award */
    award?: (IToolItem|null);

    /** IntegralAwardResp freeCount */
    freeCount: number;

    /** IntegralAwardResp isAward */
    isAward: number;
}

/** Represents an IntegralAwardResp. */
export class IntegralAwardResp implements IIntegralAwardResp {

    /**
     * Constructs a new IntegralAwardResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IIntegralAwardResp);

    /** IntegralAwardResp integral. */
    public integral: (number|Long);

    /** IntegralAwardResp award. */
    public award?: (IToolItem|null);

    /** IntegralAwardResp freeCount. */
    public freeCount: number;

    /** IntegralAwardResp isAward. */
    public isAward: number;

    /**
     * Creates a new IntegralAwardResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IntegralAwardResp instance
     */
    public static create(properties?: IIntegralAwardResp): IntegralAwardResp;

    /**
     * Encodes the specified IntegralAwardResp message. Does not implicitly {@link IntegralAwardResp.verify|verify} messages.
     * @param message IntegralAwardResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IIntegralAwardResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IntegralAwardResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IntegralAwardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntegralAwardResp;
}

/** Properties of a TaskAwardResp. */
export interface ITaskAwardResp {

    /** TaskAwardResp chairId */
    chairId: number;

    /** TaskAwardResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;

    /** TaskAwardResp addItems */
    addItems?: (IToolItem[]|null);
}

/** Represents a TaskAwardResp. */
export class TaskAwardResp implements ITaskAwardResp {

    /**
     * Constructs a new TaskAwardResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITaskAwardResp);

    /** TaskAwardResp chairId. */
    public chairId: number;

    /** TaskAwardResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /** TaskAwardResp addItems. */
    public addItems: Array<IToolItem>;

    /**
     * Creates a new TaskAwardResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TaskAwardResp instance
     */
    public static create(properties?: ITaskAwardResp): TaskAwardResp;

    /**
     * Encodes the specified TaskAwardResp message. Does not implicitly {@link TaskAwardResp.verify|verify} messages.
     * @param message TaskAwardResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITaskAwardResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TaskAwardResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TaskAwardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TaskAwardResp;
}

/** Properties of an ArenaResultInfo. */
export interface IArenaResultInfo {

    /** ArenaResultInfo nowIntegral */
    nowIntegral: (number|Long);

    /** ArenaResultInfo dayIntegral */
    dayIntegral: (number|Long);

    /** ArenaResultInfo taotalIntegral */
    taotalIntegral: (number|Long);

    /** ArenaResultInfo myRankItem */
    myRankItem?: (IRankItem|null);
}

/** Represents an ArenaResultInfo. */
export class ArenaResultInfo implements IArenaResultInfo {

    /**
     * Constructs a new ArenaResultInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IArenaResultInfo);

    /** ArenaResultInfo nowIntegral. */
    public nowIntegral: (number|Long);

    /** ArenaResultInfo dayIntegral. */
    public dayIntegral: (number|Long);

    /** ArenaResultInfo taotalIntegral. */
    public taotalIntegral: (number|Long);

    /** ArenaResultInfo myRankItem. */
    public myRankItem?: (IRankItem|null);

    /**
     * Creates a new ArenaResultInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ArenaResultInfo instance
     */
    public static create(properties?: IArenaResultInfo): ArenaResultInfo;

    /**
     * Encodes the specified ArenaResultInfo message. Does not implicitly {@link ArenaResultInfo.verify|verify} messages.
     * @param message ArenaResultInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IArenaResultInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ArenaResultInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ArenaResultInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ArenaResultInfo;
}

/** Properties of an ArenaResultRsp. */
export interface IArenaResultRsp {

    /** ArenaResultRsp result */
    result: number;
}

/** Represents an ArenaResultRsp. */
export class ArenaResultRsp implements IArenaResultRsp {

    /**
     * Constructs a new ArenaResultRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IArenaResultRsp);

    /** ArenaResultRsp result. */
    public result: number;

    /**
     * Creates a new ArenaResultRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ArenaResultRsp instance
     */
    public static create(properties?: IArenaResultRsp): ArenaResultRsp;

    /**
     * Encodes the specified ArenaResultRsp message. Does not implicitly {@link ArenaResultRsp.verify|verify} messages.
     * @param message ArenaResultRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IArenaResultRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ArenaResultRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ArenaResultRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ArenaResultRsp;
}

/** Properties of a QMSArenaResultInfo. */
export interface IQMSArenaResultInfo {

    /** QMSArenaResultInfo repeatedAdd */
    repeatedAdd: number;

    /** QMSArenaResultInfo type */
    type: number;

    /** QMSArenaResultInfo award */
    award?: (IToolItem[]|null);

    /** QMSArenaResultInfo arenaResultInfo */
    arenaResultInfo: IArenaResultInfo;
}

/** Represents a QMSArenaResultInfo. */
export class QMSArenaResultInfo implements IQMSArenaResultInfo {

    /**
     * Constructs a new QMSArenaResultInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQMSArenaResultInfo);

    /** QMSArenaResultInfo repeatedAdd. */
    public repeatedAdd: number;

    /** QMSArenaResultInfo type. */
    public type: number;

    /** QMSArenaResultInfo award. */
    public award: Array<IToolItem>;

    /** QMSArenaResultInfo arenaResultInfo. */
    public arenaResultInfo: IArenaResultInfo;

    /**
     * Creates a new QMSArenaResultInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QMSArenaResultInfo instance
     */
    public static create(properties?: IQMSArenaResultInfo): QMSArenaResultInfo;

    /**
     * Encodes the specified QMSArenaResultInfo message. Does not implicitly {@link QMSArenaResultInfo.verify|verify} messages.
     * @param message QMSArenaResultInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQMSArenaResultInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QMSArenaResultInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QMSArenaResultInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QMSArenaResultInfo;
}

/** Properties of a DJSArenaResultInfo. */
export interface IDJSArenaResultInfo {

    /** DJSArenaResultInfo vipAdd */
    vipAdd: number;

    /** DJSArenaResultInfo cannonAdd */
    cannonAdd: number;

    /** DJSArenaResultInfo type */
    type: number;

    /** DJSArenaResultInfo award */
    award?: (IToolItem[]|null);

    /** DJSArenaResultInfo arenaResultInfo */
    arenaResultInfo: IArenaResultInfo;
}

/** Represents a DJSArenaResultInfo. */
export class DJSArenaResultInfo implements IDJSArenaResultInfo {

    /**
     * Constructs a new DJSArenaResultInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDJSArenaResultInfo);

    /** DJSArenaResultInfo vipAdd. */
    public vipAdd: number;

    /** DJSArenaResultInfo cannonAdd. */
    public cannonAdd: number;

    /** DJSArenaResultInfo type. */
    public type: number;

    /** DJSArenaResultInfo award. */
    public award: Array<IToolItem>;

    /** DJSArenaResultInfo arenaResultInfo. */
    public arenaResultInfo: IArenaResultInfo;

    /**
     * Creates a new DJSArenaResultInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DJSArenaResultInfo instance
     */
    public static create(properties?: IDJSArenaResultInfo): DJSArenaResultInfo;

    /**
     * Encodes the specified DJSArenaResultInfo message. Does not implicitly {@link DJSArenaResultInfo.verify|verify} messages.
     * @param message DJSArenaResultInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDJSArenaResultInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DJSArenaResultInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DJSArenaResultInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DJSArenaResultInfo;
}

/** Properties of a ReceiveArenaOfferRewardTaskResp. */
export interface IReceiveArenaOfferRewardTaskResp {

    /** ReceiveArenaOfferRewardTaskResp chairId */
    chairId: number;

    /** ReceiveArenaOfferRewardTaskResp integral */
    integral: (number|Long);

    /** ReceiveArenaOfferRewardTaskResp addIntegral */
    addIntegral?: (number|Long|null);
}

/** Represents a ReceiveArenaOfferRewardTaskResp. */
export class ReceiveArenaOfferRewardTaskResp implements IReceiveArenaOfferRewardTaskResp {

    /**
     * Constructs a new ReceiveArenaOfferRewardTaskResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReceiveArenaOfferRewardTaskResp);

    /** ReceiveArenaOfferRewardTaskResp chairId. */
    public chairId: number;

    /** ReceiveArenaOfferRewardTaskResp integral. */
    public integral: (number|Long);

    /** ReceiveArenaOfferRewardTaskResp addIntegral. */
    public addIntegral: (number|Long);

    /**
     * Creates a new ReceiveArenaOfferRewardTaskResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReceiveArenaOfferRewardTaskResp instance
     */
    public static create(properties?: IReceiveArenaOfferRewardTaskResp): ReceiveArenaOfferRewardTaskResp;

    /**
     * Encodes the specified ReceiveArenaOfferRewardTaskResp message. Does not implicitly {@link ReceiveArenaOfferRewardTaskResp.verify|verify} messages.
     * @param message ReceiveArenaOfferRewardTaskResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReceiveArenaOfferRewardTaskResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReceiveArenaOfferRewardTaskResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReceiveArenaOfferRewardTaskResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReceiveArenaOfferRewardTaskResp;
}

/** Properties of a MatchTask. */
export interface IMatchTask {

    /** MatchTask totalVal */
    totalVal: number;

    /** MatchTask awards */
    awards?: (IToolItem[]|null);
}

/** Represents a MatchTask. */
export class MatchTask implements IMatchTask {

    /**
     * Constructs a new MatchTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchTask);

    /** MatchTask totalVal. */
    public totalVal: number;

    /** MatchTask awards. */
    public awards: Array<IToolItem>;

    /**
     * Creates a new MatchTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchTask instance
     */
    public static create(properties?: IMatchTask): MatchTask;

    /**
     * Encodes the specified MatchTask message. Does not implicitly {@link MatchTask.verify|verify} messages.
     * @param message MatchTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchTask;
}

/** Properties of a MatchTaskResp. */
export interface IMatchTaskResp {

    /** MatchTaskResp task */
    task?: (IMatchTask[]|null);
}

/** Represents a MatchTaskResp. */
export class MatchTaskResp implements IMatchTaskResp {

    /**
     * Constructs a new MatchTaskResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchTaskResp);

    /** MatchTaskResp task. */
    public task: Array<IMatchTask>;

    /**
     * Creates a new MatchTaskResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchTaskResp instance
     */
    public static create(properties?: IMatchTaskResp): MatchTaskResp;

    /**
     * Encodes the specified MatchTaskResp message. Does not implicitly {@link MatchTaskResp.verify|verify} messages.
     * @param message MatchTaskResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchTaskResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchTaskResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchTaskResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchTaskResp;
}

/** Properties of a DayRankInfo. */
export interface IDayRankInfo {

    /** DayRankInfo name */
    name?: (string|null);

    /** DayRankInfo integral */
    integral?: (number|Long|null);

    /** DayRankInfo vip */
    vip?: (number|null);

    /** DayRankInfo rank */
    rank?: (number|null);

    /** DayRankInfo award */
    award?: (IToolItem[]|null);

    /** DayRankInfo uid */
    uid?: (number|null);
}

/** Represents a DayRankInfo. */
export class DayRankInfo implements IDayRankInfo {

    /**
     * Constructs a new DayRankInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDayRankInfo);

    /** DayRankInfo name. */
    public name: string;

    /** DayRankInfo integral. */
    public integral: (number|Long);

    /** DayRankInfo vip. */
    public vip: number;

    /** DayRankInfo rank. */
    public rank: number;

    /** DayRankInfo award. */
    public award: Array<IToolItem>;

    /** DayRankInfo uid. */
    public uid: number;

    /**
     * Creates a new DayRankInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DayRankInfo instance
     */
    public static create(properties?: IDayRankInfo): DayRankInfo;

    /**
     * Encodes the specified DayRankInfo message. Does not implicitly {@link DayRankInfo.verify|verify} messages.
     * @param message DayRankInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDayRankInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DayRankInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DayRankInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DayRankInfo;
}

/** Properties of a DayRank. */
export interface IDayRank {

    /** DayRank date */
    date: (number|Long);

    /** DayRank dayRankInfo */
    dayRankInfo?: (IDayRankInfo[]|null);
}

/** Represents a DayRank. */
export class DayRank implements IDayRank {

    /**
     * Constructs a new DayRank.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDayRank);

    /** DayRank date. */
    public date: (number|Long);

    /** DayRank dayRankInfo. */
    public dayRankInfo: Array<IDayRankInfo>;

    /**
     * Creates a new DayRank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DayRank instance
     */
    public static create(properties?: IDayRank): DayRank;

    /**
     * Encodes the specified DayRank message. Does not implicitly {@link DayRank.verify|verify} messages.
     * @param message DayRank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDayRank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DayRank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DayRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DayRank;
}

/** Properties of a DayRanksResp. */
export interface IDayRanksResp {

    /** DayRanksResp dayRank */
    dayRank?: (IDayRank[]|null);
}

/** Represents a DayRanksResp. */
export class DayRanksResp implements IDayRanksResp {

    /**
     * Constructs a new DayRanksResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDayRanksResp);

    /** DayRanksResp dayRank. */
    public dayRank: Array<IDayRank>;

    /**
     * Creates a new DayRanksResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DayRanksResp instance
     */
    public static create(properties?: IDayRanksResp): DayRanksResp;

    /**
     * Encodes the specified DayRanksResp message. Does not implicitly {@link DayRanksResp.verify|verify} messages.
     * @param message DayRanksResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDayRanksResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DayRanksResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DayRanksResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DayRanksResp;
}

/** Properties of a DayKemp. */
export interface IDayKemp {

    /** DayKemp date */
    date: (number|Long);

    /** DayKemp name */
    name?: (string|null);

    /** DayKemp integral */
    integral?: (number|Long|null);
}

/** Represents a DayKemp. */
export class DayKemp implements IDayKemp {

    /**
     * Constructs a new DayKemp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDayKemp);

    /** DayKemp date. */
    public date: (number|Long);

    /** DayKemp name. */
    public name: string;

    /** DayKemp integral. */
    public integral: (number|Long);

    /**
     * Creates a new DayKemp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DayKemp instance
     */
    public static create(properties?: IDayKemp): DayKemp;

    /**
     * Encodes the specified DayKemp message. Does not implicitly {@link DayKemp.verify|verify} messages.
     * @param message DayKemp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDayKemp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DayKemp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DayKemp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DayKemp;
}

/** Properties of a DayKempsResp. */
export interface IDayKempsResp {

    /** DayKempsResp dayKemp */
    dayKemp?: (IDayKemp[]|null);
}

/** Represents a DayKempsResp. */
export class DayKempsResp implements IDayKempsResp {

    /**
     * Constructs a new DayKempsResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDayKempsResp);

    /** DayKempsResp dayKemp. */
    public dayKemp: Array<IDayKemp>;

    /**
     * Creates a new DayKempsResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DayKempsResp instance
     */
    public static create(properties?: IDayKempsResp): DayKempsResp;

    /**
     * Encodes the specified DayKempsResp message. Does not implicitly {@link DayKempsResp.verify|verify} messages.
     * @param message DayKempsResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDayKempsResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DayKempsResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DayKempsResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DayKempsResp;
}

/** Properties of a TribalWarArenaInfo. */
export interface ITribalWarArenaInfo {

    /** TribalWarArenaInfo integral */
    integral?: (number|Long|null);

    /** TribalWarArenaInfo rank */
    rank?: (number|null);

    /** TribalWarArenaInfo cardType */
    cardType?: (string|null);

    /** TribalWarArenaInfo isNameList */
    isNameList?: (number|null);

    /** TribalWarArenaInfo matchRank */
    matchRank?: (IMatchRank|null);
}

/** Represents a TribalWarArenaInfo. */
export class TribalWarArenaInfo implements ITribalWarArenaInfo {

    /**
     * Constructs a new TribalWarArenaInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITribalWarArenaInfo);

    /** TribalWarArenaInfo integral. */
    public integral: (number|Long);

    /** TribalWarArenaInfo rank. */
    public rank: number;

    /** TribalWarArenaInfo cardType. */
    public cardType: string;

    /** TribalWarArenaInfo isNameList. */
    public isNameList: number;

    /** TribalWarArenaInfo matchRank. */
    public matchRank?: (IMatchRank|null);

    /**
     * Creates a new TribalWarArenaInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TribalWarArenaInfo instance
     */
    public static create(properties?: ITribalWarArenaInfo): TribalWarArenaInfo;

    /**
     * Encodes the specified TribalWarArenaInfo message. Does not implicitly {@link TribalWarArenaInfo.verify|verify} messages.
     * @param message TribalWarArenaInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITribalWarArenaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TribalWarArenaInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TribalWarArenaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TribalWarArenaInfo;
}

/** ContentTypeEnum enum. */
export enum ContentTypeEnum {
    Content_BombBossOut = 100
}

/** Properties of a BroadcastNews. */
export interface IBroadcastNews {

    /** BroadcastNews userID */
    userID: number;

    /** BroadcastNews username */
    username: string;

    /** BroadcastNews gameservertype */
    gameservertype: number;

    /** BroadcastNews messagetype */
    messagetype: number;

    /** BroadcastNews message */
    message: string;

    /** BroadcastNews targetServerType */
    targetServerType?: (number|null);

    /** BroadcastNews contentType */
    contentType?: (number|null);
}

/** Represents a BroadcastNews. */
export class BroadcastNews implements IBroadcastNews {

    /**
     * Constructs a new BroadcastNews.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBroadcastNews);

    /** BroadcastNews userID. */
    public userID: number;

    /** BroadcastNews username. */
    public username: string;

    /** BroadcastNews gameservertype. */
    public gameservertype: number;

    /** BroadcastNews messagetype. */
    public messagetype: number;

    /** BroadcastNews message. */
    public message: string;

    /** BroadcastNews targetServerType. */
    public targetServerType: number;

    /** BroadcastNews contentType. */
    public contentType: number;

    /**
     * Creates a new BroadcastNews instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BroadcastNews instance
     */
    public static create(properties?: IBroadcastNews): BroadcastNews;

    /**
     * Encodes the specified BroadcastNews message. Does not implicitly {@link BroadcastNews.verify|verify} messages.
     * @param message BroadcastNews message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBroadcastNews, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BroadcastNews message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BroadcastNews
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BroadcastNews;
}

/** Properties of a CannonSkinListResp. */
export interface ICannonSkinListResp {

    /** CannonSkinListResp items */
    items?: (ICannonSkinInfo[]|null);
}

/** Represents a CannonSkinListResp. */
export class CannonSkinListResp implements ICannonSkinListResp {

    /**
     * Constructs a new CannonSkinListResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICannonSkinListResp);

    /** CannonSkinListResp items. */
    public items: Array<ICannonSkinInfo>;

    /**
     * Creates a new CannonSkinListResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CannonSkinListResp instance
     */
    public static create(properties?: ICannonSkinListResp): CannonSkinListResp;

    /**
     * Encodes the specified CannonSkinListResp message. Does not implicitly {@link CannonSkinListResp.verify|verify} messages.
     * @param message CannonSkinListResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICannonSkinListResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CannonSkinListResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CannonSkinListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CannonSkinListResp;
}

/** Properties of a CannonSkinInfo. */
export interface ICannonSkinInfo {

    /** CannonSkinInfo skinId */
    skinId: string;

    /** CannonSkinInfo status */
    status: number;
}

/** Represents a CannonSkinInfo. */
export class CannonSkinInfo implements ICannonSkinInfo {

    /**
     * Constructs a new CannonSkinInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICannonSkinInfo);

    /** CannonSkinInfo skinId. */
    public skinId: string;

    /** CannonSkinInfo status. */
    public status: number;

    /**
     * Creates a new CannonSkinInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CannonSkinInfo instance
     */
    public static create(properties?: ICannonSkinInfo): CannonSkinInfo;

    /**
     * Encodes the specified CannonSkinInfo message. Does not implicitly {@link CannonSkinInfo.verify|verify} messages.
     * @param message CannonSkinInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICannonSkinInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CannonSkinInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CannonSkinInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CannonSkinInfo;
}

/** Properties of a UseCannonSkinReq. */
export interface IUseCannonSkinReq {

    /** UseCannonSkinReq skinId */
    skinId: string;
}

/** Represents a UseCannonSkinReq. */
export class UseCannonSkinReq implements IUseCannonSkinReq {

    /**
     * Constructs a new UseCannonSkinReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUseCannonSkinReq);

    /** UseCannonSkinReq skinId. */
    public skinId: string;

    /**
     * Creates a new UseCannonSkinReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UseCannonSkinReq instance
     */
    public static create(properties?: IUseCannonSkinReq): UseCannonSkinReq;

    /**
     * Encodes the specified UseCannonSkinReq message. Does not implicitly {@link UseCannonSkinReq.verify|verify} messages.
     * @param message UseCannonSkinReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUseCannonSkinReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UseCannonSkinReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UseCannonSkinReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UseCannonSkinReq;
}

/** Properties of a QueryCannonSkinReq. */
export interface IQueryCannonSkinReq {

    /** QueryCannonSkinReq cannonSkin */
    cannonSkin: string;
}

/** Represents a QueryCannonSkinReq. */
export class QueryCannonSkinReq implements IQueryCannonSkinReq {

    /**
     * Constructs a new QueryCannonSkinReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryCannonSkinReq);

    /** QueryCannonSkinReq cannonSkin. */
    public cannonSkin: string;

    /**
     * Creates a new QueryCannonSkinReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryCannonSkinReq instance
     */
    public static create(properties?: IQueryCannonSkinReq): QueryCannonSkinReq;

    /**
     * Encodes the specified QueryCannonSkinReq message. Does not implicitly {@link QueryCannonSkinReq.verify|verify} messages.
     * @param message QueryCannonSkinReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryCannonSkinReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryCannonSkinReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryCannonSkinReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryCannonSkinReq;
}

/** Properties of a UseCannonSkinResp. */
export interface IUseCannonSkinResp {

    /** UseCannonSkinResp curSkin */
    curSkin: string;

    /** UseCannonSkinResp curScore */
    curScore: (number|Long);

    /** UseCannonSkinResp curDiamond */
    curDiamond: (number|Long);
}

/** Represents a UseCannonSkinResp. */
export class UseCannonSkinResp implements IUseCannonSkinResp {

    /**
     * Constructs a new UseCannonSkinResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUseCannonSkinResp);

    /** UseCannonSkinResp curSkin. */
    public curSkin: string;

    /** UseCannonSkinResp curScore. */
    public curScore: (number|Long);

    /** UseCannonSkinResp curDiamond. */
    public curDiamond: (number|Long);

    /**
     * Creates a new UseCannonSkinResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UseCannonSkinResp instance
     */
    public static create(properties?: IUseCannonSkinResp): UseCannonSkinResp;

    /**
     * Encodes the specified UseCannonSkinResp message. Does not implicitly {@link UseCannonSkinResp.verify|verify} messages.
     * @param message UseCannonSkinResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUseCannonSkinResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UseCannonSkinResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UseCannonSkinResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UseCannonSkinResp;
}

/** Properties of an OtherUseCannonSkinResp. */
export interface IOtherUseCannonSkinResp {

    /** OtherUseCannonSkinResp chairId */
    chairId: number;

    /** OtherUseCannonSkinResp skinId */
    skinId: string;

    /** OtherUseCannonSkinResp curScore */
    curScore: (number|Long);

    /** OtherUseCannonSkinResp curDiamond */
    curDiamond: (number|Long);
}

/** Represents an OtherUseCannonSkinResp. */
export class OtherUseCannonSkinResp implements IOtherUseCannonSkinResp {

    /**
     * Constructs a new OtherUseCannonSkinResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOtherUseCannonSkinResp);

    /** OtherUseCannonSkinResp chairId. */
    public chairId: number;

    /** OtherUseCannonSkinResp skinId. */
    public skinId: string;

    /** OtherUseCannonSkinResp curScore. */
    public curScore: (number|Long);

    /** OtherUseCannonSkinResp curDiamond. */
    public curDiamond: (number|Long);

    /**
     * Creates a new OtherUseCannonSkinResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OtherUseCannonSkinResp instance
     */
    public static create(properties?: IOtherUseCannonSkinResp): OtherUseCannonSkinResp;

    /**
     * Encodes the specified OtherUseCannonSkinResp message. Does not implicitly {@link OtherUseCannonSkinResp.verify|verify} messages.
     * @param message OtherUseCannonSkinResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOtherUseCannonSkinResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OtherUseCannonSkinResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OtherUseCannonSkinResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OtherUseCannonSkinResp;
}

/** ChatChannelType enum. */
export enum ChatChannelType {
    Channel_ALL = 1,
    Channel_ROOM = 2,
    Channel_TABLE = 3,
    Channel_PRIVATE = 4
}

/** ChatContentType enum. */
export enum ChatContentType {
    Content_TEXT = 1,
    Content_EMOJI = 2,
    Content_MAGIC = 3
}

/** Properties of a ChatMessage. */
export interface IChatMessage {

    /** ChatMessage fromid */
    fromid: number;

    /** ChatMessage toid */
    toid?: (number|null);

    /** ChatMessage roomid */
    roomid?: (number|null);

    /** ChatMessage tableid */
    tableid?: (number|null);

    /** ChatMessage channel */
    channel: number;

    /** ChatMessage contentType */
    contentType: number;

    /** ChatMessage content */
    content?: (string|null);

    /** ChatMessage emojiId */
    emojiId?: (string|null);

    /** ChatMessage fromName */
    fromName?: (string|null);

    /** ChatMessage treasure */
    treasure?: (ITreasureUpdate|null);
}

/** Represents a ChatMessage. */
export class ChatMessage implements IChatMessage {

    /**
     * Constructs a new ChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatMessage);

    /** ChatMessage fromid. */
    public fromid: number;

    /** ChatMessage toid. */
    public toid: number;

    /** ChatMessage roomid. */
    public roomid: number;

    /** ChatMessage tableid. */
    public tableid: number;

    /** ChatMessage channel. */
    public channel: number;

    /** ChatMessage contentType. */
    public contentType: number;

    /** ChatMessage content. */
    public content: string;

    /** ChatMessage emojiId. */
    public emojiId: string;

    /** ChatMessage fromName. */
    public fromName: string;

    /** ChatMessage treasure. */
    public treasure?: (ITreasureUpdate|null);

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatMessage instance
     */
    public static create(properties?: IChatMessage): ChatMessage;

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage;
}

/** ClientCmd enum. */
export enum ClientCmd {
    CLOSESOCKET = 2,
    HEART = 999,
    ERROR_OR_EXCEPTION = 1000,
    USER_REGISTE = 1001,
    USER_LOGIN = 1002,
    REAL_IP = 1003,
    USER_UPDATE = 1004,
    USER_FPWD_CHECKCODE = 1005,
    USER_EVERY_SIGN = 1006,
    USER_EVERY_SIGN_RECV = 1007,
    USER_REAL_NAME_AUTHENTICATION = 1008,
    CODE_RED_PACK = 1009,
    VIP_LUCKY_WHEEL_SHOW = 1011,
    VIP_LUCKY_WHEEL_RECV = 1012,
    SEVEN_DAYS_PACKAGE_SHOW = 1013,
    SEVEN_DAYS_PACKAGE_RECV = 1014,
    EVERY_DAYS_TASK_SHOW = 1015,
    EVERY_DAYS_TASK_PROGRESS = 1016,
    EVERY_DAYS_TASK_RECV = 1017,
    EVERY_DAYS_TASK_VITALITY_RECV = 1018,
    EXCNANGE_CODE_PACK = 1019,
    CODE_RED_PACK_PEOPLE_COUNT = 1020,
    CODE_RED_PACK_TASK = 1021,
    CODE_RED_PACK_TASK_REWARD = 1022,
    COORDINATIONSERVER_SERVER_MESSAGE = 1023,
    QUERY_MATCH_INFO = 1024,
    GAME_SING_UP = 1025,
    GAME_ARENA_DJS_RESULT = 1026,
    GAME_ARENA_QMS_RESULT = 1027,
    GAME_ARENA_INTEGRAL_AWARD = 1028,
    GAME_ARENA_TAKE_INTEGRAL_AWARD = 1029,
    GAME_ARENA_RESULT = 1030,
    GAME_MATCH_INFO_LIST = 1031,
    GAME_ARENA_SELF_RANK_REWARD = 1032,
    GAME_ARENA_TAKE_RANK_REWARD = 1033,
    GAME_ARENA_TAKE_OFFER_TASK_REWARD = 1034,
    GAME_ARENA_TAKE_GIVE_UP = 1035,
    GAME_MATCH_CHANGE_COUNT = 1036,
    GAME_MATCH_CHANGE_RANK = 1037,
    GAME_MATCH_BEGIN = 1308,
    GAME_MATCH_SINGUP = 1039,
    GAME_MATCH_RESULT = 1040,
    GAME_MATCH_INFO = 1041,
    GAME_MATCH_CANCEL = 1042,
    GAME_MATCH_ENTER_INFO = 1043,
    GAME_MATCH_TAKE_AWARD = 1044,
    GAME_MATCH_END = 1045,
    GAME_SIT_INFO_REQ = 1046,
    GAME_SIT_INFO_SELECT = 1047,
    GAME_SIT_INFO_SYN_COUNT = 1048,
    GAME_LOGIN_LGOIN_SERVER = 1500,
    GAME_LOGIN_GAME_SERVER = 1501,
    GAME_SIT_DOWN = 1502,
    GAME_SIT_DOWN_OTHER = 1503,
    GAME_LEAVE_ROOM = 1504,
    GAME_LEAVE_ROOM_OTHER = 1505,
    GAMESERVER_FISHFIRE = 1506,
    GAMESERVER_FISHFIREOTHER = 1507,
    GAMESERVER_FISHLOCKFISH = 1508,
    GAMESERVER_FISHLOCKFISHOTHER = 1509,
    GAMESERVER_CATCH_FISH = 1510,
    GAMESERVER_OUT_FISH = 1511,
    GAMESERVER_SYNC = 1512,
    GAMESERVER_CATCH_SPE_FISH = 1513,
    GAMESERVER_CATCH_SPE_FISH_OTHER = 1514,
    GAMESERVER_CATCH_FISH_OTHER = 1515,
    GAMESERVER_BOMB_FISH = 1516,
    GAMESERVER_BOMB_FISH_OTHER = 1517,
    GAMESERVER_CALL_SD_FISH = 1518,
    GAMESERVER_CALL_HJ_FISH = 1519,
    GAMESERVER_USE_SKILL = 1520,
    GAMESERVER_USE_SKILL_OTHER = 1521,
    GAMESERVER_UNLOCK_CANNON = 1522,
    GAMESERVER_UNLOCK_CANNON_LIST = 1523,
    GAMESERVER_NOW_ENTER_ROOM = 1524,
    GAMESERVER_FISHARRAY_COMING = 1525,
    GAMESERVER_FISHCHANGE_CANNON = 1526,
    GAMESERVER_FISHCHANGE_CANNON_OTHER = 1527,
    GAMESERVER_SYNCFISH = 1528,
    GAMESERVER_PROPDROP = 1529,
    GAMESERVER_QUER_FISHSCORE = 1530,
    TREASURE_UPDATE_NOTIFY = 1531,
    GAMESERVER_ANDROID_LOGIN = 1532,
    GAMESERVER_ECONOMY_EXCHANGE = 1533,
    DRAW_REDENVELOPES = 1534,
    EXCHANGE_AWARD = 1535,
    GET_EXCHANGE_AWARD_LIST = 1536,
    GET_USERROOM_REDENVELOPES_INFO = 1537,
    USER_REDENVELOPES_INFO = 1538,
    USER_ROOM_REDENVELOPES_LISE = 1539,
    OTHER_ROOM_ENVELOPESITEM_INFO = 1540,
    GAME_SERVER_DRAW_HIGHLIGHT = 1601,
    DRAW_STATIC = 1602,
    DRAW_INFO = 1603,
    DRAW_RAFFLE = 1604,
    DRAW_RAFFLEING = 1605,
    GAMESERVER_OTHER_CHANGE_CANNON_SKIN = 1606,
    GAMESERVER_CANNON_SKIN_LIST = 1607,
    GAMESERVER_CANNON_SKIN_USE = 1608,
    GAMESERVER_FORGING_CANNON_LIST = 1609,
    SKILL_STATUS_LIST = 1610,
    SKILL_USE = 1611,
    GAME_SERVER_QUERY_BOMB_CONFIG = 1612,
    GAME_SERVER_LEVEL_UP = 1613,
    GAME_SERVER_LEVEL_EXP_REFRSH = 1614,
    REALNAME_PORT = 1615,
    REALNAME_ALERT = 1616,
    REALNAME_ENTER_GUEST = 1617,
    SITE_NICKNAME_PORT = 1618,
    SITE_NICKNAME_PWD = 1619,
    VERIFY_PHONE_CODE = 1620,
    NEWANDOLD_SECONDPWD = 1621,
    WEB_WX_MALLINFO = 1622,
    OLD_PLAYER_RETURN = 1623,
    WECHAT_BINDSTATUS = 1624,
    WECHAT_RECV = 1625,
    WEB_WECHAT_BINDSTATUS = 1626,
    WEB_WECHAT_RECVSTATUS = 1627,
    WEB_WECHAT_SIGNRECV = 1628,
    SUPER_PACK_LIST = 1629,
    OLD_PLAYER_EMAILER = 1630,
    SEVEN_SIGN_SHOW = 1631,
    SEVEN_SIGN_RECV = 1632,
    SIGN_NEW_PLAYER = 1633,
    WEB_TASK_LIST = 1634,
    WEB_TASK_INFO = 1635,
    WEB_TASK_STATUS = 1636,
    WEB_TASK_REWARDS = 1637,
    WEB_TASK_GROW_COMPLETE = 1638,
    PUSH_TASK_REWARDS_STATUS = 1639,
    UPDATE_USER_FACEICON = 1640,
    LOGIN_UPLOAD_TOKEN = 1641,
    GAMESERVER_SECONDARY_CANNON = 1642,
    USER_CHANGE_GUIDE = 1643,
    USER_GUIDE_TASK = 1644,
    GUIDE_UNLOCK_CANNON_REWARD = 1645,
    GAME_ROOM_TYPE_LIST = 1700,
    GAME_ROOM_INFO = 1701,
    GAME_ARENA_TASK = 1702,
    GAME_ARENA_CHAMPION_RANK = 1703,
    GAME_ARENA_DAY_MATCH_RANK = 1704,
    GAME_ARENA_MY_HONOR = 1705,
    GAME_TASK_STATUS = 1800,
    GAME_TASK_ACCEPT = 1801,
    GAME_TASK_RECEIVE = 1802,
    GAME_OFFER_TASK_STATUS = 1803,
    GAME_OFFER_TASK_ACCEPT = 1804,
    GAME_OFFER_TASK_RECEIVE = 1805,
    GAME_OFFER_TASK_RANK = 1806,
    GAME_TRIBAL_WAR_RANK = 1807,
    SAILING_PACKAGE = 2000,
    FIRST_BUY = 2001,
    ACTIVITY_LIST = 2002,
    ACTIVITY_ONLY_INFO = 2003,
    ACTIVITY_ONLY_REWARD = 2004,
    CLIENT_HOT_UPDATE = 2005,
    PUSH_CONFIG_TABLE = 2006,
    UPDATE_PACKAGE = 2007,
    LOGIN_BEFORE_OPEN = 2008,
    GET_GAME_DOWNLOAD_URL = 2009,
    HALL_MALL = 2500,
    BACKPACK_INFORMATION_DISPLAY = 2550,
    USER_PROFILE_DISPLAY = 2551,
    EXCHANGE_MALL = 2552,
    EXCHANGE_MALL_RECORD = 2553,
    USER_EMAIL_INFO = 2554,
    GET_USER_EMAIL_ACCESSORY = 2555,
    DEL_USER_EMAIL = 2556,
    HALL_MALL_PAY_SUCCESS = 2557,
    MONTH_CARD_REWARDS = 2558,
    READ_USER_EMAIL = 2559,
    SEND_CHAT_MESSAGE = 2560,
    USER_VERIFIED = 2660,
    IN_OUT_USER_ITEMS_STORANGE = 2661,
    SEND_PHONE_CODE = 2662,
    SPECIAL_ITEM_HANDLE = 2663,
    GET_JFD_MULTIPLE = 2664,
    MODIFY_LOGIN_PASSWORD = 2665,
    MODIFY_SECOND_PASSWORD = 2666,
    RELIEFFUND_HAPPEN = 2667,
    SYNC_RELIEFFUND_INFO = 2668,
    REQ_GET_RELIEFFUND = 2669,
    RET_GET_RELIEFFUND = 2670,
    BOSSFISH_OUT_PREWARN = 2671,
    FISH_ATTACK_PLAYER = 2672,
    GOLDPIRANHA_RETURN_SCORE = 2673,
    PIRANHA_BOSS_DIEMAGIC_OVER = 2674,
    WORLDBOSS_SYNC_HP = 2675,
    CHECK_REVISE_PWD = 2676,
    CHECK_OLD_BIND = 2677,
    USER_FPWD_SENDCODE = 2678,
    CHECK_REVISE_BIND = 2679,
    CHECK_EVERYDAY_MONEY = 2680,
    USER_BIND_MINCHINE = 2681,
    USER_FEEDBACK = 2682,
    CHECK_PHONE_CODE = 2683,
    WORLDBOSS_DEATH_ACCOUNT = 2684,
    WORLDBOSS_DIE = 2685,
    REDPOINT_ONLINE_SYNC = 2686,
    REDPOINT_REFRESH = 2687,
    REDPOINT_CANCEL_SHOW = 2688,
    BOMBBOSS_SYNC_FLAGSHOW = 2689,
    BOMBBOSS_SYNC_BOMBDROPS = 2690,
    BOMBBOSS_NOTIFY_KILLAWARD = 2691,
    WORLDBOSS_SYNC_PLAYERAWARD = 2692,
    SYSTEM_CONF = 2700,
    USER_EVERY_SIGN_SHAREAWARD = 2701,
    SYNC_ADVERTISE_FINISHED = 2702,
    ADVERTISE_WHEEL_AWARDS = 2703,
    ADVERTISE_WHEEL_RAND_AWARD = 2704,
    SYNC_ADVERTISE_RAND_INFOS = 2705,
    DRAWRAFFLE_ACTION = 2706,
    CHARGE_DAYGIFT_INFO_REQ = 2707,
    CHARGE_DAYGIFT_FREEAWARD_GET = 2708,
    CHARGE_CANNON_DIRECTUP = 2709,
    GIFTMALL_REQ_JQ_STOREINFO = 2710,
    GIFTMALL_REQ_DIAMOND_STOREINFO = 2711,
    GIFTMALL_REFRESH_DIAMOND_STORE = 2713,
    GIFTMALL_BUY_GOODS = 2714,
    GIFTMALL_SYNC_BOUGHT_RECORDS = 2715,
    ONLINE_SYNC_USERSTATES = 2716,
    SYNC_USERSTATES_CHANGE = 2717,
    READ_ITEMS_STORANGE = 2718,
    REQ_SECURITYBOX_RECORDS = 2719,
    REQ_SECURITYBOX_PUTITEMS = 2720,
    REQ_SECURITYBOX_FETCH = 2721,
    SYNC_TREASURETHIEF_MUL = 2722,
    CHANGE_SECONDCANNON_MUL = 2723,
    CHANGE_SECONDCANNON_MUL_OTHER = 2724,
    USER_UNLOCK_CANNON_INFO = 2725,
    INTEGRAL_MALL_INFO = 2726,
    INTEGRAL_MALL_BUYGOODS = 2727,
    DRILL_BULLET_REMOVE = 2728,
    SYNC_GOBLIN_POOLSCORE = 2729,
    NOTIFY_GOBLIN_OUT_SCREEN = 2730,
    CANCEL_BOMB_EQUIPED_STATE = 2731,
    KILL_FREEBULLET_FISH = 2732,
    ENTERROOM_SYNC_FREEBULLET = 2733,
    CHECK_CAN_RECHARGE = 2734,
    SEND_EMAIL_CODE = 3001,
    CHECK_EMAIL_CODE = 3002,
    VERIFY_EMAIL_CODE = 3003,
    USER_FPWD_SENDCODE_EMAIL = 3004,
    USER_FPWD_CHECKCODE_EMAIL = 3005
}

/** ErrorCode enum. */
export enum ErrorCode {
    SYS_SESSION_EXPIRY = 1,
    DEFAULT_ERROR_CODE = 99,
    PLAYER_IS_OTHER_LOGIN = 100,
    LOGIN_ACCOUNT_PASSWORD_ERROR = 101,
    LOGIN_ACCOUNT_NULLITY = 102,
    LOGIN_BINDING_OTHER_MACHINE = 103,
    LOGIN_SYSTEM_ENJOIN_LOGON = 104,
    LOGIN_SYSTEM_ENJOIN_LOGON_IP = 105,
    LOGIN_SYSTEM_ENJOIN_LOGIN_MACHINE = 106,
    REGISTER_SYSTEM_ENJOIN = 107,
    LOGIN_SYSTEM_ENJOIN = 108,
    REGISTER_SYSTEM_FORBID_NAME = 109,
    REGISTER_SYSTEM_FORBID_NICKNAME = 110,
    REGISTER_SYSTEM_FORBID_IP = 111,
    REGISTER_SYSTEM_FORBID_MACHINE = 112,
    REGISTER_SYSTEM_FORBID_ACCOUNTS_REG = 113,
    REGISTER_SYSTEM_FORBID_NICKNAME_REG = 114,
    LOGIN_GAME_TOKEN_ERROR = 115,
    GAME_SERVER_ENTERROOMChari = 117,
    GAME_SERVER_ENTERROOMCHARITABLE = 118,
    DRAW_STAGE_NOT_EXISTS = 119,
    DRAW_VAL_LIMIT = 120,
    DRAW_GREEN_DIAMOND_LIMIT = 121,
    KILL_BONUS_WRONG = 122,
    CANNON_SKIN_NOT_FOUND = 123,
    VIP_LOW = 124,
    CANNON_ALREADY_UNLOCK_ALL = 125,
    NOT_ENOUGH_DIAMOND = 126,
    NOT_ENOUGH_TOOLS = 127,
    UNLOCK_CANNON_ALREADY = 128,
    UNLOCK_UNKNOWN_CANNON = 129,
    SKILL_NOT_EXISTS = 130,
    SKILL_ROOM_DISALLOW = 131,
    SKILL_NO_FISH_CONFIG = 132,
    EXISTS_YOU_LING_HAI_DAO_CHUAN = 133,
    VIP_LIMIT = 134,
    SKILL_CD = 135,
    TOOL_LIMIT = 136,
    GAME_SERVER_LOGON = 137,
    ARENA_COUNT_OVER = 138,
    ARENA_ITEM_LACK = 139,
    ARENA_FEE_LACK = 140,
    ARENA_LOCK = 141,
    ARENA_TIME_OFF = 142,
    ROOM_NOT_FOUNT = 143,
    ERROR_MATCH_INFO = 144,
    MATCH_ALREADY_OVER = 145,
    MATCH_YI_BAO_MING = 146,
    MATCH_WEI_BAO_MING = 147,
    MATCH_NOT_EXISTS_TYPE = 148,
    MATCH_TYPE_EMPTY = 149,
    MATCH_NOT_ENOUGH_SCORE = 150,
    MATCH_ALREADY_BEGIN_CANT_CANCEL = 151,
    MATCH_STATUS_NOT_START = 152,
    MATCH_SIGUP_DUPLICATE = 153,
    MATCH_SIGUP_USERSOCORE_ERROR = 154,
    MATCH_SIGUP_USERSOCORE_LACK = 155,
    MATCH_SIGUP_EMPTY_SIT = 156,
    MATCH_SIGUP_CREATEMATCH_ERROR = 157,
    MATCH_NOT_SIGUP_ERROR = 158,
    MATCH_NOT_SIGUP_NOT_BENGIN = 159,
    MATCH_NOT_SIGUP_END_BENGIN = 160,
    MATCH_NOT_SIGUP_MAINTAIN = 161,
    MATCH_NO_PRIZEINFO = 162,
    MATCH_SIGUP_NOT_EXIST = 163,
    MATCH_BEGIN_DELY = 164,
    MATCH_SCORE_LIMIT = 165,
    GAME_SERVER_ENTERROOM_BOSSLIMIT = 166,
    MATCH_ALREADY_BEGIN = 167,
    SKILL_OBJECT_USE_ERROR = 168,
    SKILL_OBJECT_USE_ERROR_YUZHEN = 169,
    SKILL_OBJECT_USE_ERROR_NEXTYUZHEN = 170,
    SKILL_HAOJIAO_USE_ERROR = 171,
    SKILL_USE_ERROR_CANNON = 172,
    SKILL_USE_ERROR_VIP = 173,
    GAME_SERVER_LOGON_ERROR_ROOMCONF = 174,
    GAME_SERVER_LOGON_ERROR_HIGHUSER = 175,
    GAME_SERVER_LOGON_ERROR_VIP = 176,
    GAME_SERVER_LOGON_ERROR_CANNONLOW = 177,
    GAME_SERVER_LOGON_ERROR_CANNONUP = 178,
    GAME_SERVER_LOGON_ERROR_SCORELOW = 179,
    GAME_SERVER_LOGON_ERROR_SCOREUP = 180,
    NOT_UNLOCK_SECONDARY_CANNON_ERROR = 181,
    GAME_SERVER_ENERGY_NOT_EXCHANGE = 182,
    GAME_SERVER_ENERGY_NOT_ENABLE = 183,
    GAME_SERVER_USER_NOT_CHAT = 184,
    ENERGY_COUNT_OVERFLOW = 185
}

/** Properties of an ErrorMsg. */
export interface IErrorMsg {

    /** ErrorMsg errorcode */
    errorcode?: (ErrorCode|null);

    /** ErrorMsg msg */
    msg?: (string|null);

    /** ErrorMsg cmd */
    cmd?: (number|null);
}

/** Represents an ErrorMsg. */
export class ErrorMsg implements IErrorMsg {

    /**
     * Constructs a new ErrorMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IErrorMsg);

    /** ErrorMsg errorcode. */
    public errorcode: ErrorCode;

    /** ErrorMsg msg. */
    public msg: string;

    /** ErrorMsg cmd. */
    public cmd: number;

    /**
     * Creates a new ErrorMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ErrorMsg instance
     */
    public static create(properties?: IErrorMsg): ErrorMsg;

    /**
     * Encodes the specified ErrorMsg message. Does not implicitly {@link ErrorMsg.verify|verify} messages.
     * @param message ErrorMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IErrorMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ErrorMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ErrorMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ErrorMsg;
}

/** Properties of an ExchangeReq. */
export interface IExchangeReq {

    /** ExchangeReq itemId */
    itemId: number;

    /** ExchangeReq phone */
    phone?: (string|null);
}

/** Represents an ExchangeReq. */
export class ExchangeReq implements IExchangeReq {

    /**
     * Constructs a new ExchangeReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExchangeReq);

    /** ExchangeReq itemId. */
    public itemId: number;

    /** ExchangeReq phone. */
    public phone: string;

    /**
     * Creates a new ExchangeReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeReq instance
     */
    public static create(properties?: IExchangeReq): ExchangeReq;

    /**
     * Encodes the specified ExchangeReq message. Does not implicitly {@link ExchangeReq.verify|verify} messages.
     * @param message ExchangeReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExchangeReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExchangeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExchangeReq;
}

/** Properties of an ExchangeResp. */
export interface IExchangeResp {

    /** ExchangeResp itemId */
    itemId: number;

    /** ExchangeResp trUpdate */
    trUpdate: ITreasureUpdate;
}

/** Represents an ExchangeResp. */
export class ExchangeResp implements IExchangeResp {

    /**
     * Constructs a new ExchangeResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExchangeResp);

    /** ExchangeResp itemId. */
    public itemId: number;

    /** ExchangeResp trUpdate. */
    public trUpdate: ITreasureUpdate;

    /**
     * Creates a new ExchangeResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeResp instance
     */
    public static create(properties?: IExchangeResp): ExchangeResp;

    /**
     * Encodes the specified ExchangeResp message. Does not implicitly {@link ExchangeResp.verify|verify} messages.
     * @param message ExchangeResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExchangeResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExchangeResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExchangeResp;
}

/** Properties of an ExchangeRecordsResp. */
export interface IExchangeRecordsResp {

    /** ExchangeRecordsResp records */
    records?: (IexchangeRecord[]|null);
}

/** Represents an ExchangeRecordsResp. */
export class ExchangeRecordsResp implements IExchangeRecordsResp {

    /**
     * Constructs a new ExchangeRecordsResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExchangeRecordsResp);

    /** ExchangeRecordsResp records. */
    public records: Array<IexchangeRecord>;

    /**
     * Creates a new ExchangeRecordsResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeRecordsResp instance
     */
    public static create(properties?: IExchangeRecordsResp): ExchangeRecordsResp;

    /**
     * Encodes the specified ExchangeRecordsResp message. Does not implicitly {@link ExchangeRecordsResp.verify|verify} messages.
     * @param message ExchangeRecordsResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExchangeRecordsResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeRecordsResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExchangeRecordsResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExchangeRecordsResp;
}

/** Properties of an exchangeRecord. */
export interface IexchangeRecord {

    /** exchangeRecord consumableItem */
    consumableItem: IToolItem;

    /** exchangeRecord getItem */
    getItem: IToolItem;

    /** exchangeRecord createTime */
    createTime: (number|Long);

    /** exchangeRecord status */
    status: number;

    /** exchangeRecord phone */
    phone?: (string|null);
}

/** Represents an exchangeRecord. */
export class exchangeRecord implements IexchangeRecord {

    /**
     * Constructs a new exchangeRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: IexchangeRecord);

    /** exchangeRecord consumableItem. */
    public consumableItem: IToolItem;

    /** exchangeRecord getItem. */
    public getItem: IToolItem;

    /** exchangeRecord createTime. */
    public createTime: (number|Long);

    /** exchangeRecord status. */
    public status: number;

    /** exchangeRecord phone. */
    public phone: string;

    /**
     * Creates a new exchangeRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns exchangeRecord instance
     */
    public static create(properties?: IexchangeRecord): exchangeRecord;

    /**
     * Encodes the specified exchangeRecord message. Does not implicitly {@link exchangeRecord.verify|verify} messages.
     * @param message exchangeRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IexchangeRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an exchangeRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns exchangeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exchangeRecord;
}

/** Properties of a GameHeartResp. */
export interface IGameHeartResp {

    /** GameHeartResp now */
    now: (number|Long);

    /** GameHeartResp ext */
    ext?: (string|null);
}

/** Represents a GameHeartResp. */
export class GameHeartResp implements IGameHeartResp {

    /**
     * Constructs a new GameHeartResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameHeartResp);

    /** GameHeartResp now. */
    public now: (number|Long);

    /** GameHeartResp ext. */
    public ext: string;

    /**
     * Creates a new GameHeartResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameHeartResp instance
     */
    public static create(properties?: IGameHeartResp): GameHeartResp;

    /**
     * Encodes the specified GameHeartResp message. Does not implicitly {@link GameHeartResp.verify|verify} messages.
     * @param message GameHeartResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameHeartResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameHeartResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameHeartResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameHeartResp;
}

/** ResponseEnum enum. */
export enum ResponseEnum {
    SUCCESS = 1,
    FAILED = -1
}

/** Properties of a GameMatchRankAwardInfo. */
export interface IGameMatchRankAwardInfo {

    /** GameMatchRankAwardInfo minRank */
    minRank: number;

    /** GameMatchRankAwardInfo maxRanking */
    maxRanking: number;

    /** GameMatchRankAwardInfo awards */
    awards?: (IToolItem[]|null);
}

/** Represents a GameMatchRankAwardInfo. */
export class GameMatchRankAwardInfo implements IGameMatchRankAwardInfo {

    /**
     * Constructs a new GameMatchRankAwardInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameMatchRankAwardInfo);

    /** GameMatchRankAwardInfo minRank. */
    public minRank: number;

    /** GameMatchRankAwardInfo maxRanking. */
    public maxRanking: number;

    /** GameMatchRankAwardInfo awards. */
    public awards: Array<IToolItem>;

    /**
     * Creates a new GameMatchRankAwardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameMatchRankAwardInfo instance
     */
    public static create(properties?: IGameMatchRankAwardInfo): GameMatchRankAwardInfo;

    /**
     * Encodes the specified GameMatchRankAwardInfo message. Does not implicitly {@link GameMatchRankAwardInfo.verify|verify} messages.
     * @param message GameMatchRankAwardInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameMatchRankAwardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameMatchRankAwardInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameMatchRankAwardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMatchRankAwardInfo;
}

/** Properties of a PkMatchInfo. */
export interface IPkMatchInfo {

    /** PkMatchInfo manCount */
    manCount: number;

    /** PkMatchInfo signUpItem */
    signUpItem?: (IToolItem|null);

    /** PkMatchInfo freeCount */
    freeCount: number;

    /** PkMatchInfo startTime */
    startTime: number;

    /** PkMatchInfo endTime */
    endTime: number;

    /** PkMatchInfo gameMatchRankAwardInfos */
    gameMatchRankAwardInfos?: (IGameMatchRankAwardInfo[]|null);

    /** PkMatchInfo type */
    type: number;

    /** PkMatchInfo serverId */
    serverId?: (number|null);

    /** PkMatchInfo bulletCount */
    bulletCount?: (number|null);
}

/** Represents a PkMatchInfo. */
export class PkMatchInfo implements IPkMatchInfo {

    /**
     * Constructs a new PkMatchInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPkMatchInfo);

    /** PkMatchInfo manCount. */
    public manCount: number;

    /** PkMatchInfo signUpItem. */
    public signUpItem?: (IToolItem|null);

    /** PkMatchInfo freeCount. */
    public freeCount: number;

    /** PkMatchInfo startTime. */
    public startTime: number;

    /** PkMatchInfo endTime. */
    public endTime: number;

    /** PkMatchInfo gameMatchRankAwardInfos. */
    public gameMatchRankAwardInfos: Array<IGameMatchRankAwardInfo>;

    /** PkMatchInfo type. */
    public type: number;

    /** PkMatchInfo serverId. */
    public serverId: number;

    /** PkMatchInfo bulletCount. */
    public bulletCount: number;

    /**
     * Creates a new PkMatchInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PkMatchInfo instance
     */
    public static create(properties?: IPkMatchInfo): PkMatchInfo;

    /**
     * Encodes the specified PkMatchInfo message. Does not implicitly {@link PkMatchInfo.verify|verify} messages.
     * @param message PkMatchInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPkMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PkMatchInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PkMatchInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PkMatchInfo;
}

/** Properties of a MatchOperationReq. */
export interface IMatchOperationReq {

    /** MatchOperationReq type */
    type: number;
}

/** Represents a MatchOperationReq. */
export class MatchOperationReq implements IMatchOperationReq {

    /**
     * Constructs a new MatchOperationReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchOperationReq);

    /** MatchOperationReq type. */
    public type: number;

    /**
     * Creates a new MatchOperationReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchOperationReq instance
     */
    public static create(properties?: IMatchOperationReq): MatchOperationReq;

    /**
     * Encodes the specified MatchOperationReq message. Does not implicitly {@link MatchOperationReq.verify|verify} messages.
     * @param message MatchOperationReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchOperationReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchOperationReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchOperationReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchOperationReq;
}

/** Properties of a MatchOperationResp. */
export interface IMatchOperationResp {

    /** MatchOperationResp type */
    type: number;

    /** MatchOperationResp result */
    result: number;
}

/** Represents a MatchOperationResp. */
export class MatchOperationResp implements IMatchOperationResp {

    /**
     * Constructs a new MatchOperationResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchOperationResp);

    /** MatchOperationResp type. */
    public type: number;

    /** MatchOperationResp result. */
    public result: number;

    /**
     * Creates a new MatchOperationResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchOperationResp instance
     */
    public static create(properties?: IMatchOperationResp): MatchOperationResp;

    /**
     * Encodes the specified MatchOperationResp message. Does not implicitly {@link MatchOperationResp.verify|verify} messages.
     * @param message MatchOperationResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchOperationResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchOperationResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchOperationResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchOperationResp;
}

/** Properties of a PkMatchCountResp. */
export interface IPkMatchCountResp {

    /** PkMatchCountResp count */
    count: number;
}

/** Represents a PkMatchCountResp. */
export class PkMatchCountResp implements IPkMatchCountResp {

    /**
     * Constructs a new PkMatchCountResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPkMatchCountResp);

    /** PkMatchCountResp count. */
    public count: number;

    /**
     * Creates a new PkMatchCountResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PkMatchCountResp instance
     */
    public static create(properties?: IPkMatchCountResp): PkMatchCountResp;

    /**
     * Encodes the specified PkMatchCountResp message. Does not implicitly {@link PkMatchCountResp.verify|verify} messages.
     * @param message PkMatchCountResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPkMatchCountResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PkMatchCountResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PkMatchCountResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PkMatchCountResp;
}

/** Properties of a MatchBeginResp. */
export interface IMatchBeginResp {

    /** MatchBeginResp serverId */
    serverId: number;
}

/** Represents a MatchBeginResp. */
export class MatchBeginResp implements IMatchBeginResp {

    /**
     * Constructs a new MatchBeginResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchBeginResp);

    /** MatchBeginResp serverId. */
    public serverId: number;

    /**
     * Creates a new MatchBeginResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchBeginResp instance
     */
    public static create(properties?: IMatchBeginResp): MatchBeginResp;

    /**
     * Encodes the specified MatchBeginResp message. Does not implicitly {@link MatchBeginResp.verify|verify} messages.
     * @param message MatchBeginResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchBeginResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchBeginResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchBeginResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchBeginResp;
}

/** Properties of a PKMatchIntegralRankItem. */
export interface IPKMatchIntegralRankItem {

    /** PKMatchIntegralRankItem uid */
    uid: number;

    /** PKMatchIntegralRankItem rank */
    rank: number;

    /** PKMatchIntegralRankItem integral */
    integral: (number|Long);

    /** PKMatchIntegralRankItem bulletCount */
    bulletCount: number;

    /** PKMatchIntegralRankItem nickName */
    nickName?: (string|null);
}

/** Represents a PKMatchIntegralRankItem. */
export class PKMatchIntegralRankItem implements IPKMatchIntegralRankItem {

    /**
     * Constructs a new PKMatchIntegralRankItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPKMatchIntegralRankItem);

    /** PKMatchIntegralRankItem uid. */
    public uid: number;

    /** PKMatchIntegralRankItem rank. */
    public rank: number;

    /** PKMatchIntegralRankItem integral. */
    public integral: (number|Long);

    /** PKMatchIntegralRankItem bulletCount. */
    public bulletCount: number;

    /** PKMatchIntegralRankItem nickName. */
    public nickName: string;

    /**
     * Creates a new PKMatchIntegralRankItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PKMatchIntegralRankItem instance
     */
    public static create(properties?: IPKMatchIntegralRankItem): PKMatchIntegralRankItem;

    /**
     * Encodes the specified PKMatchIntegralRankItem message. Does not implicitly {@link PKMatchIntegralRankItem.verify|verify} messages.
     * @param message PKMatchIntegralRankItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPKMatchIntegralRankItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PKMatchIntegralRankItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PKMatchIntegralRankItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PKMatchIntegralRankItem;
}

/** Properties of a PKMatchIntegralRankResp. */
export interface IPKMatchIntegralRankResp {

    /** PKMatchIntegralRankResp pKMatchIntegralRankItems */
    pKMatchIntegralRankItems?: (IPKMatchIntegralRankItem[]|null);
}

/** Represents a PKMatchIntegralRankResp. */
export class PKMatchIntegralRankResp implements IPKMatchIntegralRankResp {

    /**
     * Constructs a new PKMatchIntegralRankResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPKMatchIntegralRankResp);

    /** PKMatchIntegralRankResp pKMatchIntegralRankItems. */
    public pKMatchIntegralRankItems: Array<IPKMatchIntegralRankItem>;

    /**
     * Creates a new PKMatchIntegralRankResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PKMatchIntegralRankResp instance
     */
    public static create(properties?: IPKMatchIntegralRankResp): PKMatchIntegralRankResp;

    /**
     * Encodes the specified PKMatchIntegralRankResp message. Does not implicitly {@link PKMatchIntegralRankResp.verify|verify} messages.
     * @param message PKMatchIntegralRankResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPKMatchIntegralRankResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PKMatchIntegralRankResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PKMatchIntegralRankResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PKMatchIntegralRankResp;
}

/** Properties of a MatchResultResp. */
export interface IMatchResultResp {

    /** MatchResultResp pKMatchIntegralRankItems */
    pKMatchIntegralRankItems?: (IPKMatchIntegralRankItem[]|null);
}

/** Represents a MatchResultResp. */
export class MatchResultResp implements IMatchResultResp {

    /**
     * Constructs a new MatchResultResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchResultResp);

    /** MatchResultResp pKMatchIntegralRankItems. */
    public pKMatchIntegralRankItems: Array<IPKMatchIntegralRankItem>;

    /**
     * Creates a new MatchResultResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchResultResp instance
     */
    public static create(properties?: IMatchResultResp): MatchResultResp;

    /**
     * Encodes the specified MatchResultResp message. Does not implicitly {@link MatchResultResp.verify|verify} messages.
     * @param message MatchResultResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchResultResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchResultResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchResultResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchResultResp;
}

/** Properties of a MatchRoomInfoResp. */
export interface IMatchRoomInfoResp {

    /** MatchRoomInfoResp endTime */
    endTime: (number|Long);

    /** MatchRoomInfoResp matchId */
    matchId: number;
}

/** Represents a MatchRoomInfoResp. */
export class MatchRoomInfoResp implements IMatchRoomInfoResp {

    /**
     * Constructs a new MatchRoomInfoResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchRoomInfoResp);

    /** MatchRoomInfoResp endTime. */
    public endTime: (number|Long);

    /** MatchRoomInfoResp matchId. */
    public matchId: number;

    /**
     * Creates a new MatchRoomInfoResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchRoomInfoResp instance
     */
    public static create(properties?: IMatchRoomInfoResp): MatchRoomInfoResp;

    /**
     * Encodes the specified MatchRoomInfoResp message. Does not implicitly {@link MatchRoomInfoResp.verify|verify} messages.
     * @param message MatchRoomInfoResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchRoomInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchRoomInfoResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchRoomInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchRoomInfoResp;
}

/** Properties of a TakeMatchAwardReq. */
export interface ITakeMatchAwardReq {

    /** TakeMatchAwardReq matchId */
    matchId: number;
}

/** Represents a TakeMatchAwardReq. */
export class TakeMatchAwardReq implements ITakeMatchAwardReq {

    /**
     * Constructs a new TakeMatchAwardReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITakeMatchAwardReq);

    /** TakeMatchAwardReq matchId. */
    public matchId: number;

    /**
     * Creates a new TakeMatchAwardReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TakeMatchAwardReq instance
     */
    public static create(properties?: ITakeMatchAwardReq): TakeMatchAwardReq;

    /**
     * Encodes the specified TakeMatchAwardReq message. Does not implicitly {@link TakeMatchAwardReq.verify|verify} messages.
     * @param message TakeMatchAwardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITakeMatchAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TakeMatchAwardReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TakeMatchAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TakeMatchAwardReq;
}

/** Properties of a TakeMatchAwardResp. */
export interface ITakeMatchAwardResp {

    /** TakeMatchAwardResp matchId */
    matchId: number;

    /** TakeMatchAwardResp tr */
    tr: ITreasureUpdate;
}

/** Represents a TakeMatchAwardResp. */
export class TakeMatchAwardResp implements ITakeMatchAwardResp {

    /**
     * Constructs a new TakeMatchAwardResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITakeMatchAwardResp);

    /** TakeMatchAwardResp matchId. */
    public matchId: number;

    /** TakeMatchAwardResp tr. */
    public tr: ITreasureUpdate;

    /**
     * Creates a new TakeMatchAwardResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TakeMatchAwardResp instance
     */
    public static create(properties?: ITakeMatchAwardResp): TakeMatchAwardResp;

    /**
     * Encodes the specified TakeMatchAwardResp message. Does not implicitly {@link TakeMatchAwardResp.verify|verify} messages.
     * @param message TakeMatchAwardResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITakeMatchAwardResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TakeMatchAwardResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TakeMatchAwardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TakeMatchAwardResp;
}

/** Properties of a GameServerBombConfigResp. */
export interface IGameServerBombConfigResp {

    /** GameServerBombConfigResp items */
    items?: (IGameServerBombConfigItem[]|null);
}

/** Represents a GameServerBombConfigResp. */
export class GameServerBombConfigResp implements IGameServerBombConfigResp {

    /**
     * Constructs a new GameServerBombConfigResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerBombConfigResp);

    /** GameServerBombConfigResp items. */
    public items: Array<IGameServerBombConfigItem>;

    /**
     * Creates a new GameServerBombConfigResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerBombConfigResp instance
     */
    public static create(properties?: IGameServerBombConfigResp): GameServerBombConfigResp;

    /**
     * Encodes the specified GameServerBombConfigResp message. Does not implicitly {@link GameServerBombConfigResp.verify|verify} messages.
     * @param message GameServerBombConfigResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerBombConfigResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerBombConfigResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerBombConfigResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerBombConfigResp;
}

/** Properties of a GameServerBombConfigItem. */
export interface IGameServerBombConfigItem {

    /** GameServerBombConfigItem id */
    id: number;

    /** GameServerBombConfigItem name */
    name: string;

    /** GameServerBombConfigItem minCannonWhenDrop */
    minCannonWhenDrop: number;

    /** GameServerBombConfigItem minVipWhenDrop */
    minVipWhenDrop: number;

    /** GameServerBombConfigItem fishTypes */
    fishTypes?: (number[]|null);
}

/** Represents a GameServerBombConfigItem. */
export class GameServerBombConfigItem implements IGameServerBombConfigItem {

    /**
     * Constructs a new GameServerBombConfigItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerBombConfigItem);

    /** GameServerBombConfigItem id. */
    public id: number;

    /** GameServerBombConfigItem name. */
    public name: string;

    /** GameServerBombConfigItem minCannonWhenDrop. */
    public minCannonWhenDrop: number;

    /** GameServerBombConfigItem minVipWhenDrop. */
    public minVipWhenDrop: number;

    /** GameServerBombConfigItem fishTypes. */
    public fishTypes: Array<number>;

    /**
     * Creates a new GameServerBombConfigItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerBombConfigItem instance
     */
    public static create(properties?: IGameServerBombConfigItem): GameServerBombConfigItem;

    /**
     * Encodes the specified GameServerBombConfigItem message. Does not implicitly {@link GameServerBombConfigItem.verify|verify} messages.
     * @param message GameServerBombConfigItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerBombConfigItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerBombConfigItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerBombConfigItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerBombConfigItem;
}

/** Properties of a DrawConfig. */
export interface IDrawConfig {

    /** DrawConfig items */
    items?: (IDrawConfigItem[]|null);
}

/** Represents a DrawConfig. */
export class DrawConfig implements IDrawConfig {

    /**
     * Constructs a new DrawConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDrawConfig);

    /** DrawConfig items. */
    public items: Array<IDrawConfigItem>;

    /**
     * Creates a new DrawConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DrawConfig instance
     */
    public static create(properties?: IDrawConfig): DrawConfig;

    /**
     * Encodes the specified DrawConfig message. Does not implicitly {@link DrawConfig.verify|verify} messages.
     * @param message DrawConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDrawConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DrawConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DrawConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DrawConfig;
}

/** Properties of a DrawConfigItem. */
export interface IDrawConfigItem {

    /** DrawConfigItem stage */
    stage: number;

    /** DrawConfigItem awards */
    awards: string;

    /** DrawConfigItem valueCost */
    valueCost: number;
}

/** Represents a DrawConfigItem. */
export class DrawConfigItem implements IDrawConfigItem {

    /**
     * Constructs a new DrawConfigItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDrawConfigItem);

    /** DrawConfigItem stage. */
    public stage: number;

    /** DrawConfigItem awards. */
    public awards: string;

    /** DrawConfigItem valueCost. */
    public valueCost: number;

    /**
     * Creates a new DrawConfigItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DrawConfigItem instance
     */
    public static create(properties?: IDrawConfigItem): DrawConfigItem;

    /**
     * Encodes the specified DrawConfigItem message. Does not implicitly {@link DrawConfigItem.verify|verify} messages.
     * @param message DrawConfigItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDrawConfigItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DrawConfigItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DrawConfigItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DrawConfigItem;
}

/** Properties of a DrawUserInfo. */
export interface IDrawUserInfo {

    /** DrawUserInfo value */
    value: (number|Long);

    /** DrawUserInfo killBonusFish */
    killBonusFish: number;

    /** DrawUserInfo fishCount */
    fishCount: number;
}

/** Represents a DrawUserInfo. */
export class DrawUserInfo implements IDrawUserInfo {

    /**
     * Constructs a new DrawUserInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDrawUserInfo);

    /** DrawUserInfo value. */
    public value: (number|Long);

    /** DrawUserInfo killBonusFish. */
    public killBonusFish: number;

    /** DrawUserInfo fishCount. */
    public fishCount: number;

    /**
     * Creates a new DrawUserInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DrawUserInfo instance
     */
    public static create(properties?: IDrawUserInfo): DrawUserInfo;

    /**
     * Encodes the specified DrawUserInfo message. Does not implicitly {@link DrawUserInfo.verify|verify} messages.
     * @param message DrawUserInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDrawUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DrawUserInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DrawUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DrawUserInfo;
}

/** Properties of a DrawRaffleReq. */
export interface IDrawRaffleReq {

    /** DrawRaffleReq stage */
    stage: number;
}

/** Represents a DrawRaffleReq. */
export class DrawRaffleReq implements IDrawRaffleReq {

    /**
     * Constructs a new DrawRaffleReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDrawRaffleReq);

    /** DrawRaffleReq stage. */
    public stage: number;

    /**
     * Creates a new DrawRaffleReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DrawRaffleReq instance
     */
    public static create(properties?: IDrawRaffleReq): DrawRaffleReq;

    /**
     * Encodes the specified DrawRaffleReq message. Does not implicitly {@link DrawRaffleReq.verify|verify} messages.
     * @param message DrawRaffleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDrawRaffleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DrawRaffleReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DrawRaffleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DrawRaffleReq;
}

/** Properties of a DrawRaffleResp. */
export interface IDrawRaffleResp {

    /** DrawRaffleResp idx */
    idx: number;

    /** DrawRaffleResp winId */
    winId: number;

    /** DrawRaffleResp winCount */
    winCount: number;

    /** DrawRaffleResp score */
    score: (number|Long);

    /** DrawRaffleResp treasureUpdate */
    treasureUpdate?: (ITreasureUpdate|null);

    /** DrawRaffleResp info */
    info?: (IDrawUserInfo|null);
}

/** Represents a DrawRaffleResp. */
export class DrawRaffleResp implements IDrawRaffleResp {

    /**
     * Constructs a new DrawRaffleResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDrawRaffleResp);

    /** DrawRaffleResp idx. */
    public idx: number;

    /** DrawRaffleResp winId. */
    public winId: number;

    /** DrawRaffleResp winCount. */
    public winCount: number;

    /** DrawRaffleResp score. */
    public score: (number|Long);

    /** DrawRaffleResp treasureUpdate. */
    public treasureUpdate?: (ITreasureUpdate|null);

    /** DrawRaffleResp info. */
    public info?: (IDrawUserInfo|null);

    /**
     * Creates a new DrawRaffleResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DrawRaffleResp instance
     */
    public static create(properties?: IDrawRaffleResp): DrawRaffleResp;

    /**
     * Encodes the specified DrawRaffleResp message. Does not implicitly {@link DrawRaffleResp.verify|verify} messages.
     * @param message DrawRaffleResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDrawRaffleResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DrawRaffleResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DrawRaffleResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DrawRaffleResp;
}

/** Properties of a DrawToggleBtnMsg. */
export interface IDrawToggleBtnMsg {

    /** DrawToggleBtnMsg on */
    on: boolean;

    /** DrawToggleBtnMsg offAfterClick */
    offAfterClick: boolean;

    /** DrawToggleBtnMsg stages */
    stages: string;
}

/** Represents a DrawToggleBtnMsg. */
export class DrawToggleBtnMsg implements IDrawToggleBtnMsg {

    /**
     * Constructs a new DrawToggleBtnMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDrawToggleBtnMsg);

    /** DrawToggleBtnMsg on. */
    public on: boolean;

    /** DrawToggleBtnMsg offAfterClick. */
    public offAfterClick: boolean;

    /** DrawToggleBtnMsg stages. */
    public stages: string;

    /**
     * Creates a new DrawToggleBtnMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DrawToggleBtnMsg instance
     */
    public static create(properties?: IDrawToggleBtnMsg): DrawToggleBtnMsg;

    /**
     * Encodes the specified DrawToggleBtnMsg message. Does not implicitly {@link DrawToggleBtnMsg.verify|verify} messages.
     * @param message DrawToggleBtnMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDrawToggleBtnMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DrawToggleBtnMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DrawToggleBtnMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DrawToggleBtnMsg;
}

/** Properties of a DrawRafflingMsg. */
export interface IDrawRafflingMsg {

    /** DrawRafflingMsg disappearDelay */
    disappearDelay: number;

    /** DrawRafflingMsg chairId */
    chairId: number;

    /** DrawRafflingMsg idx */
    idx: number;

    /** DrawRafflingMsg winId */
    winId: number;

    /** DrawRafflingMsg winNum */
    winNum?: (number|Long|null);

    /** DrawRafflingMsg tr */
    tr?: (ITreasureUpdate|null);
}

/** Represents a DrawRafflingMsg. */
export class DrawRafflingMsg implements IDrawRafflingMsg {

    /**
     * Constructs a new DrawRafflingMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDrawRafflingMsg);

    /** DrawRafflingMsg disappearDelay. */
    public disappearDelay: number;

    /** DrawRafflingMsg chairId. */
    public chairId: number;

    /** DrawRafflingMsg idx. */
    public idx: number;

    /** DrawRafflingMsg winId. */
    public winId: number;

    /** DrawRafflingMsg winNum. */
    public winNum: (number|Long);

    /** DrawRafflingMsg tr. */
    public tr?: (ITreasureUpdate|null);

    /**
     * Creates a new DrawRafflingMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DrawRafflingMsg instance
     */
    public static create(properties?: IDrawRafflingMsg): DrawRafflingMsg;

    /**
     * Encodes the specified DrawRafflingMsg message. Does not implicitly {@link DrawRafflingMsg.verify|verify} messages.
     * @param message DrawRafflingMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDrawRafflingMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DrawRafflingMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DrawRafflingMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DrawRafflingMsg;
}

/** Properties of a DrawRaffleActionReq. */
export interface IDrawRaffleActionReq {

    /** DrawRaffleActionReq chairId */
    chairId: number;

    /** DrawRaffleActionReq action */
    action: number;
}

/** Represents a DrawRaffleActionReq. */
export class DrawRaffleActionReq implements IDrawRaffleActionReq {

    /**
     * Constructs a new DrawRaffleActionReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDrawRaffleActionReq);

    /** DrawRaffleActionReq chairId. */
    public chairId: number;

    /** DrawRaffleActionReq action. */
    public action: number;

    /**
     * Creates a new DrawRaffleActionReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DrawRaffleActionReq instance
     */
    public static create(properties?: IDrawRaffleActionReq): DrawRaffleActionReq;

    /**
     * Encodes the specified DrawRaffleActionReq message. Does not implicitly {@link DrawRaffleActionReq.verify|verify} messages.
     * @param message DrawRaffleActionReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDrawRaffleActionReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DrawRaffleActionReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DrawRaffleActionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DrawRaffleActionReq;
}

/** Properties of a GameServerEnterRoomReq. */
export interface IGameServerEnterRoomReq {

    /** GameServerEnterRoomReq tableId */
    tableId?: (number|null);

    /** GameServerEnterRoomReq quickSit */
    quickSit?: (boolean|null);

    /** GameServerEnterRoomReq uniqueMsgID */
    uniqueMsgID?: (number|null);
}

/** Represents a GameServerEnterRoomReq. */
export class GameServerEnterRoomReq implements IGameServerEnterRoomReq {

    /**
     * Constructs a new GameServerEnterRoomReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerEnterRoomReq);

    /** GameServerEnterRoomReq tableId. */
    public tableId: number;

    /** GameServerEnterRoomReq quickSit. */
    public quickSit: boolean;

    /** GameServerEnterRoomReq uniqueMsgID. */
    public uniqueMsgID: number;

    /**
     * Creates a new GameServerEnterRoomReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerEnterRoomReq instance
     */
    public static create(properties?: IGameServerEnterRoomReq): GameServerEnterRoomReq;

    /**
     * Encodes the specified GameServerEnterRoomReq message. Does not implicitly {@link GameServerEnterRoomReq.verify|verify} messages.
     * @param message GameServerEnterRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerEnterRoomReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerEnterRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerEnterRoomReq;
}

/** Properties of a GameServerEnterRoomResp. */
export interface IGameServerEnterRoomResp {

    /** GameServerEnterRoomResp tableId */
    tableId?: (number|null);

    /** GameServerEnterRoomResp chairId */
    chairId?: (number|null);

    /** GameServerEnterRoomResp userInfo */
    userInfo?: (IUser|null);

    /** GameServerEnterRoomResp minCanoon */
    minCanoon?: (number|null);

    /** GameServerEnterRoomResp maxCanoon */
    maxCanoon?: (number|null);

    /** GameServerEnterRoomResp nowCannoon */
    nowCannoon?: (number|null);

    /** GameServerEnterRoomResp isEnergyCannon */
    isEnergyCannon?: (boolean|null);

    /** GameServerEnterRoomResp isandroid */
    isandroid?: (boolean|null);

    /** GameServerEnterRoomResp cannonSkin */
    cannonSkin?: (string|null);

    /** GameServerEnterRoomResp gameServerEnterRoomExt */
    gameServerEnterRoomExt?: (IGameServerEnterRoomExt|null);

    /** GameServerEnterRoomResp diamond */
    diamond?: (number|null);

    /** GameServerEnterRoomResp roomTypeId */
    roomTypeId?: (number|null);

    /** GameServerEnterRoomResp uniqueMsgID */
    uniqueMsgID?: (number|null);

    /** GameServerEnterRoomResp isSuc */
    isSuc?: (boolean|null);

    /** GameServerEnterRoomResp magicStone */
    magicStone?: (number|null);

    /** GameServerEnterRoomResp nowSecondaryCannon */
    nowSecondaryCannon?: (number|null);

    /** GameServerEnterRoomResp secondaryCannonSkin */
    secondaryCannonSkin?: (string|null);

    /** GameServerEnterRoomResp tiyanMaxBullet */
    tiyanMaxBullet?: (number|Long|null);

    /** GameServerEnterRoomResp tiyanLeftBullet */
    tiyanLeftBullet?: (number|Long|null);
}

/** Represents a GameServerEnterRoomResp. */
export class GameServerEnterRoomResp implements IGameServerEnterRoomResp {

    /**
     * Constructs a new GameServerEnterRoomResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerEnterRoomResp);

    /** GameServerEnterRoomResp tableId. */
    public tableId: number;

    /** GameServerEnterRoomResp chairId. */
    public chairId: number;

    /** GameServerEnterRoomResp userInfo. */
    public userInfo?: (IUser|null);

    /** GameServerEnterRoomResp minCanoon. */
    public minCanoon: number;

    /** GameServerEnterRoomResp maxCanoon. */
    public maxCanoon: number;

    /** GameServerEnterRoomResp nowCannoon. */
    public nowCannoon: number;

    /** GameServerEnterRoomResp isEnergyCannon. */
    public isEnergyCannon: boolean;

    /** GameServerEnterRoomResp isandroid. */
    public isandroid: boolean;

    /** GameServerEnterRoomResp cannonSkin. */
    public cannonSkin: string;

    /** GameServerEnterRoomResp gameServerEnterRoomExt. */
    public gameServerEnterRoomExt?: (IGameServerEnterRoomExt|null);

    /** GameServerEnterRoomResp diamond. */
    public diamond: number;

    /** GameServerEnterRoomResp roomTypeId. */
    public roomTypeId: number;

    /** GameServerEnterRoomResp uniqueMsgID. */
    public uniqueMsgID: number;

    /** GameServerEnterRoomResp isSuc. */
    public isSuc: boolean;

    /** GameServerEnterRoomResp magicStone. */
    public magicStone: number;

    /** GameServerEnterRoomResp nowSecondaryCannon. */
    public nowSecondaryCannon: number;

    /** GameServerEnterRoomResp secondaryCannonSkin. */
    public secondaryCannonSkin: string;

    /** GameServerEnterRoomResp tiyanMaxBullet. */
    public tiyanMaxBullet: (number|Long);

    /** GameServerEnterRoomResp tiyanLeftBullet. */
    public tiyanLeftBullet: (number|Long);

    /**
     * Creates a new GameServerEnterRoomResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerEnterRoomResp instance
     */
    public static create(properties?: IGameServerEnterRoomResp): GameServerEnterRoomResp;

    /**
     * Encodes the specified GameServerEnterRoomResp message. Does not implicitly {@link GameServerEnterRoomResp.verify|verify} messages.
     * @param message GameServerEnterRoomResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerEnterRoomResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerEnterRoomResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerEnterRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerEnterRoomResp;
}

/** Properties of a GameServerEnterRoomExt. */
export interface IGameServerEnterRoomExt {

    /** GameServerEnterRoomExt bulletCount */
    bulletCount?: (number|null);

    /** GameServerEnterRoomExt integral */
    integral?: (number|Long|null);
}

/** Represents a GameServerEnterRoomExt. */
export class GameServerEnterRoomExt implements IGameServerEnterRoomExt {

    /**
     * Constructs a new GameServerEnterRoomExt.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerEnterRoomExt);

    /** GameServerEnterRoomExt bulletCount. */
    public bulletCount: number;

    /** GameServerEnterRoomExt integral. */
    public integral: (number|Long);

    /**
     * Creates a new GameServerEnterRoomExt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerEnterRoomExt instance
     */
    public static create(properties?: IGameServerEnterRoomExt): GameServerEnterRoomExt;

    /**
     * Encodes the specified GameServerEnterRoomExt message. Does not implicitly {@link GameServerEnterRoomExt.verify|verify} messages.
     * @param message GameServerEnterRoomExt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerEnterRoomExt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerEnterRoomExt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerEnterRoomExt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerEnterRoomExt;
}

/** Properties of a LevelMsg. */
export interface ILevelMsg {

    /** LevelMsg level */
    level: number;

    /** LevelMsg exp */
    exp: (number|Long);

    /** LevelMsg nextLevelExp */
    nextLevelExp: (number|Long);

    /** LevelMsg title */
    title: string;
}

/** Represents a LevelMsg. */
export class LevelMsg implements ILevelMsg {

    /**
     * Constructs a new LevelMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILevelMsg);

    /** LevelMsg level. */
    public level: number;

    /** LevelMsg exp. */
    public exp: (number|Long);

    /** LevelMsg nextLevelExp. */
    public nextLevelExp: (number|Long);

    /** LevelMsg title. */
    public title: string;

    /**
     * Creates a new LevelMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LevelMsg instance
     */
    public static create(properties?: ILevelMsg): LevelMsg;

    /**
     * Encodes the specified LevelMsg message. Does not implicitly {@link LevelMsg.verify|verify} messages.
     * @param message LevelMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILevelMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LevelMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LevelMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LevelMsg;
}

/** Properties of a User. */
export interface IUser {

    /** User faceId */
    faceId: number;

    /** User userId */
    userId: number;

    /** User userScore */
    userScore: (number|Long);

    /** User nickName */
    nickName: string;

    /** User vipLevel */
    vipLevel: number;

    /** User level */
    level: ILevelMsg;

    /** User topScore */
    topScore?: (number|Long|null);

    /** User faceIcon */
    faceIcon?: (string|null);
}

/** Represents a User. */
export class User implements IUser {

    /**
     * Constructs a new User.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUser);

    /** User faceId. */
    public faceId: number;

    /** User userId. */
    public userId: number;

    /** User userScore. */
    public userScore: (number|Long);

    /** User nickName. */
    public nickName: string;

    /** User vipLevel. */
    public vipLevel: number;

    /** User level. */
    public level: ILevelMsg;

    /** User topScore. */
    public topScore: (number|Long);

    /** User faceIcon. */
    public faceIcon: string;

    /**
     * Creates a new User instance using the specified properties.
     * @param [properties] Properties to set
     * @returns User instance
     */
    public static create(properties?: IUser): User;

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a User message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): User;
}

/** Properties of a CannonInfo. */
export interface ICannonInfo {

    /** CannonInfo unlockedCannon */
    unlockedCannon: number;

    /** CannonInfo curSkin */
    curSkin: string;

    /** CannonInfo cannonSkinList */
    cannonSkinList: string;
}

/** Represents a CannonInfo. */
export class CannonInfo implements ICannonInfo {

    /**
     * Constructs a new CannonInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICannonInfo);

    /** CannonInfo unlockedCannon. */
    public unlockedCannon: number;

    /** CannonInfo curSkin. */
    public curSkin: string;

    /** CannonInfo cannonSkinList. */
    public cannonSkinList: string;

    /**
     * Creates a new CannonInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CannonInfo instance
     */
    public static create(properties?: ICannonInfo): CannonInfo;

    /**
     * Encodes the specified CannonInfo message. Does not implicitly {@link CannonInfo.verify|verify} messages.
     * @param message CannonInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICannonInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CannonInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CannonInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CannonInfo;
}

/** Properties of a SecondaryCannonInfo. */
export interface ISecondaryCannonInfo {

    /** SecondaryCannonInfo unlockedSecondaryCannon */
    unlockedSecondaryCannon: number;

    /** SecondaryCannonInfo curSecondarySkin */
    curSecondarySkin: string;
}

/** Represents a SecondaryCannonInfo. */
export class SecondaryCannonInfo implements ISecondaryCannonInfo {

    /**
     * Constructs a new SecondaryCannonInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISecondaryCannonInfo);

    /** SecondaryCannonInfo unlockedSecondaryCannon. */
    public unlockedSecondaryCannon: number;

    /** SecondaryCannonInfo curSecondarySkin. */
    public curSecondarySkin: string;

    /**
     * Creates a new SecondaryCannonInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SecondaryCannonInfo instance
     */
    public static create(properties?: ISecondaryCannonInfo): SecondaryCannonInfo;

    /**
     * Encodes the specified SecondaryCannonInfo message. Does not implicitly {@link SecondaryCannonInfo.verify|verify} messages.
     * @param message SecondaryCannonInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISecondaryCannonInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SecondaryCannonInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SecondaryCannonInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecondaryCannonInfo;
}

/** Properties of a FishFireReq. */
export interface IFishFireReq {

    /** FishFireReq bulletx */
    bulletx: number;

    /** FishFireReq bullety */
    bullety: number;

    /** FishFireReq bulletangle */
    bulletangle: number;

    /** FishFireReq bulletId */
    bulletId: (number|Long);

    /** FishFireReq mainId */
    mainId: number;

    /** FishFireReq subId */
    subId: number;

    /** FishFireReq multiple */
    multiple: number;

    /** FishFireReq bulletType */
    bulletType?: (number|null);
}

/** Represents a FishFireReq. */
export class FishFireReq implements IFishFireReq {

    /**
     * Constructs a new FishFireReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFishFireReq);

    /** FishFireReq bulletx. */
    public bulletx: number;

    /** FishFireReq bullety. */
    public bullety: number;

    /** FishFireReq bulletangle. */
    public bulletangle: number;

    /** FishFireReq bulletId. */
    public bulletId: (number|Long);

    /** FishFireReq mainId. */
    public mainId: number;

    /** FishFireReq subId. */
    public subId: number;

    /** FishFireReq multiple. */
    public multiple: number;

    /** FishFireReq bulletType. */
    public bulletType: number;

    /**
     * Creates a new FishFireReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FishFireReq instance
     */
    public static create(properties?: IFishFireReq): FishFireReq;

    /**
     * Encodes the specified FishFireReq message. Does not implicitly {@link FishFireReq.verify|verify} messages.
     * @param message FishFireReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFishFireReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FishFireReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FishFireReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FishFireReq;
}

/** Properties of a GameServerGetUserFishScoreResp. */
export interface IGameServerGetUserFishScoreResp {

    /** GameServerGetUserFishScoreResp userid */
    userid: number;

    /** GameServerGetUserFishScoreResp fishscore */
    fishscore: (number|Long);
}

/** Represents a GameServerGetUserFishScoreResp. */
export class GameServerGetUserFishScoreResp implements IGameServerGetUserFishScoreResp {

    /**
     * Constructs a new GameServerGetUserFishScoreResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerGetUserFishScoreResp);

    /** GameServerGetUserFishScoreResp userid. */
    public userid: number;

    /** GameServerGetUserFishScoreResp fishscore. */
    public fishscore: (number|Long);

    /**
     * Creates a new GameServerGetUserFishScoreResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerGetUserFishScoreResp instance
     */
    public static create(properties?: IGameServerGetUserFishScoreResp): GameServerGetUserFishScoreResp;

    /**
     * Encodes the specified GameServerGetUserFishScoreResp message. Does not implicitly {@link GameServerGetUserFishScoreResp.verify|verify} messages.
     * @param message GameServerGetUserFishScoreResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerGetUserFishScoreResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerGetUserFishScoreResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerGetUserFishScoreResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerGetUserFishScoreResp;
}

/** Properties of a FishFireResp. */
export interface IFishFireResp {

    /** FishFireResp bulletx */
    bulletx: number;

    /** FishFireResp bullety */
    bullety: number;

    /** FishFireResp bulletangle */
    bulletangle: number;

    /** FishFireResp bulletId */
    bulletId: (number|Long);

    /** FishFireResp charid */
    charid: number;

    /** FishFireResp fishscore */
    fishscore: (number|Long);

    /** FishFireResp mainId */
    mainId: number;

    /** FishFireResp subId */
    subId: number;

    /** FishFireResp bulletCount */
    bulletCount?: (number|null);

    /** FishFireResp multiple */
    multiple: number;

    /** FishFireResp magicStone */
    magicStone?: (number|null);

    /** FishFireResp bulletType */
    bulletType?: (number|null);

    /** FishFireResp shootTime */
    shootTime?: (number|Long|null);

    /** FishFireResp flyMinTime */
    flyMinTime?: (number|null);

    /** FishFireResp flyMaxTime */
    flyMaxTime?: (number|null);

    /** FishFireResp tiyanLeftBullet */
    tiyanLeftBullet?: (number|Long|null);
}

/** 发送子弹是否成功 */
export class FishFireResp implements IFishFireResp {

    /**
     * Constructs a new FishFireResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFishFireResp);

    /** FishFireResp bulletx. */
    public bulletx: number;

    /** FishFireResp bullety. */
    public bullety: number;

    /** FishFireResp bulletangle. */
    public bulletangle: number;

    /** FishFireResp bulletId. */
    public bulletId: (number|Long);

    /** FishFireResp charid. */
    public charid: number;

    /** FishFireResp fishscore. */
    public fishscore: (number|Long);

    /** FishFireResp mainId. */
    public mainId: number;

    /** FishFireResp subId. */
    public subId: number;

    /** FishFireResp bulletCount. */
    public bulletCount: number;

    /** FishFireResp multiple. */
    public multiple: number;

    /** FishFireResp magicStone. */
    public magicStone: number;

    /** FishFireResp bulletType. */
    public bulletType: number;

    /** FishFireResp shootTime. */
    public shootTime: (number|Long);

    /** FishFireResp flyMinTime. */
    public flyMinTime: number;

    /** FishFireResp flyMaxTime. */
    public flyMaxTime: number;

    /** FishFireResp tiyanLeftBullet. */
    public tiyanLeftBullet: (number|Long);

    /**
     * Creates a new FishFireResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FishFireResp instance
     */
    public static create(properties?: IFishFireResp): FishFireResp;

    /**
     * Encodes the specified FishFireResp message. Does not implicitly {@link FishFireResp.verify|verify} messages.
     * @param message FishFireResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFishFireResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FishFireResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FishFireResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FishFireResp;
}

/** Properties of a FishStateItem. */
export interface IFishStateItem {

    /** FishStateItem catchFishItem */
    catchFishItem: ICatchFishItem;

    /** FishStateItem fishScore */
    fishScore: (number|Long);

    /** FishStateItem addToDrawPool */
    addToDrawPool?: (number|Long|null);

    /** FishStateItem fishDeadMultiple */
    fishDeadMultiple?: (number|null);

    /** FishStateItem fishDeadSubMuls */
    fishDeadSubMuls?: (number[]|null);

    /** FishStateItem scoreType */
    scoreType?: (number|null);

    /** FishStateItem curShield */
    curShield?: (number|null);

    /** FishStateItem fishExtraMul */
    fishExtraMul?: (number|null);

    /** FishStateItem speMuls */
    speMuls?: (IFishSpecialMul[]|null);

    /** FishStateItem addIntegral */
    addIntegral?: (number|null);

    /** FishStateItem dropItems */
    dropItems?: (IToolItem[]|null);
}

/** 当打死一条鱼的时候的状态 */
export class FishStateItem implements IFishStateItem {

    /**
     * Constructs a new FishStateItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFishStateItem);

    /** FishStateItem catchFishItem. */
    public catchFishItem: ICatchFishItem;

    /** FishStateItem fishScore. */
    public fishScore: (number|Long);

    /** FishStateItem addToDrawPool. */
    public addToDrawPool: (number|Long);

    /** FishStateItem fishDeadMultiple. */
    public fishDeadMultiple: number;

    /** FishStateItem fishDeadSubMuls. */
    public fishDeadSubMuls: Array<number>;

    /** FishStateItem scoreType. */
    public scoreType: number;

    /** FishStateItem curShield. */
    public curShield: number;

    /** FishStateItem fishExtraMul. */
    public fishExtraMul: number;

    /** FishStateItem speMuls. */
    public speMuls: Array<IFishSpecialMul>;

    /** FishStateItem addIntegral. */
    public addIntegral: number;

    /** FishStateItem dropItems. */
    public dropItems: Array<IToolItem>;

    /**
     * Creates a new FishStateItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FishStateItem instance
     */
    public static create(properties?: IFishStateItem): FishStateItem;

    /**
     * Encodes the specified FishStateItem message. Does not implicitly {@link FishStateItem.verify|verify} messages.
     * @param message FishStateItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFishStateItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FishStateItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FishStateItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FishStateItem;
}

/** Properties of a FishSpecialMul. */
export interface IFishSpecialMul {

    /** FishSpecialMul mul */
    mul: number;

    /** FishSpecialMul color */
    color: number;
}

/** Represents a FishSpecialMul. */
export class FishSpecialMul implements IFishSpecialMul {

    /**
     * Constructs a new FishSpecialMul.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFishSpecialMul);

    /** FishSpecialMul mul. */
    public mul: number;

    /** FishSpecialMul color. */
    public color: number;

    /**
     * Creates a new FishSpecialMul instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FishSpecialMul instance
     */
    public static create(properties?: IFishSpecialMul): FishSpecialMul;

    /**
     * Encodes the specified FishSpecialMul message. Does not implicitly {@link FishSpecialMul.verify|verify} messages.
     * @param message FishSpecialMul message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFishSpecialMul, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FishSpecialMul message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FishSpecialMul
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FishSpecialMul;
}

/** Properties of a CatchFishItem. */
export interface ICatchFishItem {

    /** CatchFishItem mainId */
    mainId: number;

    /** CatchFishItem subId */
    subId: number;

    /** CatchFishItem fishType */
    fishType: number;
}

/** Represents a CatchFishItem. */
export class CatchFishItem implements ICatchFishItem {

    /**
     * Constructs a new CatchFishItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICatchFishItem);

    /** CatchFishItem mainId. */
    public mainId: number;

    /** CatchFishItem subId. */
    public subId: number;

    /** CatchFishItem fishType. */
    public fishType: number;

    /**
     * Creates a new CatchFishItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CatchFishItem instance
     */
    public static create(properties?: ICatchFishItem): CatchFishItem;

    /**
     * Encodes the specified CatchFishItem message. Does not implicitly {@link CatchFishItem.verify|verify} messages.
     * @param message CatchFishItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICatchFishItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CatchFishItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CatchFishItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CatchFishItem;
}

/** Properties of a CatchFishReq. */
export interface ICatchFishReq {

    /** CatchFishReq bulletId */
    bulletId: (number|Long);

    /** CatchFishReq chairId */
    chairId: number;

    /** CatchFishReq catchFishItems */
    catchFishItems?: (ICatchFishItem[]|null);
}

/** Represents a CatchFishReq. */
export class CatchFishReq implements ICatchFishReq {

    /**
     * Constructs a new CatchFishReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICatchFishReq);

    /** CatchFishReq bulletId. */
    public bulletId: (number|Long);

    /** CatchFishReq chairId. */
    public chairId: number;

    /** CatchFishReq catchFishItems. */
    public catchFishItems: Array<ICatchFishItem>;

    /**
     * Creates a new CatchFishReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CatchFishReq instance
     */
    public static create(properties?: ICatchFishReq): CatchFishReq;

    /**
     * Encodes the specified CatchFishReq message. Does not implicitly {@link CatchFishReq.verify|verify} messages.
     * @param message CatchFishReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICatchFishReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CatchFishReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CatchFishReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CatchFishReq;
}

/** Properties of a BombFishReq. */
export interface IBombFishReq {

    /** BombFishReq skillId */
    skillId: string;

    /** BombFishReq chairId */
    chairId: number;

    /** BombFishReq catchFishItems */
    catchFishItems: ICatchFishItem;
}

/** Represents a BombFishReq. */
export class BombFishReq implements IBombFishReq {

    /**
     * Constructs a new BombFishReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBombFishReq);

    /** BombFishReq skillId. */
    public skillId: string;

    /** BombFishReq chairId. */
    public chairId: number;

    /** BombFishReq catchFishItems. */
    public catchFishItems: ICatchFishItem;

    /**
     * Creates a new BombFishReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BombFishReq instance
     */
    public static create(properties?: IBombFishReq): BombFishReq;

    /**
     * Encodes the specified BombFishReq message. Does not implicitly {@link BombFishReq.verify|verify} messages.
     * @param message BombFishReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBombFishReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BombFishReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BombFishReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BombFishReq;
}

/** Properties of a BombFishResp. */
export interface IBombFishResp {

    /** BombFishResp gameServerFishFishState */
    gameServerFishFishState: IFishStateItem;

    /** BombFishResp fishscore */
    fishscore: (number|Long);

    /** BombFishResp chairId */
    chairId: number;
}

/** Represents a BombFishResp. */
export class BombFishResp implements IBombFishResp {

    /**
     * Constructs a new BombFishResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBombFishResp);

    /** BombFishResp gameServerFishFishState. */
    public gameServerFishFishState: IFishStateItem;

    /** BombFishResp fishscore. */
    public fishscore: (number|Long);

    /** BombFishResp chairId. */
    public chairId: number;

    /**
     * Creates a new BombFishResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BombFishResp instance
     */
    public static create(properties?: IBombFishResp): BombFishResp;

    /**
     * Encodes the specified BombFishResp message. Does not implicitly {@link BombFishResp.verify|verify} messages.
     * @param message BombFishResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBombFishResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BombFishResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BombFishResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BombFishResp;
}

/** Properties of a CatchFishResp. */
export interface ICatchFishResp {

    /** CatchFishResp gameServerFishFishState */
    gameServerFishFishState?: (IFishStateItem[]|null);

    /** CatchFishResp fishscore */
    fishscore: (number|Long);

    /** CatchFishResp chairId */
    chairId: number;

    /** CatchFishResp integral */
    integral?: (number|Long|null);

    /** CatchFishResp bulletId */
    bulletId: (number|Long);

    /** CatchFishResp userName */
    userName?: (string|null);

    /** CatchFishResp magicStone */
    magicStone?: (number|Long|null);

    /** CatchFishResp treasure */
    treasure?: (ITreasureUpdate|null);

    /** CatchFishResp drillKillScore */
    drillKillScore?: (number|Long|null);
}

/** Represents a CatchFishResp. */
export class CatchFishResp implements ICatchFishResp {

    /**
     * Constructs a new CatchFishResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICatchFishResp);

    /** CatchFishResp gameServerFishFishState. */
    public gameServerFishFishState: Array<IFishStateItem>;

    /** CatchFishResp fishscore. */
    public fishscore: (number|Long);

    /** CatchFishResp chairId. */
    public chairId: number;

    /** CatchFishResp integral. */
    public integral: (number|Long);

    /** CatchFishResp bulletId. */
    public bulletId: (number|Long);

    /** CatchFishResp userName. */
    public userName: string;

    /** CatchFishResp magicStone. */
    public magicStone: (number|Long);

    /** CatchFishResp treasure. */
    public treasure?: (ITreasureUpdate|null);

    /** CatchFishResp drillKillScore. */
    public drillKillScore: (number|Long);

    /**
     * Creates a new CatchFishResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CatchFishResp instance
     */
    public static create(properties?: ICatchFishResp): CatchFishResp;

    /**
     * Encodes the specified CatchFishResp message. Does not implicitly {@link CatchFishResp.verify|verify} messages.
     * @param message CatchFishResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICatchFishResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CatchFishResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CatchFishResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CatchFishResp;
}

/** Properties of a CatchSpecialFishReq. */
export interface ICatchSpecialFishReq {

    /** CatchSpecialFishReq bulletId */
    bulletId: (number|Long);

    /** CatchSpecialFishReq chairId */
    chairId: number;

    /** CatchSpecialFishReq specialCatchFishItem */
    specialCatchFishItem: ICatchFishItem;

    /** CatchSpecialFishReq catchFishItems */
    catchFishItems?: (ICatchFishItem[]|null);

    /** CatchSpecialFishReq bombx */
    bombx?: (number|null);

    /** CatchSpecialFishReq bomby */
    bomby?: (number|null);
}

/** Represents a CatchSpecialFishReq. */
export class CatchSpecialFishReq implements ICatchSpecialFishReq {

    /**
     * Constructs a new CatchSpecialFishReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICatchSpecialFishReq);

    /** CatchSpecialFishReq bulletId. */
    public bulletId: (number|Long);

    /** CatchSpecialFishReq chairId. */
    public chairId: number;

    /** CatchSpecialFishReq specialCatchFishItem. */
    public specialCatchFishItem: ICatchFishItem;

    /** CatchSpecialFishReq catchFishItems. */
    public catchFishItems: Array<ICatchFishItem>;

    /** CatchSpecialFishReq bombx. */
    public bombx: number;

    /** CatchSpecialFishReq bomby. */
    public bomby: number;

    /**
     * Creates a new CatchSpecialFishReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CatchSpecialFishReq instance
     */
    public static create(properties?: ICatchSpecialFishReq): CatchSpecialFishReq;

    /**
     * Encodes the specified CatchSpecialFishReq message. Does not implicitly {@link CatchSpecialFishReq.verify|verify} messages.
     * @param message CatchSpecialFishReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICatchSpecialFishReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CatchSpecialFishReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CatchSpecialFishReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CatchSpecialFishReq;
}

/** Properties of a GameServerFishCatchSpecialFishDeathResp. */
export interface IGameServerFishCatchSpecialFishDeathResp {

    /** GameServerFishCatchSpecialFishDeathResp speFishState */
    speFishState: IFishStateItem;

    /** GameServerFishCatchSpecialFishDeathResp chairId */
    chairId: number;

    /** GameServerFishCatchSpecialFishDeathResp bulletId */
    bulletId: (number|Long);

    /** GameServerFishCatchSpecialFishDeathResp fishscore */
    fishscore: (number|Long);

    /** GameServerFishCatchSpecialFishDeathResp catchFishItems */
    catchFishItems?: (IFishStateItem[]|null);

    /** GameServerFishCatchSpecialFishDeathResp bombx */
    bombx?: (number|null);

    /** GameServerFishCatchSpecialFishDeathResp bomby */
    bomby?: (number|null);

    /** GameServerFishCatchSpecialFishDeathResp integral */
    integral?: (number|Long|null);

    /** GameServerFishCatchSpecialFishDeathResp magicStone */
    magicStone?: (number|Long|null);

    /** GameServerFishCatchSpecialFishDeathResp drillKillScore */
    drillKillScore?: (number|Long|null);

    /** GameServerFishCatchSpecialFishDeathResp nuclearScore */
    nuclearScore?: (number|Long|null);
}

/** Represents a GameServerFishCatchSpecialFishDeathResp. */
export class GameServerFishCatchSpecialFishDeathResp implements IGameServerFishCatchSpecialFishDeathResp {

    /**
     * Constructs a new GameServerFishCatchSpecialFishDeathResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerFishCatchSpecialFishDeathResp);

    /** GameServerFishCatchSpecialFishDeathResp speFishState. */
    public speFishState: IFishStateItem;

    /** GameServerFishCatchSpecialFishDeathResp chairId. */
    public chairId: number;

    /** GameServerFishCatchSpecialFishDeathResp bulletId. */
    public bulletId: (number|Long);

    /** GameServerFishCatchSpecialFishDeathResp fishscore. */
    public fishscore: (number|Long);

    /** GameServerFishCatchSpecialFishDeathResp catchFishItems. */
    public catchFishItems: Array<IFishStateItem>;

    /** GameServerFishCatchSpecialFishDeathResp bombx. */
    public bombx: number;

    /** GameServerFishCatchSpecialFishDeathResp bomby. */
    public bomby: number;

    /** GameServerFishCatchSpecialFishDeathResp integral. */
    public integral: (number|Long);

    /** GameServerFishCatchSpecialFishDeathResp magicStone. */
    public magicStone: (number|Long);

    /** GameServerFishCatchSpecialFishDeathResp drillKillScore. */
    public drillKillScore: (number|Long);

    /** GameServerFishCatchSpecialFishDeathResp nuclearScore. */
    public nuclearScore: (number|Long);

    /**
     * Creates a new GameServerFishCatchSpecialFishDeathResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerFishCatchSpecialFishDeathResp instance
     */
    public static create(properties?: IGameServerFishCatchSpecialFishDeathResp): GameServerFishCatchSpecialFishDeathResp;

    /**
     * Encodes the specified GameServerFishCatchSpecialFishDeathResp message. Does not implicitly {@link GameServerFishCatchSpecialFishDeathResp.verify|verify} messages.
     * @param message GameServerFishCatchSpecialFishDeathResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerFishCatchSpecialFishDeathResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerFishCatchSpecialFishDeathResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerFishCatchSpecialFishDeathResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerFishCatchSpecialFishDeathResp;
}

/** Properties of a GameServerFishFireResp. */
export interface IGameServerFishFireResp {

    /** GameServerFishFireResp bulletx */
    bulletx: number;

    /** GameServerFishFireResp bullety */
    bullety: number;

    /** GameServerFishFireResp bulletangle */
    bulletangle: number;

    /** GameServerFishFireResp bulletId */
    bulletId: (number|Long);

    /** GameServerFishFireResp fishid */
    fishid: (number|Long);

    /** GameServerFishFireResp issucc */
    issucc: boolean;

    /** GameServerFishFireResp bulletyspeed */
    bulletyspeed: number;

    /** GameServerFishFireResp charid */
    charid: number;

    /** GameServerFishFireResp fishscore */
    fishscore: (number|Long);

    /** GameServerFishFireResp bulletCount */
    bulletCount?: (number|null);
}

/** 发送子弹是否成功 */
export class GameServerFishFireResp implements IGameServerFishFireResp {

    /**
     * Constructs a new GameServerFishFireResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerFishFireResp);

    /** GameServerFishFireResp bulletx. */
    public bulletx: number;

    /** GameServerFishFireResp bullety. */
    public bullety: number;

    /** GameServerFishFireResp bulletangle. */
    public bulletangle: number;

    /** GameServerFishFireResp bulletId. */
    public bulletId: (number|Long);

    /** GameServerFishFireResp fishid. */
    public fishid: (number|Long);

    /** GameServerFishFireResp issucc. */
    public issucc: boolean;

    /** GameServerFishFireResp bulletyspeed. */
    public bulletyspeed: number;

    /** GameServerFishFireResp charid. */
    public charid: number;

    /** GameServerFishFireResp fishscore. */
    public fishscore: (number|Long);

    /** GameServerFishFireResp bulletCount. */
    public bulletCount: number;

    /**
     * Creates a new GameServerFishFireResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerFishFireResp instance
     */
    public static create(properties?: IGameServerFishFireResp): GameServerFishFireResp;

    /**
     * Encodes the specified GameServerFishFireResp message. Does not implicitly {@link GameServerFishFireResp.verify|verify} messages.
     * @param message GameServerFishFireResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerFishFireResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerFishFireResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerFishFireResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerFishFireResp;
}

/** Properties of a FishItemProto. */
export interface IFishItemProto {

    /** FishItemProto iMainID */
    iMainID: number;

    /** FishItemProto iFishType */
    iFishType: number;

    /** FishItemProto iActFrame */
    iActFrame: number;

    /** FishItemProto iTrackOrScriptID */
    iTrackOrScriptID: number;

    /** FishItemProto iExistFramesOrTrack */
    iExistFramesOrTrack: number;

    /** FishItemProto isSpel */
    isSpel?: (boolean|null);

    /** FishItemProto bornTime */
    bornTime?: (number|Long|null);

    /** FishItemProto lifeTime */
    lifeTime?: (number|null);

    /** FishItemProto maxShield */
    maxShield?: (number|null);

    /** FishItemProto curShield */
    curShield?: (number|null);

    /** FishItemProto position */
    position?: (number|null);

    /** FishItemProto maxHP */
    maxHP?: (number|Long|null);

    /** FishItemProto curHP */
    curHP?: (number|Long|null);

    /** FishItemProto cardId */
    cardId?: (number|null);
}

/** Represents a FishItemProto. */
export class FishItemProto implements IFishItemProto {

    /**
     * Constructs a new FishItemProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFishItemProto);

    /** FishItemProto iMainID. */
    public iMainID: number;

    /** FishItemProto iFishType. */
    public iFishType: number;

    /** FishItemProto iActFrame. */
    public iActFrame: number;

    /** FishItemProto iTrackOrScriptID. */
    public iTrackOrScriptID: number;

    /** FishItemProto iExistFramesOrTrack. */
    public iExistFramesOrTrack: number;

    /** FishItemProto isSpel. */
    public isSpel: boolean;

    /** FishItemProto bornTime. */
    public bornTime: (number|Long);

    /** FishItemProto lifeTime. */
    public lifeTime: number;

    /** FishItemProto maxShield. */
    public maxShield: number;

    /** FishItemProto curShield. */
    public curShield: number;

    /** FishItemProto position. */
    public position: number;

    /** FishItemProto maxHP. */
    public maxHP: (number|Long);

    /** FishItemProto curHP. */
    public curHP: (number|Long);

    /** FishItemProto cardId. */
    public cardId: number;

    /**
     * Creates a new FishItemProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FishItemProto instance
     */
    public static create(properties?: IFishItemProto): FishItemProto;

    /**
     * Encodes the specified FishItemProto message. Does not implicitly {@link FishItemProto.verify|verify} messages.
     * @param message FishItemProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFishItemProto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FishItemProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FishItemProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FishItemProto;
}

/** Properties of a SyncFisItemProto. */
export interface ISyncFisItemProto {

    /** SyncFisItemProto fishItemProto */
    fishItemProto: IFishItemProto;

    /** SyncFisItemProto status */
    status?: (number|Long|null);

    /** SyncFisItemProto pushFrame */
    pushFrame?: (number|null);

    /** SyncFisItemProto pushEndFrame */
    pushEndFrame?: (number|null);
}

/** Represents a SyncFisItemProto. */
export class SyncFisItemProto implements ISyncFisItemProto {

    /**
     * Constructs a new SyncFisItemProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISyncFisItemProto);

    /** SyncFisItemProto fishItemProto. */
    public fishItemProto: IFishItemProto;

    /** SyncFisItemProto status. */
    public status: (number|Long);

    /** SyncFisItemProto pushFrame. */
    public pushFrame: number;

    /** SyncFisItemProto pushEndFrame. */
    public pushEndFrame: number;

    /**
     * Creates a new SyncFisItemProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SyncFisItemProto instance
     */
    public static create(properties?: ISyncFisItemProto): SyncFisItemProto;

    /**
     * Encodes the specified SyncFisItemProto message. Does not implicitly {@link SyncFisItemProto.verify|verify} messages.
     * @param message SyncFisItemProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISyncFisItemProto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SyncFisItemProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SyncFisItemProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncFisItemProto;
}

/** Properties of a SyncFishResp. */
export interface ISyncFishResp {

    /** SyncFishResp syncFisItemProtos */
    syncFisItemProtos?: (ISyncFisItemProto[]|null);

    /** SyncFishResp nowFrame */
    nowFrame: number;

    /** SyncFishResp talbePushFrame */
    talbePushFrame?: (number|null);
}

/** Represents a SyncFishResp. */
export class SyncFishResp implements ISyncFishResp {

    /**
     * Constructs a new SyncFishResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISyncFishResp);

    /** SyncFishResp syncFisItemProtos. */
    public syncFisItemProtos: Array<ISyncFisItemProto>;

    /** SyncFishResp nowFrame. */
    public nowFrame: number;

    /** SyncFishResp talbePushFrame. */
    public talbePushFrame: number;

    /**
     * Creates a new SyncFishResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SyncFishResp instance
     */
    public static create(properties?: ISyncFishResp): SyncFishResp;

    /**
     * Encodes the specified SyncFishResp message. Does not implicitly {@link SyncFishResp.verify|verify} messages.
     * @param message SyncFishResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISyncFishResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SyncFishResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SyncFishResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncFishResp;
}

/** Properties of an OutFishResp. */
export interface IOutFishResp {

    /** OutFishResp fishItemProtos */
    fishItemProtos?: (IFishItemProto[]|null);
}

/** Represents an OutFishResp. */
export class OutFishResp implements IOutFishResp {

    /**
     * Constructs a new OutFishResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOutFishResp);

    /** OutFishResp fishItemProtos. */
    public fishItemProtos: Array<IFishItemProto>;

    /**
     * Creates a new OutFishResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OutFishResp instance
     */
    public static create(properties?: IOutFishResp): OutFishResp;

    /**
     * Encodes the specified OutFishResp message. Does not implicitly {@link OutFishResp.verify|verify} messages.
     * @param message OutFishResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOutFishResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OutFishResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OutFishResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OutFishResp;
}

/** Properties of a CallOutFishResp. */
export interface ICallOutFishResp {

    /** CallOutFishResp charId */
    charId: number;

    /** CallOutFishResp type */
    type: number;

    /** CallOutFishResp fishItemProtos */
    fishItemProtos?: (IFishItemProto[]|null);
}

/** Represents a CallOutFishResp. */
export class CallOutFishResp implements ICallOutFishResp {

    /**
     * Constructs a new CallOutFishResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICallOutFishResp);

    /** CallOutFishResp charId. */
    public charId: number;

    /** CallOutFishResp type. */
    public type: number;

    /** CallOutFishResp fishItemProtos. */
    public fishItemProtos: Array<IFishItemProto>;

    /**
     * Creates a new CallOutFishResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CallOutFishResp instance
     */
    public static create(properties?: ICallOutFishResp): CallOutFishResp;

    /**
     * Encodes the specified CallOutFishResp message. Does not implicitly {@link CallOutFishResp.verify|verify} messages.
     * @param message CallOutFishResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICallOutFishResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CallOutFishResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CallOutFishResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CallOutFishResp;
}

/** Properties of a GameServerStandUpResp. */
export interface IGameServerStandUpResp {

    /** GameServerStandUpResp chairid */
    chairid: number;

    /** GameServerStandUpResp tableId */
    tableId: number;

    /** GameServerStandUpResp userId */
    userId: number;

    /** GameServerStandUpResp score */
    score: (number|Long);

    /** GameServerStandUpResp kickout */
    kickout?: (boolean|null);
}

/** Represents a GameServerStandUpResp. */
export class GameServerStandUpResp implements IGameServerStandUpResp {

    /**
     * Constructs a new GameServerStandUpResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerStandUpResp);

    /** GameServerStandUpResp chairid. */
    public chairid: number;

    /** GameServerStandUpResp tableId. */
    public tableId: number;

    /** GameServerStandUpResp userId. */
    public userId: number;

    /** GameServerStandUpResp score. */
    public score: (number|Long);

    /** GameServerStandUpResp kickout. */
    public kickout: boolean;

    /**
     * Creates a new GameServerStandUpResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerStandUpResp instance
     */
    public static create(properties?: IGameServerStandUpResp): GameServerStandUpResp;

    /**
     * Encodes the specified GameServerStandUpResp message. Does not implicitly {@link GameServerStandUpResp.verify|verify} messages.
     * @param message GameServerStandUpResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerStandUpResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerStandUpResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerStandUpResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerStandUpResp;
}

/** Properties of a SyncLogincFrameReq. */
export interface ISyncLogincFrameReq {

    /** SyncLogincFrameReq userFrame */
    userFrame: number;
}

/** Represents a SyncLogincFrameReq. */
export class SyncLogincFrameReq implements ISyncLogincFrameReq {

    /**
     * Constructs a new SyncLogincFrameReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISyncLogincFrameReq);

    /** SyncLogincFrameReq userFrame. */
    public userFrame: number;

    /**
     * Creates a new SyncLogincFrameReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SyncLogincFrameReq instance
     */
    public static create(properties?: ISyncLogincFrameReq): SyncLogincFrameReq;

    /**
     * Encodes the specified SyncLogincFrameReq message. Does not implicitly {@link SyncLogincFrameReq.verify|verify} messages.
     * @param message SyncLogincFrameReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISyncLogincFrameReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SyncLogincFrameReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SyncLogincFrameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncLogincFrameReq;
}

/** Properties of a SyncLogincFrameResp. */
export interface ISyncLogincFrameResp {

    /** SyncLogincFrameResp serverFrame */
    serverFrame: number;
}

/** Represents a SyncLogincFrameResp. */
export class SyncLogincFrameResp implements ISyncLogincFrameResp {

    /**
     * Constructs a new SyncLogincFrameResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISyncLogincFrameResp);

    /** SyncLogincFrameResp serverFrame. */
    public serverFrame: number;

    /**
     * Creates a new SyncLogincFrameResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SyncLogincFrameResp instance
     */
    public static create(properties?: ISyncLogincFrameResp): SyncLogincFrameResp;

    /**
     * Encodes the specified SyncLogincFrameResp message. Does not implicitly {@link SyncLogincFrameResp.verify|verify} messages.
     * @param message SyncLogincFrameResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISyncLogincFrameResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SyncLogincFrameResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SyncLogincFrameResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncLogincFrameResp;
}

/** Properties of a GameServerFishChangeCannonReq. */
export interface IGameServerFishChangeCannonReq {

    /** GameServerFishChangeCannonReq addCannon */
    addCannon: boolean;

    /** GameServerFishChangeCannonReq isAutoChange */
    isAutoChange?: (boolean|null);
}

/** Represents a GameServerFishChangeCannonReq. */
export class GameServerFishChangeCannonReq implements IGameServerFishChangeCannonReq {

    /**
     * Constructs a new GameServerFishChangeCannonReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerFishChangeCannonReq);

    /** GameServerFishChangeCannonReq addCannon. */
    public addCannon: boolean;

    /** GameServerFishChangeCannonReq isAutoChange. */
    public isAutoChange: boolean;

    /**
     * Creates a new GameServerFishChangeCannonReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerFishChangeCannonReq instance
     */
    public static create(properties?: IGameServerFishChangeCannonReq): GameServerFishChangeCannonReq;

    /**
     * Encodes the specified GameServerFishChangeCannonReq message. Does not implicitly {@link GameServerFishChangeCannonReq.verify|verify} messages.
     * @param message GameServerFishChangeCannonReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerFishChangeCannonReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerFishChangeCannonReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerFishChangeCannonReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerFishChangeCannonReq;
}

/** Properties of a GameServerFishChangeCannonResp. */
export interface IGameServerFishChangeCannonResp {

    /** GameServerFishChangeCannonResp cannon */
    cannon: number;

    /** GameServerFishChangeCannonResp chartid */
    chartid: number;

    /** GameServerFishChangeCannonResp issucc */
    issucc: boolean;

    /** GameServerFishChangeCannonResp isEnergyCannon */
    isEnergyCannon: boolean;
}

/** 变炮响应 */
export class GameServerFishChangeCannonResp implements IGameServerFishChangeCannonResp {

    /**
     * Constructs a new GameServerFishChangeCannonResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerFishChangeCannonResp);

    /** GameServerFishChangeCannonResp cannon. */
    public cannon: number;

    /** GameServerFishChangeCannonResp chartid. */
    public chartid: number;

    /** GameServerFishChangeCannonResp issucc. */
    public issucc: boolean;

    /** GameServerFishChangeCannonResp isEnergyCannon. */
    public isEnergyCannon: boolean;

    /**
     * Creates a new GameServerFishChangeCannonResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerFishChangeCannonResp instance
     */
    public static create(properties?: IGameServerFishChangeCannonResp): GameServerFishChangeCannonResp;

    /**
     * Encodes the specified GameServerFishChangeCannonResp message. Does not implicitly {@link GameServerFishChangeCannonResp.verify|verify} messages.
     * @param message GameServerFishChangeCannonResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerFishChangeCannonResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerFishChangeCannonResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerFishChangeCannonResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerFishChangeCannonResp;
}

/** Properties of a GameServerChangeSecondCannonReq. */
export interface IGameServerChangeSecondCannonReq {

    /** GameServerChangeSecondCannonReq addCannon */
    addCannon: boolean;
}

/** 副炮升降炮倍数 */
export class GameServerChangeSecondCannonReq implements IGameServerChangeSecondCannonReq {

    /**
     * Constructs a new GameServerChangeSecondCannonReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerChangeSecondCannonReq);

    /** GameServerChangeSecondCannonReq addCannon. */
    public addCannon: boolean;

    /**
     * Creates a new GameServerChangeSecondCannonReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerChangeSecondCannonReq instance
     */
    public static create(properties?: IGameServerChangeSecondCannonReq): GameServerChangeSecondCannonReq;

    /**
     * Encodes the specified GameServerChangeSecondCannonReq message. Does not implicitly {@link GameServerChangeSecondCannonReq.verify|verify} messages.
     * @param message GameServerChangeSecondCannonReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerChangeSecondCannonReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerChangeSecondCannonReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerChangeSecondCannonReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerChangeSecondCannonReq;
}

/** Properties of a GameServerChangeSecondCannonResp. */
export interface IGameServerChangeSecondCannonResp {

    /** GameServerChangeSecondCannonResp cannon */
    cannon: number;

    /** GameServerChangeSecondCannonResp chartid */
    chartid: number;

    /** GameServerChangeSecondCannonResp issucc */
    issucc: boolean;

    /** GameServerChangeSecondCannonResp isEnergyCannon */
    isEnergyCannon: boolean;
}

/** 副炮升降炮倍数响应 */
export class GameServerChangeSecondCannonResp implements IGameServerChangeSecondCannonResp {

    /**
     * Constructs a new GameServerChangeSecondCannonResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerChangeSecondCannonResp);

    /** GameServerChangeSecondCannonResp cannon. */
    public cannon: number;

    /** GameServerChangeSecondCannonResp chartid. */
    public chartid: number;

    /** GameServerChangeSecondCannonResp issucc. */
    public issucc: boolean;

    /** GameServerChangeSecondCannonResp isEnergyCannon. */
    public isEnergyCannon: boolean;

    /**
     * Creates a new GameServerChangeSecondCannonResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerChangeSecondCannonResp instance
     */
    public static create(properties?: IGameServerChangeSecondCannonResp): GameServerChangeSecondCannonResp;

    /**
     * Encodes the specified GameServerChangeSecondCannonResp message. Does not implicitly {@link GameServerChangeSecondCannonResp.verify|verify} messages.
     * @param message GameServerChangeSecondCannonResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerChangeSecondCannonResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerChangeSecondCannonResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerChangeSecondCannonResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerChangeSecondCannonResp;
}

/** Properties of a BossFishOutWarning. */
export interface IBossFishOutWarning {

    /** BossFishOutWarning fishType */
    fishType: number;

    /** BossFishOutWarning warnPreTime */
    warnPreTime?: (number|null);

    /** BossFishOutWarning warnTimeStamp */
    warnTimeStamp?: (number|Long|null);

    /** BossFishOutWarning warnType */
    warnType?: (number|null);
}

/** Represents a BossFishOutWarning. */
export class BossFishOutWarning implements IBossFishOutWarning {

    /**
     * Constructs a new BossFishOutWarning.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBossFishOutWarning);

    /** BossFishOutWarning fishType. */
    public fishType: number;

    /** BossFishOutWarning warnPreTime. */
    public warnPreTime: number;

    /** BossFishOutWarning warnTimeStamp. */
    public warnTimeStamp: (number|Long);

    /** BossFishOutWarning warnType. */
    public warnType: number;

    /**
     * Creates a new BossFishOutWarning instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BossFishOutWarning instance
     */
    public static create(properties?: IBossFishOutWarning): BossFishOutWarning;

    /**
     * Encodes the specified BossFishOutWarning message. Does not implicitly {@link BossFishOutWarning.verify|verify} messages.
     * @param message BossFishOutWarning message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBossFishOutWarning, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BossFishOutWarning message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BossFishOutWarning
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BossFishOutWarning;
}

/** Properties of a FishAttackPlayer. */
export interface IFishAttackPlayer {

    /** FishAttackPlayer fishId */
    fishId: number;

    /** FishAttackPlayer userId */
    userId: number;
}

/** Represents a FishAttackPlayer. */
export class FishAttackPlayer implements IFishAttackPlayer {

    /**
     * Constructs a new FishAttackPlayer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFishAttackPlayer);

    /** FishAttackPlayer fishId. */
    public fishId: number;

    /** FishAttackPlayer userId. */
    public userId: number;

    /**
     * Creates a new FishAttackPlayer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FishAttackPlayer instance
     */
    public static create(properties?: IFishAttackPlayer): FishAttackPlayer;

    /**
     * Encodes the specified FishAttackPlayer message. Does not implicitly {@link FishAttackPlayer.verify|verify} messages.
     * @param message FishAttackPlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFishAttackPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FishAttackPlayer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FishAttackPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FishAttackPlayer;
}

/** Properties of a FishAttackPlayerResp. */
export interface IFishAttackPlayerResp {

    /** FishAttackPlayerResp fishId */
    fishId: number;

    /** FishAttackPlayerResp userId */
    userId: number;

    /** FishAttackPlayerResp miss */
    miss: boolean;

    /** FishAttackPlayerResp eatScore */
    eatScore?: (number|null);

    /** FishAttackPlayerResp curScore */
    curScore?: (number|null);

    /** FishAttackPlayerResp chairId */
    chairId?: (number|null);

    /** FishAttackPlayerResp treasure */
    treasure?: (ITreasureUpdate|null);
}

/** Represents a FishAttackPlayerResp. */
export class FishAttackPlayerResp implements IFishAttackPlayerResp {

    /**
     * Constructs a new FishAttackPlayerResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFishAttackPlayerResp);

    /** FishAttackPlayerResp fishId. */
    public fishId: number;

    /** FishAttackPlayerResp userId. */
    public userId: number;

    /** FishAttackPlayerResp miss. */
    public miss: boolean;

    /** FishAttackPlayerResp eatScore. */
    public eatScore: number;

    /** FishAttackPlayerResp curScore. */
    public curScore: number;

    /** FishAttackPlayerResp chairId. */
    public chairId: number;

    /** FishAttackPlayerResp treasure. */
    public treasure?: (ITreasureUpdate|null);

    /**
     * Creates a new FishAttackPlayerResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FishAttackPlayerResp instance
     */
    public static create(properties?: IFishAttackPlayerResp): FishAttackPlayerResp;

    /**
     * Encodes the specified FishAttackPlayerResp message. Does not implicitly {@link FishAttackPlayerResp.verify|verify} messages.
     * @param message FishAttackPlayerResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFishAttackPlayerResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FishAttackPlayerResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FishAttackPlayerResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FishAttackPlayerResp;
}

/** Properties of a GoldPiranhaReturnScore. */
export interface IGoldPiranhaReturnScore {

    /** GoldPiranhaReturnScore retScore */
    retScore?: (number|null);

    /** GoldPiranhaReturnScore curScore */
    curScore?: (number|Long|null);

    /** GoldPiranhaReturnScore treasure */
    treasure?: (ITreasureUpdate|null);

    /** GoldPiranhaReturnScore ownerid */
    ownerid?: (number|null);

    /** GoldPiranhaReturnScore retType */
    retType?: (number|null);
}

/** Represents a GoldPiranhaReturnScore. */
export class GoldPiranhaReturnScore implements IGoldPiranhaReturnScore {

    /**
     * Constructs a new GoldPiranhaReturnScore.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGoldPiranhaReturnScore);

    /** GoldPiranhaReturnScore retScore. */
    public retScore: number;

    /** GoldPiranhaReturnScore curScore. */
    public curScore: (number|Long);

    /** GoldPiranhaReturnScore treasure. */
    public treasure?: (ITreasureUpdate|null);

    /** GoldPiranhaReturnScore ownerid. */
    public ownerid: number;

    /** GoldPiranhaReturnScore retType. */
    public retType: number;

    /**
     * Creates a new GoldPiranhaReturnScore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GoldPiranhaReturnScore instance
     */
    public static create(properties?: IGoldPiranhaReturnScore): GoldPiranhaReturnScore;

    /**
     * Encodes the specified GoldPiranhaReturnScore message. Does not implicitly {@link GoldPiranhaReturnScore.verify|verify} messages.
     * @param message GoldPiranhaReturnScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGoldPiranhaReturnScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GoldPiranhaReturnScore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GoldPiranhaReturnScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GoldPiranhaReturnScore;
}

/** Properties of a PiranhaBossDieMagicOver. */
export interface IPiranhaBossDieMagicOver {
}

/** Represents a PiranhaBossDieMagicOver. */
export class PiranhaBossDieMagicOver implements IPiranhaBossDieMagicOver {

    /**
     * Constructs a new PiranhaBossDieMagicOver.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPiranhaBossDieMagicOver);

    /**
     * Creates a new PiranhaBossDieMagicOver instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PiranhaBossDieMagicOver instance
     */
    public static create(properties?: IPiranhaBossDieMagicOver): PiranhaBossDieMagicOver;

    /**
     * Encodes the specified PiranhaBossDieMagicOver message. Does not implicitly {@link PiranhaBossDieMagicOver.verify|verify} messages.
     * @param message PiranhaBossDieMagicOver message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPiranhaBossDieMagicOver, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PiranhaBossDieMagicOver message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PiranhaBossDieMagicOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PiranhaBossDieMagicOver;
}

/** Properties of a syncWorldBossHP. */
export interface IsyncWorldBossHP {

    /** syncWorldBossHP fishType */
    fishType?: (number|null);

    /** syncWorldBossHP fishID */
    fishID?: (number|null);

    /** syncWorldBossHP curHP */
    curHP?: (number|Long|null);

    /** syncWorldBossHP reduceHP */
    reduceHP?: (number|Long|null);

    /** syncWorldBossHP shieldReduceHP */
    shieldReduceHP?: (number|Long|null);

    /** syncWorldBossHP shieldBreakTableID */
    shieldBreakTableID?: (number|null);

    /** syncWorldBossHP curShield */
    curShield?: (number|null);
}

/** Represents a syncWorldBossHP. */
export class syncWorldBossHP implements IsyncWorldBossHP {

    /**
     * Constructs a new syncWorldBossHP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IsyncWorldBossHP);

    /** syncWorldBossHP fishType. */
    public fishType: number;

    /** syncWorldBossHP fishID. */
    public fishID: number;

    /** syncWorldBossHP curHP. */
    public curHP: (number|Long);

    /** syncWorldBossHP reduceHP. */
    public reduceHP: (number|Long);

    /** syncWorldBossHP shieldReduceHP. */
    public shieldReduceHP: (number|Long);

    /** syncWorldBossHP shieldBreakTableID. */
    public shieldBreakTableID: number;

    /** syncWorldBossHP curShield. */
    public curShield: number;

    /**
     * Creates a new syncWorldBossHP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns syncWorldBossHP instance
     */
    public static create(properties?: IsyncWorldBossHP): syncWorldBossHP;

    /**
     * Encodes the specified syncWorldBossHP message. Does not implicitly {@link syncWorldBossHP.verify|verify} messages.
     * @param message syncWorldBossHP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IsyncWorldBossHP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a syncWorldBossHP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns syncWorldBossHP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syncWorldBossHP;
}

/** Properties of a syncWorldBossDie. */
export interface IsyncWorldBossDie {

    /** syncWorldBossDie fishType */
    fishType?: (number|null);

    /** syncWorldBossDie fishID */
    fishID?: (number|null);

    /** syncWorldBossDie killerID */
    killerID?: (number|null);
}

/** Represents a syncWorldBossDie. */
export class syncWorldBossDie implements IsyncWorldBossDie {

    /**
     * Constructs a new syncWorldBossDie.
     * @param [properties] Properties to set
     */
    constructor(properties?: IsyncWorldBossDie);

    /** syncWorldBossDie fishType. */
    public fishType: number;

    /** syncWorldBossDie fishID. */
    public fishID: number;

    /** syncWorldBossDie killerID. */
    public killerID: number;

    /**
     * Creates a new syncWorldBossDie instance using the specified properties.
     * @param [properties] Properties to set
     * @returns syncWorldBossDie instance
     */
    public static create(properties?: IsyncWorldBossDie): syncWorldBossDie;

    /**
     * Encodes the specified syncWorldBossDie message. Does not implicitly {@link syncWorldBossDie.verify|verify} messages.
     * @param message syncWorldBossDie message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IsyncWorldBossDie, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a syncWorldBossDie message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns syncWorldBossDie
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syncWorldBossDie;
}

/** Properties of a WorldBossWiner. */
export interface IWorldBossWiner {

    /** WorldBossWiner userID */
    userID?: (number|null);

    /** WorldBossWiner userName */
    userName?: (string|null);

    /** WorldBossWiner vipIcon */
    vipIcon?: (boolean|null);

    /** WorldBossWiner addScore */
    addScore?: (number|Long|null);
}

/** Represents a WorldBossWiner. */
export class WorldBossWiner implements IWorldBossWiner {

    /**
     * Constructs a new WorldBossWiner.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWorldBossWiner);

    /** WorldBossWiner userID. */
    public userID: number;

    /** WorldBossWiner userName. */
    public userName: string;

    /** WorldBossWiner vipIcon. */
    public vipIcon: boolean;

    /** WorldBossWiner addScore. */
    public addScore: (number|Long);

    /**
     * Creates a new WorldBossWiner instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WorldBossWiner instance
     */
    public static create(properties?: IWorldBossWiner): WorldBossWiner;

    /**
     * Encodes the specified WorldBossWiner message. Does not implicitly {@link WorldBossWiner.verify|verify} messages.
     * @param message WorldBossWiner message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWorldBossWiner, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WorldBossWiner message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WorldBossWiner
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WorldBossWiner;
}

/** Properties of a showWorldBossDieAwardList. */
export interface IshowWorldBossDieAwardList {

    /** showWorldBossDieAwardList bossType */
    bossType?: (number|null);

    /** showWorldBossDieAwardList bossWiners */
    bossWiners?: (IWorldBossWiner[]|null);
}

/** Represents a showWorldBossDieAwardList. */
export class showWorldBossDieAwardList implements IshowWorldBossDieAwardList {

    /**
     * Constructs a new showWorldBossDieAwardList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IshowWorldBossDieAwardList);

    /** showWorldBossDieAwardList bossType. */
    public bossType: number;

    /** showWorldBossDieAwardList bossWiners. */
    public bossWiners: Array<IWorldBossWiner>;

    /**
     * Creates a new showWorldBossDieAwardList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns showWorldBossDieAwardList instance
     */
    public static create(properties?: IshowWorldBossDieAwardList): showWorldBossDieAwardList;

    /**
     * Encodes the specified showWorldBossDieAwardList message. Does not implicitly {@link showWorldBossDieAwardList.verify|verify} messages.
     * @param message showWorldBossDieAwardList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IshowWorldBossDieAwardList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a showWorldBossDieAwardList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns showWorldBossDieAwardList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): showWorldBossDieAwardList;
}

/** Properties of a syncWorldBossAward. */
export interface IsyncWorldBossAward {

    /** syncWorldBossAward uid */
    uid?: (number|null);

    /** syncWorldBossAward getScore */
    getScore?: (number|Long|null);

    /** syncWorldBossAward treasure */
    treasure?: (ITreasureUpdate|null);
}

/** Represents a syncWorldBossAward. */
export class syncWorldBossAward implements IsyncWorldBossAward {

    /**
     * Constructs a new syncWorldBossAward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IsyncWorldBossAward);

    /** syncWorldBossAward uid. */
    public uid: number;

    /** syncWorldBossAward getScore. */
    public getScore: (number|Long);

    /** syncWorldBossAward treasure. */
    public treasure?: (ITreasureUpdate|null);

    /**
     * Creates a new syncWorldBossAward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns syncWorldBossAward instance
     */
    public static create(properties?: IsyncWorldBossAward): syncWorldBossAward;

    /**
     * Encodes the specified syncWorldBossAward message. Does not implicitly {@link syncWorldBossAward.verify|verify} messages.
     * @param message syncWorldBossAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IsyncWorldBossAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a syncWorldBossAward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns syncWorldBossAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syncWorldBossAward;
}

/** Properties of a syncUserDropBombs. */
export interface IsyncUserDropBombs {

    /** syncUserDropBombs dropItems */
    dropItems?: (IToolItem[]|null);
}

/** Represents a syncUserDropBombs. */
export class syncUserDropBombs implements IsyncUserDropBombs {

    /**
     * Constructs a new syncUserDropBombs.
     * @param [properties] Properties to set
     */
    constructor(properties?: IsyncUserDropBombs);

    /** syncUserDropBombs dropItems. */
    public dropItems: Array<IToolItem>;

    /**
     * Creates a new syncUserDropBombs instance using the specified properties.
     * @param [properties] Properties to set
     * @returns syncUserDropBombs instance
     */
    public static create(properties?: IsyncUserDropBombs): syncUserDropBombs;

    /**
     * Encodes the specified syncUserDropBombs message. Does not implicitly {@link syncUserDropBombs.verify|verify} messages.
     * @param message syncUserDropBombs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IsyncUserDropBombs, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a syncUserDropBombs message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns syncUserDropBombs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syncUserDropBombs;
}

/** Properties of a BombBossShowFlag. */
export interface IBombBossShowFlag {

    /** BombBossShowFlag fishType */
    fishType?: (number|null);

    /** BombBossShowFlag show */
    show?: (boolean|null);
}

/** Represents a BombBossShowFlag. */
export class BombBossShowFlag implements IBombBossShowFlag {

    /**
     * Constructs a new BombBossShowFlag.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBombBossShowFlag);

    /** BombBossShowFlag fishType. */
    public fishType: number;

    /** BombBossShowFlag show. */
    public show: boolean;

    /**
     * Creates a new BombBossShowFlag instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BombBossShowFlag instance
     */
    public static create(properties?: IBombBossShowFlag): BombBossShowFlag;

    /**
     * Encodes the specified BombBossShowFlag message. Does not implicitly {@link BombBossShowFlag.verify|verify} messages.
     * @param message BombBossShowFlag message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBombBossShowFlag, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BombBossShowFlag message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BombBossShowFlag
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BombBossShowFlag;
}

/** Properties of a syncBombBossShowFlag. */
export interface IsyncBombBossShowFlag {

    /** syncBombBossShowFlag flags */
    flags?: (IBombBossShowFlag[]|null);

    /** syncBombBossShowFlag dropItems */
    dropItems?: (IToolItem[]|null);
}

/** Represents a syncBombBossShowFlag. */
export class syncBombBossShowFlag implements IsyncBombBossShowFlag {

    /**
     * Constructs a new syncBombBossShowFlag.
     * @param [properties] Properties to set
     */
    constructor(properties?: IsyncBombBossShowFlag);

    /** syncBombBossShowFlag flags. */
    public flags: Array<IBombBossShowFlag>;

    /** syncBombBossShowFlag dropItems. */
    public dropItems: Array<IToolItem>;

    /**
     * Creates a new syncBombBossShowFlag instance using the specified properties.
     * @param [properties] Properties to set
     * @returns syncBombBossShowFlag instance
     */
    public static create(properties?: IsyncBombBossShowFlag): syncBombBossShowFlag;

    /**
     * Encodes the specified syncBombBossShowFlag message. Does not implicitly {@link syncBombBossShowFlag.verify|verify} messages.
     * @param message syncBombBossShowFlag message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IsyncBombBossShowFlag, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a syncBombBossShowFlag message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns syncBombBossShowFlag
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syncBombBossShowFlag;
}

/** Properties of a bombBossKillAward. */
export interface IbombBossKillAward {

    /** bombBossKillAward userID */
    userID?: (number|null);

    /** bombBossKillAward userName */
    userName?: (string|null);

    /** bombBossKillAward addScore */
    addScore?: (number|Long|null);

    /** bombBossKillAward bombs */
    bombs?: (IToolItem[]|null);

    /** bombBossKillAward bossType */
    bossType?: (number|null);
}

/** Represents a bombBossKillAward. */
export class bombBossKillAward implements IbombBossKillAward {

    /**
     * Constructs a new bombBossKillAward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IbombBossKillAward);

    /** bombBossKillAward userID. */
    public userID: number;

    /** bombBossKillAward userName. */
    public userName: string;

    /** bombBossKillAward addScore. */
    public addScore: (number|Long);

    /** bombBossKillAward bombs. */
    public bombs: Array<IToolItem>;

    /** bombBossKillAward bossType. */
    public bossType: number;

    /**
     * Creates a new bombBossKillAward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bombBossKillAward instance
     */
    public static create(properties?: IbombBossKillAward): bombBossKillAward;

    /**
     * Encodes the specified bombBossKillAward message. Does not implicitly {@link bombBossKillAward.verify|verify} messages.
     * @param message bombBossKillAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IbombBossKillAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bombBossKillAward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns bombBossKillAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bombBossKillAward;
}

/** Properties of an EconomyExchangeReq. */
export interface IEconomyExchangeReq {

    /** EconomyExchangeReq economy */
    economy: number;

    /** EconomyExchangeReq exchangeBomb */
    exchangeBomb: string;

    /** EconomyExchangeReq exType */
    exType: number;
}

/** Represents an EconomyExchangeReq. */
export class EconomyExchangeReq implements IEconomyExchangeReq {

    /**
     * Constructs a new EconomyExchangeReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEconomyExchangeReq);

    /** EconomyExchangeReq economy. */
    public economy: number;

    /** EconomyExchangeReq exchangeBomb. */
    public exchangeBomb: string;

    /** EconomyExchangeReq exType. */
    public exType: number;

    /**
     * Creates a new EconomyExchangeReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EconomyExchangeReq instance
     */
    public static create(properties?: IEconomyExchangeReq): EconomyExchangeReq;

    /**
     * Encodes the specified EconomyExchangeReq message. Does not implicitly {@link EconomyExchangeReq.verify|verify} messages.
     * @param message EconomyExchangeReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEconomyExchangeReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EconomyExchangeReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EconomyExchangeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EconomyExchangeReq;
}

/** Properties of an EconomyExchangeResp. */
export interface IEconomyExchangeResp {

    /** EconomyExchangeResp economy */
    economy: number;

    /** EconomyExchangeResp bombs */
    bombs?: (IToolItem[]|null);
}

/** Represents an EconomyExchangeResp. */
export class EconomyExchangeResp implements IEconomyExchangeResp {

    /**
     * Constructs a new EconomyExchangeResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEconomyExchangeResp);

    /** EconomyExchangeResp economy. */
    public economy: number;

    /** EconomyExchangeResp bombs. */
    public bombs: Array<IToolItem>;

    /**
     * Creates a new EconomyExchangeResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EconomyExchangeResp instance
     */
    public static create(properties?: IEconomyExchangeResp): EconomyExchangeResp;

    /**
     * Encodes the specified EconomyExchangeResp message. Does not implicitly {@link EconomyExchangeResp.verify|verify} messages.
     * @param message EconomyExchangeResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEconomyExchangeResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EconomyExchangeResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EconomyExchangeResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EconomyExchangeResp;
}

/** Properties of a pushTreasureThiefMul2Others. */
export interface IpushTreasureThiefMul2Others {

    /** pushTreasureThiefMul2Others userId */
    userId?: (number|null);

    /** pushTreasureThiefMul2Others chairId */
    chairId?: (number|null);

    /** pushTreasureThiefMul2Others fishId */
    fishId?: (string|null);
}

/** Represents a pushTreasureThiefMul2Others. */
export class pushTreasureThiefMul2Others implements IpushTreasureThiefMul2Others {

    /**
     * Constructs a new pushTreasureThiefMul2Others.
     * @param [properties] Properties to set
     */
    constructor(properties?: IpushTreasureThiefMul2Others);

    /** pushTreasureThiefMul2Others userId. */
    public userId: number;

    /** pushTreasureThiefMul2Others chairId. */
    public chairId: number;

    /** pushTreasureThiefMul2Others fishId. */
    public fishId: string;

    /**
     * Creates a new pushTreasureThiefMul2Others instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pushTreasureThiefMul2Others instance
     */
    public static create(properties?: IpushTreasureThiefMul2Others): pushTreasureThiefMul2Others;

    /**
     * Encodes the specified pushTreasureThiefMul2Others message. Does not implicitly {@link pushTreasureThiefMul2Others.verify|verify} messages.
     * @param message pushTreasureThiefMul2Others message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IpushTreasureThiefMul2Others, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pushTreasureThiefMul2Others message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pushTreasureThiefMul2Others
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pushTreasureThiefMul2Others;
}

/** Properties of an IntegralMallGoods. */
export interface IIntegralMallGoods {

    /** IntegralMallGoods goodsId */
    goodsId: number;

    /** IntegralMallGoods order */
    order: number;

    /** IntegralMallGoods itemId */
    itemId: number;

    /** IntegralMallGoods itemName */
    itemName: string;

    /** IntegralMallGoods number */
    number: number;

    /** IntegralMallGoods show */
    show: number;

    /** IntegralMallGoods quality */
    quality: number;

    /** IntegralMallGoods price */
    price: number;

    /** IntegralMallGoods buyVip */
    buyVip: number;

    /** IntegralMallGoods dailyTimes */
    dailyTimes: number;

    /** IntegralMallGoods boughtTimes */
    boughtTimes: number;

    /** IntegralMallGoods buyLimit */
    buyLimit?: (string|null);

    /** IntegralMallGoods target */
    target?: (number|null);
}

/** Represents an IntegralMallGoods. */
export class IntegralMallGoods implements IIntegralMallGoods {

    /**
     * Constructs a new IntegralMallGoods.
     * @param [properties] Properties to set
     */
    constructor(properties?: IIntegralMallGoods);

    /** IntegralMallGoods goodsId. */
    public goodsId: number;

    /** IntegralMallGoods order. */
    public order: number;

    /** IntegralMallGoods itemId. */
    public itemId: number;

    /** IntegralMallGoods itemName. */
    public itemName: string;

    /** IntegralMallGoods number. */
    public number: number;

    /** IntegralMallGoods show. */
    public show: number;

    /** IntegralMallGoods quality. */
    public quality: number;

    /** IntegralMallGoods price. */
    public price: number;

    /** IntegralMallGoods buyVip. */
    public buyVip: number;

    /** IntegralMallGoods dailyTimes. */
    public dailyTimes: number;

    /** IntegralMallGoods boughtTimes. */
    public boughtTimes: number;

    /** IntegralMallGoods buyLimit. */
    public buyLimit: string;

    /** IntegralMallGoods target. */
    public target: number;

    /**
     * Creates a new IntegralMallGoods instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IntegralMallGoods instance
     */
    public static create(properties?: IIntegralMallGoods): IntegralMallGoods;

    /**
     * Encodes the specified IntegralMallGoods message. Does not implicitly {@link IntegralMallGoods.verify|verify} messages.
     * @param message IntegralMallGoods message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IIntegralMallGoods, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IntegralMallGoods message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IntegralMallGoods
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntegralMallGoods;
}

/** Properties of an integralMallInfoResp. */
export interface IintegralMallInfoResp {

    /** integralMallInfoResp goods */
    goods?: (IIntegralMallGoods[]|null);
}

/** Represents an integralMallInfoResp. */
export class integralMallInfoResp implements IintegralMallInfoResp {

    /**
     * Constructs a new integralMallInfoResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IintegralMallInfoResp);

    /** integralMallInfoResp goods. */
    public goods: Array<IIntegralMallGoods>;

    /**
     * Creates a new integralMallInfoResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns integralMallInfoResp instance
     */
    public static create(properties?: IintegralMallInfoResp): integralMallInfoResp;

    /**
     * Encodes the specified integralMallInfoResp message. Does not implicitly {@link integralMallInfoResp.verify|verify} messages.
     * @param message integralMallInfoResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IintegralMallInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an integralMallInfoResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns integralMallInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): integralMallInfoResp;
}

/** Properties of an integralMallBuyReq. */
export interface IintegralMallBuyReq {

    /** integralMallBuyReq goodsId */
    goodsId: number;

    /** integralMallBuyReq num */
    num: number;
}

/** Represents an integralMallBuyReq. */
export class integralMallBuyReq implements IintegralMallBuyReq {

    /**
     * Constructs a new integralMallBuyReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IintegralMallBuyReq);

    /** integralMallBuyReq goodsId. */
    public goodsId: number;

    /** integralMallBuyReq num. */
    public num: number;

    /**
     * Creates a new integralMallBuyReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns integralMallBuyReq instance
     */
    public static create(properties?: IintegralMallBuyReq): integralMallBuyReq;

    /**
     * Encodes the specified integralMallBuyReq message. Does not implicitly {@link integralMallBuyReq.verify|verify} messages.
     * @param message integralMallBuyReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IintegralMallBuyReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an integralMallBuyReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns integralMallBuyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): integralMallBuyReq;
}

/** Properties of an integralMallBuyResp. */
export interface IintegralMallBuyResp {

    /** integralMallBuyResp success */
    success: boolean;

    /** integralMallBuyResp goods */
    goods?: (IIntegralMallGoods|null);

    /** integralMallBuyResp tr */
    tr?: (ITreasureUpdate|null);
}

/** Represents an integralMallBuyResp. */
export class integralMallBuyResp implements IintegralMallBuyResp {

    /**
     * Constructs a new integralMallBuyResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IintegralMallBuyResp);

    /** integralMallBuyResp success. */
    public success: boolean;

    /** integralMallBuyResp goods. */
    public goods?: (IIntegralMallGoods|null);

    /** integralMallBuyResp tr. */
    public tr?: (ITreasureUpdate|null);

    /**
     * Creates a new integralMallBuyResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns integralMallBuyResp instance
     */
    public static create(properties?: IintegralMallBuyResp): integralMallBuyResp;

    /**
     * Encodes the specified integralMallBuyResp message. Does not implicitly {@link integralMallBuyResp.verify|verify} messages.
     * @param message integralMallBuyResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IintegralMallBuyResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an integralMallBuyResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns integralMallBuyResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): integralMallBuyResp;
}

/** Properties of a drillBombRemove. */
export interface IdrillBombRemove {

    /** drillBombRemove bulletId */
    bulletId: (number|Long);

    /** drillBombRemove chairId */
    chairId: (number|Long);

    /** drillBombRemove catchFishItems */
    catchFishItems?: (ICatchFishItem[]|null);
}

/** Represents a drillBombRemove. */
export class drillBombRemove implements IdrillBombRemove {

    /**
     * Constructs a new drillBombRemove.
     * @param [properties] Properties to set
     */
    constructor(properties?: IdrillBombRemove);

    /** drillBombRemove bulletId. */
    public bulletId: (number|Long);

    /** drillBombRemove chairId. */
    public chairId: (number|Long);

    /** drillBombRemove catchFishItems. */
    public catchFishItems: Array<ICatchFishItem>;

    /**
     * Creates a new drillBombRemove instance using the specified properties.
     * @param [properties] Properties to set
     * @returns drillBombRemove instance
     */
    public static create(properties?: IdrillBombRemove): drillBombRemove;

    /**
     * Encodes the specified drillBombRemove message. Does not implicitly {@link drillBombRemove.verify|verify} messages.
     * @param message drillBombRemove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IdrillBombRemove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a drillBombRemove message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns drillBombRemove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): drillBombRemove;
}

/** Properties of a syncGoblinScorePool. */
export interface IsyncGoblinScorePool {

    /** syncGoblinScorePool poolScore */
    poolScore: (number|Long);
}

/** Represents a syncGoblinScorePool. */
export class syncGoblinScorePool implements IsyncGoblinScorePool {

    /**
     * Constructs a new syncGoblinScorePool.
     * @param [properties] Properties to set
     */
    constructor(properties?: IsyncGoblinScorePool);

    /** syncGoblinScorePool poolScore. */
    public poolScore: (number|Long);

    /**
     * Creates a new syncGoblinScorePool instance using the specified properties.
     * @param [properties] Properties to set
     * @returns syncGoblinScorePool instance
     */
    public static create(properties?: IsyncGoblinScorePool): syncGoblinScorePool;

    /**
     * Encodes the specified syncGoblinScorePool message. Does not implicitly {@link syncGoblinScorePool.verify|verify} messages.
     * @param message syncGoblinScorePool message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IsyncGoblinScorePool, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a syncGoblinScorePool message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns syncGoblinScorePool
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syncGoblinScorePool;
}

/** Properties of a FreeBulletCannonInfo. */
export interface IFreeBulletCannonInfo {

    /** FreeBulletCannonInfo chairId */
    chairId: number;

    /** FreeBulletCannonInfo beginTime */
    beginTime: (number|Long);

    /** FreeBulletCannonInfo durationSecs */
    durationSecs: number;

    /** FreeBulletCannonInfo gotScore */
    gotScore: (number|Long);
}

/** Represents a FreeBulletCannonInfo. */
export class FreeBulletCannonInfo implements IFreeBulletCannonInfo {

    /**
     * Constructs a new FreeBulletCannonInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFreeBulletCannonInfo);

    /** FreeBulletCannonInfo chairId. */
    public chairId: number;

    /** FreeBulletCannonInfo beginTime. */
    public beginTime: (number|Long);

    /** FreeBulletCannonInfo durationSecs. */
    public durationSecs: number;

    /** FreeBulletCannonInfo gotScore. */
    public gotScore: (number|Long);

    /**
     * Creates a new FreeBulletCannonInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FreeBulletCannonInfo instance
     */
    public static create(properties?: IFreeBulletCannonInfo): FreeBulletCannonInfo;

    /**
     * Encodes the specified FreeBulletCannonInfo message. Does not implicitly {@link FreeBulletCannonInfo.verify|verify} messages.
     * @param message FreeBulletCannonInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFreeBulletCannonInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FreeBulletCannonInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FreeBulletCannonInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FreeBulletCannonInfo;
}

/** Properties of a killFreeBulletFish. */
export interface IkillFreeBulletFish {

    /** killFreeBulletFish freeBullet */
    freeBullet: IFreeBulletCannonInfo;
}

/** Represents a killFreeBulletFish. */
export class killFreeBulletFish implements IkillFreeBulletFish {

    /**
     * Constructs a new killFreeBulletFish.
     * @param [properties] Properties to set
     */
    constructor(properties?: IkillFreeBulletFish);

    /** killFreeBulletFish freeBullet. */
    public freeBullet: IFreeBulletCannonInfo;

    /**
     * Creates a new killFreeBulletFish instance using the specified properties.
     * @param [properties] Properties to set
     * @returns killFreeBulletFish instance
     */
    public static create(properties?: IkillFreeBulletFish): killFreeBulletFish;

    /**
     * Encodes the specified killFreeBulletFish message. Does not implicitly {@link killFreeBulletFish.verify|verify} messages.
     * @param message killFreeBulletFish message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IkillFreeBulletFish, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a killFreeBulletFish message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns killFreeBulletFish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): killFreeBulletFish;
}

/** Properties of a syncTableMatesFreeBullets. */
export interface IsyncTableMatesFreeBullets {

    /** syncTableMatesFreeBullets freeBullets */
    freeBullets?: (IFreeBulletCannonInfo|null);
}

/** Represents a syncTableMatesFreeBullets. */
export class syncTableMatesFreeBullets implements IsyncTableMatesFreeBullets {

    /**
     * Constructs a new syncTableMatesFreeBullets.
     * @param [properties] Properties to set
     */
    constructor(properties?: IsyncTableMatesFreeBullets);

    /** syncTableMatesFreeBullets freeBullets. */
    public freeBullets?: (IFreeBulletCannonInfo|null);

    /**
     * Creates a new syncTableMatesFreeBullets instance using the specified properties.
     * @param [properties] Properties to set
     * @returns syncTableMatesFreeBullets instance
     */
    public static create(properties?: IsyncTableMatesFreeBullets): syncTableMatesFreeBullets;

    /**
     * Encodes the specified syncTableMatesFreeBullets message. Does not implicitly {@link syncTableMatesFreeBullets.verify|verify} messages.
     * @param message syncTableMatesFreeBullets message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IsyncTableMatesFreeBullets, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a syncTableMatesFreeBullets message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns syncTableMatesFreeBullets
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syncTableMatesFreeBullets;
}

/** Properties of a DropItem. */
export interface IDropItem {

    /** DropItem itmeId */
    itmeId: number;

    /** DropItem count */
    count: number;
}

/** Represents a DropItem. */
export class DropItem implements IDropItem {

    /**
     * Constructs a new DropItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDropItem);

    /** DropItem itmeId. */
    public itmeId: number;

    /** DropItem count. */
    public count: number;

    /**
     * Creates a new DropItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DropItem instance
     */
    public static create(properties?: IDropItem): DropItem;

    /**
     * Encodes the specified DropItem message. Does not implicitly {@link DropItem.verify|verify} messages.
     * @param message DropItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDropItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DropItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DropItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DropItem;
}

/** Properties of a PropDrop. */
export interface IPropDrop {

    /** PropDrop mainid */
    mainid: number;

    /** PropDrop subId */
    subId: number;

    /** PropDrop fishType */
    fishType: number;

    /** PropDrop dropItem */
    dropItem?: (IDropItem[]|null);
}

/** Represents a PropDrop. */
export class PropDrop implements IPropDrop {

    /**
     * Constructs a new PropDrop.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPropDrop);

    /** PropDrop mainid. */
    public mainid: number;

    /** PropDrop subId. */
    public subId: number;

    /** PropDrop fishType. */
    public fishType: number;

    /** PropDrop dropItem. */
    public dropItem: Array<IDropItem>;

    /**
     * Creates a new PropDrop instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PropDrop instance
     */
    public static create(properties?: IPropDrop): PropDrop;

    /**
     * Encodes the specified PropDrop message. Does not implicitly {@link PropDrop.verify|verify} messages.
     * @param message PropDrop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPropDrop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PropDrop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PropDrop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropDrop;
}

/** Properties of a GameServerPropDropResp. */
export interface IGameServerPropDropResp {

    /** GameServerPropDropResp charid */
    charid: number;

    /** GameServerPropDropResp propDrop */
    propDrop?: (IPropDrop[]|null);

    /** GameServerPropDropResp winScore */
    winScore?: (number|Long|null);

    /** GameServerPropDropResp treasureUpdate */
    treasureUpdate?: (ITreasureUpdate|null);
}

/** Represents a GameServerPropDropResp. */
export class GameServerPropDropResp implements IGameServerPropDropResp {

    /**
     * Constructs a new GameServerPropDropResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerPropDropResp);

    /** GameServerPropDropResp charid. */
    public charid: number;

    /** GameServerPropDropResp propDrop. */
    public propDrop: Array<IPropDrop>;

    /** GameServerPropDropResp winScore. */
    public winScore: (number|Long);

    /** GameServerPropDropResp treasureUpdate. */
    public treasureUpdate?: (ITreasureUpdate|null);

    /**
     * Creates a new GameServerPropDropResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameServerPropDropResp instance
     */
    public static create(properties?: IGameServerPropDropResp): GameServerPropDropResp;

    /**
     * Encodes the specified GameServerPropDropResp message. Does not implicitly {@link GameServerPropDropResp.verify|verify} messages.
     * @param message GameServerPropDropResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameServerPropDropResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameServerPropDropResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerPropDropResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerPropDropResp;
}

/** Properties of a UserLoginReq. */
export interface IUserLoginReq {

    /** UserLoginReq token */
    token: string;

    /** UserLoginReq serverId */
    serverId?: (number|null);

    /** UserLoginReq machineId */
    machineId?: (string|null);

    /** UserLoginReq appStartTimeStamp */
    appStartTimeStamp?: (number|Long|null);

    /** UserLoginReq uniqueMsgID */
    uniqueMsgID?: (number|null);
}

/** Represents a UserLoginReq. */
export class UserLoginReq implements IUserLoginReq {

    /**
     * Constructs a new UserLoginReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserLoginReq);

    /** UserLoginReq token. */
    public token: string;

    /** UserLoginReq serverId. */
    public serverId: number;

    /** UserLoginReq machineId. */
    public machineId: string;

    /** UserLoginReq appStartTimeStamp. */
    public appStartTimeStamp: (number|Long);

    /** UserLoginReq uniqueMsgID. */
    public uniqueMsgID: number;

    /**
     * Creates a new UserLoginReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserLoginReq instance
     */
    public static create(properties?: IUserLoginReq): UserLoginReq;

    /**
     * Encodes the specified UserLoginReq message. Does not implicitly {@link UserLoginReq.verify|verify} messages.
     * @param message UserLoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserLoginReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserLoginReq;
}

/** Properties of a UserLoginResp. */
export interface IUserLoginResp {

    /** UserLoginResp user */
    user?: (IUser|null);

    /** UserLoginResp loginServerId */
    loginServerId?: (number|null);

    /** UserLoginResp cannonInfo */
    cannonInfo?: (ICannonInfo|null);

    /** UserLoginResp uniqueMsgID */
    uniqueMsgID?: (number|null);

    /** UserLoginResp isSuc */
    isSuc?: (boolean|null);

    /** UserLoginResp secondaryCannonInfo */
    secondaryCannonInfo?: (ISecondaryCannonInfo|null);

    /** UserLoginResp newPlayerGuide */
    newPlayerGuide?: (string|null);

    /** UserLoginResp moduleGuideInfo */
    moduleGuideInfo?: (string|null);

    /** UserLoginResp touchGuideInfo */
    touchGuideInfo?: (string|null);
}

/** Represents a UserLoginResp. */
export class UserLoginResp implements IUserLoginResp {

    /**
     * Constructs a new UserLoginResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserLoginResp);

    /** UserLoginResp user. */
    public user?: (IUser|null);

    /** UserLoginResp loginServerId. */
    public loginServerId: number;

    /** UserLoginResp cannonInfo. */
    public cannonInfo?: (ICannonInfo|null);

    /** UserLoginResp uniqueMsgID. */
    public uniqueMsgID: number;

    /** UserLoginResp isSuc. */
    public isSuc: boolean;

    /** UserLoginResp secondaryCannonInfo. */
    public secondaryCannonInfo?: (ISecondaryCannonInfo|null);

    /** UserLoginResp newPlayerGuide. */
    public newPlayerGuide: string;

    /** UserLoginResp moduleGuideInfo. */
    public moduleGuideInfo: string;

    /** UserLoginResp touchGuideInfo. */
    public touchGuideInfo: string;

    /**
     * Creates a new UserLoginResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserLoginResp instance
     */
    public static create(properties?: IUserLoginResp): UserLoginResp;

    /**
     * Encodes the specified UserLoginResp message. Does not implicitly {@link UserLoginResp.verify|verify} messages.
     * @param message UserLoginResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserLoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserLoginResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserLoginResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserLoginResp;
}

/** Properties of a UserGuideTaskReq. */
export interface IUserGuideTaskReq {

    /** UserGuideTaskReq guideTaskId */
    guideTaskId: string;

    /** UserGuideTaskReq guideInfo */
    guideInfo?: (string|null);
}

/** Represents a UserGuideTaskReq. */
export class UserGuideTaskReq implements IUserGuideTaskReq {

    /**
     * Constructs a new UserGuideTaskReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserGuideTaskReq);

    /** UserGuideTaskReq guideTaskId. */
    public guideTaskId: string;

    /** UserGuideTaskReq guideInfo. */
    public guideInfo: string;

    /**
     * Creates a new UserGuideTaskReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserGuideTaskReq instance
     */
    public static create(properties?: IUserGuideTaskReq): UserGuideTaskReq;

    /**
     * Encodes the specified UserGuideTaskReq message. Does not implicitly {@link UserGuideTaskReq.verify|verify} messages.
     * @param message UserGuideTaskReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserGuideTaskReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserGuideTaskReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserGuideTaskReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserGuideTaskReq;
}

/** Properties of a UserGuideReq. */
export interface IUserGuideReq {

    /** UserGuideReq guideType */
    guideType: number;

    /** UserGuideReq guideInfo */
    guideInfo?: (string|null);
}

/** Represents a UserGuideReq. */
export class UserGuideReq implements IUserGuideReq {

    /**
     * Constructs a new UserGuideReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserGuideReq);

    /** UserGuideReq guideType. */
    public guideType: number;

    /** UserGuideReq guideInfo. */
    public guideInfo: string;

    /**
     * Creates a new UserGuideReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserGuideReq instance
     */
    public static create(properties?: IUserGuideReq): UserGuideReq;

    /**
     * Encodes the specified UserGuideReq message. Does not implicitly {@link UserGuideReq.verify|verify} messages.
     * @param message UserGuideReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserGuideReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserGuideReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserGuideReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserGuideReq;
}

/** Properties of a UserGuideResp. */
export interface IUserGuideResp {

    /** UserGuideResp result */
    result: string;

    /** UserGuideResp giveUserAward */
    giveUserAward?: (IGiveUserAward|null);
}

/** Represents a UserGuideResp. */
export class UserGuideResp implements IUserGuideResp {

    /**
     * Constructs a new UserGuideResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserGuideResp);

    /** UserGuideResp result. */
    public result: string;

    /** UserGuideResp giveUserAward. */
    public giveUserAward?: (IGiveUserAward|null);

    /**
     * Creates a new UserGuideResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserGuideResp instance
     */
    public static create(properties?: IUserGuideResp): UserGuideResp;

    /**
     * Encodes the specified UserGuideResp message. Does not implicitly {@link UserGuideResp.verify|verify} messages.
     * @param message UserGuideResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserGuideResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserGuideResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserGuideResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserGuideResp;
}

/** Properties of a GiveUserAward. */
export interface IGiveUserAward {

    /** GiveUserAward rewards */
    rewards?: (IToolItem[]|null);

    /** GiveUserAward treasureUpdate */
    treasureUpdate: ITreasureUpdate;
}

/** Represents a GiveUserAward. */
export class GiveUserAward implements IGiveUserAward {

    /**
     * Constructs a new GiveUserAward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGiveUserAward);

    /** GiveUserAward rewards. */
    public rewards: Array<IToolItem>;

    /** GiveUserAward treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /**
     * Creates a new GiveUserAward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GiveUserAward instance
     */
    public static create(properties?: IGiveUserAward): GiveUserAward;

    /**
     * Encodes the specified GiveUserAward message. Does not implicitly {@link GiveUserAward.verify|verify} messages.
     * @param message GiveUserAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGiveUserAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GiveUserAward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GiveUserAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GiveUserAward;
}

/** Properties of an AcceptTaskResp. */
export interface IAcceptTaskResp {

    /** AcceptTaskResp taskId */
    taskId: string;

    /** AcceptTaskResp type */
    type: number;

    /** AcceptTaskResp notice */
    notice: string;

    /** AcceptTaskResp IconType */
    IconType: string;

    /** AcceptTaskResp ShowType */
    ShowType: number;

    /** AcceptTaskResp totalVal */
    totalVal: number;

    /** AcceptTaskResp awards */
    awards?: (IToolItem[]|null);
}

/** Represents an AcceptTaskResp. */
export class AcceptTaskResp implements IAcceptTaskResp {

    /**
     * Constructs a new AcceptTaskResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAcceptTaskResp);

    /** AcceptTaskResp taskId. */
    public taskId: string;

    /** AcceptTaskResp type. */
    public type: number;

    /** AcceptTaskResp notice. */
    public notice: string;

    /** AcceptTaskResp IconType. */
    public IconType: string;

    /** AcceptTaskResp ShowType. */
    public ShowType: number;

    /** AcceptTaskResp totalVal. */
    public totalVal: number;

    /** AcceptTaskResp awards. */
    public awards: Array<IToolItem>;

    /**
     * Creates a new AcceptTaskResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AcceptTaskResp instance
     */
    public static create(properties?: IAcceptTaskResp): AcceptTaskResp;

    /**
     * Encodes the specified AcceptTaskResp message. Does not implicitly {@link AcceptTaskResp.verify|verify} messages.
     * @param message AcceptTaskResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAcceptTaskResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AcceptTaskResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AcceptTaskResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AcceptTaskResp;
}

/** Properties of a TaskStatus. */
export interface ITaskStatus {

    /** TaskStatus taskId */
    taskId: string;

    /** TaskStatus count */
    count: number;

    /** TaskStatus totalVal */
    totalVal: number;

    /** TaskStatus status */
    status: number;
}

/** Represents a TaskStatus. */
export class TaskStatus implements ITaskStatus {

    /**
     * Constructs a new TaskStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITaskStatus);

    /** TaskStatus taskId. */
    public taskId: string;

    /** TaskStatus count. */
    public count: number;

    /** TaskStatus totalVal. */
    public totalVal: number;

    /** TaskStatus status. */
    public status: number;

    /**
     * Creates a new TaskStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TaskStatus instance
     */
    public static create(properties?: ITaskStatus): TaskStatus;

    /**
     * Encodes the specified TaskStatus message. Does not implicitly {@link TaskStatus.verify|verify} messages.
     * @param message TaskStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITaskStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TaskStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TaskStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TaskStatus;
}

/** Properties of a ReceiveRewardTaskReq. */
export interface IReceiveRewardTaskReq {

    /** ReceiveRewardTaskReq taskFishId */
    taskFishId: string;
}

/** Represents a ReceiveRewardTaskReq. */
export class ReceiveRewardTaskReq implements IReceiveRewardTaskReq {

    /**
     * Constructs a new ReceiveRewardTaskReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReceiveRewardTaskReq);

    /** ReceiveRewardTaskReq taskFishId. */
    public taskFishId: string;

    /**
     * Creates a new ReceiveRewardTaskReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReceiveRewardTaskReq instance
     */
    public static create(properties?: IReceiveRewardTaskReq): ReceiveRewardTaskReq;

    /**
     * Encodes the specified ReceiveRewardTaskReq message. Does not implicitly {@link ReceiveRewardTaskReq.verify|verify} messages.
     * @param message ReceiveRewardTaskReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReceiveRewardTaskReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReceiveRewardTaskReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReceiveRewardTaskReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReceiveRewardTaskReq;
}

/** Properties of a ReceiveRewardTaskResp. */
export interface IReceiveRewardTaskResp {

    /** ReceiveRewardTaskResp taskId */
    taskId: string;

    /** ReceiveRewardTaskResp tr */
    tr: ITreasureUpdate;
}

/** Represents a ReceiveRewardTaskResp. */
export class ReceiveRewardTaskResp implements IReceiveRewardTaskResp {

    /**
     * Constructs a new ReceiveRewardTaskResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReceiveRewardTaskResp);

    /** ReceiveRewardTaskResp taskId. */
    public taskId: string;

    /** ReceiveRewardTaskResp tr. */
    public tr: ITreasureUpdate;

    /**
     * Creates a new ReceiveRewardTaskResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReceiveRewardTaskResp instance
     */
    public static create(properties?: IReceiveRewardTaskResp): ReceiveRewardTaskResp;

    /**
     * Encodes the specified ReceiveRewardTaskResp message. Does not implicitly {@link ReceiveRewardTaskResp.verify|verify} messages.
     * @param message ReceiveRewardTaskResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReceiveRewardTaskResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReceiveRewardTaskResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReceiveRewardTaskResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReceiveRewardTaskResp;
}

/** Properties of an OfferTaskFishItem. */
export interface IOfferTaskFishItem {

    /** OfferTaskFishItem fishType */
    fishType: number;

    /** OfferTaskFishItem fishCount */
    fishCount: number;
}

/** Represents an OfferTaskFishItem. */
export class OfferTaskFishItem implements IOfferTaskFishItem {

    /**
     * Constructs a new OfferTaskFishItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOfferTaskFishItem);

    /** OfferTaskFishItem fishType. */
    public fishType: number;

    /** OfferTaskFishItem fishCount. */
    public fishCount: number;

    /**
     * Creates a new OfferTaskFishItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OfferTaskFishItem instance
     */
    public static create(properties?: IOfferTaskFishItem): OfferTaskFishItem;

    /**
     * Encodes the specified OfferTaskFishItem message. Does not implicitly {@link OfferTaskFishItem.verify|verify} messages.
     * @param message OfferTaskFishItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOfferTaskFishItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OfferTaskFishItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OfferTaskFishItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OfferTaskFishItem;
}

/** Properties of an OfferTaskStatusItem. */
export interface IOfferTaskStatusItem {

    /** OfferTaskStatusItem fishType */
    fishType: number;

    /** OfferTaskStatusItem count */
    count: number;

    /** OfferTaskStatusItem totalVal */
    totalVal: number;
}

/** Represents an OfferTaskStatusItem. */
export class OfferTaskStatusItem implements IOfferTaskStatusItem {

    /**
     * Constructs a new OfferTaskStatusItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOfferTaskStatusItem);

    /** OfferTaskStatusItem fishType. */
    public fishType: number;

    /** OfferTaskStatusItem count. */
    public count: number;

    /** OfferTaskStatusItem totalVal. */
    public totalVal: number;

    /**
     * Creates a new OfferTaskStatusItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OfferTaskStatusItem instance
     */
    public static create(properties?: IOfferTaskStatusItem): OfferTaskStatusItem;

    /**
     * Encodes the specified OfferTaskStatusItem message. Does not implicitly {@link OfferTaskStatusItem.verify|verify} messages.
     * @param message OfferTaskStatusItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOfferTaskStatusItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OfferTaskStatusItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OfferTaskStatusItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OfferTaskStatusItem;
}

/** Properties of an OfferTaskStatus. */
export interface IOfferTaskStatus {

    /** OfferTaskStatus OfferTaskStatusItem */
    OfferTaskStatusItem?: (IOfferTaskStatusItem[]|null);
}

/** Represents an OfferTaskStatus. */
export class OfferTaskStatus implements IOfferTaskStatus {

    /**
     * Constructs a new OfferTaskStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOfferTaskStatus);

    /** OfferTaskStatus OfferTaskStatusItem. */
    public OfferTaskStatusItem: Array<IOfferTaskStatusItem>;

    /**
     * Creates a new OfferTaskStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OfferTaskStatus instance
     */
    public static create(properties?: IOfferTaskStatus): OfferTaskStatus;

    /**
     * Encodes the specified OfferTaskStatus message. Does not implicitly {@link OfferTaskStatus.verify|verify} messages.
     * @param message OfferTaskStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOfferTaskStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OfferTaskStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OfferTaskStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OfferTaskStatus;
}

/** Properties of an AcceptOfferTaskResp. */
export interface IAcceptOfferTaskResp {

    /** AcceptOfferTaskResp offerTaskFishItems */
    offerTaskFishItems?: (IOfferTaskFishItem[]|null);

    /** AcceptOfferTaskResp time */
    time: (number|Long);

    /** AcceptOfferTaskResp awards */
    awards?: (IToolItem[]|null);

    /** AcceptOfferTaskResp type */
    type: number;
}

/** Represents an AcceptOfferTaskResp. */
export class AcceptOfferTaskResp implements IAcceptOfferTaskResp {

    /**
     * Constructs a new AcceptOfferTaskResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAcceptOfferTaskResp);

    /** AcceptOfferTaskResp offerTaskFishItems. */
    public offerTaskFishItems: Array<IOfferTaskFishItem>;

    /** AcceptOfferTaskResp time. */
    public time: (number|Long);

    /** AcceptOfferTaskResp awards. */
    public awards: Array<IToolItem>;

    /** AcceptOfferTaskResp type. */
    public type: number;

    /**
     * Creates a new AcceptOfferTaskResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AcceptOfferTaskResp instance
     */
    public static create(properties?: IAcceptOfferTaskResp): AcceptOfferTaskResp;

    /**
     * Encodes the specified AcceptOfferTaskResp message. Does not implicitly {@link AcceptOfferTaskResp.verify|verify} messages.
     * @param message AcceptOfferTaskResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAcceptOfferTaskResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AcceptOfferTaskResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AcceptOfferTaskResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AcceptOfferTaskResp;
}

/** Properties of an OfferTaskRankItem. */
export interface IOfferTaskRankItem {

    /** OfferTaskRankItem chairId */
    chairId: number;

    /** OfferTaskRankItem rank */
    rank: number;
}

/** Represents an OfferTaskRankItem. */
export class OfferTaskRankItem implements IOfferTaskRankItem {

    /**
     * Constructs a new OfferTaskRankItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOfferTaskRankItem);

    /** OfferTaskRankItem chairId. */
    public chairId: number;

    /** OfferTaskRankItem rank. */
    public rank: number;

    /**
     * Creates a new OfferTaskRankItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OfferTaskRankItem instance
     */
    public static create(properties?: IOfferTaskRankItem): OfferTaskRankItem;

    /**
     * Encodes the specified OfferTaskRankItem message. Does not implicitly {@link OfferTaskRankItem.verify|verify} messages.
     * @param message OfferTaskRankItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOfferTaskRankItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OfferTaskRankItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OfferTaskRankItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OfferTaskRankItem;
}

/** Properties of an OfferTaskRankResp. */
export interface IOfferTaskRankResp {

    /** OfferTaskRankResp offerTaskRankItems */
    offerTaskRankItems?: (IOfferTaskRankItem[]|null);
}

/** Represents an OfferTaskRankResp. */
export class OfferTaskRankResp implements IOfferTaskRankResp {

    /**
     * Constructs a new OfferTaskRankResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOfferTaskRankResp);

    /** OfferTaskRankResp offerTaskRankItems. */
    public offerTaskRankItems: Array<IOfferTaskRankItem>;

    /**
     * Creates a new OfferTaskRankResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OfferTaskRankResp instance
     */
    public static create(properties?: IOfferTaskRankResp): OfferTaskRankResp;

    /**
     * Encodes the specified OfferTaskRankResp message. Does not implicitly {@link OfferTaskRankResp.verify|verify} messages.
     * @param message OfferTaskRankResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOfferTaskRankResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OfferTaskRankResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OfferTaskRankResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OfferTaskRankResp;
}

/** Properties of a ReceiveOfferRewardTaskResp. */
export interface IReceiveOfferRewardTaskResp {

    /** ReceiveOfferRewardTaskResp chairId */
    chairId: number;

    /** ReceiveOfferRewardTaskResp tr */
    tr: ITreasureUpdate;

    /** ReceiveOfferRewardTaskResp addItem */
    addItem?: (IToolItem[]|null);
}

/** Represents a ReceiveOfferRewardTaskResp. */
export class ReceiveOfferRewardTaskResp implements IReceiveOfferRewardTaskResp {

    /**
     * Constructs a new ReceiveOfferRewardTaskResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReceiveOfferRewardTaskResp);

    /** ReceiveOfferRewardTaskResp chairId. */
    public chairId: number;

    /** ReceiveOfferRewardTaskResp tr. */
    public tr: ITreasureUpdate;

    /** ReceiveOfferRewardTaskResp addItem. */
    public addItem: Array<IToolItem>;

    /**
     * Creates a new ReceiveOfferRewardTaskResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReceiveOfferRewardTaskResp instance
     */
    public static create(properties?: IReceiveOfferRewardTaskResp): ReceiveOfferRewardTaskResp;

    /**
     * Encodes the specified ReceiveOfferRewardTaskResp message. Does not implicitly {@link ReceiveOfferRewardTaskResp.verify|verify} messages.
     * @param message ReceiveOfferRewardTaskResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReceiveOfferRewardTaskResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReceiveOfferRewardTaskResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReceiveOfferRewardTaskResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReceiveOfferRewardTaskResp;
}

/** GoodsTypeEnum enum. */
export enum GoodsTypeEnum {
    Type_JiangQuan = 1,
    Type_Diamond = 2
}

/** GoodsKindEnum enum. */
export enum GoodsKindEnum {
    Kind_GameItem = 0,
    Kind_Cards = 1,
    Kind_Life = 2,
    Kind_Electronic = 3,
    Kind_GameProduct = 4,
    Kind_Others = 5
}

/** Properties of a GoodsInfo. */
export interface IGoodsInfo {

    /** GoodsInfo goodsIndex */
    goodsIndex: number;

    /** GoodsInfo boughtNum */
    boughtNum?: (number|Long|null);

    /** GoodsInfo boughtTimes */
    boughtTimes?: (number|null);
}

/** Represents a GoodsInfo. */
export class GoodsInfo implements IGoodsInfo {

    /**
     * Constructs a new GoodsInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGoodsInfo);

    /** GoodsInfo goodsIndex. */
    public goodsIndex: number;

    /** GoodsInfo boughtNum. */
    public boughtNum: (number|Long);

    /** GoodsInfo boughtTimes. */
    public boughtTimes: number;

    /**
     * Creates a new GoodsInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GoodsInfo instance
     */
    public static create(properties?: IGoodsInfo): GoodsInfo;

    /**
     * Encodes the specified GoodsInfo message. Does not implicitly {@link GoodsInfo.verify|verify} messages.
     * @param message GoodsInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGoodsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GoodsInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GoodsInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GoodsInfo;
}

/** Properties of a JqGoodsListResp. */
export interface IJqGoodsListResp {

    /** JqGoodsListResp storeType */
    storeType: number;

    /** JqGoodsListResp jhGoods */
    jhGoods?: (IGoodsInfo|null);

    /** JqGoodsListResp nextRefreshTiem */
    nextRefreshTiem?: (number|Long|null);

    /** JqGoodsListResp goods */
    goods?: (IGoodsInfo[]|null);
}

/** Represents a JqGoodsListResp. */
export class JqGoodsListResp implements IJqGoodsListResp {

    /**
     * Constructs a new JqGoodsListResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IJqGoodsListResp);

    /** JqGoodsListResp storeType. */
    public storeType: number;

    /** JqGoodsListResp jhGoods. */
    public jhGoods?: (IGoodsInfo|null);

    /** JqGoodsListResp nextRefreshTiem. */
    public nextRefreshTiem: (number|Long);

    /** JqGoodsListResp goods. */
    public goods: Array<IGoodsInfo>;

    /**
     * Creates a new JqGoodsListResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JqGoodsListResp instance
     */
    public static create(properties?: IJqGoodsListResp): JqGoodsListResp;

    /**
     * Encodes the specified JqGoodsListResp message. Does not implicitly {@link JqGoodsListResp.verify|verify} messages.
     * @param message JqGoodsListResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IJqGoodsListResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a JqGoodsListResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JqGoodsListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): JqGoodsListResp;
}

/** Properties of a DiamondGoodsListResp. */
export interface IDiamondGoodsListResp {

    /** DiamondGoodsListResp storeType */
    storeType: number;

    /** DiamondGoodsListResp goods */
    goods?: (IGoodsInfo[]|null);

    /** DiamondGoodsListResp freeFreshtime */
    freeFreshtime: (number|Long);

    /** DiamondGoodsListResp payFreshcost */
    payFreshcost?: (number|null);

    /** DiamondGoodsListResp tr */
    tr?: (ITreasureUpdate|null);
}

/** Represents a DiamondGoodsListResp. */
export class DiamondGoodsListResp implements IDiamondGoodsListResp {

    /**
     * Constructs a new DiamondGoodsListResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDiamondGoodsListResp);

    /** DiamondGoodsListResp storeType. */
    public storeType: number;

    /** DiamondGoodsListResp goods. */
    public goods: Array<IGoodsInfo>;

    /** DiamondGoodsListResp freeFreshtime. */
    public freeFreshtime: (number|Long);

    /** DiamondGoodsListResp payFreshcost. */
    public payFreshcost: number;

    /** DiamondGoodsListResp tr. */
    public tr?: (ITreasureUpdate|null);

    /**
     * Creates a new DiamondGoodsListResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DiamondGoodsListResp instance
     */
    public static create(properties?: IDiamondGoodsListResp): DiamondGoodsListResp;

    /**
     * Encodes the specified DiamondGoodsListResp message. Does not implicitly {@link DiamondGoodsListResp.verify|verify} messages.
     * @param message DiamondGoodsListResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDiamondGoodsListResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DiamondGoodsListResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DiamondGoodsListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DiamondGoodsListResp;
}

/** Properties of a refreshDiamonStoreGoods. */
export interface IrefreshDiamonStoreGoods {

    /** refreshDiamonStoreGoods freeRefresh */
    freeRefresh: boolean;
}

/** Represents a refreshDiamonStoreGoods. */
export class refreshDiamonStoreGoods implements IrefreshDiamonStoreGoods {

    /**
     * Constructs a new refreshDiamonStoreGoods.
     * @param [properties] Properties to set
     */
    constructor(properties?: IrefreshDiamonStoreGoods);

    /** refreshDiamonStoreGoods freeRefresh. */
    public freeRefresh: boolean;

    /**
     * Creates a new refreshDiamonStoreGoods instance using the specified properties.
     * @param [properties] Properties to set
     * @returns refreshDiamonStoreGoods instance
     */
    public static create(properties?: IrefreshDiamonStoreGoods): refreshDiamonStoreGoods;

    /**
     * Encodes the specified refreshDiamonStoreGoods message. Does not implicitly {@link refreshDiamonStoreGoods.verify|verify} messages.
     * @param message refreshDiamonStoreGoods message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IrefreshDiamonStoreGoods, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a refreshDiamonStoreGoods message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns refreshDiamonStoreGoods
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): refreshDiamonStoreGoods;
}

/** Properties of a buyGoodsReq. */
export interface IbuyGoodsReq {

    /** buyGoodsReq goodsIndex */
    goodsIndex: number;

    /** buyGoodsReq num */
    num: number;

    /** buyGoodsReq address */
    address?: (string|null);

    /** buyGoodsReq verifyCode */
    verifyCode?: (string|null);

    /** buyGoodsReq phoneNumber */
    phoneNumber?: (string|null);

    /** buyGoodsReq chargePhone */
    chargePhone?: (string|null);
}

/** Represents a buyGoodsReq. */
export class buyGoodsReq implements IbuyGoodsReq {

    /**
     * Constructs a new buyGoodsReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IbuyGoodsReq);

    /** buyGoodsReq goodsIndex. */
    public goodsIndex: number;

    /** buyGoodsReq num. */
    public num: number;

    /** buyGoodsReq address. */
    public address: string;

    /** buyGoodsReq verifyCode. */
    public verifyCode: string;

    /** buyGoodsReq phoneNumber. */
    public phoneNumber: string;

    /** buyGoodsReq chargePhone. */
    public chargePhone: string;

    /**
     * Creates a new buyGoodsReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns buyGoodsReq instance
     */
    public static create(properties?: IbuyGoodsReq): buyGoodsReq;

    /**
     * Encodes the specified buyGoodsReq message. Does not implicitly {@link buyGoodsReq.verify|verify} messages.
     * @param message buyGoodsReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IbuyGoodsReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a buyGoodsReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns buyGoodsReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buyGoodsReq;
}

/** Properties of a buyGoodsResp. */
export interface IbuyGoodsResp {

    /** buyGoodsResp isSuc */
    isSuc: boolean;

    /** buyGoodsResp tr */
    tr: ITreasureUpdate;
}

/** Represents a buyGoodsResp. */
export class buyGoodsResp implements IbuyGoodsResp {

    /**
     * Constructs a new buyGoodsResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IbuyGoodsResp);

    /** buyGoodsResp isSuc. */
    public isSuc: boolean;

    /** buyGoodsResp tr. */
    public tr: ITreasureUpdate;

    /**
     * Creates a new buyGoodsResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns buyGoodsResp instance
     */
    public static create(properties?: IbuyGoodsResp): buyGoodsResp;

    /**
     * Encodes the specified buyGoodsResp message. Does not implicitly {@link buyGoodsResp.verify|verify} messages.
     * @param message buyGoodsResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IbuyGoodsResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a buyGoodsResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns buyGoodsResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buyGoodsResp;
}

/** Properties of a BuyRecord. */
export interface IBuyRecord {

    /** BuyRecord orderId */
    orderId: string;

    /** BuyRecord goodsName */
    goodsName: string;

    /** BuyRecord buyNum */
    buyNum: number;

    /** BuyRecord orderStatus */
    orderStatus: number;

    /** BuyRecord strackId */
    strackId?: (string|null);

    /** BuyRecord buyTime */
    buyTime: string;

    /** BuyRecord goodsIndex */
    goodsIndex?: (number|null);
}

/** Represents a BuyRecord. */
export class BuyRecord implements IBuyRecord {

    /**
     * Constructs a new BuyRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBuyRecord);

    /** BuyRecord orderId. */
    public orderId: string;

    /** BuyRecord goodsName. */
    public goodsName: string;

    /** BuyRecord buyNum. */
    public buyNum: number;

    /** BuyRecord orderStatus. */
    public orderStatus: number;

    /** BuyRecord strackId. */
    public strackId: string;

    /** BuyRecord buyTime. */
    public buyTime: string;

    /** BuyRecord goodsIndex. */
    public goodsIndex: number;

    /**
     * Creates a new BuyRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BuyRecord instance
     */
    public static create(properties?: IBuyRecord): BuyRecord;

    /**
     * Encodes the specified BuyRecord message. Does not implicitly {@link BuyRecord.verify|verify} messages.
     * @param message BuyRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBuyRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BuyRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BuyRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BuyRecord;
}

/** Properties of a userBoughtRecordsResp. */
export interface IuserBoughtRecordsResp {

    /** userBoughtRecordsResp records */
    records?: (IBuyRecord[]|null);
}

/** Represents a userBoughtRecordsResp. */
export class userBoughtRecordsResp implements IuserBoughtRecordsResp {

    /**
     * Constructs a new userBoughtRecordsResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IuserBoughtRecordsResp);

    /** userBoughtRecordsResp records. */
    public records: Array<IBuyRecord>;

    /**
     * Creates a new userBoughtRecordsResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns userBoughtRecordsResp instance
     */
    public static create(properties?: IuserBoughtRecordsResp): userBoughtRecordsResp;

    /**
     * Encodes the specified userBoughtRecordsResp message. Does not implicitly {@link userBoughtRecordsResp.verify|verify} messages.
     * @param message userBoughtRecordsResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IuserBoughtRecordsResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a userBoughtRecordsResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns userBoughtRecordsResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): userBoughtRecordsResp;
}

/** Properties of a LoginServerGameTypeItem. */
export interface ILoginServerGameTypeItem {

    /** LoginServerGameTypeItem typeid */
    typeid: number;

    /** LoginServerGameTypeItem typename */
    typename: string;

    /** LoginServerGameTypeItem minCannon */
    minCannon: number;

    /** LoginServerGameTypeItem maxCannon */
    maxCannon: number;

    /** LoginServerGameTypeItem kindId */
    kindId: number;

    /** LoginServerGameTypeItem selectSit */
    selectSit?: (number|null);
}

/** Represents a LoginServerGameTypeItem. */
export class LoginServerGameTypeItem implements ILoginServerGameTypeItem {

    /**
     * Constructs a new LoginServerGameTypeItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginServerGameTypeItem);

    /** LoginServerGameTypeItem typeid. */
    public typeid: number;

    /** LoginServerGameTypeItem typename. */
    public typename: string;

    /** LoginServerGameTypeItem minCannon. */
    public minCannon: number;

    /** LoginServerGameTypeItem maxCannon. */
    public maxCannon: number;

    /** LoginServerGameTypeItem kindId. */
    public kindId: number;

    /** LoginServerGameTypeItem selectSit. */
    public selectSit: number;

    /**
     * Creates a new LoginServerGameTypeItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginServerGameTypeItem instance
     */
    public static create(properties?: ILoginServerGameTypeItem): LoginServerGameTypeItem;

    /**
     * Encodes the specified LoginServerGameTypeItem message. Does not implicitly {@link LoginServerGameTypeItem.verify|verify} messages.
     * @param message LoginServerGameTypeItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginServerGameTypeItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginServerGameTypeItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginServerGameTypeItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginServerGameTypeItem;
}

/** Properties of a LoginServerGameTypeItemResp. */
export interface ILoginServerGameTypeItemResp {

    /** LoginServerGameTypeItemResp loginServerGameTypeItems */
    loginServerGameTypeItems?: (ILoginServerGameTypeItem[]|null);
}

/** Represents a LoginServerGameTypeItemResp. */
export class LoginServerGameTypeItemResp implements ILoginServerGameTypeItemResp {

    /**
     * Constructs a new LoginServerGameTypeItemResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginServerGameTypeItemResp);

    /** LoginServerGameTypeItemResp loginServerGameTypeItems. */
    public loginServerGameTypeItems: Array<ILoginServerGameTypeItem>;

    /**
     * Creates a new LoginServerGameTypeItemResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginServerGameTypeItemResp instance
     */
    public static create(properties?: ILoginServerGameTypeItemResp): LoginServerGameTypeItemResp;

    /**
     * Encodes the specified LoginServerGameTypeItemResp message. Does not implicitly {@link LoginServerGameTypeItemResp.verify|verify} messages.
     * @param message LoginServerGameTypeItemResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginServerGameTypeItemResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginServerGameTypeItemResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginServerGameTypeItemResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginServerGameTypeItemResp;
}

/** Properties of a LoginServerRoomInfoReq. */
export interface ILoginServerRoomInfoReq {

    /** LoginServerRoomInfoReq typeid */
    typeid: number;

    /** LoginServerRoomInfoReq kindId */
    kindId: number;
}

/** Represents a LoginServerRoomInfoReq. */
export class LoginServerRoomInfoReq implements ILoginServerRoomInfoReq {

    /**
     * Constructs a new LoginServerRoomInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginServerRoomInfoReq);

    /** LoginServerRoomInfoReq typeid. */
    public typeid: number;

    /** LoginServerRoomInfoReq kindId. */
    public kindId: number;

    /**
     * Creates a new LoginServerRoomInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginServerRoomInfoReq instance
     */
    public static create(properties?: ILoginServerRoomInfoReq): LoginServerRoomInfoReq;

    /**
     * Encodes the specified LoginServerRoomInfoReq message. Does not implicitly {@link LoginServerRoomInfoReq.verify|verify} messages.
     * @param message LoginServerRoomInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginServerRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginServerRoomInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginServerRoomInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginServerRoomInfoReq;
}

/** Properties of a ServerRoomInfoItem. */
export interface IServerRoomInfoItem {

    /** ServerRoomInfoItem servierId */
    servierId: number;

    /** ServerRoomInfoItem roomName */
    roomName: string;

    /** ServerRoomInfoItem serverType */
    serverType: number;

    /** ServerRoomInfoItem roomType */
    roomType: number;

    /** ServerRoomInfoItem minCannon */
    minCannon?: (number|null);

    /** ServerRoomInfoItem viplimit */
    viplimit?: (number|null);

    /** ServerRoomInfoItem scoreLimit */
    scoreLimit?: (number|null);
}

/** Represents a ServerRoomInfoItem. */
export class ServerRoomInfoItem implements IServerRoomInfoItem {

    /**
     * Constructs a new ServerRoomInfoItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerRoomInfoItem);

    /** ServerRoomInfoItem servierId. */
    public servierId: number;

    /** ServerRoomInfoItem roomName. */
    public roomName: string;

    /** ServerRoomInfoItem serverType. */
    public serverType: number;

    /** ServerRoomInfoItem roomType. */
    public roomType: number;

    /** ServerRoomInfoItem minCannon. */
    public minCannon: number;

    /** ServerRoomInfoItem viplimit. */
    public viplimit: number;

    /** ServerRoomInfoItem scoreLimit. */
    public scoreLimit: number;

    /**
     * Creates a new ServerRoomInfoItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerRoomInfoItem instance
     */
    public static create(properties?: IServerRoomInfoItem): ServerRoomInfoItem;

    /**
     * Encodes the specified ServerRoomInfoItem message. Does not implicitly {@link ServerRoomInfoItem.verify|verify} messages.
     * @param message ServerRoomInfoItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerRoomInfoItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerRoomInfoItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerRoomInfoItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRoomInfoItem;
}

/** Properties of a LoginServerGameServerRoomResp. */
export interface ILoginServerGameServerRoomResp {

    /** LoginServerGameServerRoomResp serverRoomInfoItems */
    serverRoomInfoItems?: (IServerRoomInfoItem[]|null);
}

/** Represents a LoginServerGameServerRoomResp. */
export class LoginServerGameServerRoomResp implements ILoginServerGameServerRoomResp {

    /**
     * Constructs a new LoginServerGameServerRoomResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginServerGameServerRoomResp);

    /** LoginServerGameServerRoomResp serverRoomInfoItems. */
    public serverRoomInfoItems: Array<IServerRoomInfoItem>;

    /**
     * Creates a new LoginServerGameServerRoomResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginServerGameServerRoomResp instance
     */
    public static create(properties?: ILoginServerGameServerRoomResp): LoginServerGameServerRoomResp;

    /**
     * Encodes the specified LoginServerGameServerRoomResp message. Does not implicitly {@link LoginServerGameServerRoomResp.verify|verify} messages.
     * @param message LoginServerGameServerRoomResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginServerGameServerRoomResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginServerGameServerRoomResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginServerGameServerRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginServerGameServerRoomResp;
}

/** Properties of a TableInfo. */
export interface ITableInfo {

    /** TableInfo displayId */
    displayId: number;

    /** TableInfo tableId */
    tableId: number;

    /** TableInfo serverId */
    serverId: number;

    /** TableInfo totalCount */
    totalCount: number;

    /** TableInfo count */
    count: number;
}

/** Represents a TableInfo. */
export class TableInfo implements ITableInfo {

    /**
     * Constructs a new TableInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITableInfo);

    /** TableInfo displayId. */
    public displayId: number;

    /** TableInfo tableId. */
    public tableId: number;

    /** TableInfo serverId. */
    public serverId: number;

    /** TableInfo totalCount. */
    public totalCount: number;

    /** TableInfo count. */
    public count: number;

    /**
     * Creates a new TableInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TableInfo instance
     */
    public static create(properties?: ITableInfo): TableInfo;

    /**
     * Encodes the specified TableInfo message. Does not implicitly {@link TableInfo.verify|verify} messages.
     * @param message TableInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TableInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TableInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TableInfo;
}

/** Properties of an AreaInfo. */
export interface IAreaInfo {

    /** AreaInfo areaId */
    areaId: number;

    /** AreaInfo type */
    type: number;

    /** AreaInfo tableInfos */
    tableInfos?: (ITableInfo[]|null);
}

/** Represents an AreaInfo. */
export class AreaInfo implements IAreaInfo {

    /**
     * Constructs a new AreaInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAreaInfo);

    /** AreaInfo areaId. */
    public areaId: number;

    /** AreaInfo type. */
    public type: number;

    /** AreaInfo tableInfos. */
    public tableInfos: Array<ITableInfo>;

    /**
     * Creates a new AreaInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AreaInfo instance
     */
    public static create(properties?: IAreaInfo): AreaInfo;

    /**
     * Encodes the specified AreaInfo message. Does not implicitly {@link AreaInfo.verify|verify} messages.
     * @param message AreaInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAreaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AreaInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AreaInfo;
}

/** Properties of an AreaInfoReq. */
export interface IAreaInfoReq {

    /** AreaInfoReq type */
    type: number;
}

/** Represents an AreaInfoReq. */
export class AreaInfoReq implements IAreaInfoReq {

    /**
     * Constructs a new AreaInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAreaInfoReq);

    /** AreaInfoReq type. */
    public type: number;

    /**
     * Creates a new AreaInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AreaInfoReq instance
     */
    public static create(properties?: IAreaInfoReq): AreaInfoReq;

    /**
     * Encodes the specified AreaInfoReq message. Does not implicitly {@link AreaInfoReq.verify|verify} messages.
     * @param message AreaInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAreaInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AreaInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AreaInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AreaInfoReq;
}

/** Properties of an AreaInfoResp. */
export interface IAreaInfoResp {

    /** AreaInfoResp type */
    type: number;

    /** AreaInfoResp areaInfos */
    areaInfos?: (IAreaInfo[]|null);
}

/** Represents an AreaInfoResp. */
export class AreaInfoResp implements IAreaInfoResp {

    /**
     * Constructs a new AreaInfoResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAreaInfoResp);

    /** AreaInfoResp type. */
    public type: number;

    /** AreaInfoResp areaInfos. */
    public areaInfos: Array<IAreaInfo>;

    /**
     * Creates a new AreaInfoResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AreaInfoResp instance
     */
    public static create(properties?: IAreaInfoResp): AreaInfoResp;

    /**
     * Encodes the specified AreaInfoResp message. Does not implicitly {@link AreaInfoResp.verify|verify} messages.
     * @param message AreaInfoResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAreaInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AreaInfoResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AreaInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AreaInfoResp;
}

/** Properties of a SelectReq. */
export interface ISelectReq {

    /** SelectReq type */
    type: number;

    /** SelectReq tableId */
    tableId: number;

    /** SelectReq serverId */
    serverId: number;
}

/** Represents a SelectReq. */
export class SelectReq implements ISelectReq {

    /**
     * Constructs a new SelectReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectReq);

    /** SelectReq type. */
    public type: number;

    /** SelectReq tableId. */
    public tableId: number;

    /** SelectReq serverId. */
    public serverId: number;

    /**
     * Creates a new SelectReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectReq instance
     */
    public static create(properties?: ISelectReq): SelectReq;

    /**
     * Encodes the specified SelectReq message. Does not implicitly {@link SelectReq.verify|verify} messages.
     * @param message SelectReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectReq;
}

/** Properties of a SelectResp. */
export interface ISelectResp {

    /** SelectResp type */
    type: number;

    /** SelectResp tableId */
    tableId: number;

    /** SelectResp serverId */
    serverId: number;
}

/** Represents a SelectResp. */
export class SelectResp implements ISelectResp {

    /**
     * Constructs a new SelectResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectResp);

    /** SelectResp type. */
    public type: number;

    /** SelectResp tableId. */
    public tableId: number;

    /** SelectResp serverId. */
    public serverId: number;

    /**
     * Creates a new SelectResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectResp instance
     */
    public static create(properties?: ISelectResp): SelectResp;

    /**
     * Encodes the specified SelectResp message. Does not implicitly {@link SelectResp.verify|verify} messages.
     * @param message SelectResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectResp;
}

/** Properties of a TableCountItem. */
export interface ITableCountItem {

    /** TableCountItem serverId */
    serverId: number;

    /** TableCountItem count */
    count: number;

    /** TableCountItem tableId */
    tableId: number;
}

/** Represents a TableCountItem. */
export class TableCountItem implements ITableCountItem {

    /**
     * Constructs a new TableCountItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITableCountItem);

    /** TableCountItem serverId. */
    public serverId: number;

    /** TableCountItem count. */
    public count: number;

    /** TableCountItem tableId. */
    public tableId: number;

    /**
     * Creates a new TableCountItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TableCountItem instance
     */
    public static create(properties?: ITableCountItem): TableCountItem;

    /**
     * Encodes the specified TableCountItem message. Does not implicitly {@link TableCountItem.verify|verify} messages.
     * @param message TableCountItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITableCountItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TableCountItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TableCountItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TableCountItem;
}

/** Properties of a SycTableCountResp. */
export interface ISycTableCountResp {

    /** SycTableCountResp tableCountItems */
    tableCountItems?: (ITableCountItem[]|null);
}

/** Represents a SycTableCountResp. */
export class SycTableCountResp implements ISycTableCountResp {

    /**
     * Constructs a new SycTableCountResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISycTableCountResp);

    /** SycTableCountResp tableCountItems. */
    public tableCountItems: Array<ITableCountItem>;

    /**
     * Creates a new SycTableCountResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SycTableCountResp instance
     */
    public static create(properties?: ISycTableCountResp): SycTableCountResp;

    /**
     * Encodes the specified SycTableCountResp message. Does not implicitly {@link SycTableCountResp.verify|verify} messages.
     * @param message SycTableCountResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISycTableCountResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SycTableCountResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SycTableCountResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SycTableCountResp;
}

/** Properties of a LoginServerRealIP. */
export interface ILoginServerRealIP {

    /** LoginServerRealIP ipaddr */
    ipaddr: string;
}

/** Represents a LoginServerRealIP. */
export class LoginServerRealIP implements ILoginServerRealIP {

    /**
     * Constructs a new LoginServerRealIP.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginServerRealIP);

    /** LoginServerRealIP ipaddr. */
    public ipaddr: string;

    /**
     * Creates a new LoginServerRealIP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginServerRealIP instance
     */
    public static create(properties?: ILoginServerRealIP): LoginServerRealIP;

    /**
     * Encodes the specified LoginServerRealIP message. Does not implicitly {@link LoginServerRealIP.verify|verify} messages.
     * @param message LoginServerRealIP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginServerRealIP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginServerRealIP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginServerRealIP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginServerRealIP;
}

/** Properties of a RedPointResp. */
export interface IRedPointResp {

    /** RedPointResp redpoints */
    redpoints?: (RedPointResp.IRedPoint[]|null);
}

/** Represents a RedPointResp. */
export class RedPointResp implements IRedPointResp {

    /**
     * Constructs a new RedPointResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedPointResp);

    /** RedPointResp redpoints. */
    public redpoints: ArrayIRedPoint>;

    /**
     * Creates a new RedPointResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedPointResp instance
     */
    public static create(properties?: IRedPointResp): RedPointResp;

    /**
     * Encodes the specified RedPointResp message. Does not implicitly {@link RedPointResp.verify|verify} messages.
     * @param message RedPointResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedPointResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedPointResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedPointResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedPointResp;
}

export namespace RedPointResp {

    /** Properties of a RedPoint. */
    interface IRedPoint {

        /** RedPoint type */
        type: string;

        /** RedPoint red */
        red: boolean;

        /** RedPoint ext */
        ext?: (string|null);
    }

    /** Represents a RedPoint. */
    class RedPoint implements IRedPoint {

        /**
         * Constructs a new RedPoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedPointResp.IRedPoint);

        /** RedPoint type. */
        public type: string;

        /** RedPoint red. */
        public red: boolean;

        /** RedPoint ext. */
        public ext: string;

        /**
         * Creates a new RedPoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedPoint instance
         */
        public static create(properties?: RedPointResp.IRedPoint): RedPointResp.RedPoint;

        /**
         * Encodes the specified RedPoint message. Does not implicitly {@link RedPointResp.RedPoint.verify|verify} messages.
         * @param message RedPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedPointResp.IRedPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedPoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedPointResp.RedPoint;
    }
}

/** RedPointType enum. */
export enum RedPointType {
    RD_IsFirstRecharge = 1,
    RD_IsFirstLogin = 2,
    RD_IsSign = 3,
    RD_IsSevenDaysPack = 4,
    RD_IsTodayFirstLogin = 5,
    RD_IsRecMonthCardAward = 6,
    RD_IsLuckyStarPack = 7,
    RD_IsTwoPassword = 8,
    RD_IsGotStoreAppAward = 9,
    RD_IsGotGuanzhuAward = 10,
    RD_IsOldPlayerSystem = 11,
    RD_IsWeChatPublic = 12
}

/** Properties of a PayOkResp. */
export interface IPayOkResp {

    /** PayOkResp userID */
    userID: number;

    /** PayOkResp type */
    type: number;

    /** PayOkResp nowScore */
    nowScore: (number|Long);

    /** PayOkResp vip */
    vip: number;

    /** PayOkResp nextVip */
    nextVip: number;

    /** PayOkResp rmb */
    rmb: number;

    /** PayOkResp rmbToNextVip */
    rmbToNextVip: number;

    /** PayOkResp order */
    order: string;

    /** PayOkResp thirdPartOrder */
    thirdPartOrder: string;

    /** PayOkResp nowDiamond */
    nowDiamond: number;

    /** PayOkResp buyType */
    buyType: number;

    /** PayOkResp itemId */
    itemId: number;

    /** PayOkResp opt */
    opt: number;

    /** PayOkResp jfdId */
    jfdId: string;

    /** PayOkResp showItem */
    showItem: IShowItems;

    /** PayOkResp treasure */
    treasure?: (ITreasureUpdate|null);

    /** PayOkResp unlockedCannon */
    unlockedCannon?: (number|null);

    /** PayOkResp cannonTransItems */
    cannonTransItems?: (IToolItem[]|null);
}

/** Represents a PayOkResp. */
export class PayOkResp implements IPayOkResp {

    /**
     * Constructs a new PayOkResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPayOkResp);

    /** PayOkResp userID. */
    public userID: number;

    /** PayOkResp type. */
    public type: number;

    /** PayOkResp nowScore. */
    public nowScore: (number|Long);

    /** PayOkResp vip. */
    public vip: number;

    /** PayOkResp nextVip. */
    public nextVip: number;

    /** PayOkResp rmb. */
    public rmb: number;

    /** PayOkResp rmbToNextVip. */
    public rmbToNextVip: number;

    /** PayOkResp order. */
    public order: string;

    /** PayOkResp thirdPartOrder. */
    public thirdPartOrder: string;

    /** PayOkResp nowDiamond. */
    public nowDiamond: number;

    /** PayOkResp buyType. */
    public buyType: number;

    /** PayOkResp itemId. */
    public itemId: number;

    /** PayOkResp opt. */
    public opt: number;

    /** PayOkResp jfdId. */
    public jfdId: string;

    /** PayOkResp showItem. */
    public showItem: IShowItems;

    /** PayOkResp treasure. */
    public treasure?: (ITreasureUpdate|null);

    /** PayOkResp unlockedCannon. */
    public unlockedCannon: number;

    /** PayOkResp cannonTransItems. */
    public cannonTransItems: Array<IToolItem>;

    /**
     * Creates a new PayOkResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PayOkResp instance
     */
    public static create(properties?: IPayOkResp): PayOkResp;

    /**
     * Encodes the specified PayOkResp message. Does not implicitly {@link PayOkResp.verify|verify} messages.
     * @param message PayOkResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPayOkResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PayOkResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PayOkResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PayOkResp;
}

/** Properties of a ShowItems. */
export interface IShowItems {

    /** ShowItems score */
    score: (number|Long);

    /** ShowItems toolItem */
    toolItem?: (IToolItem[]|null);
}

/** Represents a ShowItems. */
export class ShowItems implements IShowItems {

    /**
     * Constructs a new ShowItems.
     * @param [properties] Properties to set
     */
    constructor(properties?: IShowItems);

    /** ShowItems score. */
    public score: (number|Long);

    /** ShowItems toolItem. */
    public toolItem: Array<IToolItem>;

    /**
     * Creates a new ShowItems instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ShowItems instance
     */
    public static create(properties?: IShowItems): ShowItems;

    /**
     * Encodes the specified ShowItems message. Does not implicitly {@link ShowItems.verify|verify} messages.
     * @param message ShowItems message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IShowItems, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ShowItems message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ShowItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ShowItems;
}

/** Properties of a DayGiftTask. */
export interface IDayGiftTask {

    /** DayGiftTask id */
    id: string;

    /** DayGiftTask type */
    type: number;

    /** DayGiftTask level */
    level?: (number|null);

    /** DayGiftTask leftTime */
    leftTime?: (number|null);

    /** DayGiftTask freeTime */
    freeTime?: (number|Long|null);

    /** DayGiftTask payNumber */
    payNumber?: (number|null);

    /** DayGiftTask lastRechargeTime */
    lastRechargeTime?: (number|Long|null);
}

/** Represents a DayGiftTask. */
export class DayGiftTask implements IDayGiftTask {

    /**
     * Constructs a new DayGiftTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDayGiftTask);

    /** DayGiftTask id. */
    public id: string;

    /** DayGiftTask type. */
    public type: number;

    /** DayGiftTask level. */
    public level: number;

    /** DayGiftTask leftTime. */
    public leftTime: number;

    /** DayGiftTask freeTime. */
    public freeTime: (number|Long);

    /** DayGiftTask payNumber. */
    public payNumber: number;

    /** DayGiftTask lastRechargeTime. */
    public lastRechargeTime: (number|Long);

    /**
     * Creates a new DayGiftTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DayGiftTask instance
     */
    public static create(properties?: IDayGiftTask): DayGiftTask;

    /**
     * Encodes the specified DayGiftTask message. Does not implicitly {@link DayGiftTask.verify|verify} messages.
     * @param message DayGiftTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDayGiftTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DayGiftTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DayGiftTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DayGiftTask;
}

/** Properties of a ChargeDayGiftResp. */
export interface IChargeDayGiftResp {

    /** ChargeDayGiftResp tasks */
    tasks?: (IDayGiftTask[]|null);
}

/** Represents a ChargeDayGiftResp. */
export class ChargeDayGiftResp implements IChargeDayGiftResp {

    /**
     * Constructs a new ChargeDayGiftResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChargeDayGiftResp);

    /** ChargeDayGiftResp tasks. */
    public tasks: Array<IDayGiftTask>;

    /**
     * Creates a new ChargeDayGiftResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChargeDayGiftResp instance
     */
    public static create(properties?: IChargeDayGiftResp): ChargeDayGiftResp;

    /**
     * Encodes the specified ChargeDayGiftResp message. Does not implicitly {@link ChargeDayGiftResp.verify|verify} messages.
     * @param message ChargeDayGiftResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChargeDayGiftResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChargeDayGiftResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChargeDayGiftResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChargeDayGiftResp;
}

/** Properties of a GetFreeGiftResp. */
export interface IGetFreeGiftResp {

    /** GetFreeGiftResp awards */
    awards?: (IToolItem[]|null);

    /** GetFreeGiftResp task */
    task: IDayGiftTask;

    /** GetFreeGiftResp treasure */
    treasure: ITreasureUpdate;
}

/** Represents a GetFreeGiftResp. */
export class GetFreeGiftResp implements IGetFreeGiftResp {

    /**
     * Constructs a new GetFreeGiftResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetFreeGiftResp);

    /** GetFreeGiftResp awards. */
    public awards: Array<IToolItem>;

    /** GetFreeGiftResp task. */
    public task: IDayGiftTask;

    /** GetFreeGiftResp treasure. */
    public treasure: ITreasureUpdate;

    /**
     * Creates a new GetFreeGiftResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetFreeGiftResp instance
     */
    public static create(properties?: IGetFreeGiftResp): GetFreeGiftResp;

    /**
     * Encodes the specified GetFreeGiftResp message. Does not implicitly {@link GetFreeGiftResp.verify|verify} messages.
     * @param message GetFreeGiftResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetFreeGiftResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetFreeGiftResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetFreeGiftResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetFreeGiftResp;
}

/** Properties of a LevelExp. */
export interface ILevelExp {

    /** LevelExp curLevel */
    curLevel?: (number|null);

    /** LevelExp curExp */
    curExp?: (number|Long|null);

    /** LevelExp nextExp */
    nextExp?: (number|Long|null);
}

/** Represents a LevelExp. */
export class LevelExp implements ILevelExp {

    /**
     * Constructs a new LevelExp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILevelExp);

    /** LevelExp curLevel. */
    public curLevel: number;

    /** LevelExp curExp. */
    public curExp: (number|Long);

    /** LevelExp nextExp. */
    public nextExp: (number|Long);

    /**
     * Creates a new LevelExp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LevelExp instance
     */
    public static create(properties?: ILevelExp): LevelExp;

    /**
     * Encodes the specified LevelExp message. Does not implicitly {@link LevelExp.verify|verify} messages.
     * @param message LevelExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILevelExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LevelExp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LevelExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LevelExp;
}

/** LevelUpSourceType enum. */
export enum LevelUpSourceType {
    Normal_FishDie = 1,
    Bomb_FishDie = 2,
    Nuclear_FishDie = 3
}

/** Properties of a PushLevelUpMsg. */
export interface IPushLevelUpMsg {

    /** PushLevelUpMsg newLevel */
    newLevel: number;

    /** PushLevelUpMsg awards */
    awards?: (IToolItem[]|null);

    /** PushLevelUpMsg gold */
    gold: (number|Long);

    /** PushLevelUpMsg tr */
    tr: ITreasureUpdate;

    /** PushLevelUpMsg newexp */
    newexp?: (ILevelExp|null);

    /** PushLevelUpMsg userid */
    userid?: (number|null);

    /** PushLevelUpMsg sourceType */
    sourceType?: (LevelUpSourceType|null);

    /** PushLevelUpMsg extraPara */
    extraPara?: (string|null);
}

/** Represents a PushLevelUpMsg. */
export class PushLevelUpMsg implements IPushLevelUpMsg {

    /**
     * Constructs a new PushLevelUpMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPushLevelUpMsg);

    /** PushLevelUpMsg newLevel. */
    public newLevel: number;

    /** PushLevelUpMsg awards. */
    public awards: Array<IToolItem>;

    /** PushLevelUpMsg gold. */
    public gold: (number|Long);

    /** PushLevelUpMsg tr. */
    public tr: ITreasureUpdate;

    /** PushLevelUpMsg newexp. */
    public newexp?: (ILevelExp|null);

    /** PushLevelUpMsg userid. */
    public userid: number;

    /** PushLevelUpMsg sourceType. */
    public sourceType: LevelUpSourceType;

    /** PushLevelUpMsg extraPara. */
    public extraPara: string;

    /**
     * Creates a new PushLevelUpMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushLevelUpMsg instance
     */
    public static create(properties?: IPushLevelUpMsg): PushLevelUpMsg;

    /**
     * Encodes the specified PushLevelUpMsg message. Does not implicitly {@link PushLevelUpMsg.verify|verify} messages.
     * @param message PushLevelUpMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPushLevelUpMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushLevelUpMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PushLevelUpMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PushLevelUpMsg;
}

/** Properties of a RealNameAuthReq. */
export interface IRealNameAuthReq {

    /** RealNameAuthReq account */
    account?: (string|null);

    /** RealNameAuthReq newAccount */
    newAccount?: (string|null);

    /** RealNameAuthReq loginPass */
    loginPass?: (string|null);

    /** RealNameAuthReq realName */
    realName: string;

    /** RealNameAuthReq idNumber */
    idNumber: string;
}

/** Represents a RealNameAuthReq. */
export class RealNameAuthReq implements IRealNameAuthReq {

    /**
     * Constructs a new RealNameAuthReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRealNameAuthReq);

    /** RealNameAuthReq account. */
    public account: string;

    /** RealNameAuthReq newAccount. */
    public newAccount: string;

    /** RealNameAuthReq loginPass. */
    public loginPass: string;

    /** RealNameAuthReq realName. */
    public realName: string;

    /** RealNameAuthReq idNumber. */
    public idNumber: string;

    /**
     * Creates a new RealNameAuthReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RealNameAuthReq instance
     */
    public static create(properties?: IRealNameAuthReq): RealNameAuthReq;

    /**
     * Encodes the specified RealNameAuthReq message. Does not implicitly {@link RealNameAuthReq.verify|verify} messages.
     * @param message RealNameAuthReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRealNameAuthReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RealNameAuthReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RealNameAuthReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RealNameAuthReq;
}

/** Properties of a RealNameAuthRewordResp. */
export interface IRealNameAuthRewordResp {

    /** RealNameAuthRewordResp item */
    item?: (IToolItem[]|null);

    /** RealNameAuthRewordResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;

    /** RealNameAuthRewordResp reward */
    reward?: (IUserActionReward|null);
}

/** Represents a RealNameAuthRewordResp. */
export class RealNameAuthRewordResp implements IRealNameAuthRewordResp {

    /**
     * Constructs a new RealNameAuthRewordResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRealNameAuthRewordResp);

    /** RealNameAuthRewordResp item. */
    public item: Array<IToolItem>;

    /** RealNameAuthRewordResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /** RealNameAuthRewordResp reward. */
    public reward?: (IUserActionReward|null);

    /**
     * Creates a new RealNameAuthRewordResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RealNameAuthRewordResp instance
     */
    public static create(properties?: IRealNameAuthRewordResp): RealNameAuthRewordResp;

    /**
     * Encodes the specified RealNameAuthRewordResp message. Does not implicitly {@link RealNameAuthRewordResp.verify|verify} messages.
     * @param message RealNameAuthRewordResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRealNameAuthRewordResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RealNameAuthRewordResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RealNameAuthRewordResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RealNameAuthRewordResp;
}

/** Properties of a RealNameAuthResp. */
export interface IRealNameAuthResp {

    /** RealNameAuthResp flag */
    flag: boolean;

    /** RealNameAuthResp msg */
    msg: string;

    /** RealNameAuthResp canGame */
    canGame?: (number|null);

    /** RealNameAuthResp reward */
    reward?: (IUserActionReward|null);
}

/** Represents a RealNameAuthResp. */
export class RealNameAuthResp implements IRealNameAuthResp {

    /**
     * Constructs a new RealNameAuthResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRealNameAuthResp);

    /** RealNameAuthResp flag. */
    public flag: boolean;

    /** RealNameAuthResp msg. */
    public msg: string;

    /** RealNameAuthResp canGame. */
    public canGame: number;

    /** RealNameAuthResp reward. */
    public reward?: (IUserActionReward|null);

    /**
     * Creates a new RealNameAuthResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RealNameAuthResp instance
     */
    public static create(properties?: IRealNameAuthResp): RealNameAuthResp;

    /**
     * Encodes the specified RealNameAuthResp message. Does not implicitly {@link RealNameAuthResp.verify|verify} messages.
     * @param message RealNameAuthResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRealNameAuthResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RealNameAuthResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RealNameAuthResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RealNameAuthResp;
}

/** Properties of a RealNameAlertResp. */
export interface IRealNameAlertResp {

    /** RealNameAlertResp code */
    code: number;

    /** RealNameAlertResp userStatus */
    userStatus: number;

    /** RealNameAlertResp msg */
    msg: string;

    /** RealNameAlertResp countdown */
    countdown: number;

    /** RealNameAlertResp authConfig */
    authConfig: string;
}

/** Represents a RealNameAlertResp. */
export class RealNameAlertResp implements IRealNameAlertResp {

    /**
     * Constructs a new RealNameAlertResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRealNameAlertResp);

    /** RealNameAlertResp code. */
    public code: number;

    /** RealNameAlertResp userStatus. */
    public userStatus: number;

    /** RealNameAlertResp msg. */
    public msg: string;

    /** RealNameAlertResp countdown. */
    public countdown: number;

    /** RealNameAlertResp authConfig. */
    public authConfig: string;

    /**
     * Creates a new RealNameAlertResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RealNameAlertResp instance
     */
    public static create(properties?: IRealNameAlertResp): RealNameAlertResp;

    /**
     * Encodes the specified RealNameAlertResp message. Does not implicitly {@link RealNameAlertResp.verify|verify} messages.
     * @param message RealNameAlertResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRealNameAlertResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RealNameAlertResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RealNameAlertResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RealNameAlertResp;
}

/** LoginSourceType enum. */
export enum LoginSourceType {
    Type_Others = 1000,
    Type_WXTinyProg = 1001,
    Type_PublicAccount = 1035,
    Type_WXTinyProg_2 = 1089
}

/** Properties of a LoginReq. */
export interface ILoginReq {

    /** LoginReq account */
    account: string;

    /** LoginReq loginPass */
    loginPass: string;

    /** LoginReq clientIP */
    clientIP?: (string|null);

    /** LoginReq spreaderID */
    spreaderID: number;

    /** LoginReq machineID */
    machineID: string;

    /** LoginReq nickName */
    nickName?: (string|null);

    /** LoginReq version */
    version: string;

    /** LoginReq jsVersion */
    jsVersion?: (string|null);

    /** LoginReq platform */
    platform?: (string|null);

    /** LoginReq loginType */
    loginType: number;

    /** LoginReq thirdId */
    thirdId?: (string|null);

    /** LoginReq channelName */
    channelName: string;

    /** LoginReq regSource */
    regSource?: (LoginSourceType|null);
}

/** Represents a LoginReq. */
export class LoginReq implements ILoginReq {

    /**
     * Constructs a new LoginReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginReq);

    /** LoginReq account. */
    public account: string;

    /** LoginReq loginPass. */
    public loginPass: string;

    /** LoginReq clientIP. */
    public clientIP: string;

    /** LoginReq spreaderID. */
    public spreaderID: number;

    /** LoginReq machineID. */
    public machineID: string;

    /** LoginReq nickName. */
    public nickName: string;

    /** LoginReq version. */
    public version: string;

    /** LoginReq jsVersion. */
    public jsVersion: string;

    /** LoginReq platform. */
    public platform: string;

    /** LoginReq loginType. */
    public loginType: number;

    /** LoginReq thirdId. */
    public thirdId: string;

    /** LoginReq channelName. */
    public channelName: string;

    /** LoginReq regSource. */
    public regSource: LoginSourceType;

    /**
     * Creates a new LoginReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginReq instance
     */
    public static create(properties?: ILoginReq): LoginReq;

    /**
     * Encodes the specified LoginReq message. Does not implicitly {@link LoginReq.verify|verify} messages.
     * @param message LoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginReq;
}

/** Properties of a LoginResponse. */
export interface ILoginResponse {

    /** LoginResponse accessToken */
    accessToken: string;

    /** LoginResponse isFirstLogin */
    isFirstLogin: boolean;
}

/** Represents a LoginResponse. */
export class LoginResponse implements ILoginResponse {

    /**
     * Constructs a new LoginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginResponse);

    /** LoginResponse accessToken. */
    public accessToken: string;

    /** LoginResponse isFirstLogin. */
    public isFirstLogin: boolean;

    /**
     * Creates a new LoginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginResponse instance
     */
    public static create(properties?: ILoginResponse): LoginResponse;

    /**
     * Encodes the specified LoginResponse message. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginResponse;
}

/** Properties of a RegisterAccountReq. */
export interface IRegisterAccountReq {

    /** RegisterAccountReq Account */
    Account: string;

    /** RegisterAccountReq LoginPass */
    LoginPass?: (string|null);

    /** RegisterAccountReq LoginType */
    LoginType?: (number|null);

    /** RegisterAccountReq SpreaderID */
    SpreaderID?: (number|null);

    /** RegisterAccountReq RegType */
    RegType: number;

    /** RegisterAccountReq Version */
    Version?: (string|null);

    /** RegisterAccountReq jsVersion */
    jsVersion?: (string|null);

    /** RegisterAccountReq Platform */
    Platform?: (string|null);

    /** RegisterAccountReq ChannelName */
    ChannelName: string;

    /** RegisterAccountReq MachineID */
    MachineID: string;

    /** RegisterAccountReq thirdId */
    thirdId?: (string|null);

    /** RegisterAccountReq regSource */
    regSource?: (LoginSourceType|null);
}

/** Represents a RegisterAccountReq. */
export class RegisterAccountReq implements IRegisterAccountReq {

    /**
     * Constructs a new RegisterAccountReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRegisterAccountReq);

    /** RegisterAccountReq Account. */
    public Account: string;

    /** RegisterAccountReq LoginPass. */
    public LoginPass: string;

    /** RegisterAccountReq LoginType. */
    public LoginType: number;

    /** RegisterAccountReq SpreaderID. */
    public SpreaderID: number;

    /** RegisterAccountReq RegType. */
    public RegType: number;

    /** RegisterAccountReq Version. */
    public Version: string;

    /** RegisterAccountReq jsVersion. */
    public jsVersion: string;

    /** RegisterAccountReq Platform. */
    public Platform: string;

    /** RegisterAccountReq ChannelName. */
    public ChannelName: string;

    /** RegisterAccountReq MachineID. */
    public MachineID: string;

    /** RegisterAccountReq thirdId. */
    public thirdId: string;

    /** RegisterAccountReq regSource. */
    public regSource: LoginSourceType;

    /**
     * Creates a new RegisterAccountReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RegisterAccountReq instance
     */
    public static create(properties?: IRegisterAccountReq): RegisterAccountReq;

    /**
     * Encodes the specified RegisterAccountReq message. Does not implicitly {@link RegisterAccountReq.verify|verify} messages.
     * @param message RegisterAccountReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRegisterAccountReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RegisterAccountReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RegisterAccountReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RegisterAccountReq;
}

/** Properties of a RegisterAccountResponse. */
export interface IRegisterAccountResponse {

    /** RegisterAccountResponse accessToken */
    accessToken: string;

    /** RegisterAccountResponse isFirstLogin */
    isFirstLogin: boolean;
}

/** Represents a RegisterAccountResponse. */
export class RegisterAccountResponse implements IRegisterAccountResponse {

    /**
     * Constructs a new RegisterAccountResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRegisterAccountResponse);

    /** RegisterAccountResponse accessToken. */
    public accessToken: string;

    /** RegisterAccountResponse isFirstLogin. */
    public isFirstLogin: boolean;

    /**
     * Creates a new RegisterAccountResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RegisterAccountResponse instance
     */
    public static create(properties?: IRegisterAccountResponse): RegisterAccountResponse;

    /**
     * Encodes the specified RegisterAccountResponse message. Does not implicitly {@link RegisterAccountResponse.verify|verify} messages.
     * @param message RegisterAccountResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRegisterAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RegisterAccountResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RegisterAccountResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RegisterAccountResponse;
}

/** Properties of an InAndOutUserItemStorageReq. */
export interface IInAndOutUserItemStorageReq {

    /** InAndOutUserItemStorageReq passWord */
    passWord?: (string|null);

    /** InAndOutUserItemStorageReq type */
    type: number;

    /** InAndOutUserItemStorageReq items */
    items?: (string|null);
}

/** Represents an InAndOutUserItemStorageReq. */
export class InAndOutUserItemStorageReq implements IInAndOutUserItemStorageReq {

    /**
     * Constructs a new InAndOutUserItemStorageReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInAndOutUserItemStorageReq);

    /** InAndOutUserItemStorageReq passWord. */
    public passWord: string;

    /** InAndOutUserItemStorageReq type. */
    public type: number;

    /** InAndOutUserItemStorageReq items. */
    public items: string;

    /**
     * Creates a new InAndOutUserItemStorageReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InAndOutUserItemStorageReq instance
     */
    public static create(properties?: IInAndOutUserItemStorageReq): InAndOutUserItemStorageReq;

    /**
     * Encodes the specified InAndOutUserItemStorageReq message. Does not implicitly {@link InAndOutUserItemStorageReq.verify|verify} messages.
     * @param message InAndOutUserItemStorageReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInAndOutUserItemStorageReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InAndOutUserItemStorageReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InAndOutUserItemStorageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InAndOutUserItemStorageReq;
}

/** Properties of an InAndOutUserItemStorageResp. */
export interface IInAndOutUserItemStorageResp {

    /** InAndOutUserItemStorageResp item */
    item?: (IToolItem[]|null);

    /** InAndOutUserItemStorageResp treasure */
    treasure?: (ITreasureUpdate|null);

    /** InAndOutUserItemStorageResp retCode */
    retCode?: (number|null);
}

/** Represents an InAndOutUserItemStorageResp. */
export class InAndOutUserItemStorageResp implements IInAndOutUserItemStorageResp {

    /**
     * Constructs a new InAndOutUserItemStorageResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInAndOutUserItemStorageResp);

    /** InAndOutUserItemStorageResp item. */
    public item: Array<IToolItem>;

    /** InAndOutUserItemStorageResp treasure. */
    public treasure?: (ITreasureUpdate|null);

    /** InAndOutUserItemStorageResp retCode. */
    public retCode: number;

    /**
     * Creates a new InAndOutUserItemStorageResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InAndOutUserItemStorageResp instance
     */
    public static create(properties?: IInAndOutUserItemStorageResp): InAndOutUserItemStorageResp;

    /**
     * Encodes the specified InAndOutUserItemStorageResp message. Does not implicitly {@link InAndOutUserItemStorageResp.verify|verify} messages.
     * @param message InAndOutUserItemStorageResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInAndOutUserItemStorageResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InAndOutUserItemStorageResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InAndOutUserItemStorageResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InAndOutUserItemStorageResp;
}

/** Properties of a UserPhoneReq. */
export interface IUserPhoneReq {

    /** UserPhoneReq phoneNumber */
    phoneNumber: string;
}

/** Represents a UserPhoneReq. */
export class UserPhoneReq implements IUserPhoneReq {

    /**
     * Constructs a new UserPhoneReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserPhoneReq);

    /** UserPhoneReq phoneNumber. */
    public phoneNumber: string;

    /**
     * Creates a new UserPhoneReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserPhoneReq instance
     */
    public static create(properties?: IUserPhoneReq): UserPhoneReq;

    /**
     * Encodes the specified UserPhoneReq message. Does not implicitly {@link UserPhoneReq.verify|verify} messages.
     * @param message UserPhoneReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserPhoneReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserPhoneReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserPhoneReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPhoneReq;
}

/** Properties of a UserPhoneResp. */
export interface IUserPhoneResp {

    /** UserPhoneResp result */
    result: (number|Long);
}

/** Represents a UserPhoneResp. */
export class UserPhoneResp implements IUserPhoneResp {

    /**
     * Constructs a new UserPhoneResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserPhoneResp);

    /** UserPhoneResp result. */
    public result: (number|Long);

    /**
     * Creates a new UserPhoneResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserPhoneResp instance
     */
    public static create(properties?: IUserPhoneResp): UserPhoneResp;

    /**
     * Encodes the specified UserPhoneResp message. Does not implicitly {@link UserPhoneResp.verify|verify} messages.
     * @param message UserPhoneResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserPhoneResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserPhoneResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserPhoneResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPhoneResp;
}

/** Properties of a UserCheckPhoneReq. */
export interface IUserCheckPhoneReq {

    /** UserCheckPhoneReq phoneNumber */
    phoneNumber: string;

    /** UserCheckPhoneReq code */
    code: string;
}

/** Represents a UserCheckPhoneReq. */
export class UserCheckPhoneReq implements IUserCheckPhoneReq {

    /**
     * Constructs a new UserCheckPhoneReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserCheckPhoneReq);

    /** UserCheckPhoneReq phoneNumber. */
    public phoneNumber: string;

    /** UserCheckPhoneReq code. */
    public code: string;

    /**
     * Creates a new UserCheckPhoneReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserCheckPhoneReq instance
     */
    public static create(properties?: IUserCheckPhoneReq): UserCheckPhoneReq;

    /**
     * Encodes the specified UserCheckPhoneReq message. Does not implicitly {@link UserCheckPhoneReq.verify|verify} messages.
     * @param message UserCheckPhoneReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserCheckPhoneReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserCheckPhoneReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserCheckPhoneReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserCheckPhoneReq;
}

/** Properties of a UserCheckPhoneResp. */
export interface IUserCheckPhoneResp {

    /** UserCheckPhoneResp phoneNumber */
    phoneNumber: string;

    /** UserCheckPhoneResp reward */
    reward?: (IUserActionReward|null);
}

/** Represents a UserCheckPhoneResp. */
export class UserCheckPhoneResp implements IUserCheckPhoneResp {

    /**
     * Constructs a new UserCheckPhoneResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserCheckPhoneResp);

    /** UserCheckPhoneResp phoneNumber. */
    public phoneNumber: string;

    /** UserCheckPhoneResp reward. */
    public reward?: (IUserActionReward|null);

    /**
     * Creates a new UserCheckPhoneResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserCheckPhoneResp instance
     */
    public static create(properties?: IUserCheckPhoneResp): UserCheckPhoneResp;

    /**
     * Encodes the specified UserCheckPhoneResp message. Does not implicitly {@link UserCheckPhoneResp.verify|verify} messages.
     * @param message UserCheckPhoneResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserCheckPhoneResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserCheckPhoneResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserCheckPhoneResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserCheckPhoneResp;
}

/** Properties of a FPwdCheckCodeReq. */
export interface IFPwdCheckCodeReq {

    /** FPwdCheckCodeReq account */
    account: string;

    /** FPwdCheckCodeReq realName */
    realName: string;

    /** FPwdCheckCodeReq idCard */
    idCard: string;

    /** FPwdCheckCodeReq newPwd */
    newPwd: string;

    /** FPwdCheckCodeReq phone */
    phone: string;

    /** FPwdCheckCodeReq code */
    code: string;
}

/** Represents a FPwdCheckCodeReq. */
export class FPwdCheckCodeReq implements IFPwdCheckCodeReq {

    /**
     * Constructs a new FPwdCheckCodeReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFPwdCheckCodeReq);

    /** FPwdCheckCodeReq account. */
    public account: string;

    /** FPwdCheckCodeReq realName. */
    public realName: string;

    /** FPwdCheckCodeReq idCard. */
    public idCard: string;

    /** FPwdCheckCodeReq newPwd. */
    public newPwd: string;

    /** FPwdCheckCodeReq phone. */
    public phone: string;

    /** FPwdCheckCodeReq code. */
    public code: string;

    /**
     * Creates a new FPwdCheckCodeReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FPwdCheckCodeReq instance
     */
    public static create(properties?: IFPwdCheckCodeReq): FPwdCheckCodeReq;

    /**
     * Encodes the specified FPwdCheckCodeReq message. Does not implicitly {@link FPwdCheckCodeReq.verify|verify} messages.
     * @param message FPwdCheckCodeReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFPwdCheckCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FPwdCheckCodeReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FPwdCheckCodeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FPwdCheckCodeReq;
}

/** Properties of a FPwdCheckCodeResp. */
export interface IFPwdCheckCodeResp {

    /** FPwdCheckCodeResp newPwd */
    newPwd: string;
}

/** Represents a FPwdCheckCodeResp. */
export class FPwdCheckCodeResp implements IFPwdCheckCodeResp {

    /**
     * Constructs a new FPwdCheckCodeResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFPwdCheckCodeResp);

    /** FPwdCheckCodeResp newPwd. */
    public newPwd: string;

    /**
     * Creates a new FPwdCheckCodeResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FPwdCheckCodeResp instance
     */
    public static create(properties?: IFPwdCheckCodeResp): FPwdCheckCodeResp;

    /**
     * Encodes the specified FPwdCheckCodeResp message. Does not implicitly {@link FPwdCheckCodeResp.verify|verify} messages.
     * @param message FPwdCheckCodeResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFPwdCheckCodeResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FPwdCheckCodeResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FPwdCheckCodeResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FPwdCheckCodeResp;
}

/** Properties of a UserEmailReq. */
export interface IUserEmailReq {

    /** UserEmailReq emailAddress */
    emailAddress: string;

    /** UserEmailReq codeType */
    codeType: number;
}

/** Represents a UserEmailReq. */
export class UserEmailReq implements IUserEmailReq {

    /**
     * Constructs a new UserEmailReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserEmailReq);

    /** UserEmailReq emailAddress. */
    public emailAddress: string;

    /** UserEmailReq codeType. */
    public codeType: number;

    /**
     * Creates a new UserEmailReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserEmailReq instance
     */
    public static create(properties?: IUserEmailReq): UserEmailReq;

    /**
     * Encodes the specified UserEmailReq message. Does not implicitly {@link UserEmailReq.verify|verify} messages.
     * @param message UserEmailReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserEmailReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserEmailReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserEmailReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserEmailReq;
}

/** Properties of a UserEmailResp. */
export interface IUserEmailResp {

    /** UserEmailResp result */
    result: (number|Long);
}

/** Represents a UserEmailResp. */
export class UserEmailResp implements IUserEmailResp {

    /**
     * Constructs a new UserEmailResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserEmailResp);

    /** UserEmailResp result. */
    public result: (number|Long);

    /**
     * Creates a new UserEmailResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserEmailResp instance
     */
    public static create(properties?: IUserEmailResp): UserEmailResp;

    /**
     * Encodes the specified UserEmailResp message. Does not implicitly {@link UserEmailResp.verify|verify} messages.
     * @param message UserEmailResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserEmailResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserEmailResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserEmailResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserEmailResp;
}

/** Properties of a UserCheckEmailReq. */
export interface IUserCheckEmailReq {

    /** UserCheckEmailReq emailAddress */
    emailAddress: string;

    /** UserCheckEmailReq code */
    code: string;
}

/** Represents a UserCheckEmailReq. */
export class UserCheckEmailReq implements IUserCheckEmailReq {

    /**
     * Constructs a new UserCheckEmailReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserCheckEmailReq);

    /** UserCheckEmailReq emailAddress. */
    public emailAddress: string;

    /** UserCheckEmailReq code. */
    public code: string;

    /**
     * Creates a new UserCheckEmailReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserCheckEmailReq instance
     */
    public static create(properties?: IUserCheckEmailReq): UserCheckEmailReq;

    /**
     * Encodes the specified UserCheckEmailReq message. Does not implicitly {@link UserCheckEmailReq.verify|verify} messages.
     * @param message UserCheckEmailReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserCheckEmailReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserCheckEmailReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserCheckEmailReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserCheckEmailReq;
}

/** Properties of a UserCheckEmailResp. */
export interface IUserCheckEmailResp {

    /** UserCheckEmailResp emailAddress */
    emailAddress: string;

    /** UserCheckEmailResp reward */
    reward?: (IUserActionReward|null);
}

/** Represents a UserCheckEmailResp. */
export class UserCheckEmailResp implements IUserCheckEmailResp {

    /**
     * Constructs a new UserCheckEmailResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserCheckEmailResp);

    /** UserCheckEmailResp emailAddress. */
    public emailAddress: string;

    /** UserCheckEmailResp reward. */
    public reward?: (IUserActionReward|null);

    /**
     * Creates a new UserCheckEmailResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserCheckEmailResp instance
     */
    public static create(properties?: IUserCheckEmailResp): UserCheckEmailResp;

    /**
     * Encodes the specified UserCheckEmailResp message. Does not implicitly {@link UserCheckEmailResp.verify|verify} messages.
     * @param message UserCheckEmailResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserCheckEmailResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserCheckEmailResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserCheckEmailResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserCheckEmailResp;
}

/** Properties of a FPwdCheckCodeEmailReq. */
export interface IFPwdCheckCodeEmailReq {

    /** FPwdCheckCodeEmailReq account */
    account: string;

    /** FPwdCheckCodeEmailReq newPwd */
    newPwd: string;

    /** FPwdCheckCodeEmailReq email */
    email: string;

    /** FPwdCheckCodeEmailReq code */
    code: string;
}

/** Represents a FPwdCheckCodeEmailReq. */
export class FPwdCheckCodeEmailReq implements IFPwdCheckCodeEmailReq {

    /**
     * Constructs a new FPwdCheckCodeEmailReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFPwdCheckCodeEmailReq);

    /** FPwdCheckCodeEmailReq account. */
    public account: string;

    /** FPwdCheckCodeEmailReq newPwd. */
    public newPwd: string;

    /** FPwdCheckCodeEmailReq email. */
    public email: string;

    /** FPwdCheckCodeEmailReq code. */
    public code: string;

    /**
     * Creates a new FPwdCheckCodeEmailReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FPwdCheckCodeEmailReq instance
     */
    public static create(properties?: IFPwdCheckCodeEmailReq): FPwdCheckCodeEmailReq;

    /**
     * Encodes the specified FPwdCheckCodeEmailReq message. Does not implicitly {@link FPwdCheckCodeEmailReq.verify|verify} messages.
     * @param message FPwdCheckCodeEmailReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFPwdCheckCodeEmailReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FPwdCheckCodeEmailReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FPwdCheckCodeEmailReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FPwdCheckCodeEmailReq;
}

/** Properties of a FPwdCheckCodeEmailResp. */
export interface IFPwdCheckCodeEmailResp {

    /** FPwdCheckCodeEmailResp newPwd */
    newPwd: string;
}

/** Represents a FPwdCheckCodeEmailResp. */
export class FPwdCheckCodeEmailResp implements IFPwdCheckCodeEmailResp {

    /**
     * Constructs a new FPwdCheckCodeEmailResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFPwdCheckCodeEmailResp);

    /** FPwdCheckCodeEmailResp newPwd. */
    public newPwd: string;

    /**
     * Creates a new FPwdCheckCodeEmailResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FPwdCheckCodeEmailResp instance
     */
    public static create(properties?: IFPwdCheckCodeEmailResp): FPwdCheckCodeEmailResp;

    /**
     * Encodes the specified FPwdCheckCodeEmailResp message. Does not implicitly {@link FPwdCheckCodeEmailResp.verify|verify} messages.
     * @param message FPwdCheckCodeEmailResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFPwdCheckCodeEmailResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FPwdCheckCodeEmailResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FPwdCheckCodeEmailResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FPwdCheckCodeEmailResp;
}

/** Properties of a ReviseLoginPasswordReq. */
export interface IReviseLoginPasswordReq {

    /** ReviseLoginPasswordReq password */
    password: string;

    /** ReviseLoginPasswordReq phoneNumber */
    phoneNumber: string;

    /** ReviseLoginPasswordReq code */
    code: string;
}

/** Represents a ReviseLoginPasswordReq. */
export class ReviseLoginPasswordReq implements IReviseLoginPasswordReq {

    /**
     * Constructs a new ReviseLoginPasswordReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReviseLoginPasswordReq);

    /** ReviseLoginPasswordReq password. */
    public password: string;

    /** ReviseLoginPasswordReq phoneNumber. */
    public phoneNumber: string;

    /** ReviseLoginPasswordReq code. */
    public code: string;

    /**
     * Creates a new ReviseLoginPasswordReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReviseLoginPasswordReq instance
     */
    public static create(properties?: IReviseLoginPasswordReq): ReviseLoginPasswordReq;

    /**
     * Encodes the specified ReviseLoginPasswordReq message. Does not implicitly {@link ReviseLoginPasswordReq.verify|verify} messages.
     * @param message ReviseLoginPasswordReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReviseLoginPasswordReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReviseLoginPasswordReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReviseLoginPasswordReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReviseLoginPasswordReq;
}

/** Properties of a ReviseLoginPasswordResp. */
export interface IReviseLoginPasswordResp {

    /** ReviseLoginPasswordResp password */
    password: string;
}

/** Represents a ReviseLoginPasswordResp. */
export class ReviseLoginPasswordResp implements IReviseLoginPasswordResp {

    /**
     * Constructs a new ReviseLoginPasswordResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReviseLoginPasswordResp);

    /** ReviseLoginPasswordResp password. */
    public password: string;

    /**
     * Creates a new ReviseLoginPasswordResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReviseLoginPasswordResp instance
     */
    public static create(properties?: IReviseLoginPasswordResp): ReviseLoginPasswordResp;

    /**
     * Encodes the specified ReviseLoginPasswordResp message. Does not implicitly {@link ReviseLoginPasswordResp.verify|verify} messages.
     * @param message ReviseLoginPasswordResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReviseLoginPasswordResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReviseLoginPasswordResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReviseLoginPasswordResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReviseLoginPasswordResp;
}

/** Properties of a UserOldBindReq. */
export interface IUserOldBindReq {

    /** UserOldBindReq idCard */
    idCard: string;

    /** UserOldBindReq phone */
    phone: string;

    /** UserOldBindReq code */
    code: string;
}

/** Represents a UserOldBindReq. */
export class UserOldBindReq implements IUserOldBindReq {

    /**
     * Constructs a new UserOldBindReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserOldBindReq);

    /** UserOldBindReq idCard. */
    public idCard: string;

    /** UserOldBindReq phone. */
    public phone: string;

    /** UserOldBindReq code. */
    public code: string;

    /**
     * Creates a new UserOldBindReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserOldBindReq instance
     */
    public static create(properties?: IUserOldBindReq): UserOldBindReq;

    /**
     * Encodes the specified UserOldBindReq message. Does not implicitly {@link UserOldBindReq.verify|verify} messages.
     * @param message UserOldBindReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserOldBindReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserOldBindReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserOldBindReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserOldBindReq;
}

/** Properties of a UserOldBindResp. */
export interface IUserOldBindResp {

    /** UserOldBindResp result */
    result: boolean;
}

/** Represents a UserOldBindResp. */
export class UserOldBindResp implements IUserOldBindResp {

    /**
     * Constructs a new UserOldBindResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserOldBindResp);

    /** UserOldBindResp result. */
    public result: boolean;

    /**
     * Creates a new UserOldBindResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserOldBindResp instance
     */
    public static create(properties?: IUserOldBindResp): UserOldBindResp;

    /**
     * Encodes the specified UserOldBindResp message. Does not implicitly {@link UserOldBindResp.verify|verify} messages.
     * @param message UserOldBindResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserOldBindResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserOldBindResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserOldBindResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserOldBindResp;
}

/** Properties of a UserReviseBindReq. */
export interface IUserReviseBindReq {

    /** UserReviseBindReq idCard */
    idCard: string;

    /** UserReviseBindReq phone */
    phone: string;

    /** UserReviseBindReq code */
    code: string;

    /** UserReviseBindReq realName */
    realName: string;
}

/** Represents a UserReviseBindReq. */
export class UserReviseBindReq implements IUserReviseBindReq {

    /**
     * Constructs a new UserReviseBindReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserReviseBindReq);

    /** UserReviseBindReq idCard. */
    public idCard: string;

    /** UserReviseBindReq phone. */
    public phone: string;

    /** UserReviseBindReq code. */
    public code: string;

    /** UserReviseBindReq realName. */
    public realName: string;

    /**
     * Creates a new UserReviseBindReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserReviseBindReq instance
     */
    public static create(properties?: IUserReviseBindReq): UserReviseBindReq;

    /**
     * Encodes the specified UserReviseBindReq message. Does not implicitly {@link UserReviseBindReq.verify|verify} messages.
     * @param message UserReviseBindReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserReviseBindReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserReviseBindReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserReviseBindReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserReviseBindReq;
}

/** Properties of a UserReviseBindResp. */
export interface IUserReviseBindResp {

    /** UserReviseBindResp idCard */
    idCard: string;

    /** UserReviseBindResp phone */
    phone: string;

    /** UserReviseBindResp realName */
    realName: string;
}

/** Represents a UserReviseBindResp. */
export class UserReviseBindResp implements IUserReviseBindResp {

    /**
     * Constructs a new UserReviseBindResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserReviseBindResp);

    /** UserReviseBindResp idCard. */
    public idCard: string;

    /** UserReviseBindResp phone. */
    public phone: string;

    /** UserReviseBindResp realName. */
    public realName: string;

    /**
     * Creates a new UserReviseBindResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserReviseBindResp instance
     */
    public static create(properties?: IUserReviseBindResp): UserReviseBindResp;

    /**
     * Encodes the specified UserReviseBindResp message. Does not implicitly {@link UserReviseBindResp.verify|verify} messages.
     * @param message UserReviseBindResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserReviseBindResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserReviseBindResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserReviseBindResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserReviseBindResp;
}

/** Properties of a UserModifyLimitMoneyReq. */
export interface IUserModifyLimitMoneyReq {

    /** UserModifyLimitMoneyReq limitMoneyOfDay */
    limitMoneyOfDay: number;

    /** UserModifyLimitMoneyReq idCard */
    idCard: string;

    /** UserModifyLimitMoneyReq phoneNumber */
    phoneNumber: string;

    /** UserModifyLimitMoneyReq code */
    code: string;
}

/** Represents a UserModifyLimitMoneyReq. */
export class UserModifyLimitMoneyReq implements IUserModifyLimitMoneyReq {

    /**
     * Constructs a new UserModifyLimitMoneyReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserModifyLimitMoneyReq);

    /** UserModifyLimitMoneyReq limitMoneyOfDay. */
    public limitMoneyOfDay: number;

    /** UserModifyLimitMoneyReq idCard. */
    public idCard: string;

    /** UserModifyLimitMoneyReq phoneNumber. */
    public phoneNumber: string;

    /** UserModifyLimitMoneyReq code. */
    public code: string;

    /**
     * Creates a new UserModifyLimitMoneyReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserModifyLimitMoneyReq instance
     */
    public static create(properties?: IUserModifyLimitMoneyReq): UserModifyLimitMoneyReq;

    /**
     * Encodes the specified UserModifyLimitMoneyReq message. Does not implicitly {@link UserModifyLimitMoneyReq.verify|verify} messages.
     * @param message UserModifyLimitMoneyReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserModifyLimitMoneyReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserModifyLimitMoneyReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserModifyLimitMoneyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserModifyLimitMoneyReq;
}

/** Properties of a UserModifyLimitMoneyResp. */
export interface IUserModifyLimitMoneyResp {

    /** UserModifyLimitMoneyResp limitMoneyOfDay */
    limitMoneyOfDay: number;
}

/** Represents a UserModifyLimitMoneyResp. */
export class UserModifyLimitMoneyResp implements IUserModifyLimitMoneyResp {

    /**
     * Constructs a new UserModifyLimitMoneyResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserModifyLimitMoneyResp);

    /** UserModifyLimitMoneyResp limitMoneyOfDay. */
    public limitMoneyOfDay: number;

    /**
     * Creates a new UserModifyLimitMoneyResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserModifyLimitMoneyResp instance
     */
    public static create(properties?: IUserModifyLimitMoneyResp): UserModifyLimitMoneyResp;

    /**
     * Encodes the specified UserModifyLimitMoneyResp message. Does not implicitly {@link UserModifyLimitMoneyResp.verify|verify} messages.
     * @param message UserModifyLimitMoneyResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserModifyLimitMoneyResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserModifyLimitMoneyResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserModifyLimitMoneyResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserModifyLimitMoneyResp;
}

/** Properties of a UserModifySecondPWDReq. */
export interface IUserModifySecondPWDReq {

    /** UserModifySecondPWDReq SecondPassword */
    SecondPassword: string;

    /** UserModifySecondPWDReq phoneNumber */
    phoneNumber: string;

    /** UserModifySecondPWDReq code */
    code: string;

    /** UserModifySecondPWDReq oldSecondPassword */
    oldSecondPassword?: (string|null);
}

/** Represents a UserModifySecondPWDReq. */
export class UserModifySecondPWDReq implements IUserModifySecondPWDReq {

    /**
     * Constructs a new UserModifySecondPWDReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserModifySecondPWDReq);

    /** UserModifySecondPWDReq SecondPassword. */
    public SecondPassword: string;

    /** UserModifySecondPWDReq phoneNumber. */
    public phoneNumber: string;

    /** UserModifySecondPWDReq code. */
    public code: string;

    /** UserModifySecondPWDReq oldSecondPassword. */
    public oldSecondPassword: string;

    /**
     * Creates a new UserModifySecondPWDReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserModifySecondPWDReq instance
     */
    public static create(properties?: IUserModifySecondPWDReq): UserModifySecondPWDReq;

    /**
     * Encodes the specified UserModifySecondPWDReq message. Does not implicitly {@link UserModifySecondPWDReq.verify|verify} messages.
     * @param message UserModifySecondPWDReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserModifySecondPWDReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserModifySecondPWDReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserModifySecondPWDReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserModifySecondPWDReq;
}

/** Properties of a UserModifySecondPWDResp. */
export interface IUserModifySecondPWDResp {

    /** UserModifySecondPWDResp SecondPassword */
    SecondPassword: string;
}

/** Represents a UserModifySecondPWDResp. */
export class UserModifySecondPWDResp implements IUserModifySecondPWDResp {

    /**
     * Constructs a new UserModifySecondPWDResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserModifySecondPWDResp);

    /** UserModifySecondPWDResp SecondPassword. */
    public SecondPassword: string;

    /**
     * Creates a new UserModifySecondPWDResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserModifySecondPWDResp instance
     */
    public static create(properties?: IUserModifySecondPWDResp): UserModifySecondPWDResp;

    /**
     * Encodes the specified UserModifySecondPWDResp message. Does not implicitly {@link UserModifySecondPWDResp.verify|verify} messages.
     * @param message UserModifySecondPWDResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserModifySecondPWDResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserModifySecondPWDResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserModifySecondPWDResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserModifySecondPWDResp;
}

/** Properties of a UserBindMachinaReq. */
export interface IUserBindMachinaReq {

    /** UserBindMachinaReq code */
    code: string;

    /** UserBindMachinaReq phoneNumber */
    phoneNumber: string;

    /** UserBindMachinaReq status */
    status: number;
}

/** Represents a UserBindMachinaReq. */
export class UserBindMachinaReq implements IUserBindMachinaReq {

    /**
     * Constructs a new UserBindMachinaReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserBindMachinaReq);

    /** UserBindMachinaReq code. */
    public code: string;

    /** UserBindMachinaReq phoneNumber. */
    public phoneNumber: string;

    /** UserBindMachinaReq status. */
    public status: number;

    /**
     * Creates a new UserBindMachinaReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserBindMachinaReq instance
     */
    public static create(properties?: IUserBindMachinaReq): UserBindMachinaReq;

    /**
     * Encodes the specified UserBindMachinaReq message. Does not implicitly {@link UserBindMachinaReq.verify|verify} messages.
     * @param message UserBindMachinaReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserBindMachinaReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserBindMachinaReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserBindMachinaReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserBindMachinaReq;
}

/** Properties of a UserBindMachinaResp. */
export interface IUserBindMachinaResp {

    /** UserBindMachinaResp status */
    status: number;
}

/** Represents a UserBindMachinaResp. */
export class UserBindMachinaResp implements IUserBindMachinaResp {

    /**
     * Constructs a new UserBindMachinaResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserBindMachinaResp);

    /** UserBindMachinaResp status. */
    public status: number;

    /**
     * Creates a new UserBindMachinaResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserBindMachinaResp instance
     */
    public static create(properties?: IUserBindMachinaResp): UserBindMachinaResp;

    /**
     * Encodes the specified UserBindMachinaResp message. Does not implicitly {@link UserBindMachinaResp.verify|verify} messages.
     * @param message UserBindMachinaResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserBindMachinaResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserBindMachinaResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserBindMachinaResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserBindMachinaResp;
}

/** Properties of a UserFeedBackReq. */
export interface IUserFeedBackReq {

    /** UserFeedBackReq uid */
    uid: number;

    /** UserFeedBackReq text */
    text: string;

    /** UserFeedBackReq image */
    image?: (string|null);

    /** UserFeedBackReq version */
    version?: (string|null);
}

/** Represents a UserFeedBackReq. */
export class UserFeedBackReq implements IUserFeedBackReq {

    /**
     * Constructs a new UserFeedBackReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserFeedBackReq);

    /** UserFeedBackReq uid. */
    public uid: number;

    /** UserFeedBackReq text. */
    public text: string;

    /** UserFeedBackReq image. */
    public image: string;

    /** UserFeedBackReq version. */
    public version: string;

    /**
     * Creates a new UserFeedBackReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserFeedBackReq instance
     */
    public static create(properties?: IUserFeedBackReq): UserFeedBackReq;

    /**
     * Encodes the specified UserFeedBackReq message. Does not implicitly {@link UserFeedBackReq.verify|verify} messages.
     * @param message UserFeedBackReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserFeedBackReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserFeedBackReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserFeedBackReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserFeedBackReq;
}

/** Properties of a UserFeedBackResp. */
export interface IUserFeedBackResp {

    /** UserFeedBackResp result */
    result: boolean;
}

/** Represents a UserFeedBackResp. */
export class UserFeedBackResp implements IUserFeedBackResp {

    /**
     * Constructs a new UserFeedBackResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserFeedBackResp);

    /** UserFeedBackResp result. */
    public result: boolean;

    /**
     * Creates a new UserFeedBackResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserFeedBackResp instance
     */
    public static create(properties?: IUserFeedBackResp): UserFeedBackResp;

    /**
     * Encodes the specified UserFeedBackResp message. Does not implicitly {@link UserFeedBackResp.verify|verify} messages.
     * @param message UserFeedBackResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserFeedBackResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserFeedBackResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserFeedBackResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserFeedBackResp;
}

/** Properties of a UserSiteNcikNameReq. */
export interface IUserSiteNcikNameReq {

    /** UserSiteNcikNameReq nickName */
    nickName: string;

    /** UserSiteNcikNameReq passWord */
    passWord?: (string|null);
}

/** Represents a UserSiteNcikNameReq. */
export class UserSiteNcikNameReq implements IUserSiteNcikNameReq {

    /**
     * Constructs a new UserSiteNcikNameReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserSiteNcikNameReq);

    /** UserSiteNcikNameReq nickName. */
    public nickName: string;

    /** UserSiteNcikNameReq passWord. */
    public passWord: string;

    /**
     * Creates a new UserSiteNcikNameReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserSiteNcikNameReq instance
     */
    public static create(properties?: IUserSiteNcikNameReq): UserSiteNcikNameReq;

    /**
     * Encodes the specified UserSiteNcikNameReq message. Does not implicitly {@link UserSiteNcikNameReq.verify|verify} messages.
     * @param message UserSiteNcikNameReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserSiteNcikNameReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserSiteNcikNameReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserSiteNcikNameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserSiteNcikNameReq;
}

/** Properties of a UserSiteNcikNameResp. */
export interface IUserSiteNcikNameResp {

    /** UserSiteNcikNameResp result */
    result: boolean;

    /** UserSiteNcikNameResp reward */
    reward?: (IUserActionReward|null);
}

/** Represents a UserSiteNcikNameResp. */
export class UserSiteNcikNameResp implements IUserSiteNcikNameResp {

    /**
     * Constructs a new UserSiteNcikNameResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserSiteNcikNameResp);

    /** UserSiteNcikNameResp result. */
    public result: boolean;

    /** UserSiteNcikNameResp reward. */
    public reward?: (IUserActionReward|null);

    /**
     * Creates a new UserSiteNcikNameResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserSiteNcikNameResp instance
     */
    public static create(properties?: IUserSiteNcikNameResp): UserSiteNcikNameResp;

    /**
     * Encodes the specified UserSiteNcikNameResp message. Does not implicitly {@link UserSiteNcikNameResp.verify|verify} messages.
     * @param message UserSiteNcikNameResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserSiteNcikNameResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserSiteNcikNameResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserSiteNcikNameResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserSiteNcikNameResp;
}

/** Properties of a UserFaceIconReq. */
export interface IUserFaceIconReq {

    /** UserFaceIconReq faceIconUrl */
    faceIconUrl: string;
}

/** Represents a UserFaceIconReq. */
export class UserFaceIconReq implements IUserFaceIconReq {

    /**
     * Constructs a new UserFaceIconReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserFaceIconReq);

    /** UserFaceIconReq faceIconUrl. */
    public faceIconUrl: string;

    /**
     * Creates a new UserFaceIconReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserFaceIconReq instance
     */
    public static create(properties?: IUserFaceIconReq): UserFaceIconReq;

    /**
     * Encodes the specified UserFaceIconReq message. Does not implicitly {@link UserFaceIconReq.verify|verify} messages.
     * @param message UserFaceIconReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserFaceIconReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserFaceIconReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserFaceIconReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserFaceIconReq;
}

/** Properties of a UserFaceIconResp. */
export interface IUserFaceIconResp {

    /** UserFaceIconResp faceIconUrl */
    faceIconUrl: string;
}

/** Represents a UserFaceIconResp. */
export class UserFaceIconResp implements IUserFaceIconResp {

    /**
     * Constructs a new UserFaceIconResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserFaceIconResp);

    /** UserFaceIconResp faceIconUrl. */
    public faceIconUrl: string;

    /**
     * Creates a new UserFaceIconResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserFaceIconResp instance
     */
    public static create(properties?: IUserFaceIconResp): UserFaceIconResp;

    /**
     * Encodes the specified UserFaceIconResp message. Does not implicitly {@link UserFaceIconResp.verify|verify} messages.
     * @param message UserFaceIconResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserFaceIconResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserFaceIconResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserFaceIconResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserFaceIconResp;
}

/** Properties of a LoginGetUploadTokenReq. */
export interface ILoginGetUploadTokenReq {

    /** LoginGetUploadTokenReq content */
    content: string;
}

/** Represents a LoginGetUploadTokenReq. */
export class LoginGetUploadTokenReq implements ILoginGetUploadTokenReq {

    /**
     * Constructs a new LoginGetUploadTokenReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginGetUploadTokenReq);

    /** LoginGetUploadTokenReq content. */
    public content: string;

    /**
     * Creates a new LoginGetUploadTokenReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginGetUploadTokenReq instance
     */
    public static create(properties?: ILoginGetUploadTokenReq): LoginGetUploadTokenReq;

    /**
     * Encodes the specified LoginGetUploadTokenReq message. Does not implicitly {@link LoginGetUploadTokenReq.verify|verify} messages.
     * @param message LoginGetUploadTokenReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginGetUploadTokenReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginGetUploadTokenReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginGetUploadTokenReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginGetUploadTokenReq;
}

/** Properties of a LoginGetUploadTokenResp. */
export interface ILoginGetUploadTokenResp {

    /** LoginGetUploadTokenResp loadToken */
    loadToken: string;
}

/** Represents a LoginGetUploadTokenResp. */
export class LoginGetUploadTokenResp implements ILoginGetUploadTokenResp {

    /**
     * Constructs a new LoginGetUploadTokenResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginGetUploadTokenResp);

    /** LoginGetUploadTokenResp loadToken. */
    public loadToken: string;

    /**
     * Creates a new LoginGetUploadTokenResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginGetUploadTokenResp instance
     */
    public static create(properties?: ILoginGetUploadTokenResp): LoginGetUploadTokenResp;

    /**
     * Encodes the specified LoginGetUploadTokenResp message. Does not implicitly {@link LoginGetUploadTokenResp.verify|verify} messages.
     * @param message LoginGetUploadTokenResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginGetUploadTokenResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginGetUploadTokenResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginGetUploadTokenResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginGetUploadTokenResp;
}

/** Properties of a UserActionReward. */
export interface IUserActionReward {

    /** UserActionReward rewards */
    rewards?: (IToolItem[]|null);

    /** UserActionReward treasureUpdate */
    treasureUpdate?: (ITreasureUpdate|null);
}

/** Represents a UserActionReward. */
export class UserActionReward implements IUserActionReward {

    /**
     * Constructs a new UserActionReward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserActionReward);

    /** UserActionReward rewards. */
    public rewards: Array<IToolItem>;

    /** UserActionReward treasureUpdate. */
    public treasureUpdate?: (ITreasureUpdate|null);

    /**
     * Creates a new UserActionReward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserActionReward instance
     */
    public static create(properties?: IUserActionReward): UserActionReward;

    /**
     * Encodes the specified UserActionReward message. Does not implicitly {@link UserActionReward.verify|verify} messages.
     * @param message UserActionReward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserActionReward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserActionReward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserActionReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserActionReward;
}

/** Properties of a SecurityBoxInRecord. */
export interface ISecurityBoxInRecord {

    /** SecurityBoxInRecord fetchCode */
    fetchCode: string;

    /** SecurityBoxInRecord ownerId */
    ownerId: number;

    /** SecurityBoxInRecord items */
    items?: (IToolItem[]|null);

    /** SecurityBoxInRecord inTime */
    inTime: (number|Long);

    /** SecurityBoxInRecord status */
    status: number;

    /** SecurityBoxInRecord fetchUser */
    fetchUser?: (number|null);

    /** SecurityBoxInRecord fetchTime */
    fetchTime?: (number|Long|null);

    /** SecurityBoxInRecord overdueTime */
    overdueTime?: (number|Long|null);
}

/** Represents a SecurityBoxInRecord. */
export class SecurityBoxInRecord implements ISecurityBoxInRecord {

    /**
     * Constructs a new SecurityBoxInRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISecurityBoxInRecord);

    /** SecurityBoxInRecord fetchCode. */
    public fetchCode: string;

    /** SecurityBoxInRecord ownerId. */
    public ownerId: number;

    /** SecurityBoxInRecord items. */
    public items: Array<IToolItem>;

    /** SecurityBoxInRecord inTime. */
    public inTime: (number|Long);

    /** SecurityBoxInRecord status. */
    public status: number;

    /** SecurityBoxInRecord fetchUser. */
    public fetchUser: number;

    /** SecurityBoxInRecord fetchTime. */
    public fetchTime: (number|Long);

    /** SecurityBoxInRecord overdueTime. */
    public overdueTime: (number|Long);

    /**
     * Creates a new SecurityBoxInRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SecurityBoxInRecord instance
     */
    public static create(properties?: ISecurityBoxInRecord): SecurityBoxInRecord;

    /**
     * Encodes the specified SecurityBoxInRecord message. Does not implicitly {@link SecurityBoxInRecord.verify|verify} messages.
     * @param message SecurityBoxInRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISecurityBoxInRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SecurityBoxInRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SecurityBoxInRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecurityBoxInRecord;
}

/** Properties of a SecurityBoxRecordsResp. */
export interface ISecurityBoxRecordsResp {

    /** SecurityBoxRecordsResp records */
    records?: (ISecurityBoxInRecord[]|null);
}

/** Represents a SecurityBoxRecordsResp. */
export class SecurityBoxRecordsResp implements ISecurityBoxRecordsResp {

    /**
     * Constructs a new SecurityBoxRecordsResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISecurityBoxRecordsResp);

    /** SecurityBoxRecordsResp records. */
    public records: Array<ISecurityBoxInRecord>;

    /**
     * Creates a new SecurityBoxRecordsResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SecurityBoxRecordsResp instance
     */
    public static create(properties?: ISecurityBoxRecordsResp): SecurityBoxRecordsResp;

    /**
     * Encodes the specified SecurityBoxRecordsResp message. Does not implicitly {@link SecurityBoxRecordsResp.verify|verify} messages.
     * @param message SecurityBoxRecordsResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISecurityBoxRecordsResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SecurityBoxRecordsResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SecurityBoxRecordsResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecurityBoxRecordsResp;
}

/** Properties of a SecurityBoxInReq. */
export interface ISecurityBoxInReq {

    /** SecurityBoxInReq items */
    items?: (IToolItem[]|null);
}

/** Represents a SecurityBoxInReq. */
export class SecurityBoxInReq implements ISecurityBoxInReq {

    /**
     * Constructs a new SecurityBoxInReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISecurityBoxInReq);

    /** SecurityBoxInReq items. */
    public items: Array<IToolItem>;

    /**
     * Creates a new SecurityBoxInReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SecurityBoxInReq instance
     */
    public static create(properties?: ISecurityBoxInReq): SecurityBoxInReq;

    /**
     * Encodes the specified SecurityBoxInReq message. Does not implicitly {@link SecurityBoxInReq.verify|verify} messages.
     * @param message SecurityBoxInReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISecurityBoxInReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SecurityBoxInReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SecurityBoxInReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecurityBoxInReq;
}

/** Properties of a SecurityBoxInResp. */
export interface ISecurityBoxInResp {

    /** SecurityBoxInResp code */
    code?: (string|null);

    /** SecurityBoxInResp treasure */
    treasure?: (ITreasureUpdate|null);
}

/** Represents a SecurityBoxInResp. */
export class SecurityBoxInResp implements ISecurityBoxInResp {

    /**
     * Constructs a new SecurityBoxInResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISecurityBoxInResp);

    /** SecurityBoxInResp code. */
    public code: string;

    /** SecurityBoxInResp treasure. */
    public treasure?: (ITreasureUpdate|null);

    /**
     * Creates a new SecurityBoxInResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SecurityBoxInResp instance
     */
    public static create(properties?: ISecurityBoxInResp): SecurityBoxInResp;

    /**
     * Encodes the specified SecurityBoxInResp message. Does not implicitly {@link SecurityBoxInResp.verify|verify} messages.
     * @param message SecurityBoxInResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISecurityBoxInResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SecurityBoxInResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SecurityBoxInResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecurityBoxInResp;
}

/** Properties of a SecurityBoxOutReq. */
export interface ISecurityBoxOutReq {

    /** SecurityBoxOutReq code */
    code: string;
}

/** Represents a SecurityBoxOutReq. */
export class SecurityBoxOutReq implements ISecurityBoxOutReq {

    /**
     * Constructs a new SecurityBoxOutReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISecurityBoxOutReq);

    /** SecurityBoxOutReq code. */
    public code: string;

    /**
     * Creates a new SecurityBoxOutReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SecurityBoxOutReq instance
     */
    public static create(properties?: ISecurityBoxOutReq): SecurityBoxOutReq;

    /**
     * Encodes the specified SecurityBoxOutReq message. Does not implicitly {@link SecurityBoxOutReq.verify|verify} messages.
     * @param message SecurityBoxOutReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISecurityBoxOutReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SecurityBoxOutReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SecurityBoxOutReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecurityBoxOutReq;
}

/** Properties of a SecurityBoxOutResp. */
export interface ISecurityBoxOutResp {

    /** SecurityBoxOutResp item */
    item?: (IToolItem[]|null);

    /** SecurityBoxOutResp treasure */
    treasure?: (ITreasureUpdate|null);
}

/** Represents a SecurityBoxOutResp. */
export class SecurityBoxOutResp implements ISecurityBoxOutResp {

    /**
     * Constructs a new SecurityBoxOutResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISecurityBoxOutResp);

    /** SecurityBoxOutResp item. */
    public item: Array<IToolItem>;

    /** SecurityBoxOutResp treasure. */
    public treasure?: (ITreasureUpdate|null);

    /**
     * Creates a new SecurityBoxOutResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SecurityBoxOutResp instance
     */
    public static create(properties?: ISecurityBoxOutResp): SecurityBoxOutResp;

    /**
     * Encodes the specified SecurityBoxOutResp message. Does not implicitly {@link SecurityBoxOutResp.verify|verify} messages.
     * @param message SecurityBoxOutResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISecurityBoxOutResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SecurityBoxOutResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SecurityBoxOutResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecurityBoxOutResp;
}

/** Properties of a UserRedEnvelopesInfoResp. */
export interface IUserRedEnvelopesInfoResp {

    /** UserRedEnvelopesInfoResp money */
    money: number;

    /** UserRedEnvelopesInfoResp ratio */
    ratio: string;

    /** UserRedEnvelopesInfoResp limitMoney */
    limitMoney: number;

    /** UserRedEnvelopesInfoResp limitVip */
    limitVip: number;

    /** UserRedEnvelopesInfoResp roomRedEnvelopesItem */
    roomRedEnvelopesItem?: (IRoomRedEnvelopesItem[]|null);
}

/** Represents a UserRedEnvelopesInfoResp. */
export class UserRedEnvelopesInfoResp implements IUserRedEnvelopesInfoResp {

    /**
     * Constructs a new UserRedEnvelopesInfoResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserRedEnvelopesInfoResp);

    /** UserRedEnvelopesInfoResp money. */
    public money: number;

    /** UserRedEnvelopesInfoResp ratio. */
    public ratio: string;

    /** UserRedEnvelopesInfoResp limitMoney. */
    public limitMoney: number;

    /** UserRedEnvelopesInfoResp limitVip. */
    public limitVip: number;

    /** UserRedEnvelopesInfoResp roomRedEnvelopesItem. */
    public roomRedEnvelopesItem: Array<IRoomRedEnvelopesItem>;

    /**
     * Creates a new UserRedEnvelopesInfoResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserRedEnvelopesInfoResp instance
     */
    public static create(properties?: IUserRedEnvelopesInfoResp): UserRedEnvelopesInfoResp;

    /**
     * Encodes the specified UserRedEnvelopesInfoResp message. Does not implicitly {@link UserRedEnvelopesInfoResp.verify|verify} messages.
     * @param message UserRedEnvelopesInfoResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserRedEnvelopesInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserRedEnvelopesInfoResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserRedEnvelopesInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserRedEnvelopesInfoResp;
}

/** Properties of a UserRoomRedEnvelopesListResp. */
export interface IUserRoomRedEnvelopesListResp {

    /** UserRoomRedEnvelopesListResp roomRedEnvelopesItem */
    roomRedEnvelopesItem?: (IRoomRedEnvelopesItem[]|null);
}

/** Represents a UserRoomRedEnvelopesListResp. */
export class UserRoomRedEnvelopesListResp implements IUserRoomRedEnvelopesListResp {

    /**
     * Constructs a new UserRoomRedEnvelopesListResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserRoomRedEnvelopesListResp);

    /** UserRoomRedEnvelopesListResp roomRedEnvelopesItem. */
    public roomRedEnvelopesItem: Array<IRoomRedEnvelopesItem>;

    /**
     * Creates a new UserRoomRedEnvelopesListResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserRoomRedEnvelopesListResp instance
     */
    public static create(properties?: IUserRoomRedEnvelopesListResp): UserRoomRedEnvelopesListResp;

    /**
     * Encodes the specified UserRoomRedEnvelopesListResp message. Does not implicitly {@link UserRoomRedEnvelopesListResp.verify|verify} messages.
     * @param message UserRoomRedEnvelopesListResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserRoomRedEnvelopesListResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserRoomRedEnvelopesListResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserRoomRedEnvelopesListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserRoomRedEnvelopesListResp;
}

/** Properties of a RoomRedEnvelopesItem. */
export interface IRoomRedEnvelopesItem {

    /** RoomRedEnvelopesItem times */
    times: (number|Long);

    /** RoomRedEnvelopesItem roomName */
    roomName: string;

    /** RoomRedEnvelopesItem canDraw */
    canDraw?: (number|null);

    /** RoomRedEnvelopesItem roomId */
    roomId?: (number|null);
}

/** Represents a RoomRedEnvelopesItem. */
export class RoomRedEnvelopesItem implements IRoomRedEnvelopesItem {

    /**
     * Constructs a new RoomRedEnvelopesItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomRedEnvelopesItem);

    /** RoomRedEnvelopesItem times. */
    public times: (number|Long);

    /** RoomRedEnvelopesItem roomName. */
    public roomName: string;

    /** RoomRedEnvelopesItem canDraw. */
    public canDraw: number;

    /** RoomRedEnvelopesItem roomId. */
    public roomId: number;

    /**
     * Creates a new RoomRedEnvelopesItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomRedEnvelopesItem instance
     */
    public static create(properties?: IRoomRedEnvelopesItem): RoomRedEnvelopesItem;

    /**
     * Encodes the specified RoomRedEnvelopesItem message. Does not implicitly {@link RoomRedEnvelopesItem.verify|verify} messages.
     * @param message RoomRedEnvelopesItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomRedEnvelopesItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomRedEnvelopesItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomRedEnvelopesItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomRedEnvelopesItem;
}

/** Properties of a UserRoomRedEnvelopesInfoResp. */
export interface IUserRoomRedEnvelopesInfoResp {

    /** UserRoomRedEnvelopesInfoResp needScore */
    needScore: (number|Long);

    /** UserRoomRedEnvelopesInfoResp nowScore */
    nowScore: (number|Long);

    /** UserRoomRedEnvelopesInfoResp times */
    times: (number|Long);

    /** UserRoomRedEnvelopesInfoResp money */
    money: number;

    /** UserRoomRedEnvelopesInfoResp redEnvelopesItems */
    redEnvelopesItems?: (IRedEnvelopesItem[]|null);

    /** UserRoomRedEnvelopesInfoResp endTime */
    endTime: (number|Long);

    /** UserRoomRedEnvelopesInfoResp minCannon */
    minCannon: number;
}

/** Represents a UserRoomRedEnvelopesInfoResp. */
export class UserRoomRedEnvelopesInfoResp implements IUserRoomRedEnvelopesInfoResp {

    /**
     * Constructs a new UserRoomRedEnvelopesInfoResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserRoomRedEnvelopesInfoResp);

    /** UserRoomRedEnvelopesInfoResp needScore. */
    public needScore: (number|Long);

    /** UserRoomRedEnvelopesInfoResp nowScore. */
    public nowScore: (number|Long);

    /** UserRoomRedEnvelopesInfoResp times. */
    public times: (number|Long);

    /** UserRoomRedEnvelopesInfoResp money. */
    public money: number;

    /** UserRoomRedEnvelopesInfoResp redEnvelopesItems. */
    public redEnvelopesItems: Array<IRedEnvelopesItem>;

    /** UserRoomRedEnvelopesInfoResp endTime. */
    public endTime: (number|Long);

    /** UserRoomRedEnvelopesInfoResp minCannon. */
    public minCannon: number;

    /**
     * Creates a new UserRoomRedEnvelopesInfoResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserRoomRedEnvelopesInfoResp instance
     */
    public static create(properties?: IUserRoomRedEnvelopesInfoResp): UserRoomRedEnvelopesInfoResp;

    /**
     * Encodes the specified UserRoomRedEnvelopesInfoResp message. Does not implicitly {@link UserRoomRedEnvelopesInfoResp.verify|verify} messages.
     * @param message UserRoomRedEnvelopesInfoResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserRoomRedEnvelopesInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserRoomRedEnvelopesInfoResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserRoomRedEnvelopesInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserRoomRedEnvelopesInfoResp;
}

/** Properties of an OtherRoomRedEnvelopesItemResp. */
export interface IOtherRoomRedEnvelopesItemResp {

    /** OtherRoomRedEnvelopesItemResp redEnvelopesItems */
    redEnvelopesItems?: (IRedEnvelopesItem[]|null);
}

/** Represents an OtherRoomRedEnvelopesItemResp. */
export class OtherRoomRedEnvelopesItemResp implements IOtherRoomRedEnvelopesItemResp {

    /**
     * Constructs a new OtherRoomRedEnvelopesItemResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOtherRoomRedEnvelopesItemResp);

    /** OtherRoomRedEnvelopesItemResp redEnvelopesItems. */
    public redEnvelopesItems: Array<IRedEnvelopesItem>;

    /**
     * Creates a new OtherRoomRedEnvelopesItemResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OtherRoomRedEnvelopesItemResp instance
     */
    public static create(properties?: IOtherRoomRedEnvelopesItemResp): OtherRoomRedEnvelopesItemResp;

    /**
     * Encodes the specified OtherRoomRedEnvelopesItemResp message. Does not implicitly {@link OtherRoomRedEnvelopesItemResp.verify|verify} messages.
     * @param message OtherRoomRedEnvelopesItemResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOtherRoomRedEnvelopesItemResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OtherRoomRedEnvelopesItemResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OtherRoomRedEnvelopesItemResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OtherRoomRedEnvelopesItemResp;
}

/** Properties of a RedEnvelopesItem. */
export interface IRedEnvelopesItem {

    /** RedEnvelopesItem index */
    index: number;

    /** RedEnvelopesItem money */
    money: number;
}

/** Represents a RedEnvelopesItem. */
export class RedEnvelopesItem implements IRedEnvelopesItem {

    /**
     * Constructs a new RedEnvelopesItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedEnvelopesItem);

    /** RedEnvelopesItem index. */
    public index: number;

    /** RedEnvelopesItem money. */
    public money: number;

    /**
     * Creates a new RedEnvelopesItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedEnvelopesItem instance
     */
    public static create(properties?: IRedEnvelopesItem): RedEnvelopesItem;

    /**
     * Encodes the specified RedEnvelopesItem message. Does not implicitly {@link RedEnvelopesItem.verify|verify} messages.
     * @param message RedEnvelopesItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedEnvelopesItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedEnvelopesItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedEnvelopesItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedEnvelopesItem;
}

/** Properties of a drawEachRoomReq. */
export interface IdrawEachRoomReq {

    /** drawEachRoomReq roomId */
    roomId: number;
}

/** Represents a drawEachRoomReq. */
export class drawEachRoomReq implements IdrawEachRoomReq {

    /**
     * Constructs a new drawEachRoomReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IdrawEachRoomReq);

    /** drawEachRoomReq roomId. */
    public roomId: number;

    /**
     * Creates a new drawEachRoomReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns drawEachRoomReq instance
     */
    public static create(properties?: IdrawEachRoomReq): drawEachRoomReq;

    /**
     * Encodes the specified drawEachRoomReq message. Does not implicitly {@link drawEachRoomReq.verify|verify} messages.
     * @param message drawEachRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IdrawEachRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a drawEachRoomReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns drawEachRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): drawEachRoomReq;
}

/** Properties of a DrawRedEnvelopesResp. */
export interface IDrawRedEnvelopesResp {

    /** DrawRedEnvelopesResp redEnvelopesItem */
    redEnvelopesItem: IRedEnvelopesItem;

    /** DrawRedEnvelopesResp times */
    times: (number|Long);

    /** DrawRedEnvelopesResp nowScore */
    nowScore: (number|Long);

    /** DrawRedEnvelopesResp money */
    money: number;

    /** DrawRedEnvelopesResp needScore */
    needScore: (number|Long);
}

/** Represents a DrawRedEnvelopesResp. */
export class DrawRedEnvelopesResp implements IDrawRedEnvelopesResp {

    /**
     * Constructs a new DrawRedEnvelopesResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDrawRedEnvelopesResp);

    /** DrawRedEnvelopesResp redEnvelopesItem. */
    public redEnvelopesItem: IRedEnvelopesItem;

    /** DrawRedEnvelopesResp times. */
    public times: (number|Long);

    /** DrawRedEnvelopesResp nowScore. */
    public nowScore: (number|Long);

    /** DrawRedEnvelopesResp money. */
    public money: number;

    /** DrawRedEnvelopesResp needScore. */
    public needScore: (number|Long);

    /**
     * Creates a new DrawRedEnvelopesResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DrawRedEnvelopesResp instance
     */
    public static create(properties?: IDrawRedEnvelopesResp): DrawRedEnvelopesResp;

    /**
     * Encodes the specified DrawRedEnvelopesResp message. Does not implicitly {@link DrawRedEnvelopesResp.verify|verify} messages.
     * @param message DrawRedEnvelopesResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDrawRedEnvelopesResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DrawRedEnvelopesResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DrawRedEnvelopesResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DrawRedEnvelopesResp;
}

/** Properties of an ExchangeRedEnvelopesItem. */
export interface IExchangeRedEnvelopesItem {

    /** ExchangeRedEnvelopesItem itemId */
    itemId: number;

    /** ExchangeRedEnvelopesItem count */
    count: number;

    /** ExchangeRedEnvelopesItem needMoney */
    needMoney: number;

    /** ExchangeRedEnvelopesItem itemVipLimit */
    itemVipLimit: number;

    /** ExchangeRedEnvelopesItem isExchangeDay */
    isExchangeDay: number;
}

/** Represents an ExchangeRedEnvelopesItem. */
export class ExchangeRedEnvelopesItem implements IExchangeRedEnvelopesItem {

    /**
     * Constructs a new ExchangeRedEnvelopesItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExchangeRedEnvelopesItem);

    /** ExchangeRedEnvelopesItem itemId. */
    public itemId: number;

    /** ExchangeRedEnvelopesItem count. */
    public count: number;

    /** ExchangeRedEnvelopesItem needMoney. */
    public needMoney: number;

    /** ExchangeRedEnvelopesItem itemVipLimit. */
    public itemVipLimit: number;

    /** ExchangeRedEnvelopesItem isExchangeDay. */
    public isExchangeDay: number;

    /**
     * Creates a new ExchangeRedEnvelopesItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeRedEnvelopesItem instance
     */
    public static create(properties?: IExchangeRedEnvelopesItem): ExchangeRedEnvelopesItem;

    /**
     * Encodes the specified ExchangeRedEnvelopesItem message. Does not implicitly {@link ExchangeRedEnvelopesItem.verify|verify} messages.
     * @param message ExchangeRedEnvelopesItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExchangeRedEnvelopesItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeRedEnvelopesItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExchangeRedEnvelopesItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExchangeRedEnvelopesItem;
}

/** Properties of an ExchangeListResp. */
export interface IExchangeListResp {

    /** ExchangeListResp exchangeRedEnvelopesItemList */
    exchangeRedEnvelopesItemList?: (IExchangeRedEnvelopesItem[]|null);
}

/** Represents an ExchangeListResp. */
export class ExchangeListResp implements IExchangeListResp {

    /**
     * Constructs a new ExchangeListResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExchangeListResp);

    /** ExchangeListResp exchangeRedEnvelopesItemList. */
    public exchangeRedEnvelopesItemList: Array<IExchangeRedEnvelopesItem>;

    /**
     * Creates a new ExchangeListResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeListResp instance
     */
    public static create(properties?: IExchangeListResp): ExchangeListResp;

    /**
     * Encodes the specified ExchangeListResp message. Does not implicitly {@link ExchangeListResp.verify|verify} messages.
     * @param message ExchangeListResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExchangeListResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeListResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExchangeListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExchangeListResp;
}

/** Properties of an ExchangeItemReq. */
export interface IExchangeItemReq {

    /** ExchangeItemReq toolItem */
    toolItem: IToolItem;
}

/** Represents an ExchangeItemReq. */
export class ExchangeItemReq implements IExchangeItemReq {

    /**
     * Constructs a new ExchangeItemReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExchangeItemReq);

    /** ExchangeItemReq toolItem. */
    public toolItem: IToolItem;

    /**
     * Creates a new ExchangeItemReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeItemReq instance
     */
    public static create(properties?: IExchangeItemReq): ExchangeItemReq;

    /**
     * Encodes the specified ExchangeItemReq message. Does not implicitly {@link ExchangeItemReq.verify|verify} messages.
     * @param message ExchangeItemReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExchangeItemReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeItemReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExchangeItemReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExchangeItemReq;
}

/** Properties of an ExchangeItemResp. */
export interface IExchangeItemResp {

    /** ExchangeItemResp money */
    money: number;

    /** ExchangeItemResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;
}

/** Represents an ExchangeItemResp. */
export class ExchangeItemResp implements IExchangeItemResp {

    /**
     * Constructs a new ExchangeItemResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExchangeItemResp);

    /** ExchangeItemResp money. */
    public money: number;

    /** ExchangeItemResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /**
     * Creates a new ExchangeItemResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeItemResp instance
     */
    public static create(properties?: IExchangeItemResp): ExchangeItemResp;

    /**
     * Encodes the specified ExchangeItemResp message. Does not implicitly {@link ExchangeItemResp.verify|verify} messages.
     * @param message ExchangeItemResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExchangeItemResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeItemResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExchangeItemResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExchangeItemResp;
}

/** RedPointID enum. */
export enum RedPointID {
    RP_SetNick = 101,
    RP_BindPhone = 102,
    RP_Pack = 103,
    RP_Email = 104,
    RP_QuanMinMatch = 105,
    RP_DaJiangMatch = 106,
    RP_QuanMinReward = 107,
    RP_DaJiangReward = 108,
    RP_CodeRedPack = 109,
    RP_UnLockCannon = 110,
    RP_DailyTask = 111,
    RP_SevenDaysPackage = 112,
    RP_CannonSkin = 113,
    RP_BUG_Activity = 114,
    RP_GZH_Activity = 115,
    RP_JSDR_Activity = 116,
    RP_SLBX_Activity = 117,
    RP_NoticeUnread = 118,
    RP_New_Activity = 119,
    RP_STOREAPP_TIPS = 120,
    RP_STOREAPP_ENABLE = 121,
    RP_GUANZHU_TIPS = 122,
    RP_GUANZHU_ENABLE = 123,
    RP_WEIXIN_BIND = 124,
    RP_RECHARGE_1BY2 = 125,
    RP_DAYGIFT_FREE = 126,
    RP_DAYGIFT_UPLEVEL = 127,
    RP_OLDPLAYER_BUTTON = 128,
    RP_OLDPLAYER_LEIDENG = 129,
    RP_OLDPLAYER_PRITASK = 130,
    RP_OLDPLAYER_ERZHE = 131,
    RP_WEIXIN_BIND_RECV = 132,
    RP_SUPER_PACK_BUTTON = 133,
    RP_SP_GROW_PACK = 134,
    RP_SP_INVEST_PLAN = 135,
    RP_GIFTMALL = 136,
    RP_SEVEN_SIGN = 137,
    RP_DAILY_TASK = 139,
    RP_GROW_TASK = 140,
    RP_SECONDARY_CANNON = 141,
    RP_ACT_DAILY_SCORE = 142,
    RP_ACT_SETDAY_RECHARGE = 143,
    RP_ACT_DAILY_RECHARGE = 144,
    RP_ACT_SETDAY_SCORE = 145,
    RP_DAY_FIRST_ACT = 146
}

/** Properties of a RedPointInfo. */
export interface IRedPointInfo {

    /** RedPointInfo id */
    id: number;

    /** RedPointInfo show */
    show: boolean;

    /** RedPointInfo para */
    para?: (string|null);
}

/** Represents a RedPointInfo. */
export class RedPointInfo implements IRedPointInfo {

    /**
     * Constructs a new RedPointInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedPointInfo);

    /** RedPointInfo id. */
    public id: number;

    /** RedPointInfo show. */
    public show: boolean;

    /** RedPointInfo para. */
    public para: string;

    /**
     * Creates a new RedPointInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedPointInfo instance
     */
    public static create(properties?: IRedPointInfo): RedPointInfo;

    /**
     * Encodes the specified RedPointInfo message. Does not implicitly {@link RedPointInfo.verify|verify} messages.
     * @param message RedPointInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedPointInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedPointInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedPointInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedPointInfo;
}

/** Properties of an onlineSyncRedPoints. */
export interface IonlineSyncRedPoints {

    /** onlineSyncRedPoints redpoints */
    redpoints?: (IRedPointInfo[]|null);
}

/** Represents an onlineSyncRedPoints. */
export class onlineSyncRedPoints implements IonlineSyncRedPoints {

    /**
     * Constructs a new onlineSyncRedPoints.
     * @param [properties] Properties to set
     */
    constructor(properties?: IonlineSyncRedPoints);

    /** onlineSyncRedPoints redpoints. */
    public redpoints: Array<IRedPointInfo>;

    /**
     * Creates a new onlineSyncRedPoints instance using the specified properties.
     * @param [properties] Properties to set
     * @returns onlineSyncRedPoints instance
     */
    public static create(properties?: IonlineSyncRedPoints): onlineSyncRedPoints;

    /**
     * Encodes the specified onlineSyncRedPoints message. Does not implicitly {@link onlineSyncRedPoints.verify|verify} messages.
     * @param message onlineSyncRedPoints message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IonlineSyncRedPoints, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an onlineSyncRedPoints message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns onlineSyncRedPoints
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onlineSyncRedPoints;
}

/** Properties of a refreshRedPoint. */
export interface IrefreshRedPoint {

    /** refreshRedPoint redpoint */
    redpoint?: (IRedPointInfo|null);
}

/** Represents a refreshRedPoint. */
export class refreshRedPoint implements IrefreshRedPoint {

    /**
     * Constructs a new refreshRedPoint.
     * @param [properties] Properties to set
     */
    constructor(properties?: IrefreshRedPoint);

    /** refreshRedPoint redpoint. */
    public redpoint?: (IRedPointInfo|null);

    /**
     * Creates a new refreshRedPoint instance using the specified properties.
     * @param [properties] Properties to set
     * @returns refreshRedPoint instance
     */
    public static create(properties?: IrefreshRedPoint): refreshRedPoint;

    /**
     * Encodes the specified refreshRedPoint message. Does not implicitly {@link refreshRedPoint.verify|verify} messages.
     * @param message refreshRedPoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IrefreshRedPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a refreshRedPoint message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns refreshRedPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): refreshRedPoint;
}

/** Properties of a hideRedPointReq. */
export interface IhideRedPointReq {

    /** hideRedPointReq id */
    id: number;

    /** hideRedPointReq para */
    para?: (string|null);
}

/** Represents a hideRedPointReq. */
export class hideRedPointReq implements IhideRedPointReq {

    /**
     * Constructs a new hideRedPointReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IhideRedPointReq);

    /** hideRedPointReq id. */
    public id: number;

    /** hideRedPointReq para. */
    public para: string;

    /**
     * Creates a new hideRedPointReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns hideRedPointReq instance
     */
    public static create(properties?: IhideRedPointReq): hideRedPointReq;

    /**
     * Encodes the specified hideRedPointReq message. Does not implicitly {@link hideRedPointReq.verify|verify} messages.
     * @param message hideRedPointReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IhideRedPointReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a hideRedPointReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns hideRedPointReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hideRedPointReq;
}

/** StateIdEnum enum. */
export enum StateIdEnum {
    State_NewPlayer = 1,
    State_RealNameVerify = 2,
    State_NewPlayer_Guide = 3,
    State_Day_FirstLogin = 4,
    State_OldPlayer_Return = 5,
    State_MonthCardAward = 6,
    State_SevenDay_SignUp = 7,
    State_ReliefFund = 8,
    State_DailyGift = 9,
    State_LoginQuery = 10,
    State_Activity = 11,
    State_FirstCharge = 12,
    State_MonthCard = 13,
    State_Announcement = 14,
    State_Invest = 15
}

/** Properties of a StateInfo. */
export interface IStateInfo {

    /** StateInfo stateId */
    stateId: number;

    /** StateInfo showFlag */
    showFlag: boolean;
}

/** Represents a StateInfo. */
export class StateInfo implements IStateInfo {

    /**
     * Constructs a new StateInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStateInfo);

    /** StateInfo stateId. */
    public stateId: number;

    /** StateInfo showFlag. */
    public showFlag: boolean;

    /**
     * Creates a new StateInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StateInfo instance
     */
    public static create(properties?: IStateInfo): StateInfo;

    /**
     * Encodes the specified StateInfo message. Does not implicitly {@link StateInfo.verify|verify} messages.
     * @param message StateInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StateInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StateInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StateInfo;
}

/** Properties of an onlineSyncUserStateInfos. */
export interface IonlineSyncUserStateInfos {

    /** onlineSyncUserStateInfos state */
    state?: (IStateInfo[]|null);
}

/** Represents an onlineSyncUserStateInfos. */
export class onlineSyncUserStateInfos implements IonlineSyncUserStateInfos {

    /**
     * Constructs a new onlineSyncUserStateInfos.
     * @param [properties] Properties to set
     */
    constructor(properties?: IonlineSyncUserStateInfos);

    /** onlineSyncUserStateInfos state. */
    public state: Array<IStateInfo>;

    /**
     * Creates a new onlineSyncUserStateInfos instance using the specified properties.
     * @param [properties] Properties to set
     * @returns onlineSyncUserStateInfos instance
     */
    public static create(properties?: IonlineSyncUserStateInfos): onlineSyncUserStateInfos;

    /**
     * Encodes the specified onlineSyncUserStateInfos message. Does not implicitly {@link onlineSyncUserStateInfos.verify|verify} messages.
     * @param message onlineSyncUserStateInfos message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IonlineSyncUserStateInfos, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an onlineSyncUserStateInfos message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns onlineSyncUserStateInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onlineSyncUserStateInfos;
}

/** Properties of a refreshUserStateInfo. */
export interface IrefreshUserStateInfo {

    /** refreshUserStateInfo state */
    state?: (IStateInfo|null);
}

/** Represents a refreshUserStateInfo. */
export class refreshUserStateInfo implements IrefreshUserStateInfo {

    /**
     * Constructs a new refreshUserStateInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IrefreshUserStateInfo);

    /** refreshUserStateInfo state. */
    public state?: (IStateInfo|null);

    /**
     * Creates a new refreshUserStateInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns refreshUserStateInfo instance
     */
    public static create(properties?: IrefreshUserStateInfo): refreshUserStateInfo;

    /**
     * Encodes the specified refreshUserStateInfo message. Does not implicitly {@link refreshUserStateInfo.verify|verify} messages.
     * @param message refreshUserStateInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IrefreshUserStateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a refreshUserStateInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns refreshUserStateInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): refreshUserStateInfo;
}

/** ReliefState enum. */
export enum ReliefState {
    State_NORMAL = 0,
    State_POCHAN = 1,
    State_RERICH = 2
}

/** Properties of a ReliefFundHappen. */
export interface IReliefFundHappen {

    /** ReliefFundHappen uid */
    uid: number;
}

/** Represents a ReliefFundHappen. */
export class ReliefFundHappen implements IReliefFundHappen {

    /**
     * Constructs a new ReliefFundHappen.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReliefFundHappen);

    /** ReliefFundHappen uid. */
    public uid: number;

    /**
     * Creates a new ReliefFundHappen instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReliefFundHappen instance
     */
    public static create(properties?: IReliefFundHappen): ReliefFundHappen;

    /**
     * Encodes the specified ReliefFundHappen message. Does not implicitly {@link ReliefFundHappen.verify|verify} messages.
     * @param message ReliefFundHappen message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReliefFundHappen, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReliefFundHappen message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReliefFundHappen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReliefFundHappen;
}

/** Properties of a ReliefFundInfo. */
export interface IReliefFundInfo {

    /** ReliefFundInfo uid */
    uid: number;

    /** ReliefFundInfo state */
    state?: (number|null);

    /** ReliefFundInfo begintime */
    begintime?: (number|Long|null);

    /** ReliefFundInfo endtime */
    endtime?: (number|Long|null);

    /** ReliefFundInfo daytimes */
    daytimes?: (number|null);
}

/** Represents a ReliefFundInfo. */
export class ReliefFundInfo implements IReliefFundInfo {

    /**
     * Constructs a new ReliefFundInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReliefFundInfo);

    /** ReliefFundInfo uid. */
    public uid: number;

    /** ReliefFundInfo state. */
    public state: number;

    /** ReliefFundInfo begintime. */
    public begintime: (number|Long);

    /** ReliefFundInfo endtime. */
    public endtime: (number|Long);

    /** ReliefFundInfo daytimes. */
    public daytimes: number;

    /**
     * Creates a new ReliefFundInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReliefFundInfo instance
     */
    public static create(properties?: IReliefFundInfo): ReliefFundInfo;

    /**
     * Encodes the specified ReliefFundInfo message. Does not implicitly {@link ReliefFundInfo.verify|verify} messages.
     * @param message ReliefFundInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReliefFundInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReliefFundInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReliefFundInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReliefFundInfo;
}

/** Properties of a ReqGetReliefFund. */
export interface IReqGetReliefFund {

    /** ReqGetReliefFund shareAndIgnoreTimeLimit */
    shareAndIgnoreTimeLimit?: (boolean|null);
}

/** Represents a ReqGetReliefFund. */
export class ReqGetReliefFund implements IReqGetReliefFund {

    /**
     * Constructs a new ReqGetReliefFund.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetReliefFund);

    /** ReqGetReliefFund shareAndIgnoreTimeLimit. */
    public shareAndIgnoreTimeLimit: boolean;

    /**
     * Creates a new ReqGetReliefFund instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetReliefFund instance
     */
    public static create(properties?: IReqGetReliefFund): ReqGetReliefFund;

    /**
     * Encodes the specified ReqGetReliefFund message. Does not implicitly {@link ReqGetReliefFund.verify|verify} messages.
     * @param message ReqGetReliefFund message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetReliefFund, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetReliefFund message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetReliefFund
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetReliefFund;
}

/** Properties of a GetReliefFundRet. */
export interface IGetReliefFundRet {

    /** GetReliefFundRet awardScore */
    awardScore?: (number|null);

    /** GetReliefFundRet curScore */
    curScore?: (number|Long|null);

    /** GetReliefFundRet treasure */
    treasure?: (ITreasureUpdate|null);
}

/** Represents a GetReliefFundRet. */
export class GetReliefFundRet implements IGetReliefFundRet {

    /**
     * Constructs a new GetReliefFundRet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetReliefFundRet);

    /** GetReliefFundRet awardScore. */
    public awardScore: number;

    /** GetReliefFundRet curScore. */
    public curScore: (number|Long);

    /** GetReliefFundRet treasure. */
    public treasure?: (ITreasureUpdate|null);

    /**
     * Creates a new GetReliefFundRet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetReliefFundRet instance
     */
    public static create(properties?: IGetReliefFundRet): GetReliefFundRet;

    /**
     * Encodes the specified GetReliefFundRet message. Does not implicitly {@link GetReliefFundRet.verify|verify} messages.
     * @param message GetReliefFundRet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetReliefFundRet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetReliefFundRet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetReliefFundRet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetReliefFundRet;
}

/** Properties of a SkillListResp. */
export interface ISkillListResp {

    /** SkillListResp items */
    items?: (ISkillInfo[]|null);
}

/** Represents a SkillListResp. */
export class SkillListResp implements ISkillListResp {

    /**
     * Constructs a new SkillListResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISkillListResp);

    /** SkillListResp items. */
    public items: Array<ISkillInfo>;

    /**
     * Creates a new SkillListResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SkillListResp instance
     */
    public static create(properties?: ISkillListResp): SkillListResp;

    /**
     * Encodes the specified SkillListResp message. Does not implicitly {@link SkillListResp.verify|verify} messages.
     * @param message SkillListResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISkillListResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SkillListResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SkillListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SkillListResp;
}

/** Properties of a SkillInfo. */
export interface ISkillInfo {

    /** SkillInfo id */
    id: string;

    /** SkillInfo name */
    name: string;

    /** SkillInfo vip */
    vip: number;

    /** SkillInfo consumeSomeThing */
    consumeSomeThing: number;

    /** SkillInfo itemCosts */
    itemCosts: string;

    /** SkillInfo itemSecondCost */
    itemSecondCost: string;

    /** SkillInfo duration */
    duration: number;

    /** SkillInfo skillGroup */
    skillGroup: number;

    /** SkillInfo gcd */
    gcd: number;

    /** SkillInfo cd */
    cd: number;

    /** SkillInfo hiddenPoses */
    hiddenPoses: string;

    /** SkillInfo describe */
    describe: string;

    /** SkillInfo openCanon */
    openCanon?: (number|null);

    /** SkillInfo sort */
    sort?: (number|null);
}

/** Represents a SkillInfo. */
export class SkillInfo implements ISkillInfo {

    /**
     * Constructs a new SkillInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISkillInfo);

    /** SkillInfo id. */
    public id: string;

    /** SkillInfo name. */
    public name: string;

    /** SkillInfo vip. */
    public vip: number;

    /** SkillInfo consumeSomeThing. */
    public consumeSomeThing: number;

    /** SkillInfo itemCosts. */
    public itemCosts: string;

    /** SkillInfo itemSecondCost. */
    public itemSecondCost: string;

    /** SkillInfo duration. */
    public duration: number;

    /** SkillInfo skillGroup. */
    public skillGroup: number;

    /** SkillInfo gcd. */
    public gcd: number;

    /** SkillInfo cd. */
    public cd: number;

    /** SkillInfo hiddenPoses. */
    public hiddenPoses: string;

    /** SkillInfo describe. */
    public describe: string;

    /** SkillInfo openCanon. */
    public openCanon: number;

    /** SkillInfo sort. */
    public sort: number;

    /**
     * Creates a new SkillInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SkillInfo instance
     */
    public static create(properties?: ISkillInfo): SkillInfo;

    /**
     * Encodes the specified SkillInfo message. Does not implicitly {@link SkillInfo.verify|verify} messages.
     * @param message SkillInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISkillInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SkillInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SkillInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SkillInfo;
}

/** Properties of a SkillUseReq. */
export interface ISkillUseReq {

    /** SkillUseReq id */
    id: string;
}

/** Represents a SkillUseReq. */
export class SkillUseReq implements ISkillUseReq {

    /**
     * Constructs a new SkillUseReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISkillUseReq);

    /** SkillUseReq id. */
    public id: string;

    /**
     * Creates a new SkillUseReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SkillUseReq instance
     */
    public static create(properties?: ISkillUseReq): SkillUseReq;

    /**
     * Encodes the specified SkillUseReq message. Does not implicitly {@link SkillUseReq.verify|verify} messages.
     * @param message SkillUseReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISkillUseReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SkillUseReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SkillUseReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SkillUseReq;
}

/** Properties of a SkillUseResp. */
export interface ISkillUseResp {

    /** SkillUseResp result */
    result: number;

    /** SkillUseResp status */
    status: SkillUseResp.SkillStatusEnum;

    /** SkillUseResp treasureUpdate */
    treasureUpdate?: (ITreasureUpdate|null);

    /** SkillUseResp id */
    id?: (string|null);
}

/** Represents a SkillUseResp. */
export class SkillUseResp implements ISkillUseResp {

    /**
     * Constructs a new SkillUseResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISkillUseResp);

    /** SkillUseResp result. */
    public result: number;

    /** SkillUseResp status. */
    public status: SkillUseResp.SkillStatusEnum;

    /** SkillUseResp treasureUpdate. */
    public treasureUpdate?: (ITreasureUpdate|null);

    /** SkillUseResp id. */
    public id: string;

    /**
     * Creates a new SkillUseResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SkillUseResp instance
     */
    public static create(properties?: ISkillUseResp): SkillUseResp;

    /**
     * Encodes the specified SkillUseResp message. Does not implicitly {@link SkillUseResp.verify|verify} messages.
     * @param message SkillUseResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISkillUseResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SkillUseResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SkillUseResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SkillUseResp;
}

export namespace SkillUseResp {

    /** SkillStatusEnum enum. */
    enum SkillStatusEnum {
        ROOM_DISALLOW = 1,
        VIP_LIMIT = 2,
        TOOL_LIMIT = 3,
        GCD = 4,
        CD = 5,
        USABLE = 6,
        NOT_EXISTS = 7,
        NO_FISH_CONFIG = 8,
        EXISTS_YOU_LING_HAI_DAO_CHUAN = 9
    }
}

/** Properties of a SkillUseEnd. */
export interface ISkillUseEnd {

    /** SkillUseEnd id */
    id: string;

    /** SkillUseEnd uid */
    uid: number;
}

/** Represents a SkillUseEnd. */
export class SkillUseEnd implements ISkillUseEnd {

    /**
     * Constructs a new SkillUseEnd.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISkillUseEnd);

    /** SkillUseEnd id. */
    public id: string;

    /** SkillUseEnd uid. */
    public uid: number;

    /**
     * Creates a new SkillUseEnd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SkillUseEnd instance
     */
    public static create(properties?: ISkillUseEnd): SkillUseEnd;

    /**
     * Encodes the specified SkillUseEnd message. Does not implicitly {@link SkillUseEnd.verify|verify} messages.
     * @param message SkillUseEnd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISkillUseEnd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SkillUseEnd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SkillUseEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SkillUseEnd;
}

/** Properties of a SkillUseBegin. */
export interface ISkillUseBegin {

    /** SkillUseBegin id */
    id: string;

    /** SkillUseBegin uid */
    uid: number;

    /** SkillUseBegin fishType */
    fishType?: (number|null);

    /** SkillUseBegin chairId */
    chairId: number;
}

/** Represents a SkillUseBegin. */
export class SkillUseBegin implements ISkillUseBegin {

    /**
     * Constructs a new SkillUseBegin.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISkillUseBegin);

    /** SkillUseBegin id. */
    public id: string;

    /** SkillUseBegin uid. */
    public uid: number;

    /** SkillUseBegin fishType. */
    public fishType: number;

    /** SkillUseBegin chairId. */
    public chairId: number;

    /**
     * Creates a new SkillUseBegin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SkillUseBegin instance
     */
    public static create(properties?: ISkillUseBegin): SkillUseBegin;

    /**
     * Encodes the specified SkillUseBegin message. Does not implicitly {@link SkillUseBegin.verify|verify} messages.
     * @param message SkillUseBegin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISkillUseBegin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SkillUseBegin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SkillUseBegin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SkillUseBegin;
}

/** Properties of a cancelBombSkillResp. */
export interface IcancelBombSkillResp {

    /** cancelBombSkillResp chairId */
    chairId: number;
}

/** Represents a cancelBombSkillResp. */
export class cancelBombSkillResp implements IcancelBombSkillResp {

    /**
     * Constructs a new cancelBombSkillResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IcancelBombSkillResp);

    /** cancelBombSkillResp chairId. */
    public chairId: number;

    /**
     * Creates a new cancelBombSkillResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns cancelBombSkillResp instance
     */
    public static create(properties?: IcancelBombSkillResp): cancelBombSkillResp;

    /**
     * Encodes the specified cancelBombSkillResp message. Does not implicitly {@link cancelBombSkillResp.verify|verify} messages.
     * @param message cancelBombSkillResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IcancelBombSkillResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a cancelBombSkillResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns cancelBombSkillResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cancelBombSkillResp;
}

/** Properties of a SystemConfItem. */
export interface ISystemConfItem {

    /** SystemConfItem key */
    key: string;

    /** SystemConfItem value */
    value: string;
}

/** Represents a SystemConfItem. */
export class SystemConfItem implements ISystemConfItem {

    /**
     * Constructs a new SystemConfItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISystemConfItem);

    /** SystemConfItem key. */
    public key: string;

    /** SystemConfItem value. */
    public value: string;

    /**
     * Creates a new SystemConfItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SystemConfItem instance
     */
    public static create(properties?: ISystemConfItem): SystemConfItem;

    /**
     * Encodes the specified SystemConfItem message. Does not implicitly {@link SystemConfItem.verify|verify} messages.
     * @param message SystemConfItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISystemConfItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SystemConfItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SystemConfItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemConfItem;
}

/** Properties of a SystemConf. */
export interface ISystemConf {

    /** SystemConf systemConfItems */
    systemConfItems?: (ISystemConfItem[]|null);
}

/** Represents a SystemConf. */
export class SystemConf implements ISystemConf {

    /**
     * Constructs a new SystemConf.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISystemConf);

    /** SystemConf systemConfItems. */
    public systemConfItems: Array<ISystemConfItem>;

    /**
     * Creates a new SystemConf instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SystemConf instance
     */
    public static create(properties?: ISystemConf): SystemConf;

    /**
     * Encodes the specified SystemConf message. Does not implicitly {@link SystemConf.verify|verify} messages.
     * @param message SystemConf message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISystemConf, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SystemConf message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SystemConf
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemConf;
}

/** Properties of a ReadUserEmailReq. */
export interface IReadUserEmailReq {

    /** ReadUserEmailReq userEmailId */
    userEmailId: number;
}

/** Represents a ReadUserEmailReq. */
export class ReadUserEmailReq implements IReadUserEmailReq {

    /**
     * Constructs a new ReadUserEmailReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReadUserEmailReq);

    /** ReadUserEmailReq userEmailId. */
    public userEmailId: number;

    /**
     * Creates a new ReadUserEmailReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadUserEmailReq instance
     */
    public static create(properties?: IReadUserEmailReq): ReadUserEmailReq;

    /**
     * Encodes the specified ReadUserEmailReq message. Does not implicitly {@link ReadUserEmailReq.verify|verify} messages.
     * @param message ReadUserEmailReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReadUserEmailReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReadUserEmailReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReadUserEmailReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReadUserEmailReq;
}

/** Properties of a GetEmailAccessoryReq. */
export interface IGetEmailAccessoryReq {

    /** GetEmailAccessoryReq userEmailId */
    userEmailId: string;
}

/** Represents a GetEmailAccessoryReq. */
export class GetEmailAccessoryReq implements IGetEmailAccessoryReq {

    /**
     * Constructs a new GetEmailAccessoryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetEmailAccessoryReq);

    /** GetEmailAccessoryReq userEmailId. */
    public userEmailId: string;

    /**
     * Creates a new GetEmailAccessoryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetEmailAccessoryReq instance
     */
    public static create(properties?: IGetEmailAccessoryReq): GetEmailAccessoryReq;

    /**
     * Encodes the specified GetEmailAccessoryReq message. Does not implicitly {@link GetEmailAccessoryReq.verify|verify} messages.
     * @param message GetEmailAccessoryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetEmailAccessoryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetEmailAccessoryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetEmailAccessoryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetEmailAccessoryReq;
}

/** Properties of a DelUserEmailReq. */
export interface IDelUserEmailReq {

    /** DelUserEmailReq userEmailId */
    userEmailId: string;
}

/** Represents a DelUserEmailReq. */
export class DelUserEmailReq implements IDelUserEmailReq {

    /**
     * Constructs a new DelUserEmailReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDelUserEmailReq);

    /** DelUserEmailReq userEmailId. */
    public userEmailId: string;

    /**
     * Creates a new DelUserEmailReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DelUserEmailReq instance
     */
    public static create(properties?: IDelUserEmailReq): DelUserEmailReq;

    /**
     * Encodes the specified DelUserEmailReq message. Does not implicitly {@link DelUserEmailReq.verify|verify} messages.
     * @param message DelUserEmailReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDelUserEmailReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DelUserEmailReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DelUserEmailReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DelUserEmailReq;
}

/** Properties of an emailItem. */
export interface IemailItem {

    /** emailItem userEmailId */
    userEmailId: number;

    /** emailItem mailType */
    mailType: number;

    /** emailItem content */
    content?: (string|null);

    /** emailItem isItemReceived */
    isItemReceived: number;

    /** emailItem isRead */
    isRead: number;

    /** emailItem sendTime */
    sendTime: (number|Long);
}

/** Represents an emailItem. */
export class emailItem implements IemailItem {

    /**
     * Constructs a new emailItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IemailItem);

    /** emailItem userEmailId. */
    public userEmailId: number;

    /** emailItem mailType. */
    public mailType: number;

    /** emailItem content. */
    public content: string;

    /** emailItem isItemReceived. */
    public isItemReceived: number;

    /** emailItem isRead. */
    public isRead: number;

    /** emailItem sendTime. */
    public sendTime: (number|Long);

    /**
     * Creates a new emailItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns emailItem instance
     */
    public static create(properties?: IemailItem): emailItem;

    /**
     * Encodes the specified emailItem message. Does not implicitly {@link emailItem.verify|verify} messages.
     * @param message emailItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IemailItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an emailItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns emailItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): emailItem;
}

/** Properties of an EmailResp. */
export interface IEmailResp {

    /** EmailResp item */
    item?: (IemailItem[]|null);
}

/** Represents an EmailResp. */
export class EmailResp implements IEmailResp {

    /**
     * Constructs a new EmailResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmailResp);

    /** EmailResp item. */
    public item: Array<IemailItem>;

    /**
     * Creates a new EmailResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EmailResp instance
     */
    public static create(properties?: IEmailResp): EmailResp;

    /**
     * Encodes the specified EmailResp message. Does not implicitly {@link EmailResp.verify|verify} messages.
     * @param message EmailResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmailResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EmailResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EmailResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmailResp;
}

/** Properties of a GetEmailAccessoryResp. */
export interface IGetEmailAccessoryResp {

    /** GetEmailAccessoryResp awards */
    awards?: (IToolItem[]|null);

    /** GetEmailAccessoryResp tr */
    tr: ITreasureUpdate;
}

/** Represents a GetEmailAccessoryResp. */
export class GetEmailAccessoryResp implements IGetEmailAccessoryResp {

    /**
     * Constructs a new GetEmailAccessoryResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetEmailAccessoryResp);

    /** GetEmailAccessoryResp awards. */
    public awards: Array<IToolItem>;

    /** GetEmailAccessoryResp tr. */
    public tr: ITreasureUpdate;

    /**
     * Creates a new GetEmailAccessoryResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetEmailAccessoryResp instance
     */
    public static create(properties?: IGetEmailAccessoryResp): GetEmailAccessoryResp;

    /**
     * Encodes the specified GetEmailAccessoryResp message. Does not implicitly {@link GetEmailAccessoryResp.verify|verify} messages.
     * @param message GetEmailAccessoryResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetEmailAccessoryResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetEmailAccessoryResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetEmailAccessoryResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetEmailAccessoryResp;
}

/** Properties of a DelUserEmailResp. */
export interface IDelUserEmailResp {

    /** DelUserEmailResp result */
    result: number;
}

/** Represents a DelUserEmailResp. */
export class DelUserEmailResp implements IDelUserEmailResp {

    /**
     * Constructs a new DelUserEmailResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDelUserEmailResp);

    /** DelUserEmailResp result. */
    public result: number;

    /**
     * Creates a new DelUserEmailResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DelUserEmailResp instance
     */
    public static create(properties?: IDelUserEmailResp): DelUserEmailResp;

    /**
     * Encodes the specified DelUserEmailResp message. Does not implicitly {@link DelUserEmailResp.verify|verify} messages.
     * @param message DelUserEmailResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDelUserEmailResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DelUserEmailResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DelUserEmailResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DelUserEmailResp;
}

/** Properties of a ReadUserEmailResp. */
export interface IReadUserEmailResp {

    /** ReadUserEmailResp result */
    result: number;
}

/** Represents a ReadUserEmailResp. */
export class ReadUserEmailResp implements IReadUserEmailResp {

    /**
     * Constructs a new ReadUserEmailResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReadUserEmailResp);

    /** ReadUserEmailResp result. */
    public result: number;

    /**
     * Creates a new ReadUserEmailResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadUserEmailResp instance
     */
    public static create(properties?: IReadUserEmailResp): ReadUserEmailResp;

    /**
     * Encodes the specified ReadUserEmailResp message. Does not implicitly {@link ReadUserEmailResp.verify|verify} messages.
     * @param message ReadUserEmailResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReadUserEmailResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReadUserEmailResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReadUserEmailResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReadUserEmailResp;
}

/** Properties of an UnlockCannonResp. */
export interface IUnlockCannonResp {

    /** UnlockCannonResp cannon */
    cannon: number;

    /** UnlockCannonResp curDiamond */
    curDiamond?: (number|null);

    /** UnlockCannonResp costTools */
    costTools?: (string|null);

    /** UnlockCannonResp tr */
    tr?: (ITreasureUpdate|null);

    /** UnlockCannonResp userid */
    userid: number;

    /** UnlockCannonResp directUp */
    directUp?: (boolean|null);

    /** UnlockCannonResp cannonSkin */
    cannonSkin?: (string|null);
}

/** Represents an UnlockCannonResp. */
export class UnlockCannonResp implements IUnlockCannonResp {

    /**
     * Constructs a new UnlockCannonResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUnlockCannonResp);

    /** UnlockCannonResp cannon. */
    public cannon: number;

    /** UnlockCannonResp curDiamond. */
    public curDiamond: number;

    /** UnlockCannonResp costTools. */
    public costTools: string;

    /** UnlockCannonResp tr. */
    public tr?: (ITreasureUpdate|null);

    /** UnlockCannonResp userid. */
    public userid: number;

    /** UnlockCannonResp directUp. */
    public directUp: boolean;

    /** UnlockCannonResp cannonSkin. */
    public cannonSkin: string;

    /**
     * Creates a new UnlockCannonResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnlockCannonResp instance
     */
    public static create(properties?: IUnlockCannonResp): UnlockCannonResp;

    /**
     * Encodes the specified UnlockCannonResp message. Does not implicitly {@link UnlockCannonResp.verify|verify} messages.
     * @param message UnlockCannonResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnlockCannonResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnlockCannonResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnlockCannonResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnlockCannonResp;
}

/** Properties of an UnlockCannonListResp. */
export interface IUnlockCannonListResp {

    /** UnlockCannonListResp items */
    items?: (IUnlockCannonInfo[]|null);
}

/** Represents an UnlockCannonListResp. */
export class UnlockCannonListResp implements IUnlockCannonListResp {

    /**
     * Constructs a new UnlockCannonListResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUnlockCannonListResp);

    /** UnlockCannonListResp items. */
    public items: Array<IUnlockCannonInfo>;

    /**
     * Creates a new UnlockCannonListResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnlockCannonListResp instance
     */
    public static create(properties?: IUnlockCannonListResp): UnlockCannonListResp;

    /**
     * Encodes the specified UnlockCannonListResp message. Does not implicitly {@link UnlockCannonListResp.verify|verify} messages.
     * @param message UnlockCannonListResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnlockCannonListResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnlockCannonListResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnlockCannonListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnlockCannonListResp;
}

/** Properties of an UnlockCannonInfo. */
export interface IUnlockCannonInfo {

    /** UnlockCannonInfo num */
    num: number;

    /** UnlockCannonInfo type */
    type: number;

    /** UnlockCannonInfo costItems */
    costItems: string;

    /** UnlockCannonInfo costDiamond */
    costDiamond: number;

    /** UnlockCannonInfo winGold */
    winGold: number;

    /** UnlockCannonInfo status */
    status: number;
}

/** Represents an UnlockCannonInfo. */
export class UnlockCannonInfo implements IUnlockCannonInfo {

    /**
     * Constructs a new UnlockCannonInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUnlockCannonInfo);

    /** UnlockCannonInfo num. */
    public num: number;

    /** UnlockCannonInfo type. */
    public type: number;

    /** UnlockCannonInfo costItems. */
    public costItems: string;

    /** UnlockCannonInfo costDiamond. */
    public costDiamond: number;

    /** UnlockCannonInfo winGold. */
    public winGold: number;

    /** UnlockCannonInfo status. */
    public status: number;

    /**
     * Creates a new UnlockCannonInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnlockCannonInfo instance
     */
    public static create(properties?: IUnlockCannonInfo): UnlockCannonInfo;

    /**
     * Encodes the specified UnlockCannonInfo message. Does not implicitly {@link UnlockCannonInfo.verify|verify} messages.
     * @param message UnlockCannonInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnlockCannonInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnlockCannonInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnlockCannonInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnlockCannonInfo;
}

/** Properties of a ForgingCannonReq. */
export interface IForgingCannonReq {

    /** ForgingCannonReq cannon */
    cannon: number;

    /** ForgingCannonReq streng */
    streng: boolean;
}

/** Represents a ForgingCannonReq. */
export class ForgingCannonReq implements IForgingCannonReq {

    /**
     * Constructs a new ForgingCannonReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IForgingCannonReq);

    /** ForgingCannonReq cannon. */
    public cannon: number;

    /** ForgingCannonReq streng. */
    public streng: boolean;

    /**
     * Creates a new ForgingCannonReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ForgingCannonReq instance
     */
    public static create(properties?: IForgingCannonReq): ForgingCannonReq;

    /**
     * Encodes the specified ForgingCannonReq message. Does not implicitly {@link ForgingCannonReq.verify|verify} messages.
     * @param message ForgingCannonReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IForgingCannonReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ForgingCannonReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ForgingCannonReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ForgingCannonReq;
}

/** Properties of a CalUnlockCannonCostDiamondReq. */
export interface ICalUnlockCannonCostDiamondReq {

    /** CalUnlockCannonCostDiamondReq cannon */
    cannon: number;
}

/** Represents a CalUnlockCannonCostDiamondReq. */
export class CalUnlockCannonCostDiamondReq implements ICalUnlockCannonCostDiamondReq {

    /**
     * Constructs a new CalUnlockCannonCostDiamondReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICalUnlockCannonCostDiamondReq);

    /** CalUnlockCannonCostDiamondReq cannon. */
    public cannon: number;

    /**
     * Creates a new CalUnlockCannonCostDiamondReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CalUnlockCannonCostDiamondReq instance
     */
    public static create(properties?: ICalUnlockCannonCostDiamondReq): CalUnlockCannonCostDiamondReq;

    /**
     * Encodes the specified CalUnlockCannonCostDiamondReq message. Does not implicitly {@link CalUnlockCannonCostDiamondReq.verify|verify} messages.
     * @param message CalUnlockCannonCostDiamondReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICalUnlockCannonCostDiamondReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CalUnlockCannonCostDiamondReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CalUnlockCannonCostDiamondReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CalUnlockCannonCostDiamondReq;
}

/** Properties of a CalUnlockCannonCostDiamondResp. */
export interface ICalUnlockCannonCostDiamondResp {

    /** CalUnlockCannonCostDiamondResp msg */
    msg: string;

    /** CalUnlockCannonCostDiamondResp costDiamond */
    costDiamond: number;
}

/** Represents a CalUnlockCannonCostDiamondResp. */
export class CalUnlockCannonCostDiamondResp implements ICalUnlockCannonCostDiamondResp {

    /**
     * Constructs a new CalUnlockCannonCostDiamondResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICalUnlockCannonCostDiamondResp);

    /** CalUnlockCannonCostDiamondResp msg. */
    public msg: string;

    /** CalUnlockCannonCostDiamondResp costDiamond. */
    public costDiamond: number;

    /**
     * Creates a new CalUnlockCannonCostDiamondResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CalUnlockCannonCostDiamondResp instance
     */
    public static create(properties?: ICalUnlockCannonCostDiamondResp): CalUnlockCannonCostDiamondResp;

    /**
     * Encodes the specified CalUnlockCannonCostDiamondResp message. Does not implicitly {@link CalUnlockCannonCostDiamondResp.verify|verify} messages.
     * @param message CalUnlockCannonCostDiamondResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICalUnlockCannonCostDiamondResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CalUnlockCannonCostDiamondResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CalUnlockCannonCostDiamondResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CalUnlockCannonCostDiamondResp;
}

/** Properties of a SecondaryCannonReq. */
export interface ISecondaryCannonReq {

    /** SecondaryCannonReq secondaryCannon */
    secondaryCannon: number;

    /** SecondaryCannonReq needItem */
    needItem: string;
}

/** Represents a SecondaryCannonReq. */
export class SecondaryCannonReq implements ISecondaryCannonReq {

    /**
     * Constructs a new SecondaryCannonReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISecondaryCannonReq);

    /** SecondaryCannonReq secondaryCannon. */
    public secondaryCannon: number;

    /** SecondaryCannonReq needItem. */
    public needItem: string;

    /**
     * Creates a new SecondaryCannonReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SecondaryCannonReq instance
     */
    public static create(properties?: ISecondaryCannonReq): SecondaryCannonReq;

    /**
     * Encodes the specified SecondaryCannonReq message. Does not implicitly {@link SecondaryCannonReq.verify|verify} messages.
     * @param message SecondaryCannonReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISecondaryCannonReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SecondaryCannonReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SecondaryCannonReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecondaryCannonReq;
}

/** Properties of a UserProfileResp. */
export interface IUserProfileResp {

    /** UserProfileResp userId */
    userId: number;

    /** UserProfileResp userScore */
    userScore: (number|Long);

    /** UserProfileResp nickName */
    nickName: string;

    /** UserProfileResp realNameCertify */
    realNameCertify: boolean;

    /** UserProfileResp level */
    level: number;

    /** UserProfileResp curTotalExp */
    curTotalExp: number;

    /** UserProfileResp vipLevel */
    vipLevel: number;

    /** UserProfileResp payAmountSum */
    payAmountSum: number;

    /** UserProfileResp timeOfNoble */
    timeOfNoble: number;

    /** UserProfileResp loginType */
    loginType: number;

    /** UserProfileResp item */
    item?: (IpackToolsItem[]|null);

    /** UserProfileResp redPointResp */
    redPointResp?: (IRedPointResp|null);

    /** UserProfileResp IsFirstRecharge */
    IsFirstRecharge: number;

    /** UserProfileResp nowPayMoney */
    nowPayMoney: number;

    /** UserProfileResp LimitMoneyOfDay */
    LimitMoneyOfDay: number;

    /** UserProfileResp payFaceEndTime */
    payFaceEndTime?: (number|Long|null);

    /** UserProfileResp vipExp */
    vipExp?: (number|null);

    /** UserProfileResp now */
    now?: (number|Long|null);

    /** UserProfileResp curLevelExp */
    curLevelExp?: (ILevelExp|null);

    /** UserProfileResp phone */
    phone?: (string|null);

    /** UserProfileResp bindMachine */
    bindMachine: number;

    /** UserProfileResp channelItem */
    channelItem: string;

    /** UserProfileResp isNickName */
    isNickName?: (number|null);

    /** UserProfileResp faceIcon */
    faceIcon?: (string|null);
}

/** Represents a UserProfileResp. */
export class UserProfileResp implements IUserProfileResp {

    /**
     * Constructs a new UserProfileResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserProfileResp);

    /** UserProfileResp userId. */
    public userId: number;

    /** UserProfileResp userScore. */
    public userScore: (number|Long);

    /** UserProfileResp nickName. */
    public nickName: string;

    /** UserProfileResp realNameCertify. */
    public realNameCertify: boolean;

    /** UserProfileResp level. */
    public level: number;

    /** UserProfileResp curTotalExp. */
    public curTotalExp: number;

    /** UserProfileResp vipLevel. */
    public vipLevel: number;

    /** UserProfileResp payAmountSum. */
    public payAmountSum: number;

    /** UserProfileResp timeOfNoble. */
    public timeOfNoble: number;

    /** UserProfileResp loginType. */
    public loginType: number;

    /** UserProfileResp item. */
    public item: Array<IpackToolsItem>;

    /** UserProfileResp redPointResp. */
    public redPointResp?: (IRedPointResp|null);

    /** UserProfileResp IsFirstRecharge. */
    public IsFirstRecharge: number;

    /** UserProfileResp nowPayMoney. */
    public nowPayMoney: number;

    /** UserProfileResp LimitMoneyOfDay. */
    public LimitMoneyOfDay: number;

    /** UserProfileResp payFaceEndTime. */
    public payFaceEndTime: (number|Long);

    /** UserProfileResp vipExp. */
    public vipExp: number;

    /** UserProfileResp now. */
    public now: (number|Long);

    /** UserProfileResp curLevelExp. */
    public curLevelExp?: (ILevelExp|null);

    /** UserProfileResp phone. */
    public phone: string;

    /** UserProfileResp bindMachine. */
    public bindMachine: number;

    /** UserProfileResp channelItem. */
    public channelItem: string;

    /** UserProfileResp isNickName. */
    public isNickName: number;

    /** UserProfileResp faceIcon. */
    public faceIcon: string;

    /**
     * Creates a new UserProfileResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserProfileResp instance
     */
    public static create(properties?: IUserProfileResp): UserProfileResp;

    /**
     * Encodes the specified UserProfileResp message. Does not implicitly {@link UserProfileResp.verify|verify} messages.
     * @param message UserProfileResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserProfileResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserProfileResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserProfileResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserProfileResp;
}

/** Properties of a packToolsItem. */
export interface IpackToolsItem {

    /** packToolsItem toolsId */
    toolsId: number;

    /** packToolsItem count */
    count: number;

    /** packToolsItem leftTime */
    leftTime?: (number|Long|null);

    /** packToolsItem equiped */
    equiped?: (number|null);
}

/** Represents a packToolsItem. */
export class packToolsItem implements IpackToolsItem {

    /**
     * Constructs a new packToolsItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IpackToolsItem);

    /** packToolsItem toolsId. */
    public toolsId: number;

    /** packToolsItem count. */
    public count: number;

    /** packToolsItem leftTime. */
    public leftTime: (number|Long);

    /** packToolsItem equiped. */
    public equiped: number;

    /**
     * Creates a new packToolsItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns packToolsItem instance
     */
    public static create(properties?: IpackToolsItem): packToolsItem;

    /**
     * Encodes the specified packToolsItem message. Does not implicitly {@link packToolsItem.verify|verify} messages.
     * @param message packToolsItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IpackToolsItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a packToolsItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns packToolsItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): packToolsItem;
}

/** Properties of a UserBackPackResp. */
export interface IUserBackPackResp {

    /** UserBackPackResp item */
    item?: (IpackToolsItem[]|null);
}

/** Represents a UserBackPackResp. */
export class UserBackPackResp implements IUserBackPackResp {

    /**
     * Constructs a new UserBackPackResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserBackPackResp);

    /** UserBackPackResp item. */
    public item: Array<IpackToolsItem>;

    /**
     * Creates a new UserBackPackResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserBackPackResp instance
     */
    public static create(properties?: IUserBackPackResp): UserBackPackResp;

    /**
     * Encodes the specified UserBackPackResp message. Does not implicitly {@link UserBackPackResp.verify|verify} messages.
     * @param message UserBackPackResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserBackPackResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserBackPackResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserBackPackResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserBackPackResp;
}

/** Properties of a specialItemHandleReq. */
export interface IspecialItemHandleReq {

    /** specialItemHandleReq itemId */
    itemId: number;

    /** specialItemHandleReq type */
    type: number;

    /** specialItemHandleReq count */
    count?: (number|null);

    /** specialItemHandleReq nickName */
    nickName?: (string|null);

    /** specialItemHandleReq passWord */
    passWord?: (string|null);
}

/** Represents a specialItemHandleReq. */
export class specialItemHandleReq implements IspecialItemHandleReq {

    /**
     * Constructs a new specialItemHandleReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IspecialItemHandleReq);

    /** specialItemHandleReq itemId. */
    public itemId: number;

    /** specialItemHandleReq type. */
    public type: number;

    /** specialItemHandleReq count. */
    public count: number;

    /** specialItemHandleReq nickName. */
    public nickName: string;

    /** specialItemHandleReq passWord. */
    public passWord: string;

    /**
     * Creates a new specialItemHandleReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns specialItemHandleReq instance
     */
    public static create(properties?: IspecialItemHandleReq): specialItemHandleReq;

    /**
     * Encodes the specified specialItemHandleReq message. Does not implicitly {@link specialItemHandleReq.verify|verify} messages.
     * @param message specialItemHandleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IspecialItemHandleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a specialItemHandleReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns specialItemHandleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): specialItemHandleReq;
}

/** Properties of a specialItemHandleResp. */
export interface IspecialItemHandleResp {

    /** specialItemHandleResp item */
    item?: (IpackToolsItem[]|null);

    /** specialItemHandleResp result */
    result: number;

    /** specialItemHandleResp score */
    score?: (number|Long|null);

    /** specialItemHandleResp itemid */
    itemid?: (number|null);

    /** specialItemHandleResp treasure */
    treasure?: (ITreasureUpdate|null);

    /** specialItemHandleResp count */
    count?: (number|null);
}

/** Represents a specialItemHandleResp. */
export class specialItemHandleResp implements IspecialItemHandleResp {

    /**
     * Constructs a new specialItemHandleResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IspecialItemHandleResp);

    /** specialItemHandleResp item. */
    public item: Array<IpackToolsItem>;

    /** specialItemHandleResp result. */
    public result: number;

    /** specialItemHandleResp score. */
    public score: (number|Long);

    /** specialItemHandleResp itemid. */
    public itemid: number;

    /** specialItemHandleResp treasure. */
    public treasure?: (ITreasureUpdate|null);

    /** specialItemHandleResp count. */
    public count: number;

    /**
     * Creates a new specialItemHandleResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns specialItemHandleResp instance
     */
    public static create(properties?: IspecialItemHandleResp): specialItemHandleResp;

    /**
     * Encodes the specified specialItemHandleResp message. Does not implicitly {@link specialItemHandleResp.verify|verify} messages.
     * @param message specialItemHandleResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IspecialItemHandleResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a specialItemHandleResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns specialItemHandleResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): specialItemHandleResp;
}

/** Properties of a MessageUserLoginRequest. */
export interface IMessageUserLoginRequest {

    /** MessageUserLoginRequest username */
    username: string;

    /** MessageUserLoginRequest password */
    password: string;
}

/** Represents a MessageUserLoginRequest. */
export class MessageUserLoginRequest implements IMessageUserLoginRequest {

    /**
     * Constructs a new MessageUserLoginRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessageUserLoginRequest);

    /** MessageUserLoginRequest username. */
    public username: string;

    /** MessageUserLoginRequest password. */
    public password: string;

    /**
     * Creates a new MessageUserLoginRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MessageUserLoginRequest instance
     */
    public static create(properties?: IMessageUserLoginRequest): MessageUserLoginRequest;

    /**
     * Encodes the specified MessageUserLoginRequest message. Does not implicitly {@link MessageUserLoginRequest.verify|verify} messages.
     * @param message MessageUserLoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessageUserLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MessageUserLoginRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MessageUserLoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MessageUserLoginRequest;
}

/** Properties of a MessageUserLoginResponse. */
export interface IMessageUserLoginResponse {

    /** MessageUserLoginResponse accessToken */
    accessToken: string;

    /** MessageUserLoginResponse username */
    username: string;
}

/** Represents a MessageUserLoginResponse. */
export class MessageUserLoginResponse implements IMessageUserLoginResponse {

    /**
     * Constructs a new MessageUserLoginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessageUserLoginResponse);

    /** MessageUserLoginResponse accessToken. */
    public accessToken: string;

    /** MessageUserLoginResponse username. */
    public username: string;

    /**
     * Creates a new MessageUserLoginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MessageUserLoginResponse instance
     */
    public static create(properties?: IMessageUserLoginResponse): MessageUserLoginResponse;

    /**
     * Encodes the specified MessageUserLoginResponse message. Does not implicitly {@link MessageUserLoginResponse.verify|verify} messages.
     * @param message MessageUserLoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessageUserLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MessageUserLoginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MessageUserLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MessageUserLoginResponse;
}

/** Properties of a LoginServerQueryActivityReq. */
export interface ILoginServerQueryActivityReq {

    /** LoginServerQueryActivityReq activityId */
    activityId: number;
}

/** Represents a LoginServerQueryActivityReq. */
export class LoginServerQueryActivityReq implements ILoginServerQueryActivityReq {

    /**
     * Constructs a new LoginServerQueryActivityReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginServerQueryActivityReq);

    /** LoginServerQueryActivityReq activityId. */
    public activityId: number;

    /**
     * Creates a new LoginServerQueryActivityReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginServerQueryActivityReq instance
     */
    public static create(properties?: ILoginServerQueryActivityReq): LoginServerQueryActivityReq;

    /**
     * Encodes the specified LoginServerQueryActivityReq message. Does not implicitly {@link LoginServerQueryActivityReq.verify|verify} messages.
     * @param message LoginServerQueryActivityReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginServerQueryActivityReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginServerQueryActivityReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginServerQueryActivityReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginServerQueryActivityReq;
}

/** Properties of a LoginServerQueryActivityResp. */
export interface ILoginServerQueryActivityResp {

    /** LoginServerQueryActivityResp ctivityBaseInfo */
    ctivityBaseInfo?: (IActivityBaseInfo[]|null);

    /** LoginServerQueryActivityResp beginTime */
    beginTime: (number|Long);

    /** LoginServerQueryActivityResp endTime */
    endTime: (number|Long);

    /** LoginServerQueryActivityResp timeStr */
    timeStr: string;

    /** LoginServerQueryActivityResp countDownMillionSeconds */
    countDownMillionSeconds: (number|Long);

    /** LoginServerQueryActivityResp footer */
    footer: string;
}

/** Represents a LoginServerQueryActivityResp. */
export class LoginServerQueryActivityResp implements ILoginServerQueryActivityResp {

    /**
     * Constructs a new LoginServerQueryActivityResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginServerQueryActivityResp);

    /** LoginServerQueryActivityResp ctivityBaseInfo. */
    public ctivityBaseInfo: Array<IActivityBaseInfo>;

    /** LoginServerQueryActivityResp beginTime. */
    public beginTime: (number|Long);

    /** LoginServerQueryActivityResp endTime. */
    public endTime: (number|Long);

    /** LoginServerQueryActivityResp timeStr. */
    public timeStr: string;

    /** LoginServerQueryActivityResp countDownMillionSeconds. */
    public countDownMillionSeconds: (number|Long);

    /** LoginServerQueryActivityResp footer. */
    public footer: string;

    /**
     * Creates a new LoginServerQueryActivityResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginServerQueryActivityResp instance
     */
    public static create(properties?: ILoginServerQueryActivityResp): LoginServerQueryActivityResp;

    /**
     * Encodes the specified LoginServerQueryActivityResp message. Does not implicitly {@link LoginServerQueryActivityResp.verify|verify} messages.
     * @param message LoginServerQueryActivityResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginServerQueryActivityResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginServerQueryActivityResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginServerQueryActivityResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginServerQueryActivityResp;
}

/** Properties of an ActivityBaseInfo. */
export interface IActivityBaseInfo {

    /** ActivityBaseInfo taskId */
    taskId: number;

    /** ActivityBaseInfo text */
    text: string;

    /** ActivityBaseInfo totalVal */
    totalVal: number;

    /** ActivityBaseInfo awards */
    awards?: (IToolItem[]|null);

    /** ActivityBaseInfo curVal */
    curVal: number;

    /** ActivityBaseInfo status */
    status: number;

    /** ActivityBaseInfo type */
    type?: (string|null);
}

/** Represents an ActivityBaseInfo. */
export class ActivityBaseInfo implements IActivityBaseInfo {

    /**
     * Constructs a new ActivityBaseInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActivityBaseInfo);

    /** ActivityBaseInfo taskId. */
    public taskId: number;

    /** ActivityBaseInfo text. */
    public text: string;

    /** ActivityBaseInfo totalVal. */
    public totalVal: number;

    /** ActivityBaseInfo awards. */
    public awards: Array<IToolItem>;

    /** ActivityBaseInfo curVal. */
    public curVal: number;

    /** ActivityBaseInfo status. */
    public status: number;

    /** ActivityBaseInfo type. */
    public type: string;

    /**
     * Creates a new ActivityBaseInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActivityBaseInfo instance
     */
    public static create(properties?: IActivityBaseInfo): ActivityBaseInfo;

    /**
     * Encodes the specified ActivityBaseInfo message. Does not implicitly {@link ActivityBaseInfo.verify|verify} messages.
     * @param message ActivityBaseInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActivityBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActivityBaseInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActivityBaseInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActivityBaseInfo;
}

/** Properties of a LoginQueryActivityResp. */
export interface ILoginQueryActivityResp {

    /** LoginQueryActivityResp LoginQueryActivity */
    LoginQueryActivity?: (ILoginQueryActivity[]|null);
}

/** Represents a LoginQueryActivityResp. */
export class LoginQueryActivityResp implements ILoginQueryActivityResp {

    /**
     * Constructs a new LoginQueryActivityResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginQueryActivityResp);

    /** LoginQueryActivityResp LoginQueryActivity. */
    public LoginQueryActivity: Array<ILoginQueryActivity>;

    /**
     * Creates a new LoginQueryActivityResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginQueryActivityResp instance
     */
    public static create(properties?: ILoginQueryActivityResp): LoginQueryActivityResp;

    /**
     * Encodes the specified LoginQueryActivityResp message. Does not implicitly {@link LoginQueryActivityResp.verify|verify} messages.
     * @param message LoginQueryActivityResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginQueryActivityResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginQueryActivityResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginQueryActivityResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginQueryActivityResp;
}

/** Properties of a LoginQueryActivity. */
export interface ILoginQueryActivity {

    /** LoginQueryActivity activityId */
    activityId: number;

    /** LoginQueryActivity activityType */
    activityType: number;

    /** LoginQueryActivity buttonName */
    buttonName: string;
}

/** Represents a LoginQueryActivity. */
export class LoginQueryActivity implements ILoginQueryActivity {

    /**
     * Constructs a new LoginQueryActivity.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginQueryActivity);

    /** LoginQueryActivity activityId. */
    public activityId: number;

    /** LoginQueryActivity activityType. */
    public activityType: number;

    /** LoginQueryActivity buttonName. */
    public buttonName: string;

    /**
     * Creates a new LoginQueryActivity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginQueryActivity instance
     */
    public static create(properties?: ILoginQueryActivity): LoginQueryActivity;

    /**
     * Encodes the specified LoginQueryActivity message. Does not implicitly {@link LoginQueryActivity.verify|verify} messages.
     * @param message LoginQueryActivity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginQueryActivity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginQueryActivity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginQueryActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginQueryActivity;
}

/** Properties of an ActivityRewardReq. */
export interface IActivityRewardReq {

    /** ActivityRewardReq activityId */
    activityId: number;

    /** ActivityRewardReq stage */
    stage: number;

    /** ActivityRewardReq str */
    str?: (string|null);

    /** ActivityRewardReq type */
    type?: (number|null);
}

/** Represents an ActivityRewardReq. */
export class ActivityRewardReq implements IActivityRewardReq {

    /**
     * Constructs a new ActivityRewardReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActivityRewardReq);

    /** ActivityRewardReq activityId. */
    public activityId: number;

    /** ActivityRewardReq stage. */
    public stage: number;

    /** ActivityRewardReq str. */
    public str: string;

    /** ActivityRewardReq type. */
    public type: number;

    /**
     * Creates a new ActivityRewardReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActivityRewardReq instance
     */
    public static create(properties?: IActivityRewardReq): ActivityRewardReq;

    /**
     * Encodes the specified ActivityRewardReq message. Does not implicitly {@link ActivityRewardReq.verify|verify} messages.
     * @param message ActivityRewardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActivityRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActivityRewardReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActivityRewardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActivityRewardReq;
}

/** Properties of an ActivityRewardResp. */
export interface IActivityRewardResp {

    /** ActivityRewardResp activityId */
    activityId: number;

    /** ActivityRewardResp rewards */
    rewards?: (IToolItem[]|null);

    /** ActivityRewardResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;
}

/** Represents an ActivityRewardResp. */
export class ActivityRewardResp implements IActivityRewardResp {

    /**
     * Constructs a new ActivityRewardResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActivityRewardResp);

    /** ActivityRewardResp activityId. */
    public activityId: number;

    /** ActivityRewardResp rewards. */
    public rewards: Array<IToolItem>;

    /** ActivityRewardResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /**
     * Creates a new ActivityRewardResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActivityRewardResp instance
     */
    public static create(properties?: IActivityRewardResp): ActivityRewardResp;

    /**
     * Encodes the specified ActivityRewardResp message. Does not implicitly {@link ActivityRewardResp.verify|verify} messages.
     * @param message ActivityRewardResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActivityRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActivityRewardResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActivityRewardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActivityRewardResp;
}

/** Properties of a RedPackCodePeopleResp. */
export interface IRedPackCodePeopleResp {

    /** RedPackCodePeopleResp inviteCount */
    inviteCount: number;

    /** RedPackCodePeopleResp isNewPlayer */
    isNewPlayer: number;
}

/** Represents a RedPackCodePeopleResp. */
export class RedPackCodePeopleResp implements IRedPackCodePeopleResp {

    /**
     * Constructs a new RedPackCodePeopleResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedPackCodePeopleResp);

    /** RedPackCodePeopleResp inviteCount. */
    public inviteCount: number;

    /** RedPackCodePeopleResp isNewPlayer. */
    public isNewPlayer: number;

    /**
     * Creates a new RedPackCodePeopleResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedPackCodePeopleResp instance
     */
    public static create(properties?: IRedPackCodePeopleResp): RedPackCodePeopleResp;

    /**
     * Encodes the specified RedPackCodePeopleResp message. Does not implicitly {@link RedPackCodePeopleResp.verify|verify} messages.
     * @param message RedPackCodePeopleResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedPackCodePeopleResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedPackCodePeopleResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedPackCodePeopleResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedPackCodePeopleResp;
}

/** Properties of a RedPackCodeReq. */
export interface IRedPackCodeReq {

    /** RedPackCodeReq redPackCode */
    redPackCode: string;
}

/** Represents a RedPackCodeReq. */
export class RedPackCodeReq implements IRedPackCodeReq {

    /**
     * Constructs a new RedPackCodeReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedPackCodeReq);

    /** RedPackCodeReq redPackCode. */
    public redPackCode: string;

    /**
     * Creates a new RedPackCodeReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedPackCodeReq instance
     */
    public static create(properties?: IRedPackCodeReq): RedPackCodeReq;

    /**
     * Encodes the specified RedPackCodeReq message. Does not implicitly {@link RedPackCodeReq.verify|verify} messages.
     * @param message RedPackCodeReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedPackCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedPackCodeReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedPackCodeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedPackCodeReq;
}

/** Properties of a RedPackCodeResp. */
export interface IRedPackCodeResp {

    /** RedPackCodeResp rewards */
    rewards?: (IToolItem[]|null);

    /** RedPackCodeResp tr */
    tr?: (ITreasureUpdate|null);
}

/** Represents a RedPackCodeResp. */
export class RedPackCodeResp implements IRedPackCodeResp {

    /**
     * Constructs a new RedPackCodeResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedPackCodeResp);

    /** RedPackCodeResp rewards. */
    public rewards: Array<IToolItem>;

    /** RedPackCodeResp tr. */
    public tr?: (ITreasureUpdate|null);

    /**
     * Creates a new RedPackCodeResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedPackCodeResp instance
     */
    public static create(properties?: IRedPackCodeResp): RedPackCodeResp;

    /**
     * Encodes the specified RedPackCodeResp message. Does not implicitly {@link RedPackCodeResp.verify|verify} messages.
     * @param message RedPackCodeResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedPackCodeResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedPackCodeResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedPackCodeResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedPackCodeResp;
}

/** Properties of a RedPackCodeItem. */
export interface IRedPackCodeItem {

    /** RedPackCodeItem taskId */
    taskId: number;

    /** RedPackCodeItem text */
    text: string;

    /** RedPackCodeItem status */
    status: number;

    /** RedPackCodeItem rewards */
    rewards?: (IToolItem[]|null);
}

/** Represents a RedPackCodeItem. */
export class RedPackCodeItem implements IRedPackCodeItem {

    /**
     * Constructs a new RedPackCodeItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedPackCodeItem);

    /** RedPackCodeItem taskId. */
    public taskId: number;

    /** RedPackCodeItem text. */
    public text: string;

    /** RedPackCodeItem status. */
    public status: number;

    /** RedPackCodeItem rewards. */
    public rewards: Array<IToolItem>;

    /**
     * Creates a new RedPackCodeItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedPackCodeItem instance
     */
    public static create(properties?: IRedPackCodeItem): RedPackCodeItem;

    /**
     * Encodes the specified RedPackCodeItem message. Does not implicitly {@link RedPackCodeItem.verify|verify} messages.
     * @param message RedPackCodeItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedPackCodeItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedPackCodeItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedPackCodeItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedPackCodeItem;
}

/** Properties of a RedPackCodeItemResp. */
export interface IRedPackCodeItemResp {

    /** RedPackCodeItemResp task */
    task?: (IRedPackCodeItem[]|null);
}

/** Represents a RedPackCodeItemResp. */
export class RedPackCodeItemResp implements IRedPackCodeItemResp {

    /**
     * Constructs a new RedPackCodeItemResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedPackCodeItemResp);

    /** RedPackCodeItemResp task. */
    public task: Array<IRedPackCodeItem>;

    /**
     * Creates a new RedPackCodeItemResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedPackCodeItemResp instance
     */
    public static create(properties?: IRedPackCodeItemResp): RedPackCodeItemResp;

    /**
     * Encodes the specified RedPackCodeItemResp message. Does not implicitly {@link RedPackCodeItemResp.verify|verify} messages.
     * @param message RedPackCodeItemResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedPackCodeItemResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedPackCodeItemResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedPackCodeItemResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedPackCodeItemResp;
}

/** Properties of a RedPackCodeRewardReq. */
export interface IRedPackCodeRewardReq {

    /** RedPackCodeRewardReq taskId */
    taskId: number;
}

/** Represents a RedPackCodeRewardReq. */
export class RedPackCodeRewardReq implements IRedPackCodeRewardReq {

    /**
     * Constructs a new RedPackCodeRewardReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedPackCodeRewardReq);

    /** RedPackCodeRewardReq taskId. */
    public taskId: number;

    /**
     * Creates a new RedPackCodeRewardReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedPackCodeRewardReq instance
     */
    public static create(properties?: IRedPackCodeRewardReq): RedPackCodeRewardReq;

    /**
     * Encodes the specified RedPackCodeRewardReq message. Does not implicitly {@link RedPackCodeRewardReq.verify|verify} messages.
     * @param message RedPackCodeRewardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedPackCodeRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedPackCodeRewardReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedPackCodeRewardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedPackCodeRewardReq;
}

/** Properties of a RedPackCodeRewardResp. */
export interface IRedPackCodeRewardResp {

    /** RedPackCodeRewardResp rewards */
    rewards?: (IToolItem[]|null);

    /** RedPackCodeRewardResp tr */
    tr?: (ITreasureUpdate|null);
}

/** Represents a RedPackCodeRewardResp. */
export class RedPackCodeRewardResp implements IRedPackCodeRewardResp {

    /**
     * Constructs a new RedPackCodeRewardResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedPackCodeRewardResp);

    /** RedPackCodeRewardResp rewards. */
    public rewards: Array<IToolItem>;

    /** RedPackCodeRewardResp tr. */
    public tr?: (ITreasureUpdate|null);

    /**
     * Creates a new RedPackCodeRewardResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedPackCodeRewardResp instance
     */
    public static create(properties?: IRedPackCodeRewardResp): RedPackCodeRewardResp;

    /**
     * Encodes the specified RedPackCodeRewardResp message. Does not implicitly {@link RedPackCodeRewardResp.verify|verify} messages.
     * @param message RedPackCodeRewardResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedPackCodeRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedPackCodeRewardResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedPackCodeRewardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedPackCodeRewardResp;
}

/** Properties of a signInAndReceiveRep. */
export interface IsignInAndReceiveRep {

    /** signInAndReceiveRep memberOrder */
    memberOrder: number;

    /** signInAndReceiveRep rewardType */
    rewardType: number;

    /** signInAndReceiveRep rewardNum */
    rewardNum: number;
}

/** Represents a signInAndReceiveRep. */
export class signInAndReceiveRep implements IsignInAndReceiveRep {

    /**
     * Constructs a new signInAndReceiveRep.
     * @param [properties] Properties to set
     */
    constructor(properties?: IsignInAndReceiveRep);

    /** signInAndReceiveRep memberOrder. */
    public memberOrder: number;

    /** signInAndReceiveRep rewardType. */
    public rewardType: number;

    /** signInAndReceiveRep rewardNum. */
    public rewardNum: number;

    /**
     * Creates a new signInAndReceiveRep instance using the specified properties.
     * @param [properties] Properties to set
     * @returns signInAndReceiveRep instance
     */
    public static create(properties?: IsignInAndReceiveRep): signInAndReceiveRep;

    /**
     * Encodes the specified signInAndReceiveRep message. Does not implicitly {@link signInAndReceiveRep.verify|verify} messages.
     * @param message signInAndReceiveRep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IsignInAndReceiveRep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a signInAndReceiveRep message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns signInAndReceiveRep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signInAndReceiveRep;
}

/** Properties of an EveryDaysTaskItem. */
export interface IEveryDaysTaskItem {

    /** EveryDaysTaskItem taskId */
    taskId: number;

    /** EveryDaysTaskItem icon */
    icon: string;

    /** EveryDaysTaskItem type */
    type: number;

    /** EveryDaysTaskItem text */
    text: string;

    /** EveryDaysTaskItem totalVal */
    totalVal: number;

    /** EveryDaysTaskItem liveness */
    liveness: number;

    /** EveryDaysTaskItem awards */
    awards?: (IToolItem[]|null);
}

/** Represents an EveryDaysTaskItem. */
export class EveryDaysTaskItem implements IEveryDaysTaskItem {

    /**
     * Constructs a new EveryDaysTaskItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEveryDaysTaskItem);

    /** EveryDaysTaskItem taskId. */
    public taskId: number;

    /** EveryDaysTaskItem icon. */
    public icon: string;

    /** EveryDaysTaskItem type. */
    public type: number;

    /** EveryDaysTaskItem text. */
    public text: string;

    /** EveryDaysTaskItem totalVal. */
    public totalVal: number;

    /** EveryDaysTaskItem liveness. */
    public liveness: number;

    /** EveryDaysTaskItem awards. */
    public awards: Array<IToolItem>;

    /**
     * Creates a new EveryDaysTaskItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EveryDaysTaskItem instance
     */
    public static create(properties?: IEveryDaysTaskItem): EveryDaysTaskItem;

    /**
     * Encodes the specified EveryDaysTaskItem message. Does not implicitly {@link EveryDaysTaskItem.verify|verify} messages.
     * @param message EveryDaysTaskItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEveryDaysTaskItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EveryDaysTaskItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EveryDaysTaskItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EveryDaysTaskItem;
}

/** Properties of an EveryDaysTaskVitality. */
export interface IEveryDaysTaskVitality {

    /** EveryDaysTaskVitality liveness */
    liveness: number;

    /** EveryDaysTaskVitality desc */
    desc: string;
}

/** Represents an EveryDaysTaskVitality. */
export class EveryDaysTaskVitality implements IEveryDaysTaskVitality {

    /**
     * Constructs a new EveryDaysTaskVitality.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEveryDaysTaskVitality);

    /** EveryDaysTaskVitality liveness. */
    public liveness: number;

    /** EveryDaysTaskVitality desc. */
    public desc: string;

    /**
     * Creates a new EveryDaysTaskVitality instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EveryDaysTaskVitality instance
     */
    public static create(properties?: IEveryDaysTaskVitality): EveryDaysTaskVitality;

    /**
     * Encodes the specified EveryDaysTaskVitality message. Does not implicitly {@link EveryDaysTaskVitality.verify|verify} messages.
     * @param message EveryDaysTaskVitality message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEveryDaysTaskVitality, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EveryDaysTaskVitality message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EveryDaysTaskVitality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EveryDaysTaskVitality;
}

/** Properties of an EveryDaysTaskResp. */
export interface IEveryDaysTaskResp {

    /** EveryDaysTaskResp vitalitys */
    vitalitys?: (IEveryDaysTaskVitality[]|null);

    /** EveryDaysTaskResp tasks */
    tasks?: (IEveryDaysTaskItem[]|null);
}

/** Represents an EveryDaysTaskResp. */
export class EveryDaysTaskResp implements IEveryDaysTaskResp {

    /**
     * Constructs a new EveryDaysTaskResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEveryDaysTaskResp);

    /** EveryDaysTaskResp vitalitys. */
    public vitalitys: Array<IEveryDaysTaskVitality>;

    /** EveryDaysTaskResp tasks. */
    public tasks: Array<IEveryDaysTaskItem>;

    /**
     * Creates a new EveryDaysTaskResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EveryDaysTaskResp instance
     */
    public static create(properties?: IEveryDaysTaskResp): EveryDaysTaskResp;

    /**
     * Encodes the specified EveryDaysTaskResp message. Does not implicitly {@link EveryDaysTaskResp.verify|verify} messages.
     * @param message EveryDaysTaskResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEveryDaysTaskResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EveryDaysTaskResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EveryDaysTaskResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EveryDaysTaskResp;
}

/** Properties of an EveryDaysTaskItemProgress. */
export interface IEveryDaysTaskItemProgress {

    /** EveryDaysTaskItemProgress taskId */
    taskId: number;

    /** EveryDaysTaskItemProgress curVal */
    curVal: number;

    /** EveryDaysTaskItemProgress status */
    status: number;
}

/** Represents an EveryDaysTaskItemProgress. */
export class EveryDaysTaskItemProgress implements IEveryDaysTaskItemProgress {

    /**
     * Constructs a new EveryDaysTaskItemProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEveryDaysTaskItemProgress);

    /** EveryDaysTaskItemProgress taskId. */
    public taskId: number;

    /** EveryDaysTaskItemProgress curVal. */
    public curVal: number;

    /** EveryDaysTaskItemProgress status. */
    public status: number;

    /**
     * Creates a new EveryDaysTaskItemProgress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EveryDaysTaskItemProgress instance
     */
    public static create(properties?: IEveryDaysTaskItemProgress): EveryDaysTaskItemProgress;

    /**
     * Encodes the specified EveryDaysTaskItemProgress message. Does not implicitly {@link EveryDaysTaskItemProgress.verify|verify} messages.
     * @param message EveryDaysTaskItemProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEveryDaysTaskItemProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EveryDaysTaskItemProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EveryDaysTaskItemProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EveryDaysTaskItemProgress;
}

/** Properties of an EveryDaysTaskVitalityProgress. */
export interface IEveryDaysTaskVitalityProgress {

    /** EveryDaysTaskVitalityProgress livTaskId */
    livTaskId: number;

    /** EveryDaysTaskVitalityProgress status */
    status: number;
}

/** Represents an EveryDaysTaskVitalityProgress. */
export class EveryDaysTaskVitalityProgress implements IEveryDaysTaskVitalityProgress {

    /**
     * Constructs a new EveryDaysTaskVitalityProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEveryDaysTaskVitalityProgress);

    /** EveryDaysTaskVitalityProgress livTaskId. */
    public livTaskId: number;

    /** EveryDaysTaskVitalityProgress status. */
    public status: number;

    /**
     * Creates a new EveryDaysTaskVitalityProgress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EveryDaysTaskVitalityProgress instance
     */
    public static create(properties?: IEveryDaysTaskVitalityProgress): EveryDaysTaskVitalityProgress;

    /**
     * Encodes the specified EveryDaysTaskVitalityProgress message. Does not implicitly {@link EveryDaysTaskVitalityProgress.verify|verify} messages.
     * @param message EveryDaysTaskVitalityProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEveryDaysTaskVitalityProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EveryDaysTaskVitalityProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EveryDaysTaskVitalityProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EveryDaysTaskVitalityProgress;
}

/** Properties of an EveryDaysTaskProgressResp. */
export interface IEveryDaysTaskProgressResp {

    /** EveryDaysTaskProgressResp curLiveness */
    curLiveness: number;

    /** EveryDaysTaskProgressResp vitalitys */
    vitalitys?: (IEveryDaysTaskVitalityProgress[]|null);

    /** EveryDaysTaskProgressResp tasks */
    tasks?: (IEveryDaysTaskItemProgress[]|null);
}

/** Represents an EveryDaysTaskProgressResp. */
export class EveryDaysTaskProgressResp implements IEveryDaysTaskProgressResp {

    /**
     * Constructs a new EveryDaysTaskProgressResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEveryDaysTaskProgressResp);

    /** EveryDaysTaskProgressResp curLiveness. */
    public curLiveness: number;

    /** EveryDaysTaskProgressResp vitalitys. */
    public vitalitys: Array<IEveryDaysTaskVitalityProgress>;

    /** EveryDaysTaskProgressResp tasks. */
    public tasks: Array<IEveryDaysTaskItemProgress>;

    /**
     * Creates a new EveryDaysTaskProgressResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EveryDaysTaskProgressResp instance
     */
    public static create(properties?: IEveryDaysTaskProgressResp): EveryDaysTaskProgressResp;

    /**
     * Encodes the specified EveryDaysTaskProgressResp message. Does not implicitly {@link EveryDaysTaskProgressResp.verify|verify} messages.
     * @param message EveryDaysTaskProgressResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEveryDaysTaskProgressResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EveryDaysTaskProgressResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EveryDaysTaskProgressResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EveryDaysTaskProgressResp;
}

/** Properties of an EveryDaysTaskRecvReq. */
export interface IEveryDaysTaskRecvReq {

    /** EveryDaysTaskRecvReq taskId */
    taskId: number;
}

/** Represents an EveryDaysTaskRecvReq. */
export class EveryDaysTaskRecvReq implements IEveryDaysTaskRecvReq {

    /**
     * Constructs a new EveryDaysTaskRecvReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEveryDaysTaskRecvReq);

    /** EveryDaysTaskRecvReq taskId. */
    public taskId: number;

    /**
     * Creates a new EveryDaysTaskRecvReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EveryDaysTaskRecvReq instance
     */
    public static create(properties?: IEveryDaysTaskRecvReq): EveryDaysTaskRecvReq;

    /**
     * Encodes the specified EveryDaysTaskRecvReq message. Does not implicitly {@link EveryDaysTaskRecvReq.verify|verify} messages.
     * @param message EveryDaysTaskRecvReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEveryDaysTaskRecvReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EveryDaysTaskRecvReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EveryDaysTaskRecvReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EveryDaysTaskRecvReq;
}

/** Properties of an EveryDaysTaskRecvResp. */
export interface IEveryDaysTaskRecvResp {

    /** EveryDaysTaskRecvResp taskId */
    taskId: number;

    /** EveryDaysTaskRecvResp tr */
    tr: ITreasureUpdate;
}

/** Represents an EveryDaysTaskRecvResp. */
export class EveryDaysTaskRecvResp implements IEveryDaysTaskRecvResp {

    /**
     * Constructs a new EveryDaysTaskRecvResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEveryDaysTaskRecvResp);

    /** EveryDaysTaskRecvResp taskId. */
    public taskId: number;

    /** EveryDaysTaskRecvResp tr. */
    public tr: ITreasureUpdate;

    /**
     * Creates a new EveryDaysTaskRecvResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EveryDaysTaskRecvResp instance
     */
    public static create(properties?: IEveryDaysTaskRecvResp): EveryDaysTaskRecvResp;

    /**
     * Encodes the specified EveryDaysTaskRecvResp message. Does not implicitly {@link EveryDaysTaskRecvResp.verify|verify} messages.
     * @param message EveryDaysTaskRecvResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEveryDaysTaskRecvResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EveryDaysTaskRecvResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EveryDaysTaskRecvResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EveryDaysTaskRecvResp;
}

/** Properties of an EveryDaysTaskVitalityRecvReq. */
export interface IEveryDaysTaskVitalityRecvReq {

    /** EveryDaysTaskVitalityRecvReq livTaskId */
    livTaskId: number;
}

/** Represents an EveryDaysTaskVitalityRecvReq. */
export class EveryDaysTaskVitalityRecvReq implements IEveryDaysTaskVitalityRecvReq {

    /**
     * Constructs a new EveryDaysTaskVitalityRecvReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEveryDaysTaskVitalityRecvReq);

    /** EveryDaysTaskVitalityRecvReq livTaskId. */
    public livTaskId: number;

    /**
     * Creates a new EveryDaysTaskVitalityRecvReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EveryDaysTaskVitalityRecvReq instance
     */
    public static create(properties?: IEveryDaysTaskVitalityRecvReq): EveryDaysTaskVitalityRecvReq;

    /**
     * Encodes the specified EveryDaysTaskVitalityRecvReq message. Does not implicitly {@link EveryDaysTaskVitalityRecvReq.verify|verify} messages.
     * @param message EveryDaysTaskVitalityRecvReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEveryDaysTaskVitalityRecvReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EveryDaysTaskVitalityRecvReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EveryDaysTaskVitalityRecvReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EveryDaysTaskVitalityRecvReq;
}

/** Properties of an EveryDaysTaskVitalityRecvResp. */
export interface IEveryDaysTaskVitalityRecvResp {

    /** EveryDaysTaskVitalityRecvResp livTaskId */
    livTaskId: number;

    /** EveryDaysTaskVitalityRecvResp awards */
    awards?: (IToolItem[]|null);

    /** EveryDaysTaskVitalityRecvResp tr */
    tr: ITreasureUpdate;
}

/** Represents an EveryDaysTaskVitalityRecvResp. */
export class EveryDaysTaskVitalityRecvResp implements IEveryDaysTaskVitalityRecvResp {

    /**
     * Constructs a new EveryDaysTaskVitalityRecvResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEveryDaysTaskVitalityRecvResp);

    /** EveryDaysTaskVitalityRecvResp livTaskId. */
    public livTaskId: number;

    /** EveryDaysTaskVitalityRecvResp awards. */
    public awards: Array<IToolItem>;

    /** EveryDaysTaskVitalityRecvResp tr. */
    public tr: ITreasureUpdate;

    /**
     * Creates a new EveryDaysTaskVitalityRecvResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EveryDaysTaskVitalityRecvResp instance
     */
    public static create(properties?: IEveryDaysTaskVitalityRecvResp): EveryDaysTaskVitalityRecvResp;

    /**
     * Encodes the specified EveryDaysTaskVitalityRecvResp message. Does not implicitly {@link EveryDaysTaskVitalityRecvResp.verify|verify} messages.
     * @param message EveryDaysTaskVitalityRecvResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEveryDaysTaskVitalityRecvResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EveryDaysTaskVitalityRecvResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EveryDaysTaskVitalityRecvResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EveryDaysTaskVitalityRecvResp;
}

/** Properties of an ExchangeCodeReq. */
export interface IExchangeCodeReq {

    /** ExchangeCodeReq exchangeCoding */
    exchangeCoding: string;
}

/** Represents an ExchangeCodeReq. */
export class ExchangeCodeReq implements IExchangeCodeReq {

    /**
     * Constructs a new ExchangeCodeReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExchangeCodeReq);

    /** ExchangeCodeReq exchangeCoding. */
    public exchangeCoding: string;

    /**
     * Creates a new ExchangeCodeReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeCodeReq instance
     */
    public static create(properties?: IExchangeCodeReq): ExchangeCodeReq;

    /**
     * Encodes the specified ExchangeCodeReq message. Does not implicitly {@link ExchangeCodeReq.verify|verify} messages.
     * @param message ExchangeCodeReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExchangeCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeCodeReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExchangeCodeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExchangeCodeReq;
}

/** Properties of an ExchangeCodeResp. */
export interface IExchangeCodeResp {

    /** ExchangeCodeResp rewards */
    rewards?: (IToolItem[]|null);

    /** ExchangeCodeResp tr */
    tr?: (ITreasureUpdate|null);
}

/** Represents an ExchangeCodeResp. */
export class ExchangeCodeResp implements IExchangeCodeResp {

    /**
     * Constructs a new ExchangeCodeResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExchangeCodeResp);

    /** ExchangeCodeResp rewards. */
    public rewards: Array<IToolItem>;

    /** ExchangeCodeResp tr. */
    public tr?: (ITreasureUpdate|null);

    /**
     * Creates a new ExchangeCodeResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeCodeResp instance
     */
    public static create(properties?: IExchangeCodeResp): ExchangeCodeResp;

    /**
     * Encodes the specified ExchangeCodeResp message. Does not implicitly {@link ExchangeCodeResp.verify|verify} messages.
     * @param message ExchangeCodeResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExchangeCodeResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeCodeResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExchangeCodeResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExchangeCodeResp;
}

/** Properties of a HallMallPaySuccessReq. */
export interface IHallMallPaySuccessReq {

    /** HallMallPaySuccessReq UrlLogId */
    UrlLogId: number;
}

/** Represents a HallMallPaySuccessReq. */
export class HallMallPaySuccessReq implements IHallMallPaySuccessReq {

    /**
     * Constructs a new HallMallPaySuccessReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHallMallPaySuccessReq);

    /** HallMallPaySuccessReq UrlLogId. */
    public UrlLogId: number;

    /**
     * Creates a new HallMallPaySuccessReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HallMallPaySuccessReq instance
     */
    public static create(properties?: IHallMallPaySuccessReq): HallMallPaySuccessReq;

    /**
     * Encodes the specified HallMallPaySuccessReq message. Does not implicitly {@link HallMallPaySuccessReq.verify|verify} messages.
     * @param message HallMallPaySuccessReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHallMallPaySuccessReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HallMallPaySuccessReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HallMallPaySuccessReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallMallPaySuccessReq;
}

/** Properties of a hallMallItem. */
export interface IhallMallItem {

    /** hallMallItem id */
    id: string;

    /** hallMallItem tag */
    tag: number;

    /** hallMallItem show */
    show: number;

    /** hallMallItem position */
    position: number;

    /** hallMallItem Icon */
    Icon: string;

    /** hallMallItem amount */
    amount: number;

    /** hallMallItem get */
    get?: (IToolItem[]|null);

    /** hallMallItem first */
    first: number;

    /** hallMallItem present */
    present?: (IToolItem[]|null);

    /** hallMallItem describe */
    describe?: (string|null);

    /** hallMallItem time */
    time?: (number|null);

    /** hallMallItem isBuy */
    isBuy?: (number|null);
}

/** Represents a hallMallItem. */
export class hallMallItem implements IhallMallItem {

    /**
     * Constructs a new hallMallItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IhallMallItem);

    /** hallMallItem id. */
    public id: string;

    /** hallMallItem tag. */
    public tag: number;

    /** hallMallItem show. */
    public show: number;

    /** hallMallItem position. */
    public position: number;

    /** hallMallItem Icon. */
    public Icon: string;

    /** hallMallItem amount. */
    public amount: number;

    /** hallMallItem get. */
    public get: Array<IToolItem>;

    /** hallMallItem first. */
    public first: number;

    /** hallMallItem present. */
    public present: Array<IToolItem>;

    /** hallMallItem describe. */
    public describe: string;

    /** hallMallItem time. */
    public time: number;

    /** hallMallItem isBuy. */
    public isBuy: number;

    /**
     * Creates a new hallMallItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns hallMallItem instance
     */
    public static create(properties?: IhallMallItem): hallMallItem;

    /**
     * Encodes the specified hallMallItem message. Does not implicitly {@link hallMallItem.verify|verify} messages.
     * @param message hallMallItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IhallMallItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a hallMallItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns hallMallItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallMallItem;
}

/** Properties of a hallMallResponse. */
export interface IhallMallResponse {

    /** hallMallResponse item */
    item?: (IhallMallItem[]|null);
}

/** Represents a hallMallResponse. */
export class hallMallResponse implements IhallMallResponse {

    /**
     * Constructs a new hallMallResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IhallMallResponse);

    /** hallMallResponse item. */
    public item: Array<IhallMallItem>;

    /**
     * Creates a new hallMallResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns hallMallResponse instance
     */
    public static create(properties?: IhallMallResponse): hallMallResponse;

    /**
     * Encodes the specified hallMallResponse message. Does not implicitly {@link hallMallResponse.verify|verify} messages.
     * @param message hallMallResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IhallMallResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a hallMallResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns hallMallResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallMallResponse;
}

/** Properties of a HallMallPaySuccessResp. */
export interface IHallMallPaySuccessResp {

    /** HallMallPaySuccessResp result */
    result: number;
}

/** Represents a HallMallPaySuccessResp. */
export class HallMallPaySuccessResp implements IHallMallPaySuccessResp {

    /**
     * Constructs a new HallMallPaySuccessResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHallMallPaySuccessResp);

    /** HallMallPaySuccessResp result. */
    public result: number;

    /**
     * Creates a new HallMallPaySuccessResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HallMallPaySuccessResp instance
     */
    public static create(properties?: IHallMallPaySuccessResp): HallMallPaySuccessResp;

    /**
     * Encodes the specified HallMallPaySuccessResp message. Does not implicitly {@link HallMallPaySuccessResp.verify|verify} messages.
     * @param message HallMallPaySuccessResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHallMallPaySuccessResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HallMallPaySuccessResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HallMallPaySuccessResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallMallPaySuccessResp;
}

/** Properties of a MothCardRewardResp. */
export interface IMothCardRewardResp {

    /** MothCardRewardResp result */
    result: number;
}

/** Represents a MothCardRewardResp. */
export class MothCardRewardResp implements IMothCardRewardResp {

    /**
     * Constructs a new MothCardRewardResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMothCardRewardResp);

    /** MothCardRewardResp result. */
    public result: number;

    /**
     * Creates a new MothCardRewardResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MothCardRewardResp instance
     */
    public static create(properties?: IMothCardRewardResp): MothCardRewardResp;

    /**
     * Encodes the specified MothCardRewardResp message. Does not implicitly {@link MothCardRewardResp.verify|verify} messages.
     * @param message MothCardRewardResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMothCardRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MothCardRewardResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MothCardRewardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MothCardRewardResp;
}

/** Properties of a WebLuckyStarPackageResp. */
export interface IWebLuckyStarPackageResp {

    /** WebLuckyStarPackageResp time */
    time: (number|Long);
}

/** Represents a WebLuckyStarPackageResp. */
export class WebLuckyStarPackageResp implements IWebLuckyStarPackageResp {

    /**
     * Constructs a new WebLuckyStarPackageResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWebLuckyStarPackageResp);

    /** WebLuckyStarPackageResp time. */
    public time: (number|Long);

    /**
     * Creates a new WebLuckyStarPackageResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WebLuckyStarPackageResp instance
     */
    public static create(properties?: IWebLuckyStarPackageResp): WebLuckyStarPackageResp;

    /**
     * Encodes the specified WebLuckyStarPackageResp message. Does not implicitly {@link WebLuckyStarPackageResp.verify|verify} messages.
     * @param message WebLuckyStarPackageResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWebLuckyStarPackageResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WebLuckyStarPackageResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebLuckyStarPackageResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WebLuckyStarPackageResp;
}

/** MsgCode enum. */
export enum MsgCode {
    USER_REG_MACHINE_LIMIT = 114,
    USER_HAVE_NOT_LOGIN = 115,
    USER_REGISTER_ERROR = 116,
    USER_LOGIN_PASSWORD_ERROR = 117,
    USER_LOGIN_SPREADER_ERROR = 118,
    REGISTER_SYSTEM_FORBID_NICKNAME_REG = 119,
    USER_TOKEN_ERROR = 120,
    SAILING_PACKAGE_STATUS_ERROR = 121,
    USER_REAL_NAME_IS_EMPTY = 122,
    USER_REAL_NAME_THAN_12 = 123,
    USER_REAL_NAME_NOT_CORRECT = 124,
    USER_ID_CARD_NOT_CORRECT = 125,
    SIGN_STAYUS_ERROR = 126,
    FISH_TICKET_DEDUCT_ERROR = 127,
    EXCHANGE_CODE_USED = 128,
    EXCHANGE_CODE_INVALID = 129,
    EXCHANGE_CODE_NOT_EXIST = 130,
    VIP_WHEEL_NOT_COUNT = 131,
    RED_PACK_CODE_ERROR = 132,
    RED_PACK_CODE_NO_AVAIL = 133,
    RED_PACK_CODE_USED_LIMIT = 134,
    RED_PACK_CODE_OLD_PLAYER = 135,
    ID_CARD_IS_LEGAL = 136,
    REAL_NAME_IS_LEGAL = 137,
    LOGIN_NAME_IS_LEGAL = 138,
    IN_STROANGE_VIP_LEVEL = 139,
    ITEM_NUMBER_IS_FULL = 140,
    STORAGE_PWD_IS_WRONG = 141,
    PHONE_IS_WRONG = 142,
    USER_NOT_VERIFIED = 143,
    NOT_BINDING_PHONE = 144,
    ID_CARD_HAVE_BEEN_EXIST = 145,
    PACK_NOT_HAVE_THING = 146,
    ITEM_NOT_ENOUGTH = 147,
    NICKNAME_IS_ERROR = 148,
    SECOND_PWD_IS_WRONG = 149,
    SECOND_PWD_NOT_EXIST = 150,
    CANT_BUY = 151,
    CANT_SELL = 152,
    CANT_COMPOSE = 153,
    CANT_DECOMPOSE = 154,
    CANT_GIVE = 155,
    CNAT_SPICAL_HANDLE = 156,
    CANT_EQUIP = 157,
    HAVE_FIRST_BUY = 158,
    PAY_SUCCESS_HAVE_HANDLE = 159,
    LEVEL_LOW = 160,
    VIP_LOW = 161,
    ACCOUNT_ERROR = 162,
    PWD_ERROR = 163,
    PWD_NULL = 164,
    SENSITIVE_BYTE = 165,
    ALREADY_ACCEPT = 166,
    USER_ACCOUNT_SEAL = 167,
    USER_SCORE_NOT_ENOUGTH = 168,
    USER_PHONE_NOT_BIND = 169,
    USER_PHONE_CODE_ERROR = 170,
    USER_PHONE_ALREADY_BIND = 171,
    GIVED_NOT_NICKNAME = 172,
    REALNAME_NOTLOGIN = 173,
    PHONE_CODE_STATUS_LAPSE = 174,
    ADVERTISE_TIMES_USEOUT = 175,
    REPEATED_EQUIP = 176,
    GIFTMALL_NO_GOODS = 177,
    GIFTMALL_GOODS_SOLDOUT = 178,
    GIFTMALL_BUY_PERSONAL_LIMIT = 179,
    GIFTMALL_COST_NOT_ENOUGH = 180,
    GIFTMALL_REFRESH_FAIL = 181,
    STORAGE_OUT_CANNON_LOW = 182,
    ITEM_CANNOT_EMPTY = 183,
    ITEM_TOO_MUCH = 184,
    VIP_LESS_THAN_FIVE = 185,
    SCORE_NOT_ENOUGH = 186,
    FETCHCODE_ERROR = 187,
    FETCHCODE_FETCHED = 188,
    FETCHCODE_OVERDUE = 189,
    USER_ALREADY_AUTH = 190,
    USER_BIND_MACHINE = 191,
    LOGIN_SERVER_SHUTDOWN = 192,
    EXCHANGE_BATCH_CODE_FAIL = 193,
    EXCHANGE_CODE_CHANNEL_FAIL = 194,
    EMAIL_IS_WRONG = 301,
    USER_EMAIL_CODE_ERROR = 302,
    USER_EMAIL_ALREADY_BIND = 303,
    USER_EMAIL_NOT_BIND = 304,
    NOT_BINDING_EMAIL = 305
}

/** Properties of a WebErrorMsg. */
export interface IWebErrorMsg {

    /** WebErrorMsg msgcode */
    msgcode?: (MsgCode|null);

    /** WebErrorMsg msg */
    msg?: (string|null);

    /** WebErrorMsg cmd */
    cmd?: (number|null);
}

/** Represents a WebErrorMsg. */
export class WebErrorMsg implements IWebErrorMsg {

    /**
     * Constructs a new WebErrorMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWebErrorMsg);

    /** WebErrorMsg msgcode. */
    public msgcode: MsgCode;

    /** WebErrorMsg msg. */
    public msg: string;

    /** WebErrorMsg cmd. */
    public cmd: number;

    /**
     * Creates a new WebErrorMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WebErrorMsg instance
     */
    public static create(properties?: IWebErrorMsg): WebErrorMsg;

    /**
     * Encodes the specified WebErrorMsg message. Does not implicitly {@link WebErrorMsg.verify|verify} messages.
     * @param message WebErrorMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWebErrorMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WebErrorMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebErrorMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WebErrorMsg;
}

/** Properties of a WebSailingPackageResp. */
export interface IWebSailingPackageResp {

    /** WebSailingPackageResp rewards */
    rewards?: (IToolItem[]|null);

    /** WebSailingPackageResp tr */
    tr?: (ITreasureUpdate|null);
}

/** Represents a WebSailingPackageResp. */
export class WebSailingPackageResp implements IWebSailingPackageResp {

    /**
     * Constructs a new WebSailingPackageResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWebSailingPackageResp);

    /** WebSailingPackageResp rewards. */
    public rewards: Array<IToolItem>;

    /** WebSailingPackageResp tr. */
    public tr?: (ITreasureUpdate|null);

    /**
     * Creates a new WebSailingPackageResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WebSailingPackageResp instance
     */
    public static create(properties?: IWebSailingPackageResp): WebSailingPackageResp;

    /**
     * Encodes the specified WebSailingPackageResp message. Does not implicitly {@link WebSailingPackageResp.verify|verify} messages.
     * @param message WebSailingPackageResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWebSailingPackageResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WebSailingPackageResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebSailingPackageResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WebSailingPackageResp;
}

/** Properties of a SevenDaysPackageIndexResp. */
export interface ISevenDaysPackageIndexResp {

    /** SevenDaysPackageIndexResp sevenDaysPackageInfo */
    sevenDaysPackageInfo?: (ISevenDaysPackage[]|null);

    /** SevenDaysPackageIndexResp curDay */
    curDay: number;

    /** SevenDaysPackageIndexResp curStatus */
    curStatus: number;
}

/** Represents a SevenDaysPackageIndexResp. */
export class SevenDaysPackageIndexResp implements ISevenDaysPackageIndexResp {

    /**
     * Constructs a new SevenDaysPackageIndexResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISevenDaysPackageIndexResp);

    /** SevenDaysPackageIndexResp sevenDaysPackageInfo. */
    public sevenDaysPackageInfo: Array<ISevenDaysPackage>;

    /** SevenDaysPackageIndexResp curDay. */
    public curDay: number;

    /** SevenDaysPackageIndexResp curStatus. */
    public curStatus: number;

    /**
     * Creates a new SevenDaysPackageIndexResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SevenDaysPackageIndexResp instance
     */
    public static create(properties?: ISevenDaysPackageIndexResp): SevenDaysPackageIndexResp;

    /**
     * Encodes the specified SevenDaysPackageIndexResp message. Does not implicitly {@link SevenDaysPackageIndexResp.verify|verify} messages.
     * @param message SevenDaysPackageIndexResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISevenDaysPackageIndexResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SevenDaysPackageIndexResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SevenDaysPackageIndexResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SevenDaysPackageIndexResp;
}

/** Properties of a SevenDaysPackage. */
export interface ISevenDaysPackage {

    /** SevenDaysPackage day */
    day: number;

    /** SevenDaysPackage type */
    type: number;

    /** SevenDaysPackage text */
    text: string;

    /** SevenDaysPackage totalVal */
    totalVal: number;

    /** SevenDaysPackage currentVal */
    currentVal: number;

    /** SevenDaysPackage awards */
    awards?: (IToolItem[]|null);
}

/** Represents a SevenDaysPackage. */
export class SevenDaysPackage implements ISevenDaysPackage {

    /**
     * Constructs a new SevenDaysPackage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISevenDaysPackage);

    /** SevenDaysPackage day. */
    public day: number;

    /** SevenDaysPackage type. */
    public type: number;

    /** SevenDaysPackage text. */
    public text: string;

    /** SevenDaysPackage totalVal. */
    public totalVal: number;

    /** SevenDaysPackage currentVal. */
    public currentVal: number;

    /** SevenDaysPackage awards. */
    public awards: Array<IToolItem>;

    /**
     * Creates a new SevenDaysPackage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SevenDaysPackage instance
     */
    public static create(properties?: ISevenDaysPackage): SevenDaysPackage;

    /**
     * Encodes the specified SevenDaysPackage message. Does not implicitly {@link SevenDaysPackage.verify|verify} messages.
     * @param message SevenDaysPackage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISevenDaysPackage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SevenDaysPackage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SevenDaysPackage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SevenDaysPackage;
}

/** Properties of a SevenDaysPackageRecvReq. */
export interface ISevenDaysPackageRecvReq {

    /** SevenDaysPackageRecvReq awardDay */
    awardDay: number;
}

/** Represents a SevenDaysPackageRecvReq. */
export class SevenDaysPackageRecvReq implements ISevenDaysPackageRecvReq {

    /**
     * Constructs a new SevenDaysPackageRecvReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISevenDaysPackageRecvReq);

    /** SevenDaysPackageRecvReq awardDay. */
    public awardDay: number;

    /**
     * Creates a new SevenDaysPackageRecvReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SevenDaysPackageRecvReq instance
     */
    public static create(properties?: ISevenDaysPackageRecvReq): SevenDaysPackageRecvReq;

    /**
     * Encodes the specified SevenDaysPackageRecvReq message. Does not implicitly {@link SevenDaysPackageRecvReq.verify|verify} messages.
     * @param message SevenDaysPackageRecvReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISevenDaysPackageRecvReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SevenDaysPackageRecvReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SevenDaysPackageRecvReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SevenDaysPackageRecvReq;
}

/** Properties of a SevenDaysPackageRecvResp. */
export interface ISevenDaysPackageRecvResp {

    /** SevenDaysPackageRecvResp awardDay */
    awardDay: number;

    /** SevenDaysPackageRecvResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;
}

/** Represents a SevenDaysPackageRecvResp. */
export class SevenDaysPackageRecvResp implements ISevenDaysPackageRecvResp {

    /**
     * Constructs a new SevenDaysPackageRecvResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISevenDaysPackageRecvResp);

    /** SevenDaysPackageRecvResp awardDay. */
    public awardDay: number;

    /** SevenDaysPackageRecvResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /**
     * Creates a new SevenDaysPackageRecvResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SevenDaysPackageRecvResp instance
     */
    public static create(properties?: ISevenDaysPackageRecvResp): SevenDaysPackageRecvResp;

    /**
     * Encodes the specified SevenDaysPackageRecvResp message. Does not implicitly {@link SevenDaysPackageRecvResp.verify|verify} messages.
     * @param message SevenDaysPackageRecvResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISevenDaysPackageRecvResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SevenDaysPackageRecvResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SevenDaysPackageRecvResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SevenDaysPackageRecvResp;
}

/** Properties of a SignWheelIndexResp. */
export interface ISignWheelIndexResp {

    /** SignWheelIndexResp awards */
    awards?: (IToolItem[]|null);
}

/** Represents a SignWheelIndexResp. */
export class SignWheelIndexResp implements ISignWheelIndexResp {

    /**
     * Constructs a new SignWheelIndexResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignWheelIndexResp);

    /** SignWheelIndexResp awards. */
    public awards: Array<IToolItem>;

    /**
     * Creates a new SignWheelIndexResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignWheelIndexResp instance
     */
    public static create(properties?: ISignWheelIndexResp): SignWheelIndexResp;

    /**
     * Encodes the specified SignWheelIndexResp message. Does not implicitly {@link SignWheelIndexResp.verify|verify} messages.
     * @param message SignWheelIndexResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignWheelIndexResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignWheelIndexResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SignWheelIndexResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignWheelIndexResp;
}

/** Properties of a SignWheelRunResp. */
export interface ISignWheelRunResp {

    /** SignWheelRunResp awardsID */
    awardsID: number;

    /** SignWheelRunResp rewards */
    rewards: IToolItem;

    /** SignWheelRunResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;
}

/** Represents a SignWheelRunResp. */
export class SignWheelRunResp implements ISignWheelRunResp {

    /**
     * Constructs a new SignWheelRunResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignWheelRunResp);

    /** SignWheelRunResp awardsID. */
    public awardsID: number;

    /** SignWheelRunResp rewards. */
    public rewards: IToolItem;

    /** SignWheelRunResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /**
     * Creates a new SignWheelRunResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignWheelRunResp instance
     */
    public static create(properties?: ISignWheelRunResp): SignWheelRunResp;

    /**
     * Encodes the specified SignWheelRunResp message. Does not implicitly {@link SignWheelRunResp.verify|verify} messages.
     * @param message SignWheelRunResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignWheelRunResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignWheelRunResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SignWheelRunResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignWheelRunResp;
}

/** Properties of a SignWheelShareAwardResp. */
export interface ISignWheelShareAwardResp {

    /** SignWheelShareAwardResp rewards */
    rewards: IToolItem;

    /** SignWheelShareAwardResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;
}

/** Represents a SignWheelShareAwardResp. */
export class SignWheelShareAwardResp implements ISignWheelShareAwardResp {

    /**
     * Constructs a new SignWheelShareAwardResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignWheelShareAwardResp);

    /** SignWheelShareAwardResp rewards. */
    public rewards: IToolItem;

    /** SignWheelShareAwardResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /**
     * Creates a new SignWheelShareAwardResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignWheelShareAwardResp instance
     */
    public static create(properties?: ISignWheelShareAwardResp): SignWheelShareAwardResp;

    /**
     * Encodes the specified SignWheelShareAwardResp message. Does not implicitly {@link SignWheelShareAwardResp.verify|verify} messages.
     * @param message SignWheelShareAwardResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignWheelShareAwardResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignWheelShareAwardResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SignWheelShareAwardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignWheelShareAwardResp;
}

/** Properties of a SevenSignResp. */
export interface ISevenSignResp {

    /** SevenSignResp curDay */
    curDay: number;

    /** SevenSignResp totalDay */
    totalDay: number;

    /** SevenSignResp isNew */
    isNew: number;

    /** SevenSignResp wealStatus */
    wealStatus: number;

    /** SevenSignResp rewards */
    rewards?: (IToolItem[]|null);

    /** SevenSignResp sevenSign */
    sevenSign?: (ISevenSign[]|null);

    /** SevenSignResp monthSign */
    monthSign?: (IMonthSign[]|null);
}

/** Represents a SevenSignResp. */
export class SevenSignResp implements ISevenSignResp {

    /**
     * Constructs a new SevenSignResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISevenSignResp);

    /** SevenSignResp curDay. */
    public curDay: number;

    /** SevenSignResp totalDay. */
    public totalDay: number;

    /** SevenSignResp isNew. */
    public isNew: number;

    /** SevenSignResp wealStatus. */
    public wealStatus: number;

    /** SevenSignResp rewards. */
    public rewards: Array<IToolItem>;

    /** SevenSignResp sevenSign. */
    public sevenSign: Array<ISevenSign>;

    /** SevenSignResp monthSign. */
    public monthSign: Array<IMonthSign>;

    /**
     * Creates a new SevenSignResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SevenSignResp instance
     */
    public static create(properties?: ISevenSignResp): SevenSignResp;

    /**
     * Encodes the specified SevenSignResp message. Does not implicitly {@link SevenSignResp.verify|verify} messages.
     * @param message SevenSignResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISevenSignResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SevenSignResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SevenSignResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SevenSignResp;
}

/** Properties of a MonthSign. */
export interface IMonthSign {

    /** MonthSign Id */
    Id: number;

    /** MonthSign day */
    day: number;

    /** MonthSign status */
    status: number;

    /** MonthSign rewards */
    rewards?: (IToolItem[]|null);
}

/** Represents a MonthSign. */
export class MonthSign implements IMonthSign {

    /**
     * Constructs a new MonthSign.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMonthSign);

    /** MonthSign Id. */
    public Id: number;

    /** MonthSign day. */
    public day: number;

    /** MonthSign status. */
    public status: number;

    /** MonthSign rewards. */
    public rewards: Array<IToolItem>;

    /**
     * Creates a new MonthSign instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MonthSign instance
     */
    public static create(properties?: IMonthSign): MonthSign;

    /**
     * Encodes the specified MonthSign message. Does not implicitly {@link MonthSign.verify|verify} messages.
     * @param message MonthSign message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMonthSign, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MonthSign message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MonthSign
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MonthSign;
}

/** Properties of a SevenSign. */
export interface ISevenSign {

    /** SevenSign Id */
    Id: number;

    /** SevenSign day */
    day: number;

    /** SevenSign noble */
    noble: number;

    /** SevenSign status */
    status: number;

    /** SevenSign rewards */
    rewards?: (IToolItem[]|null);
}

/** Represents a SevenSign. */
export class SevenSign implements ISevenSign {

    /**
     * Constructs a new SevenSign.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISevenSign);

    /** SevenSign Id. */
    public Id: number;

    /** SevenSign day. */
    public day: number;

    /** SevenSign noble. */
    public noble: number;

    /** SevenSign status. */
    public status: number;

    /** SevenSign rewards. */
    public rewards: Array<IToolItem>;

    /**
     * Creates a new SevenSign instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SevenSign instance
     */
    public static create(properties?: ISevenSign): SevenSign;

    /**
     * Encodes the specified SevenSign message. Does not implicitly {@link SevenSign.verify|verify} messages.
     * @param message SevenSign message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISevenSign, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SevenSign message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SevenSign
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SevenSign;
}

/** Properties of a SignNewPlayerResp. */
export interface ISignNewPlayerResp {

    /** SignNewPlayerResp multiple */
    multiple: number;

    /** SignNewPlayerResp rewards */
    rewards?: (IToolItem[]|null);
}

/** Represents a SignNewPlayerResp. */
export class SignNewPlayerResp implements ISignNewPlayerResp {

    /**
     * Constructs a new SignNewPlayerResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignNewPlayerResp);

    /** SignNewPlayerResp multiple. */
    public multiple: number;

    /** SignNewPlayerResp rewards. */
    public rewards: Array<IToolItem>;

    /**
     * Creates a new SignNewPlayerResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignNewPlayerResp instance
     */
    public static create(properties?: ISignNewPlayerResp): SignNewPlayerResp;

    /**
     * Encodes the specified SignNewPlayerResp message. Does not implicitly {@link SignNewPlayerResp.verify|verify} messages.
     * @param message SignNewPlayerResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignNewPlayerResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignNewPlayerResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SignNewPlayerResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignNewPlayerResp;
}

/** Properties of a SignSevenIndexReq. */
export interface ISignSevenIndexReq {

    /** SignSevenIndexReq id */
    id: number;

    /** SignSevenIndexReq extId */
    extId: number;
}

/** Represents a SignSevenIndexReq. */
export class SignSevenIndexReq implements ISignSevenIndexReq {

    /**
     * Constructs a new SignSevenIndexReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignSevenIndexReq);

    /** SignSevenIndexReq id. */
    public id: number;

    /** SignSevenIndexReq extId. */
    public extId: number;

    /**
     * Creates a new SignSevenIndexReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignSevenIndexReq instance
     */
    public static create(properties?: ISignSevenIndexReq): SignSevenIndexReq;

    /**
     * Encodes the specified SignSevenIndexReq message. Does not implicitly {@link SignSevenIndexReq.verify|verify} messages.
     * @param message SignSevenIndexReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignSevenIndexReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignSevenIndexReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SignSevenIndexReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignSevenIndexReq;
}

/** Properties of a SignNewPlayerReq. */
export interface ISignNewPlayerReq {

    /** SignNewPlayerReq id */
    id: number;
}

/** Represents a SignNewPlayerReq. */
export class SignNewPlayerReq implements ISignNewPlayerReq {

    /**
     * Constructs a new SignNewPlayerReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignNewPlayerReq);

    /** SignNewPlayerReq id. */
    public id: number;

    /**
     * Creates a new SignNewPlayerReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignNewPlayerReq instance
     */
    public static create(properties?: ISignNewPlayerReq): SignNewPlayerReq;

    /**
     * Encodes the specified SignNewPlayerReq message. Does not implicitly {@link SignNewPlayerReq.verify|verify} messages.
     * @param message SignNewPlayerReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignNewPlayerReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignNewPlayerReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SignNewPlayerReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignNewPlayerReq;
}

/** Properties of a SignRecvResp. */
export interface ISignRecvResp {

    /** SignRecvResp rewards */
    rewards?: (IToolItem[]|null);

    /** SignRecvResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;
}

/** Represents a SignRecvResp. */
export class SignRecvResp implements ISignRecvResp {

    /**
     * Constructs a new SignRecvResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignRecvResp);

    /** SignRecvResp rewards. */
    public rewards: Array<IToolItem>;

    /** SignRecvResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /**
     * Creates a new SignRecvResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignRecvResp instance
     */
    public static create(properties?: ISignRecvResp): SignRecvResp;

    /**
     * Encodes the specified SignRecvResp message. Does not implicitly {@link SignRecvResp.verify|verify} messages.
     * @param message SignRecvResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignRecvResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignRecvResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SignRecvResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignRecvResp;
}

/** Properties of a QueryTaskInfoReq. */
export interface IQueryTaskInfoReq {

    /** QueryTaskInfoReq moduleId */
    moduleId: string;
}

/** Represents a QueryTaskInfoReq. */
export class QueryTaskInfoReq implements IQueryTaskInfoReq {

    /**
     * Constructs a new QueryTaskInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryTaskInfoReq);

    /** QueryTaskInfoReq moduleId. */
    public moduleId: string;

    /**
     * Creates a new QueryTaskInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryTaskInfoReq instance
     */
    public static create(properties?: IQueryTaskInfoReq): QueryTaskInfoReq;

    /**
     * Encodes the specified QueryTaskInfoReq message. Does not implicitly {@link QueryTaskInfoReq.verify|verify} messages.
     * @param message QueryTaskInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryTaskInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryTaskInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryTaskInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryTaskInfoReq;
}

/** Properties of a QueryTaskStatus. */
export interface IQueryTaskStatus {

    /** QueryTaskStatus webTaskStatus */
    webTaskStatus?: (IWebTaskStatus[]|null);
}

/** Represents a QueryTaskStatus. */
export class QueryTaskStatus implements IQueryTaskStatus {

    /**
     * Constructs a new QueryTaskStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryTaskStatus);

    /** QueryTaskStatus webTaskStatus. */
    public webTaskStatus: Array<IWebTaskStatus>;

    /**
     * Creates a new QueryTaskStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryTaskStatus instance
     */
    public static create(properties?: IQueryTaskStatus): QueryTaskStatus;

    /**
     * Encodes the specified QueryTaskStatus message. Does not implicitly {@link QueryTaskStatus.verify|verify} messages.
     * @param message QueryTaskStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryTaskStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryTaskStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryTaskStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryTaskStatus;
}

/** Properties of a WebTaskStatus. */
export interface IWebTaskStatus {

    /** WebTaskStatus taskId */
    taskId: string;

    /** WebTaskStatus curVal */
    curVal: number;

    /** WebTaskStatus status */
    status: number;
}

/** Represents a WebTaskStatus. */
export class WebTaskStatus implements IWebTaskStatus {

    /**
     * Constructs a new WebTaskStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWebTaskStatus);

    /** WebTaskStatus taskId. */
    public taskId: string;

    /** WebTaskStatus curVal. */
    public curVal: number;

    /** WebTaskStatus status. */
    public status: number;

    /**
     * Creates a new WebTaskStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WebTaskStatus instance
     */
    public static create(properties?: IWebTaskStatus): WebTaskStatus;

    /**
     * Encodes the specified WebTaskStatus message. Does not implicitly {@link WebTaskStatus.verify|verify} messages.
     * @param message WebTaskStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWebTaskStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WebTaskStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebTaskStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WebTaskStatus;
}

/** Properties of a QueryTaskResp. */
export interface IQueryTaskResp {

    /** QueryTaskResp queryTask */
    queryTask?: (IQueryTask[]|null);
}

/** Represents a QueryTaskResp. */
export class QueryTaskResp implements IQueryTaskResp {

    /**
     * Constructs a new QueryTaskResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryTaskResp);

    /** QueryTaskResp queryTask. */
    public queryTask: Array<IQueryTask>;

    /**
     * Creates a new QueryTaskResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryTaskResp instance
     */
    public static create(properties?: IQueryTaskResp): QueryTaskResp;

    /**
     * Encodes the specified QueryTaskResp message. Does not implicitly {@link QueryTaskResp.verify|verify} messages.
     * @param message QueryTaskResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryTaskResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryTaskResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryTaskResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryTaskResp;
}

/** Properties of a QueryTask. */
export interface IQueryTask {

    /** QueryTask moduleId */
    moduleId: string;

    /** QueryTask buttonName */
    buttonName: string;
}

/** Represents a QueryTask. */
export class QueryTask implements IQueryTask {

    /**
     * Constructs a new QueryTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryTask);

    /** QueryTask moduleId. */
    public moduleId: string;

    /** QueryTask buttonName. */
    public buttonName: string;

    /**
     * Creates a new QueryTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryTask instance
     */
    public static create(properties?: IQueryTask): QueryTask;

    /**
     * Encodes the specified QueryTask message. Does not implicitly {@link QueryTask.verify|verify} messages.
     * @param message QueryTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryTask;
}

/** Properties of a GroupCompleteResp. */
export interface IGroupCompleteResp {

    /** GroupCompleteResp groupCompleteInfo */
    groupCompleteInfo?: (IGroupCompleteInfo[]|null);
}

/** Represents a GroupCompleteResp. */
export class GroupCompleteResp implements IGroupCompleteResp {

    /**
     * Constructs a new GroupCompleteResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGroupCompleteResp);

    /** GroupCompleteResp groupCompleteInfo. */
    public groupCompleteInfo: Array<IGroupCompleteInfo>;

    /**
     * Creates a new GroupCompleteResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GroupCompleteResp instance
     */
    public static create(properties?: IGroupCompleteResp): GroupCompleteResp;

    /**
     * Encodes the specified GroupCompleteResp message. Does not implicitly {@link GroupCompleteResp.verify|verify} messages.
     * @param message GroupCompleteResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGroupCompleteResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GroupCompleteResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupCompleteResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GroupCompleteResp;
}

/** Properties of a GroupCompleteInfo. */
export interface IGroupCompleteInfo {

    /** GroupCompleteInfo groupId */
    groupId: string;

    /** GroupCompleteInfo curVal */
    curVal: number;

    /** GroupCompleteInfo status */
    status: number;
}

/** Represents a GroupCompleteInfo. */
export class GroupCompleteInfo implements IGroupCompleteInfo {

    /**
     * Constructs a new GroupCompleteInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGroupCompleteInfo);

    /** GroupCompleteInfo groupId. */
    public groupId: string;

    /** GroupCompleteInfo curVal. */
    public curVal: number;

    /** GroupCompleteInfo status. */
    public status: number;

    /**
     * Creates a new GroupCompleteInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GroupCompleteInfo instance
     */
    public static create(properties?: IGroupCompleteInfo): GroupCompleteInfo;

    /**
     * Encodes the specified GroupCompleteInfo message. Does not implicitly {@link GroupCompleteInfo.verify|verify} messages.
     * @param message GroupCompleteInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGroupCompleteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GroupCompleteInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupCompleteInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GroupCompleteInfo;
}

/** Properties of a TaskRewardReq. */
export interface ITaskRewardReq {

    /** TaskRewardReq taskId */
    taskId: string;
}

/** Represents a TaskRewardReq. */
export class TaskRewardReq implements ITaskRewardReq {

    /**
     * Constructs a new TaskRewardReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITaskRewardReq);

    /** TaskRewardReq taskId. */
    public taskId: string;

    /**
     * Creates a new TaskRewardReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TaskRewardReq instance
     */
    public static create(properties?: ITaskRewardReq): TaskRewardReq;

    /**
     * Encodes the specified TaskRewardReq message. Does not implicitly {@link TaskRewardReq.verify|verify} messages.
     * @param message TaskRewardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITaskRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TaskRewardReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TaskRewardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TaskRewardReq;
}

/** Properties of a TaskRewardResp. */
export interface ITaskRewardResp {

    /** TaskRewardResp taskId */
    taskId: string;

    /** TaskRewardResp rewards */
    rewards?: (IToolItem[]|null);

    /** TaskRewardResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;
}

/** Represents a TaskRewardResp. */
export class TaskRewardResp implements ITaskRewardResp {

    /**
     * Constructs a new TaskRewardResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITaskRewardResp);

    /** TaskRewardResp taskId. */
    public taskId: string;

    /** TaskRewardResp rewards. */
    public rewards: Array<IToolItem>;

    /** TaskRewardResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /**
     * Creates a new TaskRewardResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TaskRewardResp instance
     */
    public static create(properties?: ITaskRewardResp): TaskRewardResp;

    /**
     * Encodes the specified TaskRewardResp message. Does not implicitly {@link TaskRewardResp.verify|verify} messages.
     * @param message TaskRewardResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITaskRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TaskRewardResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TaskRewardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TaskRewardResp;
}

/** Properties of a VipLuckyWheelIndexResp. */
export interface IVipLuckyWheelIndexResp {

    /** VipLuckyWheelIndexResp runOnceCost */
    runOnceCost: IToolItem;

    /** VipLuckyWheelIndexResp lotteryCount */
    lotteryCount: number;

    /** VipLuckyWheelIndexResp awards */
    awards?: (IToolItem[]|null);
}

/** Represents a VipLuckyWheelIndexResp. */
export class VipLuckyWheelIndexResp implements IVipLuckyWheelIndexResp {

    /**
     * Constructs a new VipLuckyWheelIndexResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVipLuckyWheelIndexResp);

    /** VipLuckyWheelIndexResp runOnceCost. */
    public runOnceCost: IToolItem;

    /** VipLuckyWheelIndexResp lotteryCount. */
    public lotteryCount: number;

    /** VipLuckyWheelIndexResp awards. */
    public awards: Array<IToolItem>;

    /**
     * Creates a new VipLuckyWheelIndexResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VipLuckyWheelIndexResp instance
     */
    public static create(properties?: IVipLuckyWheelIndexResp): VipLuckyWheelIndexResp;

    /**
     * Encodes the specified VipLuckyWheelIndexResp message. Does not implicitly {@link VipLuckyWheelIndexResp.verify|verify} messages.
     * @param message VipLuckyWheelIndexResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVipLuckyWheelIndexResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VipLuckyWheelIndexResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VipLuckyWheelIndexResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VipLuckyWheelIndexResp;
}

/** Properties of a VipLuckyWheelRunResp. */
export interface IVipLuckyWheelRunResp {

    /** VipLuckyWheelRunResp remainCount */
    remainCount: number;

    /** VipLuckyWheelRunResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;

    /** VipLuckyWheelRunResp awardsID */
    awardsID: number;
}

/** Represents a VipLuckyWheelRunResp. */
export class VipLuckyWheelRunResp implements IVipLuckyWheelRunResp {

    /**
     * Constructs a new VipLuckyWheelRunResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVipLuckyWheelRunResp);

    /** VipLuckyWheelRunResp remainCount. */
    public remainCount: number;

    /** VipLuckyWheelRunResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /** VipLuckyWheelRunResp awardsID. */
    public awardsID: number;

    /**
     * Creates a new VipLuckyWheelRunResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VipLuckyWheelRunResp instance
     */
    public static create(properties?: IVipLuckyWheelRunResp): VipLuckyWheelRunResp;

    /**
     * Encodes the specified VipLuckyWheelRunResp message. Does not implicitly {@link VipLuckyWheelRunResp.verify|verify} messages.
     * @param message VipLuckyWheelRunResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVipLuckyWheelRunResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VipLuckyWheelRunResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VipLuckyWheelRunResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VipLuckyWheelRunResp;
}

/** Properties of a WebServerVipAllShowResp. */
export interface IWebServerVipAllShowResp {

    /** WebServerVipAllShowResp vipInfo */
    vipInfo?: (IVip[]|null);
}

/** Represents a WebServerVipAllShowResp. */
export class WebServerVipAllShowResp implements IWebServerVipAllShowResp {

    /**
     * Constructs a new WebServerVipAllShowResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWebServerVipAllShowResp);

    /** WebServerVipAllShowResp vipInfo. */
    public vipInfo: Array<IVip>;

    /**
     * Creates a new WebServerVipAllShowResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WebServerVipAllShowResp instance
     */
    public static create(properties?: IWebServerVipAllShowResp): WebServerVipAllShowResp;

    /**
     * Encodes the specified WebServerVipAllShowResp message. Does not implicitly {@link WebServerVipAllShowResp.verify|verify} messages.
     * @param message WebServerVipAllShowResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWebServerVipAllShowResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WebServerVipAllShowResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebServerVipAllShowResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WebServerVipAllShowResp;
}

/** Properties of a Vip. */
export interface IVip {

    /** Vip viplevel */
    viplevel: number;

    /** Vip charge */
    charge: number;

    /** Vip describe */
    describe?: (string[]|null);
}

/** Represents a Vip. */
export class Vip implements IVip {

    /**
     * Constructs a new Vip.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVip);

    /** Vip viplevel. */
    public viplevel: number;

    /** Vip charge. */
    public charge: number;

    /** Vip describe. */
    public describe: Array<string>;

    /**
     * Creates a new Vip instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Vip instance
     */
    public static create(properties?: IVip): Vip;

    /**
     * Encodes the specified Vip message. Does not implicitly {@link Vip.verify|verify} messages.
     * @param message Vip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Vip message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Vip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Vip;
}

/** Properties of a ToNextVIP. */
export interface IToNextVIP {

    /** ToNextVIP vip */
    vip: number;

    /** ToNextVIP vipNeedTotalCharge */
    vipNeedTotalCharge: number;

    /** ToNextVIP nextVip */
    nextVip: number;

    /** ToNextVIP nextVipNeedTotalCharge */
    nextVipNeedTotalCharge: number;

    /** ToNextVIP rmbToNextVip */
    rmbToNextVip: number;
}

/** Represents a ToNextVIP. */
export class ToNextVIP implements IToNextVIP {

    /**
     * Constructs a new ToNextVIP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IToNextVIP);

    /** ToNextVIP vip. */
    public vip: number;

    /** ToNextVIP vipNeedTotalCharge. */
    public vipNeedTotalCharge: number;

    /** ToNextVIP nextVip. */
    public nextVip: number;

    /** ToNextVIP nextVipNeedTotalCharge. */
    public nextVipNeedTotalCharge: number;

    /** ToNextVIP rmbToNextVip. */
    public rmbToNextVip: number;

    /**
     * Creates a new ToNextVIP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ToNextVIP instance
     */
    public static create(properties?: IToNextVIP): ToNextVIP;

    /**
     * Encodes the specified ToNextVIP message. Does not implicitly {@link ToNextVIP.verify|verify} messages.
     * @param message ToNextVIP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IToNextVIP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ToNextVIP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ToNextVIP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ToNextVIP;
}

/** Properties of a WeChatPublicResp. */
export interface IWeChatPublicResp {

    /** WeChatPublicResp status */
    status: string;
}

/** Represents a WeChatPublicResp. */
export class WeChatPublicResp implements IWeChatPublicResp {

    /**
     * Constructs a new WeChatPublicResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWeChatPublicResp);

    /** WeChatPublicResp status. */
    public status: string;

    /**
     * Creates a new WeChatPublicResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WeChatPublicResp instance
     */
    public static create(properties?: IWeChatPublicResp): WeChatPublicResp;

    /**
     * Encodes the specified WeChatPublicResp message. Does not implicitly {@link WeChatPublicResp.verify|verify} messages.
     * @param message WeChatPublicResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWeChatPublicResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WeChatPublicResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WeChatPublicResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WeChatPublicResp;
}

/** Properties of a WeChatPublicAwardResp. */
export interface IWeChatPublicAwardResp {

    /** WeChatPublicAwardResp rewards */
    rewards?: (IToolItem[]|null);

    /** WeChatPublicAwardResp treasureUpdate */
    treasureUpdate: ITreasureUpdate;
}

/** Represents a WeChatPublicAwardResp. */
export class WeChatPublicAwardResp implements IWeChatPublicAwardResp {

    /**
     * Constructs a new WeChatPublicAwardResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWeChatPublicAwardResp);

    /** WeChatPublicAwardResp rewards. */
    public rewards: Array<IToolItem>;

    /** WeChatPublicAwardResp treasureUpdate. */
    public treasureUpdate: ITreasureUpdate;

    /**
     * Creates a new WeChatPublicAwardResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WeChatPublicAwardResp instance
     */
    public static create(properties?: IWeChatPublicAwardResp): WeChatPublicAwardResp;

    /**
     * Encodes the specified WeChatPublicAwardResp message. Does not implicitly {@link WeChatPublicAwardResp.verify|verify} messages.
     * @param message WeChatPublicAwardResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWeChatPublicAwardResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WeChatPublicAwardResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WeChatPublicAwardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WeChatPublicAwardResp;
}
