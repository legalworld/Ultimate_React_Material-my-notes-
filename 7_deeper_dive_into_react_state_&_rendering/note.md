# (Q-1) How React works?

==>

# How React works

The easiest way to understand React is to think of it as a system that **takes your component code + state and figures out what should appear on the screen**.

For example:

```jsx
function App() {
  return <h1>Hello Gourab</h1>;
}
```

You write this JSX, but the browser **doesn't understand JSX directly**. React's overall process looks roughly like this:

```text
Your JSX
   ↓
JavaScript
   ↓
React creates a Virtual DOM representation
   ↓
React compares it with the previous representation
   ↓
Finds what actually changed
   ↓
Updates the real DOM
   ↓
Browser paints the updated UI
```

Let's break this down.

---

## 1. You write components

A React application is built from components:

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <button>Click me</button>
    </div>
  );
}
```

A component is basically a JavaScript function that describes **what UI should exist**.

It doesn't directly say:

> Find this DOM element and change its text.

Instead, you describe the desired UI:

> I want a `div` containing an `h1` and a `button`.

This is one of the fundamental ideas of React:

**You describe the UI; React handles the DOM updates.**

---

## 2. JSX gets transformed into JavaScript

The browser doesn't natively understand:

```jsx
<h1>Hello</h1>
```

JSX is transformed into JavaScript.

Conceptually:

```jsx
<h1>Hello</h1>
```

becomes something like:

```js
React.createElement("h1", null, "Hello");
```

Modern React commonly uses the JSX transform with functions such as `jsx()` rather than literally writing `React.createElement`, but the important idea is the same:

```text
JSX → JavaScript representation of the UI
```

---

## 3. React creates a representation of your UI

React needs a way to understand the structure of your UI.

Conceptually, this:

```jsx
<div>
  <h1>Hello</h1>
  <button>Click</button>
</div>
```

can be represented as something like:

```text
div
├── h1
│   └── "Hello"
└── button
    └── "Click"
```

This representation is commonly referred to as the **Virtual DOM**.

A very important clarification:

**The Virtual DOM is not the browser's actual DOM.**

It is React's JavaScript-side representation of what the UI should look like.

---

# 4. Initial rendering

When your React application starts, React needs to put your UI into the actual browser DOM.

For example:

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

React creates the corresponding DOM structure:

```html
<h1>Hello</h1>
```

and places it into the page.

This process is called **rendering**.

So when we say:

> "React renders the component"

we mean React determines the UI representation produced by that component and, during the commit process, applies the necessary changes to the DOM.

---

# 5. What happens when state changes?

This is where React becomes really interesting.

Suppose we have:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

Initially:

```text
count = 0
```

So React produces:

```html
<h1>0</h1>
```

Now you click the button.

```js
setCount(count + 1);
```

The state becomes:

```text
count = 1
```

React then needs to determine what the UI should look like now.

The component is evaluated again, conceptually producing:

```jsx
<h1>1</h1>
```

Now React has:

### Previous UI

```text
<h1>0</h1>
```

### New UI

```text
<h1>1</h1>
```

React compares the old and new representations.

It notices:

```text
0 → 1
```

So it doesn't need to recreate the entire page.

It can update the relevant DOM text node.

```text
DOM:
<h1>0</h1>
     ↓
<h1>1</h1>
```

---

# 6. This is where "re-render" comes in

A common misunderstanding is:

> "Re-render means React completely redraws the webpage."

No.

When state changes, React **re-renders the component**, meaning it runs the component again to determine its new UI.

For example:

```js
function Counter() {
  console.log("Counter rendered");

  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```

When `count` changes:

```text
state changes
   ↓
React schedules an update
   ↓
Counter() runs again
   ↓
new UI representation is produced
   ↓
React determines what changed
   ↓
necessary DOM updates are committed
```

So:

**Component re-render ≠ entire DOM being rebuilt.**

---

# 7. Reconciliation

The process where React figures out how the new UI differs from the previous UI is generally called **reconciliation**.

Suppose the previous UI is:

```jsx
<div>
  <h1>Hello</h1>
  <p>Age: 22</p>
</div>
```

and the new UI is:

```jsx
<div>
  <h1>Hello</h1>
  <p>Age: 23</p>
</div>
```

React doesn't need to replace the whole `div`.

It can determine:

```text
div       → same
h1        → same
"Hello"   → same
p         → same
"Age: 22" → "Age: 23"
```

So the actual DOM update can be very small.

---

# 8. What about props?

Props work in a similar way.

Suppose:

```jsx
function Parent() {
  return <Child name="Gourab" />;
}

function Child({ name }) {
  return <h1>Hello {name}</h1>;
}
```

If the parent causes a new render and the child's inputs result in different output, React determines what needs to change.

The important mental model is:

```text
props/state
    ↓
component function
    ↓
UI description
    ↓
reconciliation
    ↓
DOM update
```

---

# 9. Where the browser fits in

React itself doesn't draw pixels on your monitor.

There are several layers:

```text
React component
       ↓
React determines UI
       ↓
React updates the DOM
       ↓
Browser sees DOM/style changes
       ↓
Browser performs its rendering pipeline
       ↓
Pixels appear on screen
```

So there's an important distinction between:

**React rendering**

and

**browser rendering/painting**.

When React developers say:

> "This component rendered"

they usually mean React evaluated the component and produced a new UI representation, not that the monitor necessarily repainted every pixel.

---

# 10. The complete mental model

For everyday React development, keep this model in your head:

```text
             STATE / PROPS
                  ↓
           Component runs
                  ↓
             JSX returned
                  ↓
       JSX → React element tree
                  ↓
         Reconciliation
                  ↓
        Commit necessary DOM
             changes
                  ↓
            Browser updates
               the page
```

And when something changes:

```text
User clicks button
       ↓
setState()
       ↓
React schedules update
       ↓
Component renders again
       ↓
New UI representation
       ↓
React compares old vs new
       ↓
Only necessary changes committed
       ↓
Updated UI
```

## The key idea

Don't think:

> **"React changes the DOM whenever I write JSX."**

Think:

> **"I describe what the UI should look like based on the current state and props. When those inputs change, React determines the new UI and updates the actual DOM as necessary."**

That mental model will make `useState`, props, re-rendering, keys, reconciliation, Virtual DOM, and even `useMemo`/`useCallback` much easier to understand.

---

# (Q-2) Okay, now tell me about diffing algorithm and effect list in React.

==>

Absolutely. These two concepts are closely related, but they belong to **different stages of React's update process**.

A useful mental model is:

```text
State/Props change
       ↓
Render phase
       ↓
Create new Fiber tree
       ↓
Diff / Reconciliation
       ↓
Find what needs to change
       ↓
Effects / changes recorded
       ↓
Commit phase
       ↓
Actually modify the DOM
```

Let's understand **diffing first**, then **effect list**, and finally connect them.

---

# 1. What is the Diffing Algorithm?

Suppose your current UI is:

```jsx
<div>
  <h1>Hello</h1>
  <p>Age: 22</p>
</div>
```

Then your state changes and React produces:

```jsx
<div>
  <h1>Hello</h1>
  <p>Age: 23</p>
</div>
```

React needs to answer:

> **"What changed between the old UI and the new UI?"**

This process is called **diffing**, and it is part of React's **reconciliation** process.

Instead of throwing away the entire old DOM and creating everything again, React tries to determine the minimum necessary changes.

---

# 2. Why do we need diffing?

Imagine this:

```jsx
<div>
  <h1>Hello</h1>
  <p>Age: 22</p>
  <button>Click</button>
</div>
```

becomes:

```jsx
<div>
  <h1>Hello</h1>
  <p>Age: 23</p>
  <button>Click</button>
</div>
```

Only this changed:

```text
22 → 23
```

It would be wasteful to do:

```text
Delete entire div
Create div
Create h1
Create p
Create button
```

Instead, React wants something closer to:

```text
Keep div
Keep h1
Keep button
Change text inside p
```

That's the basic motivation behind diffing.

---

# 3. React doesn't compare every possible thing with everything

This is an important part.

A completely general tree-diffing algorithm can be extremely expensive.

React makes assumptions that allow it to perform reconciliation efficiently.

One major assumption is:

> **If two elements have different types, React generally treats them as different trees.**

For example:

```jsx
<div>Hello</div>
```

changes to:

```jsx
<section>Hello</section>
```

React sees:

```text
div
 ↓
section
```

Different element types.

So React doesn't try to transform the existing `div` into a `section` node by comparing every detail. It can replace the old subtree with the new one.

---

# 4. Same type → compare properties

Suppose:

```jsx
<button className="red">Click</button>
```

becomes:

```jsx
<button className="blue">Click</button>
```

Both are:

```text
button
```

So React can keep the existing DOM node and compare its properties.

Conceptually:

```text
old:
button
className = "red"

new:
button
className = "blue"
```

React determines:

```text
className changed
```

and updates the corresponding DOM property/attribute.

---

# 5. Children are compared too

Consider:

```jsx
<ul>
  <li>A</li>
  <li>B</li>
</ul>
```

becoming:

```jsx
<ul>
  <li>A</li>
  <li>C</li>
</ul>
```

React can conceptually compare:

```text
old children       new children

li A       →       li A     same
li B       →       li C     changed
```

So only the second item's content needs to change.

---

# 6. This becomes more interesting with lists

Suppose:

```jsx
<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>
```

becomes:

```jsx
<ul>
  <li>D</li>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>
```

If React simply relied on position, it might see:

```text
position 0: A → D
position 1: B → A
position 2: C → B
position 3: nothing → C
```

That's a lot of apparent changes.

This is one reason **keys** are so important.

```jsx
<li key="A">A</li>
<li key="B">B</li>
<li key="C">C</li>
```

Now React has stable identities for the elements.

When `D` is inserted:

```text
D → new
A → existing
B → existing
C → existing
```

React can reason about the elements based on their keys rather than just their positions.

---

# 7. So what exactly is an Effect List?

Now we get to the second concept.

After React performs reconciliation, it has determined things such as:

```text
"This DOM node needs its text updated."

"This element needs a className changed."

"This node needs to be inserted."

"This node needs to be deleted."
```

React needs to eventually perform these operations during the **commit phase**.

Historically, React used a structure commonly described as an **effect list** to collect fibers that had work/effects to perform.

Conceptually:

```text
Fiber tree

       div
      /   \
    h1     p
          /
       text
```

Suppose only the text inside `p` changed.

During reconciliation React marks the relevant Fiber with work.

Conceptually:

```text
Fiber tree

       div
      /   \
    h1     p
          /
       text *
             ↑
          changed
```

The `*` represents something that needs to be handled during commit.

React could then process the relevant effects.

---

# 8. Think of the Effect List as a "to-do list"

This is probably the easiest way to remember it.

Imagine React says:

> "I've compared the old and new trees. Now let me make a list of the actual changes I need to perform."

Conceptually:

```text
Effect List

1. Update text node
2. Add className
3. Insert new element
4. Delete old element
```

Then the commit phase executes those changes.

So:

```text
Diffing
   ↓
"What changed?"
   ↓
Mark/record required work
   ↓
Effect list / effect information
   ↓
Commit
   ↓
"Actually perform those changes"
```

---

# 9. Fiber is important here

If you're learning modern React internals, you'll encounter **Fiber** everywhere.

React doesn't simply maintain a Virtual DOM tree as a bunch of ordinary objects and directly compare two complete trees.

React uses a **Fiber architecture**.

A Fiber represents a unit of work associated with a component/element.

Conceptually:

```text
Fiber
 ├── type
 ├── props
 ├── state
 ├── child
 ├── sibling
 ├── return
 └── flags
```

The `flags` are particularly important for this discussion.

They tell React that something needs to happen.

For example, conceptually:

```text
Fiber
  ↓
Flags:
  Update
```

or:

```text
Fiber
  ↓
Flags:
  Placement
```

or:

```text
Fiber
  ↓
Flags:
  ChildDeletion
```

So in **modern React**, it's more accurate to think in terms of **Fiber flags and the Fiber tree**, rather than imagining a separate old-style linked "effect list" as the central mechanism.

---

# 10. Important: Effect List is an older React-internals concept

You'll find many tutorials saying:

> "React creates an effect list during reconciliation and then processes the effect list during commit."

That's a useful historical model, especially when studying older React Fiber implementations.

But if you're learning **modern React internals**, be careful.

React's implementation has evolved. The old explicit effect-list representation isn't the best mental model for current React.

A better modern mental model is:

```text
Render phase
    ↓
Work on Fiber tree
    ↓
Reconciliation / diffing
    ↓
Fibers receive flags describing required work
    ↓
Commit phase traverses the relevant Fiber information
    ↓
DOM mutations / effects are performed
```

So don't get stuck thinking:

```text
Fiber tree → separate magical Effect List → DOM
```

as though that exact structure must exist in today's implementation.

---

# 11. Where `useEffect` fits into this

There's another source of confusion.

When you hear **"effect"**, you might immediately think:

```jsx
useEffect(() => {
  console.log("Hello");
}, []);
```

But **effect list / Fiber effects** and **`useEffect`** aren't simply the same thing.

`useEffect` is a React Hook for synchronizing with external systems and running side-effect code.

For example:

```jsx
useEffect(() => {
  document.title = "Hello";
}, []);
```

React needs to schedule this effect appropriately as part of its commit/passive-effect processing.

So there are related concepts, but don't think:

```text
Effect List = useEffect()
```

They are not synonymous.

---

# 12. The complete picture

Let's put everything together.

Suppose:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

Initial state:

```text
count = 0
```

React has a Fiber tree representing the component and its children.

Then you click:

```text
setCount(1)
```

### Step 1 — Update scheduled

```text
setCount(1)
     ↓
React schedules work
```

### Step 2 — Render phase

React works through the Fiber tree and calls the component to determine the new UI.

Old:

```text
<h1>0</h1>
```

New:

```text
<h1>1</h1>
```

### Step 3 — Reconciliation / diffing

React determines:

```text
h1 → same element
text "0" → "1"
```

Therefore the relevant Fiber gets update-related information/flags.

### Step 4 — Commit phase

React applies the required DOM mutation.

Conceptually:

```text
DOM text:
"0"
 ↓
"1"
```

### Step 5 — Browser

The browser handles the resulting rendering/painting work.

---

# The mental template I want you to remember

When you're trying to understand React internals, start with this:

```text
           STATE / PROPS CHANGE
                    ↓
              RENDER PHASE
                    ↓
           Fiber tree is worked on
                    ↓
          RECONCILIATION / DIFFING
                    ↓
             "What changed?"
                    ↓
          Fibers get flags/work info
                    ↓
             COMMIT PHASE
                    ↓
        Apply DOM mutations/effects
                    ↓
                BROWSER
```

And remember the distinction:

| Concept                      | Main question                                            |
| ---------------------------- | -------------------------------------------------------- |
| **Rendering**                | What should the UI look like now?                        |
| **Reconciliation / Diffing** | What changed between old and new UI?                     |
| **Fiber**                    | How does React represent/manage units of work?           |
| **Flags**                    | What work needs to happen for a Fiber?                   |
| **Commit phase**             | Actually apply the required changes                      |
| **Effect list**              | Older/common description of the collected work to commit |
| **`useEffect`**              | A Hook for running side-effect code                      |

The **most important correction** to many beginner explanations is: **React doesn't literally create a fresh Virtual DOM, run a simple recursive diff, build a separate effect list, and then update the DOM in exactly that sequence in today's implementation.** That's a useful simplified/historical model. Modern React is built around **Fiber, lanes/priorities, reconciliation, flags, and render/commit phases**.

---

# (Q-3) Tell me about Stack and fiber reconciler.

==>

this is an important part of understanding how React evolved.

React has had two major reconciliation architectures:

```text
Old React
   ↓
Stack Reconciler

Modern React
   ↓
Fiber Reconciler
```

The main difference is **how React performs the work of reconciliation**.

---

# 1. First: What is a Reconciler?

The **reconciler** is the part of React responsible for figuring out:

> "Given the old UI and the new UI, what work needs to happen?"

For example:

```text
Old UI                 New UI

<h1>0</h1>     →       <h1>1</h1>
```

The reconciler determines:

```text
"h1 is the same"
"text changed from 0 → 1"
```

Then React's commit process can apply that change to the actual DOM.

So conceptually:

```text
Component
   ↓
New UI description
   ↓
Reconciler
   ↓
What changed?
   ↓
Commit
   ↓
DOM
```

---

# 2. Stack Reconciler

The **Stack Reconciler** was the reconciliation architecture used by older versions of React, before Fiber.

The name **Stack** comes from the fact that reconciliation was performed using the **JavaScript call stack**.

Imagine a component tree:

```text
App
├── Header
├── Main
│   ├── Article
│   └── Sidebar
└── Footer
```

The reconciler would recursively process this tree.

Conceptually:

```text
App()
 ↓
Header()
 ↓
Main()
 ↓
Article()
 ↓
Sidebar()
 ↓
Footer()
```

The important problem was that this work was essentially **synchronous**.

Once React started a large reconciliation task, it couldn't easily pause that work and give control back to the browser.

---

# 3. Why was that a problem?

Imagine you have a huge UI.

React starts doing:

```text
Reconciliation
 ↓
Component A
 ↓
Component B
 ↓
Component C
 ↓
Component D
 ↓
...
 ↓
Component 10,000
```

While React is doing this work, the browser's main thread is busy.

That can cause:

```text
User clicks button
        ↓
Browser wants to respond
        ↓
React is doing a huge synchronous task
        ↓
Browser has to wait
        ↓
UI feels unresponsive
```

This is especially problematic for animations, typing, scrolling, etc.

The key limitation was:

> **Stack Reconciler couldn't easily pause and resume reconciliation.**

---

# 4. Enter Fiber

React Fiber was introduced to solve this fundamental problem.

The key idea was:

> **Break rendering work into smaller units that React can manage individually.**

Instead of thinking:

```text
Render entire tree
        ↓
Finish everything
```

Fiber lets React think more like:

```text
Work on A
↓
Work on B
↓
Pause if necessary
↓
Handle something more important
↓
Resume B
↓
Continue C
```

This is why the architecture is called **Fiber**.

A Fiber represents a **unit of work**.

---

# 5. What is a Fiber?

Conceptually, React can represent:

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <button>Click</button>
    </div>
  );
}
```

with a Fiber structure roughly like:

```text
App Fiber
   |
   └── div Fiber
        ├── h1 Fiber
        │    └── "Hello"
        │
        └── button Fiber
             └── "Click"
```

A Fiber contains information React needs to perform work.

Conceptually, a Fiber contains things like:

```text
Fiber
├── type
├── key
├── props
├── state
├── child
├── sibling
├── return
├── alternate
├── flags
└── lanes
```

You don't need to memorize all of these yet.

The important ones for understanding Fiber are:

### `child`

Points to the first child.

```text
div
 |
child → h1
```

### `sibling`

Points to the next sibling.

```text
h1 → button
```

### `return`

Points back to the parent.

```text
h1
 ↑
return
 |
div
```

So Fiber can form a tree while also giving React a way to traverse and manage individual units of work.

---

# 6. Fiber is more than the Virtual DOM

This distinction is important.

People often say:

> "Fiber is React's Virtual DOM."

That's not quite correct.

A better way to think about it is:

```text
Virtual DOM / React elements
        ↓
Describe what UI should exist

Fiber
        ↓
React's internal data structure for managing
that UI and the work associated with it
```

Fiber is an **internal architecture/data structure** that allows React to manage rendering work.

---

# 7. The biggest difference

Here's the simplest comparison:

| Stack Reconciler            | Fiber Reconciler                  |
| --------------------------- | --------------------------------- |
| Older architecture          | Modern architecture               |
| Work is largely synchronous | Work can be scheduled             |
| Uses call stack heavily     | Uses Fiber data structures        |
| Hard to pause work          | Work can be interrupted/yielded   |
| Less flexible scheduling    | Supports priorities/lanes         |
| Large work can block UI     | Better ability to prioritize work |

The key idea is:

```text
Stack:
"Start working → keep going → finish"

Fiber:
"Start working → work on units → pause/yield if appropriate → resume"
```

---

# 8. How Fiber enables this

Suppose the tree is:

```text
App
├── Header
├── Main
│   ├── Article
│   └── Sidebar
└── Footer
```

React can represent each part as a Fiber.

Then it can conceptually process:

```text
App Fiber       ✓
Header Fiber    ✓
Main Fiber      ✓
Article Fiber   ✓
```

At this point, React may determine that there's other work that should be handled first.

Because the work isn't tied directly to the JavaScript call stack in the same way, React has much more control over how it traverses and schedules the work.

This is the major architectural advantage.

---

# 9. Render phase vs Commit phase

This is **extremely important** when learning Fiber.

React essentially has two major phases:

```text
              React Update
                   ↓
             Render Phase
                   ↓
            Commit Phase
```

### Render phase

React figures out:

> **"What should change?"**

This includes:

```text
Fiber work
Reconciliation
Diffing
Creating/updating Fiber tree
Determining flags
```

This phase is designed to be interruptible.

---

### Commit phase

React says:

> **"Okay, now let's actually apply those changes."**

For example:

```text
Insert DOM node
Update DOM property
Delete DOM node
Run relevant effects
```

The commit phase needs to be much more carefully controlled because it actually changes the visible UI.

A simplified picture:

```text
RENDER PHASE
─────────────
Can be interrupted

Fiber
 ↓
Reconciliation
 ↓
Diff
 ↓
Flags
 ↓
"Here's what needs to change"


COMMIT PHASE
─────────────
Apply changes

 ↓
DOM mutations
 ↓
Layout effects
 ↓
Browser
```

---

# 10. Where scheduling comes in

This is another major reason Fiber exists.

Imagine React has two pieces of work:

```text
A. User clicked a button
B. A huge list needs to be rendered
```

Which should happen first?

Obviously:

```text
User interaction
      ↓
HIGHER PRIORITY
```

while the huge list might be lower priority.

Modern React uses **lanes** to represent different categories/priorities of work.

Conceptually:

```text
High priority
     ↓
User interaction

Medium priority
     ↓
Normal updates

Lower priority
     ↓
Background/transition work
```

This allows React to make more intelligent scheduling decisions.

This is one of the major capabilities enabled by the Fiber architecture.

---

# 11. Fiber and the two trees

Another important concept you'll encounter is that React can maintain two related Fiber trees:

```text
Current Fiber Tree
        ↓
Currently committed UI

Work-in-progress Fiber Tree
        ↓
New version React is working on
```

Conceptually:

```text
CURRENT
   |
   A
  / \
 B   C


WORK-IN-PROGRESS
   |
   A'
  / \
 B'  C'
```

React can work on the new tree without immediately replacing the currently committed tree.

Once the render work is complete, React can commit the necessary changes.

The `alternate` pointer connects corresponding Fibers between the two trees.

```text
Current Fiber A
       ↕
WIP Fiber A'
```

This is a very important part of Fiber.

---

# 12. Why this is powerful

Imagine React is rendering a complicated update.

Without this architecture, you'd think:

```text
Old UI
  ↓
Do all work
  ↓
New UI
```

Fiber gives React a much more manageable model:

```text
Current Tree
     ↓
Create/modify Work-in-Progress Tree
     ↓
Perform reconciliation
     ↓
Pause/resume/schedule work where appropriate
     ↓
Finish
     ↓
Commit
     ↓
New Current Tree
```

---

# 13. One important correction

You may hear:

> "Fiber makes React asynchronous."

That's an oversimplification.

Fiber itself is an architecture that enables React to **schedule and prioritize rendering work**.

React can perform rendering work synchronously or concurrently depending on the update and the APIs involved.

So don't memorize:

```text
Fiber = asynchronous React
```

Instead remember:

```text
Fiber = architecture that allows React to
manage, prioritize, interrupt, and resume rendering work.
```

---

# 14. Stack vs Fiber — the mental model

If you remember only one thing, remember this:

### Stack Reconciler

```text
Tree
 ↓
Recursive work
 ↓
JavaScript call stack
 ↓
Keep going
 ↓
Finish
```

### Fiber Reconciler

```text
Tree
 ↓
Break into Fibers
 ↓
Unit of work
 ↓
Schedule/prioritize
 ↓
Pause/resume when appropriate
 ↓
Finish
 ↓
Commit
```

So the **fundamental reason Fiber was introduced** wasn't simply:

> "To make diffing faster."

It was primarily about giving React a much more powerful way to **schedule and control rendering work**, especially so expensive rendering work doesn't have to monopolize the main thread.

And this connects directly to what we discussed earlier:

```text
                    React
                      │
                      ▼
              Fiber Reconciler
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
     Render Phase             Commit Phase
          │                       │
          ▼                       ▼
   Reconciliation             DOM mutations
   Diffing                     Effects
   Fiber work
   Flags
   Lanes
          │
          ▼
   Work can be scheduled/
   interrupted
```

That's the core architecture you want in your head before diving deeper into **Fiber nodes, lanes, scheduling, reconciliation, `beginWork`, `completeWork`, and the commit phase**.
