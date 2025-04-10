const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// === 3. Display Approved Jobs ===
if (document.getElementById('jobsContainer')) {
  const jobs = JSON.parse(localStorage.getItem('approvedJobs')) || [];
  const jobsContainer = document.getElementById('jobsContainer');

  if (jobs.length === 0) {
    jobsContainer.innerHTML = '<p>No jobs available yet.</p>';
  } else {
    jobs.forEach(job => {
      const jobEl = document.createElement('div');
      jobEl.className = 'job';
      jobEl.innerHTML = `
        <h3>${job.title}</h3>
        <p>${job.company}</p>
        <p>${job.description}</p>
        <a href="apply.html?job=${encodeURIComponent(job.title)}">Apply Now</a>
      `;
      jobsContainer.appendChild(jobEl);
    });
  }
}

// === 4. Handle Student Applications ===
document.getElementById('applicationForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('applicantName').value;
  const email = document.getElementById('applicantEmail').value;
  const reason = document.getElementById('applicantReason').value;
  const jobTitle = new URLSearchParams(window.location.search).get('job');

  const applications = JSON.parse(localStorage.getItem('applications')) || [];
  applications.push({ name, email, reason, jobTitle });
  localStorage.setItem('applications', JSON.stringify(applications));

  alert('Application submitted!');
  document.getElementById('applicationForm').reset();
});
