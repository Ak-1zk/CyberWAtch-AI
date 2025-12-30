exports.analyzeURL = async (url) => {
  let score = 0;
  let reasons = [];

  if (url.includes("@") || url.length > 75) {
    score += 40;
    reasons.push("Suspicious URL pattern");
  }

  if (!url.startsWith("https")) {
    score += 30;
    reasons.push("No SSL detected");
  }

  return { score, reasons };
};
