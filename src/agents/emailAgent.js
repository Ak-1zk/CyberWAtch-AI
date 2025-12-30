exports.analyzeText = async (text) => {
  let score = 0;
  let reasons = [];

  if (text.includes("urgent") || text.includes("click now")) {
    score += 50;
    reasons.push("Phishing keywords detected");
  }

  return { score, reasons };
};
