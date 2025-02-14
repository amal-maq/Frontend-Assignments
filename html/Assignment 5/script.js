document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');
    const eventList = document.getElementById('eventList');
    let events = JSON.parse(localStorage.getItem('events')) || [];
    const btn = document.getElementById('create-edit');
    loadEvents();


    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const eventName = document.getElementById('eventName').value;
        const eventDescription = document.getElementById('eventDescription').value;
        const eventDateTime = document.getElementById('eventDateTime').value;

        if (eventName && eventDescription && eventDateTime) {
            const event = {
                id: Date.now(),
                name: eventName,
                description: eventDescription,
                dateTime: eventDateTime
            };
            events.push(event);
            localStorage.setItem('events', JSON.stringify(events));
            addEventToTable(event);
            eventForm.reset();
        }
    });


    function loadEvents() {
        events.forEach(event => addEventToTable(event));
    }


    function addEventToTable(event) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${event.name}</td>
            <td>${event.description}</td>
            <td>${event.dateTime}</td>
            <td>
                <button onclick="editEvent(${event.id})">Edit</button>
                <button onclick="deleteEvent(${event.id})">Delete</button>
            </td>
        `;
        eventList.appendChild(row);
    }


    window.editEvent = function(id) {
        const event = events.find(event => event.id === id);
        document.getElementById('eventName').value = event.name;
        document.getElementById('eventDescription').value = event.description;
        document.getElementById('eventDateTime').value = event.dateTime;
        btn.innerText ="Edit Event";
        btn.addEventListener('click',function(){
            if(btn.innerText == "Edit Event"){
                btn.innerText = "Create Event";
            }
        })
        deleteEvent(id);
    };
    


    window.deleteEvent = function(id) {
        events = events.filter(event => event.id !== id);
        localStorage.setItem('events', JSON.stringify(events));
        eventList.innerHTML = '';
        loadEvents();
    };
});
