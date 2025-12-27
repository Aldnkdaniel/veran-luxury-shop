
import { useState, useEffect, useRef } from 'react';

export const useHeaderScroll = (threshold = 980) => {
  // 阈值达道980时
  const [isScrolled, setIsScrolled] = useState(false);
  // 设置一个布尔值看看有没有到阈值 到了为真重新渲染 没到就false

  const lastCall = useRef(0)
  // 使用 useRef 记录上一次执行的时间戳，不触发渲染

  useEffect(() => {
    const handleScroll = () => {
      const now = new Date().getTime()   // 获取当前高精度时间戳
      const interval = 100              //设置节流间隔为 100ms
       // 只有距离上次执行超过 100ms 时，才执行逻辑
      if (now - lastCall.current >= interval ) {
        setIsScrolled(window.scrollY > threshold)
        lastCall.current = now // 记录本次执行时间，开启下一轮冷却
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    // 撤离
    return () => window.removeEventListener('scroll', handleScroll);

  }, [threshold]);

  return isScrolled;
};

// 节流间隔100ms，防止高频滚动导致主线程阻塞