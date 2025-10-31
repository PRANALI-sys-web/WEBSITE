document.getElementById('generate').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;

    document.getElementById('preview-name').textContent = name;
    document.getElementById('preview-email').textContent = email;
    document.getElementById('preview-experience').textContent = experience;
    document.getElementById('resume-preview').style.display = 'block';
});

document.getElementById('download-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(`Name: ${document.getElementById('preview-name').textContent}`, 10, 10);
    doc.text(`Email: ${document.getElementById('preview-email').textContent}`, 10, 20);
    doc.text(`Experience: ${document.getElementById('preview-experience').textContent}`, 10, 30);
    doc.save('resume.pdf');
});
