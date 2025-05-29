// Course data
const courses = [
    {
        "title": "C sharp 101 for Hackers",
        "description": "This course provides a foundational understanding of C# for security professionals, covering syntax, data structures, and common programming patterns relevant to vulnerability analysis and exploit development. It teaches how to leverage C# for building custom security tools and understanding Windows-based applications.",
        "image": "https://coinedition.com/wp-content/uploads/2025/05/What-Does-the-CETUS-Hack-Mean-for-DeFi-Security-on-SUI-355x200.jpg",
        "link": "https://BrahimSAA.github.io/C_sharp_101_for_Hackers",
        "category": "cybersecurity"
    },
    {
        "title": "Detection Engineering for Beginners",
        "description": "This course provides an introduction to the fundamentals of detection engineering, covering the process of identifying and responding to security threats. It will equip beginners with the foundational knowledge to build and maintain effective detection strategies.",
        "image": "https://i.ytimg.com/vi/otjjPnNFFXo/mqdefault.jpg",
        "link": "https://BrahimSAA.github.io/Detection_Engineering_for_Beginners",
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
