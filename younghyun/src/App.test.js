import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "components/App";

test("renders learn react link", () => {
    render(<App />);
    const baseElement = screen.getByText("hi");
    expect(baseElement).toBeInTheDocument();
});
