document .getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
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
        body: JSON.stringify({ genre, platform, resultsamount })
    })
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "";
            console.log("Server response:", data);
        
        data.results.forEach(game => {
            
            const container= document.createElement("div");
            const title = document.createElement("h3");
            title.textContent = game.name;

            const image = document.createElement("img");
            image.src = document.createElement("img");
            image.src = game.background_image;
            image.width = 200;

            container.appendChild(title);
            if (game.background_image) container.appendChild(image);
            resultsDiv.appendChild(container);
        });

    })
  
});