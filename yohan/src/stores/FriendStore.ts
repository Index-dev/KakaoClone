import { makeAutoObservable } from 'mobx';

class FriendStore {
  constructor() {
    makeAutoObservable(this);
  }

  friendList = [
    {
      uid: 1,
      name: '짱구',
      intro: '안녕 내이름은 짱구야',
    },
    {
      uid: 2,
      name: '철수',
      intro: '엘리트가 되자',
    },
    {
      uid: 3,
      name: '영희',
      intro: '화이팅',
    },
    {
      uid: 4,
      name: '유희',
      intro: '듀얼로 승부하자',
    },
    {
      uid: 5,
      name: '할아버지',
      intro: '예 저희가 많이 보죠.',
    },
    {
      uid: 6,
      name: '이경영',
      intro: '진행시켜',
    },
    {
      uid: 7,
      name: '김두한',
      intro: '오케이 사달라',
    },
    {
      uid: 8,
      name: 'Apple',
      intro: 'New iMac 24 is now on sale',
    },
    {
      uid: 9,
      name: '마리오',
      intro: 'Here we go !',
    },
    {
      uid: 10,
      name: '요한',
      intro: '프론트엔드 고수 까지',
    },
    {
      uid: 11,
      name: '일론 머스크',
      intro: '화성맨',
    },
    {
      uid: 12,
      name: '아인슈타인',
      intro: '신은 주사위 놀이를 하지 않는다.',
    }
  ]

  favoriteFriendIdList = []
}

export default FriendStore;