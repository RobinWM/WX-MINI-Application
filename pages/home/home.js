Page({
  data: {
    name: 'Robin',
    age: 18,
    students: [
      { id: 1, name: 'Lily', age: 19 },
      { id: 2, name: 'Lala', age: 18 },
      { id: 3, name: 'ming', age: 20 },
    ],
    counter: 0
  },
  handleBtnClick(){
    // 错误做法，页面不会刷新
    // this.data.counter++;

    this.setData({
      counter:this.data.counter+1
    });

    console.log(this.data.counter);
  }  
})