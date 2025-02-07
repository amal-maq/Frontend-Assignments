//  json data for the blogs 
const blogPosts = [
    { title: "Understanding LLMs", author: "Sam Altman",category:"Technology", date: "2023-01-01", summary: "Large Language Models (LLMs) like GPT and BERT are advanced AI systems that understand and generate human language using deep learning techniques. They rely on transformer architectures to process vast amounts of data, enabling applications such as content creation, chatbots, translation, and sentiment analysis. Despite their impressive capabilities, LLMs face challenges like high computational requirements and ethical concerns. Ongoing research aims to improve their efficiency and address these issues, making LLMs a transformative force in AI and natural language processing." },
    { title: "The Future of AI", author: "Sam Altman", date: "2023-02-15",category:"Education", summary: "The future of AI is incredibly promising, with advancements poised to transform various industries. AI is expected to evolve from simple chatbots to sophisticated tools that provide real-time insights, automate complex processes, and predict trends1. Innovations in AI will drive emerging technologies like big data, robotics, and the Internet of Things (IoT), further expanding its possibilities2. As AI becomes more accessible, even small and midsized businesses will harness its power to enhance decision-making and deliver personalized experiences1. The ongoing development of AI will continue to shape our world, making it an indispensable part of daily life and business operations" },
    { title: "Traveling the World", author: "William Shakespeare",category:"Travel", date: "2023-03-10", summary: "Traveling the world offers incredible experiences, from exploring diverse cultures to witnessing breathtaking landscapes. Whether you’re visiting iconic landmarks, indulging in local cuisines, or meeting new people, each journey enriches your perspective and creates lasting memories. With careful planning and an adventurous spirit, you can discover hidden gems and popular destinations alike, making the most of your travels. Embrace the adventure and let the world be your playground!" },
    { title: "Healthy Lifestyle Tips", author: "Saket Gokhale",category:"Lifestyle", date: "2023-04-05", summary: "Maintaining a healthy lifestyle involves regular exercise, a balanced diet, staying hydrated, and getting enough sleep. Incorporating whole foods, such as fruits, vegetables, and lean proteins, while limiting processed foods and sugars, can significantly improve your well-being1. Additionally, managing stress, avoiding smoking, and limiting alcohol intake are crucial for long-term health2. By adopting these habits, you can enhance both your physical and mental health, leading to a more fulfilling life3" }
];


function loadBlogPosts(posts) {
    const section = document.querySelector('main section');
    section.innerHTML = ''; // Clear existing content

    posts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>by ${post.author} on ${post.date}</p>
            <p>${post.summary}</p>
        `;
        section.appendChild(article);
    });
}

function filterBlogPosts(query) {
    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.author.toLowerCase().includes(query.toLowerCase())
    );
    loadBlogPosts(filteredPosts);
}


function filterByCategory(category) {
    const filteredPosts = blogPosts.filter(post => post.category === category);
    loadBlogPosts(filteredPosts);
}


function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email) {
        alert('Please fill in all fields.');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Subscription successful!');
    return true;
}


document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts(blogPosts);

    const searchInput = document.querySelector('header form input[type="text"]');
    searchInput.addEventListener('input', (event) => {
        filterBlogPosts(event.target.value);
    });

    const categoryLinks = document.querySelectorAll('aside ul li a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = event.target.textContent;
            filterByCategory(category);
        });
    });

    const form = document.querySelector('aside form');
    form.addEventListener('submit', validateForm);
});
