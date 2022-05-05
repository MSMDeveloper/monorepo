import { sub, sum } from ".."

describe("Index",() => {
  test("sum", () => {
    const r = sum(2,2)
    expect(r).toBe(4)
  })

  test("sub", () => {
    const r = sub(2,2)
    expect(r).toBe(0)
  })
})
