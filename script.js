// Function to add a new bucket list item with a delete button
function addItem() {
    let input = document.getElementById("new-item");
    let text = input.value.trim();

    if (text !== "") {
        let ul = document.getElementById("bucket-list");

        // Create list item
        let li = document.createElement("li");
        li.textContent = text;

        // Add click event to mark as completed
        li.addEventListener("click", function () {
            this.classList.toggle("completed");
        });

        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent marking as completed
            ul.removeChild(li);
        });

        // Append delete button to list item
        li.appendChild(deleteBtn);

        // Append list item to the bucket list
        ul.appendChild(li);

        // Clear input field
        input.value = "";
    }
}
