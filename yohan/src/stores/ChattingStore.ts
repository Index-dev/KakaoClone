import { makeAutoObservable } from 'mobx';
import Message from '../model/Message';

class ChattingStore {
  constructor() {
    makeAutoObservable(this);
  }

  chattingList = [
    {
      chatId: 1,
      participants: ['짱구'],
      messages: [
        {
          sender: '짱구',
          message: '안녕~',
          time: new Date("2021-04-26T13:30:00")
        },
        {
          sender: '요한',
          message: '응 안녕 ㅋㅋ 무슨일이야?',
          time: new Date("2021-04-26T13:32:00")
        },
        {
          sender: '짱구',
          message: '그냥',
          time: new Date("2021-04-26T13:36:00")
        },
        {
          sender: '짱구',
          message: '심심해서 ㅋㅋㅋ',
          time: new Date("2021-04-26T13:36:07")
        },
        {
          sender: '짱구',
          message: '머해??',
          time: new Date("2021-04-26T13:36:12")
        },
      ]
    },
    {
      chatId: 2,
      participants: ['할아버지', '도니도니', '구경꾼', '잘 몰라요'],
      messages: [
        {
          sender: '할아버지',
          message: '무야호~',
          time: new Date("2021-05-01T22:13:12")
        },
        {
          sender: '도니도니',
          message: '그만큼 신나시는 거지',
          time: new Date("2021-05-01T23:43:31")
        }
      ]
    },
    {
      chatId: 3,
      participants: ['Apple'],
      messages: [
        {
          sender: 'Apple',
          message: 'Next coumputer is not a computer. The new iPad Pro.',
          time: new Date("2021-03-24T10:45:22")
        }
      ]
    }
  ]
}

export default ChattingStore;