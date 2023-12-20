const stepsElement = document.getElementById('steps');
const distanceElement = document.getElementById('distance');
const caloriesElement = document.getElementById('calories');

const activityForm = document.getElementById('activity-form');
activityForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const activity = document.getElementById('activity').value;
  const duration = document.getElementById('duration').value;

  // Add your logic here to calculate steps, distance, and calories based on the chosen activity and duration

  // Update the UI with the calculated values
  stepsElement.textContent = // calculated steps;
  distanceElement.textContent = // calculated distance + " km";
  caloriesElement.textContent = // calculated calories + " kcal";
});
