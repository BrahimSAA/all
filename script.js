
// Course data
// Course data
const courses = [
    {
        id: 1,
        title: "Linux 101",
        description: "Master essential Linux commands for admins and security pros.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/znrRDjrwRRykVhFB5Osj    ",
        link: "https://BrahimSAA.github.io/Linux_101/    ",
        category: "systems"
    },
    {
        id: 2,
        title: "Bash Scripting Learn Shell Scripting",
        description: "Automate system tasks with powerful Bash scripting.",
        image: "https://images.ctfassets.net/aq13lwl6616q/395iMiqbPBUPQGGEluVUXT/ca0636cf2e4f182c5f5821386bcd02ee/Academy_3_Course_Thumbnail_-_Bash_Programming.png?w=400&fm=webp",
        link: "    https://BrahimSAA.github.io/Bash_Scripting_Learn_Shell_Scripting    ",
        category: "programming"
    },
    {
        id: 3,
        title: "CompTIA Security+ Certification Bootcamp",
        description: "Pass Security+ with hands-on exam prep and labs.",
        image: "https://img-c.udemycdn.com/course/240x135/2616890_6925.jpg    ",
        link: "https://BrahimSAA.github.io/CompTIA_Security-_Certification_Bootcamp    ",
        category: "cybersecurity"
    },
    {
        id: 4,
        title: "Python 101 for Hackers",
        description: "Learn Python basics tailored for security professionals.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/qT5GRyTSHWEoH1Euq7ym    ",
        link: "https://BrahimSAA.github.io/Python_101_for_Hackers/    ",
        category: "programming"
    },
    {
        id: 5,
        title: "Java Essentials",
        description: "Core Java syntax and OOP for beginners.",
        image: "https://m.media-amazon.com/images/I/91AB88mdK8L._AC_UF350    ,350_QL50_.jpg",
        link: "https://BrahimSAA.github.io/Java_Essentials    ",
        category: "programming"
    },
    {
        id: 6,
        title: "The Ultimate JavaScript Series",
        description: "From JS fundamentals to modern frameworks like React.",
        image: "https://i.ytimg.com/vi/8w_oH58AvoA/mqdefault.jpg    ",
        link: "https://BrahimSAA.github.io/The_Ultimate_JavaScript_Series    ",
        category: "programming"
    },
    {
        id: 7,
        title: "Security Operations (SOC) 101",
        description: "Intro to SOC workflows, detection, and incident response.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/doDD6MrQgma58qFv0TSP    ",
        link: "https://BrahimSAA.github.io/Security_Operations_-SOC-_101/    ",
        category: "cybersecurity"
    },
    {
        id: 8,
        title: "AWS Certified Cloud Practitioner",
        description: "Foundational AWS knowledge for cloud certification.",
        image: "https://d2908q01vomqb2.cloudfront.net/9109c85a45b703f87f1413a405549a2cea9ab556/2020/11/10/AWSCloudPractitionerEssentialsBlog_300x150.png    ",
        link: "https://BrahimSAA.github.io/AWS_Certified_Cloud_Practitioner    ",
        category: "business"
    },
    {
        id: 9,
        title: "AZ-900 Microsoft Azure Fundamentals",
        description: "Core Azure concepts for cloud beginners.",
        image: "https://img-c.udemycdn.com/course/240x135/3140524_2f2f_8.jpg    ",
        link: "https://BrahimSAA.github.io/AZ-900_Microsoft_Azure_Fundamentals    ",
        category: "Cloud"
    },
    {
        id: 10,
        title: "AWS Certified Solutions Architect",
        description: "Design scalable, secure systems on AWS.",
        image: "https://img-c.udemycdn.com/course/240x135/5914092_588d_2.jpg    ",
        link: "https://BrahimSAA.github.io/AWS_Certified_Solutions_Architect    ",
        category: "design"
    },
    {
        id: 11,
        title: "CCNA Networking Complete Cisco CCNA 200-301 Prep Course",
        description: "Full CCNA prep with Cisco networking fundamentals.",
        image: "https://img-c.udemycdn.com/course/240x135/5623666_17de_5.jpg    ",
        link: "https://BrahimSAA.github.io/CCNA_Networking__Complete_Cisco_CCNA_200-301_Prep_Course    ",
        category: "cybersecurity"
    },
    {
        id: 12,
        title: "The Ultimate Docker Course",
        description: "Master containers and Docker from beginner to advanced.",
        image: "https://img-c.udemycdn.com/course/240x135/5730026_f14f_6.jpg    ",
        link: "https://BrahimSAA.github.io/The_Ultimate_Docker_Course    ",
        category: "programming"
    },
    {
        id: 13,
        title: "Mastering Kubernetes",
        description: "Deploy and manage containerized apps with Kubernetes.",
        image: "https://www.uptycs.com/hs-fs/hubfs/mastering-kubernetes-container-security.jpg?width=352&name=mastering-kubernetes-container-security.jpg",
        link: "    https://BrahimSAA.github.io/Mastering_Kubernetes    ",
        category: "programming"
    },
    {
        id: 14,
        title: "Python 201 For Hackers",
        description: "Advanced Python: OOP, decorators, async for hackers.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/xUP2OWjTTuG1Pzx8AL8u    ",
        link: "https://BrahimSAA.github.io/Python_201_For_Hackers/    ",
        category: "programming"
    },
    {
        id: 15,
        title: "The Complete ASP.NET MVC 5 Course",
        description: "Build web apps with ASP.NET MVC 5.",
        image: "https://img-c.udemycdn.com/course/240x135/806922_6310_3.jpg    ",
        link: "https://BrahimSAA.github.io/The_Complete_ASP-NET_MVC_5_Course    ",
        category: "web-development"
    },
    {
        id: 16,
        title: "Build a Real-world App with ASP.NET Core and Angular 2 (4+)",
        description: "Full-stack app with .NET backend and Angular frontend.",
        image: "https://freecoursesite.com/wp-content/uploads/2018/05/1144726_45a2_2-300x169.jpg    ",
        link: "https://BrahimSAA.github.io/Build_a_Real-world_App_with_ASP-NET_Core_and_Angular_2_-4--    ",
        category: "web-development"
    },
    {
        id: 17,
        title: "Getting Started with Ansible Automation Made Easy",
        description: "Automate IT infrastructure with simple Ansible playbooks.",
        image: "https://img-c.udemycdn.com/course/240x135/6032754_930e.jpg    ",
        link: "https://BrahimSAA.github.io/Getting_Started_with_Ansible_Automation_Made_Easy    ",
        category: "programming"
    },
    {
        id: 18,
        title: "C# 101 for Hackers",
        description: "C# fundamentals for security and penetration testing.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/8IL5ZJ7ASSarS6x0xBPg    ",
        link: "https://BrahimSAA.github.io/C_sharp_101_for_Hackers/    ",
        category: "Cybersecurity"
    },
    {
        id: 19,
        title: "Master Python Hacking plus then 15 Projects from Beginner to Expert",
        description: "Learn ethical hacking with 15 hands-on Python projects.",
        image: "https://img-c.udemycdn.com/course/240x135/6124711_54b8_2.jpg    ",
        link: "https://BrahimSAA.github.io/Master_Python_Hacking_plus_then_15_Projects_from_Beginner_to_Expert    ",
        category: "cybersecurity"
    },
    {
        id: 20,
        title: "Open-Source Intelligence (OSINT) Fundamentals",
        description: "Gather intelligence from public sources for investigations.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/cndIXbcWSsXldQrB5jTo    ",
        link: "https://BrahimSAA.github.io/Open-Source_Intelligence_-OSINT-_Fundamentals/    ",
        category: "cybersecurity"
    },
    {
        id: 21,
        title: "Practical Malware Analysis and Triage",
        description: "Analyze malware behavior and reverse engineer threats.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/KWZgSZeATJmhuBdIhLGN    ",
        link: "https://BrahimSAA.github.io/Practical_Malware_Analysis_and_Triage/    ",
        category: "cybersecurity"
    },
    {
        id: 22,
        title: "Practical Web Hacking",
        description: "Find and exploit web app vulnerabilities like a pro.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/9c7K4sUTXOjS0vKWVr7V    ",
        link: "https://BrahimSAA.github.io/Practical_Web_Hacking/    ",
        category: "Web Security"
    },
    {
        id: 23,
        title: "Practical API Hacking",
        description: "Hack and secure modern APIs with real-world techniques.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/hDCDoCxRSGCa2vLD9UCV    ",
        link: "https://BrahimSAA.github.io/Practical_API_Hacking/    ",
        category: "programming"
    },
    {
        id: 24,
        title: "Web Security & Bug Bounty Learn Penetration Testing",
        description: "Start bug bounty hunting with web pentesting skills.",
        image: "https://img-c.udemycdn.com/course/240x135/3985968_eafc_4.jpg    ",
        link: "https://BrahimSAA.github.io/Web_Security_-_Bug_Bounty_Learn_Penetration_Testing    ",
        category: "cybersecurity"
    },
    {
        id: 25,
        title: "Mobile Application Penetration Testing",
        description: "Test Android & iOS apps for security vulnerabilities.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/lfFu7iSIyJwPhrR2yz1w    ",
        link: "https://BrahimSAA.github.io/Mobile_Application_Penetration_Testing/    ",
        category: "Mobile Security"
    },
    {
        id: 26,
        title: "Linux Privilege Escalation for Beginners",
        description: "Escalate privileges in Linux during penetration tests.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/6ZeARBwScaIN1UxGh5Z4    ",
        link: "https://BrahimSAA.github.io/Linux_Privilege_Escalation_for_Beginners/    ",
        category: "Penetration Testing"
    },
    {
        id: 27,
        title: "Windows Privilege Escalation for Beginners",
        description: "Gain SYSTEM access by exploiting Windows misconfigurations.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/3TDZkYDzRxaZGnwCHOvW    ",
        link: "https://BrahimSAA.github.io/Windows_Privilege_Escalation_for_Beginners/    ",
        category: "Windows Security"
    },
    {
        id: 28,
        title: "Complete Cybersecurity Bootcamp",
        description: "All-in-one cybersecurity training from zero to hero.",
        image: "https://www.itcareerfinder.com/images/best-cybersecurity-bootcamps-online-2024.gif    ",
        link: "https://BrahimSAA.github.io/Complete_Cybersecurity_Bootcamp    ",
        category: "cybersecurity"
    },
    {
        id: 29,
        title: "Windows Server 2022 Administration",
        description: "Administer and manage Windows Server 2022 environments.",
        image: "https://kavoneinstitute.com/wp-content/uploads/2024/07/Windows-Server-2022-Administration.png    ",
        link: "https://BrahimSAA.github.io/Windows_Server_2022_Administration    ",
        category: "business"
    },
    {
        id: 30,
        title: "Practical Ethical Hacking",
        description: "Ethical hacking methodologies for real-world penetration tests.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/25Jl6X5mQ6iALUtb931B    ",
        link: "https://BrahimSAA.github.io/Practical_Ethical_Hacking/    ",
        category: "cybersecurity"
    },
    {
        id: 31,
        title: "Practical Bug Bounty",
        description: "Professional bug hunting techniques for bounty programs.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/pVs4ytz0RiG8bzlwDyox    ",
        link: "https://BrahimSAA.github.io/Practical_Bug_Bounty/    ",
        category: "Ethical Hacking"
    },
    {
        id: 32,
        title: "Practical Phishing Campaigns",
        description: "Create and defend against social engineering phishing attacks.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/vIuC2QSyRNCclJ8oh3aQ    ",
        link: "https://BrahimSAA.github.io/Practical_Phishing_Campaigns/    ",
        category: "Social Engineering"
    },
    {
        id: 33,
        title: "Detection Engineering for Beginners",
        description: "Build threat detection rules and security monitoring systems.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://cdn.filestackcontent.com/tS0hJsAARMWznu0NjWsh    ",
        link: "https://BrahimSAA.github.io/Detection_Engineering_for_Beginners/    ",
        category: "Cyber Defense"
    },
    {
        id: 34,
        title: "Advanced Databases",
        description: "Master NoSQL, distributed DBs, and high-performance queries.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_z9Gtz-GV0uMw0JqKvKIv0DQZPGUPbJM8C3MMHu1aBX9_kU8Z6SZs8s9ddqJ-NcjzdUMeSaPUhfVxWrv-Vl9_rl5yXEOdLtrI8wgTmANoPfnogR_YCqJPO85ne4CwNRSc79x4GFX_3bXQm48c2uYjaSSVjD9cCCVpYdrvILMdZdsxtT_CkvJyvsl9Th_8/s320/ADBMS_GMeet%20Discussion%20Board_Aug%2024%202023.jpg    ",
        link: "https://BrahimSAA.github.io/Advanced_Databases    ",
        category: "data-science"
    },
    {
        id: 35,
        title: "GRC Analyst Master Class",
        description: "Master Governance, Risk, and Compliance for enterprises.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width    :705/https://uploads.teachablecdn.com/attachments/2fdqCoajQ6qU8syJO2yO_grc-new-2.png    ",
        link: "https://BrahimSAA.github.io/GRC_Analyst_Master_Class    ",
        category: "business"
    },
    {
        id: 36,
        title: "Node.js, Express, MongoDB",
        description: "Build full-stack apps with the MERN/MEAN stack backend.",
        image: "https://miro.medium.com/v2/resize    :fit:365/1*Jr3NFSKTfQWRUyjblBSKeg.png",
        link: "https://BrahimSAA.github.io/Node-js-_Express-_MongoDB    ",
        category: "web-development"
    },
    {
        id: 37,
        title: "Programming with AI",
        description: "Integrate AI tools and automation into your code.",
        image: "https://venturebeat.com/wp-content/uploads/2023/08/annevb_the_end_of_programming._colorful_futuristic_tech_3d6db463-375e-4d84-9324-2b045c20313a.png?w=400",
        link: "    https://BrahimSAA.github.io/Programming_with_AI    ",
        category: "programming"
    },
    {
        id: 38,
        title: "NGINX Fundamentals High Performance Servers from Scratch",
        description: "Configure and optimize NGINX for high-traffic web servers.",
        image: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/9a4da97c3b99.jpg    ",
        link: "https://BrahimSAA.github.io/NGINX_Fundamentals_High_Performance_Servers_from_Scratch    ",
        category: "web-development"
    },
    {
        id: 39,
        title: "Next.js Simplified",
        description: "Quickly learn Next.js for modern React applications.",
        image: "https://i.ytimg.com/vi/nHnw3pusFXw/mqdefault.jpg    ",
        link: "https://BrahimSAA.github.io/Next-js_Simplified/    ",
        category: "web-development"
    },
    {
        id: 40,
        title: "The Ultimate Redux Course",
        description: "Manage app state like a pro with Redux and middleware.",
        image: "https://img-c.udemycdn.com/course/240x135/4965902_1592_9.jpg    ",
        link: "https://BrahimSAA.github.io/The_Ultimate_Redux_Course/    ",
        category: "programming"
    },
    {
        id: 41,
        title: "The Ultimate React Course React",
        description: "Master React hooks, components, and real-world projects.",
        image: "https://img-c.udemycdn.com/course/240x135/5512768_ffa4_29.jpg    ",
        link: "https://BrahimSAA.github.io/The_Ultimate_React_Course_React/    ",
        category: "programming"
    },
    {
        id: 42,
        title: "DevOps Bootcamp Learn Linux & Become a Linux Sysadmin",
        description: "Become a Linux sysadmin with DevOps-focused training.",
        image: "https://images.ctfassets.net/aq13lwl6616q/Lxp7NOjFmtq9IlqyBKgPt/b868427a9f388c8105f051bf1c6062f3/Linux_sysadmin_DevOps_Series.png?w=400&h=225&q=50&fm=png&bg=transparent",
        link: "    https://BrahimSAA.github.io/DevOps_Bootcamp_Learn_Linux_-_Become_a_Linux_Sysadmin/    ",
        category: "programming"
    },
    {
        id: 43,
        title: " Elastic Stack Getting Started",
        description: "Ingest, search, and visualize data with Elasticsearch & Kibana.",
        image: "https://i.ytimg.com/vi/FImTcHECpC0/mqdefault.jpg    ",
        link: "https://BrahimSAA.github.io/_Elastic_Stack_Getting_Started/    ",
        category: "data-science"
    }
];

// App state
const state = {
    searchTerm: '',
    activeCategory: 'all',
    filteredCourses: [...courses]
};

// DOM elements
const elements = {
    container: null,
    searchInput: null,
    clearBtn: null,
    filterBtns: null,
    noResults: null,
    resultsInfo: null,
    resetBtn: null
};

// Initialize DOM elements
function initElements() {
    elements.container = document.getElementById('courses-container');
    elements.searchInput = document.getElementById('search');
    elements.clearBtn = document.getElementById('clear-search');
    elements.filterBtns = document.querySelectorAll('.filter-btn');
    elements.noResults = document.getElementById('no-results');
    elements.resultsInfo = document.getElementById('results-info');
    elements.resetBtn = document.getElementById('reset-search');
}

// Debounce function for search performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Create course card HTML
function createCourseCard(course) {
    const card = document.createElement('article');
    card.className = 'course-card';
    card.setAttribute('role', 'listitem');
    
    card.innerHTML = `
        <div class="course-image" style="background-image: url('${course.image}')" role="img" aria-label="${course.title} thumbnail">
            <!-- Title removed from here -->
        </div>
        <div class="course-info">
            <h2 class="course-title">${course.title}</h2> <!-- Title moved here -->
            <p class="course-description">${course.description}</p>
            <a href="${course.link}" class="course-link" target="_blank" rel="noopener noreferrer">
                Start Course
                <span class="sr-only">(opens in new tab)</span>
            </a>
            <div class="course-meta">
                <span class="category-tag">${course.category.replace('-', ' ')}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Display courses with animation
function displayCourses(coursesToShow) {
    elements.container.innerHTML = '';
    elements.container.classList.add('loading');
    
    // Update results info
    updateResultsInfo(coursesToShow.length);
    
    // Show/hide no results message
    if (coursesToShow.length === 0) {
        elements.noResults.style.display = 'block';
        elements.container.style.display = 'none';
    } else {
        elements.noResults.style.display = 'none';
        elements.container.style.display = 'grid';
        
        // Create fragment for better performance
        const fragment = document.createDocumentFragment();
        coursesToShow.forEach(course => {
            fragment.appendChild(createCourseCard(course));
        });
        elements.container.appendChild(fragment);
    }
    
    // Remove loading state
    setTimeout(() => {
        elements.container.classList.remove('loading');
    }, 100);
}

// Update results info
function updateResultsInfo(count) {
    let message = '';
    if (state.searchTerm || state.activeCategory !== 'all') {
        message = `Found ${count} course${count !== 1 ? 's' : ''}`;
        if (state.searchTerm) {
            message += ` matching "${state.searchTerm}"`;
        }
        if (state.activeCategory !== 'all') {
            message += ` in ${state.activeCategory.replace('-', ' ')}`;
        }
    }
    elements.resultsInfo.textContent = message;
}

// Filter courses
function filterCourses() {
    let filtered = [...courses];
    
    // Filter by category
    if (state.activeCategory !== 'all') {
        filtered = filtered.filter(course => course.category === state.activeCategory);
    }
    
    // Filter by search term
    if (state.searchTerm) {
        const term = state.searchTerm.toLowerCase();
        filtered = filtered.filter(course => 
            course.title.toLowerCase().includes(term) || 
            course.description.toLowerCase().includes(term) ||
            course.category.toLowerCase().includes(term)
        );
    }
    
    state.filteredCourses = filtered;
    displayCourses(filtered);
}

// Handle search
const handleSearch = debounce((value) => {
    state.searchTerm = value;
    elements.clearBtn.classList.toggle('visible', value.length > 0);
    filterCourses();
}, 300);

// Handle category filter
function handleCategoryFilter(category) {
    state.activeCategory = category;
    
    // Update active button
    elements.filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    filterCourses();
}

// Clear search
function clearSearch() {
    elements.searchInput.value = '';
    state.searchTerm = '';
    elements.clearBtn.classList.remove('visible');
    filterCourses();
}

// Reset filters
function resetFilters() {
    clearSearch();
    handleCategoryFilter('all');
}

// Lazy load images
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.backgroundImage = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('.course-image').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize event listeners
function initEventListeners() {
    // Search input
    elements.searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });
    
    // Clear search button
    elements.clearBtn.addEventListener('click', clearSearch);
    
    // Category filters
    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            handleCategoryFilter(btn.dataset.category);
        });
    });
    
    // Reset button
    elements.resetBtn.addEventListener('click', resetFilters);
    
    // Keyboard navigation for search
    elements.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            clearSearch();
            elements.searchInput.blur();
        }
    });
}

// Initialize app
function init() {
    initElements();
    initEventListeners();
    displayCourses(courses);
    
    // Set up lazy loading after initial render
    requestAnimationFrame(() => {
        lazyLoadImages();
    });
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
