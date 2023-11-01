document.addEventListener('keydown', function(event) {

    const reportDiv = document.getElementById('report');
    
    reportDiv.innerHTML = `
        <p>Code: ${event.code}</p>
        <p>Key: ${event.key}</p>
        <p>Which: ${event.which}</p>
    `;
});
