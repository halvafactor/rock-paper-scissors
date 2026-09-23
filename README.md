# rock-paper-scissors
Rock Paper Scissors

This is a simple rock, paper, scissors game written in JavaScript, for 
practice.

I learned some useful stuff from this. Most notably, I backed in to 
understanding synchronous vs. event-driven by first writing extremely clunky
but obvious logic that totally broke when I added an event handler. Downstream
of that, it occurred to me (people tried to tell me but I have to figure
things out myself, character flaw) that declaring everything in the global 
scope has some problems, as an approach. 