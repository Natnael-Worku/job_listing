import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/"; // Keep this import unchanged
import Page from "@/app/favorites/page";

// First test case: testing successful data fetch and rendering
describe("Page Component", () => {
  test("fetches data and renders FavoriteCard components", async () => {
    // Mock fetch for successful data fetch
    (global.fetch as any) = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            data: [
              {
                eventID: "1",
                title: "Event 1",
                opType: "Type A",
                orgName: "Org A",
                datePosted: "2023-08-01",
                dateBookmarked: "2023-08-02",
                logoUrl: "http://example.com/logo1.png",
                location: "Location A",
              },
              {
                eventID: "2",
                title: "Event 2",
                opType: "Type B",
                orgName: "Org B",
                datePosted: "2023-08-03",
                dateBookmarked: "2023-08-04",
                logoUrl: "http://example.com/logo2.png",
                location: "Location B",
              },
            ],
          }),
      })
    );

    render(<Page />);

    // Wait for the event titles to appear in the DOM
    await waitFor(() => {
      const event1 = screen.getByText("Event 1");
      const event2 = screen.getByText("Event 2");
      expect(event1).toBeInTheDocument();
      expect(event2).toBeInTheDocument();
    });
  });
});

// Second test case: testing fetch error handling
describe("Page Component Error Handling", () => {
  test("handles fetch error correctly", async () => {
    // Mock fetch to simulate an error
    (global.fetch as any) = jest.fn(() => Promise.reject(new Error("Failed to fetch data")));

    /**
     * Mocks the console.error method and spies on it.
     */
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
    
    render(<Page />);

    // Wait for the error to be logged
    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(new Error("Failed to fetch data"));
    });

    consoleErrorSpy.mockRestore();
  });
});
