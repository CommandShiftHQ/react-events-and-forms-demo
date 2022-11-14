# 02. Forms Demo Walkthrough

## Setup

**Run `yarn start`**

## Introduction

**Open Formdemo > index.js.**

- Here, we have a simple form.

- It has a few different fields, using different input types:
  - An `input` with type `text`;
  - An `input` with type `number`; this also has a max and min age;
  - A `select` withs everal species options;
  - A `textarea` for multiline text;
  - And a `checkbox` - which is an `input` of type `checkbox`, with a `label` that provides the descriptive text.
  - Finally, there's a `submit` button.

- we can enter data into the form, but it isn't stored in state and it doesn't go anywhere.

---

### Part 1: Input field

- Let's look at the Input field. It's one of the eamples we talked about in the slides.
- As before, we want to add an event listener to this field, that will store the input in state.
- so let's start by adding the event listener.
- Q: Do you recall which event listener we used for an input field in a form?
- A: `onChange`.

- We'll add this event listener

```
<input
  name="petName"
  onChange={(event) => {}}
  type="text"
>

```

- Now, we need to make it do something! So first off, the callback function will receive the Event object, and we'll use some of the event object's data. Let's get the value of the event's target - ie. the input value.

```
<input
  name="petName"
  onChange={(event) => console.log(event.target.value)}
  type="text"
>

```

- Now, this isn't precisely what we want. We want to store this value in state. So let's create some state for this...

```
const [field, setField] = useState("");

```

```
<input
  name="petName"
  onChange={(event) => {
    setField(event.target.value);
    console.log(field);
  }
  type="text"
>

```

- Now it will be stored in state.

---

### Part 2: State for a form

- This form has several inputs, and we want to store their data.
- As all of this data is related, rather than have separate pieces of state for each form element, we can store it all within an object, as a single piece of state.
- The keys in the object will be the form section that the value came from,
- And the values will be the values input by the user.
- so, we'll set that up for this first input.
- We'll update the state

```
const [formData, setFormData] = useState({});
```

-And create a function to handle form data

```
const handleFormInput = (target) => {
  setFormData({
    target.name: target.value
  })
}
```

- Now, this won't work; when writing an object, properties need to be variables. we can't use dot notation directly in the object.
- But we can use this square bracket notation:

```
const handleFormInput = (target) => {
  setFormData({
    [target.name]: target.value
  })
}
```

- Now we'll update the input to use this new function:

```
<input
  name="petName"
  onChange={(event) => {
    handleFormInput(event.target);
    console.log(formData)}
    
  }
  type="text"
/>
```

- Cool. So now the form data is stored in an object.
- In a moment we'll make this extensible, so that it can take data from other form inputs too.

---

### Part 3: Multiple Inputs (Age)

- We'll update the pet age input to store its data in state...


```
<div className="form__field">
  <label>How old is your pet (years)?</label>
  <input
    name="age"
    type="number"
    min={1}
    max={200}
    onChange={(event) => {
      handleFormInput(event.target);
      console.log(formData)}
    }
  />
</div>
```

- Q: Now, can anyone see a problem with this?
- A: It overwrites the other form data.

- But we can get around this using the `spread operator` in our state handler:

```
const handleFormInput = (target) => {
  setFormData({
    ...formData,
    target.name: target.value
  })
}
```

- Now, in case you don't remember the spread operator,
- It takes all values from an object, and copies them into another object.
- this works with arrays too.
- After we've copied the properties, we update just the property that's changed.
- If it was already in the object, the old version will be overwritten.
- Otherwise it'll be added as a new property.
- So, it keeps all the existing form data, and just updates the form data that we've changed.

---

### Part 4: And on!

- We can now use the `onChange` and our event handler to manage the other fields!
- Each of these inputs needs to be given a unique name, so that it doesn't override the other input values.

- THE CHECKBOX is an exception!

### Part 5: The Checkbox

- For the checkbox, we need to access a different property of the target.
- we could adjust our method to account for this, or we could create a new method.
- We'll do the latter.

```
  const handleFormInput = (target) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

    const handleCheckboxInput = (target) => {
    setFormData({
      ...formData,
      [target.name]: target.checked
    })
  }
```

### Conclusion

- Now that all of this data is in state, we can give the button an onClick to handle the input data.
- for example, making an API call to send it to a database.