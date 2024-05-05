import type { Language } from "~/enums/Language";
import type { Technology } from "~/enums/ProgrammingLanguage";

export type Job = {
	title: string;
	company: string;
	years_of_experience: number;
	technologies: Technology[];
	languages: Language[];
	soft_skiills: number;
};
