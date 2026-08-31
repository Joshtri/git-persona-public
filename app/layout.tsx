import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { I18nProvider } from "@/components/i18n-provider";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const title = `${site.name} — Git Profile Manager for Multiple GitHub Accounts`;
const description =
	"Never commit with the wrong Git identity again. GitPersona manages Git profiles, SSH keys, GitHub credentials, and repository mappings — switch identities with one click. Free desktop app for Windows and Linux.";

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: title,
		template: `%s — ${site.name}`,
	},
	description,
	keywords: [...site.keywords],
	applicationName: site.name,
	authors: [{ name: "GitPersona Team", url: site.url }],
	creator: "GitPersona Team",
	category: "Developer Tools",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: site.url,
		siteName: site.name,
		title,
		description,
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		creator: "@gitpersona",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f5f8fc" },
		{ media: "(prefers-color-scheme: dark)", color: "#070a10" },
	],
	colorScheme: "light dark",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<head>
				{/* Runs before paint: (1) marks JS availability so reveal animations
            only hide content when scripting runs, (2) commits the saved/system
            theme to <html> so there is no light/dark flash on load. */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){try{var d=document.documentElement;d.classList.add("js");var t=localStorage.getItem("theme");var light=t?t==="light":window.matchMedia("(prefers-color-scheme: light)").matches;if(light)d.classList.add("light");}catch(e){}})()`,
					}}
				/>
			</head>
			<body className="flex min-h-full flex-col">
				<I18nProvider>{children}</I18nProvider>
			</body>
		</html>
	);
}
