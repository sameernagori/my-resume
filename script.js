function generateResume(event) {
    event.preventDefault(); // Form submit ko prevent karta hai

    // Form data ko le raha hai
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Resume content ko set kar raha hai
    const resumeContent = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Resume content ko display karna
    document.getElementById("resume-content").innerHTML = resumeContent;
    document.getElementById("resume-output").classList.remove("hidden");
}

function downloadResume() {
    const resumeContent = document.getElementById("resume-content").innerHTML;
    const link = document.createElement('a');
    const blob = new Blob([resumeContent], { type: 'application/pdf' });
    link.href = URL.createObjectURL(blob);
    link.download = 'Resume.pdf';
    link.click();
}
