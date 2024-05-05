import type { Language } from "~/enums/Language";
import type { Technology } from "~/enums/ProgrammingLanguage";

export type JobCheckRequest = {
	years_of_experience: number;
	technologies: Technology[];
	languages: Language[];
	soft_skills: number;
};
