import { formatTime } from "./formatTime";

describe("Format time cases", () => {
  it("should return 00 : 00 : 00 when time is not started.", () => {
    const timePassed = 0;
    expect(formatTime(timePassed)).toBe("00 : 00 : 00");
  });

  it("should return when 00 : 01 : 10 after 70 seconds pass", () => {
    const timePassed = 70;
    expect(formatTime(timePassed)).toBe("00 : 01 : 10");
  });
});
