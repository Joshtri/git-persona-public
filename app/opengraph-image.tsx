import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";
export const alt =
	"GitPersona — Never commit with the wrong Git identity again.";

export default function Image() {
	const iconBuffer = readFileSync(
		join(process.cwd(), "public", "gitpersona-icon.png"),
	);
	const iconSrc = `data:image/png;base64,${iconBuffer.toString("base64")}`;

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				padding: "80px",
				background:
					"radial-gradient(ellipse 80% 60% at 50% -10%, rgba(33,139,208,0.35), transparent), #070a10",
				color: "#edf4ff",
				fontFamily: "sans-serif",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 16,
					marginBottom: 48,
				}}
			>
				{/* biome-ignore lint/a11y/useAltText: OG image — decorative */}
				<img
					src={iconSrc}
					width={56}
					height={56}
					style={{ borderRadius: 14 }}
				/>
				<div style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1 }}>
					GitPersona
				</div>
			</div>
			<div
				style={{
					fontSize: 72,
					fontWeight: 700,
					letterSpacing: -2,
					lineHeight: 1.1,
					maxWidth: 900,
				}}
			>
				Never use the wrong Git identity again.
			</div>
			<div
				style={{
					marginTop: 32,
					fontSize: 28,
					color: "#8a96a8",
					maxWidth: 820,
					lineHeight: 1.4,
				}}
			>
				Git profiles, SSH keys & GitHub credentials — switched with one click.
				Windows · Linux.
			</div>
		</div>,
		{ ...size },
	);
}
