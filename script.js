// Course data
const courses = [
    {
        "title": "C sharp 101 for Hackers",
        "description": "This course teaches the fundamentals of C# programming with a focus on its applications in penetration testing and security tool development. It covers C# syntax, data structures, and object-oriented programming principles, all within the context of practical hacking scenarios.",
        "image": "https://business.sharpusa.com/Portals/0/EasyDNNNews/816/images/img-Security-BP-tbn-350-180-c-L-97.JPG",
        "link": "https://BrahimSAA.github.io/C_sharp_101_for_Hackers/",
        "category": "cybersecurity"
    },
    {
        "title": "C sharp 101 for Hackers",
        "description": "This course teaches the fundamentals of C# programming with a focus on its applications in penetration testing, security auditing, and exploit development. Students will learn to write tools and scripts for offensive and defensive cybersecurity tasks using C# 10.",
        "image": "https://business.sharpusa.com/Portals/0/EasyDNNNews/816/images/img-Security-BP-tbn-350-180-c-L-97.JPG",
        "link": "https://BrahimSAA.github.io/C_sharp_101_for_Hackers",
        "category": "cybersecurity"
    },
    {
        "title": "Detection Engineering for Beginners",
        "description": "This course provides a foundational understanding of detection engineering principles and practices, enabling participants to build and implement effective security detection strategies. It covers essential concepts and techniques for identifying and responding to threats in modern IT environments.",
        "image": "https://img-c.udemycdn.com/course/240x135/5450800_e323_2.jpg",
        "link": "https://BrahimSAA.github.io/Detection_Engineering_for_Beginners",
        "category": "cybersecurity"
    },
    {
        "title": "Linux 101",
        "description": "This introductory course provides a foundational understanding of the Linux operating system, covering basic commands, file system navigation, and user management. Students will learn to interact with the Linux environment and perform common tasks.",
        "image": "https://www.freyrscada.com/images/iec101-netcore.jpg",
        "link": "https://BrahimSAA.github.io/Linux_101",
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
