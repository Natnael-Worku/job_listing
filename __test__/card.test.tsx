import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import this for extended matchers
import Card from "@/components/Card"; // Adjust the import based on your project structure
import { JobPosting } from "@/Types/Jobs";
import { SessionProvider } from "next-auth/react";

// Mock the job posting data
const mockJob: JobPosting = {
  id: "1",
  title: "Test Job",
  opType: "remote",
  orgName: "Test Organization",
  logoUrl: "http://example.com/logo.png",
  location: ["Test Location"],
  description: "Test Description",
  categories: ["Category 1", "Category 2"],
  isBookmarked: false,
};

describe("Card Component Bookmark Functionality", () => {
  test("toggles bookmark state on click", async () => {
    // Mock the fetch function for POST and DELETE requests
    global.fetch = jest.fn((url, options) => {
      if (options?.method === "POST") {
        return Promise.resolve({
          ok: true,
        });
      } else if (options?.method === "DELETE") {
        return Promise.resolve({
          ok: true,
        });
      }
      return Promise.reject(new Error("Unknown method"));
    });

    // Render the component wrapped in a SessionProvider
    render(
      <SessionProvider session={{ accessToken: "mockToken" } as any}>
        <Card job={mockJob} />
      </SessionProvider>
    );

    // Get the bookmark icon using its test ID
    const bookmarkIcon = screen.getByTestId("bookmark-icon");

    // Initially, the bookmark should not be active (gray color)
    expect(bookmarkIcon).toHaveClass("text-gray-300");

    // Simulate clicking the bookmark icon to add a bookmark
    fireEvent.click(bookmarkIcon);

    // Wait for the fetch call to be made and the state to update
    await waitFor(() => {
      expect(bookmarkIcon).toHaveClass("text-yellow-400");
    });

    // Simulate clicking the bookmark icon again to remove the bookmark
    fireEvent.click(bookmarkIcon);

    // Wait for the fetch call to be made and the state to update
    await waitFor(() => {
      expect(bookmarkIcon).toHaveClass("text-gray-300");
    });
  });
});
