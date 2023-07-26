function skillsMember() { // This is a function
    var skills = ["HTML", "CSS", "JS", "PHP", "Python"];
    var result = skills.includes("PHP");
    document.getElementById("skills").innerHTML = result;
}