let blogArticles = document.querySelectorAll('.blog-article.short');

for (let blogArticle of blogArticles) {
    let buttonMore = blogArticle.querySelector('.more');
    buttonMore.onclick = function() {
        blogArticle.classList.remove('short');
    };
};
