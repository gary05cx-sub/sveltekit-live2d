
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/model/Hiyori/Hiyori.2048/texture_00.png" | "/model/Hiyori/Hiyori.2048/texture_01.png" | "/model/Hiyori/Hiyori.cdi3.json" | "/model/Hiyori/Hiyori.moc3" | "/model/Hiyori/Hiyori.model3.json" | "/model/Hiyori/Hiyori.physics3.json" | "/model/Hiyori/Hiyori.pose3.json" | "/model/Hiyori/Hiyori.userdata3.json" | "/model/Hiyori/motions/Hiyori_m01.motion3.json" | "/model/Hiyori/motions/Hiyori_m02.motion3.json" | "/model/Hiyori/motions/Hiyori_m03.motion3.json" | "/model/Hiyori/motions/Hiyori_m04.motion3.json" | "/model/Hiyori/motions/Hiyori_m05.motion3.json" | "/model/Hiyori/motions/Hiyori_m06.motion3.json" | "/model/Hiyori/motions/Hiyori_m07.motion3.json" | "/model/Hiyori/motions/Hiyori_m08.motion3.json" | "/model/Hiyori/motions/Hiyori_m09.motion3.json" | "/model/Hiyori/motions/Hiyori_m10.motion3.json" | "/robots.txt" | string & {};
	}
}