# 01. Events Demo Walkthrough

## Setup

**Run `yarn start`**

## Introduction

#TODO: Check if students still do the NASA search engine!
#TODO: Write the exercise name here!

**Open ImageThumbnail.js.**

- Each of these thumbnails is a static component.  
- They have classnames, used just for styling.
- And they receive props, which populate them with a thumbnail image and a caption.

- We're going to enable them to display a caption when hovered over.  
- We're also going to allow users to click on a thumbnail in order to select it. This could be for image download or other functionality like that.  

---

### Part One: Selecting a Component

- First, we'll work on being able to select thumbnails, with a click.

---

#### Step One: State

- Q: Now, can anyone tell me how we would store data about the state of a component? 
- A: We'd create a state for that data.

- Q: How might we create some state in this thumbnail component, to record whether it's selected or not?
- A: `const [isSelected, setIsSelected] = useState();

- Q: What might we set the initial state to?
- A: False. Here, a boolean would be an ideal data type for recording this on/off property.

---

#### Step Two: Conditional Rendering

- Next, we want to make it so that this selected tag displays only when `isSelected === true`.
- This is an example of *Conditional Rendering*.

- Q: Does anyone recall how we can make an element render only under a certain condition?
- A: Curly brackets, containing a phrase that will return what we want under the correct condition.
- For a boolean, `&&` is a good operator to use, thanks to short-circuit evaluation.
- `{isSelected && `(the element or component to render)`)}`

```
{isSelected && <div className="image-thumbnail__save">Selected</div>}
```

- Now, if I set it to true, the tag will appear:  
** demo this **

- And if I set it back to false, it will vanish again:  
** demo this **

---

#### Step Three: Creating an Event Listener

- Next, we want to make it so that when the thumbnail is clicked, the isSelected state updates. Specifically, we want to invert the boolean when we click.
- So we want to add an onClick event listener.

- Q: Which element do you think we should put this event listener on?
- A: `image-thumbnail`.

```
<div
  className="image-thumbnail"
  onClick={(event) => }
>
```

Now, this needs a callback function. We'll call it `onClickThumbnail`.

```
<div
  className="image-thumbnail"
  onClick={(event) => handleClickThumbnail(event)}
>
```

---

#### step Four: Creating a function for the event listener

**Link: [Reasons to write functions outside of React](https://medium.com/the-fours/writing-functions-outside-vs-inside-in-react-c9044ea31ee2)**

- Next we'll write a function to handle the onClick event.

```
const handleClickThumbnail = (event) => {
  const target = event.target;
  const alt = target.getAttribute("alt");
  setSelected(!selected);
};
```

---

#### conclusion: onClick Event Listener to Select Components

- Now we have:
  - An event listener that registers thumbnail clicks,
  - A method that handles these clicks
  - A piece of state that is updated by this method
  - And a message for the user, indicating the current state of the component.
  - **Or, in short, an interactive element with state.**

---

### Part Two: Hover Text

- Next, we're going to give the `ImageThumbnail` component some hover text.
- These captions will only show when an image is hovered over.
- We'll use a similar setup to the last one.

---

#### Step One: State

- First off, let's build the state.

`  const [isHovered, setIsHovered] = useState(false);`

---

#### Step Two: Conditional Rendering

- Now we'll use conditional rendering to make the element only render when `isHovered === true`.
- We can use the same implementation as we used for the `Selected` label.

```
{isHovered && <div className="image-thumbnail__title">{description}</div>}
```

- Now the text disappears.

---

#### Step Three: Update the state with hover.

- So, there are a few methods for mouse hover state.
- `onMouseEnter` triggers when the mouse enters a specified element.
- `onMouseOut` does the opposite.
- So we'll use this pair of event listeners to manage the hover state.

```
onMouseEnter={() => stIsHovered(true)}
onMouseOut={() => stIsHovered(false)}
```

**Link: [onMouseOver](https://stackoverflow.com/questions/1638877/difference-between-onmouseover-and-onmouseenter) is another method that handles mouseover state, but it's a little different from onMouseEnter.**

---

#### Conclusion

- Now we have two pieces of interactivity within this element:  
  - an onClick that allows us to select elements,
  - and a hover state that displays a caption about the thumbnail.

- Nifty!

---

Next we'll take a look at using state and event listeners to manage form data.

This will use the same principles, but in a slightly more involved context.

---

