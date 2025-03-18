import { render, screen} from "@testing-library/react";
import LoginForm from "../page";
import "@testing-library/jest-dom";
import React from "react";

describe("Login Page", () => {
  it("renders the login form", () => {
    render(<LoginForm />);
    
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  
});
