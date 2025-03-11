'use client'; // 添加这个标记以确保组件只在客户端渲染

import { FaXTwitter, FaTelegram, FaSlack, FaGithub, FaDiscord } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

export default function HeroIcons() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	
	useEffect(() => {
		// 检查当前主题
		const checkTheme = () => {
			const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
			setIsDarkTheme(isDark);
		};
		
		// 初始检查
		checkTheme();
		
		// 监听主题变化
		const observer = new MutationObserver(checkTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});
		
		return () => observer.disconnect();
	}, []);
	
	// 根据主题设置颜色
	const lightColors = {
		twitter: "#000000",
		telegram: "#0088cc",
		slack: "#4A154B",
		github: "#333333",
		discord: "#5865F2"
	};
	
	const darkColors = {
		twitter: "#FFFFFF",
		telegram: "#FFFFFF",
		slack: "#FFFFFF",
		github: "#FFFFFF",
		discord: "#FFFFFF"
	};
	
	const colors = isDarkTheme ? darkColors : lightColors;
	
	return (
		<div className='flex items-center gap-3'>
			<FaXTwitter size={24} color={colors.twitter} />
			<FaTelegram size={24} color={colors.telegram} />
			<FaSlack size={24} color={colors.slack} />
			<FaGithub size={24} color={colors.github} />
			<FaDiscord size={24} color={colors.discord} />
		</div>
	);
}
