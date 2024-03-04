import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Input from ".";

describe("Input", () => {
  it("renders an input element", () => {
    render(<Input />);

    screen.getByRole("textbox");
  });

  it("renders input element with custom props", () => {
    render(
      <Input
        color="primary"
        size="lg"
        variant="filled"
        chars={10}
        fullWidth
        label="Username"
        overrideClassName="custom-input"
        elementsProps={{
          wrapper: { className: "custom-wrapper" },
          label: { className: "custom-label" },
        }}
      />,
    );
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    const labelElement = screen.getByText("Username") as HTMLLabelElement;

    expect(Array.from(inputElement.classList)).to.contain("custom-input");
    expect(Array.from(inputElement.parentElement!.classList)).to.contain(
      "custom-wrapper",
    );
    expect(Array.from(labelElement.classList)).to.contain("custom-label");
    expect(inputElement.id).to.be.equal(labelElement.htmlFor);
  });

  it("calls onChange callback when input value changes", () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    act(() => fireEvent.input(inputElement, { target: { value: "Hello" } }));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(inputElement.value).to.be.equal("Hello");
  });
});
