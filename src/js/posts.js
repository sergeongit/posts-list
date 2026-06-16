import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';

const posts = window.POSTS || [
  { img: img1, labels: ['Today','9-08-2016','Image upload'], likes: 128, comments: 31, uploadDate: '11-04-2016', total_likes: 3421, total_comments: 256 },
  { img: img2, labels: ['Today','9-08-2016','Image upload'], likes: 67, comments: 22, uploadDate: '11-04-2016', total_likes: 1892, total_comments: 145 },
  { img: img3, labels: ['Today','9-08-2016','Image upload'], likes: 67, comments: 22, uploadDate: '11-04-2016', total_likes: 2156, total_comments: 189 },
  { img: img4, labels: ['Today','9-08-2016','Image upload'], likes: 67, comments: 229, uploadDate: '11-04-2016', total_likes: 4203, total_comments: 512 },
  { img: img5, labels: ['Today','9-08-2016','Image upload'], likes: 67, comments: 22, uploadDate: '11-04-2016', total_likes: 1567, total_comments: 98 },
  { img: img6, labels: ['Today','9-08-2016','Image upload'], likes: 67, comments: 224, uploadDate: '11-04-2016', total_likes: 3876, total_comments: 445 },
  { img: img7, labels: ['Today','9-08-2016','Image upload'], likes: 67, comments: 221, uploadDate: '11-04-2016', total_likes: 2945, total_comments: 367 },
  { img: img8, labels: ['Today','9-08-2016','Image upload'], likes: 67, comments: 22, uploadDate: '11-04-2016', total_likes: 2134, total_comments: 176 },
  { img: img9, labels: ['Today','9-08-2016','Image upload'], likes: 67, comments: 22, uploadDate: '11-04-2016', total_likes: 1743, total_comments: 127 }
];

function renderPosts(postsList) {
  const container = document.getElementById('posts-list');
  if (!container) return;
  container.innerHTML = '';

  postsList.forEach(post => {
    const article = document.createElement('article');
    article.className = 'post-item';
    article.innerHTML = `
      <div class="post-thumb">
        <img src="${post.img}" alt="Post thumbnail" loading="lazy" />
      </div>
      <div class="post-meta">
        <div class="post-info">
          <span class="post-label">${post.labels[0] || ''}</span>
          <div class="post-stats">
            <span class="stat">
              <span class="stat-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 6.3C1.49991 5.76177 1.6071 5.22893 1.8153 4.73261C2.02351 4.23629 2.32855 3.78644 2.71261 3.40937C3.09667 3.03229 3.55203 2.73555 4.05209 2.53649C4.55215 2.33742 5.08687 2.24003 5.625 2.25C6.26172 2.24662 6.89189 2.3786 7.47374 2.6372C8.05559 2.8958 8.57584 3.27511 9 3.75C9.42416 3.27511 9.94441 2.8958 10.5263 2.6372C11.1081 2.3786 11.7383 2.24662 12.375 2.25C12.9131 2.24003 13.4479 2.33742 13.9479 2.53649C14.448 2.73555 14.9033 3.03229 15.2874 3.40937C15.6714 3.78644 15.9765 4.23629 16.1847 4.73261C16.3929 5.22893 16.5001 5.76177 16.5 6.3C16.5 10.317 11.7157 13.35 9 15.75C6.29025 13.3297 1.5 10.32 1.5 6.3Z" fill="black"/>
                </svg>
              </span>
              ${post.likes ?? 0}
            </span>
            <span class="stat">
              <span class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16.5 3C16.5 2.175 15.825 1.5 15 1.5H3C2.175 1.5 1.5 2.175 1.5 3V12C1.5 12.825 2.175 13.5 3 13.5H13.5L16.5 16.5V3Z" fill="black"/>
                </svg>              
              </span>
              ${post.comments ?? 0}
            </span>
          </div>
        </div>
        <div class="post-info">
          <span class="post-label">${post.labels[1] || ''}</span>
          <div class="post-stats">
            <span class="stat">
              <span class="stat-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 6.3C1.49991 5.76177 1.6071 5.22893 1.8153 4.73261C2.02351 4.23629 2.32855 3.78644 2.71261 3.40937C3.09667 3.03229 3.55203 2.73555 4.05209 2.53649C4.55215 2.33742 5.08687 2.24003 5.625 2.25C6.26172 2.24662 6.89189 2.3786 7.47374 2.6372C8.05559 2.8958 8.57584 3.27511 9 3.75C9.42416 3.27511 9.94441 2.8958 10.5263 2.6372C11.1081 2.3786 11.7383 2.24662 12.375 2.25C12.9131 2.24003 13.4479 2.33742 13.9479 2.53649C14.448 2.73555 14.9033 3.03229 15.2874 3.40937C15.6714 3.78644 15.9765 4.23629 16.1847 4.73261C16.3929 5.22893 16.5001 5.76177 16.5 6.3C16.5 10.317 11.7157 13.35 9 15.75C6.29025 13.3297 1.5 10.32 1.5 6.3Z" fill="black"/>
                </svg>
              </span>
              ${post.total_likes ?? 0}
            </span>
            <span class="stat">
              <span class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16.5 3C16.5 2.175 15.825 1.5 15 1.5H3C2.175 1.5 1.5 2.175 1.5 3V12C1.5 12.825 2.175 13.5 3 13.5H13.5L16.5 16.5V3Z" fill="black"/>
                </svg>
              </span>
              ${post.total_comments ?? 0}
            </span>
          </div>
        </div>
        <div class="post-info">
          <span class="post-label">${post.labels[2] || ''}</span>
          <div class="post-stats">
            <span class="stat">
              <span class="upload-date">${post.uploadDate || ''}</span>
            </span>
          </div>
        </div>
      </div>
    `;
    container.appendChild(article);
  });
}

document.addEventListener('DOMContentLoaded', () => renderPosts(posts));