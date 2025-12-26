
import { useState, useEffect } from 'react';

export const useHeaderScroll = (threshold = 980) => {
  // 阈值达道980时
  const [isScrolled, setIsScrolled] = useState(false);
  // 设置一个布尔值看看有没有到阈值 到了为真重新渲染 没到就false

  useEffect(() => {
    //看看现在window滚动y有没有超过我刚刚设置的阈值
    const handleScroll = () => setIsScrolled(window.scrollY > threshold);
    // 监听窗口滚动 一旦超过了 给上面 的handleScroll 做出判断从而知道到没到阈值， 每次滚动都会监听 重新跑一次
    window.addEventListener('scroll', handleScroll, { passive: true });
    // 撤离
    return () => window.removeEventListener('scroll', handleScroll);

  }, [threshold]);

  return isScrolled;
};