class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9 '-]/g, '');
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    });
    return titleizedWords.join(' ');
  }
}
module.exports = Formatter;