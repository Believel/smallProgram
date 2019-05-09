// components/customComp/custom-comp.js
Component({
  behaviors: {},
  options: {
    // 启用多slot支持
    multipleSlots : true,
    // 表示启用样式隔离
    styleIsolation: 'isolated' 
  },
  /**
   * 组件的属性列表
   */
  properties: {
    txt:  {
     type: String,
     value: 'default value' 
    }
  },
  observers: {
    'txt': function(newTxt) {
      this.setData({
        inerText: newTxt + 'hhhhhh'
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的生命周期: lifetimes的优先级最高
   */
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      console.log('attached')
    },
    detached() {
      // 在组件实例被页面节点移除时执行
      console.log('detached')
    }
  },
  // 组件在页面中的生命周期
  pageLifetimes: {
    show() {
      console.log('show')
    },
    hide() {
      console.log('hide')
    },
    resize() {
      console.log('resize')
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 自定义组件向页面传参触发的方式：triggerEvent
    onTap() {
      const myEventDetail = {
        name: 'zpp'
      } // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})
