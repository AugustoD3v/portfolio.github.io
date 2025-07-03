document.addEventListener('DOMContentLoaded', () => {

    // --- DADOS DOS PROJETOS (SIMULAÇÃO DE API/BANCO DE DADOS) ---
    const projects = [
        {
            title: "Sistema de E-commerce",
            image: "https://via.placeholder.com/400x250/bb86fc/ffffff?text=E-commerce",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            githubLink: "#",
            liveLink: "#"
        },
        {
            title: "Plataforma de Cursos Online",
            image: "https://via.placeholder.com/400x250/03dac6/121212?text=Cursos+Online",
            tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
            githubLink: "#",
            liveLink: "#"
        },
        {
            title: "Landing Page para App",
            image: "https://via.placeholder.com/400x250/f06292/ffffff?text=App+Landing",
            tech: ["HTML5", "CSS3", "JavaScript"],
            githubLink: "#",
            liveLink: "#"
        },
        {
            title: "Blog Pessoal com CMS",
            image: "https://via.placeholder.com/400x250/4db6ac/ffffff?text=Blog+CMS",
            tech: ["Next.js", "Strapi", "GraphQL"],
            githubLink: "#",
            liveLink: "#"
        }
    ];

    // --- FUNÇÃO PARA CARREGAR PROJETOS NA PÁGINA ---
    function loadProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = ''; // Limpa a grade antes de adicionar novos projetos

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <img src="${project.image}" alt="Print do projeto ${project.title}">
                <div class="project-card-content">
                    <h3>${project.title}</h3>
                    <div class="project-tech">
                        ${project.tech.map(t => `<span>${t}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.githubLink}" target="_blank">GitHub <i class="fas fa-external-link-alt"></i></a>
                        <a href="${project.liveLink}" target="_blank">Live Demo <i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    // --- CONTROLE DO TEMA (DARK/LIGHT MODE) ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const toggleIcon = themeToggle.querySelector('i');

    // Verifica tema salvo no localStorage ou preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    }
    
    // Atualiza o ícone ao carregar a página
    if (body.classList.contains('light-theme')) {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');

        // Atualiza o ícone e salva a preferência
        if (body.classList.contains('light-theme')) {
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light-theme');
        } else {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    // --- CONTROLE DO FORMULÁRIO DE CONTATO ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // Simulação de envio
        const submitButton = contactForm.querySelector('button');
        submitButton.innerText = 'Enviando...';

        setTimeout(() => {
            alert('Mensagem enviada com sucesso! (Isso é uma simulação)');
            submitButton.innerText = 'Enviar Mensagem';
            contactForm.reset();
        }, 1500);
    });
    
    // --- CHAMADA DAS FUNÇÕES INICIAIS ---
    loadProjects();
});