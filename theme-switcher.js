// 主题切换功能
const themeSwitcher = {
  init() {
    this.btn = document.getElementById('theme-toggle');
    this.setInitialTheme();
    this.btn.addEventListener('click', () => this.toggleTheme());
    
    // 监听系统主题变化
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQuery.addEventListener('change', e => this.handleSystemThemeChange(e));
  },

  setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 如果用户手动设置过主题，优先使用用户的选择
    if (savedTheme) {
      document.body.classList.toggle('light-theme', savedTheme === 'light');
    } else {
      // 否则根据系统主题设置
      document.body.classList.toggle('light-theme', !systemDark);
    }
  },

  toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    
    // 添加主题切换动画效果
    this.animateThemeSwitch();
  },
  
  handleSystemThemeChange(e) {
    // 只有当用户没有手动设置主题时，才跟随系统主题变化
    if (!localStorage.getItem('theme')) {
      document.body.classList.toggle('light-theme', !e.matches);
    }
  },
  
  animateThemeSwitch() {
    // 添加过渡动画类
    document.body.classList.add('theme-transition');
    
    // 动画结束后移除过渡类
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 300);
  }
};

// 页面加载后初始化
document.addEventListener('DOMContentLoaded', () => themeSwitcher.init());