import { useState } from "react";

const ALL_PROFILES = [
    { name: "Steak", tags: ["zart", "blutig", "roh"], image: require("../assets/profiles/steak.jpg") },
    { name: "Braten", tags: ["fett", "kräftig"], image: require("../assets/profiles/braten.jpg") },
    { name: "Hack", tags: ["fein", "frisch"], image: require("../assets/profiles/hack.jpg") },
    { name: "Merguez", tags: ["würzig", "scharf"], image: require("../assets/profiles/merguez.jpg") },
    { name: "TBone", tags: ["fett", "medium"], image: require("../assets/profiles/tbone.jpg") },
];

/**
 * Found at https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Thanks, Jeff!
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function shuffleProfiles() {
    return shuffle([...ALL_PROFILES]);
}

export default function useProfiles() {
    const [currentStack, setCurrentStack] = useState(shuffleProfiles());
    const currentProfile = currentStack[0];
    const nextProfile = currentStack[1];
    function toNextProfile() {
        setCurrentStack(currentStack.slice(1));
    }
    function resetProfiles() {
        setCurrentStack(shuffleProfiles());
    }

    return [currentProfile, nextProfile, toNextProfile, resetProfiles];
}