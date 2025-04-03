// 邮件订阅功能
const newsletterManager = {
  init() {
    this.form = document.querySelector('.subscribe-form');
    this.emailInput = this.form.querySelector('input[type="email"]');
    this.submitButton = this.form.querySelector('button[type="submit"]');
    
    // 添加表单提交事件监听
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  },

  validateEmail(email) {
    // 简单的邮箱格式验证
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  handleSubmit(e) {
    e.preventDefault();
    
    const email = this.emailInput.value.trim();
    
    // 验证邮箱
    if (!this.validateEmail(email)) {
      this.showMessage('请输入有效的电子邮箱地址', 'error');
      return;
    }
    
    // 禁用按钮，防止重复提交
    this.submitButton.disabled = true;
    this.submitButton.textContent = '提交中...';
    
    // 模拟API请求
    setTimeout(() => {
      // 在实际应用中，这里应该是一个真实的API请求
      // fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // })
      
      // 清空输入框
      this.emailInput.value = '';
      
      // 显示成功消息
      this.showMessage('订阅成功！感谢您的关注', 'success');
      
      // 恢复按钮状态
      this.submitButton.disabled = false;
      this.submitButton.textContent = '订阅';
    }, 1500);
  },

  showMessage(message, type) {
    // 检查是否已存在消息元素
    let messageElement = document.querySelector('.newsletter-message');
    
    // 如果不存在，创建一个新的
    if (!messageElement) {
      messageElement = document.createElement('div');
      messageElement.className = 'newsletter-message';
      this.form.insertAdjacentElement('afterend', messageElement);
    }
    
    // 设置消息内容和类型
    messageElement.textContent = message;
    messageElement.className = `newsletter-message ${type}`;
    
    // 显示消息
    messageElement.style.opacity = '1';
    
    // 3秒后隐藏消息
    setTimeout(() => {
      messageElement.style.opacity = '0';
    }, 3000);
  }
};

// 页面加载后初始化
document.addEventListener('DOMContentLoaded', () => newsletterManager.init());