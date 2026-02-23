document .getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const searchname= document.getElementById("search").value.trim();
    console.log("Looking for game:", searchname);
    const rating = document.getElementById("rating").value.trim();
    console.log("Minimum rating:", rating);
    const genre = document.getElementById("genre").value.trim();
    console.log("Genre:", genre);   
    fetch("/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ searchname, genre, rating })

    })
        
});