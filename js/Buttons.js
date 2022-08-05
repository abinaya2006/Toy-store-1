AFRAME.registerComponent("create-buttons", {
    init: function() {
      // 1. Create the Order button
      var button1 = document.createElement("button");
      button1.innerHTML = "ORDER NOW";
      button1.setAttribute("id", "rating-button");
      button1.setAttribute("class", "btn btn-warning ml-3 mr-3");
  
      // 2. Create the Bill button
      var button2 = document.createElement("button");
      button2.innerHTML = "ORDER SUMMARY";
      button2.setAttribute("id", "order-summary-button");
      button2.setAttribute("class", "btn btn-danger ml-3");
  
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.appendChild(button2);
      buttonDiv.appendChild(button1);
    }
  });