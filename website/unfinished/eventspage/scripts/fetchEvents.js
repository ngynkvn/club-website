document.body.onload = function(){
    //A sample JSON payload one may get from REST api
    const getEvents = () => [
        {date: new Date(),
        eventName: 'Event 1',
        eventDescription: 'A short and concise description of the event',
        eventLink: 'https://google.com'},
        {date: new Date(),
        eventName: 'Event 2',
        eventDescription: 'A short and concise description of the event',
        eventLink: 'https://google.com'},
        {date: new Date(),
        eventName: 'Event 3',
        eventDescription: 'A short and concise description of the event',
        eventLink: 'https://google.com'},
        {date: new Date(),
        eventName: 'Event 4',
        eventDescription: 'A short and concise description of the event',
        eventLink: 'https://google.com'},
        {date: new Date(),
        eventName: 'Event 5',
        eventDescription: 'A short and concise description of the event',
        eventLink: 'https://google.com'},
        {date: new Date(),
        eventName: 'Event 6',
        eventDescription: 'A short and concise description of the event',
        eventLink: 'https://google.com'},
    ];    

    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December',
    };

    function createEventChild(obj) {
        let div = document.createElement('div');
        div.className = 'event page-element';
        let month = document.createElement('div');
        month.className = 'month';
        month.innerText = months[obj.date.getMonth()];
        let day = document.createElement('div');
        day.className = 'day';
        day.innerText = obj.date.getDay();
        console.log(obj);
        div.appendChild(month);
        div.appendChild(day);
        return div;
    }

    const eventWrapper = document.getElementById('event-wrapper');

    for (const event of getEvents())
    {
        eventWrapper.appendChild(createEventChild(event));
    }

    console.log(getEvents());
}