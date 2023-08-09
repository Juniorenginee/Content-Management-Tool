const addTextBtn = document.getElementById("addText");
const addImageInput = document.getElementById("addImage");
const addVideoInput = document.getElementById("addVideo");
const clearBtn = document.getElementById("clear");
const previewDiv = document.getElementById("preview");

addTextBtn.addEventListener("click", () => {
    const content = document.getElementById("content").value;
    previewDiv.innerHTML += createPost(content);
});

addImageInput.addEventListener("change", handleImageUpload);
addVideoInput.addEventListener("change", handleVideoUpload);

clearBtn.addEventListener("click", () => {
    document.getElementById("content").value = "";
    previewDiv.innerHTML = "";
});

previewDiv.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("like-btn")) {
        handleLike(target);
    } else if (target.classList.contains("comment-btn")) {
        handleComment(target);
    }
});

function createPost(content) {
    return `
        <div class="post">
            <p>${content}</p>
            <div class="interactions">
                <button class="like-btn">Like</button>
                <span class="likes-count">0</span>
                <button class="comment-btn">Comment</button>
                <span class="comments-count">0</span>
            </div>
            <div class="comments">
                <!-- Comments will be displayed here -->
            </div>
        </div>
    `;
}

function handleImageUpload(event) {
    // Same as before
}

function handleVideoUpload(event) {
    // Same as before
}

function handleLike(likeBtn) {
    const postDiv = likeBtn.closest(".post");
    const likesCountSpan = postDiv.querySelector(".likes-count");
    let likesCount = parseInt(likesCountSpan.textContent, 10);
    likesCount++;
    likesCountSpan.textContent = likesCount;
}

function handleComment(commentBtn) {
    const postDiv = commentBtn.closest(".post");
    const commentsContainer = postDiv.querySelector(".comments");
    const commentContent = prompt("Enter your comment:");
    if (commentContent) {
        const commentElement = document.createElement("div");
        commentElement.textContent = commentContent;
        commentsContainer.appendChild(commentElement);
        updateCommentsCount(postDiv);
    }
}

function updateCommentsCount(postDiv) {
    const commentsContainer = postDiv.querySelector(".comments");
    const commentsCountSpan = postDiv.querySelector(".comments-count");
    const commentsCount = commentsContainer.children.length;
    commentsCountSpan.textContent = commentsCount;
}
