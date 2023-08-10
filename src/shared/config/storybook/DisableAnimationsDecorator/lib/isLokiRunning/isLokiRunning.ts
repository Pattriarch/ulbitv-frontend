interface LokiWindow extends Window {
	loki?: {
		isRunning?: boolean;
	};
}

export function isLokiRunning(win: LokiWindow = window): boolean {
	return Boolean(win?.loki?.isRunning);
}
