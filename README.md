## JTB Hotels Component

Will dispatch the search and handle routing.

### Setup
Clone and install:

```
git clone https://github.com/muerwre/jtb.hotels.git
cd jtb.hotels
npm i
```

Run it:
```
npm start
```

This component can be launched as standalone app, see it in action by navigating to 
```http://localhost:8002/```.

### How it works
When you click 'Search', the jtb.component dispatches DISPATCH_SEARCH_QUERY along the combined redux store. The components,
that's listening to all the dispatches, trigger async redux-saga actions reacting dispatched events.

Flights and Hotels lists are stored in separate github repos, https://github.com/muerwre/jtb.flights and
https://github.com/muerwre/jtb.hotels, both of them require Search Form component and global styles from this repo, 
but every of them handles async logic by itself, so you can run each project as standalone app.   
