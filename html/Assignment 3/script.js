const blogPosts = [
    {
        title: "Launch of DeepSeek shook the AI Market",
        thumbnail: "",
        author: "Amal Sharma",
        category: "Technology",
        publishedOn: "2025-02-01",
        summary: "DeepSeek has caused a major disruption in the..."
    },
    {
        title: "The Future of Quantum Computing",
        thumbnail: "",
        author: "Ananya Agarwal",
        category: "Technology",
        publishedOn: "2025-01-28",
        summary: "Quantum computing is set to revolutionize the..."
    },
    {
        title: "How Virtual Reality is Transforming Education",
        thumbnail: "",
        author: "Harsh Gupta",
        category: "Education",
        publishedOn: "2025-01-22",
        summary: "Virtual reality (VR) has emerged as a powerful..."
    },
    {
        title: "AI in Classrooms: A New Era for Education",
        thumbnail: "",
        author: "Tannu Bhagel",
        category: "Education",
        publishedOn: "2025-01-18",
        summary: "AI tools are transforming how students learn by personalizing..."
    },
    {
        title: "The Rise of Digital Nomads: How Remote Work is...",
        thumbnail: "",
        author: "Kanishka Gurjar",
        category: "Business",
        publishedOn: "2025-01-19",
        summary: "Remote work is more than a trend; it's becoming a..."
    },
    {
        title: "Navigating the Gig Economy: Opportunities and...",
        thumbnail: "",
        author: "David Thompson",
        category: "Business",
        publishedOn: "2025-01-15",
        summary: "The gig economy is reshaping the workforce, offering..."
    },
    {
        title: "Exploring the terrains of Himalaya",
        thumbnail: "",
        author: "Liam O'Connor",
        category: "Travel",
        publishedOn: "2025-01-15",
        summary: "Himalayan exploration has reached new heights with..."
    },
    {
        title: "A Backpacker’s Guide to Europe’s Hidden Gems",
        thumbnail: "",
        author: "Emily White",
        category: "Travel",
        publishedOn: "2025-01-12",
        summary: "Explore Europe's off-the-beaten-path destinations that offer..."
    },
    {
        title: "The Art of Mindful Eating: A Guide to Better Health",
        thumbnail: "",
        author: "Olivia Green",
        category: "Lifestyle",
        publishedOn: "2025-01-10",
        summary: "Mindful eating is all about paying full attention to what..."
    },
    {
        title: "The Minimalist Lifestyle: How Less is More",
        thumbnail: "",
        author: "Lucas Grey",
        category: "Lifestyle",
        publishedOn: "2025-01-05",
        summary: "Minimalism isn't just about decluttering; it's about focusing..."
    }
];

let filteredBlogs=[...blogPosts];

const blogContainer=document.getElementById("blog")

const renderBlogs=()=>{
    
    blogContainer.innerHTML = '';
    if(filteredBlogs.length>0){
        filteredBlogs.forEach((blog, index)=>{
    
            const article=document.createElement("article");
    
            article.innerHTML = `
                <div class="blog-thumb">
                <img src="" height="100%" />
              </div>
              <div>
                <h2>${blog.title}</h2>
                <p>
                  <strong>Author:</strong> ${blog.author} |
                  <strong>Published on:</strong> ${blog.publishedOn}
                </p>
                <p>
                  <strong>Summary: </strong>${blog.summary}
                </p>
                <a href="#readmore1">Read More</a>
              </div>
            `;
    
            blogContainer.appendChild(article);
            
        })

    }else{
        const error=document.createElement("h1");
    
        error.innerHTML = ` 
            No results found
        `
        blogContainer.appendChild(error);
    }
}
renderBlogs();

const filterBlog=(category)=>{                                  
    if(category==="All"){
        filteredBlogs=[...blogPosts]
    }
    else{
        const updatedBlog=blogPosts.filter((blog, index)=>{
            return blog.category===category
        })
        filteredBlogs=[...updatedBlog];
        
    }
    renderBlogs();
}

const categoryContainer=document.querySelectorAll("#categories li");
categoryContainer.forEach((cat)=>{
    cat.addEventListener("click", ()=>{
   
        
        filterBlog(cat.textContent);
    })
})


const searchBar=document.getElementById("searchBar")
const searchBtn=document.getElementById("searchBtn");
searchBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const query=searchBar.value.toLowerCase();
    filteredBlogs=blogPosts.filter((blog)=>{
        return (
            blog.title.toLowerCase().includes(query) ||
            blog.author.toLowerCase().includes(query)
        )
    })
    renderBlogs();
})


const handleSubscribe=(event)=>{
    const subscriptionForm=document.getElementById("subscriptionForm");
    event.preventDefault();
    alert("Subscribed successfully!")
    subscriptionForm.reset()
    
}

