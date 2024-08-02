// /app/api/job_postings/route.ts
import { NextResponse } from "next/server";

// Mock data (you can replace this with your database logic)
let jobPostings = [
  {
    id: "1",
    title: "Social Media Manager",
    description: "Manage our social media channels...",
    // Other fields...
  },
  {
    id: "2",
    title: "Content Writer",
    description: "Write engaging content...",
    // Other fields...
  },
];

// GET: Retrieve all job postings
export async function GET(request: Request) {
  return NextResponse.json(jobPostings);
}

// POST: Create a new job posting
export async function POST(request: Request) {
  const newJob = await request.json();
  newJob.id = Date.now().toString(); // Generate a unique ID (use a proper ID generation in production)
  jobPostings.push(newJob);
  return NextResponse.json(newJob, { status: 201 });
}

// PUT: Update an existing job posting
export async function PUT(request: Request) {
  const updatedJob = await request.json();
  const jobId = updatedJob.id;

  jobPostings = jobPostings.map((job) =>
    job.id === jobId ? { ...job, ...updatedJob } : job
  );

  return NextResponse.json(updatedJob);
}

// DELETE: Delete a job posting
export async function DELETE(request: Request) {
  const { id } = await request.json();

  jobPostings = jobPostings.filter((job) => job.id !== id);

  return NextResponse.json({ message: "Job deleted successfully" });
}
