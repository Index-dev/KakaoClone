import { observable, action, computed } from "mobx";

export default class ChatStore{
    @observable returnChats = [];

    @computed get returnLength() {
        return this.returnChats.length;
    }

    @observable cItems = [
        {
            Friend_ID : 0,
            showMessage : '이건 김영희 내용',
            cTime: '오후 1:17'
        },
        {
            Friend_ID : 2,
            showMessage : '이건 홍길동 내용',
            cTime: '오전 9:32'
        }
        
    ];

    constructor(root) {
        this.root = root;
    }

    @action
    getChats = (startIndex, count) => {
        this.returnChats = this.cItems.slice(startIndex, startIndex + count);
    };
}