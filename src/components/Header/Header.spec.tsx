import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header Component", () => {
  it("renders corretly", () => {
    const { getByText } = render(<Header header="MÓDULO 3: EXERCÍCIO" />);

    expect(getByText("MÓDULO 3: EXERCÍCIO")).toBeInTheDocument;
  });
});
