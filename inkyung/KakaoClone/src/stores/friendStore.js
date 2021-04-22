import { observable, action, computed } from "mobx";

export default class FriendStore{
    @observable returnFriends = [];
    @observable returnFriendInfo = [];
    @observable length = 0;
    @observable combines = [];

    @computed get returnLength() {
        return this.returnFriends.length;
    }

    @observable fItems = [
        {
            Friend_ID : 0,
            NAME : "김영희",
            PImg : "/src/Photos/profile.png",
            PMusic: "Cry for Me - Camila Cabello ▷",
            PMessage: "🧸",
            Like: true,
            chats: true
        },
        {
            Friend_ID : 1,
            NAME : "김철수",
            PImg : "/src/Photos/profile.png",
            PMusic: "Celebrity - 아이유 ▷",
            PMessage: "",
            Like: false,
            chats: false
        },
        {
            Friend_ID : 2,
            NAME : "홍길동",
            PImg : "/src/Photos/profile.png",
            PMusic: "작은 것들을 위한 시 - 방탄소년단 ▷",
            PMessage: "부릉부릉",
            Like: false,
            chats: true
        },
        
    ];

    constructor(root) {
        this.root = root;
    }

    @action
    getFriends = (startIndex, count) => {
        this.returnFriends = this.fItems.slice(startIndex, startIndex + count);
        this.length = this.fItems.length;
    };

    @action
    getOne = (id, returnItems) => {
        this.returnFriendInfo = returnItems.filter(
            (item) => item.Friend_ID===id
        )
    };

    @action
    concatReset = () => {
       this.combines=[];
    };

    @action
    concatItems = (cItems, fItems) => {
        this.combines = this.combines.concat({
            Friend_ID: fItems.Friend_ID,
            PImg: fItems.PImg,
            NAME: fItems.NAME,
            showMessage: cItems.showMessage,
            cTime: cItems.cTime
        })
    };
}