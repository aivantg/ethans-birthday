let encrypted = transformState({
  "To get a better understanding before the lecture, please read the handwritten notes, not just the slides.": {
    "In light of the poor air quality we have decided to have the same number of in person lectures. We will not hold an in person lecture for either I/O: Basics and Interrupts or I/O Disks and Networks.": {
      "Get your facts first, then you can distort them as you please.": {
        "c_l_ue": "nope not this one"
      }
    },
    "Shifting the input (in time) shifts the output (by the same amount)": {
      "The mind constructs total acceptance of human observation": {
        "c__l___u_e": "nah"
      },
      "AMAZING FACT: If you know an LTI system's impulse response, you can calculate its response to any input": {
        "c_l___u_e__": "hot tofu soup"
      }
    },
    "Don't watch the clock; do what it does. Keep going.": {
      "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.": {
        "Happiness is not something ready made. It comes from your own actions.": {
          "c__l_u____e": "sorry no"
        }
      }
    },
    "When I have a bad day, I dream about opening up a gelato stand on the streets of Sydney, Australia. Doesn't everyone have a random escape fantasy?": {
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.": {
        "People who think they know everything are a great annoyance to those of us who do.": {
          "c__l_u__e": "i'm disappointed ethan"
        }
      }
    }
  }
}, encryptString);
let inner = encrypted[Object.keys(encrypted)[0]];
inner["jaijeet"] = {
  "type": "decode"
};
let innerinner = inner[Object.keys(inner)[1]];
innerinner["roychowdhury"] = {
  "password": "JAIJEET’S PARADISE. ALL THE ROLLERCOASTERS ARE _____?_____"
};
const initialState = encrypted;

function jrApp(state = initialState, action) {
  switch (action.type) {
    case "init": state.cb = action.callback;
    case "decode": return decode(state, action);
    default: return state;
  }
}

function decode(state = initialState, action) {
  if (!action.password) {
    console.log("What's the password?"); return state;
  }
  switch (action.password.toUpperCase()) {
    case "BIBO UNSTABLE": console.log("Good job."); state.cb(); return getDecodedState(state);
    default: console.log("Try again."); return state;
  }
}

function mod(n, p) 
{
    return n - p * Math.floor( n / p );
}


function encryptString(str) {
  const SHIFT = 12;

  let result = ""
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    let modified = mod((code - 32) + SHIFT, 95) + 32;
    let add = String.fromCharCode(modified);
    result += add;
  }
  return result;
}

function decryptString(str) {
  const SHIFT = 12;

  let result = ""
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    let modified = mod((code - 32) - SHIFT, 95) + 32;
    let add = String.fromCharCode(modified);
    result += add;
  }
  return result;
}

function getDecodedState(state) {
  if (state.decoded) {
    return state;
  }
  state = transformState(state, decryptString);
  state.decoded = true;
  return state;
}

function transformState(state, fn) {
  let result = {}
  for (let key of Object.keys(state)) {
    const val = typeof state[key] === "object" ? transformState(state[key], fn) : (typeof state[key] === "string" ? fn(state[key]) : state[key]);
    result[fn(key)] = val;
  }
  return result;
}

export default jrApp;