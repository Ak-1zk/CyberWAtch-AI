exports.analyzeQRorCall = async (data) => {
  let score = 0;
  let reasons = [];

  if (data.source === "unknown") {
    score += 60;
    reasons.push("Unknown source");
  }

  return { score, reasons };
};
