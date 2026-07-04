const comments = [
  { id: 1, user: "An", content: "Sản phẩm rất tốt!", rating: 5, verified: true, likes: 12 },
  { id: 2, user: "", content: "ok", rating: 3, verified: false, likes: 0 },
  { id: 3, user: "Bình", content: "Mua lần 2 rồi, vẫn chất lượng", rating: 4, verified: true, likes: 8 },
  { id: 4, user: "Chi", content: "   ", rating: null, verified: false, likes: 2 },
  { id: 5, user: "Duy", content: "Giao hàng nhanh, đóng gói cẩn thận, sẽ ủng hộ tiếp!", rating: 5, verified: true, likes: 20 },
  { id: 6, user: null, content: "Tệ quá", rating: 1, verified: false, likes: 0 },
  { id: 7, user: "Em", content: "Bình thường", rating: 3, verified: true, likes: 1 },
];

function isValidComment(comment){
    if(comment.user == null || comment.user.trim().length == 0 || comment.user==undefined){
        return false;
    }
    if(comment.content.trim().length < 5){
        return false;
    }
    if(comment.rating == null || comment.rating < 1 || comment.rating > 5){
        return false;
    }
    return true;
}
// test 1
console.log(isValidComment(comments[0]));
console.log(isValidComment(comments[1]));
console.log(isValidComment(comments[3]));
console.log(isValidComment(comments[5]));

function filterValidComments(comments){
    return comments.filter(isValidComment);
}

// test 2
console.log(filterValidComments(comments));

function getCommentStats(validComments){
    let totalLikes = 0;
    let avgRating = 0;
    let verifiedCount = 0;
    let topComment = null;
    for (let i = 0; i < validComments.length; i++) {
        totalLikes += validComments[i].likes;
        avgRating += validComments[i].rating/validComments.length;
        if(validComments[i].verified === true){
            verifiedCount++;
        }
        if (topComment === null || validComments[i].likes > topComment.likes) {
            topComment = validComments[i];
        }
    }
    return {
        "total:" : validComments.length,
        "avgRating": avgRating,
        "totalLikes": totalLikes,
        "verifiedCount": verifiedCount,
        "topComment": topComment
    }
}

// test 3
console.log(getCommentStats(filterValidComments(comments)));

function formatComment(comment) {
    const stars = "⭐".repeat(comment.rating);
    const userName = comment.user.replaceAll("??", "Ẩn danh");
    const verifiedIcon = comment.verified ? " ✓" : "";

    return `${stars} | ${userName}${verifiedIcon} | ${comment.content} | 👍 ${comment.likes}`;
}

// test 4
console.log(formatComment(comments[0]));
console.log(formatComment(comments[2]));
console.log(formatComment(comments[6]));
