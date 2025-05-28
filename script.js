// Course data
const courses = [
    {
        "title": "Security Operations (SOC) 101",
        "description": "Learn SOC fundamentals, threat detection, and incident response techniques. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/doDD6MrQgma58qFv0TSP",
        "link": "https://BrahimSAA.github.io/Security_Operations_-SOC-_101/",
        "category": "cybersecurity"
    },
    {
        "title": "Python 101 for Hackers",
        "description": "Beginner-friendly introduction to Python programming fundamentals. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/qT5GRyTSHWEoH1Euq7ym",
        "link": "https://BrahimSAA.github.io/Python_101_for_Hackers/",
        "category": "programming"
    },
    {
        "title": "Python 201 For Hackers",
        "description": "Advanced Python concepts including OOP, decorators, and async programming. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/xUP2OWjTTuG1Pzx8AL8u",
        "link": "https://BrahimSAA.github.io/Python_201_For_Hackers/",
        "category": "programming"
    },
    {
        "title": "Practical Malware Analysis and Triage",
        "description": "Understand malware behavior, reverse engineering, and defense strategies. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/KWZgSZeATJmhuBdIhLGN",
        "link": "https://BrahimSAA.github.io/Practical_Malware_Analysis_and_Triage/",
        "category": "cybersecurity"
    },
    {
        "title": "Practical Ethical Hacking",
        "description": "Master ethical hacking techniques and penetration testing methodologies. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/25Jl6X5mQ6iALUtb931B",
        "link": "https://BrahimSAA.github.io/Practical_Ethical_Hacking/",
        "category": "cybersecurity"
    },
    {
        "title": "Open-Source Intelligence (OSINT) Fundamentals",
        "description": "Learn open-source intelligence gathering techniques for investigations. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/cndIXbcWSsXldQrB5jTo",
        "link": "https://BrahimSAA.github.io/Open-Source_Intelligence_-OSINT-_Fundamentals/",
        "category": "cybersecurity"
    },
    {
        "title": "Linux 101",
        "description": "Essential Linux skills for system administration and security professionals. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/znrRDjrwRRykVhFB5Osj",
        "link": "https://BrahimSAA.github.io/Linux_101/",
        "category": "systems"
    },
    {
        "title": "Practical API Hacking",
        "description": "Understand API vulnerabilities and how to secure modern web applications. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/hDCDoCxRSGCa2vLD9UCV",
        "link": "https://BrahimSAA.github.io/Practical_API_Hacking/",
        "category": "programming"
    },
    {
        "title": "Detection Engineering for Beginners",
        "description": "Build effective threat detection systems and security monitoring solutions. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/tS0hJsAARMWznu0NjWsh",
        "link": "https://BrahimSAA.github.io/Detection_Engineering_for_Beginners/",
        "category": "Cyber Defense"
    },
    {
        "title": "Linux Privilege Escalation for Beginners",
        "description": "Master privilege escalation techniques in Linux environments for penetration testing. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/6ZeARBwScaIN1UxGh5Z4",
        "link": "https://BrahimSAA.github.io/Linux_Privilege_Escalation_for_Beginners/",
        "category": "Penetration Testing"
    },
    {
        "title": "Mobile Application Penetration Testing",
        "description": "Comprehensive guide to finding vulnerabilities in Android and iOS applications. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/lfFu7iSIyJwPhrR2yz1w",
        "link": "https://BrahimSAA.github.io/Mobile_Application_Penetration_Testing/",
        "category": "Mobile Security"
    },
    {
        "title": "Practical Bug Bounty",
        "description": "Real-world bug hunting techniques used by professional security researchers. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/pVs4ytz0RiG8bzlwDyox",
        "link": "https://BrahimSAA.github.io/Practical_Bug_Bounty/",
        "category": "Ethical Hacking"
    },
    {
        "title": "Practical Phishing Campaigns",
        "description": "Understand and defend against modern phishing techniques and social engineering. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/vIuC2QSyRNCclJ8oh3aQ",
        "link": "https://BrahimSAA.github.io/Practical_Phishing_Campaigns/",
        "category": "Social Engineering"
    },
    {
        "title": "Practical Web Hacking",
        "description": "Hands-on web application penetration testing and vulnerability discovery. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/9c7K4sUTXOjS0vKWVr7V",
        "link": "https://BrahimSAA.github.io/Practical_Web_Hacking/",
        "category": "Web Security"
    },
    {
        "title": "Windows Privilege Escalation for Beginners",
        "description": "Advanced techniques for escalating privileges in Windows environments. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/3TDZkYDzRxaZGnwCHOvW",
        "link": "https://BrahimSAA.github.io/Windows_Privilege_Escalation_for_Beginners/",
        "category": "Windows Security"
    },
    {
        "title": "C# 101 for Hackers",
        "description": "A specialized guide covering C# programming techniques, security concepts, and penetration testing applications for cybersecurity professionals. - YourCompany",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/8IL5ZJ7ASSarS6x0xBPg",
        "link": "https://BrahimSAA.github.io/C_sharp_101_for_Hackers/",
        "category": "Cybersecurity"
    },
    {
        title: "Kubernetes",
        description: "Container orchestration mastery with Kubernetes for scalable deployments.",
        image: "https://www.amigoscode.com/assets/thumbnails/courses/kubernetes.webp",
        link: "https://brahimsaa.github.io/Kubernetes",
        category: "devops"
    },
    {
        title: "Database Fundamentals",
        description: "Essential database concepts, SQL queries, and administration basics.",
        image: "https://www.amigoscode.com/assets/thumbnails/courses/advanced-databases.webp",
        link: "https://brahimsaa.github.io/db",
        category: "databases"
    },
    {
        title: "Java Programming",
        description: "Comprehensive Java development from basics to advanced concepts.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVFs3jmVh9axD68HKTxmAUNrJxceKkp81ckA&s",
        link: "https://brahimsaa.github.io/Java",
        category: "programming"
    },
    {
        title: "Docker",
        description: "Containerization with Docker for efficient application deployment.",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAZlBMVEX///8klu0clO0Aj+xZqvAAjezg7/wAkOze7fzH4PmAu/N4t/LZ6/tnr/Hl8f1Sp/D1+v7O5PrE3vlytfIAiOvU6Pvw+P5rsfHr9P0zm+6GvvOOwvS11viYx/U9n+6q0Pefy/az1fcOnXwsAAADo0lEQVR4nO3ce5eiIBgGcASR6eKli6VNZX3/L7k2k2IlbSMohc/vr+U4Oweeg+KL7BICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ1kYcVf2u7LB1lyeiVmtvvyQSbMu6JT2335IIitE8TWCWLrBLF1gtg6QWydLNbsao3Y/iD4qtjuCThi41fiPUlk40wy2UBNem8iK88VmdcNGqImfWYi6vVyRuZy8Qyxkj6jFZt3GLSvb0QnthkVeTRsd99DphPbnJeX2GTgLr8Hjdh8ernGR5lb99gC/nuRBUP3+Q10j21Hr1fzofv8BtK68uRTEsjGtlGT8l3b38yvsXnie+hOvwFZeSaERM3G85o0qCejxzZDd/pz7eu726OjmG5JWBebJ7KJ22vSgmRxoybNmj/245vK2KjdAQ0jkpXnsXzwv1STPhaoMxmbx+d2RzSISC6R8asr6c2P/dg2YqNFEqWTSRoldkfWKzOxrRqxlavp75pL44Ozb3FmYvu+ia2+SnmY2R1eX8zEdpYr6V1yws1yy0xs8rfcE2e74+uJmdjIURUbc3NhMBRbobhLhaN7l9maV+KyJq3+vL7UpHXjUpPWjV2zUdf1eeui4Dlb2WfB1U8ZWjdIs6G+Uv+WsC02yvBVVSlJC5+1p+beMrrY+kbEuWBC8dq2sD1I4/ay4tTUvhaUU813cAvJUw3XhLLG57F7U618hCvfT3Uxzlm+LdwsqjZ9xcbSzMF7s9JXbOU7s8sSVe2tiTl+HqmfFYF6tsfVs35WUnGyPa6eKbcstFA39zukbR+zzf2Pfe3b2JqE65NNvY2tk5rzk42k5l/cqPNPtl5e3ERhe1ADML+UOruT27QzvSZwF7c8HiwNP9zoOP69guGHm/NlVcU3epeO4xYlN0f59Ln6PfSRybuU+rZHM5ypsbuU5u6/6Na+uLHY3PxyoGBoUaBsDMdOpbmR6UZ5ansgA1uZmG5sbKmZ+H5FqbPnc9XOurmJo8NfRdU098bZyvYALDlq5EYdPZj7gk3nL3+UxaN6Xbu1URwf/f9U29vuulVJ3KE4pcz9zy3/c+B/m3BUsN0oF9A7Qdx69lY10fLTiCr3pxbth5YfIqNCbN07x6whOhyZUJ7E/Y2MeaslJtq9qNh6TIjHY8yXSca88DSunY6/yJanqZ8Lxqv/iIEzkYe7YjLid7TXJVk0T0tBhCUTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODT/APkszKRDZCIWwAAAABJRU5ErkJggg==",
        link: "https://brahimsaa.github.io/docker",
        category: "devops"
    },
    {
        title: "AWS Cloud Practitioner",
        description: "Fundamentals of AWS cloud services and infrastructure.",
        image: "data:image/png;base64,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",
        link: "https://brahimsaa.github.io/AWS_CloudPractitioner",
        category: "cloud"
    },
    {
        title: "AWS Solutions Architect",
        description: "Design distributed systems on AWS following best practices.",
        image: "data:image/jpeg;base64,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",
        link: "https://brahimsaa.github.io/AWS_SolutionsArchitect",
        category: "cloud"
    },
    {
        title: "Bash Scripting",
        description: "Automate tasks and write powerful shell scripts in Bash.",
        image: "https://i.ytimg.com/vi/PPQ8m8xQAs8/maxresdefault.jpg",
        link: "https://brahimsaa.github.io/BashScripting",
        category: "systems"
    },
    {
        title: "CompTIA Security+",
        description: "Prepare for the SY0-601 exam with comprehensive security training.",
        image: "data:image/png;base64,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",
        link: "https://brahimsaa.github.io/ComptiaSecurity",
        category: "certification"
    },
    {
        title: "Complete Cybersecurity Bootcamp",
        description: "End-to-end cybersecurity training from fundamentals to advanced techniques.",
        image: "https://images.ctfassets.net/aq13lwl6616q/1nSOi4H0zAGJOhK1VTKWDK/09cbe2160152366ce3f0edfc97e96010/Cybersecurity_-_Academy_Thumbnail_2.png",
        link: "https://brahimsaa.github.io/CompleteCybersecurityBootcamp",
        category: "cybersecurity"
    },
    {
        title: "Microsoft Azure",
        description: "Cloud computing with Microsoft Azure services and solutions.",
        image: "https://www.bleepstatic.com/content/hl-images/2022/04/28/microsoft-azure.jpg",
        link: "https://brahimsaa.github.io/azure",
        category: "cloud"
    },
    {
        title: "Windows Server 2022",
        description: "Comprehensive training on Windows Server installation, configuration, and administration.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6QuVvuq3jxUVIG0VcZaMkYhKJ5cs_1MKpw&s",
        link: "https://brahimsaa.github.io/Windows_Server_2022",
        category: "windows administration"
    },
    {
        title: "DevOps with Linux",
        description: "Learn essential DevOps practices using Linux environments, including CI/CD, automation, and containerization.",
        image: "https://miro.medium.com/v2/resize:fit:588/0*xu7TxXhQlv91fdR6.png",
        link: "https://brahimsaa.github.io/DevOps_Linux",
        category: "devops"
    },
    {
        title: "Bug Bounty Hunting",
        description: "Learn ethical hacking techniques to find and report vulnerabilities for bug bounty programs.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNUhYAEUGRAcYx656gn9hiq0yyLVS_QcD5g&s",
        link: "https://brahimsaa.github.io/BugBounty",
        category: "cybersecurity"
    },
    {
        title: "JavaScript Programming",
        description: "Master JavaScript fundamentals and modern ES6+ features for web development.",
        image: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto",
        link: "https://brahimsaa.github.io/javascript",
        category: "web development"
    },
    {
        title: "Linux بالعربية",
        description: "تعلم أساسيات إدارة أنظمة لينكس باللغة العربية للمبتدئين والمحترفين",
        image: "data:image/jpeg;base64,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",
        link: "https://brahimsaa.github.io/Linux_arabic",
        category: "systems"
    },
    {
        title: "ASP.NET",
        description: "A comprehensive guide to securing ASP.NET applications, focusing on common vulnerabilities and mitigations. - YourCompany",
        image: "https://eluminoustechnologies.com/blog/wp-content/uploads/2023/10/1-4.jpg",  // Replace with actual image URL
        link: "https://brahimsaa.github.io/dotnet",  // Replace with actual link
        category: "Web Development"
    },
    {
        title: "ASP.NET Core",
        description: "A comprehensive guide to securing ASP.NET applications, focusing on common vulnerabilities and mitigations. - YourCompany",
        image: "https://www.negox.com/content/img/aspnet-core.png",  // Replace with actual image URL
        link: "https://brahimsaa.github.io/ASP.NET-Core",  // Replace with actual link
        category: "Web Development"
    },
    {
        title: "CCNA & Networking Fundamentals",
        description: "An in-depth resource covering core networking concepts, protocols, and hands-on configurations to help you prepare for the CCNA certification. - YourCompany",
        image: "https://djgeqya1wekbj.cloudfront.net/product-images/600-600/Cisco-CCNA-200-301-Online-1200x600.jpg",  // Replace with another image URL if preferred
        link: "https://brahimsaa.github.io/CCNA",  // Replace with actual link or your own content
        category: "Networking"
    },
    {
        "title": "The Ultimate Docker Course",
        "description": "Master Docker from beginner to advanced! Learn to containerize applications, build Dockerfiles, orchestrate with Docker Compose, and deploy to production.",
        "image": "https://images.unsplash.com/photo-1517694712202-14f9e314b77b?w=705&h=400",
        "link": "https://BrahimSAA.github.io/The_Ultimate_Docker_Course",
        "category": "programming"
    },
    {
        "title": "The Ultimate JavaScript Series",
        "description": "Master JavaScript from the ground up with this comprehensive series, covering everything from fundamentals to advanced concepts and modern frameworks. Build real-world projects and become a proficient JavaScript developer.",
        "image": "https://images.unsplash.com/photo-1519389950473-47a0f982cd5a?w=705&h=400",
        "link": "https://BrahimSAA.github.io/The_Ultimate_JavaScript_Series",
        "category": "programming"
    },
    {
        "title": "The Complete ASP.NET MVC 5 Course",
        "description": "Master ASP.NET MVC 5 from scratch with this comprehensive course. Build dynamic, data-driven web applications using the Model-View-Controller architecture.",
        "image": "https://images.unsplash.com/photo-1515879218367-8466d51068e4?w=705&h=400",
        "link": "https://BrahimSAA.github.io/The_Complete_ASP-NET_MVC_5_Course",
        "category": "web-development"
    },
    {
        "title": "AZ-900 Microsoft Azure Fundamentals",
        "description": "This course covers fundamental concepts of cloud computing and provides an overview of Microsoft Azure services, enabling learners to understand Azure's capabilities and how to apply them.",
        "image": "https://www.cybersecurity-insiders.com/wp-content/uploads/2022/10/SOC-101.jpg",
        "link": "https://BrahimSAA.github.io/AZ-900_Microsoft_Azure_Fundamentals",
        "category": "cloud-computing"
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
