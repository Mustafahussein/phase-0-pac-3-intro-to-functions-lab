function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(input) {
    if (input === "Let's have dinner together!") {
      return "I would love to!";
    } else if (input.toUpperCase() === input) {
      return "YES INDEED!";
    } else if (input.toLowerCase() === input) {
      return "I can't hear you!";
    }
  }