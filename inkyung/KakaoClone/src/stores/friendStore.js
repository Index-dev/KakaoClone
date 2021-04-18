import { observable, action, computed } from "mobx";

export default class FriendStore{
    @observable returnFriends = [];

    @observable fItems = [
        {
            Friend_ID : 0,
            NAME : "김영희",
            PImg : "/src/Photos/profile.png",
            PMusic: "Cry for Me - Camila Cabello ▷",
            PMessage: "🧸",
            Like: true
        },
        {
            Friend_ID : 1,
            NAME : "김철수",
            PImg : "/src/Photos/profile.png",
            PMusic: "Celebrity - 아이유 ▷",
            PMessage: "",
            Like: false
        },
        {
            Friend_ID : 2,
            NAME : "홍길동",
            PImg : "/src/Photos/profile.png",
            PMusic: "작은 것들을 위한 시 - 방탄소년단 ▷",
            PMessage: "부릉부릉",
            Like: false
        },
        
    ];

    constructor(root) {
        this.root = root;
    }

    @action
    getFriends = (startIndex, count) => {
        this.returnFriends = this.fItems.slice(startIndex, startIndex + count);
    };
}