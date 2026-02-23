document .getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const searchname= document.getElementById("search").value.trim();
    console.log("Looking for game:", searchname);
    const platform = document.getElementById("platform").value.trim();
    console.log("Minimum platform:", platform);
    const genre = document.getElementById("genre").value.trim();
    console.log("Genre:", genre);   
    const resultsamount = document.getElementById("resultsamount").value.trim();
    console.log("Results Amount:", resultsamount);
    

    fetch("/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ searchname, genre, platform, resultsamount })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Server response:", data);
        })
    })
        