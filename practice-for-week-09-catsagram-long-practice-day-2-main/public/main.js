let like = 0
export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);

    fetchImage();
    // create div
    const div = document.createElement("div")
    div.setAttribute("id", "votediv")
    container.appendChild(div)
    const score = document.createElement("P")
    score.setAttribute("id", "score")
    score.innerText = "Popularity Score: " + like
    div.appendChild(score)

    // create button
    const button = document.createElement("button")
    button.setAttribute("id", "getcat")
    button.innerText = "Get Cat"
    container.appendChild(button)
    //create upvote
    const upvote = document.createElement("button")
    upvote.setAttribute("id", "upvote")
    upvote.innerText = "Upvote"
    div.appendChild(upvote)
    //create downvote
    const downvote = document.createElement("button")
    downvote.setAttribute("id", "downvote")
    downvote.innerText = "Downvote"
    div.appendChild(downvote)
    div.style.layout = "flex"
    div.style.padding = "10px"


    // create divcomment
    const divcomment = document.createElement("divcomment")
    divcomment.setAttribute("id", "divcomment")
    divcomment.innerText = "Comment: "
    container.appendChild(divcomment)
    divcomment.style.layout = "flex"
    divcomment.style.flexDirection = "row"
    divcomment.style.padding = "10px"

    //create comment field
    const comment = document.createElement("input")
    comment.setAttribute("id", "comment")
    comment.defaultValue = "Add a comment..."
    divcomment.appendChild(comment)
    // create submit button
    const submit = document.createElement("button")
    submit.setAttribute("id", "getcat")
    submit.innerText = "Submit"
    divcomment.appendChild(submit)

    //create comment text area
    const commentarea = document.createElement("textarea")
    commentarea.setAttribute("id", "commentarea")
    commentarea.style.width = "400px"
    commentarea.style.height = "200px"

    container.appendChild(commentarea)

    var buttonClick = (event) => {
        console.log(event.target.innerText)
        fetchImage()

    }
    var upvotecb = (event) => {
        like += 1;
        score.innerText = "Popularity Score: " + like
        console.log(like)
    }
    var downvotecb = (event) => {
        like--
        score.innerText = "Popularity Score: " + like
        console.log(like)
    }
    var addcomment = (event) => {
        commentarea.innerText = comment.value
    }

    //event listener
    button.addEventListener("click", buttonClick)
    upvote.addEventListener("click", upvotecb)
    downvote.addEventListener("click", downvotecb)
    submit.addEventListener("click", addcomment)

}

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
}
