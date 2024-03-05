import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from ".";

describe("Button", () => {
  it("should render a button", () => {
    render(<Button>Click me</Button>);

    screen.getByRole("button");
  });

  it("should accept all HTML button attributes", () => {
    render(
      <Button disabled form="form-id" type="submit">
        Click me
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).to.have.property("type", "submit");
    expect(button.getAttribute("form")).to.equal("form-id");
    expect(button).to.have.property("disabled", true);
  });

  it("should set the default type to button", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).to.have.property("type", "button");
  });

  it("should accept a custom class", () => {
    render(<Button className="custom-class">Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(Array.from(button.classList)).to.contain("custom-class");
  });

  it("should accept a custom style", () => {
    render(<Button style={{ color: "red" }}>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).to.have.property("style").that.includes({ color: "red" });
  });

  it("should be rendered as a link when the `as` prop is set to `a`", () => {
    render(
      <Button as="a" href="https://example.com">
        Click me
      </Button>,
    );

    const link = screen.getByRole("link", { name: "Click me" });
    expect(link.getAttribute("href")).to.equal("https://example.com");
  });

  it("should accept any HTML element as the `as` prop", () => {
    render(
      <Button as="div" role="button">
        Click me
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).to.have.property("tagName", "DIV");
  });
});
