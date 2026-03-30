function getResponse(mood) {
  let responses = {
    happy: "You're glowing ✨ Keep spreading that energy. Maybe treat yourself today 💕",
    stressed: "Pause. Breathe. You don’t have to do everything at once. Try a 5-min reset 🌿",
    low: "You’re allowed to have off days. Be gentle with yourself today 💗",
    confident: "YES 💅 Walk like you own the room. You're that girl."
  };

  document.getElementById("output").innerText = responses[mood];
}

function getVibe() {
  let vibes = [
    "Soft girl aesthetic: oversized hoodie, slick bun, lip gloss 💖",
    "Clean girl vibe: neutral tones, gold jewelry, fresh glow ✨",
    "Cozy chic: sweats, sneakers, messy bun ☕",
    "Boss energy: blazer, heels, slick hair 💼",
    "Gym glow: matching set, water bottle, confidence 💪"
  ];

  let randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
  document.getElementById("vibeOutput").innerText = randomVibe;
}