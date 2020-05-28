const convertHTML = require("./index");

test("convertHTML function is defined.", () => {
  expect(convertHTML).toBeDefined();
});

test("convertHTML accepts only one argument.", () => {
  expect(convertHTML("a", "b")).toBe(undefined);
});

test("convertHTML('abcd') returns a string.", () => {
  const str = "abcd";
  expect(convertHTML(str)).toBe("abcd");
  expect(typeof str).toBe("string");
  expect(convertHTML(["a"])).toBe(undefined);
});

test("convertHTML('Terms & Conditions') returns 'Terms &amp; Conditions'.", () => {
  expect(convertHTML("Terms & Conditions")).toBe("Terms &amp; Conditions");
});

test("convertHTML('1 < 2 ?') returns '1 &lt; 2'.", () => {
  expect(convertHTML("1 < 2")).toBe("1 &lt; 2");
});

test("convertHTML('7 > 0') returns '7 &gt; 0'.", () => {
  expect(convertHTML("7 > 0")).toBe("7 &gt; 0");
});

test("convertHTML('<>') returns '&lt;&gt;'.", () => {
  expect(convertHTML("<>")).toBe("&lt;&gt;");
});

test("convertHTML('one more day 'till the meetup. returns') returns 'one more day & apos; till the meetup'.", () => {
  expect(convertHTML("one more day 'till the meetup.")).toBe("one more day &apos;till the meetup.");
});

test("convertHTML(\" QUOTES \") returns '&quot; QUOTES &quot;'.", () => {
  expect(convertHTML('" QUOTES "')).toBe("&quot; QUOTES &quot;");
});
