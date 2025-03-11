import React from 'react';
import Head from 'next/head';

export default function CustomHead() {
	return (
		<Head>
			{/* <script
				async
				src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX'
			></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXX');
        `,
				}}
			/> */}
			<script
				dangerouslySetInnerHTML={{
					__html: `
          (function() {
            const theme = localStorage.getItem('theme') || 'business';
            document.documentElement.setAttribute('data-theme', theme);
          })();
        `,
				}}
			/>
			<meta name="cryptomus" content="def05cbb" />
		</Head>
	);
}
