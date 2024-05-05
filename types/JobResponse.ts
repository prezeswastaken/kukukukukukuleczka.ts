import type { JobCheckResult } from "~/enums/JobCheckResults";
import type { Job } from "./Job";

export type JobResponse = {
	job: Job;
	result: JobCheckResult;
};
