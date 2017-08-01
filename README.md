# React Slideshow

Customisable React Slideshow component.

To run clone the repo and then run `npm install`.

Following this enter `npm start` to run the code.

You can pass the following props to the component.

| Property | Description | Type |
|----------|-------------|------|
| showIndex | Show the index of the current slide | Boolean |
| showArrows | Show arrows to navigate through the slides | Boolean |
| autoplay | Select whether you want the slideshow to autoplay or not | Boolean |
| slideInterval={2000}| Dictate the speed in ms at which the slides change | Integer |
| slides={slides} | The slides you pass into the component | Array |
| effect |Choose the animation effect of your slideshow. Options include `fade`, `left`, `top`, `right` | String |
| height | Choose the height of the slideshow. Example `height={'50px'}` or `height={'50%'}`| String |
| width | Choose the width of the slideshow. Example `width={'50px'}` or `width={'50%'}`| String |


### Example

```js

<Slideshow
  showIndex
  showArrows
  autoplay
  slideInterval={2000}
  slides=['1.jpg', '2.jpg']
  effect={'fade'}
  height={'100%'}
  width={'100%'}
/>

```

![Alt text](/react-slideshow.png?raw=true "Optional Title")
