
// Course data
// Course data
const courses = [
    {
        id: 1,
        title: "Linux 101",
        description: "Master essential Linux commands for admins and security pros.",
        image: "Images/linux101.png",
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
        image: "Images/Python_101.png",
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
        image: "Images/soc.webp",
        link: "https://BrahimSAA.github.io/Security_Operations_-SOC-_101/    ",
        category: "cybersecurity"
    },
    {
        id: 8,
        title: "AWS Certified Cloud Practitioner",
        description: "Foundational AWS knowledge for cloud certification.",
        image: "https://d2908q01vomqb2.cloudfront.net/9109c85a45b703f87f1413a405549a2cea9ab556/2020/11/10/AWSCloudPractitionerEssentialsBlog_300x150.png    ",
        link: "https://BrahimSAA.github.io/AWS_Certified_Cloud_Practitioner    ",
        category: "cloud"
    },
    {
        id: 9,
        title: "AZ-900 Microsoft Azure Fundamentals",
        description: "Core Azure concepts for cloud beginners.",
        image: "https://img-c.udemycdn.com/course/240x135/3140524_2f2f_8.jpg    ",
        link: "https://BrahimSAA.github.io/AZ-900_Microsoft_Azure_Fundamentals    ",
        category: "cloud"
    },
    {
        id: 10,
        title: "AWS Certified Solutions Architect",
        description: "Design scalable, secure systems on AWS.",
        image: "https://img-c.udemycdn.com/course/240x135/5914092_588d_2.jpg    ",
        link: "https://BrahimSAA.github.io/AWS_Certified_Solutions_Architect    ",
        category: "cloud"
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
        image: "Images/Python_201.png",
        link: "https://BrahimSAA.github.io/Python_201_For_Hackers/    ",
        category: "programming"
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
        image: "Images/C_sharp.webp",
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
        image: "Images/OSINT.png",
        link: "https://BrahimSAA.github.io/Open-Source_Intelligence_-OSINT-_Fundamentals/    ",
        category: "cybersecurity"
    },
    {
        id: 21,
        title: "Practical Malware Analysis and Triage",
        description: "Analyze malware behavior and reverse engineer threats.",
        image: "Images/malware.png",
        link: "https://BrahimSAA.github.io/Practical_Malware_Analysis_and_Triage/    ",
        category: "cybersecurity"
    },
    {
        id: 22,
        title: "Practical Web Hacking",
        description: "Find and exploit web app vulnerabilities like a pro.",
        image: "Images/web_hack.webp",
        link: "https://BrahimSAA.github.io/Practical_Web_Hacking/    ",
        category: "cybersecurity"
    },
    {
        id: 23,
        title: "Practical API Hacking",
        description: "Hack and secure modern APIs with real-world techniques.",
        image: "Images/API_hack.png",
        link: "https://BrahimSAA.github.io/Practical_API_Hacking/    ",
        category: "cybersecurity"
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
        image: "Images/mobile.png",
        link: "https://BrahimSAA.github.io/Mobile_Application_Penetration_Testing/    ",
        category: "cybersecurity"
    },
    {
        id: 26,
        title: "Linux Privilege Escalation for Beginners",
        description: "Escalate privileges in Linux during penetration tests.",
        image: "Images/linux_previlege.png",
        link: "https://BrahimSAA.github.io/Linux_Privilege_Escalation_for_Beginners/    ",
        category: "cybersecurity"
    },
    {
        id: 27,
        title: "Windows Privilege Escalation for Beginners",
        description: "Gain SYSTEM access by exploiting Windows misconfigurations.",
        image: "Images/windows_previlege.png",
        link: "https://BrahimSAA.github.io/Windows_Privilege_Escalation_for_Beginners/    ",
        category: "cybersecurity"
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
        category: "systems"
    },
    {
        id: 30,
        title: "Practical Ethical Hacking",
        description: "Ethical hacking methodologies for real-world penetration tests.",
        image: "Images/ETH.png",
        link: "https://BrahimSAA.github.io/Practical_Ethical_Hacking/    ",
        category: "cybersecurity"
    },
    {
        id: 31,
        title: "Practical Bug Bounty",
        description: "Professional bug hunting techniques for bounty programs.",
        image: "Images/bug.png",
        link: "https://BrahimSAA.github.io/Practical_Bug_Bounty/    ",
        category: "cybersecurity"
    },
    {
        id: 32,
        title: "Practical Phishing Campaigns",
        description: "Create and defend against social engineering phishing attacks.",
        image: "Images/phishing.png",
        link: "https://BrahimSAA.github.io/Practical_Phishing_Campaigns/    ",
        category: "cybersecurity"
    },
    {
        id: 33,
        title: "Detection Engineering for Beginners",
        description: "Build threat detection rules and security monitoring systems.",
        image: "Images/detection.jpg",
        link: "https://BrahimSAA.github.io/Detection_Engineering_for_Beginners/    ",
        category: "cybersecurity"
    },
    {
        id: 36,
        title: "Node.js, Express, MongoDB",
        description: "Build full-stack apps with the MERN/MEAN stack backend.",
        image: "Images/nodejs.jpg",
        link: "https://BrahimSAA.github.io/Node-js-_Express-_MongoDB    ",
        category: "web-development"
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
        id: 41,
        title: "The Ultimate React Course React",
        description: "Master React hooks, components, and real-world projects.",
        image: "https://img-c.udemycdn.com/course/240x135/5512768_ffa4_29.jpg    ",
        link: "https://BrahimSAA.github.io/The_Ultimate_React_Course_React/    ",
        category: "web-development"
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
    },
    {
        "title": "The Complete Certified in Cybersecurity CC course ISC2",
        "description": "This course provides complete preparation for the ISC2 Certified in Cybersecurity (CC) certification exam, covering all domains and ensuring exam readiness. It offers a thorough understanding of fundamental cybersecurity concepts and practices.",
        "image": "https://img-c.udemycdn.com/course/240x135/6169361_cc9d.jpg",
        "link": "https://BrahimSAA.github.io/The_Complete_Certified_in_Cybersecurity_CC_course_ISC2/",
        "category": "cybersecurity"
    },
    {
        "title": "Movement Pivoting and Persistence",
        "description": "A concise tutorial on lateral movement techniques, pivoting through compromised systems, and maintaining persistent access within a target network.",
        "image": "Images/MPP.jpeg",
        "link": "https://brahimsaa.github.io/Movement_Pivoting_and_Persistence/",
        "category": "cybersecurity"
    }, 
    {
        "title": "SC-900 Microsoft Security, Compliance, Identity Fundamentals",
        "description": "This course provides foundational knowledge on Microsoft security, compliance, and identity solutions. It is designed for those looking to understand core concepts and services for protecting an organization's assets.",
        "image": "None",
        "link": "https://BrahimSAA.github.io/SC-900_Microsoft_Security-_Compliance-_Identity_Fundamentals/",
        "category": "cloud"
    }, 
    {
        "title": "Assembly 101",
        "description": "Learn the language of computers and how to write your own Assembly code.",
        "image": "None",
        "link": "https://brahimsaa.github.io/Assembly_101/",
        "category": "cybersecurity"
    }, 
    {
        "title": "Intro to PowerShell Scripting",
        "description": "Dive into the world of PowerShell scripting to automate routine administrative tasks and manage Windows systems efficiently. This introductory course will equip you with essential skills to write effective scripts.",
        "image": "None",
        "link": "https://BrahimSAA.github.io/Intro_to_PowerShell_Scripting/",
        "category": "programming"
    }, 
    {
        "title": "Nmap",
        "description": "Nmap (Network Mapper) is a powerful open-source tool for network discovery and security auditing. It allows users to identify hosts, services, operating systems, and potential vulnerabilities on a network.",
        "image": "None",
        "link": "https://BrahimSAA.github.io/Nmap/",
        "category": "cybersecurity"
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













