# React Slideshow

Full screen React Slideshow component

To run clone the repo and then run `npm install`.

Following this enter `npm start` to run the code.

You can pass the following props to the component.

| Property | Description|
|----------|-------------
| showIndex | Show the index of the current slide |
| showArrows | Show arrows to navigate through the slides |
| slideInterval={2000}| Dictate the speed in ms at which the slides change |
| slides={slides} | The slides you pass into the component |
| effect |Choose the animation effect of your slideshow. Options include `fade`, `left`, `top`, `right` |
| height | Choose the height of the slideshow. Example `height={'50px'}` or `height={'50%'}`|
| width | Choose the width of the slideshow. Example `width={'50px'}` or `width={'50%'}`|



### Example

```js

<Slideshow
   showIndex
   showArrows
   slideInterval={2000}
   slides=['1.jpg', '2.jpg']
/>

```

![Alt text](/react-slideshow.png?raw=true "Optional Title")
