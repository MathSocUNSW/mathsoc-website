import { formatDisplayDate } from "src/helpers/eventHelpers";

it("returns the correct format when days are the same", () => {
  expect(formatDisplayDate("2022-04-03T07:00:00+00:00", "2022-04-03T07:30:00+00:00")).toBe(
    "3 Apr 2022, 7:00 am - 7:30 am"
  );
  expect(formatDisplayDate("2020-01-31T07:00:00+00:00", "2020-01-31T17:30:00+00:00")).toBe(
    "31 Jan 2020, 7:00 am - 5:30 pm"
  );
  expect(formatDisplayDate("2021-03-03T12:00:00+00:00", "2021-03-03T17:30:00+00:00")).toBe(
    "3 Mar 2021, 12:00 pm - 5:30 pm"
  );
});

it("returns the correct format when days are different", () => {
  expect(formatDisplayDate("2022-04-02T07:00:00+00:00", "2022-04-03T07:30:00+00:00")).toBe(
    "2 Apr 2022 - 3 Apr 2022"
  );
  expect(formatDisplayDate("2020-01-31T07:00:00+00:00", "2021-02-20T17:30:00+00:00")).toBe(
    "31 Jan 2020 - 20 Feb 2021"
  );
  expect(formatDisplayDate("2021-03-31T11:59:00+00:00", "2021-04-03T11:30:00+00:00")).toBe(
    "31 Mar 2021 - 3 Apr 2021"
  );
});

it("returns the same time regardless of UTC offset", () => {
  expect(formatDisplayDate("2022-04-02T07:00:00+11:00", "2022-04-03T07:30:00+11:00")).toBe(
    "2 Apr 2022 - 3 Apr 2022"
  );
  expect(formatDisplayDate("2021-03-31T11:59:00+09:00", "2021-03-31T12:30:00+09:00")).toBe(
    "31 Mar 2021, 11:59 am - 12:30 pm"
  );
});
