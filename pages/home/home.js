Page({
  data:{
    name:'aaaaaaa',
    age:18,
    students:[
      {id:1,name:'1111111',age:12},
      { id: 2, name: '222222', age: 14 }, 
      { id: 3, name: '3333333', age: 123 }, 
      { id: 4, name: '4444444', age: 16 }
    ],
    counter:0
  },
  handleAddClick(){
    // 1.错误做法：界面是不会刷新的
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 2.this.setData()
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleSubClick(){
    this.setData({
      counter:this.data.counter - 1
    })
  }
})