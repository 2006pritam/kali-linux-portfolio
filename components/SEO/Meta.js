import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           {/* Primary Meta Tags */}
            <title>Pritam Kumar Modak - Web Developer & AI/ML Researcher</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Pritam Kumar Modak Portfolio - Computer Applications Student" />
            <meta name="description"
                content="Pritam Kumar Modak's Personal Portfolio Website. Web Developer & AI/ML Researcher. Made with Kali Linux theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Pritam Kumar Modak" />
            <meta name="keywords"
                content="Pritam Kumar Modak, pritam portfolio, web developer, AI ML researcher, kali linux portfolio, computer applications student, pritam modak" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            {/* Search Engine */}
            <meta name="image" content="images/logos/fevicon.png" />
            {/* Schema.org for Google */}
            <meta itemProp="name" content="Pritam Kumar Modak Portfolio - Computer Applications Student" />
            <meta itemProp="description"
                content="Pritam Kumar Modak's Personal Portfolio Website. Web Developer & AI/ML Researcher. Made with Kali Linux theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Pritam Kumar Modak Portfolio - Computer Applications Student" />
            <meta name="twitter:description"
                content="Pritam Kumar Modak's Personal Portfolio Website. Web Developer & AI/ML Researcher. Made with Kali Linux theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="pritammodak" />
            <meta name="twitter:creator" content="pritammodak" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta name="og:title" content="Pritam Kumar Modak Portfolio - Computer Applications Student" />
            <meta name="og:description"
                content="Pritam Kumar Modak's Personal Portfolio Website. Web Developer & AI/ML Researcher. Made with Kali Linux theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="https://pritammodak.github.io/" />
            <meta name="og:site_name" content="Pritam Kumar Modak Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/kali_linux.png" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
