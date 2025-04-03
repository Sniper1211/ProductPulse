// 日期时间处理功能
const dateTimeManager = {
  init() {
    this.dateElement = document.querySelector('.date');
    this.dayElement = document.querySelector('.day');
    this.copyrightElement = document.querySelector('.copyright');
    
    // 立即更新一次时间
    this.updateDateTime();
    
    // 更新版权年份
    this.updateCopyrightYear();
    
    // 每分钟更新一次时间
    setInterval(() => this.updateDateTime(), 60000);
  },

  updateDateTime() {
    const now = new Date();
    
    // 格式化日期：年月日
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const dateStr = `${year}年${month < 10 ? '0' + month : month}月${date < 10 ? '0' + date : date}日`;
    
    // 获取星期几
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekday = weekdays[now.getDay()];
    const dayStr = `星期${weekday}`;
    
    // 更新DOM
    if (this.dateElement) this.dateElement.textContent = dateStr;
    if (this.dayElement) this.dayElement.textContent = dayStr;
    
    // 添加动画效果
    this.animateDateChange();
  },
  
  animateDateChange() {
    // 添加一个简单的动画效果
    const dateDisplay = document.querySelector('.date-display');
    if (dateDisplay) {
      dateDisplay.classList.add('date-updated');
      
      // 移除动画类，以便下次更新时可以再次触发
      setTimeout(() => {
        dateDisplay.classList.remove('date-updated');
      }, 500);
    }
  },
  
  // 更新页脚版权年份
  updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.copyright .year');
    if (yearElement) {
      yearElement.textContent = currentYear;
    }
  }
};

// 页面加载后初始化
document.addEventListener('DOMContentLoaded', () => dateTimeManager.init());