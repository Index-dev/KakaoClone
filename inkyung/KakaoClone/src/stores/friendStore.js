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
            NAME : "κΉμν¬",
            PImg : "/src/Photos/profile.png",
            PMusic: "Cry for Me - Camila Cabello β·",
            PMessage: "π§Έ",
            Like: true,
            chats: true
        },
        {
            Friend_ID : 1,
            NAME : "κΉμ² μ",
            PImg : "/src/Photos/profile.png",
            PMusic: "Celebrity - μμ΄μ  β·",
            PMessage: "",
            Like: false,
            chats: false
        },
        {
            Friend_ID : 2,
            NAME : "νκΈΈλ",
            PImg : "/src/Photos/profile.png",
            PMusic: "μμ κ²λ€μ μν μ - λ°©νμλλ¨ β·",
            PMessage: "λΆλ¦λΆλ¦",
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