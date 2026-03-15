// Updated src/services/jobService.ts
const API_URL = import.meta.env.VITE_API_URL;

export async function getJobs() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch jobs");
  return response.json();
}

export async function getJobById(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error("Job not found");
  return response.json();
}