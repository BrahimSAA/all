// Course data
const courses = [
    {
        "title": "C sharp 101 for Hackers",
        "description": "This course teaches the fundamentals of C# programming with a focus on its applications in cybersecurity and penetration testing, providing hackers with a powerful tool for developing exploits and security utilities.",
        "image": "https://business.sharpusa.com/Portals/0/EasyDNNNews/816/images/img-Security-BP-tbn-350-180-c-L-97.JPG",
        "link": "https://BrahimSAA.github.io/C_sharp_101_for_Hackers",
        "category": "cybersecurity"
    }

];

// Display courses
function displayCourses(coursesToShow) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    
    coursesToShow.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-image" style="background-image: url('${course.image}')">
                <h3 class="course-title">${course.title}</h3>
            </div>
            <div class="course-info">
                <p class="course-description">${course.description}</p>
                <a href="${course.link}" class="course-link">Start Course</a>
                <div class="course-meta">
                    <span>${course.category}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm) || 
        course.description.toLowerCase().includes(searchTerm) ||
        course.category.toLowerCase().includes(searchTerm)
    );
    displayCourses(filteredCourses);
});

// Initial display
displayCourses(courses);
