export function versionToChangelogAnchor(version: string): string {
	return `v${version.replace(/\./g, "-")}`;
}

export function changelogHref(version: string): string {
	return `/changelog#${versionToChangelogAnchor(version)}`;
}
