function convertHTML(str) {
  if (arguments.length !== 1 || typeof str !== "string") return;

  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/[&<>\"']/g, (match) => htmlEntities[match]);
}

module.exports = convertHTML;
