import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';


const recordStore = {
  recordList: [] as RecordItem[],
  //record store

  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date().toISOString();
    this.recordList?.push(record2); // 可选链语法
    //this.recordList && this.recordList.push(record2);
    this.saveRecords();
  },

};

export default recordStore;