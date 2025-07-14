import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		SERVER_URL: z.string().url().optional(),
	},

	/**
	 * 클라이언트 측 변수에 반드시 붙어야 하는 접두사입니다. 이는 타입 수준과 런타임 모두에서 강제됩니다.
	 */
	clientPrefix: "VITE_",

	client: {
		VITE_APP_TITLE: z.string().min(1).optional(),
	},

	/**
	 * 런타임 시 환경 변수를 담고 있는 객체입니다. 보통 `process.env` 또는 `import.meta.env`를 사용합니다.
	 */
	runtimeEnv: import.meta.env,

	/**
	 * 기본적으로 이 라이브러리는 환경 변수를 직접 Zod 검증기에 전달합니다.
	 *
	 * 즉, 숫자여야 하는 값에 빈 문자열이 들어가면(예: ".env" 파일에서 `PORT=`) Zod가 타입 불일치로 잘못 판단할 수 있습니다.
	 * 또한, 기본값이 있는 문자열이어야 하는 값에 빈 문자열이 들어가면(예: ".env" 파일에서 `DOMAIN=`) 기본값이 적용되지 않습니다.
	 *
	 * 이러한 문제를 해결하기 위해, 모든 신규 프로젝트에서는 이 옵션을 true로 명시적으로 지정하는 것을 권장합니다.
	 */
	emptyStringAsUndefined: true,
});
