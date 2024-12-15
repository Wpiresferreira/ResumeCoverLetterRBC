function saveAsPdf(element) {
    const showResume = document.getElementById("showResume");
    const showCoverLetter = document.getElementById("showCoverLetter");
    const resume = document.getElementById("resume");
    
    element.style.display = "none";
    showResume.style.display = "none";
    showCoverLetter.style.display = "none";
    html2pdf().from(element.closest("body")).save(resume.style.display =="none"?'CoverLetterWagnerFerreira.pdf': 'ResumerWagnerFerreira.pdf');
    setTimeout(() => {
        element.style.display = "inline-block";
        showResume.style.display = "inline-block";
        showCoverLetter.style.display = "inline-block";
  }, 1000);
}

function toggleResumeCoverLetter(e) {
  const resume = document.getElementById("resume");
  const coverLetter = document.getElementById("coverLetter");

  if (e.innerHTML === "Show Cover Letter") {
    resume.style.display = "none";
    coverLetter.style.display = "block";
  } else {
    resume.style.display = "block";
    coverLetter.style.display = "none";
  }
}
